/**
 * =============================================================================
 * SKILLS DATA - Technical & Professional Skills
 * =============================================================================
 *
 * AI CUSTOMIZATION INSTRUCTIONS:
 * This file contains skills displayed in the Skills section.
 *
 * TO CUSTOMIZE:
 * 1. Replace example skills with your actual skills
 * 2. Set proficiency levels honestly (0-100)
 * 3. Organize skills by category
 * 4. Update spoken languages if applicable
 *
 * PROFICIENCY LEVEL GUIDE:
 * - 90-100: Expert (can teach others, deep knowledge)
 * - 70-89:  Advanced (proficient, used extensively)
 * - 50-69:  Intermediate (comfortable, moderate experience)
 * - 30-49:  Basic (familiar, some experience)
 * - 10-29:  Beginner (learning, minimal experience)
 *
 * TO ADD A NEW SKILL:
 * { name: 'Skill Name', level: 85, category: 'Category', yearsOfExperience: 3 }
 *
 * TO ADD A NEW CATEGORY:
 * 1. Add the category name to the skillCategories array
 * 2. Add skills with that category to the skills array
 * =============================================================================
 */

/**
 * Skill entry type definition
 */
export interface Skill {
  /** Skill name (e.g., "React", "Python", "Project Management") */
  name: string;

  /**
   * Proficiency level from 0-100
   * See guide above for recommended ranges
   */
  level: number;

  /**
   * Category for grouping skills
   * Must match one of the categories in skillCategories array
   */
  category: string;

  /**
   * Icon identifier (optional)
   * Can be used to display skill icons
   */
  icon?: string;

  /**
   * Years of experience with this skill (optional)
   */
  yearsOfExperience?: number;
}

/**
 * Spoken language type definition
 */
export interface Language {
  /** Language name (e.g., "English", "Spanish") */
  name: string;

  /**
   * Proficiency level
   * Options: 'Native' | 'Fluent' | 'Professional' | 'Intermediate' | 'Basic'
   */
  level: 'Native' | 'Fluent' | 'Professional' | 'Intermediate' | 'Basic';
}

/**
 * =============================================================================
 * SKILL CATEGORIES - CUSTOMIZE BELOW
 * =============================================================================
 *
 * These categories are used to group skills in the UI.
 * Add, remove, or rename categories as needed.
 */
export const skillCategories: string[] = [
  'Languages',    // Programming languages
  'Frontend',     // Frontend frameworks & libraries
  'Backend',      // Backend frameworks & technologies
  'Databases',    // Database technologies
  'Cloud',        // Cloud platforms & services
  'DevOps',       // DevOps tools & practices
  // Add more categories here:
  // 'Mobile',
  // 'Design',
  // 'Soft Skills',
  // 'Other',
];

/**
 * =============================================================================
 * YOUR SKILLS - CUSTOMIZE BELOW
 * =============================================================================
 *
 * Replace these example skills with your actual skills.
 * Group skills by category for better organization.
 */
export const skills: Skill[] = [
  // ---------------------------------------------------------------------------
  // PROGRAMMING LANGUAGES
  // ---------------------------------------------------------------------------
  {
    name: 'TypeScript',
    level: 95,
    category: 'Languages',
    yearsOfExperience: 5,
  },
  {
    name: 'JavaScript',
    level: 95,
    category: 'Languages',
    yearsOfExperience: 8,
  },
  {
    name: 'Python',
    level: 80,
    category: 'Languages',
    yearsOfExperience: 4,
  },
  {
    name: 'Go',
    level: 65,
    category: 'Languages',
    yearsOfExperience: 2,
  },

  // ---------------------------------------------------------------------------
  // FRONTEND
  // ---------------------------------------------------------------------------
  {
    name: 'React',
    level: 95,
    category: 'Frontend',
    yearsOfExperience: 6,
  },
  {
    name: 'Next.js',
    level: 90,
    category: 'Frontend',
    yearsOfExperience: 4,
  },
  {
    name: 'Tailwind CSS',
    level: 90,
    category: 'Frontend',
    yearsOfExperience: 3,
  },
  {
    name: 'Vue.js',
    level: 70,
    category: 'Frontend',
    yearsOfExperience: 2,
  },

  // ---------------------------------------------------------------------------
  // BACKEND
  // ---------------------------------------------------------------------------
  {
    name: 'Node.js',
    level: 90,
    category: 'Backend',
    yearsOfExperience: 6,
  },
  {
    name: 'Express',
    level: 88,
    category: 'Backend',
    yearsOfExperience: 5,
  },
  {
    name: 'Django',
    level: 75,
    category: 'Backend',
    yearsOfExperience: 3,
  },
  {
    name: 'GraphQL',
    level: 80,
    category: 'Backend',
    yearsOfExperience: 3,
  },

  // ---------------------------------------------------------------------------
  // DATABASES
  // ---------------------------------------------------------------------------
  {
    name: 'PostgreSQL',
    level: 85,
    category: 'Databases',
    yearsOfExperience: 5,
  },
  {
    name: 'MongoDB',
    level: 80,
    category: 'Databases',
    yearsOfExperience: 4,
  },
  {
    name: 'Redis',
    level: 75,
    category: 'Databases',
    yearsOfExperience: 3,
  },

  // ---------------------------------------------------------------------------
  // CLOUD & DEVOPS
  // ---------------------------------------------------------------------------
  {
    name: 'AWS',
    level: 85,
    category: 'Cloud',
    yearsOfExperience: 4,
  },
  {
    name: 'Docker',
    level: 85,
    category: 'DevOps',
    yearsOfExperience: 4,
  },
  {
    name: 'Kubernetes',
    level: 70,
    category: 'DevOps',
    yearsOfExperience: 2,
  },
  {
    name: 'CI/CD',
    level: 85,
    category: 'DevOps',
    yearsOfExperience: 4,
  },

  // ---------------------------------------------------------------------------
  // ADD MORE SKILLS HERE
  // ---------------------------------------------------------------------------
  // {
  //   name: 'Your Skill',
  //   level: 85,
  //   category: 'Category Name',
  //   yearsOfExperience: 3,
  // },
];

/**
 * =============================================================================
 * SPOKEN LANGUAGES - CUSTOMIZE BELOW
 * =============================================================================
 *
 * List the languages you speak and your proficiency level.
 */
export const languages: Language[] = [
  { name: 'English', level: 'Native' },
  { name: 'Spanish', level: 'Professional' },
  { name: 'French', level: 'Basic' },
  // Add more languages here:
  // { name: 'German', level: 'Intermediate' },
];

// =============================================================================
// HELPER FUNCTIONS
// =============================================================================

/**
 * Get skills filtered by category
 */
export function getSkillsByCategory(category: string): Skill[] {
  return skills.filter((skill) => skill.category === category);
}

/**
 * Get top N skills sorted by proficiency level
 */
export function getTopSkills(count: number = 6): Skill[] {
  return [...skills].sort((a, b) => b.level - a.level).slice(0, count);
}

/**
 * Get all unique skill categories actually used in skills array
 */
export function getUsedCategories(): string[] {
  const categories = new Set(skills.map((skill) => skill.category));
  // Return in the order defined in skillCategories
  return skillCategories.filter((cat) => categories.has(cat));
}

/**
 * Get skills grouped by category
 */
export function getSkillsGroupedByCategory(): Record<string, Skill[]> {
  const grouped: Record<string, Skill[]> = {};

  skillCategories.forEach((category) => {
    const categorySkills = getSkillsByCategory(category);
    if (categorySkills.length > 0) {
      grouped[category] = categorySkills;
    }
  });

  return grouped;
}

/**
 * Calculate average skill level
 */
export function getAverageSkillLevel(): number {
  if (skills.length === 0) return 0;
  const total = skills.reduce((sum, skill) => sum + skill.level, 0);
  return Math.round(total / skills.length);
}

/**
 * Get proficiency label for a skill level
 */
export function getSkillProficiencyLabel(level: number): string {
  if (level >= 90) return 'Expert';
  if (level >= 70) return 'Advanced';
  if (level >= 50) return 'Intermediate';
  if (level >= 30) return 'Basic';
  return 'Beginner';
}
