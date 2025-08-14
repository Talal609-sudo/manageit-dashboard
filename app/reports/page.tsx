import AreaChart from '@/components/AreaChart'
import BarChart from '@/components/BarChart'
import AccessibleTable from '@/components/AccessibleTable'

export default function ReportsPage(){
  return (
    <div className="space-y-6">
      <div className="card p-4 flex flex-wrap gap-3 items-end">
        <div className="space-y-1">
          <label className="text-sm text-black/70 dark:text-white/70">Date range</label>
          <button className="btn btn-ghost border border-brand-border">Last 30 days ▾</button>
        </div>
        <div className="space-y-1">
          <label className="text-sm text-black/70 dark:text-white/70">Compare to</label>
          <button className="btn btn-ghost border border-brand-border">Prev. 30 days ▾</button>
        </div>
        <div className="space-y-1">
          <label className="text-sm text-black/70 dark:text-white/70">Channel</label>
          <button className="btn btn-ghost border border-brand-border">All ▾</button>
        </div>
        <div className="grow" />
        <button className="btn btn-primary">Export CSV</button>
      </div>

      <section className="grid gap-4 lg:grid-cols-2">
        <AreaChart title="Revenue over time" desc="Last 30 days" />
        {/* Horizontal bars per your final mock */}
        <div className="card p-4">
          <h3 className="text-sm font-semibold">Orders by category</h3>
          <p className="text-sm text-black/70 dark:text-white/70 mb-3">Top categories</p>
          <ul className="space-y-3" aria-label="Orders by category">
            {[
              ['Jackets', 88, 'bg-teal-500'],
              ['Wallets', 64, 'bg-purple-500'],
              ['Bags', 52, 'bg-blue-500'],
              ['Hoodies', 40, 'bg-amber-500'],
            ].map(([name,val,cls]) => (
              <li key={name as string} className="flex items-center gap-3">
                <div className="w-28 text-sm">{name}</div>
                <div className="flex-1 h-6 rounded-full bg-black/5 dark:bg-white/10 relative overflow-hidden">
                  <div className={`h-6 ${cls} rounded-full`} style={{width: `${int(val)/88*100}%`.replace('int','')}} aria-label={`${name}: ${val}`} />
                </div>
                <span className="ml-2 text-sm">{val}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="grid gap-4 lg:grid-cols-2">
        <AccessibleTable
          caption="Top products"
          headers={['Product','Orders','Revenue']}
          rows={[
            ['Leather Jacket — Classic', '42', '$3,150'],
            ['Slim Wallet — Walnut', '31', '$1,860'],
            ['Messenger Bag — Onyx', '26', '$2,080'],
            ['Hoodie — Olive', '18', '$1,080'],
          ]}
        />
        <div className="card p-4">
          <h3 className="text-sm font-semibold">Region performance</h3>
          <div className="grid grid-cols-3 gap-3 mt-3">
            {[['EU', '$6.9k', '↑ 7.1%'], ['UK','$3.2k','↑ 4.4%'], ['USA','$2.8k','↑ 3.2%']].map((r) => (
              <div key={r[0]} className="rounded-xl bg-black/5 dark:bg-white/5 p-3">
                <div className="text-sm text-black/70 dark:text-white/70">{r[0]}</div>
                <div className="text-lg font-semibold">{r[1]}</div>
                <div className="text-sm text-emerald-600 dark:text-emerald-300">{r[2]}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
