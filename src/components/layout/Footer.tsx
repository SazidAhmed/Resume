import Link from 'next/link';
import { Github, Linkedin, Twitter, Mail, Heart } from 'lucide-react';
import { profile } from '@/data/profile';

const socialLinks = [
  { href: profile.github, icon: Github, label: 'GitHub' },
  { href: profile.linkedin, icon: Linkedin, label: 'LinkedIn' },
  { href: profile.twitter, icon: Twitter, label: 'Twitter' },
  { href: `mailto:${profile.email}`, icon: Mail, label: 'Email' },
];

const footerLinks = [
  { href: '/', label: 'Home' },
  { href: '/portfolio', label: 'Portfolio' },
  { href: '/#contact', label: 'Contact' },
  { href: '/print', label: 'Print Version' },
];

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer
      className="relative mt-16"
      style={{ borderTop: '1px solid var(--border-subtle)' }}
    >
      {/* Glass background */}
      <div
        className="absolute inset-0 z-0"
        style={{
          background: 'var(--glass-bg)',
          backdropFilter: 'blur(20px) saturate(180%)',
          WebkitBackdropFilter: 'blur(20px) saturate(180%)',
        }}
        aria-hidden="true"
      />

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand */}
          <div>
            <h3
              className="font-bold text-lg mb-3 tracking-tight"
              style={{ color: 'var(--text-primary)' }}
            >
              <span className="gradient-text">{profile.name}</span>
            </h3>
            <p className="text-sm mb-2" style={{ color: 'var(--text-secondary)' }}>
              {profile.title}
            </p>
            <p className="text-sm" style={{ color: 'var(--text-muted)' }}>
              {profile.location}
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3
              className="font-semibold mb-4 text-sm tracking-widest uppercase"
              style={{ color: 'var(--text-muted)' }}
            >
              Quick Links
            </h3>
            <ul className="space-y-2">
              {footerLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm transition-colors duration-200 hover:text-[var(--accent)]"
                    style={{ color: 'var(--text-secondary)' }}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Connect */}
          <div>
            <h3
              className="font-semibold mb-4 text-sm tracking-widest uppercase"
              style={{ color: 'var(--text-muted)' }}
            >
              Connect
            </h3>
            <div className="flex gap-2">
              {socialLinks.map(({ href, icon: Icon, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-xl transition-all duration-200 hover:scale-110 hover:text-[var(--accent)]"
                  style={{
                    color: 'var(--text-secondary)',
                    background: 'var(--glass-bg)',
                    border: '1px solid var(--border-subtle)',
                  }}
                  aria-label={label}
                >
                  <Icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div
          className="mt-10 pt-8 flex flex-col sm:flex-row justify-between items-center gap-4"
          style={{ borderTop: '1px solid var(--border-subtle)' }}
        >
          <p className="text-sm" style={{ color: 'var(--text-muted)' }}>
            © {currentYear} {profile.name}. All rights reserved.
          </p>
          <p
            className="text-sm flex items-center gap-1.5"
            style={{ color: 'var(--text-muted)' }}
          >
            Built with{' '}
            <Heart className="w-3.5 h-3.5" style={{ color: '#ef4444' }} /> using Next.js
          </p>
        </div>
      </div>
    </footer>
  );
}
