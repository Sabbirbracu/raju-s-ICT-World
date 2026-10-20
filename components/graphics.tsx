// Hand-built SVG graphics in Razu's ICT World brand colours (royal blue, red, sun-yellow).
type P = { className?: string };

/** Brand mark: graduation cap with circuit antenna sitting on a wired globe. */
export function LogoMark({ className }: P) {
  return (
    <svg viewBox="0 0 120 120" className={className} aria-hidden>
      <circle cx="60" cy="60" r="58" fill="#fff" />
      <circle cx="60" cy="60" r="58" fill="none" stroke="#1f3fb8" strokeWidth="3" />
      {/* globe */}
      <clipPath id="lm-globe">
        <path d="M24 92a36 36 0 0 1 72 0z" />
      </clipPath>
      <path d="M24 92a36 36 0 0 1 72 0z" fill="#1f3fb8" />
      <g clipPath="url(#lm-globe)" stroke="#fff" strokeWidth="2" fill="none" opacity=".9">
        <ellipse cx="60" cy="92" rx="14" ry="36" />
        <ellipse cx="60" cy="92" rx="28" ry="36" />
        <path d="M60 56v36M24 80h72M30 68h60" />
      </g>
      <path d="M18 92h84" stroke="#e11d2e" strokeWidth="4" strokeLinecap="round" />
      {/* cap */}
      <path d="M22 46 60 32l38 14-38 14z" fill="#0b1650" />
      <path d="M40 53v9c0 4 9 7 20 7s20-3 20-7v-9L60 60z" fill="#12207a" />
      <path d="M92 48v14" stroke="#0b1650" strokeWidth="3" strokeLinecap="round" />
      <rect x="89" y="60" width="6" height="9" rx="2" fill="#ffd21f" />
      {/* circuit antenna */}
      <g stroke="#1f3fb8" strokeWidth="2.4" fill="#fff" strokeLinecap="round">
        <path d="M60 36V14M52 38V24l-6-6M68 38V24l6-6" fill="none" />
        <circle cx="60" cy="12" r="3.5" />
        <circle cx="45" cy="16" r="3.5" />
        <circle cx="75" cy="16" r="3.5" />
      </g>
    </svg>
  );
}

/** Yellow marker stroke, like the brush highlight on Razu Sir's posters. */
export function BrushStroke({ className }: P) {
  return (
    <svg viewBox="0 0 300 40" preserveAspectRatio="none" className={className} aria-hidden>
      <path
        d="M4 22c40-12 98-16 150-14 46 2 92 4 140-2 4 0 4 6 0 7-30 8-78 12-128 14-56 3-110 4-160 8-5 0-7-11-2-13z"
        fill="#ffd21f"
      />
    </svg>
  );
}

/** Hand-drawn red underline swoosh. */
export function Swoosh({ className }: P) {
  return (
    <svg viewBox="0 0 200 20" preserveAspectRatio="none" className={className} aria-hidden>
      <path d="M3 15C50 5 120 2 197 6" stroke="#e11d2e" strokeWidth="4" fill="none" strokeLinecap="round" />
    </svg>
  );
}

/** Decorative circuit traces for section corners. */
export function CircuitTraces({ className, color = "#1f3fb8" }: P & { color?: string }) {
  return (
    <svg viewBox="0 0 320 200" className={className} fill="none" aria-hidden>
      <g stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M0 40h80l20 20h60l20-20h60" />
        <path d="M0 100h50l30 30h90" />
        <path d="M0 160h120l20-20h80l30 30h70" />
        <path d="M200 60v-40h60" />
        <path d="M170 130v40" />
      </g>
      <g fill={color}>
        <circle cx="240" cy="40" r="5" />
        <circle cx="170" cy="130" r="5" />
        <circle cx="260" cy="20" r="5" />
        <circle cx="170" cy="170" r="5" />
        <circle cx="320" cy="170" r="5" />
      </g>
    </svg>
  );
}

/** A sparse, flowing data path used as a large background accent — never as a repeated pattern. */
export function DataFlow({
  className,
  color = "#7898ff",
  accent = "#ffd21f",
}: P & { color?: string; accent?: string }) {
  return (
    <svg viewBox="0 0 720 320" className={className} fill="none" aria-hidden>
      <path
        d="M-22 247C86 247 114 122 245 122c116 0 128 92 242 92 91 0 121-66 255-66"
        stroke={color}
        strokeWidth="1.5"
        strokeLinecap="round"
      />
      <path
        d="M38 305c58-104 136-161 230-161 125 0 153-103 279-103 65 0 119 24 195 73"
        stroke={color}
        strokeWidth="1"
        strokeLinecap="round"
        strokeDasharray="3 10"
      />
      <path
        d="M122 236c69-20 99-70 155-70 75 0 103 70 182 70 50 0 78-20 113-54"
        stroke={accent}
        strokeWidth="2"
        strokeLinecap="round"
      />
      <g fill={color}>
        <circle cx="121" cy="211" r="4" />
        <circle cx="245" cy="122" r="5" />
        <circle cx="487" cy="214" r="4" />
        <circle cx="647" cy="159" r="3.5" />
      </g>
      <g fill={accent}>
        <circle cx="277" cy="166" r="5" />
        <circle cx="572" cy="182" r="5" />
      </g>
      <g fill={color} opacity=".7">
        <rect x="87" y="285" width="28" height="2" rx="1" />
        <rect x="121" y="285" width="12" height="2" rx="1" />
        <rect x="605" y="76" width="22" height="2" rx="1" />
      </g>
    </svg>
  );
}

/** NAND gate card graphic used in the hero. */
export function NandGate({ className }: P) {
  return (
    <svg viewBox="0 0 160 80" className={className} fill="none" aria-hidden>
      <g stroke="#0b1650" strokeWidth="3" strokeLinecap="round">
        <path d="M8 26h40M8 54h40" />
        <path d="M48 12h28a28 28 0 0 1 0 56H48z" fill="#e8eeff" />
        <circle cx="111" cy="40" r="6" fill="#fff" />
        <path d="M117 40h36" />
      </g>
      <path d="M117 40h36" stroke="#e11d2e" strokeWidth="3" strokeDasharray="6 6" className="animate-dash" />
      <text x="4" y="20" fontSize="12" fontWeight="700" fill="#1f3fb8">A</text>
      <text x="4" y="74" fontSize="12" fontWeight="700" fill="#1f3fb8">B</text>
    </svg>
  );
}

/** Hero backdrop: navy field, soft glow behind the portrait, and the logo globe as a faint outline. */
export function HeroBackdrop({ className }: P) {
  const g = { cx: 1080, cy: 1040, r: 620 };
  return (
    <svg viewBox="0 0 1440 900" preserveAspectRatio="xMidYMid slice" className={className} fill="none" aria-hidden>
      <defs>
        <linearGradient id="hb-base" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#070f3a" />
          <stop offset="1" stopColor="#101d74" />
        </linearGradient>
        <radialGradient id="hb-glow" cx="1080" cy="460" r="520" gradientUnits="userSpaceOnUse">
          <stop offset="0" stopColor="#2f5be8" stopOpacity=".45" />
          <stop offset="1" stopColor="#2f5be8" stopOpacity="0" />
        </radialGradient>
        <linearGradient id="hb-globe-fade" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#fff" />
          <stop offset="1" stopColor="#fff" stopOpacity="0" />
        </linearGradient>
        <mask id="hb-globe-mask">
          <rect width="1440" height="900" fill="url(#hb-globe-fade)" />
        </mask>
        <clipPath id="hb-globe">
          <circle cx={g.cx} cy={g.cy} r={g.r} />
        </clipPath>
      </defs>

      <rect width="1440" height="900" fill="url(#hb-base)" />
      <rect width="1440" height="900" fill="url(#hb-glow)" />

      {/* the logo's globe, quiet and fading out toward the bottom */}
      <g stroke="#7aa2ff" strokeWidth="1.2" opacity=".14" mask="url(#hb-globe-mask)">
        <circle cx={g.cx} cy={g.cy} r={g.r} />
        <g clipPath="url(#hb-globe)">
          <ellipse cx={g.cx} cy={g.cy} rx={210} ry={g.r} />
          <ellipse cx={g.cx} cy={g.cy} rx={430} ry={g.r} />
          <path d={`M${g.cx} ${g.cy - g.r}V900M300 600H1800`} />
        </g>
      </g>

    </svg>
  );
}

/** Wave that closes the hero into the light page below. */
export function HeroWave({ className }: P) {
  return (
    <svg viewBox="0 0 1440 120" preserveAspectRatio="none" className={className} aria-hidden>
      <path d="M0 70C240 120 480 120 760 80S1240 10 1440 50V120H0z" fill="#f6f8fd" />
    </svg>
  );
}

/* ---------- Chapter icons (64×64, duotone) ---------- */
const I = ({ children }: { children: React.ReactNode }) => (
  <svg viewBox="0 0 64 64" className="h-full w-full" fill="none" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
    {children}
  </svg>
);

export const ChapterIcons = [
  // 1. ICT: world & Bangladesh — globe with orbiting satellite
  () => (
    <I>
      <circle cx="30" cy="34" r="18" fill="#e8eeff" stroke="#1f3fb8" strokeWidth="3" />
      <path d="M12 34h36M30 16c-7 8-7 28 0 36M30 16c7 8 7 28 0 36" stroke="#1f3fb8" strokeWidth="2.5" />
      <ellipse cx="32" cy="32" rx="28" ry="9" transform="rotate(-25 32 32)" stroke="#e11d2e" strokeWidth="2.5" />
      <circle cx="55" cy="18" r="4" fill="#ffd21f" stroke="#0b1650" strokeWidth="2" />
    </I>
  ),
  // 2. Communication & networking — connected nodes + signal
  () => (
    <I>
      <path d="M16 44 32 24l16 20M16 44h32" stroke="#1f3fb8" strokeWidth="3" />
      <circle cx="32" cy="24" r="6" fill="#e11d2e" />
      <circle cx="16" cy="44" r="6" fill="#e8eeff" stroke="#1f3fb8" strokeWidth="3" />
      <circle cx="48" cy="44" r="6" fill="#e8eeff" stroke="#1f3fb8" strokeWidth="3" />
      <path d="M24 12a12 12 0 0 1 16 0M20 7a18 18 0 0 1 24 0" stroke="#ffb800" strokeWidth="3" />
    </I>
  ),
  // 3. Number system & digital device — AND gate with bits
  () => (
    <I>
      <path d="M18 16h14a16 16 0 0 1 0 32H18z" fill="#e8eeff" stroke="#1f3fb8" strokeWidth="3" />
      <path d="M6 24h12M6 40h12M48 32h10" stroke="#0b1650" strokeWidth="3" />
      <text x="25" y="38" fontSize="14" fontWeight="800" fill="#e11d2e">&amp;</text>
      <text x="44" y="22" fontSize="11" fontWeight="800" fill="#1f3fb8">10</text>
    </I>
  ),
  // 4. Web design & HTML — browser window with tag
  () => (
    <I>
      <rect x="8" y="12" width="48" height="40" rx="6" fill="#e8eeff" stroke="#1f3fb8" strokeWidth="3" />
      <path d="M8 22h48" stroke="#1f3fb8" strokeWidth="3" />
      <circle cx="14" cy="17" r="1.6" fill="#e11d2e" />
      <circle cx="20" cy="17" r="1.6" fill="#ffd21f" />
      <path d="m26 30-6 7 6 7M38 30l6 7-6 7M34 28l-4 18" stroke="#e11d2e" strokeWidth="3" />
    </I>
  ),
  // 5. Programming (C) — terminal with braces
  () => (
    <I>
      <rect x="8" y="12" width="48" height="40" rx="6" fill="#0b1650" />
      <path d="m16 26 6 5-6 5M26 38h10" stroke="#ffd21f" strokeWidth="3" />
      <path d="M44 22c-3 0-4 2-4 4v3c0 2-1 3-3 3 2 0 3 1 3 3v3c0 2 1 4 4 4" stroke="#ff4757" strokeWidth="2.5" />
    </I>
  ),
  // 6. Database — stacked cylinder with key
  () => (
    <I>
      <ellipse cx="28" cy="16" rx="16" ry="6" fill="#e8eeff" stroke="#1f3fb8" strokeWidth="3" />
      <path d="M12 16v30c0 3.3 7.2 6 16 6s16-2.7 16-6V16" stroke="#1f3fb8" strokeWidth="3" />
      <path d="M12 26c0 3.3 7.2 6 16 6s16-2.7 16-6M12 36c0 3.3 7.2 6 16 6" stroke="#1f3fb8" strokeWidth="2.5" />
      <circle cx="48" cy="44" r="6" fill="#ffd21f" stroke="#0b1650" strokeWidth="2.5" />
      <path d="M52 48l6 6M55 51l-2 2" stroke="#0b1650" strokeWidth="2.5" />
    </I>
  ),
];

/* ---------- Small UI icons ---------- */
export const Icon = {
  phone: ({ className }: P) => (
    <svg viewBox="0 0 24 24" className={className} fill="currentColor" aria-hidden>
      <path d="M6.6 10.8a15.1 15.1 0 0 0 6.6 6.6l2.2-2.2c.3-.3.7-.4 1-.2 1.1.4 2.3.6 3.6.6.6 0 1 .4 1 1V20c0 .6-.4 1-1 1A17 17 0 0 1 3 4c0-.6.4-1 1-1h3.5c.6 0 1 .4 1 1 0 1.3.2 2.5.6 3.6.1.3 0 .7-.2 1z" />
    </svg>
  ),
  whatsapp: ({ className }: P) => (
    <svg viewBox="0 0 24 24" className={className} fill="currentColor" aria-hidden>
      <path d="M12 2a10 10 0 0 0-8.6 15.1L2 22l5-1.3A10 10 0 1 0 12 2zm0 18.2c-1.5 0-3-.4-4.3-1.2l-.3-.2-3 .8.8-2.9-.2-.3A8.2 8.2 0 1 1 12 20.2zm4.5-6.1c-.2-.1-1.5-.7-1.7-.8-.2-.1-.4-.1-.6.1l-.8 1c-.1.2-.3.2-.5.1a6.7 6.7 0 0 1-3.3-2.9c-.3-.4.3-.4.8-1.4.1-.2 0-.3 0-.4l-.8-1.8c-.2-.5-.4-.4-.6-.4h-.5c-.2 0-.4.1-.7.3-.2.3-.9.9-.9 2.2s.9 2.5 1 2.7c.1.2 1.8 2.8 4.4 3.9 1.6.7 2.3.8 3.1.6.5-.1 1.5-.6 1.7-1.2.2-.6.2-1.1.2-1.2-.1-.1-.3-.2-.5-.3z" />
    </svg>
  ),
  mail: ({ className }: P) => (
    <svg viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth="2" aria-hidden>
      <rect x="3" y="5" width="18" height="14" rx="2" />
      <path d="m3 7 9 6 9-6" />
    </svg>
  ),
  pin: ({ className }: P) => (
    <svg viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth="2" aria-hidden>
      <path d="M12 22s7-6.2 7-12a7 7 0 0 0-14 0c0 5.8 7 12 7 12z" />
      <circle cx="12" cy="10" r="2.5" />
    </svg>
  ),
  youtube: ({ className }: P) => (
    <svg viewBox="0 0 24 24" className={className} fill="currentColor" aria-hidden>
      <path d="M23 7.2a3 3 0 0 0-2.1-2.1C19 4.6 12 4.6 12 4.6s-7 0-8.9.5A3 3 0 0 0 1 7.2 31 31 0 0 0 .5 12a31 31 0 0 0 .5 4.8 3 3 0 0 0 2.1 2.1c1.9.5 8.9.5 8.9.5s7 0 8.9-.5a3 3 0 0 0 2.1-2.1c.4-1.6.5-3.2.5-4.8s-.1-3.2-.5-4.8zM9.8 15V9l5.7 3z" />
    </svg>
  ),
  check: ({ className }: P) => (
    <svg viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      <path d="m5 12 4 4 10-10" />
    </svg>
  ),
  arrow: ({ className }: P) => (
    <svg viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      <path d="M5 12h14M13 6l6 6-6 6" />
    </svg>
  ),
  clock: ({ className }: P) => (
    <svg viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" aria-hidden>
      <circle cx="12" cy="12" r="9" />
      <path d="M12 7v5l3 2" />
    </svg>
  ),
};
