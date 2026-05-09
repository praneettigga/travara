# Backend Architecture

## Stack

- Django
- Django REST Framework
- PostgreSQL

## Responsibilities

Backend handles:
- authentication
- itinerary generation
- AI orchestration
- recommendation aggregation
- trip persistence
- collaboration syncing

## API Style

REST-first architecture.

Potential future additions:
- WebSockets for collaboration
- async task queues
- AI microservices

## Suggested App Structure

backend/
├── users/
├── trips/
├── itinerary/
├── recommendations/
├── ai/
├── budgets/
└── collaboration/
