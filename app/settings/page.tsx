// app/settings/page.tsx
export default function SettingsPage() {
  return (
    <div className="space-y-6">
      {/* Page intro */}
      <header className="card p-4">
        <h1 className="text-lg font-semibold">Settings</h1>
        <p className="text-sm text-black/70 dark:text-white/70">
          Manage your account, security, notifications, billing, and more.
        </p>
      </header>

      {/* Collapsible settings cards */}
      <section className="grid gap-4 lg:grid-cols-2">
        {/* Account */}
        <details className="card p-4" open>
          <summary className="cursor-pointer text-sm font-semibold">Account</summary>
          <form className="mt-3 grid gap-3 sm:grid-cols-2" aria-label="Account settings">
            <label className="block">
              <span className="text-sm text-black/70 dark:text-white/70">Full name</span>
              <input className="mt-1 w-full rounded-xl border border-brand-border px-3 py-2 bg-white dark:bg-[color:var(--panel)]" placeholder="Your name" />
            </label>
            <label className="block">
              <span className="text-sm text-black/70 dark:text-white/70">Email</span>
              <input type="email" className="mt-1 w-full rounded-xl border border-brand-border px-3 py-2 bg-white dark:bg-[color:var(--panel)]" placeholder="you@example.com" />
            </label>
            <div className="sm:col-span-2">
              <button className="btn btn-primary">Save changes</button>
            </div>
          </form>
        </details>

        {/* Security */}
        <details className="card p-4">
          <summary className="cursor-pointer text-sm font-semibold">Security</summary>
          <form className="mt-3 grid gap-3" aria-label="Security settings">
            <div className="grid gap-3 sm:grid-cols-3">
              <label className="block">
                <span className="text-sm text-black/70 dark:text-white/70">Current password</span>
                <input type="password" className="mt-1 w-full rounded-xl border border-brand-border px-3 py-2 bg-white dark:bg-[color:var(--panel)]" />
              </label>
              <label className="block">
                <span className="text-sm text-black/70 dark:text-white/70">New password</span>
                <input type="password" className="mt-1 w-full rounded-xl border border-brand-border px-3 py-2 bg-white dark:bg-[color:var(--panel)]" />
              </label>
              <label className="block">
                <span className="text-sm text-black/70 dark:text-white/70">Confirm new</span>
                <input type="password" className="mt-1 w-full rounded-xl border border-brand-border px-3 py-2 bg-white dark:bg-[color:var(--panel)]" />
              </label>
            </div>

            <label className="inline-flex items-center gap-2">
              <input type="checkbox" className="h-4 w-4 rounded border-brand-border" />
              <span className="text-sm">Enable two-factor authentication</span>
            </label>

            <div className="flex gap-2">
              <button className="btn btn-primary">Update password</button>
              <button className="btn btn-ghost border border-brand-border">Sign out all sessions</button>
            </div>
          </form>
        </details>

        {/* Notifications */}
        <details className="card p-4">
          <summary className="cursor-pointer text-sm font-semibold">Notifications</summary>
          <fieldset className="mt-3 grid gap-2" aria-label="Notification preferences">
            <label className="inline-flex items-center gap-2">
              <input type="checkbox" className="h-4 w-4 rounded border-brand-border" defaultChecked />
              <span className="text-sm">Weekly email reports</span>
            </label>
            <label className="inline-flex items-center gap-2">
              <input type="checkbox" className="h-4 w-4 rounded border-brand-border" />
              <span className="text-sm">Product updates</span>
            </label>
            <label className="inline-flex items-center gap-2">
              <input type="checkbox" className="h-4 w-4 rounded border-brand-border" />
              <span className="text-sm">Marketing emails</span>
            </label>
            <div className="mt-2">
              <button className="btn btn-primary">Save preferences</button>
            </div>
          </fieldset>
        </details>

        {/* Billing (simple) */}
        <details className="card p-4" open>
          <summary className="cursor-pointer text-sm font-semibold">Billing</summary>
          <fieldset className="mt-3 grid gap-2" aria-label="Billing plan">
            <label className="inline-flex items-center gap-2">
              <input type="radio" name="plan" className="h-4 w-4" defaultChecked />
              <span className="text-sm">Basic — $9/mo</span>
            </label>
            <label className="inline-flex items-center gap-2">
              <input type="radio" name="plan" className="h-4 w-4" />
              <span className="text-sm">Pro — $19/mo</span>
            </label>
            <label className="inline-flex items-center gap-2">
              <input type="radio" name="plan" className="h-4 w-4" />
              <span className="text-sm">Business — $49/mo</span>
            </label>
            <div className="mt-2">
              <button className="btn btn-primary">Update plan</button>
            </div>
          </fieldset>
        </details>

        {/* Invoices (very simple) */}
        <details className="card p-4">
          <summary className="cursor-pointer text-sm font-semibold">Invoices</summary>
          <ul className="mt-3 divide-y divide-black/10 dark:divide-white/10">
            {[
              ['Aug 12, 2025', '#INV-1041', '$19.00', 'Paid'],
              ['Jul 12, 2025', '#INV-1040', '$19.00', 'Paid'],
              ['Jun 12, 2025', '#INV-1039', '$19.00', 'Paid'],
            ].map(([date, code, amt, status]) => (
              <li key={code as string} className="py-3 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <span className="text-sm">{date}</span>
                  <span className="text-sm text-blue-600 dark:text-blue-400">{code}</span>
                  <span className="text-sm">{amt}</span>
                  <span className="badge bg-emerald-100 text-emerald-700 dark:bg-emerald-400/10 dark:text-emerald-300">
                    {status}
                  </span>
                </div>
                <button className="btn btn-ghost border border-brand-border">Download</button>
              </li>
            ))}
          </ul>
          <div className="mt-3">
            <button className="btn btn-primary">Download all</button>
          </div>
        </details>

        {/* API & Danger zone (compact) */}
        <details className="card p-4">
          <summary className="cursor-pointer text-sm font-semibold">API & Danger zone</summary>
          <div className="mt-3 grid gap-3">
            <label className="block">
              <span className="text-sm text-black/70 dark:text-white/70">API key</span>
              <div className="mt-1 flex items-center gap-2">
                <input
                  readOnly
                  value="sk_live_••••••••••••••••••••"
                  className="w-full rounded-xl border border-brand-border px-3 py-2 bg-white dark:bg-[color:var(--panel)]"
                  aria-label="API key (masked)"
                />
                <button className="btn btn-ghost border border-brand-border">Copy</button>
              </div>
            </label>
            <div className="rounded-xl bg-black/5 dark:bg-white/5 p-3">
              <h3 className="text-sm font-semibold text-red-500">Danger zone</h3>
              <p className="text-sm text-black/70 dark:text-white/70">
                Deleting your account removes all data permanently.
              </p>
              <button className="mt-2 btn btn-ghost border border-brand-border">Delete account</button>
            </div>
          </div>
        </details>
      </section>
    </div>
  );
}