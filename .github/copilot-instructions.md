# TRAVARA Engineering Guidelines

TRAVARA is an AI-assisted visual trip planning platform focused on highly interactive itinerary building.

## Tech Stack

Frontend:
- React
- TailwindCSS
- Vite

Backend:
- Django
- Django REST Framework

Database:
- PostgreSQL

## Frontend Philosophy

The UI should feel:
- immersive
- smooth
- modern
- spatial
- minimal
- cinematic

Avoid:
- cluttered layouts
- excessive borders
- bright white backgrounds
- generic dashboard aesthetics

Follow the design system in:
docs/design/DESIGN.md

## Component Rules

- Prefer reusable components
- Keep components small and composable
- Avoid giant monolithic files
- Use feature-based organization

## Styling Rules

- Use Tailwind utilities
- Avoid inline styles
- Use semantic spacing
- Prefer soft shadows and tonal layering
- Rounded corners are mandatory

## Animation Philosophy

Animations should:
- feel premium
- be subtle
- support spatial understanding
- never distract users

Use:
- Framer Motion

Avoid:
- excessive bouncing
- flashy transitions

## Naming Conventions

Components:
PascalCase

Hooks:
useSomething

Files:
kebab-case

## State Management

Use:
- Zustand for app state
- React Query for server state

Avoid prop drilling.

## AI System Notes

The itinerary engine is context-aware and geography-aware.

AI outputs should:
- minimize travel fatigue
- optimize routes
- adapt to weather
- respect budget allocations
- support editable itineraries

## UX Goals

The canvas is the core experience.

Users should feel like:
- they are visually crafting a journey
- not filling forms

The interface should prioritize:
- drag-and-drop
- visual hierarchy
- exploration
- adaptability
