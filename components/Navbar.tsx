"use client";

import { useEffect, useState } from "react";
import { LogoMark, Icon } from "./graphics";
import { site } from "@/lib/site";
import { useBooking } from "./Booking";

const links = [
  { href: "#batches", label: "ব্যাচ" },
  { href: "#syllabus", label: "সিলেবাস" },
  { href: "#method", label: "পড়ানোর পদ্ধতি" },
  { href: "#gallery", label: "গ্যালারি" },
  { href: "#contact", label: "যোগাযোগ" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { openBooking } = useBooking();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all ${
        scrolled || open ? "bg-white/90 shadow-[0_8px_30px_-12px_rgba(11,22,80,.25)] backdrop-blur" : "bg-transparent"
      }`}
    >
      <nav className="mx-auto flex h-[72px] max-w-7xl items-center justify-between px-4 sm:px-6">
        <a href="#top" className="flex items-center gap-2.5" aria-label="Razu's ICT World — হোম">
          <LogoMark className="h-11 w-11 drop-shadow-sm" />
          <span className="leading-none">
            <span className={`block font-display text-lg font-extrabold tracking-tight ${scrolled || open ? "text-navy" : "text-white"}`}>
              Razu&apos;s <span className={scrolled ? "text-brand-red" : "text-brand-red-2"}>ICT</span> World
            </span>
            <span className={`mt-1 block text-[11px] font-semibold uppercase tracking-[0.14em] ${scrolled || open ? "text-muted" : "text-white/60"}`}>
              Easy ICT by Razu Sir
            </span>
          </span>
        </a>

        <ul className="hidden items-center gap-1 lg:flex">
          {links.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className={`rounded-full px-4 py-2 text-[15px] font-semibold transition ${
                  scrolled ? "text-ink/80 hover:bg-sky hover:text-royal" : "text-white/85 hover:bg-white/10 hover:text-white"
                }`}
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={() => openBooking()}
            className="hidden items-center gap-2 rounded-full bg-brand-red px-5 py-2.5 text-sm font-bold text-white shadow-lg shadow-brand-red/30 transition hover:-translate-y-0.5 hover:bg-brand-red-2 sm:inline-flex"
          >
            ফ্রি ক্লাস বুক করো <Icon.arrow className="h-4 w-4" />
          </button>
          <button
            onClick={() => setOpen((o) => !o)}
            className={`grid h-11 w-11 place-items-center rounded-xl border lg:hidden ${
              scrolled || open ? "border-navy/10 bg-white text-navy" : "border-white/20 bg-white/10 text-white"
            }`}
            aria-label="মেনু"
            aria-expanded={open}
          >
            <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round">
              {open ? <path d="M6 6l12 12M18 6 6 18" /> : <path d="M4 7h16M4 12h16M4 17h10" />}
            </svg>
          </button>
        </div>
      </nav>

      {open && (
        <div className="border-t border-navy/10 bg-white px-4 pb-5 pt-2 shadow-xl lg:hidden">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="block rounded-xl px-3 py-3 font-semibold text-ink hover:bg-sky"
            >
              {l.label}
            </a>
          ))}
          <button
            type="button"
            onClick={() => {
              setOpen(false);
              openBooking();
            }}
            className="mt-2 flex w-full items-center justify-center gap-2 rounded-xl bg-brand-red py-3 font-bold text-white"
          >
            ফ্রি ক্লাস বুক করো <Icon.arrow className="h-4 w-4" />
          </button>
          <a
            href={`tel:${site.office.tel}`}
            className="mt-2 flex items-center justify-center gap-2 rounded-xl border border-navy/10 py-3 font-bold text-navy"
          >
            <Icon.phone className="h-4 w-4" /> কল করো: {site.office.display}
          </a>
        </div>
      )}
    </header>
  );
}
