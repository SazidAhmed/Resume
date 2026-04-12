'use client';

import { motion } from 'framer-motion';
import { experience } from '@/data/experience';
import { ExperienceCard } from './ExperienceCard';
import { Section } from '@/components/ui';

export function ExperienceTimeline() {
  return (
    <Section id="experience" title="Work Experience" subtitle="My professional journey">
      <div className="relative">
        {/* Timeline line */}
        <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-gray-200 dark:bg-gray-700 hidden md:block" />

        <div className="space-y-8">
          {experience.map((exp, index) => (
            <motion.div
              key={exp.id}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="relative md:pl-16"
            >
              {/* Timeline dot */}
              <div className="absolute left-4 w-4 h-4 bg-blue-600 rounded-full border-4 border-white dark:border-gray-950 hidden md:block" />

              <ExperienceCard experience={exp} />
            </motion.div>
          ))}
        </div>
      </div>
    </Section>
  );
}
