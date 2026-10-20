import { branches, courses, type Course } from "./site";

export type BookingInput = {
  course: string;
  branchId: string;
  time: string;
  name: string;
  phone: string;
  guardian: string;
  institution: string;
  note: string;
};

export type BookingErrors = Partial<Record<"course" | "branch" | "time" | "name" | "phone" | "guardian" | "institution" | "note", string>>;

export type Booking = {
  course: Course;
  branchId: string;
  branchName: string;
  time: string;
  name: string;
  phone: string;
  guardian: string | null;
  institution: string;
  note: string | null;
};

const BD_PHONE = /^01[3-9]\d{8}$/;
const bnDigits = "০১২৩৪৫৬৭৮৯";

/** Bangla digits → ASCII, strip spaces/dashes and a leading +88/88. */
export const normalizePhone = (v: string) =>
  v
    .replace(/[০-৯]/g, (d) => String(bnDigits.indexOf(d)))
    .replace(/[\s-]/g, "")
    .replace(/^\+?88(?=01)/, "");

const str = (v: unknown, max: number) => (typeof v === "string" ? v.trim().slice(0, max) : "");

/** Shared by the form (instant feedback) and the API route (the real check). */
export function validateBooking(raw: Partial<Record<keyof BookingInput, unknown>>): {
  data?: Booking;
  errors: BookingErrors;
} {
  const errors: BookingErrors = {};
  const course = courses.find((c) => c.id === raw.course)?.id;
  const branch = branches.find((b) => b.id === raw.branchId);
  const time = str(raw.time, 40);
  const name = str(raw.name, 80);
  const phone = normalizePhone(str(raw.phone, 20));
  const guardian = normalizePhone(str(raw.guardian, 20));
  const institution = str(raw.institution, 120);
  const note = str(raw.note, 500);

  if (!course) errors.course = "একটি কোর্স বেছে নাও";
  if (!branch) errors.branch = "একটি শাখা বেছে নাও";
  if (!time || (branch && course && !branch.batches[course].includes(time))) errors.time = "একটি ব্যাচের সময় বেছে নাও";
  if (name.length < 2) errors.name = "তোমার নাম লেখো";
  if (!BD_PHONE.test(phone)) errors.phone = "সঠিক মোবাইল নম্বর দাও (01XXXXXXXXX)";
  if (guardian && !BD_PHONE.test(guardian)) errors.guardian = "সঠিক নম্বর দাও";
  if (institution.length < 2) errors.institution = "স্কুল/কলেজের নাম লেখো";

  if (Object.keys(errors).length) return { errors };
  return {
    errors,
    data: {
      course: course!,
      branchId: branch!.id,
      branchName: branch!.name,
      time,
      name,
      phone,
      guardian: guardian || null,
      institution,
      note: note || null,
    },
  };
}
