# Project Brief: Live Resume Template

## Purpose

This is a template designed for AI-assisted creation of professional resumes and portfolio websites. Users will interact with an AI via chat to quickly generate customized, visually appealing resume sites.

## Target Users

- Job seekers creating online resumes
- Developers showcasing their portfolios
- Professionals who want a web-based CV
- Users leveraging AI-assisted coding for rapid customization

## Core Use Case

Users describe their background to an AI assistant, which then customizes this template by:

1. Updating data files in `src/data/`
2. Adjusting theme colors via `src/config/site.config.ts`
3. Toggling features on/off as needed
4. Customizing icons and imagery

## Key Requirements

### Must Have

- Modern, professional design suitable for any industry
- Fully responsive (mobile-first)
- All content centralized in data files for easy AI modification
- Clear component structure for section-by-section customization
- Print-optimized view for PDF export
- Fast performance

### Nice to Have

- Smooth scroll animations (✅ implemented)
- Dark mode support (✅ implemented)
- Portfolio section with project filtering (✅ implemented)
- Contact form functionality
- Side navigation for desktop (✅ implemented)

## Success Metrics

- Time to customized resume: < 10 minutes with AI
- Mobile Lighthouse score: > 90
- All sections easily customizable via data files

## Constraints

- Pure frontend by default (no backend/database required)
- Minimal dependencies
- Framework: Next.js 16 + React 19 + Tailwind CSS 4
