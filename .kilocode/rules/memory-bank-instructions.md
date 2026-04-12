# Memory Bank Instructions

## Location

All memory bank files are in `.kilocode/rules/memory-bank/`:

- `brief.md` - Project goals, requirements, constraints
- `product.md` - Why this exists, user flows, UX goals
- `architecture.md` - Architecture, code patterns, conventions
- `tech.md` - Tech stack, setup, dependencies
- `context.md` - Current state, recent changes, focus areas

## Workflow

1. Read all memory bank files at task start
2. **CRITICAL**: After completing ANY significant changes (design updates, new features, bug fixes, configuration changes), you MUST update `context.md` BEFORE using `attempt_completion`. This is not optional.
3. Update other memory bank files when architecture, tech stack, or project goals change

## What Counts as "Significant Changes"

You must update the memory bank after:

- Design/styling changes (colors, fonts, layouts)
- New features or sections added
- Configuration changes (theme, features, settings)
- Bug fixes that affect user experience
- File structure changes
- Dependency updates
- Any change that would be important for the next developer/AI to know about

## How to Update

- Add to "Recently Completed" section with checkboxes
- Update "Current State" if project status changed
- Add entry to "Session History" with date and brief description
- Update relevant sections (color schemes, feature flags, etc.) if they changed

## Key Customization Files

The primary customization points are:
- `src/config/site.config.ts` - Site settings, theme, feature toggles
- `src/data/profile.ts` - Personal info and contact details
- `src/data/experience.ts` - Work history
- `src/data/skills.ts` - Skills and languages
- `src/data/education.ts` - Education and certifications
- `src/data/projects.ts` - Portfolio projects

## Priority

When handling conflicts: `brief.md` is the source of truth for requirements, `context.md` has the most current state.
