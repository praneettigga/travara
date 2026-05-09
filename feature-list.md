# TRAVARA - Composable AI Travel Planning

## AI Trip Generation
  ### Inputs
  - Destination
  - Dates
  - Number of travelers
  - Budget range
  - Trip mode
  - Preferences/interests
  - Pace
  - Vibe
  ### Output
  - Multi-day itinerary
  - Hotels
  - Activities
  - Food
  - Transport suggestions
  - Estimated costs
  - Timing suggestions

  ### Trip Modes
  Examples:
  - Backpacking
  - Luxury
  - Hidden Gems
  - Food Tour
  - Weekend Escape
  - Hiking/Trekking
  - Family Vacation
  - Spiritual Journey
  - Adventure
  - Business + Leisure
  - Road Trip
  - Honeymoon
  
  Recommendation:
  Treat these as:
    preset AI behavioral profiles
  Example:
    {
      "mode": "Backpacking",
      "hotel_weight": "low",
      "food_weight": "street_food",
      "transport": "public",
      "activity_density": "high"
    }

  ### Budget Intelligence
  Instead of:
    Budget: ₹50,000
  
  Allow:
    Hotel: ₹20k
    Food: ₹10k
    Activities: ₹15k
    Transport: ₹5k

  ### Time + Geography Optimization
  
  The AI should:
  - minimize travel fatigue
  - cluster nearby activities
  - optimize day flow
  - avoid unrealistic scheduling
  
  Example:
    Morning:
      South Delhi
    Afternoon:
      Gurgaon
    Evening:
      Old Delhi
  Should trigger:
  “Thi  s route may involve heavy traffic and long travel times.”

  ### Dynamic Group Changes
  Example:
    5 travelers → Day 1-3
    2 travelers → Day 4-6
  
  AI adapts:
    - hotel rooms
    - activity recommendations
    - transport costs
    - restaurant reservations

  ### Weather-Aware AI
  Examples:
    “Rain forecast on Day 2”
    “Move outdoor trek to Day 3?”
    “Replace beach plan with indoor cafe route?”
  
  This makes AI feel alive.


## Interactive Planning Canvas (Main UX)
The main Itinerary builder UI will have two main parts: The editable canvas and the Recommendations + search side panel.

  ### Tab-Based Planning Workspace - Editable Canvas with a browser like tab system

  ### Drag-and-Drop Cards
    Card Types:
      - hotel
      - activity
      - restaurant
      - transport
      - notes
  
  Each card should contain:
      - title
      - image
      - timing
      - duration
      - location
      - cost
      - tags
      - AI notes

  ### Day Segmentation
  Must exist from day one.
  Structure:
    Day 1
     ├── Morning
     ├── Afternoon
     ├── Evening

  ### Editable AI
    Users should be able to:
      - replace activities
      - regenerate sections
      - swap hotels
      - adjust timing
      - lock activities

  ### Smart Recommendation Panel
  Recommendation system should include:
  AI Recommendations - Context-aware.
  Search -  Manual search.
  
  Filters
  - budget
  - family friendly
  - open now
  - nightlife
  - hidden gems
  - outdoor/indoor

## Collaborative + Adaptive Features

  ### Collaborative Planning  
    Features:
      - multi-user editing
      - comments
      - reactions/voting
      - shared itineraries
    
    This can create:
      - social sharing
      - virality
      - engagement

  ### Live Budget Tracker
  As users drag cards:
    Hotel: ₹15,000
    Food: ₹7,000
    Transport: ₹4,000

  ### Exportable Itinerary
  Export:
    - PDF
    - PNG
    - shareable link
