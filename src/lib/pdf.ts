import { profile } from '@/data/profile';
import { experience } from '@/data/experience';
import { skills, skillCategories, getSkillsByCategory, languages } from '@/data/skills';
import { education, certifications } from '@/data/education';

// Helper to format dates
export function formatDate(date: string): string {
  return new Date(date + '-01').toLocaleDateString('en-US', {
    month: 'short',
    year: 'numeric',
  });
}

// Generate plain text resume for simple downloads
export function generateTextResume(): string {
  const lines: string[] = [];
  
  // Header
  lines.push(profile.name.toUpperCase());
  lines.push(profile.title);
  lines.push('');
  lines.push(`Email: ${profile.email} | Phone: ${profile.phone}`);
  lines.push(`Location: ${profile.location} | Website: ${profile.website}`);
  lines.push('');
  lines.push('═'.repeat(60));
  lines.push('');
  
  // Summary
  lines.push('SUMMARY');
  lines.push('-'.repeat(40));
  lines.push(profile.summary);
  lines.push('');
  
  // Experience
  lines.push('EXPERIENCE');
  lines.push('-'.repeat(40));
  experience.forEach((exp) => {
    lines.push(`${exp.title} at ${exp.company}`);
    lines.push(`${formatDate(exp.startDate)} - ${exp.current ? 'Present' : formatDate(exp.endDate!)}`);
    lines.push(`${exp.location} | ${exp.type}`);
    exp.achievements.forEach((achievement) => {
      lines.push(`  • ${achievement}`);
    });
    lines.push('');
  });
  
  // Skills
  lines.push('SKILLS');
  lines.push('-'.repeat(40));
  skillCategories.forEach((category) => {
    const categorySkills = getSkillsByCategory(category);
    if (categorySkills.length > 0) {
      lines.push(`${category}: ${categorySkills.map((s) => s.name).join(', ')}`);
    }
  });
  lines.push('');
  
  // Education
  lines.push('EDUCATION');
  lines.push('-'.repeat(40));
  education.forEach((edu) => {
    lines.push(`${edu.degree} in ${edu.field}`);
    lines.push(`${edu.school}, ${edu.location} (${edu.endYear})`);
    if (edu.gpa) lines.push(`GPA: ${edu.gpa}`);
    lines.push('');
  });
  
  // Certifications
  lines.push('CERTIFICATIONS');
  lines.push('-'.repeat(40));
  certifications.forEach((cert) => {
    lines.push(`${cert.name} - ${cert.issuer} (${formatDate(cert.date)})`);
  });
  lines.push('');
  
  // Languages
  lines.push('LANGUAGES');
  lines.push('-'.repeat(40));
  lines.push(languages.map((lang) => `${lang.name} (${lang.level})`).join(', '));
  
  return lines.join('\n');
}

// Export resume data as JSON for external PDF services
export function getResumeData() {
  return {
    profile,
    experience,
    skills,
    skillCategories,
    education,
    certifications,
    languages,
  };
}
