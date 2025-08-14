'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';
import clsx from 'clsx';
import MobileNav from './MobileNav';

const nav = [
  { href: '/', label: 'Overview' },
  { href: '/orders', label: 'Orders' },
  { href: '/customers', label: 'Customers' },
  { href: '/reports', label: 'Reports' },
  { href: '/settings', label: 'Settings' },
];

export default function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  const [dark, setDark] = useState(false);

  // hydrate theme
  useEffect(() => {
    setMounted(true);
    const saved = typeof window !== 'undefined' ? localStorage.getItem('theme') : null;
    const sysDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
    const isDark = saved ? saved === 'dark' : sysDark;
    document.documentElement.classList.toggle('dark', isDark);
    setDark(isDark);
  }, []);

  function toggleTheme() {
    const next = !dark;
    setDark(next);
    document.documentElement.classList.toggle('dark', next);
    localStorage.setItem('theme', next ? 'dark' : 'light');
  }

  if (!mounted) return null;

  return (
    <header className="container mt-4" role="banner">
      <a href="#main" className="skip-link">Skip to content</a>
      <nav aria-label="Primary" className="card flex items-center justify-between px-4 py-3">
        <div className="flex items-center gap-2">
          <div aria-hidden className="h-8 w-8 rounded-full bg-brand.blue text-white grid place-items-center">T</div>
          <span className="text-lg font-semibold">ManageIt</span>
        </div>

        <ul className="hidden md:flex gap-8">
          {nav.map(item => (
            <li key={item.href}>
              <Link
                href={item.href}
                aria-current={pathname === item.href ? 'page' : undefined}
                className={clsx('text-sm font-medium hover:text-black/80 dark:hover:text-white/80', pathname === item.href ? 'text-black dark:text-white' : 'text-black/70 dark:text-white/70')}
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-2">
          <button type="button" onClick={toggleTheme} className="btn btn-ghost" aria-pressed={dark} aria-label="Toggle dark mode">
            {dark ? 'Dark' : 'Light'}
          </button>
          <button
            type="button"
            aria-label="Open menu"
            aria-expanded={open}
            aria-controls="mobile-menu"
            onClick={() => setOpen(v => !v)}
            className="md:hidden btn btn-ghost"
          >
            ☰
          </button>
        </div>
      </nav>
      <MobileNav open={open} setOpen={setOpen} nav={nav} />
    </header>
  );
}
