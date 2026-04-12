import { Badge } from '@/components/ui';
import type { Experience } from '@/data/experience';

interface ExperienceCardProps {
  experience: Experience;
}

export function ExperienceCard({ experience }: ExperienceCardProps) {
  const formatDate = (date: string) => {
    return new Date(date + '-01').toLocaleDateString('en-US', {
      month: 'short',
      year: 'numeric',
    });
  };

  return (
    <div
      className="glass-card relative overflow-hidden p-6 group"
    >
      {/* Inner highlight */}
      <div
        className="pointer-events-none absolute inset-0 rounded-[inherit]"
        style={{
          background: 'linear-gradient(135deg, rgba(255,255,255,0.42) 0%, rgba(255,255,255,0.08) 45%, transparent 65%)',
          zIndex: 0,
        }}
        aria-hidden="true"
      />

      <div className="relative z-10">
        <div className="flex flex-col sm:flex-row sm:items-start gap-4 mb-4">
          {/* Company Logo Placeholder */}
          <div
            className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0 font-bold text-sm transition-all duration-300 group-hover:scale-110"
            style={{
              background: 'var(--accent-subtle)',
              border: '1px solid var(--border-subtle)',
              color: 'var(--accent)',
            }}
          >
            {experience.company.substring(0, 2).toUpperCase()}
          </div>

          <div className="flex-1">
            <h3
              className="font-semibold text-lg"
              style={{ color: 'var(--text-primary)' }}
            >
              {experience.title}
            </h3>
            <p className="font-medium gradient-text">{experience.company}</p>
            <p className="text-sm mt-0.5" style={{ color: 'var(--text-muted)' }}>
              {formatDate(experience.startDate)} –{' '}
              {experience.current ? 'Present' : formatDate(experience.endDate!)}
              {' · '}{experience.location}
              {' · '}
              <span className="capitalize">{experience.type}</span>
            </p>
          </div>
        </div>

        <p className="mb-4 text-sm leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
          {experience.description}
        </p>

        {/* Achievements */}
        <ul className="space-y-1.5 mb-4">
          {experience.achievements.map((achievement, i) => (
            <li key={i} className="flex items-start gap-2 text-sm" style={{ color: 'var(--text-secondary)' }}>
              <span
                className="mt-1.5 w-1.5 h-1.5 rounded-full flex-shrink-0"
                style={{ background: 'var(--accent)' }}
              />
              {achievement}
            </li>
          ))}
        </ul>

        {/* Technologies */}
        <div className="flex flex-wrap gap-1.5">
          {experience.technologies.map((tech) => (
            <Badge key={tech} variant="secondary" size="sm">
              {tech}
            </Badge>
          ))}
        </div>
      </div>
    </div>
  );
}
