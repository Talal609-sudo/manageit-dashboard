// app/customers/page.tsx
'use client';

import { useMemo, useState } from 'react';

type Customer = {
  name: string;
  email: string;
  status: 'Active' | 'Inactive';
};

const DATA: Customer[] = [
  { name: 'Talal 1', email: 'example1@example.com', status: 'Active' },
  { name: 'Talal 2', email: 'example2@example.com', status: 'Active' },
  { name: 'Talal 3', email: 'example3@example.com', status: 'Inactive' },
  { name: 'Talal 4', email: 'example4@example.com', status: 'Active' },
  { name: 'Talal 5', email: 'example5@example.com', status: 'Active' },
  { name: 'Talal 6', email: 'example6@example.com', status: 'Inactive' },
  { name: 'Talal 7', email: 'example7@example.com', status: 'Active' },
  { name: 'Talal 8', email: 'example8@example.com', status: 'Active' },
];

export default function CustomersPage() {
  const [query, setQuery] = useState('');
  const [filter, setFilter] = useState<'All' | 'Active' | 'Inactive'>('All');

  const customers = useMemo(() => {
    const q = query.toLowerCase();
    return DATA.filter((c) => {
      const matchesFilter = filter === 'All' ? true : c.status === filter;
      const matchesQuery =
        c.name.toLowerCase().includes(q) || c.email.toLowerCase().includes(q);
      return matchesFilter && matchesQuery;
    });
  }, [query, filter]);

  return (
    <div className="space-y-6">
      {/* Controls */}
      <section className="card p-4 flex flex-wrap items-center gap-3" aria-label="Customer filters">
        <div className="flex items-center gap-2" role="group" aria-label="Status filter">
          {(['All', 'Active', 'Inactive'] as const).map((label) => {
            const active = filter === label;
            return (
              <button
                key={label}
                type="button"
                aria-pressed={active}
                onClick={() => setFilter(label)}
                className={`btn btn-ghost border ${active ? 'bg-black/5 dark:bg-white/10' : 'border-brand-border'
                  }`}
                title={`Show ${label.toLowerCase()} customers`}
              >
                {label}
              </button>
            );
          })}
        </div>

        <div className="grow min-w-0 sm:min-w-[240px]">
          <input
            className="w-full rounded-xl border border-brand-border px-3 py-2 bg-white dark:bg-[color:var(--panel)]"
            placeholder="Search customers…"
            aria-label="Search customers"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
        </div>

        <button className="btn btn-primary">Export CSV</button>
      </section>

      {/* Grid of customer cards */}
      <section aria-label="Customer list" className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
        {customers.map((c) => {
          const id = 'c-' + c.email.replace(/[^a-z0-9]/gi, '').toLowerCase();
          return (
            <article key={c.email} className="card p-4" aria-labelledby={id}>
              <div className="flex items-start justify-between gap-2">
                <div className="flex items-center gap-3">
                  <div
                    aria-hidden
                    className="h-10 w-10 rounded-full bg-brand-blue text-white grid place-items-center"
                  >
                    {c.name[0]}
                  </div>
                  <div>
                    <h3 id={id} className="font-medium">
                      {c.name}
                    </h3>
                    <p className="text-sm text-black/70 dark:text-white/70">{c.email}</p>
                  </div>
                </div>
                <span className="badge bg-emerald-100 text-emerald-700 dark:bg-emerald-400/10 dark:text-emerald-300">
                  {c.status}
                </span>
              </div>

              <div className="mt-3 flex gap-2">
                <button className="btn btn-ghost border border-brand-border">Email</button>
                <button className="btn btn-ghost border border-brand-border">Coupon</button>
              </div>
            </article>
          );
        })}

        {customers.length === 0 && (
          <p className="text-sm text-black/70 dark:text-white/70">
            No customers match your filters.
          </p>
        )}
      </section>
    </div>
  );
}