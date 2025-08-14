import KPICard from '@/components/KPICard'
import AreaChart from '@/components/AreaChart'
import BarChart from '@/components/BarChart'
import AccessibleTable from '@/components/AccessibleTable'

export default function OverviewPage(){
  return (
    <div className="space-y-6">
      <section aria-labelledby="kpis" className="grid gap-4 md:grid-cols-4">
        <h2 id="kpis" className="sr-only">Key metrics</h2>
        <KPICard label="Revenue" value="$12,940" delta="↑ 8.2%" />
        <KPICard label="Orders" value="184" delta="↑ 5.1%" />
        <KPICard label="Avg. order value" value="$70.33" delta="↑ 3.0%" />
        <KPICard label="Refund rate" value="1.8%" delta="↓ 0.4%" tone="neg" />
      </section>

      <section className="grid gap-4 lg:grid-cols-2">
        <AreaChart title="Revenue over time" desc="Last 30 days" />
        <BarChart
          title="Orders by category"
          desc="Top categories"
          data={[
            {name:'Jackets', value:88, color:'#14B8A6'},
            {name:'Wallets', value:64, color:'#8B5CF6'},
            {name:'Bags', value:52, color:'#3B82F6'},
            {name:'Hoodies', value:40, color:'#F59E0B'}
          ]}
        />
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
