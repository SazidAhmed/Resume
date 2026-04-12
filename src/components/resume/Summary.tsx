import { profile } from '@/data/profile';
import { CheckCircle } from 'lucide-react';

export function Summary() {
  return (
    <div className="mb-12">
      <p
        className="text-base leading-relaxed mb-6 max-w-3xl"
        style={{ color: 'var(--text-secondary)' }}
      >
        {profile.summary}
      </p>

      {/* Highlights */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
        {profile.highlights.map((highlight, index) => (
          <div
            key={index}
            className="flex items-center gap-2.5 px-4 py-2.5 rounded-xl text-sm"
            style={{
              background: 'var(--glass-bg)',
              backdropFilter: 'blur(10px)',
              WebkitBackdropFilter: 'blur(10px)',
              border: '1px solid var(--border-subtle)',
              color: 'var(--text-secondary)',
            }}
          >
            <CheckCircle
              className="w-4 h-4 flex-shrink-0"
              style={{ color: 'hsl(142 65% 45%)' }}
            />
            <span>{highlight}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
