/**
 * =============================================================================
 * PROFILE DATA - Personal Information
 * =============================================================================
 *
 * AI CUSTOMIZATION INSTRUCTIONS:
 * This file contains all personal information displayed on the resume.
 * 
 * TO CUSTOMIZE:
 * 1. Replace ALL placeholder values with real information
 * 2. Update the photo path or use empty string '' for no photo
 * 3. Add/remove social links as needed
 * 4. Keep the summary concise (2-4 sentences recommended)
 * 5. Highlights should be measurable achievements (numbers are good!)
 *
 * EXAMPLES FOR AI:
 * - To change name: profile.name = 'Your Full Name'
 * - To change title: profile.title = 'Your Job Title'
 * - To update email: profile.email = 'your.email@example.com'
 * - To add/remove highlights: modify the highlights array
 * =============================================================================
 */

/**
 * Profile type definition
 * All fields are required unless marked optional
 */
export interface Profile {
  /** Full name as it should appear on the resume */
  name: string;

  /** Professional title/headline (e.g., "Senior Software Engineer", "UX Designer") */
  title: string;

  /**
   * Profile photo path
   * - Use '/images/profile.jpg' for local image in public/images/
   * - Use full URL for external image
   * - Use '' (empty string) to hide the photo
   */
  photo: string;

  /** Professional email address */
  email: string;

  /**
   * Phone number (optional)
   * Format: Include country code for international (e.g., "+1 555-123-4567")
   */
  phone?: string;

  /**
   * Location
   * Format: "City, Country" or "City, State" or "Remote"
   */
  location: string;

  /** Personal website URL (optional) */
  website?: string;

  /** LinkedIn profile URL (optional) */
  linkedin?: string;

  /** GitHub profile URL (optional) */
  github?: string;

  /** Twitter/X profile URL (optional) */
  twitter?: string;

  /**
   * Professional summary
   * - Keep it 2-4 sentences
   * - Highlight years of experience, expertise areas, and what you're passionate about
   * - Use active voice and strong verbs
   */
  summary: string;

  /**
   * Key highlights/achievements (shown prominently on profile)
   * - Use 3-5 highlights
   * - Include metrics when possible (numbers, percentages, etc.)
   * - Start each with an action verb
   */
  highlights: string[];
}

/**
 * =============================================================================
 * YOUR PROFILE DATA - CUSTOMIZE BELOW
 * =============================================================================
 * 
 * Replace ALL values below with your actual information.
 * Delete or comment out any optional fields you don't want to use.
 */
export const profile: Profile = {
  // -------------------------------------------------------------------------
  // BASIC INFO (Required)
  // -------------------------------------------------------------------------
  name: 'Alex Johnson',
  title: 'Senior Software Engineer',
  photo: '/images/profile.jpg', // Set to '' to hide photo
  email: 'alex.johnson@example.com',
  location: 'San Francisco, CA',

  // -------------------------------------------------------------------------
  // CONTACT & SOCIAL (Optional - remove or set to undefined if not needed)
  // -------------------------------------------------------------------------
  phone: '+1 (555) 123-4567',
  website: 'https://alexjohnson.dev',
  linkedin: 'https://linkedin.com/in/alexjohnson',
  github: 'https://github.com/alexjohnson',
  twitter: 'https://twitter.com/alexjohnson',

  // -------------------------------------------------------------------------
  // PROFESSIONAL SUMMARY
  // Keep this concise: 2-4 sentences that capture who you are professionally
  // -------------------------------------------------------------------------
  summary: `Results-driven software engineer with 8+ years of experience building scalable web applications. Passionate about clean code, performance optimization, and mentoring junior developers. Expert in React, TypeScript, and cloud architecture.`,

  // -------------------------------------------------------------------------
  // KEY HIGHLIGHTS
  // 3-5 achievement statements with metrics when possible
  // -------------------------------------------------------------------------
  highlights: [
    'Led development of platform serving 1M+ users',
    'Reduced page load time by 60%',
    'Managed team of 5 engineers',
    'Speaker at 3 tech conferences',
  ],
};

// =============================================================================
// HELPER FUNCTIONS
// =============================================================================

/**
 * Get profile social links as an array
 * Useful for iterating over social links in components
 */
export function getProfileSocialLinks(): Array<{ platform: string; url: string }> {
  const links: Array<{ platform: string; url: string }> = [];

  if (profile.github) links.push({ platform: 'github', url: profile.github });
  if (profile.linkedin) links.push({ platform: 'linkedin', url: profile.linkedin });
  if (profile.twitter) links.push({ platform: 'twitter', url: profile.twitter });
  if (profile.website) links.push({ platform: 'website', url: profile.website });

  return links;
}

/**
 * Check if profile has a photo
 */
export function hasProfilePhoto(): boolean {
  return Boolean(profile.photo && profile.photo.length > 0);
}

/**
 * Get profile initials (for avatar fallback)
 */
export function getProfileInitials(): string {
  return profile.name
    .split(' ')
    .map((n) => n[0])
    .join('')
    .toUpperCase()
    .slice(0, 2);
}
