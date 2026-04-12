import { Mail, Phone, MapPin, Calendar } from 'lucide-react';
import { profile } from '@/data/profile';
import { Section, Card, CardContent } from '@/components/ui';
import { ContactForm } from './ContactForm';
import { SocialLinks } from './SocialLinks';

export function ContactSection() {
  const contactInfo = [
    { icon: Mail, label: 'Email', value: profile.email, href: `mailto:${profile.email}` },
    { icon: Phone, label: 'Phone', value: profile.phone, href: `tel:${profile.phone}` },
    { icon: MapPin, label: 'Location', value: profile.location },
    { icon: Calendar, label: 'Availability', value: 'Open to opportunities' },
  ];

  return (
    <Section id="contact" title="Get In Touch" subtitle="Let's discuss your next project">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Contact Info */}
        <div className="lg:col-span-1">
          <Card>
            <CardContent className="p-6 space-y-6">
              <h3 className="font-semibold text-lg" style={{ color: 'var(--text-primary)' }}>
                Contact Information
              </h3>

              <div className="space-y-4">
                {contactInfo.map(({ icon: Icon, label, value, href }) => (
                  <div key={label} className="flex items-start gap-3">
                    <div
                      className="w-9 h-9 rounded-xl flex items-center justify-center flex-shrink-0"
                      style={{ background: 'var(--accent-subtle)', color: 'var(--accent)' }}
                    >
                      <Icon className="w-4 h-4" />
                    </div>
                    <div>
                      <p className="text-xs mb-0.5" style={{ color: 'var(--text-muted)' }}>{label}</p>
                      {href ? (
                        <a
                          href={href}
                          className="font-medium text-sm transition-colors hover:text-[var(--accent)]"
                          style={{ color: 'var(--text-primary)' }}
                        >
                          {value}
                        </a>
                      ) : (
                        <p className="font-medium text-sm" style={{ color: 'var(--text-primary)' }}>{value}</p>
                      )}
                    </div>
                  </div>
                ))}
              </div>

              <div className="pt-4" style={{ borderTop: '1px solid var(--border-subtle)' }}>
                <p className="text-sm mb-3" style={{ color: 'var(--text-muted)' }}>
                  Connect with me
                </p>
                <SocialLinks size="md" />
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Contact Form */}
        <div className="lg:col-span-2">
          <Card>
            <CardContent className="p-6">
              <h3 className="font-semibold text-lg mb-6" style={{ color: 'var(--text-primary)' }}>
                Send a Message
              </h3>
              <ContactForm />
            </CardContent>
          </Card>
        </div>
      </div>
    </Section>
  );
}
