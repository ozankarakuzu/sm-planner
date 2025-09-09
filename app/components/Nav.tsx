// components/Nav.tsx
'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const links = [
  { href: '/dashboard', label: 'Dashboard' },
  { href: '/calendar', label: 'Calendar' },
  { href: '/posts', label: 'Posts' },
  { href: '/compose', label: 'Compose' },
  { href: '/analytics', label: 'Analytics' },
  { href: '/settings', label: 'Settings' },
  { href: '/login', label: 'Login' },
];

export default function Nav() {
  const pathname = usePathname();
  return (
    <nav className="flex gap-4 text-sm">
      {links.map(l => {
        const active = pathname?.startsWith(l.href);
        return (
          <Link
            key={l.href}
            href={l.href}
            className={active ? 'text-white' : 'text-neutral-400 hover:text-white'}
          >
            {l.label}
          </Link>
        );
      })}
    </nav>
  );
}
