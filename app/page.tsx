import Image from "next/image";
import Navbar from "@/components/Navbar";
import { BookButton, BookingProvider } from "@/components/Booking";
import Reveal from "@/components/Reveal";
import {
  BrushStroke,
  ChapterIcons,
  CircuitTraces,
  DataFlow,
  Icon,
  LogoMark,
  HeroWave,
  NandGate,
  Swoosh,
} from "@/components/graphics";
import { site, type Course } from "@/lib/site";

export default function Home() {
  return (
    <BookingProvider>
      <Navbar />
      <main id="top" className="overflow-x-clip">
        <Hero />
        <Ticker />
        <Batches />
        <Syllabus />
        <Method />
        <Gallery />
        <FreeClassCta />
        <Contact />
      </main>
      <Footer />
      <FloatingWhatsApp />
    </BookingProvider>
  );
}

/* ------------------------------------------------------------------ */

function SectionHead({
  eyebrow,
  title,
  sub,
  light = false,
}: {
  eyebrow: string;
  title: React.ReactNode;
  sub?: string;
  light?: boolean;
}) {
  return (
    <Reveal className="mx-auto max-w-2xl text-center">
      <span
        className={`inline-flex items-center gap-2 rounded-full px-3.5 py-1 text-xs font-bold uppercase tracking-[0.16em] ${
          light ? "bg-white/10 text-sun" : "bg-sky text-royal"
        }`}
      >
        <span className="h-1.5 w-1.5 rounded-full bg-brand-red" /> {eyebrow}
      </span>
      <h2
        className={`mt-4 font-display text-3xl font-extrabold leading-tight sm:text-4xl md:text-[44px] ${
          light ? "text-white" : "text-navy"
        }`}
      >
        {title}
      </h2>
      {sub && <p className={`mt-4 text-lg ${light ? "text-white/70" : "text-muted"}`}>{sub}</p>}
    </Reveal>
  );
}

/* ------------------------------ HERO ------------------------------ */

function Hero() {
  return (
    <section className="hero-section relative isolate overflow-hidden pt-[72px] text-white">
      <div className="absolute inset-0 -z-20 bg-gradient-to-br from-[#070f3a] via-navy to-[#14248a]" />
      <DataFlow
        color="#7898ff"
        accent="#ffd21f"
        className="pointer-events-none absolute -right-64 top-24 -z-10 w-[720px] opacity-[0.12] sm:-right-48 md:-right-28 lg:right-0 lg:top-28 lg:w-[820px]"
      />

      <div className="relative mx-auto grid min-h-[760px] max-w-7xl items-center gap-12 px-4 pb-32 pt-10 sm:px-6 md:grid-cols-[1.08fr_.92fr] md:gap-8 md:pt-8 lg:min-h-[820px] lg:gap-16 lg:pb-40 lg:pt-12">
        <div className="relative z-10">
          <Reveal>
            <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/[0.08] px-3.5 py-1.5 text-xs font-bold tracking-wide text-white/90 shadow-[inset_0_1px_0_rgba(255,255,255,.08)] backdrop-blur-md sm:text-sm">
              <span className="relative flex h-2.5 w-2.5">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-leaf opacity-60" />
                <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-leaf" />
              </span>
              BOGURA · SSC-2026 / HSC-2028
              <span className="hidden text-white/45 sm:inline">|</span>
              <span className="hidden text-sun sm:inline">ভর্তি চলছে</span>
            </span>
          </Reveal>

          <Reveal delay={80}>
            <p className="mt-7 flex items-center gap-2 text-sm font-bold uppercase tracking-[0.2em] text-[#8ca8ff]">
              <span className="h-px w-8 bg-brand-red-2" /> Razu&apos;s ICT World
            </p>
            <h1 className="mt-3 max-w-3xl font-display text-[44px] font-extrabold leading-[1.08] tracking-[-0.025em] sm:text-[56px] md:text-[50px] lg:text-[68px] xl:text-[76px]">
              ক্লাস করো,
              <br />
              <span className="text-white">ICT </span>
              <span className="relative inline-block">
                <span className="relative z-10 text-sun">সহজ করো!</span>
                <BrushStroke className="absolute -bottom-1.5 left-0 z-0 h-[22%] w-full opacity-95" />
              </span>
            </h1>
          </Reveal>

          <Reveal delay={160}>
            <p className="mt-6 max-w-[590px] text-base leading-[1.8] text-white/68 sm:text-lg lg:text-[19px]">
              রাজু স্যারের সাথে <b className="font-semibold text-white">Number System</b> থেকে{" "}
              <b className="font-semibold text-white">C Programming</b>—প্রতিটি chapter হবে concept clear,
              আর প্রতিটি ক্লাসের সাথে থাকবে <b className="font-semibold text-sun">practice + পরীক্ষা</b>।
            </p>
          </Reveal>

          <Reveal delay={240}>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <BookButton
                className="group inline-flex items-center justify-center gap-2.5 rounded-xl bg-brand-red px-6 py-3.5 text-base font-bold text-white shadow-[0_14px_36px_-12px_rgba(225,29,46,.8)] transition hover:-translate-y-0.5 hover:bg-brand-red-2 sm:px-7 sm:py-4 sm:text-lg"
              >
                ১ সপ্তাহ ফ্রি ক্লাস বুক করো
                <Icon.arrow className="h-5 w-5 transition group-hover:translate-x-1" />
              </BookButton>
              <a
                href="#syllabus"
                className="inline-flex items-center justify-center gap-2 rounded-xl border border-white/20 bg-white/[0.04] px-6 py-3.5 text-base font-bold text-white transition hover:border-sun/70 hover:bg-white/[0.08] hover:text-sun sm:px-7 sm:py-4 sm:text-lg"
              >
                সিলেবাস দেখো
              </a>
            </div>
          </Reveal>

          <Reveal delay={320}>
            <ul className="mt-8 flex max-w-[590px] flex-wrap gap-x-6 gap-y-3 border-t border-white/10 pt-6">
              {["৬টি অধ্যায় · পূর্ণ সিলেবাস", "প্রতি ক্লাসে পরীক্ষা", "Basic to Advanced"].map((item) => (
                <li key={item} className="flex items-center gap-2 text-sm font-semibold text-white/72">
                  <span className="grid h-5 w-5 place-items-center rounded-full bg-leaf/15 text-leaf ring-1 ring-leaf/25">
                    <Icon.check className="h-3 w-3" />
                  </span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </Reveal>
        </div>

        <Reveal delay={180} className="relative mx-auto w-full max-w-[500px] md:max-w-none">
          <div className="relative mx-auto w-full max-w-[440px]">
            <div className="relative aspect-[4/5] overflow-hidden rounded-t-[220px] rounded-b-[36px] bg-navy shadow-[0_40px_90px_-30px_rgba(0,0,0,.75)] ring-1 ring-white/15">
              <Image
                src="/images/sir-hero.jpg"
                alt="রাজু ভাই — Founder, Razu's ICT World"
                fill
                priority
                sizes="(min-width: 1024px) 440px, (min-width: 768px) 42vw, 92vw"
                className="object-cover object-top"
              />
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-navy via-navy/85 to-transparent px-6 pb-9 pt-24">
                <div className="font-script text-3xl leading-none text-sun sm:text-4xl">রাজু ভাই</div>
                <div className="mt-2 text-xs font-bold uppercase tracking-[0.16em] text-white/65 sm:text-sm">
                  Founder · ICT Mentor
                </div>
              </div>
            </div>

            <div
              className="animate-float absolute -right-2 -top-5 rounded-2xl border-4 border-[#0a174f] bg-white px-3 py-2.5 text-ink shadow-2xl sm:-right-5 sm:px-4 sm:py-3"
              style={{ ["--r" as string]: "3deg" }}
            >
              <div className="flex items-center gap-2.5">
                <div className="grid h-9 w-9 place-items-center rounded-xl bg-brand-red text-sm font-black text-white sm:h-10 sm:w-10">
                  A+
                </div>
                <div>
                  <div className="text-[9px] font-bold uppercase tracking-[0.16em] text-muted">Every Class</div>
                  <div className="font-display text-xs font-extrabold text-navy sm:text-sm">ক্লাস + পরীক্ষা</div>
                </div>
              </div>
            </div>

            <div
              className="animate-float-late absolute -left-3 top-[31%] w-36 rounded-2xl bg-white p-3 text-ink shadow-[0_20px_50px_-20px_rgba(0,0,0,.9)] sm:-left-10 lg:-left-20 lg:w-44"
              style={{ ["--r" as string]: "-4deg" }}
            >
              <div className="mb-1 text-[10px] font-bold uppercase tracking-[0.15em] text-muted">Logic Gate</div>
              <NandGate className="w-full" />
              <div className="mt-0.5 text-center font-display text-xs font-extrabold text-navy sm:text-sm">
                Y = <span className="overline">A·B</span>
              </div>
            </div>

            <div
              className="animate-float absolute -right-2 bottom-[24%] rounded-2xl border border-white/15 bg-[#18399f] px-3.5 py-2.5 font-mono text-xs text-white shadow-xl sm:-right-7 sm:px-4 sm:py-3 sm:text-sm"
              style={{ ["--r" as string]: "3deg" }}
            >
              <div className="mb-0.5 text-[9px] uppercase tracking-[0.14em] text-white/55">Number System</div>
              <span className="text-[#b9caff]">(1010)</span><sub>2</sub>
              <span className="mx-1.5 text-white/40">=</span>
              <span className="font-bold text-sun">(10)</span><sub>10</sub>
            </div>

            <div
              className="animate-float-late absolute -bottom-5 left-7 rounded-2xl bg-white px-4 py-3 font-mono text-[11px] text-ink shadow-xl sm:left-12 sm:text-[13px]"
              style={{ ["--r" as string]: "-2deg" }}
            >
              <span className="text-royal">printf</span>(<span className="text-brand-red">&quot;ICT সহজ!&quot;</span>);
              <span className="animate-blink ml-0.5 inline-block h-4 w-[2px] translate-y-0.5 bg-navy" />
            </div>
          </div>
        </Reveal>
      </div>

      <HeroWave className="absolute inset-x-0 bottom-0 h-16 w-full sm:h-24" />
    </section>
  );
}

/* ----------------------------- TICKER ----------------------------- */

function Ticker() {
  const items = [
    "Number System",
    "Logic Gate",
    "Boolean Algebra",
    "HTML",
    "C Programming",
    "Database & SQL",
    "Networking",
    "Virtual Reality",
    "Flowchart",
    "Algorithm",
  ];
  return (
    <div className="relative -rotate-1 overflow-hidden bg-navy py-4 shadow-lg">
      <div className="animate-marquee flex w-max gap-10 whitespace-nowrap">
        {[...items, ...items].map((t, i) => (
          <span key={i} className="flex items-center gap-10 font-display text-lg font-bold text-white/90">
            {t}
            <span className={i % 2 ? "text-brand-red-2" : "text-sun"}>✦</span>
          </span>
        ))}
      </div>
    </div>
  );
}

/* ----------------------------- BATCHES ---------------------------- */

function Batches() {
  const batches = [
    {
      tag: "SSC-26",
      title: "SSC ICT Course",
      desc: "নবম-দশমের ICT বই একদম বেসিক থেকে — বোর্ড পরীক্ষার জন্য পূর্ণ প্রস্তুতি।",
      points: ["অধ্যায়ভিত্তিক ক্লাস", "MCQ + CQ প্র্যাকটিস", "নিয়মিত মডেল টেস্ট"],
      accent: "from-royal to-royal-2",
    },
    {
      tag: "HSC-28",
      title: "HSC ICT Private Program",
      desc: "একাদশ-দ্বাদশের পূর্ণ ICT সিলেবাস — সংখ্যা পদ্ধতি থেকে C Programming ও Database।",
      points: ["দৈনিক রুটিন অনুযায়ী ক্লাস", "প্রতি ক্লাসে পরীক্ষা", "Programming হাতে-কলমে"],
      accent: "from-brand-red to-brand-red-2",
      featured: true,
    },
  ];

  return (
    <section id="batches" className="relative py-24 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <SectionHead
          eyebrow="Running Batches"
          title={
            <>
              তোমার জন্য সঠিক <span className="text-brand-red">ব্যাচ</span> বেছে নাও
            </>
          }
          sub="সঠিক পরিকল্পনা, সফলতার পথে — প্রতিটা ব্যাচ সাজানো হয়েছে বোর্ড পরীক্ষাকে মাথায় রেখে।"
        />

        <div className="mt-14 grid gap-6 lg:grid-cols-3">
          {batches.map((b, i) => (
            <Reveal key={b.tag} delay={i * 100}>
              <article
                className={`group relative h-full overflow-hidden rounded-3xl border bg-white p-7 shadow-sm transition hover:-translate-y-1 hover:shadow-xl ${
                  b.featured ? "border-brand-red/30" : "border-navy/5"
                }`}
              >
                {b.featured && (
                  <span className="absolute right-5 top-5 rounded-full bg-sun px-3 py-1 text-xs font-bold text-navy">
                    Popular
                  </span>
                )}
                <div
                  className={`inline-flex rounded-2xl bg-gradient-to-br ${b.accent} px-4 py-2 font-display text-2xl font-extrabold text-white shadow-lg`}
                >
                  {b.tag}
                </div>
                <h3 className="mt-6 font-display text-2xl font-bold text-navy">{b.title}</h3>
                <p className="mt-3 leading-relaxed text-muted">{b.desc}</p>
                <ul className="mt-6 space-y-3">
                  {b.points.map((p) => (
                    <li key={p} className="flex items-center gap-3 font-medium text-ink">
                      <span className="grid h-6 w-6 place-items-center rounded-full bg-leaf/10 text-leaf">
                        <Icon.check className="h-3.5 w-3.5" />
                      </span>
                      {p}
                    </li>
                  ))}
                </ul>
                <BookButton
                  course={b.tag as Course}
                  className="mt-8 inline-flex items-center gap-2 font-bold text-royal transition group-hover:gap-3"
                >
                  ফ্রি ক্লাস বুক করো <Icon.arrow className="h-4 w-4" />
                </BookButton>
              </article>
            </Reveal>
          ))}

          <Reveal delay={200}>
            <article className="relative h-full overflow-hidden rounded-3xl bg-navy p-7 text-white shadow-xl">
              <CircuitTraces color="#ffd21f" className="absolute -right-16 -top-6 w-64 opacity-25" />
              <div className="relative">
                <div className="font-script text-3xl text-sun">ফ্রি ক্লাস!</div>
                <h3 className="mt-4 font-display text-3xl font-extrabold leading-snug">
                  ভর্তির আগে <span className="text-sun">১ সপ্তাহ</span> ফ্রি ক্লাস করার সুযোগ
                </h3>
                <p className="mt-4 text-white/70">
                  আগে ক্লাস করে দেখো, ভালো লাগলে তারপর ভর্তি। কোনো চাপ নেই।
                </p>
                <div className="mt-8 space-y-3">
                  <BookButton className="flex w-full items-center justify-center gap-2 rounded-2xl bg-sun px-5 py-4 font-bold text-navy shadow-lg transition hover:-translate-y-0.5">
                    ফ্রি ক্লাস বুক করো <Icon.arrow className="h-5 w-5" />
                  </BookButton>
                  <a
                    href={site.whatsapp}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-between rounded-2xl bg-white/10 px-5 py-4 transition hover:bg-white/15"
                  >
                    <span className="flex items-center gap-3">
                      <Icon.whatsapp className="h-5 w-5 text-[#25d366]" />
                      <span>
                        <span className="block text-xs text-white/60">WhatsApp / অফিস</span>
                        <span className="font-display text-lg font-bold">{site.office.display}</span>
                      </span>
                    </span>
                    <Icon.arrow className="h-5 w-5 text-sun" />
                  </a>
                  <a
                    href={`tel:${site.sir.tel}`}
                    className="flex items-center justify-between rounded-2xl bg-white/10 px-5 py-4 transition hover:bg-white/15"
                  >
                    <span className="flex items-center gap-3">
                      <Icon.phone className="h-5 w-5 text-brand-red-2" />
                      <span>
                        <span className="block text-xs text-white/60">স্যার</span>
                        <span className="font-display text-lg font-bold">{site.sir.display}</span>
                      </span>
                    </span>
                    <Icon.arrow className="h-5 w-5 text-sun" />
                  </a>
                </div>
              </div>
            </article>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

/* ----------------------------- SYLLABUS --------------------------- */

const chapters = [
  {
    bn: "তথ্য ও যোগাযোগ প্রযুক্তি: বিশ্ব ও বাংলাদেশ প্রেক্ষিত",
    en: "ICT: World & Bangladesh",
    topics: ["Virtual Reality", "AI & Robotics", "Biometrics", "Nanotechnology"],
  },
  {
    bn: "কমিউনিকেশন সিস্টেমস ও নেটওয়ার্কিং",
    en: "Communication & Networking",
    topics: ["Data Transmission", "Wireless", "Topology", "Cloud Computing"],
  },
  {
    bn: "সংখ্যা পদ্ধতি ও ডিজিটাল ডিভাইস",
    en: "Number System & Digital Device",
    topics: ["Number System", "Boolean Algebra", "Logic Gate", "Adder & Encoder"],
  },
  {
    bn: "ওয়েব ডিজাইন পরিচিতি ও HTML",
    en: "Web Design & HTML",
    topics: ["HTML Tags", "Table & List", "Hyperlink", "Website Structure"],
  },
  {
    bn: "প্রোগ্রামিং ভাষা",
    en: "Programming Language (C)",
    topics: ["Algorithm", "Flowchart", "Loop & Array", "C Program"],
  },
  {
    bn: "ডাটাবেজ ম্যানেজমেন্ট সিস্টেম",
    en: "Database Management",
    topics: ["DBMS", "SQL Query", "Key & Index", "Encryption"],
  },
];

const bnDigits = ["০", "১", "২", "৩", "৪", "৫", "৬", "৭", "৮", "৯"];
const toBn = (n: number) => String(n).replace(/\d/g, (d) => bnDigits[+d]);

function Syllabus() {
  return (
    <section id="syllabus" className="paper-wash relative overflow-hidden bg-white py-24 sm:py-28">
      <DataFlow
        color="#1f3fb8"
        accent="#e11d2e"
        className="pointer-events-none absolute -left-64 top-16 w-[680px] opacity-[0.055] sm:-left-44 lg:-left-16 lg:w-[760px]"
      />
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <SectionHead
          eyebrow="HSC ICT Syllabus"
          title={
            <>
              ৬টি অধ্যায়, <span className="relative inline-block">
                <span className="relative z-10">একটাও কঠিন না</span>
                <Swoosh className="absolute -bottom-2 left-0 h-3 w-full" />
              </span>
            </>
          }
          sub="প্রতিটা চ্যাপ্টার ভেঙে ভেঙে পড়ানো হয় — যাতে মুখস্থ না, বুঝে লিখতে পারো।"
        />

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {chapters.map((c, i) => {
            const Art = ChapterIcons[i];
            return (
              <Reveal key={c.en} delay={(i % 3) * 90}>
                <article className="group relative h-full rounded-3xl border border-navy/5 bg-paper p-6 transition hover:-translate-y-1 hover:border-royal/20 hover:bg-white hover:shadow-xl">
                  <div className="flex items-start justify-between">
                    <div className="h-16 w-16 rounded-2xl bg-white p-2 shadow-sm transition group-hover:scale-105">
                      <Art />
                    </div>
                    <span className="font-display text-5xl font-extrabold text-navy/[0.07] transition group-hover:text-brand-red/15">
                      {toBn(i + 1).padStart(2, "০")}
                    </span>
                  </div>
                  <div className="mt-5 text-xs font-bold uppercase tracking-[0.14em] text-royal">
                    Chapter {i + 1} · {c.en}
                  </div>
                  <h3 className="mt-2 font-display text-xl font-bold leading-snug text-navy">{c.bn}</h3>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {c.topics.map((t) => (
                      <span key={t} className="rounded-lg bg-white px-2.5 py-1 text-xs font-semibold text-ink/70 ring-1 ring-navy/5">
                        {t}
                      </span>
                    ))}
                  </div>
                </article>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}

/* ------------------------------ METHOD ---------------------------- */

function Method() {
  const steps = [
    { t: "Concept Clear", d: "গুরুত্বপূর্ণ টপিক বোর্ডে ধাপে ধাপে বুঝিয়ে দেওয়া হয়।", c: "bg-royal" },
    { t: "Practice", d: "সাথে থাকে প্রয়োজনীয় অনুশীলন — বোর্ড প্রশ্ন ও ক্রিয়েটিভ।", c: "bg-leaf" },
    { t: "পরীক্ষা", d: "প্রতিটা ক্লাসের শেষে পরীক্ষা, যাতে দুর্বলতা সাথে সাথে ধরা পড়ে।", c: "bg-brand-red" },
    { t: "Feedback", d: "খাতা দেখে ভুলগুলো ঠিক করে দেওয়া — next ক্লাসে আরো strong।", c: "bg-sun text-navy" },
  ];

  const routine = [
    ["১:০০", "সংখ্যা পদ্ধতি", "ক্লাস + পরীক্ষা"],
    ["৩:০০", "সংখ্যা পদ্ধতি", "ক্লাস + পরীক্ষা"],
    ["৫:০০", "সংখ্যা পদ্ধতি", "ক্লাস + পরীক্ষা"],
    ["৭:০০", "ডিজিটাল ডিভাইস", "ক্লাস"],
  ];

  return (
    <section id="method" className="ink-wash relative overflow-hidden bg-navy py-24 text-white sm:py-28">
      <DataFlow
        color="#87a5ff"
        accent="#ffd21f"
        className="pointer-events-none absolute -right-56 top-12 w-[760px] opacity-[0.13] sm:-right-36 lg:-right-8 lg:w-[860px]"
      />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6">
        <SectionHead
          light
          eyebrow="How We Teach"
          title={
            <>
              শুধু ক্লাস না — <span className="text-sun">ক্লাস + পরীক্ষা</span>
            </>
          }
          sub="রাজু স্যারের ক্লাসে প্রতিটা সকাল হয় নতুন কিছু শেখার গল্প।"
        />

        <div className="mt-16 grid items-center gap-12 lg:grid-cols-2">
          <ol className="relative space-y-5">
            <span className="absolute bottom-6 left-[27px] top-6 w-px border-l-2 border-dashed border-white/15" />
            {steps.map((s, i) => (
              <Reveal key={s.t} delay={i * 90}>
                <li className="relative flex gap-5">
                  <span className={`relative z-10 grid h-14 w-14 shrink-0 place-items-center rounded-2xl font-display text-xl font-extrabold shadow-lg ${s.c}`}>
                    {toBn(i + 1)}
                  </span>
                  <div className="rounded-2xl bg-white/5 p-5 ring-1 ring-white/10 backdrop-blur">
                    <h3 className="font-display text-xl font-bold">{s.t}</h3>
                    <p className="mt-1 text-white/70">{s.d}</p>
                  </div>
                </li>
              </Reveal>
            ))}
          </ol>

          {/* routine board, styled after the daily routine posters */}
          <Reveal delay={150}>
            <div className="relative rotate-1 rounded-[28px] bg-white p-5 text-ink shadow-2xl sm:p-7">
              <div className="flex flex-wrap items-center justify-between gap-3">
                <div>
                  <div className="font-display text-3xl font-extrabold text-navy">
                    HSC-<span className="text-brand-red">28</span>
                  </div>
                  <div className="relative mt-1 inline-block font-display text-lg font-bold text-navy">
                    <BrushStroke className="absolute inset-x-0 bottom-0 -z-0 h-1/2 w-full" />
                    <span className="relative">আজকের পড়ানোর রুটিন</span>
                  </div>
                </div>
                <div className="font-script -rotate-6 text-xl text-brand-red">সঠিক পরিকল্পনা সফলতার পথে...</div>
              </div>

              <div className="mt-6 overflow-hidden rounded-2xl ring-1 ring-navy/10">
                <div className="grid grid-cols-[0.8fr_1.3fr_1.3fr] text-center text-sm font-bold text-white sm:text-base">
                  <div className="bg-royal py-3">সময়</div>
                  <div className="bg-leaf py-3">বিষয়</div>
                  <div className="bg-brand-red py-3">কার্যক্রম</div>
                </div>
                {routine.map(([t, s, a], i) => (
                  <div key={i} className="grid grid-cols-[0.8fr_1.3fr_1.3fr] border-t border-navy/5 text-center text-sm font-semibold sm:text-base">
                    <div className="flex items-center justify-center gap-1.5 bg-royal/[0.06] py-3 text-navy">
                      <Icon.clock className="h-4 w-4 text-royal" /> {t}
                    </div>
                    <div className="bg-leaf/[0.07] py-3">{s}</div>
                    <div className="bg-brand-red/[0.06] py-3">{a}</div>
                  </div>
                ))}
              </div>
              <p className="mt-4 text-center text-xs text-muted">* নমুনা রুটিন — প্রতিদিনের রুটিন ফেসবুক পেজে দেওয়া হয়</p>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

/* ----------------------------- GALLERY ---------------------------- */

function Gallery() {
  return (
    <section id="gallery" className="relative py-24 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <SectionHead
          eyebrow="Moments"
          title={
            <>
              ক্লাসরুম থেকে <span className="text-royal">Celebration</span>
            </>
          }
          sub="AC ক্লাসরুম, মনোযোগী স্টুডেন্ট আর সাফল্য উদযাপন — এটাই Razu's ICT World পরিবার।"
        />

        <div className="mt-14 grid auto-rows-[220px] grid-cols-2 gap-4 md:auto-rows-[240px] md:grid-cols-4">
          <Photo src="/images/classroom.jpg" alt="রাজু স্যারের ক্লাসরুম" label="প্রতিদিনের ক্লাস" className="col-span-2 row-span-2" />
          <Photo src="/images/ssc-celebration.jpg" alt="SSC Grand Celebration 2026" label="SSC Grand Celebration 2026" className="col-span-2" />
          <Photo src="/images/sir-with-student.jpg" alt="রাজু স্যার ও শিক্ষার্থী" label="পুরস্কার বিতরণ" />
          <Photo src="/images/gpa5-cards.jpg" alt="GPA-5 Achiever 2026 কার্ড" label="GPA-5 Achievers" className="md:row-span-2" pos="object-center" />
          <Photo src="/images/celebration-stage.jpg" alt="Celebration stage" label="Grand Celebration" className="col-span-2 md:col-span-3" pos="object-[50%_40%]" />
        </div>
      </div>
    </section>
  );
}

function Photo({
  src,
  alt,
  label,
  className = "",
  pos = "object-center",
}: {
  src: string;
  alt: string;
  label: string;
  className?: string;
  pos?: string;
}) {
  return (
    <figure className={`group relative overflow-hidden rounded-3xl bg-navy shadow-sm ${className}`}>
      <Image src={src} alt={alt} fill sizes="(min-width: 768px) 50vw, 100vw" className={`object-cover ${pos} transition duration-700 group-hover:scale-105`} />
      <figcaption className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-navy/85 to-transparent p-4 pt-12">
        <span className="inline-flex items-center gap-2 rounded-full bg-white/15 px-3 py-1 text-sm font-semibold text-white backdrop-blur">
          <span className="h-1.5 w-1.5 rounded-full bg-sun" /> {label}
        </span>
      </figcaption>
    </figure>
  );
}

/* --------------------------- FREE CLASS CTA ----------------------- */

function FreeClassCta() {
  return (
    <section className="px-4 sm:px-6">
      <Reveal className="relative mx-auto max-w-7xl overflow-hidden rounded-[36px] bg-gradient-to-br from-brand-red via-[#c8102e] to-navy p-8 text-white shadow-2xl sm:p-14">
        <CircuitTraces color="#ffffff" className="absolute -right-10 -top-10 w-96 opacity-15" />
        <LogoMark className="absolute -bottom-16 -right-10 hidden h-64 w-64 opacity-10 md:block" />
        <div className="relative grid items-center gap-8 lg:grid-cols-[1.4fr_1fr]">
          <div>
            <div className="font-script text-2xl text-sun">যেখানে স্বপ্ন শেখে প্রযুক্তির ভাষা</div>
            <h2 className="mt-3 font-display text-3xl font-extrabold leading-tight sm:text-5xl">
              সেরা অফারে ভর্তি হতে / ফ্রি ক্লাস করতে এখনই যোগাযোগ করো
            </h2>
            <p className="mt-4 text-lg text-white/80">স্বল্প সময়ে, সেরা সার্ভিস — সিট সীমিত।</p>
          </div>
          <div className="flex flex-col gap-3">
            <BookButton className="flex items-center justify-center gap-3 rounded-2xl bg-sun px-6 py-4 text-lg font-bold text-navy shadow-lg transition hover:-translate-y-0.5">
              ফ্রি ক্লাস বুক করো <Icon.arrow className="h-5 w-5" />
            </BookButton>
            <a
              href={site.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-3 rounded-2xl bg-white px-6 py-4 text-lg font-bold text-navy shadow-lg transition hover:-translate-y-0.5"
            >
              <Icon.whatsapp className="h-6 w-6 text-[#25d366]" /> WhatsApp: {site.office.display}
            </a>
            <a
              href={`tel:${site.sir.tel}`}
              className="flex items-center justify-center gap-3 rounded-2xl border-2 border-white/30 px-6 py-4 text-lg font-bold text-white transition hover:bg-white/10"
            >
              <Icon.phone className="h-5 w-5" /> কল করো: {site.sir.display}
            </a>
          </div>
        </div>
      </Reveal>
    </section>
  );
}

/* ----------------------------- CONTACT ---------------------------- */

function Contact() {
  const items = [
    { icon: Icon.pin, label: "ঠিকানা", value: site.address, sub: site.addressEn, href: site.mapLink },
    { icon: Icon.phone, label: "অফিস (WhatsApp)", value: site.office.display, href: `tel:${site.office.tel}` },
    { icon: Icon.phone, label: "রাজু স্যার", value: site.sir.display, href: `tel:${site.sir.tel}` },
    { icon: Icon.mail, label: "Email", value: site.email, href: `mailto:${site.email}` },
    { icon: Icon.youtube, label: "YouTube", value: site.youtube.handle, href: site.youtube.url },
  ];

  return (
    <section id="contact" className="relative py-24 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <SectionHead eyebrow="Contact" title={<>আমাদের <span className="text-brand-red">খুঁজে নাও</span></>} sub="ক্লাসে চলে আসো অথবা কল/মেসেজ দাও — উত্তর পাবে দ্রুত।" />

        <div className="mt-14 grid gap-6 lg:grid-cols-[1fr_1.2fr]">
          <Reveal>
            <ul className="space-y-3">
              {items.map((it) => (
                <li key={it.label}>
                  <a
                    href={it.href}
                    target={it.href.startsWith("http") ? "_blank" : undefined}
                    rel="noopener noreferrer"
                    className="group flex items-center gap-4 rounded-2xl border border-navy/5 bg-white p-4 shadow-sm transition hover:border-royal/20 hover:shadow-md"
                  >
                    <span className="grid h-12 w-12 shrink-0 place-items-center rounded-xl bg-sky text-royal transition group-hover:bg-royal group-hover:text-white">
                      <it.icon className="h-5 w-5" />
                    </span>
                    <span className="min-w-0">
                      <span className="block text-xs font-bold uppercase tracking-wider text-muted">{it.label}</span>
                      <span className="block break-words font-display text-lg font-bold text-navy">{it.value}</span>
                      {it.sub && <span className="block text-sm text-muted">{it.sub}</span>}
                    </span>
                  </a>
                </li>
              ))}
            </ul>
          </Reveal>
          <Reveal delay={120}>
            <div className="relative h-full min-h-[360px] overflow-hidden rounded-3xl border-4 border-white bg-sky shadow-xl">
              <iframe
                title="Razu's ICT World — বগুড়া ম্যাপ"
                src={site.mapEmbed}
                className="absolute inset-0 h-full w-full"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

/* ----------------------------- FOOTER ----------------------------- */

function Footer() {
  return (
    <footer className="relative bg-navy text-white">
      <div className="h-1.5 bg-gradient-to-r from-royal via-sun to-brand-red" />
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-14 sm:px-6 md:grid-cols-[1.4fr_1fr_1fr]">
        <div>
          <div className="flex items-center gap-3">
            <LogoMark className="h-14 w-14" />
            <div>
              <div className="font-display text-2xl font-extrabold">
                Razu&apos;s <span className="text-brand-red-2">ICT</span> World
              </div>
              <div className="text-sm text-white/60">{site.program}</div>
            </div>
          </div>
          <p className="mt-5 max-w-sm text-white/70">
            {site.nameBn} — বগুড়ায় SSC ও HSC শিক্ষার্থীদের জন্য ICT শেখার সবচেয়ে সহজ জায়গা।
          </p>
          <div className="mt-4 font-script text-xl text-sun">ক্লাস করো, ICT সহজ করো!</div>
        </div>
        <div>
          <h4 className="font-display text-lg font-bold">Quick Links</h4>
          <ul className="mt-4 space-y-2 text-white/70">
            {[
              ["#batches", "ব্যাচ"],
              ["#syllabus", "সিলেবাস"],
              ["#method", "পড়ানোর পদ্ধতি"],
              ["#gallery", "গ্যালারি"],
              ["#contact", "যোগাযোগ"],
            ].map(([h, l]) => (
              <li key={h}>
                <a href={h} className="hover:text-sun">{l}</a>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h4 className="font-display text-lg font-bold">যোগাযোগ</h4>
          <ul className="mt-4 space-y-2 text-white/70">
            <li>{site.address}</li>
            <li><a href={`tel:${site.office.tel}`} className="hover:text-sun">{site.office.display}</a></li>
            <li><a href={`mailto:${site.email}`} className="break-all hover:text-sun">{site.email}</a></li>
            <li>
              <a href={site.youtube.url} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 hover:text-sun">
                <Icon.youtube className="h-5 w-5" /> {site.youtube.handle}
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-2 px-4 py-5 text-sm text-white/50 sm:flex-row sm:px-6">
          <span>© {new Date().getFullYear()} Razu&apos;s ICT World. All rights reserved.</span>
          <span>একজন student-এর পক্ষ থেকে, ভালোবাসা দিয়ে ❤</span>
        </div>
      </div>
    </footer>
  );
}

function FloatingWhatsApp() {
  return (
    <a
      href={site.whatsapp}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="WhatsApp এ মেসেজ দাও"
      className="fixed bottom-5 right-5 z-40 grid h-14 w-14 place-items-center rounded-full bg-[#25d366] text-white shadow-xl shadow-[#25d366]/40 transition hover:scale-110"
    >
      <Icon.whatsapp className="h-7 w-7" />
    </a>
  );
}
