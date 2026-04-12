'use client';

import { motion } from 'framer-motion';
import type { Skill } from '@/data/skills';

interface SkillBarProps {
  skill: Skill;
}

export function SkillBar({ skill }: SkillBarProps) {
  return (
    <div className="mb-4">
      <div className="flex justify-between mb-1.5">
        <span className="font-medium text-gray-900 dark:text-white text-sm">
          {skill.name}
        </span>
        <span className="text-gray-500 dark:text-gray-400 text-sm">
          {skill.level}%
        </span>
      </div>
      <div className="h-2 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
        <motion.div
          className="h-full bg-gradient-to-r from-blue-500 to-blue-600 rounded-full"
          initial={{ width: 0 }}
          whileInView={{ width: `${skill.level}%` }}
          transition={{ duration: 1, ease: 'easeOut' }}
          viewport={{ once: true }}
        />
      </div>
    </div>
  );
}
