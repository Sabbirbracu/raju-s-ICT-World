"use client";

import { createContext, useCallback, useContext, useEffect, useRef, useState } from "react";
import { Icon, LogoMark } from "./graphics";
import { branches, courses, site, type Course } from "@/lib/site";

/* ---------------------------- context ---------------------------- */

type Ctx = { openBooking: (course?: Course) => void };
const BookingContext = createContext<Ctx>({ openBooking: () => {} });
export const useBooking = () => useContext(BookingContext);

export function BookingProvider({ children }: { children: React.ReactNode }) {
  const [open, setOpen] = useState(false);
  const [initialCourse, setInitialCourse] = useState<Course>("HSC-28");

  const openBooking = useCallback((course?: Course) => {
    if (course) setInitialCourse(course);
    setOpen(true);
  }, []);

  return (
    <BookingContext.Provider value={{ openBooking }}>
      {children}
      {open && <BookingModal initialCourse={initialCourse} onClose={() => setOpen(false)} />}
    </BookingContext.Provider>
  );
}

/** Any button on the page that should open the free-class form. */
export function BookButton({
  course,
  className,
  children,
}: {
  course?: Course;
  className?: string;
  children: React.ReactNode;
}) {
  const { openBooking } = useBooking();
  return (
    <button type="button" onClick={() => openBooking(course)} className={className}>
      {children}
    </button>
  );
}

/* ----------------------------- modal ----------------------------- */

type Form = { name: string; phone: string; guardian: string; institution: string; note: string };
type Errors = Partial<Record<keyof Form | "branch" | "time", string>>;

const BD_PHONE = /^(?:\+?88)?01[3-9]\d{8}$/;
const bnDigits = "০১২৩৪৫৬৭৮৯";
const normalizePhone = (v: string) =>
  v.replace(/[০-৯]/g, (d) => String(bnDigits.indexOf(d))).replace(/[\s-]/g, "");

function BookingModal({ initialCourse, onClose }: { initialCourse: Course; onClose: () => void }) {
  const [course, setCourse] = useState<Course>(initialCourse);
  const [branchId, setBranchId] = useState<string>("");
  const [time, setTime] = useState<string>("");
  const [form, setForm] = useState<Form>({ name: "", phone: "", guardian: "", institution: "", note: "" });
  const [errors, setErrors] = useState<Errors>({});
  const [done, setDone] = useState<string | null>(null);
  const dialogRef = useRef<HTMLDivElement>(null);

  const branch = branches.find((b) => b.id === branchId);

  // lock page scroll, close on Escape, focus the dialog
  useEffect(() => {
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && onClose();
    window.addEventListener("keydown", onKey);
    dialogRef.current?.focus();
    return () => {
      document.body.style.overflow = prev;
      window.removeEventListener("keydown", onKey);
    };
  }, [onClose]);

  const set = (k: keyof Form) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm((f) => ({ ...f, [k]: e.target.value }));
    setErrors((er) => ({ ...er, [k]: undefined }));
  };

  const pickCourse = (c: Course) => {
    setCourse(c);
    setTime("");
  };
  const pickBranch = (id: string) => {
    setBranchId(id);
    setTime("");
    setErrors((er) => ({ ...er, branch: undefined }));
  };

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    const er: Errors = {};
    if (!branch) er.branch = "একটি শাখা বেছে নাও";
    if (!time) er.time = "একটি ব্যাচের সময় বেছে নাও";
    if (form.name.trim().length < 2) er.name = "তোমার নাম লেখো";
    if (!BD_PHONE.test(normalizePhone(form.phone))) er.phone = "সঠিক মোবাইল নম্বর দাও (01XXXXXXXXX)";
    if (form.guardian && !BD_PHONE.test(normalizePhone(form.guardian))) er.guardian = "সঠিক নম্বর দাও";
    if (form.institution.trim().length < 2) er.institution = "স্কুল/কলেজের নাম লেখো";
    setErrors(er);
    if (Object.keys(er).length) return;

    const message = [
      "🎓 ফ্রি ক্লাস বুকিং — Razu's ICT World",
      "",
      `কোর্স: ${course}`,
      `শাখা: ${branch!.name}`,
      `ব্যাচের সময়: ${time}`,
      "",
      `নাম: ${form.name.trim()}`,
      `মোবাইল: ${normalizePhone(form.phone)}`,
      form.guardian ? `অভিভাবকের মোবাইল: ${normalizePhone(form.guardian)}` : null,
      `স্কুল/কলেজ: ${form.institution.trim()}`,
      form.note.trim() ? `নোট: ${form.note.trim()}` : null,
    ]
      .filter((line) => line !== null)
      .join("\n");

    const url = `https://wa.me/${site.office.tel.replace("+", "")}?text=${encodeURIComponent(message)}`;
    setDone(url);
    window.open(url, "_blank", "noopener,noreferrer");
  };

  return (
    <div className="fixed inset-0 z-[60] flex items-end justify-center sm:items-center sm:p-6" role="presentation">
      <div className="absolute inset-0 bg-[#050b2e]/70 backdrop-blur-sm" onClick={onClose} />

      <div
        ref={dialogRef}
        tabIndex={-1}
        role="dialog"
        aria-modal="true"
        aria-labelledby="booking-title"
        className="relative flex max-h-[94dvh] w-full max-w-4xl flex-col overflow-hidden rounded-t-3xl bg-white text-ink shadow-2xl outline-none sm:rounded-3xl md:flex-row"
      >
        {/* summary panel */}
        <aside className="relative hidden w-[300px] shrink-0 flex-col justify-between overflow-hidden bg-navy p-7 text-white md:flex">
          <div className="pointer-events-none absolute -right-24 -top-24 h-64 w-64 rounded-full bg-royal-2/40 blur-3xl" />
          <div className="relative">
            <LogoMark className="h-14 w-14" />
            <div className="mt-5 font-script text-2xl text-sun">ফ্রি ক্লাস!</div>
            <h3 className="mt-2 font-display text-2xl font-extrabold leading-snug">
              ভর্তির আগে ১ সপ্তাহ ফ্রি ক্লাস করো
            </h3>
            <p className="mt-3 text-sm leading-relaxed text-white/65">
              ফর্ম পূরণ করলে অফিস থেকে কল করে তোমার ক্লাস কনফার্ম করা হবে।
            </p>
          </div>

          <dl className="relative mt-8 space-y-3 rounded-2xl bg-white/[0.06] p-4 text-sm ring-1 ring-white/10">
            <SummaryRow label="কোর্স" value={course} />
            <SummaryRow label="শাখা" value={branch?.name} />
            <SummaryRow label="সময়" value={time} />
          </dl>
        </aside>

        {/* form / success */}
        <div className="relative flex min-h-0 flex-1 flex-col">
          <div className="flex items-start justify-between gap-4 border-b border-navy/5 px-5 py-4 sm:px-7 sm:py-5">
            <div>
              <h2 id="booking-title" className="font-display text-xl font-extrabold text-navy sm:text-2xl">
                {done ? "বুকিং রিকোয়েস্ট তৈরি!" : "ফ্রি ক্লাস বুক করো"}
              </h2>
              {!done && <p className="mt-0.5 text-sm text-muted">মাত্র ১ মিনিট — তোমার সুবিধামতো ব্যাচ বেছে নাও</p>}
            </div>
            <button
              type="button"
              onClick={onClose}
              aria-label="বন্ধ করো"
              className="grid h-10 w-10 shrink-0 place-items-center rounded-full bg-paper text-navy transition hover:bg-sky"
            >
              <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round">
                <path d="M6 6l12 12M18 6 6 18" />
              </svg>
            </button>
          </div>

          {done ? (
            <Success url={done} course={course} branch={branch!.name} time={time} name={form.name} onClose={onClose} />
          ) : (
            <form onSubmit={submit} noValidate className="min-h-0 flex-1 space-y-7 overflow-y-auto px-5 pt-6 sm:px-7">
              {/* 1. course */}
              <fieldset>
                <Legend n="১" title="কোন কোর্সে আগ্রহী?" />
                <div className="mt-3 grid grid-cols-2 gap-3">
                  {courses.map((c) => (
                    <Choice key={c.id} active={course === c.id} onClick={() => pickCourse(c.id)}>
                      <span className="block font-display text-lg font-extrabold">{c.label}</span>
                      <span className="block text-xs text-muted">{c.sub}</span>
                    </Choice>
                  ))}
                </div>
              </fieldset>

              {/* 2. branch */}
              <fieldset>
                <Legend n="২" title="কোন শাখায় ক্লাস করবে?" />
                <div className="mt-3 grid gap-3 sm:grid-cols-2">
                  {branches.map((b) => (
                    <Choice key={b.id} active={branchId === b.id} onClick={() => pickBranch(b.id)}>
                      <span className="flex items-center gap-3">
                        <span
                          className={`grid h-10 w-10 shrink-0 place-items-center rounded-xl ${
                            branchId === b.id ? "bg-royal text-white" : "bg-sky text-royal"
                          }`}
                        >
                          <Icon.pin className="h-5 w-5" />
                        </span>
                        <span>
                          <span className="block font-bold">{b.name}</span>
                          <span className="block text-xs text-muted">
                            {b.area} · {String(b.batches[course].length).replace(/\d/g, (d) => bnDigits[+d])}টি ব্যাচ
                          </span>
                        </span>
                      </span>
                    </Choice>
                  ))}
                </div>
                <FieldError msg={errors.branch} />
              </fieldset>

              {/* 3. time */}
              <fieldset>
                <Legend n="৩" title="কোন ব্যাচের সময়?" />
                {branch ? (
                  <div className="mt-3 flex flex-wrap gap-2">
                    {branch.batches[course].map((t) => (
                      <button
                        key={t}
                        type="button"
                        aria-pressed={time === t}
                        onClick={() => {
                          setTime(t);
                          setErrors((er) => ({ ...er, time: undefined }));
                        }}
                        className={`inline-flex items-center gap-2 rounded-xl border px-4 py-2.5 text-sm font-semibold transition ${
                          time === t
                            ? "border-royal bg-royal text-white shadow-md shadow-royal/30"
                            : "border-navy/10 bg-white text-ink hover:border-royal/40 hover:bg-sky"
                        }`}
                      >
                        <Icon.clock className="h-4 w-4" /> {t}
                      </button>
                    ))}
                  </div>
                ) : (
                  <p className="mt-3 rounded-xl border border-dashed border-navy/15 px-4 py-3 text-sm text-muted">
                    আগে শাখা বেছে নাও — তারপর সেই শাখার ব্যাচগুলো দেখাবে।
                  </p>
                )}
                <FieldError msg={errors.time} />
              </fieldset>

              {/* 4. student info */}
              <fieldset>
                <Legend n="৪" title="তোমার তথ্য" />
                <div className="mt-3 grid gap-4 sm:grid-cols-2">
                  <Field label="শিক্ষার্থীর নাম" required error={errors.name} className="sm:col-span-2">
                    <input value={form.name} onChange={set("name")} autoComplete="name" placeholder="তোমার পুরো নাম" className={inputCls(errors.name)} />
                  </Field>
                  <Field label="মোবাইল নম্বর" required error={errors.phone}>
                    <input value={form.phone} onChange={set("phone")} type="tel" inputMode="tel" autoComplete="tel" placeholder="01XXXXXXXXX" className={inputCls(errors.phone)} />
                  </Field>
                  <Field label="অভিভাবকের মোবাইল" hint="(ঐচ্ছিক)" error={errors.guardian}>
                    <input value={form.guardian} onChange={set("guardian")} type="tel" inputMode="tel" placeholder="01XXXXXXXXX" className={inputCls(errors.guardian)} />
                  </Field>
                  <Field label="স্কুল / কলেজ" required error={errors.institution} className="sm:col-span-2">
                    <input value={form.institution} onChange={set("institution")} placeholder="যেমন: সরকারি আজিজুল হক কলেজ" className={inputCls(errors.institution)} />
                  </Field>
                  <Field label="কিছু জানাতে চাও?" hint="(ঐচ্ছিক)" className="sm:col-span-2">
                    <textarea value={form.note} onChange={set("note")} rows={2} placeholder="যেমন: কোন দিন থেকে শুরু করতে চাও" className={inputCls() + " resize-none"} />
                  </Field>
                </div>
              </fieldset>

              <div className="sticky bottom-0 -mx-5 border-t border-navy/5 bg-white/95 px-5 py-4 backdrop-blur sm:-mx-7 sm:px-7">
                <button
                  type="submit"
                  className="group flex w-full items-center justify-center gap-2.5 rounded-xl bg-brand-red px-6 py-3.5 text-base font-bold text-white shadow-[0_14px_36px_-12px_rgba(225,29,46,.8)] transition hover:bg-brand-red-2"
                >
                  ফ্রি ক্লাস বুক করো
                  <Icon.arrow className="h-5 w-5 transition group-hover:translate-x-1" />
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}

/* --------------------------- pieces ------------------------------ */

const inputCls = (err?: string) =>
  `w-full rounded-xl border bg-paper px-4 py-3 text-[15px] text-ink outline-none transition placeholder:text-muted/60 focus:bg-white focus:ring-4 ${
    err ? "border-brand-red/60 focus:ring-brand-red/10" : "border-navy/10 focus:border-royal focus:ring-royal/10"
  }`;

function Legend({ n, title }: { n: string; title: string }) {
  return (
    <legend className="flex items-center gap-2.5 font-display text-base font-bold text-navy">
      <span className="grid h-6 w-6 place-items-center rounded-full bg-navy text-xs text-white">{n}</span>
      {title}
    </legend>
  );
}

function Choice({ active, onClick, children }: { active: boolean; onClick: () => void; children: React.ReactNode }) {
  return (
    <button
      type="button"
      aria-pressed={active}
      onClick={onClick}
      className={`relative rounded-2xl border-2 p-4 text-left transition ${
        active ? "border-royal bg-sky/60 text-navy" : "border-navy/10 bg-white hover:border-royal/40"
      }`}
    >
      {active && (
        <span className="absolute right-3 top-3 grid h-5 w-5 place-items-center rounded-full bg-royal text-white">
          <Icon.check className="h-3 w-3" />
        </span>
      )}
      {children}
    </button>
  );
}

function Field({
  label,
  hint,
  required,
  error,
  className = "",
  children,
}: {
  label: string;
  hint?: string;
  required?: boolean;
  error?: string;
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <label className={`block ${className}`}>
      <span className="mb-1.5 block text-sm font-semibold text-ink">
        {label} {required && <span className="text-brand-red">*</span>}
        {hint && <span className="font-normal text-muted"> {hint}</span>}
      </span>
      {children}
      <FieldError msg={error} />
    </label>
  );
}

function FieldError({ msg }: { msg?: string }) {
  if (!msg) return null;
  return <span className="mt-1.5 block text-sm font-medium text-brand-red">{msg}</span>;
}

function SummaryRow({ label, value }: { label: string; value?: string }) {
  return (
    <div className="flex items-center justify-between gap-3">
      <dt className="text-white/55">{label}</dt>
      <dd className={`text-right font-semibold ${value ? "text-white" : "text-white/30"}`}>{value || "—"}</dd>
    </div>
  );
}

function Success({
  url,
  course,
  branch,
  time,
  name,
  onClose,
}: {
  url: string;
  course: string;
  branch: string;
  time: string;
  name: string;
  onClose: () => void;
}) {
  return (
    <div className="flex flex-1 flex-col items-center overflow-y-auto px-6 py-10 text-center sm:px-10">
      <span className="grid h-16 w-16 place-items-center rounded-full bg-leaf/10 text-leaf">
        <Icon.check className="h-8 w-8" />
      </span>
      <h3 className="mt-5 font-display text-2xl font-extrabold text-navy">ধন্যবাদ, {name.trim()}!</h3>
      <p className="mt-2 max-w-sm text-muted">
        WhatsApp-এ মেসেজটি <b className="text-ink">Send</b> করলেই বুকিং সম্পন্ন হবে। অফিস থেকে কল করে ক্লাস কনফার্ম করা হবে।
      </p>
      <div className="mt-6 w-full max-w-sm rounded-2xl bg-paper p-4 text-left text-sm ring-1 ring-navy/5">
        {[
          ["কোর্স", course],
          ["শাখা", branch],
          ["সময়", time],
        ].map(([k, v]) => (
          <div key={k} className="flex justify-between py-1">
            <span className="text-muted">{k}</span>
            <span className="font-semibold text-navy">{v}</span>
          </div>
        ))}
      </div>
      <a
        href={url}
        target="_blank"
        rel="noopener noreferrer"
        className="mt-6 inline-flex w-full max-w-sm items-center justify-center gap-2.5 rounded-xl bg-[#25d366] px-6 py-3.5 font-bold text-white shadow-lg shadow-[#25d366]/30 transition hover:brightness-105"
      >
        <Icon.whatsapp className="h-5 w-5" /> WhatsApp খুলে পাঠাও
      </a>
      <button type="button" onClick={onClose} className="mt-3 text-sm font-semibold text-muted hover:text-navy">
        বন্ধ করো
      </button>
    </div>
  );
}
