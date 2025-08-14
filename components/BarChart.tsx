export default function BarChart({ title, desc, data }: { title: string; desc: string; data: {name:string; value:number; color:string}[] }) {
  const max = Math.max(...data.map(d => d.value));
  const height = 200;
  const width = 560;
  const pad = 20;
  const barGap = 24;
  const barW = (width - pad*2 - barGap*(data.length-1)) / data.length;

  return (
    <figure className="card p-4" role="group" aria-labelledby="bar-title" aria-describedby="bar-desc">
      <figcaption id="bar-title" className="mb-1 text-sm font-semibold">{title}</figcaption>
      <p id="bar-desc" className="mb-4 text-sm text-black/70 dark:text-white/70">{desc}</p>
      <svg viewBox={`0 0 ${width} ${height+60}`} className="w-full h-64" role="img" aria-labelledby="bar-title bar-desc">
        <rect x="0" y="0" width={width} height={height+60} fill="transparent" />
        <line x1={pad} y1={height} x2={width-pad} y2={height} stroke="#DEE2E6" strokeWidth="2" />
        {data.map((d, i) => {
          const h = Math.round((d.value/max) * (height-30));
          const x = pad + i*(barW+barGap);
          const y = height - h;
          return (
            <g key={d.name}>
              <rect x={x} y={y} width={barW} height={h} rx="6" fill={d.color} />
              <text x={x + barW/2} y={height+18} textAnchor="middle" fontSize="12" fill="#6E757C">{d.name}</text>
            </g>
          )
        })}
      </svg>
    </figure>
  );
}
