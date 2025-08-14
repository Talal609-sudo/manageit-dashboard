// components/Header.tsx
'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';
import clsx from 'clsx';
import MobileNav from '@/components/MobileNav';

const nav = [
  { href: '/', label: 'Overview' },
  { href: '/orders', label: 'Orders' },
  { href: '/customers', label: 'Customers' },
  { href: '/reports', label: 'Reports' },
  { href: '/settings', label: 'Settings' },
];

export default function Header() {
  const pathname = usePathname();
  const [mounted, setMounted] = useState(false);
  const [dark, setDark] = useState(true);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    setMounted(true);
    const saved = typeof window !== 'undefined' ? localStorage.getItem('theme') : null;
    const isDark = saved ? saved === 'dark' : true;
    setDark(isDark);
    document.documentElement.classList.toggle('dark', isDark);
  }, []);

  function toggleTheme() {
    const next = !dark;
    setDark(next);
    document.documentElement.classList.toggle('dark', next);
    localStorage.setItem('theme', next ? 'dark' : 'light');
  }

  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  if (!mounted) return null;

  return (
    <header className="container mt-4" role="banner">
      <a href="#main" className="skip-link">Skip to content</a>

      {/* relative so we can absolutely pin the right controls */}
      <nav aria-label="Primary" className="card relative px-2 sm:px-4 py-3">
        <div className="flex items-center">
          {/* LEFT: Brand */}
          <span className="text-lg font-semibold">ManageIt</span>

          {/* CENTER: Desktop nav */}
          <ul className="hidden md:flex gap-8 absolute left-1/2 -translate-x-1/2">
            {nav.map(item => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  aria-current={pathname === item.href ? 'page' : undefined}
                  className={clsx(
                    'text-sm font-medium hover:text-black/80 dark:hover:text-white/80',
                    pathname === item.href ? 'text-black dark:text-white' : 'text-black/70 dark:text-white/70'
                  )}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* RIGHT: absolutely pinned to the far-right; toggle just before hamburger */}
        <div className="absolute right-2 top-1/2 -translate-y-1/2 flex items-center gap-2">
          <button
            type="button"
            onClick={toggleTheme}
            className="btn btn-ghost"
            aria-pressed={dark}
            aria-label="Toggle dark mode"
            title={dark ? 'Switch to light mode' : 'Switch to dark mode'}
          >
            {dark ? 'Dark' : 'Light'}
          </button>

          {/* Avatar on desktop only */}
          <div aria-hidden className="hidden md:grid h-8 w-8 place-items-center rounded-full bg-brand-blue text-white">
            T
          </div>

          {/* Hamburger on mobile only (rightmost) */}
          <button
            type="button"
            aria-label="Open menu"
            aria-expanded={menuOpen}
            className="md:hidden btn btn-ghost"
            onClick={() => setMenuOpen(o => !o)}
          >
            ☰
          </button>
        </div>

        {/* MOBILE PANEL below nav */}
        <div className="md:hidden absolute left-0 right-0 top-full z-20 px-2 sm:px-4">
          <MobileNav open={menuOpen} nav={nav} />
        </div>
      </nav>
    </header>
  );
}