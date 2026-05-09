# Frontend Architecture

## Philosophy

Frontend is feature-based and component-driven.

Focus areas:
- composability
- immersive UX
- smooth interactions
- spatial planning experience

## Suggested Structure

src/
├── app/
├── components/
├── features/
├── hooks/
├── layouts/
├── pages/
├── services/
├── store/
├── styles/
├── types/
└── utils/

## Feature Organization

Each major feature owns:
- components
- hooks
- state
- services

Example:
features/
  itinerary/
  canvas/
  recommendations/

## State Management

Use:
- Zustand → client/global state
- React Query → server state

## Animations

Framer Motion is used for:
- page transitions
- drag interactions
- hover feedback
- spatial transitions
