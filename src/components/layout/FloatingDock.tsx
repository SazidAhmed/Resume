'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion } from 'framer-motion';
import { User, Briefcase, Code, GraduationCap, Folder, Mail, Download, Moon, Sun } from 'lucide-react';
import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';
import { cn } from '@/lib/utils';
import { profile } from '@/data/profile';

const navItems = [
  { href: '/#about', label: 'About', icon: User },
  { href: '/#experience', label: 'Experience', icon: Briefcase },
  { href: '/#skills', label: 'Skills', icon: Code },
  { href: '/#education', label: 'Education', icon: GraduationCap },
  { href: '/portfolio', label: 'Portfolio', icon: Folder },
  { href: '/#contact', label: 'Contact', icon: Mail },
];

export function FloatingDock() {
  const { resolvedTheme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <>
      {/* Top Header for Branding (Mobile & Desktop) */}
      <header className="fixed top-0 left-0 right-0 z-40 px-6 py-4 flex justify-between items-center pointer-events-none">
        <Link
          href="/"
          className="font-bold text-lg tracking-tight pointer-events-auto"
          style={{ color: 'var(--text-primary)' }}
        >
          <span className="gradient-text">{profile.name.split(' ')[0]}</span>
          <span className="ml-1 font-light" style={{ color: 'var(--text-secondary)' }}>
            {profile.name.split(' ').slice(1).join(' ')}
          </span>
        </Link>
        {/* We can put the print resume context button top right */}
        <div className="pointer-events-auto hidden sm:block">
           <Link href="/print" className="glass px-4 py-2 rounded-full text-sm font-medium flex items-center gap-2 hover:bg-[var(--accent-subtle)] transition-colors" style={{ color: 'var(--text-primary)' }}>
             <Download className="w-4 h-4" /> Resume
           </Link>
        </div>
      </header>

      {/* Floating Bottom Dock */}
      <motion.div 
        className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50 pointer-events-auto"
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ type: 'spring', stiffness: 400, damping: 25, delay: 0.2 }}
      >
        <div 
          className="glass-heavy px-3 py-3 rounded-full flex items-center gap-2 sm:gap-4 shadow-[var(--glass-shadow-hover)]"
          style={{
             border: '1px solid var(--glass-border)',
             boxShadow: 'var(--glass-shadow-hover)'
          }}
        >
          {navItems.map((item) => {
            const isActive = pathname === item.href.split('#')[0] || (pathname === '/' && item.href.startsWith('/#')); // simple heuristic
            
            return (
              <div key={item.href} className="relative group">
                <Link
                  href={item.href}
                  className={cn(
                    "flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12 rounded-full transition-all duration-300",
                    "hover:bg-[var(--accent-subtle)] hover:scale-110",
                    isActive ? "text-[var(--accent)]" : ""
                  )}
                  style={{ color: isActive ? 'var(--accent)' : 'var(--text-secondary)' }}
                >
                  <item.icon className="w-5 h-5 sm:w-6 sm:h-6" />
                </Link>
                {/* Tooltip */}
                <span className="absolute bottom-full mb-3 left-1/2 -translate-x-1/2 px-3 py-1.5 text-xs font-semibold rounded-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 whitespace-nowrap shadow-[var(--glass-shadow)]"
                  style={{
                    background: 'var(--glass-bg-heavy)',
                    backdropFilter: 'blur(12px)',
                    border: '1px solid var(--glass-border-subtle)',
                    color: 'var(--text-primary)',
                  }}>
                  {item.label}
                </span>
              </div>
            );
          })}

          <div className="w-px h-8 bg-gray-400/20 mx-1 sm:mx-2" />

          {/* Theme Toggle */}
          <div className="relative group">
            <button
              onClick={() => setTheme(resolvedTheme === 'dark' ? 'light' : 'dark')}
              className="flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12 rounded-full transition-all duration-300 hover:bg-[var(--accent-subtle)] hover:scale-110"
              style={{ color: 'var(--text-secondary)' }}
              aria-label="Toggle theme"
            >
              {mounted && resolvedTheme === 'dark' ? (
                <Sun className="w-5 h-5 sm:w-6 sm:h-6" />
              ) : (
                <Moon className="w-5 h-5 sm:w-6 sm:h-6" />
              )}
            </button>
             <span className="absolute bottom-full mb-3 left-1/2 -translate-x-1/2 px-3 py-1.5 text-xs font-semibold rounded-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 whitespace-nowrap shadow-[var(--glass-shadow)]"
                  style={{
                    background: 'var(--glass-bg-heavy)',
                    backdropFilter: 'blur(12px)',
                    border: '1px solid var(--glass-border-subtle)',
                    color: 'var(--text-primary)',
                  }}>
                  {mounted && resolvedTheme === 'dark' ? 'Light Mode' : 'Dark Mode'}
                </span>
          </div>
        </div>
      </motion.div>
    </>
  );
}
