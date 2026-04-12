import { Globe } from 'lucide-react';
import { languages } from '@/data/skills';
import { Badge } from '@/components/ui';

export function LanguagesSection() {
  const levelColors: Record<string, 'success' | 'default' | 'secondary'> = {
    Native: 'success',
    Professional: 'default',
    Basic: 'secondary',
  };

  return (
    <div className="glass-card p-6">
      <h3 className="font-semibold text-lg text-gray-900 dark:text-white mb-4 flex items-center gap-2">
        <Globe className="w-5 h-5 text-gray-400" />
        Languages
      </h3>
      <div className="flex flex-wrap gap-3">
        {languages.map((lang) => (
          <div
            key={lang.name}
            className="flex items-center gap-2 bg-white/50 dark:bg-white/5 border border-gray-200/50 dark:border-white/10 rounded-lg px-3 py-2 shadow-sm backdrop-blur-sm"
          >
            <span className="font-medium text-gray-900 dark:text-white">
              {lang.name}
            </span>
            <Badge variant={levelColors[lang.level] || 'secondary'} size="sm">
              {lang.level}
            </Badge>
          </div>
        ))}
      </div>
    </div>
  );
}
