import { cn } from '@/lib/utils';

interface BadgeProps {
  children: React.ReactNode;
  variant?: 'default' | 'secondary' | 'success' | 'warning' | 'error';
  size?: 'sm' | 'md';
  className?: string;
}

export function Badge({
  children,
  variant = 'default',
  size = 'sm',
  className,
}: BadgeProps) {
  const variants: Record<string, React.CSSProperties> = {
    default: {
      background: 'hsl(212 100% 56% / 0.12)',
      color: 'hsl(212 100% 56%)',
      border: '1px solid hsl(212 100% 56% / 0.25)',
    },
    secondary: {
      background: 'var(--glass-bg)',
      color: 'var(--text-secondary)',
      border: '1px solid var(--border-subtle)',
      backdropFilter: 'blur(8px)',
      WebkitBackdropFilter: 'blur(8px)',
    },
    success: {
      background: 'hsl(142 70% 45% / 0.12)',
      color: 'hsl(142 65% 35%)',
      border: '1px solid hsl(142 65% 45% / 0.25)',
    },
    warning: {
      background: 'hsl(38 92% 50% / 0.12)',
      color: 'hsl(32 92% 40%)',
      border: '1px solid hsl(38 92% 50% / 0.25)',
    },
    error: {
      background: 'hsl(0 90% 55% / 0.10)',
      color: 'hsl(0 72% 50%)',
      border: '1px solid hsl(0 85% 55% / 0.25)',
    },
  };

  const sizes: Record<string, string> = {
    sm: 'px-2.5 py-0.5 text-xs',
    md: 'px-3 py-1 text-sm',
  };

  return (
    <span
      className={cn(
        'inline-flex items-center font-medium rounded-full transition-all duration-200',
        sizes[size],
        className
      )}
      style={variants[variant]}
    >
      {children}
    </span>
  );
}
