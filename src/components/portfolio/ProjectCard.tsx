'use client';

import { useState } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { ExternalLink, Github, ArrowRight } from 'lucide-react';
import { Badge, Button } from '@/components/ui';
import type { Project } from '@/data/projects';

interface ProjectCardProps {
  project: Project;
}

export function ProjectCard({ project }: ProjectCardProps) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
      viewport={{ once: true }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="glass-card group relative overflow-hidden flex flex-col"
    >
      {/* Inner highlight */}
      <div
        className="pointer-events-none absolute inset-0 rounded-[inherit] z-[1]"
        style={{
          background: 'linear-gradient(135deg, rgba(255,255,255,0.22) 0%, transparent 50%)',
        }}
        aria-hidden="true"
      />

      {/* Thumbnail */}
      <div className="relative h-48 overflow-hidden">
        {/* Gradient background */}
        <div
          className="absolute inset-0 transition-transform duration-500 group-hover:scale-105"
          style={{
            background:
              'linear-gradient(135deg, hsl(212 100% 52%), hsl(260 80% 58%), hsl(290 70% 62%))',
          }}
        />
        {/* Mesh pattern overlay */}
        <div
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage:
              'radial-gradient(circle at 25% 25%, rgba(255,255,255,0.2) 0%, transparent 50%), radial-gradient(circle at 75% 75%, rgba(255,255,255,0.15) 0%, transparent 50%)',
          }}
        />
        <div className="absolute inset-0 flex items-center justify-center">
          <span className="text-white/60 text-5xl font-black tracking-tighter">
            {project.title.substring(0, 2).toUpperCase()}
          </span>
        </div>

        {/* Hover overlay */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: isHovered ? 1 : 0 }}
          className="absolute inset-0 flex items-center justify-center gap-3"
          style={{ backdropFilter: 'blur(4px)', background: 'rgba(0,0,0,0.45)' }}
        >
          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full transition-all duration-200 hover:scale-110"
              style={{
                background: 'var(--glass-bg-heavy)',
                backdropFilter: 'blur(8px)',
                border: '1px solid var(--glass-border)',
                color: 'var(--text-primary)',
              }}
              aria-label="View live site"
            >
              <ExternalLink className="w-4 h-4" />
            </a>
          )}
          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full transition-all duration-200 hover:scale-110"
              style={{
                background: 'var(--glass-bg-heavy)',
                backdropFilter: 'blur(8px)',
                border: '1px solid var(--glass-border)',
                color: 'var(--text-primary)',
              }}
              aria-label="View source code"
            >
              <Github className="w-4 h-4" />
            </a>
          )}
        </motion.div>

        {/* Featured badge */}
        {project.featured && (
          <div className="absolute top-3 left-3 z-10">
            <Badge variant="warning" size="sm">Featured</Badge>
          </div>
        )}
      </div>

      {/* Content */}
      <div className="relative z-10 p-5 flex flex-col flex-1">
        <div className="flex items-start justify-between gap-2 mb-2">
          <h3
            className="font-semibold text-base transition-colors duration-200 group-hover:text-[var(--accent)]"
            style={{ color: 'var(--text-primary)' }}
          >
            {project.title}
          </h3>
          <Badge variant="secondary" size="sm">{project.category}</Badge>
        </div>

        <p className="text-sm mb-4 line-clamp-2" style={{ color: 'var(--text-secondary)' }}>
          {project.description}
        </p>

        {/* Technologies */}
        <div className="flex flex-wrap gap-1.5 mb-5">
          {project.technologies.slice(0, 4).map((tech) => (
            <Badge key={tech} variant="default" size="sm">{tech}</Badge>
          ))}
          {project.technologies.length > 4 && (
            <Badge variant="secondary" size="sm">+{project.technologies.length - 4}</Badge>
          )}
        </div>

        {/* View Project Link */}
        <div className="mt-auto">
          <Link
            href={`/portfolio/${project.slug}`}
            className="inline-flex items-center gap-1 text-sm font-medium transition-all duration-200 hover:gap-2 hover:text-[var(--accent)]"
            style={{ color: 'var(--text-secondary)' }}
          >
            View Details
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>
      </div>
    </motion.div>
  );
}
