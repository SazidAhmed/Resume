'use client';

import { motion } from 'framer-motion';
import { Award, ExternalLink, Calendar } from 'lucide-react';
import { certifications } from '@/data/education';
import { Section, Card, CardContent, Badge } from '@/components/ui';

export function CertificationsSection() {
  const formatDate = (date: string) => {
    return new Date(date + '-01').toLocaleDateString('en-US', {
      month: 'short',
      year: 'numeric',
    });
  };

  return (
    <Section title="Certifications" subtitle="Professional certifications and credentials">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {certifications.map((cert, index) => (
          <motion.div
            key={cert.id}
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.3, delay: index * 0.1 }}
            viewport={{ once: true }}
          >
            <Card hover className="h-full">
              <CardContent className="p-6 flex flex-col h-full">
                <div className="flex items-start gap-3 mb-4">
                  <div className="w-10 h-10 rounded-lg bg-purple-100 dark:bg-purple-900/30 flex items-center justify-center flex-shrink-0">
                    <Award className="w-5 h-5 text-purple-600 dark:text-purple-400" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="font-semibold text-gray-900 dark:text-white text-sm leading-tight">
                      {cert.name}
                    </h3>
                    <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">
                      {cert.issuer}
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-2 text-xs text-gray-500 dark:text-gray-500 mb-4">
                  <Calendar className="w-3.5 h-3.5" />
                  <span>Issued {formatDate(cert.date)}</span>
                  {cert.expirationDate && (
                    <span>· Expires {formatDate(cert.expirationDate)}</span>
                  )}
                </div>

                <div className="mt-auto">
                  {cert.credentialUrl ? (
                    <a
                      href={cert.credentialUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 text-sm text-blue-600 dark:text-blue-400 hover:underline"
                    >
                      View Credential
                      <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                  ) : (
                    cert.credentialId && (
                      <Badge variant="secondary" size="sm">
                        ID: {cert.credentialId}
                      </Badge>
                    )
                  )}
                </div>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}
