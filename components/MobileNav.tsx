'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function MobileNav({ open, setOpen, nav }:{ open:boolean, setOpen:(v:boolean)=>void, nav:{href:string,label:string}[] }){
  const pathname = usePathname();
  return (
    <div
      id="mobile-menu"
      hidden={!open}
      className="md:hidden container mt-2"
    >
      <nav aria-label="Mobile" className="card px-3 py-3">
        <ul className="flex flex-col">
          {nav.map(item => (
            <li key={item.href}>
              <Link href={item.href} onClick={()=>setOpen(false)}
                aria-current={pathname===item.href ? 'page' : undefined}
                className="block px-3 py-2 rounded-lg hover:bg-black/5 dark:hover:bg-white/10"
              >{item.label}</Link>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  )
}
