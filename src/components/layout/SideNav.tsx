'use client';

import Link from 'next/link';
import { User, Briefcase, Code, GraduationCap, Folder, Mail } from 'lucide-react';
import { cn } from '@/lib/utils';

const navItems = [
  { href: '/#about', label: 'About', icon: User },
  { href: '/#experience', label: 'Experience', icon: Briefcase },
  { href: '/#skills', label: 'Skills', icon: Code },
  { href: '/#education', label: 'Education', icon: GraduationCap },
  { href: '/portfolio', label: 'Portfolio', icon: Folder },
  { href: '/#contact', label: 'Contact', icon: Mail },
];

interface SideNavProps {
  className?: string;
}

export function SideNav({ className }: SideNavProps) {
  return (
    <nav
      className={cn(
        'fixed left-0 top-1/2 -translate-y-1/2 z-30 hidden lg:block',
        className
      )}
    >
      <ul
        className="flex flex-col gap-1 p-2 rounded-r-2xl shadow-[var(--glass-shadow)]"
        style={{
          background: 'var(--glass-bg)',
          backdropFilter: 'blur(20px) saturate(180%)',
          WebkitBackdropFilter: 'blur(20px) saturate(180%)',
          border: '1px solid var(--glass-border-subtle)',
          borderLeft: 'none',
        }}
      >
        {navItems.map(({ href, label, icon: Icon }) => (
          <li key={href}>
            <Link
              href={href}
              className="flex items-center gap-3 p-2.5 rounded-xl transition-all duration-200 group relative hover:bg-[var(--accent-subtle)] hover:text-[var(--accent)]"
              style={{ color: 'var(--text-secondary)' }}
            >
              <Icon className="w-4.5 h-4.5 w-[18px] h-[18px]" />
              {/* Tooltip */}
              <span
                className="absolute left-full ml-3 px-3 py-1.5 text-xs font-semibold rounded-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 whitespace-nowrap shadow-[var(--glass-shadow)]"
                style={{
                  background: 'var(--glass-bg-heavy)',
                  backdropFilter: 'blur(12px)',
                  WebkitBackdropFilter: 'blur(12px)',
                  border: '1px solid var(--glass-border-subtle)',
                  color: 'var(--text-primary)',
                }}
              >
                {label}
              </span>
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
