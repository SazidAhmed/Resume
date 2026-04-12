'use client';

import Link from 'next/link';
import { cn } from '@/lib/utils';

interface NavigationProps {
  items: { href: string; label: string }[];
  className?: string;
}

export function Navigation({ items, className }: NavigationProps) {
  return (
    <nav className={cn('flex items-center gap-6', className)}>
      {items.map((item) => (
        <Link
          key={item.href}
          href={item.href}
          className="text-sm font-medium text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white transition-colors"
        >
          {item.label}
        </Link>
      ))}
    </nav>
  );
}
