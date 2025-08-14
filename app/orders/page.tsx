import AccessibleTable from '@/components/AccessibleTable'

export default function OrdersPage(){
  const headers = ['Order','Customer','Date','Total','Status','Actions'];
  const rows = Array.from({length:10}).map((_,i)=>[
    `#10${40+i}`,'Sarah Ali','2025-08-10','$120.00','Shipped',
    <button key={i} className="btn btn-ghost">View</button>
  ]);
  return (
    <div className="space-y-4">
      <div className="card p-4 flex flex-col md:flex-row md:items-end gap-3">
        <div className="grow">
          <label className="text-sm text-black/70 dark:text-white/70">Search</label>
          <input className="w-full rounded-xl border border-brand-border px-3 py-2 bg-white dark:bg-[color:var(--panel)]" placeholder="Search orders…" aria-label="Search orders" />
        </div>
        <button className="btn btn-primary">Export CSV</button>
      </div>
      <AccessibleTable caption="Recent orders" headers={headers} rows={rows} />
      <div className="flex items-center justify-between text-sm card px-4 py-3">
        <div>Rows per page: 10</div>
        <div className="flex items-center gap-2"><button className="btn btn-ghost">1</button><button className="btn btn-ghost">2</button><button className="btn btn-ghost">3</button><button className="btn btn-ghost">Next</button></div>
      </div>
    </div>
  )
}
