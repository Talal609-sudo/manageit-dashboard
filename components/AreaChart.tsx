export default function AreaChart({ title, desc }: { title: string; desc: string }) {
  // Pure SVG, accessible
  return (
    <figure className="card p-4" role="group" aria-labelledby="rev-title" aria-describedby="rev-desc">
      <figcaption id="rev-title" className="mb-1 text-sm font-semibold">{title}</figcaption>
      <p id="rev-desc" className="mb-4 text-sm text-black/70 dark:text-white/70">{desc}</p>
      <svg viewBox="0 0 600 260" className="w-full h-64" role="img" aria-labelledby="rev-title rev-desc">
        <defs>
          <linearGradient id="fill" x1="0" x2="0" y1="0" y2="1">
            <stop offset="0%" stopColor="#6366F1" stopOpacity="0.35" />
            <stop offset="100%" stopColor="#6366F1" stopOpacity="0" />
          </linearGradient>
        </defs>
        <rect x="0" y="0" width="600" height="260" fill="transparent" />
        <polyline fill="url(#fill)" stroke="none"
          points="0,220 20,200 40,185 60,190 80,170 100,160 120,150 140,162 160,148 180,145 200,150 220,140 240,135 260,120 280,122 300,118 320,110 340,120 360,128 380,135 400,120 420,130 440,118 460,125 480,120 500,110 520,115 540,112 560,108 580,106 600,104 600,220" />
        <polyline fill="none" stroke="#6366F1" strokeWidth="3"
          points="0,200 20,185 40,175 60,180 80,165 100,155 120,145 140,154 160,142 180,140 200,144 220,136 240,130 260,118 280,118 300,112 320,108 340,114 360,120 380,126 400,116 420,120 440,112 460,118 480,114 500,108 520,110 540,108 560,106 580,104 600,102" />
      </svg>
    </figure>
  );
}
