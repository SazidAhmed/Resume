import { NextResponse } from 'next/server';
import { generateTextResume } from '@/lib/pdf';
import { profile } from '@/data/profile';

export async function GET() {
  const textResume = generateTextResume();
  const filename = `${profile.name.replace(/\s+/g, '_')}_Resume.txt`;
  
  return new NextResponse(textResume, {
    headers: {
      'Content-Type': 'text/plain; charset=utf-8',
      'Content-Disposition': `attachment; filename="${filename}"`,
    },
  });
}
