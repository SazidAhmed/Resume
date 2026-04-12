'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { projects, projectCategories, getProjectsByCategory } from '@/data/projects';
import { ProjectCard } from './ProjectCard';
import { ProjectFilters } from './ProjectFilters';

interface ProjectGridProps {
  showFilters?: boolean;
  limit?: number;
  featuredOnly?: boolean;
}

export function ProjectGrid({ showFilters = true, limit, featuredOnly = false }: ProjectGridProps) {
  const [activeCategory, setActiveCategory] = useState('All');

  let displayProjects = featuredOnly
    ? projects.filter((p) => p.featured)
    : getProjectsByCategory(activeCategory);

  if (limit) {
    displayProjects = displayProjects.slice(0, limit);
  }

  return (
    <div>
      {showFilters && !featuredOnly && (
        <ProjectFilters
          categories={projectCategories}
          activeCategory={activeCategory}
          onCategoryChange={setActiveCategory}
        />
      )}

      <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <AnimatePresence mode="popLayout">
          {displayProjects.map((project) => (
            <motion.div
              key={project.id}
              layout
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.3 }}
            >
              <ProjectCard project={project} />
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>

      {displayProjects.length === 0 && (
        <div className="text-center py-12">
          <p className="text-gray-500 dark:text-gray-400">
            No projects found in this category.
          </p>
        </div>
      )}
    </div>
  );
}
