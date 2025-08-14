// app/orders/page.tsx
'use client';

import { useMemo, useState } from 'react';

type Status = 'Paid' | 'Pending' | 'Refunded';
type Channel = 'Web' | 'POS' | 'Wholesale';

type Order = {
  id: string;
  customer: string;
  items: number;
  total: string;
  status: Status;
  date: string;     // ISO or human
  channel: Channel;
};

const ORDERS: Order[] = [
  { id: '#1041', customer: 'Talal 1', items: 2, total: '$120', status: 'Paid', date: '2025-08-12', channel: 'Web' },
  { id: '#1040', customer: 'Talal 2', items: 3, total: '$180', status: 'Paid', date: '2025-08-11', channel: 'POS' },
  { id: '#1039', customer: 'Talal 3', items: 1, total: '$60', status: 'Pending', date: '2025-08-10', channel: 'Web' },
  { id: '#1038', customer: 'Talal 4', items: 4, total: '$240', status: 'Refunded', date: '2025-08-09', channel: 'Wholesale' },
  { id: '#1037', customer: 'Talal 5', items: 2, total: '$150', status: 'Paid', date: '2025-08-08', channel: 'Web' },
  { id: '#1036', customer: 'Talal 6', items: 5, total: '$320', status: 'Pending', date: '2025-08-07', channel: 'POS' },
  { id: '#1035', customer: 'Talal 7', items: 1, total: '$90', status: 'Paid', date: '2025-08-06', channel: 'Wholesale' },
  { id: '#1034', customer: 'Talal 8', items: 3, total: '$210', status: 'Paid', date: '2025-08-05', channel: 'Web' },
];

function statusBadge(status: Status) {
  if (status === 'Paid') {
    return 'badge bg-emerald-100 text-emerald-700 dark:bg-emerald-400/10 dark:text-emerald-300';
  }
  if (status === 'Pending') {
    return 'badge bg-amber-100 text-amber-800 dark:bg-amber-400/10 dark:text-amber-300';
  }
  return 'badge bg-rose-100 text-rose-800 dark:bg-rose-400/10 dark:text-rose-300';
}

export default function OrdersPage() {
  const [query, setQuery] = useState('');
  const [status, setStatus] = useState<'All' | Status>('All');
  const [channel, setChannel] = useState<'All' | Channel>('All');
  const [sort, setSort] = useState<'Newest' | 'Oldest' | 'Highest' | 'Lowest'>('Newest');

  const filtered = useMemo(() => {
    let rows = ORDERS.slice();

    // filter by status
    if (status !== 'All') rows = rows.filter(r => r.status === status);
    // filter by channel
    if (channel !== 'All') rows = rows.filter(r => r.channel === channel);
    // search
    const q = query.trim().toLowerCase();
    if (q) {
      rows = rows.filter(r =>
        r.id.toLowerCase().includes(q) ||
        r.customer.toLowerCase().includes(q)
      );
    }
    // sort
    rows.sort((a, b) => {
      if (sort === 'Newest') return a.date < b.date ? 1 : -1;
      if (sort === 'Oldest') return a.date > b.date ? 1 : -1;
      if (sort === 'Highest') return parseFloat(b.total.slice(1)) - parseFloat(a.total.slice(1));
      if (sort === 'Lowest') return parseFloat(a.total.slice(1)) - parseFloat(b.total.slice(1));
      return 0;
    });

    return rows;
  }, [query, status, channel, sort]);

  // quick stats (example)
  const kpi = useMemo(() => {
    const totalOrders = filtered.length;
    const paid = filtered.filter(r => r.status === 'Paid').length;
    const pending = filtered.filter(r => r.status === 'Pending').length;
    const refunded = filtered.filter(r => r.status === 'Refunded').length;
    return { totalOrders, paid, pending, refunded };
  }, [filtered]);

  return (
    <div className="space-y-6">
      {/* KPIs */}
      <section className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
        <div className="card p-4">
          <div className="text-sm text-black/70 dark:text-white/70">Orders (shown)</div>
          <div className="text-2xl font-semibold">{kpi.totalOrders}</div>
        </div>
        <div className="card p-4">
          <div className="text-sm text-black/70 dark:text-white/70">Paid</div>
          <div className="text-2xl font-semibold">{kpi.paid}</div>
        </div>
        <div className="card p-4">
          <div className="text-sm text-black/70 dark:text-white/70">Pending</div>
          <div className="text-2xl font-semibold">{kpi.pending}</div>
        </div>
        <div className="card p-4">
          <div className="text-sm text-black/70 dark:text-white/70">Refunded</div>
          <div className="text-2xl font-semibold">{kpi.refunded}</div>
        </div>
      </section>

      {/* Controls: status pills, channel select, search, sort, export */}
      <section className="card p-4 flex flex-wrap items-center gap-3" aria-label="Order controls">
        {/* Status pills */}
        <div className="flex items-center gap-2" role="group" aria-label="Status">
          {(['All', 'Paid', 'Pending', 'Refunded'] as const).map(label => {
            const active = status === label;
            return (
              <button
                key={label}
                type="button"
                aria-pressed={active}
                onClick={() => setStatus(label)}
                className={`btn btn-ghost border ${active ? 'bg-black/5 dark:bg-white/10' : 'border-brand-border'}`}
                title={`Show ${label.toString().toLowerCase()} orders`}
              >
                {label}
              </button>
            );
          })}
        </div>

        {/* Channel */}
        <select
          aria-label="Channel"
          className="rounded-xl border border-brand-border bg-white dark:bg-[color:var(--panel)] px-3 py-2 text-sm"
          value={channel}
          onChange={(e) => setChannel(e.target.value as any)}
        >
          <option>All</option>
          <option>Web</option>
          <option>POS</option>
          <option>Wholesale</option>
        </select>

        {/* Search */}
        <div className="grow min-w-[200px]">
          <input
            className="w-full rounded-xl border border-brand-border px-3 py-2 bg-white dark:bg-[color:var(--panel)]"
            placeholder="Search by order # or customer…"
            aria-label="Search orders"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
        </div>

        {/* Sort */}
        <select
          aria-label="Sort orders"
          className="rounded-xl border border-brand-border bg-white dark:bg-[color:var(--panel)] px-3 py-2 text-sm"
          value={sort}
          onChange={(e) => setSort(e.target.value as any)}
        >
          <option>Newest</option>
          <option>Oldest</option>
          <option>Highest</option>
          <option>Lowest</option>
        </select>

        {/* Export */}
        <button className="btn btn-primary">Export CSV</button>
      </section>

      {/* Orders as responsive cards (no horizontal scroll) */}
      <section aria-label="Orders list" className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
        {filtered.map(order => (
          <article key={order.id} className="card p-4 flex flex-col gap-3" aria-labelledby={`h-${order.id}`}>
            <div className="flex items-start justify-between gap-2">
              <h3 id={`h-${order.id}`} className="font-semibold">{order.id}</h3>
              <span className={statusBadge(order.status)}>{order.status}</span>
            </div>

            <div className="text-sm">
              <div className="text-black/80 dark:text-white/80">{order.customer}</div>
              <div className="text-black/60 dark:text-white/60">
                {order.items} {order.items === 1 ? 'item' : 'items'} · {order.channel} · {order.date}
              </div>
            </div>

            <div className="flex items-center justify-between">
              <div className="text-lg font-semibold">{order.total}</div>
              <div className="inline-flex gap-2">
                <button className="btn btn-ghost border border-brand-border px-3 py-1.5 text-sm">View</button>
                <button className="btn btn-ghost border border-brand-border px-3 py-1.5 text-sm">Refund</button>
              </div>
            </div>
          </article>
        ))}

        {filtered.length === 0 && (
          <p className="text-sm text-black/70 dark:text-white/70">
            No orders match your filters.
          </p>
        )}
      </section>
    </div>
  );
}