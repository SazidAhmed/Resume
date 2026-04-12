import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { Header, Footer, SideNav } from '@/components/layout';
import { profile } from '@/data/profile';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

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
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.className} antialiased`}>
        <Header />
        <SideNav />
        <main className="pt-16">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
