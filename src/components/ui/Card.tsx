import { cn } from '@/lib/utils';

interface CardProps {
  children: React.ReactNode;
  className?: string;
  hover?: boolean;
}

export function Card({ children, className, hover = false }: CardProps) {
  return (
    <div
      className={cn(
        'glass-card relative overflow-hidden',
        hover && 'cursor-pointer',
        className
      )}
    >
      {/* Specular inner highlight — top-left corner shimmer */}
      <div
        className="pointer-events-none absolute inset-0 rounded-[inherit]"
        style={{
          background: [
            'linear-gradient(135deg, rgba(255,255,255,0.42) 0%, rgba(255,255,255,0.08) 45%, transparent 65%)',
            /* bottom-right counter-light */ 'radial-gradient(ellipse 60% 40% at 100% 100%, rgba(255,255,255,0.12) 0%, transparent 70%)',
          ].join(', '),
          zIndex: 0,
        }}
        aria-hidden="true"
      />
      <div className="relative z-10">{children}</div>
    </div>
  );
}

export function CardHeader({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div
      className={cn('px-6 py-4', className)}
      style={{ borderBottom: '1px solid var(--border-subtle)' }}
    >
      {children}
    </div>
  );
}

export function CardContent({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return <div className={cn('px-6 py-4', className)}>{children}</div>;
}

export function CardFooter({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div
      className={cn('px-6 py-4', className)}
      style={{ borderTop: '1px solid var(--border-subtle)' }}
    >
      {children}
    </div>
  );
}
