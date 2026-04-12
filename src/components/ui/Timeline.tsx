import { cn } from '@/lib/utils';

interface TimelineProps {
  children: React.ReactNode;
  className?: string;
}

export function Timeline({ children, className }: TimelineProps) {
  return (
    <div className={cn('relative', className)}>
      {/* Timeline line */}
      <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-gray-200 dark:bg-gray-700" />
      <div className="space-y-8">{children}</div>
    </div>
  );
}

interface TimelineItemProps {
  children: React.ReactNode;
  date?: string;
  icon?: React.ReactNode;
  active?: boolean;
  className?: string;
}

export function TimelineItem({ children, date, icon, active = false, className }: TimelineItemProps) {
  return (
    <div className={cn('relative pl-12', className)}>
      {/* Timeline dot */}
      <div
        className={cn(
          'absolute left-0 w-8 h-8 rounded-full border-4 flex items-center justify-center',
          active
            ? 'bg-blue-600 border-blue-200 dark:border-blue-900'
            : 'bg-white dark:bg-gray-900 border-gray-200 dark:border-gray-700'
        )}
      >
        {icon && <span className={cn('text-sm', active ? 'text-white' : 'text-gray-400')}>{icon}</span>}
      </div>
      {date && (
        <span className="absolute left-12 -top-1 text-sm text-gray-500 dark:text-gray-400">
          {date}
        </span>
      )}
      <div className="pt-6">{children}</div>
    </div>
  );
}
