# Data Flow

## Trip Creation Flow

User Input
→ frontend form/canvas
→ API request
→ AI itinerary engine
→ structured itinerary response
→ frontend canvas rendering

## Recommendation Flow

Context
(destination, budget, trip mode, timing)
→ backend recommendation system
→ ranked suggestions
→ frontend recommendation panel

## Editable AI Flow

User edits itinerary
→ frontend state updates
→ partial regeneration request
→ AI adapts affected sections only
