/**
 * =============================================================================
 * EDUCATION DATA - Academic History & Certifications
 * =============================================================================
 *
 * AI CUSTOMIZATION INSTRUCTIONS:
 * This file contains education, certifications, and awards data.
 *
 * TO CUSTOMIZE:
 * 1. Replace example entries with your actual education
 * 2. List education in reverse chronological order (newest first)
 * 3. Add certifications if you have any professional certifications
 * 4. Include relevant awards and honors
 *
 * TO ADD A NEW EDUCATION ENTRY:
 * Copy an existing entry and modify all fields. Make sure to:
 * - Use a unique ID (e.g., 'edu-3', 'edu-4')
 * - Include start and end years
 * - GPA is optional (omit if you prefer not to share)
 *
 * TO REMOVE AN ENTRY:
 * Delete the entire object from the array including its curly braces and comma.
 * =============================================================================
 */

/**
 * Education entry type definition
 */
export interface Education {
  /** Unique identifier (e.g., 'edu-1', 'edu-2') */
  id: string;

  /**
   * Degree type
   * Examples: "Bachelor of Science", "Master of Arts", "Ph.D.", "Associate's"
   */
  degree: string;

  /**
   * Field of study
   * Examples: "Computer Science", "Business Administration", "Design"
   */
  field: string;

  /** School/University name */
  school: string;

  /**
   * School logo path (optional)
   * - Use '/logos/school.png' for local image
   * - Use full URL for external image
   */
  schoolLogo?: string;

  /** Location (City, State/Country) */
  location: string;

  /** Start year */
  startYear: number;

  /** End year (or expected graduation year) */
  endYear: number;

  /**
   * GPA (optional)
   * Format: "3.8/4.0" or "First Class Honours"
   */
  gpa?: string;

  /**
   * Academic honors (optional)
   * Examples: ["Magna Cum Laude", "Dean's List", "Valedictorian"]
   */
  honors?: string[];

  /**
   * Relevant courses (optional)
   * List courses relevant to your career
   */
  relevantCourses?: string[];
}

/**
 * Certification entry type definition
 */
export interface Certification {
  /** Unique identifier (e.g., 'cert-1', 'cert-2') */
  id: string;

  /** Certification name */
  name: string;

  /** Issuing organization */
  issuer: string;

  /**
   * Issuer logo path (optional)
   * - Use '/logos/issuer.png' for local image
   * - Use full URL for external image
   */
  issuerLogo?: string;

  /**
   * Date obtained in YYYY-MM format
   * Example: '2023-06'
   */
  date: string;

  /**
   * Expiration date in YYYY-MM format (optional)
   * Omit for certifications that don't expire
   */
  expirationDate?: string;

  /**
   * Credential ID (optional)
   * The unique identifier from the issuing organization
   */
  credentialId?: string;

  /**
   * Verification URL (optional)
   * Link to verify the certification
   */
  credentialUrl?: string;
}

/**
 * Award entry type definition
 */
export interface Award {
  /** Unique identifier (e.g., 'award-1', 'award-2') */
  id: string;

  /** Award title */
  title: string;

  /** Issuing organization or event */
  issuer: string;

  /** Date received (year or YYYY-MM format) */
  date: string;

  /** Description of the award (optional) */
  description?: string;
}

/**
 * =============================================================================
 * YOUR EDUCATION - CUSTOMIZE BELOW
 * =============================================================================
 *
 * Replace these example entries with your actual education.
 * List in reverse chronological order (most recent first).
 */
export const education: Education[] = [
  // ---------------------------------------------------------------------------
  // HIGHEST DEGREE
  // ---------------------------------------------------------------------------
  {
    id: 'edu-1',
    degree: 'Master of Science',
    field: 'Computer Science',
    school: 'Stanford University',
    // schoolLogo: '/logos/stanford.png',  // Uncomment if you have a logo
    location: 'Stanford, CA',
    startYear: 2014,
    endYear: 2016,
    gpa: '3.9/4.0',
    honors: ['Magna Cum Laude', "Dean's List"],
    relevantCourses: [
      'Distributed Systems',
      'Machine Learning',
      'Advanced Algorithms',
    ],
  },

  // ---------------------------------------------------------------------------
  // UNDERGRADUATE DEGREE
  // ---------------------------------------------------------------------------
  {
    id: 'edu-2',
    degree: 'Bachelor of Science',
    field: 'Computer Engineering',
    school: 'UC Berkeley',
    location: 'Berkeley, CA',
    startYear: 2010,
    endYear: 2014,
    gpa: '3.7/4.0',
    honors: ['Cum Laude'],
    relevantCourses: [
      'Data Structures',
      'Operating Systems',
      'Computer Networks',
    ],
  },

  // ---------------------------------------------------------------------------
  // ADD MORE EDUCATION HERE
  // ---------------------------------------------------------------------------
  // {
  //   id: 'edu-3',
  //   degree: 'Your Degree',
  //   field: 'Your Field',
  //   school: 'School Name',
  //   location: 'City, Country',
  //   startYear: 2018,
  //   endYear: 2022,
  //   gpa: '3.5/4.0',  // Optional
  //   honors: ['Honor 1'],  // Optional
  //   relevantCourses: ['Course 1', 'Course 2'],  // Optional
  // },
];

/**
 * =============================================================================
 * YOUR CERTIFICATIONS - CUSTOMIZE BELOW
 * =============================================================================
 *
 * Add your professional certifications here.
 * Remove this array or leave empty if you have no certifications.
 */
export const certifications: Certification[] = [
  {
    id: 'cert-1',
    name: 'AWS Solutions Architect - Professional',
    issuer: 'Amazon Web Services',
    // issuerLogo: '/logos/aws.png',  // Uncomment if you have a logo
    date: '2023-06',
    expirationDate: '2026-06',
    credentialId: 'AWS-SAP-123456',
    credentialUrl: 'https://aws.amazon.com/verification',
  },
  {
    id: 'cert-2',
    name: 'Google Cloud Professional Developer',
    issuer: 'Google Cloud',
    date: '2023-01',
    expirationDate: '2025-01',
    credentialId: 'GCP-PD-789012',
  },
  {
    id: 'cert-3',
    name: 'Certified Kubernetes Administrator',
    issuer: 'Cloud Native Computing Foundation',
    date: '2022-08',
    expirationDate: '2025-08',
    credentialId: 'CKA-345678',
  },

  // ---------------------------------------------------------------------------
  // ADD MORE CERTIFICATIONS HERE
  // ---------------------------------------------------------------------------
  // {
  //   id: 'cert-4',
  //   name: 'Certification Name',
  //   issuer: 'Issuing Organization',
  //   date: '2024-01',
  //   expirationDate: '2027-01',  // Optional
  //   credentialId: 'CERT-ID',    // Optional
  //   credentialUrl: 'https://verify.example.com',  // Optional
  // },
];

/**
 * =============================================================================
 * YOUR AWARDS - CUSTOMIZE BELOW
 * =============================================================================
 *
 * Add awards, honors, or recognition you've received.
 * Remove this array or leave empty if you have no awards.
 */
export const awards: Award[] = [
  {
    id: 'award-1',
    title: 'Employee of the Year',
    issuer: 'TechCorp Inc.',
    date: '2023',
    description: 'Recognized for outstanding contributions to the engineering team',
  },
  {
    id: 'award-2',
    title: 'Best Technical Talk',
    issuer: 'ReactConf 2022',
    date: '2022',
    description: 'Awarded for presentation on React performance optimization',
  },

  // ---------------------------------------------------------------------------
  // ADD MORE AWARDS HERE
  // ---------------------------------------------------------------------------
  // {
  //   id: 'award-3',
  //   title: 'Award Title',
  //   issuer: 'Organization',
  //   date: '2024',
  //   description: 'Brief description of the award',  // Optional
  // },
];

// =============================================================================
// HELPER FUNCTIONS
// =============================================================================

/**
 * Get highest/most recent education
 */
export function getLatestEducation(): Education | undefined {
  return education.length > 0 ? education[0] : undefined;
}

/**
 * Get active (non-expired) certifications
 */
export function getActiveCertifications(): Certification[] {
  const now = new Date();
  return certifications.filter((cert) => {
    if (!cert.expirationDate) return true;
    const expDate = new Date(cert.expirationDate + '-01');
    return expDate > now;
  });
}

/**
 * Get expired certifications
 */
export function getExpiredCertifications(): Certification[] {
  const now = new Date();
  return certifications.filter((cert) => {
    if (!cert.expirationDate) return false;
    const expDate = new Date(cert.expirationDate + '-01');
    return expDate <= now;
  });
}

/**
 * Check if any certifications exist
 */
export function hasCertifications(): boolean {
  return certifications.length > 0;
}

/**
 * Check if any awards exist
 */
export function hasAwards(): boolean {
  return awards.length > 0;
}

/**
 * Format education as a string
 */
export function formatEducation(edu: Education): string {
  return `${edu.degree} in ${edu.field} from ${edu.school} (${edu.endYear})`;
}

/**
 * Check if certification is expiring soon (within 6 months)
 */
export function isCertificationExpiringSoon(cert: Certification): boolean {
  if (!cert.expirationDate) return false;

  const now = new Date();
  const expDate = new Date(cert.expirationDate + '-01');
  const sixMonthsFromNow = new Date(now.getTime() + 180 * 24 * 60 * 60 * 1000);

  return expDate <= sixMonthsFromNow && expDate > now;
}
