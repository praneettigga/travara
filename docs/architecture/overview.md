# Architecture Overview

The long-term goal is to support web, iOS, and Android applications.

## Stack

### Frontend

- React
- Vite
- TailwindCSS
- Zustand
- React Query
- Framer Motion

### Backend

- Node.js
- TypeScript
- NestJS
- NestJS REST APIs

### Database

- PostgreSQL

## Development and Deployment

For now, the frontend, backend, and PostgreSQL database run locally. Hosting,
cloud infrastructure, and production deployment decisions are intentionally
deferred until the application is ready to be deployed.

## Core Systems

- AI Trip Generation Engine
- Interactive Planning Canvas
- Recommendation System
- Budget Tracking
- Collaboration System
- Export System

## Architecture Philosophy

The platform follows a modular architecture:

- frontend handles interaction + visual planning
- backend handles orchestration + AI logic
- database stores itineraries, users, and trip state

The canvas is treated as the primary experience layer.
