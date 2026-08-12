# Backend Architecture

## Stack

- Node.js
- TypeScript
- NestJS
- NestJS REST APIs
- PostgreSQL

## Local Development

The backend and PostgreSQL database run locally during the current development
phase. Hosting, managed services, and production deployment architecture will be
selected later and are not part of the current backend design.

## Responsibilities

The backend handles:

- authentication
- itinerary generation
- AI orchestration
- recommendation aggregation
- trip persistence
- collaboration syncing

## API Style

Use a REST-first architecture implemented with NestJS controllers, services,
and modules.

Potential future additions:
- WebSockets for collaboration
- async task queues
- AI microservices
