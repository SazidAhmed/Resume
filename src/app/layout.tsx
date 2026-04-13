import type { Metadata } from 'next';
import { Plus_Jakarta_Sans } from 'next/font/google';
import { FloatingDock, Footer } from '@/components/layout';
import { CursorSpotlight, NoiseOverlay } from '@/components/ui';
import { ThemeProvider } from '@/components/ThemeProvider';
import { profile } from '@/data/profile';
import './globals.css';

const plusJakartaSans = Plus_Jakarta_Sans({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: `${profile.name} | ${profile.title}`,
  description: profile.summary,
  keywords: ['resume', 'portfolio', 'developer', 'software engineer'],
  authors: [{ name: profile.name }],
  openGraph: {
    title: `${profile.name} | ${profile.title}`,
    description: profile.summary,
    type: 'profile',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth" suppressHydrationWarning>
      <body className={`${plusJakartaSans.className} antialiased`}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <NoiseOverlay />
          <CursorSpotlight />
          <FloatingDock />
          <main className="pt-16 pb-32">{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
