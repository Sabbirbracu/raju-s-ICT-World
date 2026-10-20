export type Course = "HSC-28" | "SSC-26";

export const courses: { id: Course; label: string; sub: string }[] = [
  { id: "HSC-28", label: "HSC-28", sub: "একাদশ শ্রেণি · ICT" },
  { id: "SSC-26", label: "SSC-26", sub: "দশম শ্রেণি · ICT" },
];

// Free-class booking options. Update times here when the routine changes.
// TODO: confirm the exact batch times for each branch with Razu Sir.
export const branches: {
  id: string;
  name: string;
  area: string;
  batches: Record<Course, string[]>;
}[] = [
  {
    id: "kalitola",
    name: "কালিতলা শাখা",
    area: "কালিতলা, বগুড়া",
    batches: {
      "HSC-28": ["সকাল ৮:০০", "দুপুর ১:০০", "বিকাল ৩:০০", "সন্ধ্যা ৫:০০"],
      "SSC-26": ["সকাল ১০:০০", "বিকাল ৪:০০"],
    },
  },
  {
    id: "jaleshwaritola",
    name: "জলেশ্বরীতলা শাখা",
    area: "জলেশ্বরীতলা, বগুড়া",
    batches: {
      "HSC-28": ["সকাল ৯:০০", "দুপুর ২:০০", "বিকাল ৪:০০", "সন্ধ্যা ৬:০০"],
      "SSC-26": ["সকাল ১১:০০", "সন্ধ্যা ৭:০০"],
    },
  },
];

export const site = {
  name: "Razu's ICT World",
  nameBn: "রাজু ভাইয়ের আইসিটি",
  program: "HSC ICT Private Program",
  tagline: "Easy ICT by Razu Sir",
  address: "কালিতলা ও জলেশ্বরীতলা, বগুড়া - ৫৮০০",
  addressEn: "Kalitola & Jaleshwaritola, Bogura 5800, Bangladesh",
  office: { display: "০১৫৭৬-৭৮১২২৮", tel: "+8801576781228" },
  sir: { display: "০১৭৩৭-৩৮৮৯৫১", tel: "+8801737388951" },
  email: "razusictworld5@gmail.com",
  youtube: { handle: "@razusictworld6296", url: "https://www.youtube.com/@razusictworld6296" },
  whatsapp:
    "https://wa.me/8801576781228?text=" +
    encodeURIComponent("আসসালামু আলাইকুম স্যার, আমি ICT কোর্সের ফ্রি ক্লাস সম্পর্কে জানতে চাই।"),
  mapEmbed:
    "https://maps.google.com/maps?q=" +
    encodeURIComponent("Jaleshwaritola, Bogura 5800, Bangladesh") +
    "&z=15&output=embed",
  mapLink: "https://maps.google.com/?q=" + encodeURIComponent("Jaleshwaritola, Bogura 5800, Bangladesh"),
};
