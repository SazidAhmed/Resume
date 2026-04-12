/**
 * =============================================================================
 * SITE CONFIGURATION
 * =============================================================================
 * 
 * This is the MAIN configuration file for customizing your resume/portfolio.
 * 
 * AI INSTRUCTIONS:
 * - This file controls global site settings, theme, and feature toggles
 * - Modify values here to change the site's appearance and behavior
 * - All settings are type-safe with clear descriptions
 * 
 * QUICK CUSTOMIZATION:
 * 1. Update `siteConfig.theme.primaryColor` to change the accent color
 * 2. Toggle features on/off in `siteConfig.features`
 * 3. Customize social platforms in `siteConfig.socialPlatforms`
 * =============================================================================
 */

export interface SiteConfig {
  /** Site metadata for SEO */
  meta: {
    /** Title template - {{name}} and {{title}} will be replaced */
    titleTemplate: string;
    /** Default meta description */
    defaultDescription: string;
    /** Keywords for SEO */
    keywords: string[];
    /** Base URL of the site (for social sharing) */
    siteUrl: string;
    /** Language code (e.g., 'en', 'es', 'fr') */
    locale: string;
  };

  /** Theme configuration */
  theme: {
    /**
     * Primary color in HSL format: "hue saturation% lightness%"
     * Examples:
     * - Blue: "220 92% 50%"
     * - Purple: "280 70% 50%"
     * - Green: "150 70% 45%"
     * - Orange: "30 90% 50%"
     * - Pink: "330 70% 50%"
     * - Teal: "180 70% 45%"
     */
    primaryColor: string;
    /** Enable dark mode toggle */
    darkModeEnabled: boolean;
    /** Default color mode: 'light' | 'dark' | 'system' */
    defaultColorMode: 'light' | 'dark' | 'system';
    /** Font family for the site */
    fontFamily: 'Inter' | 'Roboto' | 'Open Sans' | 'Poppins' | 'Montserrat';
  };

  /** Feature toggles - enable/disable sections */
  features: {
    /** Show/hide the portfolio section */
    portfolio: boolean;
    /** Show/hide the contact form */
    contactForm: boolean;
    /** Show/hide the PDF download button */
    pdfDownload: boolean;
    /** Show/hide the print button */
    printButton: boolean;
    /** Show/hide skill progress bars (vs just listing skills) */
    skillBars: boolean;
    /** Show/hide experience timeline animation */
    animatedTimeline: boolean;
    /** Show/hide certifications section */
    certifications: boolean;
    /** Show/hide languages section */
    languages: boolean;
    /** Show/hide awards section */
    awards: boolean;
    /** Enable smooth scroll navigation */
    smoothScroll: boolean;
    /** Show side navigation on desktop */
    sideNav: boolean;
  };

  /** Navigation configuration */
  navigation: {
    /** Navigation items to display */
    items: Array<{
      /** Display label */
      label: string;
      /** Link href (anchor #id or path /page) */
      href: string;
      /** Icon name from lucide-react */
      icon: string;
      /** Is this link visible? */
      enabled: boolean;
    }>;
  };

  /** Social media platforms configuration */
  socialPlatforms: {
    /** Platform identifier */
    [key: string]: {
      /** Display name */
      name: string;
      /** Icon name from lucide-react */
      icon: string;
      /** URL pattern - {{username}} will be replaced */
      urlPattern: string;
      /** Is this platform enabled? */
      enabled: boolean;
    };
  };

  /** Section display order (for customizing layout) */
  sectionOrder: string[];

  /** Contact form configuration */
  contactForm: {
    /** Form submission endpoint (API route or external service) */
    endpoint: string;
    /** Success message to display */
    successMessage: string;
    /** Error message to display */
    errorMessage: string;
  };
}

/**
 * =============================================================================
 * MAIN SITE CONFIGURATION
 * =============================================================================
 * Modify these values to customize your resume/portfolio site.
 */
export const siteConfig: SiteConfig = {
  // ---------------------------------------------------------------------------
  // SEO & METADATA
  // ---------------------------------------------------------------------------
  meta: {
    titleTemplate: '{{name}} | {{title}}',
    defaultDescription: 'Professional resume and portfolio website',
    keywords: ['resume', 'portfolio', 'developer', 'software engineer', 'web developer'],
    siteUrl: 'https://your-domain.com',
    locale: 'en',
  },

  // ---------------------------------------------------------------------------
  // THEME SETTINGS
  // ---------------------------------------------------------------------------
  theme: {
    // To change the primary color, use HSL format: "hue saturation lightness"
    // Popular colors:
    // - Blue (default): "220 92% 50%"
    // - Purple: "280 70% 50%"
    // - Green: "150 70% 45%"
    // - Orange: "30 90% 50%"
    // - Pink: "330 70% 50%"
    // - Teal: "180 70% 45%"
    // - Red: "0 80% 50%"
    primaryColor: '220 92% 50%',
    darkModeEnabled: true,
    defaultColorMode: 'system',
    fontFamily: 'Inter',
  },

  // ---------------------------------------------------------------------------
  // FEATURE TOGGLES
  // Set to `true` to enable, `false` to disable
  // ---------------------------------------------------------------------------
  features: {
    portfolio: true,
    contactForm: true,
    pdfDownload: true,
    printButton: true,
    skillBars: true,
    animatedTimeline: true,
    certifications: true,
    languages: true,
    awards: true,
    smoothScroll: true,
    sideNav: true,
  },

  // ---------------------------------------------------------------------------
  // NAVIGATION
  // Customize the navigation menu items
  // ---------------------------------------------------------------------------
  navigation: {
    items: [
      { label: 'About', href: '#about', icon: 'User', enabled: true },
      { label: 'Experience', href: '#experience', icon: 'Briefcase', enabled: true },
      { label: 'Skills', href: '#skills', icon: 'Code', enabled: true },
      { label: 'Education', href: '#education', icon: 'GraduationCap', enabled: true },
      { label: 'Portfolio', href: '/portfolio', icon: 'Folder', enabled: true },
      { label: 'Contact', href: '#contact', icon: 'Mail', enabled: true },
    ],
  },

  // ---------------------------------------------------------------------------
  // SOCIAL MEDIA PLATFORMS
  // Configure available social platforms for the profile
  // ---------------------------------------------------------------------------
  socialPlatforms: {
    github: {
      name: 'GitHub',
      icon: 'Github',
      urlPattern: 'https://github.com/{{username}}',
      enabled: true,
    },
    linkedin: {
      name: 'LinkedIn',
      icon: 'Linkedin',
      urlPattern: 'https://linkedin.com/in/{{username}}',
      enabled: true,
    },
    twitter: {
      name: 'Twitter',
      icon: 'Twitter',
      urlPattern: 'https://twitter.com/{{username}}',
      enabled: true,
    },
    instagram: {
      name: 'Instagram',
      icon: 'Instagram',
      urlPattern: 'https://instagram.com/{{username}}',
      enabled: false,
    },
    youtube: {
      name: 'YouTube',
      icon: 'Youtube',
      urlPattern: 'https://youtube.com/@{{username}}',
      enabled: false,
    },
    dribbble: {
      name: 'Dribbble',
      icon: 'Dribbble',
      urlPattern: 'https://dribbble.com/{{username}}',
      enabled: false,
    },
    behance: {
      name: 'Behance',
      icon: 'Palette',
      urlPattern: 'https://behance.net/{{username}}',
      enabled: false,
    },
  },

  // ---------------------------------------------------------------------------
  // SECTION ORDER
  // Reorder sections by changing the array order
  // ---------------------------------------------------------------------------
  sectionOrder: [
    'profile',
    'summary',
    'experience',
    'skills',
    'education',
    'certifications',
    'portfolio',
    'contact',
  ],

  // ---------------------------------------------------------------------------
  // CONTACT FORM SETTINGS
  // ---------------------------------------------------------------------------
  contactForm: {
    endpoint: '/api/contact',
    successMessage: 'Thank you! Your message has been sent successfully.',
    errorMessage: 'Oops! Something went wrong. Please try again later.',
  },
};

/**
 * Helper function to get the primary color CSS variable
 */
export function getPrimaryColor(): string {
  return siteConfig.theme.primaryColor;
}

/**
 * Helper function to check if a feature is enabled
 */
export function isFeatureEnabled(feature: keyof SiteConfig['features']): boolean {
  return siteConfig.features[feature];
}

/**
 * Helper function to get enabled navigation items
 */
export function getEnabledNavItems() {
  return siteConfig.navigation.items.filter((item) => item.enabled);
}

/**
 * Helper function to get enabled social platforms
 */
export function getEnabledSocialPlatforms() {
  return Object.entries(siteConfig.socialPlatforms)
    .filter(([, config]) => config.enabled)
    .map(([key, config]) => ({ key, ...config }));
}
