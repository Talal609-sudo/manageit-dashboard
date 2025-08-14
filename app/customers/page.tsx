import AccessibleTable from '@/components/AccessibleTable'

export default function CustomersPage(){
  const headers = ['Name','Email','Orders','Spend','Status','Actions'];
  const rows = Array.from({length:8}).map((_,i)=>[
    `Talal ${i+1}`,'example@example.com', 3+i, `$${100*(i+2)}`,
    <span key={i} className="badge bg-emerald-100 text-emerald-700 dark:bg-emerald-400/10 dark:text-emerald-300">Active</span>,
    <div key={'a'+i} className="flex gap-2"><button className="btn btn-ghost">Send email</button><button className="btn btn-ghost">Issue coupon</button></div>
  ]);
  return (
    <div className="space-y-4">
      <AccessibleTable caption="Customers" headers={headers} rows={rows} />
      <div className="flex items-center justify-between text-sm card px-4 py-3">
        <div>Rows per page: 10</div>
        <div className="flex items-center gap-2"><button className="btn btn-ghost">1</button><button className="btn btn-ghost">2</button><button className="btn btn-ghost">3</button><button className="btn btn-ghost">Next</button></div>
      </div>
    </div>
  )
}
