'use client';

import { motion } from 'framer-motion';
import { GraduationCap, MapPin, Award } from 'lucide-react';
import { education } from '@/data/education';
import { Section, Badge, Card, CardContent } from '@/components/ui';

export function EducationSection() {
  return (
    <Section id="education" title="Education" subtitle="Academic background and qualifications">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6">
        {education.map((edu, index) => (
          <motion.div
            key={edu.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true }}
          >
            <Card hover>
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-lg bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center flex-shrink-0">
                    <GraduationCap className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold text-gray-900 dark:text-white">
                      {edu.degree} in {edu.field}
                    </h3>
                    <p className="text-blue-600 dark:text-blue-400 font-medium">
                      {edu.school}
                    </p>
                    <div className="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400 mt-1">
                      <MapPin className="w-4 h-4" />
                      {edu.location} · {edu.startYear} - {edu.endYear}
                    </div>
                    {edu.gpa && (
                      <p className="text-sm text-gray-600 dark:text-gray-400 mt-2">
                        GPA: {edu.gpa}
                      </p>
                    )}
                    {edu.honors && edu.honors.length > 0 && (
                      <div className="flex flex-wrap gap-2 mt-3">
                        {edu.honors.map((honor) => (
                          <Badge key={honor} variant="success" size="sm">
                            <Award className="w-3 h-3 mr-1" />
                            {honor}
                          </Badge>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}
