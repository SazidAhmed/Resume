import { cn } from '@/lib/utils';

interface SectionProps {
  children: React.ReactNode;
  id?: string;
  title?: string;
  subtitle?: string;
  className?: string;
}

export function Section({ children, id, title, subtitle, className }: SectionProps) {
  return (
    <section id={id} className={cn('py-16 scroll-mt-20', className)}>
      {(title || subtitle) && (
        <div className="mb-10">
          {title && (
            <h2
              className="text-3xl font-bold mb-2 tracking-tight"
              style={{ color: 'var(--text-primary)' }}
            >
              {title}
            </h2>
          )}
          {subtitle && (
            <p
              className="text-base"
              style={{ color: 'var(--text-secondary)' }}
            >
              {subtitle}
            </p>
          )}
          {/* Apple-style underline accent */}
          <div
            className="mt-4 h-px w-full"
            style={{
              background:
                'linear-gradient(to right, var(--accent), hsl(260 80% 60%), transparent)',
              opacity: 0.35,
            }}
          />
        </div>
      )}
      {children}
    </section>
  );
}
