import { forwardRef } from 'react';
import { cn } from '@/lib/utils';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost' | 'glass';
  size?: 'sm' | 'md' | 'lg';
  href?: string;
  children: React.ReactNode;
}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = 'primary', size = 'md', href, children, ...props }, ref) => {
    const baseStyles =
      'inline-flex items-center justify-center font-medium rounded-xl transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none select-none';

    const variants: Record<string, string> = {
      primary:
        'bg-[var(--accent)] text-white shadow-[0_4px_16px_var(--accent-glow)] hover:brightness-110 hover:shadow-[0_6px_24px_var(--accent-glow)] active:scale-[0.97]',
      secondary:
        'bg-[var(--accent-subtle)] text-[var(--accent)] hover:bg-[var(--accent-subtle)] hover:brightness-95 active:scale-[0.97]',
      outline:
        'border border-[var(--border-medium)] text-[var(--text-secondary)] hover:bg-[var(--accent-subtle)] hover:text-[var(--accent)] hover:border-[var(--accent)] active:scale-[0.97]',
      ghost:
        'text-[var(--text-secondary)] hover:bg-[var(--accent-subtle)] hover:text-[var(--accent)] active:scale-[0.97]',
      glass:
        'glass text-[var(--text-primary)] hover:bg-white/80 dark:hover:bg-white/10 shadow-[var(--glass-shadow)] active:scale-[0.97]',
    };

    const sizes: Record<string, string> = {
      sm: 'px-3.5 py-1.5 text-sm gap-1',
      md: 'px-5 py-2 text-sm gap-1.5',
      lg: 'px-7 py-3 text-base gap-2',
    };

    if (href) {
      return (
        <a
          href={href}
          className={cn(baseStyles, variants[variant], sizes[size], className)}
        >
          {children}
        </a>
      );
    }

    return (
      <button
        ref={ref}
        className={cn(baseStyles, variants[variant], sizes[size], className)}
        {...props}
      >
        {children}
      </button>
    );
  }
);

Button.displayName = 'Button';
