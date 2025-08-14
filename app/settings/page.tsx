export default function SettingsPage(){
  return (
    <div className="grid md:grid-cols-[260px_1fr] gap-4">
      <aside className="card p-4 h-fit" aria-label="Settings sections">
        <h2 className="text-sm font-semibold mb-3">Sections</h2>
        <ul className="space-y-2">
          {['Account','Preferences','Notifications','Security','Billing','Invoices','API keys','Danger zone'].map(s => (
            <li key={s}><button className="w-full text-left btn btn-ghost border border-brand-border">{s}</button></li>
          ))}
        </ul>
      </aside>

      <div className="space-y-4">
        <section className="card p-4">
          <h2 className="text-sm font-semibold mb-3">Account</h2>
          <div className="grid md:grid-cols-3 gap-3">
            <div className="md:col-span-2">
              <label className="text-sm text-black/70 dark:text-white/70">Full name</label>
              <input className="w-full rounded-xl border border-brand-border px-3 py-2 bg-white dark:bg-[color:var(--panel)]" defaultValue="Talal" />
            </div>
            <div>
              <label className="text-sm text-black/70 dark:text-white/70">Email</label>
              <input className="w-full rounded-xl border border-brand-border px-3 py-2 bg-white dark:bg-[color:var(--panel)]" defaultValue="talal@example.com" />
            </div>
          </div>
          <div className="mt-3"><button className="btn btn-primary">Save changes</button></div>
        </section>

        <section className="card p-4">
          <h2 className="text-sm font-semibold mb-3">Notifications</h2>
          <ul className="divide-y divide-brand-border">
            {[
              ['Email alerts','Orders, payouts and product updates.',true],
              ['SMS alerts','Delivery updates via SMS.',false],
              ['Push notifications','Realtime notifications in browser.',true],
            ].map(([label,desc,on]) => (
              <li key={label as string} className="flex items-center justify-between py-3">
                <div>
                  <div className="text-sm">{label}</div>
                  <div className="text-sm text-black/70 dark:text-white/70">{desc}</div>
                </div>
                <button className="btn btn-ghost border border-brand-border" aria-pressed={Boolean(on)}>{on ? 'On' : 'Off'}</button>
              </li>
            ))}
          </ul>
        </section>

        <section className="card p-4">
          <h2 className="text-sm font-semibold mb-3">Security</h2>
          <div className="space-y-4">
            <div>
              <div className="text-sm">Two‑factor authentication</div>
              <div className="text-sm text-black/70 dark:text-white/70">Add an extra layer of security to your account.</div>
              <div className="mt-2"><button className="btn btn-primary">Enable 2FA</button></div>
            </div>
            <hr className="border-brand-border" />
            <div className="flex items-center justify-between gap-3">
              <div className="rounded-xl bg-black/5 dark:bg-white/5 px-3 py-2 text-sm">Chrome · Linux · Lahore · Now</div>
              <button className="btn btn-ghost border border-brand-border">Sign out all</button>
            </div>
          </div>
        </section>

        <section className="card p-4">
          <h2 className="text-sm font-semibold mb-3">Billing</h2>
          <div className="flex flex-wrap items-end gap-3">
            <div className="badge bg-indigo-100 text-indigo-700 dark:bg-indigo-400/10 dark:text-indigo-300">Pro — $19/mo</div>
            <button className="btn btn-primary">Change plan</button>
          </div>
          <div className="mt-3 grid md:grid-cols-[1fr_auto] gap-3 items-center">
            <div className="rounded-xl border border-brand-border px-3 py-2">Visa •••• 4242 · 12/27</div>
            <button className="btn btn-ghost border border-brand-border">Update card</button>
          </div>
        </section>

        <section className="card p-4">
          <h2 className="text-sm font-semibold mb-3">Invoices</h2>
          <div className="overflow-x-auto">
            <table className="table">
              <thead><tr><th>Date</th><th>Invoice</th><th>Amount</th><th>Status</th><th>Actions</th></tr></thead>
              <tbody>
                {['Aug 12, 2025','#INV-1041','$19.00','Paid','Download',
                  'Jul 12, 2025','#INV-1040','$19.00','Paid','Download',
                  'Jun 12, 2025','#INV-1039','$19.00','Paid','Download',
                  'May 12, 2025','#INV-1038','$19.00','Paid','Download'].reduce((acc,_,i,arr)=>{
                  if(i%5===0){
                    acc.push([arr[i],arr[i+1],arr[i+2],arr[i+3],<button key={i} className="btn btn-ghost">Download</button>])
                  }
                  return acc
                },[] as any[])}
              </tbody>
            </table>
          </div>
        </section>

        <section className="card p-4">
          <h2 className="text-sm font-semibold mb-3">API keys</h2>
          <div className="grid md:grid-cols-[1fr_auto] gap-3 items-center">
            <div className="rounded-xl border border-brand-border px-3 py-2">sk_live_••••_c17a9b</div>
            <button className="btn btn-ghost border border-brand-border">Regenerate</button>
          </div>
        </section>

        <section className="card p-4">
          <h2 className="text-sm font-semibold mb-3">Danger zone</h2>
          <div className="flex items-center justify-between gap-3">
            <p className="text-sm text-black/70 dark:text-white/70">Delete your account and all data. This action is irreversible.</p>
            <button className="btn bg-red-600 text-white hover:bg-red-700">Delete account</button>
          </div>
        </section>
      </div>
    </div>
  )
}
