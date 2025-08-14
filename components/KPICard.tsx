export default function KPICard({ label, value, delta, tone='pos' }:{ label:string; value:string; delta:string; tone?:'pos'|'neg' }){
  return (
    <div className="card p-4" role="group" aria-label={label}>
      <div className="text-sm text-black/70 dark:text-white/70">{label}</div>
      <div className="mt-2 text-lg font-semibold">{value}</div>
      <div className="mt-2">
        <span className={"badge " + (tone==='pos' ? 'bg-emerald-100 text-emerald-700 dark:bg-emerald-400/10 dark:text-emerald-300' : 'bg-red-100 text-red-700 dark:bg-red-400/10 dark:text-red-300')}>
          {delta}
        </span>
      </div>
    </div>
  )
}
