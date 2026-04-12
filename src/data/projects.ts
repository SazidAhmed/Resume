/**
 * =============================================================================
 * PROJECTS DATA - Portfolio Projects
 * =============================================================================
 *
 * AI CUSTOMIZATION INSTRUCTIONS:
 * This file contains portfolio projects displayed in the Portfolio section.
 *
 * TO CUSTOMIZE:
 * 1. Replace example projects with your actual projects
 * 2. Mark your best projects as featured (featured: true)
 * 3. Include project images if available
 * 4. Add live demo and GitHub links where applicable
 *
 * TO ADD A NEW PROJECT:
 * Copy an existing entry and modify all fields. Make sure to:
 * - Use a unique ID (e.g., 'proj-6', 'proj-7')
 * - Create a URL-friendly slug (lowercase, hyphens, no spaces)
 * - Add at least a thumbnail image
 *
 * PROJECT CATEGORIES:
 * Choose from existing categories or add new ones to projectCategories array.
 *
 * IMAGES:
 * - Store images in /public/projects/
 * - Use paths like '/projects/project-name.jpg'
 * - Recommended size: 1200x630 for thumbnails
 * =============================================================================
 */

/**
 * Project entry type definition
 */
export interface Project {
  /** Unique identifier (e.g., 'proj-1', 'proj-2') */
  id: string;

  /**
   * URL-friendly slug for the project page
   * Format: lowercase, hyphens instead of spaces
   * Example: 'my-awesome-project'
   */
  slug: string;

  /** Project title */
  title: string;

  /**
   * Short description (1-2 sentences)
   * Displayed in project cards
   */
  description: string;

  /**
   * Detailed description (optional)
   * Displayed on the project detail page
   */
  longDescription?: string;

  /**
   * Thumbnail image path
   * - Use '/projects/thumb.jpg' for local image
   * - Use full URL for external image
   */
  thumbnail: string;

  /**
   * Additional project images (optional)
   * For project detail page gallery
   */
  images: string[];

  /**
   * Technologies used in the project
   * List frameworks, languages, and tools
   */
  technologies: string[];

  /**
   * Project category
   * Must match one from projectCategories array
   */
  category: string;

  /**
   * Your role in the project
   * Examples: "Lead Developer", "Frontend Developer", "Solo Project"
   */
  role: string;

  /**
   * Project duration
   * Examples: "3 months", "6 weeks", "Ongoing"
   */
  duration: string;

  /**
   * Live project URL (optional)
   * Link to deployed project
   */
  liveUrl?: string;

  /**
   * GitHub repository URL (optional)
   * Link to source code
   */
  githubUrl?: string;

  /**
   * Is this a featured project?
   * Featured projects are highlighted on the homepage
   */
  featured: boolean;

  /**
   * Key highlights/achievements
   * Use metrics when possible (numbers, percentages)
   */
  highlights: string[];
}

/**
 * =============================================================================
 * PROJECT CATEGORIES - CUSTOMIZE BELOW
 * =============================================================================
 *
 * Categories for filtering projects.
 * 'All' is required and should always be first.
 */
export const projectCategories: string[] = [
  'All',
  'Web Application',
  'SaaS',
  'Mobile App',
  'Data Visualization',
  'Developer Tools',
  // Add more categories here:
  // 'E-Commerce',
  // 'AI/ML',
  // 'Open Source',
  // 'Personal Project',
];

/**
 * =============================================================================
 * YOUR PROJECTS - CUSTOMIZE BELOW
 * =============================================================================
 *
 * Replace these example projects with your actual projects.
 * Mark your best 3-4 projects as featured.
 */
export const projects: Project[] = [
  // ---------------------------------------------------------------------------
  // FEATURED PROJECT 1
  // ---------------------------------------------------------------------------
  {
    id: 'proj-1',
    slug: 'e-commerce-platform',
    title: 'E-Commerce Platform',
    description:
      'Full-stack e-commerce solution with real-time inventory management and payment processing.',
    longDescription: `Built a comprehensive e-commerce platform from scratch, featuring real-time inventory tracking, 
    secure payment processing with Stripe, and an admin dashboard for order management. The platform handles 
    thousands of concurrent users and processes over $2M in transactions monthly.`,
    thumbnail: '/projects/ecommerce-thumb.jpg',
    images: [
      '/projects/ecommerce-1.jpg',
      '/projects/ecommerce-2.jpg',
      '/projects/ecommerce-3.jpg',
    ],
    technologies: ['Next.js', 'TypeScript', 'PostgreSQL', 'Stripe', 'Redis', 'AWS'],
    category: 'Web Application',
    role: 'Lead Developer',
    duration: '6 months',
    liveUrl: 'https://example-ecommerce.com',
    githubUrl: 'https://github.com/alexjohnson/ecommerce',
    featured: true,
    highlights: [
      'Processed $2M+ in transactions',
      '99.9% uptime over 2 years',
      '50ms average API response time',
      'Handles 10K+ concurrent users',
    ],
  },

  // ---------------------------------------------------------------------------
  // FEATURED PROJECT 2
  // ---------------------------------------------------------------------------
  {
    id: 'proj-2',
    slug: 'task-management-app',
    title: 'TaskFlow - Task Management',
    description:
      'Collaborative task management application with real-time updates and team features.',
    longDescription: `A modern task management application designed for remote teams. Features include 
    real-time collaboration, Kanban boards, time tracking, and integrations with popular tools like 
    Slack and GitHub.`,
    thumbnail: '/projects/taskflow-thumb.jpg',
    images: ['/projects/taskflow-1.jpg', '/projects/taskflow-2.jpg'],
    technologies: ['React', 'Node.js', 'Socket.io', 'MongoDB', 'Docker'],
    category: 'SaaS',
    role: 'Full-Stack Developer',
    duration: '4 months',
    liveUrl: 'https://taskflow-demo.com',
    githubUrl: 'https://github.com/alexjohnson/taskflow',
    featured: true,
    highlights: [
      '5K+ active users',
      'Real-time collaboration',
      '15+ third-party integrations',
      '4.8/5 user rating',
    ],
  },

  // ---------------------------------------------------------------------------
  // FEATURED PROJECT 3
  // ---------------------------------------------------------------------------
  {
    id: 'proj-3',
    slug: 'analytics-dashboard',
    title: 'DataViz Analytics Dashboard',
    description:
      'Interactive analytics dashboard with customizable charts and real-time data visualization.',
    thumbnail: '/projects/analytics-thumb.jpg',
    images: ['/projects/analytics-1.jpg', '/projects/analytics-2.jpg'],
    technologies: ['React', 'D3.js', 'Python', 'FastAPI', 'PostgreSQL'],
    category: 'Data Visualization',
    role: 'Frontend Lead',
    duration: '3 months',
    // liveUrl: undefined,  // No live demo
    // githubUrl: undefined,  // Private repository
    featured: true,
    highlights: [
      '20+ chart types',
      'Export to PDF/Excel',
      'Custom report builder',
      'Role-based access control',
    ],
  },

  // ---------------------------------------------------------------------------
  // NON-FEATURED PROJECT
  // ---------------------------------------------------------------------------
  {
    id: 'proj-4',
    slug: 'mobile-fitness-app',
    title: 'FitTrack Mobile App',
    description:
      'Cross-platform fitness tracking application with workout plans and progress analytics.',
    thumbnail: '/projects/fitness-thumb.jpg',
    images: ['/projects/fitness-1.jpg', '/projects/fitness-2.jpg'],
    technologies: ['React Native', 'TypeScript', 'Firebase', 'Node.js'],
    category: 'Mobile App',
    role: 'Mobile Developer',
    duration: '5 months',
    // liveUrl: undefined,  // App store link would go here
    githubUrl: 'https://github.com/alexjohnson/fittrack',
    featured: false,
    highlights: [
      'iOS & Android support',
      'Offline-first architecture',
      'Wearable device integration',
      '10K+ downloads',
    ],
  },

  // ---------------------------------------------------------------------------
  // NON-FEATURED PROJECT
  // ---------------------------------------------------------------------------
  {
    id: 'proj-5',
    slug: 'open-source-cli',
    title: 'DevToolkit CLI',
    description:
      'Open-source command-line toolkit for developers with code generation and automation.',
    thumbnail: '/projects/cli-thumb.jpg',
    images: ['/projects/cli-1.jpg'],
    technologies: ['Go', 'Cobra', 'Docker'],
    category: 'Developer Tools',
    role: 'Creator & Maintainer',
    duration: 'Ongoing',
    // liveUrl: undefined,  // CLI tools usually don't have live URLs
    githubUrl: 'https://github.com/alexjohnson/devtoolkit',
    featured: false,
    highlights: [
      '2K+ GitHub stars',
      '500+ contributors',
      'Used by 100+ companies',
      'Weekly releases',
    ],
  },

  // ---------------------------------------------------------------------------
  // ADD MORE PROJECTS HERE
  // ---------------------------------------------------------------------------
  // {
  //   id: 'proj-6',
  //   slug: 'your-project-slug',
  //   title: 'Your Project Title',
  //   description: 'Short description of your project...',
  //   longDescription: 'Detailed description...',  // Optional
  //   thumbnail: '/projects/your-project-thumb.jpg',
  //   images: ['/projects/your-project-1.jpg'],
  //   technologies: ['Tech1', 'Tech2', 'Tech3'],
  //   category: 'Web Application',
  //   role: 'Your Role',
  //   duration: '3 months',
  //   liveUrl: 'https://your-project.com',  // Optional
  //   githubUrl: 'https://github.com/you/project',  // Optional
  //   featured: false,
  //   highlights: [
  //     'Highlight 1 with metrics',
  //     'Highlight 2',
  //   ],
  // },
];

// =============================================================================
// HELPER FUNCTIONS
// =============================================================================

/**
 * Get featured projects
 */
export function getFeaturedProjects(): Project[] {
  return projects.filter((project) => project.featured);
}

/**
 * Get project by slug
 */
export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((project) => project.slug === slug);
}

/**
 * Get projects by category
 */
export function getProjectsByCategory(category: string): Project[] {
  if (category === 'All') return projects;
  return projects.filter((project) => project.category === category);
}

/**
 * Get all unique technologies used across projects
 */
export function getAllProjectTechnologies(): string[] {
  const techSet = new Set<string>();
  projects.forEach((project) => {
    project.technologies.forEach((tech) => techSet.add(tech));
  });
  return Array.from(techSet).sort();
}

/**
 * Get project count by category
 */
export function getProjectCountByCategory(): Record<string, number> {
  const counts: Record<string, number> = { All: projects.length };

  projectCategories.slice(1).forEach((category) => {
    counts[category] = projects.filter((p) => p.category === category).length;
  });

  return counts;
}

/**
 * Search projects by title, description, or technology
 */
export function searchProjects(query: string): Project[] {
  const lowerQuery = query.toLowerCase();
  return projects.filter(
    (project) =>
      project.title.toLowerCase().includes(lowerQuery) ||
      project.description.toLowerCase().includes(lowerQuery) ||
      project.technologies.some((tech) =>
        tech.toLowerCase().includes(lowerQuery)
      )
  );
}

/**
 * Get related projects (same category, excluding current)
 */
export function getRelatedProjects(
  currentSlug: string,
  limit: number = 3
): Project[] {
  const current = getProjectBySlug(currentSlug);
  if (!current) return [];

  return projects
    .filter((p) => p.slug !== currentSlug && p.category === current.category)
    .slice(0, limit);
}
