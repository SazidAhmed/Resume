'use client';

import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';

interface ProgressProps {
  value: number;
  max?: number;
  size?: 'sm' | 'md' | 'lg';
  color?: 'blue' | 'green' | 'purple' | 'orange';
  showLabel?: boolean;
  animated?: boolean;
  className?: string;
}

export function Progress({
  value,
  max = 100,
  size = 'md',
  color = 'blue',
  showLabel = false,
  animated = true,
  className,
}: ProgressProps) {
  const percentage = Math.min(Math.max((value / max) * 100, 0), 100);

  const sizes: Record<string, string> = {
    sm: 'h-1',
    md: 'h-1.5',
    lg: 'h-2',
  };

  const gradients: Record<string, string> = {
    blue:   'linear-gradient(90deg, hsl(212 100% 52%), hsl(200 100% 60%))',
    green:  'linear-gradient(90deg, hsl(142 70% 42%), hsl(160 70% 52%))',
    purple: 'linear-gradient(90deg, hsl(260 80% 55%), hsl(290 70% 65%))',
    orange: 'linear-gradient(90deg, hsl(25 95% 52%), hsl(38 92% 58%))',
  };

  return (
    <div className={cn('w-full', className)}>
      {showLabel && (
        <div className="flex justify-between mb-1.5 text-xs">
          <span style={{ color: 'var(--text-muted)' }}>{value}%</span>
        </div>
      )}
      <div
        className={cn('w-full rounded-full overflow-hidden', sizes[size])}
        style={{ background: 'var(--border-subtle)' }}
      >
        {animated ? (
          <motion.div
            className="h-full rounded-full"
            style={{ background: gradients[color] }}
            initial={{ width: 0 }}
            whileInView={{ width: `${percentage}%` }}
            transition={{ duration: 1, ease: 'easeOut' }}
            viewport={{ once: true }}
          />
        ) : (
          <div
            className="h-full rounded-full"
            style={{ background: gradients[color], width: `${percentage}%` }}
          />
        )}
      </div>
    </div>
  );
}
