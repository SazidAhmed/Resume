import { Mail, Phone, MapPin, Globe, Download } from 'lucide-react';
import { profile } from '@/data/profile';
import { Button } from '@/components/ui';
import { SocialLinks } from '@/components/contact/SocialLinks';

export function ProfileHeader() {
  return (
    <header className="flex flex-col md:flex-row items-center gap-8 mb-12">
      {/* Profile Photo / Avatar */}
      <div className="relative flex-shrink-0">
        {/* Glow ring */}
        <div
          className="absolute inset-0 rounded-full"
          style={{
            background:
              'conic-gradient(from 180deg, hsl(212 100% 56%), hsl(260 80% 60%), hsl(212 100% 56%))',
            padding: '3px',
            borderRadius: '50%',
            filter: 'blur(0px)',
          }}
          aria-hidden="true"
        />
        <div
          className="relative w-40 h-40 rounded-full flex items-center justify-center text-4xl font-bold overflow-hidden"
          style={{
            background: 'var(--glass-bg-heavy)',
            backdropFilter: 'blur(12px)',
            WebkitBackdropFilter: 'blur(12px)',
            border: '3px solid transparent',
            backgroundClip: 'padding-box',
            boxShadow: '0 0 0 3px var(--accent-glow), 0 12px 40px rgba(0,0,0,0.15)',
            color: 'var(--accent)',
          }}
        >
          {profile.name
            .split(' ')
            .map((n: string) => n[0])
            .join('')}
        </div>
      </div>

      <div className="flex-1 text-center md:text-left">
        <h1
          className="text-4xl md:text-5xl font-bold mb-1 tracking-tight"
          style={{ color: 'var(--text-primary)' }}
        >
          {profile.name}
        </h1>
        <p
          className="text-xl md:text-2xl font-medium mb-5 gradient-text"
        >
          {profile.title}
        </p>

        {/* Contact Info chips */}
        <div className="flex flex-wrap justify-center md:justify-start gap-2 mb-6">
          <a
            href={`mailto:${profile.email}`}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-full text-sm transition-all duration-200 hover:scale-105 hover:text-[var(--accent)]"
            style={{
              background: 'var(--glass-bg)',
              backdropFilter: 'blur(10px)',
              WebkitBackdropFilter: 'blur(10px)',
              border: '1px solid var(--border-subtle)',
              color: 'var(--text-secondary)',
            }}
          >
            <Mail className="w-3.5 h-3.5" />
            {profile.email}
          </a>
          <span
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-full text-sm"
            style={{
              background: 'var(--glass-bg)',
              backdropFilter: 'blur(10px)',
              WebkitBackdropFilter: 'blur(10px)',
              border: '1px solid var(--border-subtle)',
              color: 'var(--text-secondary)',
            }}
          >
            <Phone className="w-3.5 h-3.5" />
            {profile.phone}
          </span>
          <span
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-full text-sm"
            style={{
              background: 'var(--glass-bg)',
              backdropFilter: 'blur(10px)',
              WebkitBackdropFilter: 'blur(10px)',
              border: '1px solid var(--border-subtle)',
              color: 'var(--text-secondary)',
            }}
          >
            <MapPin className="w-3.5 h-3.5" />
            {profile.location}
          </span>
          <a
            href={profile.website}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-full text-sm transition-all duration-200 hover:scale-105 hover:text-[var(--accent)]"
            style={{
              background: 'var(--glass-bg)',
              backdropFilter: 'blur(10px)',
              WebkitBackdropFilter: 'blur(10px)',
              border: '1px solid var(--border-subtle)',
              color: 'var(--text-secondary)',
            }}
          >
            <Globe className="w-3.5 h-3.5" />
            Portfolio
          </a>
        </div>

        {/* Actions */}
        <div className="flex flex-wrap gap-3 justify-center md:justify-start">
          <SocialLinks />
          <Button href="/print" variant="primary">
            <Download className="w-4 h-4 mr-1.5" />
            View Resume
          </Button>
        </div>
      </div>
    </header>
  );
}
