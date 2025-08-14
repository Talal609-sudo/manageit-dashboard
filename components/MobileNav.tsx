// components/MobileNav.tsx
'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

type NavItem = { href: string; label: string };
type Props = { open: boolean; nav: NavItem[] };

export default function MobileNav({ open, nav }: Props) {
  const pathname = usePathname();
  if (!open) return null;

  return (
    <div className="container mt-2">
      <nav aria-label="Mobile" className="card px-3 py-3 max-h-[60vh] overflow-y-auto">
        <ul className="flex flex-col">
          {nav.map((item) => (
            <li key={item.href}>
              <Link
                href={item.href}
                aria-current={pathname === item.href ? 'page' : undefined}
                className="block px-3 py-2 rounded-lg hover:bg-black/5 dark:hover:bg-white/10"
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
}