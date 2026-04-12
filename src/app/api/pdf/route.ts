import { NextResponse } from 'next/server';
import { profile } from '@/data/profile';

export async function GET() {
  // For now, redirect to the print page
  // In production, you could integrate with a PDF service or use puppeteer
  
  // Option 1: Redirect to print page with auto-print
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'http://localhost:3000';
  
  // Return JSON with instructions for downloading PDF
  return NextResponse.json({
    message: 'PDF Generation',
    instructions: [
      '1. Visit the print-friendly version of the resume',
      '2. Use your browser\'s Print function (Ctrl/Cmd + P)',
      '3. Select "Save as PDF" as the destination',
      '4. Click Save to download your PDF resume',
    ],
    printUrl: `${baseUrl}/print`,
    filename: `${profile.name.replace(/\s+/g, '_')}_Resume.pdf`,
  });
}
