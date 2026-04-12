'use client';

import { motion } from 'framer-motion';
import { skillCategories, getSkillsByCategory } from '@/data/skills';
import { Section } from '@/components/ui';
import type { Skill } from '@/data/skills';

// Determine skill level color based on proficiency
function getSkillStyle(level: number): React.CSSProperties {
  if (level >= 90) return {
    background: 'hsl(142 65% 45% / 0.12)',
    border: '1px solid hsl(142 65% 45% / 0.28)',
    color: 'hsl(142 62% 30%)',
  };
  if (level >= 75) return {
    background: 'hsl(212 100% 56% / 0.10)',
    border: '1px solid hsl(212 100% 56% / 0.25)',
    color: 'hsl(212 80% 40%)',
  };
  if (level >= 60) return {
    background: 'hsl(38 92% 50% / 0.10)',
    border: '1px solid hsl(38 92% 50% / 0.28)',
    color: 'hsl(32 80% 38%)',
  };
  return {
    background: 'var(--glass-bg)',
    border: '1px solid var(--border-subtle)',
    color: 'var(--text-secondary)',
  };
}

function getDotColor(level: number): string {
  if (level >= 90) return 'hsl(142 65% 45%)';
  if (level >= 75) return 'hsl(212 100% 56%)';
  if (level >= 60) return 'hsl(38 92% 50%)';
  return 'var(--text-muted)';
}

// Category icons as simple SVGs
const categoryIcons: Record<string, React.ReactNode> = {
  Languages: (
    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
    </svg>
  ),
  Frontend: (
    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
    </svg>
  ),
  Backend: (
    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2" />
    </svg>
  ),
  Databases: (
    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4" />
    </svg>
  ),
  Cloud: (
    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" />
    </svg>
  ),
  DevOps: (
    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
    </svg>
  ),
};

function SkillChip({ skill }: { skill: Skill }) {
  const chipStyle = getSkillStyle(skill.level);
  const dotColor = getDotColor(skill.level);

  return (
    <motion.div
      whileHover={{ scale: 1.03, y: -1 }}
      transition={{ type: 'spring', stiffness: 400, damping: 20 }}
      className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-sm font-medium transition-shadow hover:shadow-sm"
      style={{
        ...chipStyle,
        backdropFilter: 'blur(8px)',
        WebkitBackdropFilter: 'blur(8px)',
      }}
    >
      <span className="w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ background: dotColor }} />
      <span>{skill.name}</span>
      {skill.yearsOfExperience && (
        <span className="text-xs opacity-60 tabular-nums">{skill.yearsOfExperience}y</span>
      )}
    </motion.div>
  );
}

function SkillCategory({ category, index }: { category: string; index: number }) {
  const categorySkills = getSkillsByCategory(category);
  if (categorySkills.length === 0) return null;

  const sortedSkills = [...categorySkills].sort((a, b) => b.level - a.level);

  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: index * 0.06, ease: [0.16, 1, 0.3, 1] }}
      viewport={{ once: true }}
      className="space-y-3"
    >
      <div className="flex items-center gap-2">
        <span style={{ color: 'var(--accent)' }}>
          {categoryIcons[category]}
        </span>
        <h3
          className="font-semibold text-xs tracking-widest uppercase"
          style={{ color: 'var(--text-muted)' }}
        >
          {category}
        </h3>
      </div>
      <div className="flex flex-wrap gap-2">
        {sortedSkills.map((skill) => (
          <SkillChip key={skill.name} skill={skill} />
        ))}
      </div>
    </motion.div>
  );
}

export function SkillsSection() {
  return (
    <Section id="skills" title="Skills & Expertise" subtitle="Technologies and tools I work with">
      {/* Legend */}
      <div
        className="mb-6 pb-6 flex flex-wrap items-center gap-x-6 gap-y-2 text-sm"
        style={{ borderBottom: '1px solid var(--border-subtle)' }}
      >
        <span className="font-medium" style={{ color: 'var(--text-muted)' }}>Proficiency:</span>
        <span className="inline-flex items-center gap-2">
          <span className="w-2 h-2 rounded-full" style={{ background: 'hsl(142 65% 45%)' }} />
          <span style={{ color: 'var(--text-secondary)' }}>Expert (90%+)</span>
        </span>
        <span className="inline-flex items-center gap-2">
          <span className="w-2 h-2 rounded-full" style={{ background: 'hsl(212 100% 56%)' }} />
          <span style={{ color: 'var(--text-secondary)' }}>Advanced (75%+)</span>
        </span>
        <span className="inline-flex items-center gap-2">
          <span className="w-2 h-2 rounded-full" style={{ background: 'hsl(38 92% 50%)' }} />
          <span style={{ color: 'var(--text-secondary)' }}>Intermediate (60%+)</span>
        </span>
      </div>

      {/* Skills Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {skillCategories.map((category, index) => (
          <SkillCategory key={category} category={category} index={index} />
        ))}
      </div>
    </Section>
  );
}
