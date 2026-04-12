'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';
import { Menu, X, Download } from 'lucide-react';
import { Button } from '@/components/ui';
import { profile } from '@/data/profile';
import { cn } from '@/lib/utils';

const navItems = [
  { href: '/#about', label: 'About' },
  { href: '/#experience', label: 'Experience' },
  { href: '/#skills', label: 'Skills' },
  { href: '/#education', label: 'Education' },
  { href: '/portfolio', label: 'Portfolio' },
  { href: '/#contact', label: 'Contact' },
];

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 12);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className="fixed top-0 left-0 right-0 z-40 transition-all duration-300"
      style={{
        background: scrolled
          ? 'rgba(255, 255, 255, 0.52)'
          : 'rgba(255, 255, 255, 0.38)',
        backdropFilter: 'blur(28px) saturate(200%)',
        WebkitBackdropFilter: 'blur(28px) saturate(200%)',
        borderBottom: scrolled
          ? '1px solid rgba(255,255,255,0.72)'
          : '1px solid rgba(255,255,255,0.48)',
        boxShadow: scrolled
          ? '0 8px 32px rgba(60,100,200,0.13), inset 0 1px 0 rgba(255,255,255,0.8)'
          : '0 2px 12px rgba(60,100,200,0.07), inset 0 1px 0 rgba(255,255,255,0.6)',
      }}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo / Name */}
          <Link
            href="/"
            className="font-bold text-lg tracking-tight"
            style={{ color: 'var(--text-primary)' }}
          >
            <span className="gradient-text">{profile.name.split(' ')[0]}</span>
            <span className="ml-1 font-light" style={{ color: 'var(--text-secondary)' }}>
              {profile.name.split(' ').slice(1).join(' ')}
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-1">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  'px-3 py-1.5 rounded-lg text-sm font-medium transition-all duration-200',
                  'hover:bg-[var(--accent-subtle)] hover:text-[var(--accent)]'
                )}
                style={{ color: 'var(--text-secondary)' }}
              >
                {item.label}
              </Link>
            ))}
            <div className="ml-3">
              <Button href="/print" size="sm" variant="glass">
                <Download className="w-3.5 h-3.5 mr-1.5" />
                Resume
              </Button>
            </div>
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className={cn(
              'md:hidden p-2 rounded-lg transition-all duration-200',
              'hover:bg-[var(--accent-subtle)]'
            )}
            style={{ color: 'var(--text-secondary)' }}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        <div
          className={cn(
            'md:hidden overflow-hidden transition-all duration-300 ease-in-out',
            isMenuOpen ? 'max-h-[400px] pb-4 opacity-100' : 'max-h-0 opacity-0'
          )}
        >
          <nav
            className="flex flex-col gap-1 glass rounded-2xl p-3 mt-2"
            style={{ border: '1px solid var(--glass-border-subtle)' }}
          >
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setIsMenuOpen(false)}
                className={cn(
                  'px-4 py-2.5 text-sm font-medium rounded-xl transition-all duration-200',
                  'hover:bg-[var(--accent-subtle)] hover:text-[var(--accent)]'
                )}
                style={{ color: 'var(--text-secondary)' }}
              >
                {item.label}
              </Link>
            ))}
            <div className="px-1 pt-2">
              <Button href="/print" size="sm" variant="glass" className="w-full">
                <Download className="w-3.5 h-3.5 mr-1.5" />
                Download Resume
              </Button>
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
}
