# Product Context: Live Resume Template

## Why This Template Exists

A professional online presence is essential for job seekers and professionals. This template provides a proven, visually appealing structure that AI can quickly customize for any user's background. Instead of starting from scratch, users describe their experience and the AI modifies the template.

## Problems It Solves

1. **Speed**: Creating a professional resume site from scratch takes days/weeks
2. **Design Expertise**: Not everyone is a designer—template provides proven layout
3. **Content Structure**: Users struggle with what to include—template provides the framework
4. **Responsive Design**: Mobile optimization is built-in
5. **PDF Export**: Print-optimized view for traditional resume needs
6. **Portfolio Integration**: Separate section for showcasing projects

## How It Should Work (User Flow)

1. User starts with this template
2. User describes their background to AI assistant
3. AI updates data files in `src/data/` with custom content
4. AI adjusts colors/branding in `src/config/site.config.ts`
5. User previews changes with hot reload
6. Iterate until satisfied
7. Deploy

## Key User Experience Goals

- **Customization in Minutes**: AI should be able to customize basic content in under 5 minutes
- **Preview-Driven**: Changes visible immediately via hot reload
- **Section Independence**: Each section works standalone—can add/remove easily
- **Professional Output**: Final result should look custom, not template-y
- **Print Ready**: One-click PDF/print functionality

## What Makes a Good Resume Site

The template follows resume best practices:

1. **Profile Header**: Name, title, photo, quick contact info
2. **Summary**: Brief professional overview
3. **Experience Timeline**: Work history with achievements
4. **Skills Section**: Visual skill bars or categorized lists
5. **Education**: Degrees, certifications, awards
6. **Portfolio**: Project showcase with filtering
7. **Contact**: Professional way to reach out

## Integration Points

- **Analytics**: Space for Google Analytics, Plausible, etc.
- **Forms**: Contact form with email integration ready
- **PDF Export**: API routes for text/JSON export
