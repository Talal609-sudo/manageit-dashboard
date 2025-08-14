// components/MobileNav.tsx
'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import type { Dispatch, SetStateAction } from 'react';

type NavItem = { href: string; label: string };
type Props = {
  open: boolean;
  setOpen: Dispatch<SetStateAction<boolean>>;
  nav: NavItem[];
};

export default function MobileNav(props: Props) {
  const { open, nav } = props; // note: we don't destructure setOpen here
  const pathname = usePathname();
  const closeMenu = () => props.setOpen(false);

  return (
    <div id="mobile-menu" hidden={!open} className="md:hidden container mt-2">
      <nav aria-label="Mobile" className="card px-3 py-3">
        <ul className="flex flex-col">
          {nav.map((item) => (
            <li key={item.href}>
              <Link
                href={item.href}
                onClick={closeMenu}
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