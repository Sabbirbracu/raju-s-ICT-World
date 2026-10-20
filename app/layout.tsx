import type { Metadata } from "next";
import { Anek_Bangla, Galada, Hind_Siliguri } from "next/font/google";
import "./globals.css";

const hind = Hind_Siliguri({
  variable: "--font-hind",
  subsets: ["bengali", "latin"],
  weight: ["400", "500", "600", "700"],
});
const anek = Anek_Bangla({
  variable: "--font-anek",
  subsets: ["bengali", "latin"],
  weight: ["500", "600", "700", "800"],
});
const galada = Galada({
  variable: "--font-galada",
  subsets: ["bengali", "latin"],
  weight: "400",
});

export const metadata: Metadata = {
  title: "Razu's ICT World — রাজু ভাইয়ের আইসিটি | HSC ICT Private Program, Bogura",
  description:
    "বগুড়ার কালিতলা ও জলেশ্বরীতলায় রাজু স্যারের HSC ও SSC ICT প্রাইভেট প্রোগ্রাম। ক্লাস করো, ICT সহজ করো! ভর্তির আগে ১ সপ্তাহ ফ্রি ক্লাস।",
  icons: { icon: "/icon.svg" },
  openGraph: {
    title: "Razu's ICT World — Easy ICT by Razu Sir",
    description: "HSC ICT Private Program, Bogura. ভর্তির আগে ১ সপ্তাহ ফ্রি ক্লাস।",
    images: ["/images/classroom.jpg"],
    locale: "bn_BD",
    type: "website",
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="bn">
      <body className={`${hind.variable} ${anek.variable} ${galada.variable} font-sans antialiased`}>
        {children}
      </body>
    </html>
  );
}
