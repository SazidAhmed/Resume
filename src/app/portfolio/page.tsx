import type { Metadata } from 'next';
import { Container, Section } from '@/components/ui';
import { ProjectGrid } from '@/components/portfolio';
import { profile } from '@/data/profile';

export const metadata: Metadata = {
  title: `Portfolio | ${profile.name}`,
  description: `Explore projects and work by ${profile.name}`,
};

export default function PortfolioPage() {
  return (
    <Container size="lg" className="py-12">
      <Section
        title="My Portfolio"
        subtitle="Explore my projects and work"
      >
        <ProjectGrid showFilters />
      </Section>
    </Container>
  );
}
