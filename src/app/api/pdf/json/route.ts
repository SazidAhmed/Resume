import { NextResponse } from 'next/server';
import { getResumeData } from '@/lib/pdf';

export async function GET() {
  const resumeData = getResumeData();
  
  return NextResponse.json(resumeData, {
    headers: {
      'Content-Disposition': 'attachment; filename="resume-data.json"',
    },
  });
}
