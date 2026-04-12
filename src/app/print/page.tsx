import type { Metadata } from 'next';
import { profile } from '@/data/profile';
import { experience } from '@/data/experience';
import { skillCategories, getSkillsByCategory, languages } from '@/data/skills';
import { education, certifications } from '@/data/education';
import { PrintButton } from '@/components/ui/PrintButton';

export const metadata: Metadata = {
  title: `Resume | ${profile.name}`,
  description: 'Print-friendly resume version',
};

export default function PrintPage() {
  const formatDate = (date: string) => {
    return new Date(date + '-01').toLocaleDateString('en-US', {
      month: 'short',
      year: 'numeric',
    });
  };

  return (
    <div className="max-w-4xl mx-auto p-8 bg-white text-black print:p-0 print:pt-8">
      {/* Header */}
      <header className="print-header mb-8 border-b pb-6">
        <h1 className="text-3xl font-bold mb-1">{profile.name}</h1>
        <p className="text-xl text-gray-600 mb-4">{profile.title}</p>
        <div className="flex flex-wrap gap-4 text-sm text-gray-600">
          <span>{profile.email}</span>
          <span>•</span>
          <span>{profile.phone}</span>
          <span>•</span>
          <span>{profile.location}</span>
          <span>•</span>
          <span>{profile.website}</span>
        </div>
      </header>

      {/* Summary */}
      <section className="mb-6">
        <h2 className="text-lg font-bold mb-2 uppercase tracking-wide">Summary</h2>
        <p className="text-gray-700">{profile.summary}</p>
      </section>

      {/* Experience */}
      <section className="mb-6">
        <h2 className="text-lg font-bold mb-3 uppercase tracking-wide">Experience</h2>
        <div className="space-y-4">
          {experience.map((exp) => (
            <div key={exp.id}>
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="font-semibold">{exp.title}</h3>
                  <p className="text-gray-600">{exp.company} • {exp.location}</p>
                </div>
                <span className="text-sm text-gray-500">
                  {formatDate(exp.startDate)} – {exp.current ? 'Present' : formatDate(exp.endDate!)}
                </span>
              </div>
              <ul className="list-disc list-inside mt-2 text-sm text-gray-700 space-y-1">
                {exp.achievements.slice(0, 3).map((achievement, i) => (
                  <li key={i}>{achievement}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* Skills */}
      <section className="mb-6">
        <h2 className="text-lg font-bold mb-3 uppercase tracking-wide">Skills</h2>
        <div className="grid grid-cols-2 gap-4">
          {skillCategories.map((category) => {
            const categorySkills = getSkillsByCategory(category);
            if (categorySkills.length === 0) return null;
            return (
              <div key={category}>
                <h3 className="font-medium text-sm text-gray-600 mb-1">{category}</h3>
                <p className="text-sm">{categorySkills.map(s => s.name).join(', ')}</p>
              </div>
            );
          })}
        </div>
      </section>

      {/* Education */}
      <section className="mb-6">
        <h2 className="text-lg font-bold mb-3 uppercase tracking-wide">Education</h2>
        <div className="space-y-3">
          {education.map((edu) => (
            <div key={edu.id} className="flex justify-between">
              <div>
                <h3 className="font-semibold">{edu.degree} in {edu.field}</h3>
                <p className="text-gray-600">{edu.school}</p>
              </div>
              <span className="text-sm text-gray-500">{edu.endYear}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Certifications */}
      <section className="mb-6">
        <h2 className="text-lg font-bold mb-3 uppercase tracking-wide">Certifications</h2>
        <div className="grid grid-cols-2 gap-2">
          {certifications.map((cert) => (
            <div key={cert.id} className="text-sm">
              <span className="font-medium">{cert.name}</span>
              <span className="text-gray-500"> – {cert.issuer}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Languages */}
      <section>
        <h2 className="text-lg font-bold mb-2 uppercase tracking-wide">Languages</h2>
        <p className="text-sm">
          {languages.map((lang) => `${lang.name} (${lang.level})`).join(', ')}
        </p>
      </section>

      {/* Print button - hidden when printing */}
      <div className="mt-8 text-center print:hidden">
        <PrintButton />
      </div>
    </div>
  );
}
