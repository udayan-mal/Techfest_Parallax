/* Hand drawn SVG scenery. Everything is vector, so it stays crisp at any size. */

type P = { fill?: string; className?: string };

export const Ridge = ({ fill = '#1b2440', className = '' }: P) => (
  <svg viewBox="0 0 1440 420" preserveAspectRatio="none" className={`h-full w-full ${className}`}>
    <path fill={fill} d="M0 420V268l96-52 74 40 88-72 96 56 110-96 92 60 104-44 118 84 96-56 110 72 92-48 104 64 110-76v420z" />
  </svg>
);

export const Ridge2 = ({ fill = '#141c33', className = '' }: P) => (
  <svg viewBox="0 0 1440 420" preserveAspectRatio="none" className={`h-full w-full ${className}`}>
    <path fill={fill} d="M0 420V318l120 26 96-78 110 62 122-96 108 74 116-52 128 88 104-64 120 78 116-56v220z" />
  </svg>
);

export const Ridge3 = ({ fill = '#0b1122', className = '' }: P) => (
  <svg viewBox="0 0 1440 420" preserveAspectRatio="none" className={`h-full w-full ${className}`}>
    <path fill={fill} d="M0 420V372l140-44 130 52 128-72 140 68 132-56 140 76 128-64 142 70 130-40v158z" />
  </svg>
);

export const PineRow = ({ fill = '#070b16', className = '' }: P) => (
  <svg viewBox="0 0 1440 260" preserveAspectRatio="none" className={`h-full w-full ${className}`}>
    <path fill={fill} d="M0 260V180h40l30-90 26 90h34l30-110 28 110h30l34-96 30 96h36l28-84 30 84h34l32-104 30 104h32l30-88 32 88h36l28-100 30 100h34l30-92 32 92h30l30-80 32 80h38l28-96 30 96h30l30-88 32 88h40v130z" />
  </svg>
);

export const Treeline = ({ fill = '#0a1a18', className = '' }: P) => (
  <svg viewBox="0 0 1440 300" preserveAspectRatio="xMidYMax slice" className={`h-full w-full ${className}`}>
    {Array.from({ length: 26 }).map((_, i) => {
      const x = i * 56 + 10;
      const hgt = 120 + ((i * 37) % 130);
      return (
        <g key={i} fill={fill}>
          <rect x={x + 16} y={300 - hgt * 0.34} width="7" height={hgt * 0.4} />
          <path d={`M${x + 19.5} ${300 - hgt} L${x + 48} ${300 - hgt * 0.3} L${x - 9} ${300 - hgt * 0.3} Z`} />
        </g>
      );
    })}
  </svg>
);

export const Trunks = ({ fill = '#040a09', className = '' }: P) => (
  <svg viewBox="0 0 1440 400" preserveAspectRatio="xMidYMax slice" className={`h-full w-full ${className}`}>
    {[40, 190, 330, 520, 690, 860, 1010, 1180, 1330].map((x, i) => (
      <g key={x} fill={fill}>
        <path d={`M${x} 400 L${x + 26 + i * 3} 400 L${x + 22 + i * 2} 40 L${x + 4} 40 Z`} />
        <path d={`M${x + 4} 40 L${x - 26} 130 L${x + 12} 120 Z`} />
        <path d={`M${x + 22 + i * 2} 40 L${x + 54} 150 L${x + 20} 130 Z`} />
      </g>
    ))}
  </svg>
);

export const Cloud = ({ fill = '#ffffff', className = '' }: P) => (
  <svg viewBox="0 0 600 200" preserveAspectRatio="none" className={`h-full w-full ${className}`}>
    <path fill={fill} d="M120 190c-46 0-84-30-84-68 0-34 26-62 60-67 8-42 48-73 94-73 30 0 57 14 73 36 12-6 26-10 41-10 45 0 82 30 90 70 2 0 4-1 6-1 45 0 81 30 81 67s-36 66-81 66z" />
  </svg>
);

export const Mist = ({ fill = '#cfe6e4', className = '' }: P) => (
  <svg viewBox="0 0 1440 200" preserveAspectRatio="none" className={`h-full w-full ${className}`}>
    <path fill={fill} d="M0 120c180-60 320 40 520 10s300-90 480-40 280 70 440 30v80H0z" />
  </svg>
);

export const Waves = ({ fill = '#0b3a4a', className = '' }: P) => (
  <svg viewBox="0 0 1440 220" preserveAspectRatio="none" className={`h-full w-full ${className}`}>
    <path fill={fill} d="M0 90c120 40 220-40 360-20s240 70 380 50 260-80 400-40 220 60 300 40v100H0z" />
  </svg>
);

export const Boat = ({ fill = '#04121c', className = '' }: P) => (
  <svg viewBox="0 0 240 200" className={`h-full w-full ${className}`}>
    <path fill={fill} d="M20 150h200l-26 34H46z" />
    <rect x="112" y="30" width="6" height="120" fill={fill} />
    <path d="M118 44c46 22 62 46 62 74 0 26-16 44-62 44z" fill={fill} opacity="0.92" />
    <path d="M106 52c-38 20-52 42-52 66 0 22 14 38 52 38z" fill={fill} opacity="0.75" />
  </svg>
);

export const Fish = ({ fill = '#0a2530', className = '' }: P) => (
  <svg viewBox="0 0 120 60" className={`h-full w-full ${className}`}>
    <path fill={fill} d="M6 30c14-20 40-26 62-20 10 3 18 8 24 14 8-8 18-12 28-12-8 8-12 12-12 18 0 6 4 10 12 18-10 0-20-4-28-12-6 6-14 11-24 14-22 6-48 0-62-20z" />
    <circle cx="76" cy="26" r="3" fill="#8ff0ff" />
  </svg>
);

export const Jelly = ({ fill = '#c4b5fd', className = '' }: P) => (
  <svg viewBox="0 0 200 320" className={`h-full w-full ${className}`}>
    <path fill={fill} opacity="0.9" d="M100 20c56 0 92 40 92 88 0 26-12 44-24 56H32c-12-12-24-30-24-56C8 60 44 20 100 20z" />
    <path fill={fill} opacity="0.45" d="M100 20c56 0 92 40 92 88 0 26-12 44-24 56h-24c14-14 24-32 24-56 0-48-30-80-68-88z" />
    {[40, 68, 96, 124, 152].map((x, i) => (
      <path key={x} fill="none" stroke={fill} strokeWidth="5" strokeLinecap="round" opacity={0.55 - i * 0.06}
        d={`M${x} 168 q${i % 2 ? 16 : -16} 60 0 120`} />
    ))}
    <ellipse cx="100" cy="108" rx="46" ry="16" fill="#fff" opacity="0.25" />
  </svg>
);

export const Angler = ({ fill = '#131a2e', className = '' }: P) => (
  <svg viewBox="0 0 320 200" className={`h-full w-full ${className}`}>
    <path fill={fill} d="M40 100c30-46 96-62 148-40 26 11 44 26 58 40-14 14-32 29-58 40-52 22-118 6-148-40z" />
    <path fill={fill} d="M246 100c22-14 44-22 66-24-14 18-14 30 0 48-22-2-44-10-66-24z" />
    <path fill={fill} d="M120 46l24-30 8 30zM150 158l22 30 12-28z" />
    <g fill="#fde68a">
      <path d="M108 60c0-22 8-38 22-48l6 12c-10 8-16 20-16 36z" />
      <circle cx="130" cy="12" r="9" />
    </g>
    <circle cx="130" cy="12" r="20" fill="#fde68a" opacity="0.18" />
    <g fill="#fff">
      <path d="M52 84l30 12-30 12zM52 108l30 12-30 12z" opacity="0.85" />
    </g>
    <circle cx="72" cy="92" r="5" fill="#7dd3fc" />
  </svg>
);

export const Sub = ({ fill = '#0f1626', className = '' }: P) => (
  <svg viewBox="0 0 420 200" className={`h-full w-full ${className}`}>
    <ellipse cx="210" cy="110" rx="150" ry="62" fill={fill} />
    <rect x="150" y="24" width="86" height="52" rx="18" fill={fill} />
    <rect x="176" y="0" width="34" height="30" rx="8" fill={fill} />
    <rect x="360" y="88" width="40" height="44" rx="12" fill={fill} />
    <circle cx="392" cy="110" r="18" fill="#1f2937" />
    <circle cx="392" cy="110" r="7" fill="#7dd3fc" opacity="0.8" />
    <rect x="70" y="80" width="52" height="16" rx="8" fill="#0b1220" />
    <rect x="70" y="124" width="52" height="16" rx="8" fill="#0b1220" />
    <circle cx="120" cy="92" r="16" fill="#0b1220" />
    <circle cx="120" cy="92" r="6" fill="#fde68a" opacity="0.85" />
    <path d="M60 110h-28v0" stroke="#1f2937" strokeWidth="10" strokeLinecap="round" />
  </svg>
);

export const Planet = ({ fill = '#3b2f6b', ring = '#a78bfa', className = '' }: P & { ring?: string }) => (
  <svg viewBox="0 0 600 600" className={`h-full w-full ${className}`}>
    <defs>
      <radialGradient id="pg" cx="0.35" cy="0.3" r="0.85">
        <stop offset="0%" stopColor="#8b7cf6" />
        <stop offset="55%" stopColor={fill} />
        <stop offset="100%" stopColor="#0a0a18" />
      </radialGradient>
    </defs>
    <circle cx="300" cy="300" r="210" fill="url(#pg)" />
    <ellipse cx="300" cy="300" rx="210" ry="210" fill="none" stroke="#c4b5fd" strokeWidth="2" opacity="0.25" />
    <g opacity="0.35" fill="#0a0a18">
      <ellipse cx="240" cy="230" rx="70" ry="30" />
      <ellipse cx="330" cy="330" rx="90" ry="26" />
      <ellipse cx="270" cy="400" rx="60" ry="20" />
    </g>
    <g transform="rotate(-18 300 300)">
      <ellipse cx="300" cy="300" rx="290" ry="72" fill="none" stroke={ring} strokeWidth="14" opacity="0.75" />
      <ellipse cx="300" cy="300" rx="290" ry="72" fill="none" stroke="#f0abfc" strokeWidth="3" opacity="0.5" />
    </g>
  </svg>
);

export const Satellite = ({ fill = '#cbd5e1', className = '' }: P) => (
  <svg viewBox="0 0 300 160" className={`h-full w-full ${className}`}>
    <rect x="120" y="52" width="60" height="56" rx="10" fill={fill} />
    <rect x="0" y="40" width="70" height="80" rx="4" fill="#3b82f6" opacity="0.8" />
    <rect x="230" y="40" width="70" height="80" rx="4" fill="#3b82f6" opacity="0.8" />
    <g stroke="#94a3b8" strokeWidth="3">
      <path d="M70 60h50M70 100h50M180 60h50M180 100h50" />
    </g>
    <rect x="146" y="108" width="8" height="30" fill={fill} />
    <circle cx="150" cy="146" r="14" fill="#64748b" />
    <circle cx="150" cy="146" r="5" fill="#fde68a" />
  </svg>
);

export const Bird = ({ fill = '#0b1220', className = '' }: P) => (
  <svg viewBox="0 0 60 24" className={`h-full w-full ${className}`}>
    <path fill="none" stroke={fill} strokeWidth="3" strokeLinecap="round" d="M2 16c8-12 16-12 22 0M36 16c8-12 16-12 22 0" />
  </svg>
);

export const Balloon = ({ fill = '#f43f5e', className = '' }: P) => (
  <svg viewBox="0 0 200 300" className={`h-full w-full ${className}`}>
    <path fill={fill} d="M100 10c48 0 88 40 88 92 0 34-20 62-40 78H52c-20-16-40-44-40-78C12 50 52 10 100 10z" />
    <path fill="#fff" opacity="0.35" d="M100 10c48 0 88 40 88 92 0 34-20 62-40 78h-22c22-18 40-46 40-80 0-52-26-84-66-90z" />
    <path fill="#fb7185" d="M60 96h80l-14 84H74z" opacity="0.6" />
    <rect x="82" y="182" width="36" height="26" rx="5" fill="#7c4a1e" />
    <path d="M84 180v-8M116 180v-8" stroke="#7c4a1e" strokeWidth="3" />
  </svg>
);

export const Deer = ({ fill = '#04120e', className = '' }: P) => (
  <svg viewBox="0 0 300 200" className={`h-full w-full ${className}`}>
    <path fill={fill} d="M186 62c14-6 26-18 32-34l10 12c-4 12-12 22-22 28 16 4 30 12 40 26l-12 12c-8-12-20-20-34-24-10 16-26 28-46 32l6 34h-14l-6-30c-8 2-16 4-24 4l-4 32h-14l2-38c-16-8-28-22-32-40l14-6c6 20 20 34 38 40 8-14 20-24 34-28l-6-16 12-6z" />
    <path fill={fill} d="M214 22c6-10 16-16 28-16l-2 12c-8 0-14 4-18 10z" />
  </svg>
);

export const Rocket = ({ fill = '#e2e8f0', className = '' }: P) => (
  <svg viewBox="0 0 160 320" className={`h-full w-full ${className}`}>
    <path fill={fill} d="M80 8c34 30 52 76 52 122v56H28V130C28 84 46 38 80 8z" />
    <path fill="#f43f5e" d="M28 150L4l24 24zM132 150l24 24-24 24z" />
    <circle cx="80" cy="108" r="18" fill="#0ea5e9" />
    <circle cx="80" cy="108" r="9" fill="#e0f2fe" />
    <path fill="#fb923c" d="M56 190h48l-24 60z" opacity="0.9" />
    <path fill="#fde68a" d="M66 190h28l-14 40z" />
  </svg>
);
