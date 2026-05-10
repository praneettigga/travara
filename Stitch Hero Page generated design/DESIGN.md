---
name: Rooted Warmth
colors:
  surface: '#121412'
  surface-dim: '#121412'
  surface-bright: '#383a37'
  surface-container-lowest: '#0d0f0d'
  surface-container-low: '#1a1c1a'
  surface-container: '#1e201e'
  surface-container-high: '#292a28'
  surface-container-highest: '#333533'
  on-surface: '#e2e3df'
  on-surface-variant: '#c2c8bf'
  inverse-surface: '#e2e3df'
  inverse-on-surface: '#2f312e'
  outline: '#8c938a'
  outline-variant: '#424841'
  surface-tint: '#a9d0aa'
  primary: '#a9d0aa'
  on-primary: '#15371c'
  primary-container: '#789d7a'
  on-primary-container: '#113319'
  inverse-primary: '#446647'
  secondary: '#f0bd8b'
  on-secondary: '#482904'
  secondary-container: '#65411a'
  on-secondary-container: '#e1af7e'
  tertiary: '#b7ccb9'
  on-tertiary: '#233427'
  tertiary-container: '#859988'
  on-tertiary-container: '#1f3124'
  error: '#ffb4ab'
  on-error: '#690005'
  error-container: '#93000a'
  on-error-container: '#ffdad6'
  primary-fixed: '#c5edc5'
  primary-fixed-dim: '#a9d0aa'
  on-primary-fixed: '#002109'
  on-primary-fixed-variant: '#2c4e31'
  secondary-fixed: '#ffdcbd'
  secondary-fixed-dim: '#f0bd8b'
  on-secondary-fixed: '#2c1600'
  on-secondary-fixed-variant: '#623f18'
  tertiary-fixed: '#d3e8d5'
  tertiary-fixed-dim: '#b7ccb9'
  on-tertiary-fixed: '#0e1f13'
  on-tertiary-fixed-variant: '#394b3d'
  background: '#121412'
  on-background: '#e2e3df'
  surface-variant: '#333533'
typography:
  display-lg:
    fontFamily: Nunito Sans
    fontSize: 48px
    fontWeight: '800'
    lineHeight: 56px
    letterSpacing: -0.02em
  headline-lg:
    fontFamily: Nunito Sans
    fontSize: 32px
    fontWeight: '700'
    lineHeight: 40px
  headline-lg-mobile:
    fontFamily: Nunito Sans
    fontSize: 28px
    fontWeight: '700'
    lineHeight: 36px
  headline-md:
    fontFamily: Nunito Sans
    fontSize: 24px
    fontWeight: '600'
    lineHeight: 32px
  body-lg:
    fontFamily: Nunito Sans
    fontSize: 18px
    fontWeight: '400'
    lineHeight: 28px
  body-md:
    fontFamily: Nunito Sans
    fontSize: 16px
    fontWeight: '400'
    lineHeight: 24px
  label-md:
    fontFamily: Nunito Sans
    fontSize: 14px
    fontWeight: '600'
    lineHeight: 20px
    letterSpacing: 0.01em
  label-sm:
    fontFamily: Nunito Sans
    fontSize: 12px
    fontWeight: '700'
    lineHeight: 16px
    letterSpacing: 0.04em
rounded:
  sm: 0.25rem
  DEFAULT: 0.5rem
  md: 0.75rem
  lg: 1rem
  xl: 1.5rem
  full: 9999px
spacing:
  unit: 8px
  gutter: 24px
  margin-mobile: 16px
  margin-desktop: 48px
  container-max: 1280px
---

## Brand & Style
This design system is built on the philosophy of "Rooted Warmth," an aesthetic that bridges the gap between digital precision and organic comfort. It is designed for users who seek a sanctuary-like digital environment—one that feels stable, quiet, and deeply grounded. 

The style utilizes a blend of **Minimalism** and **Tactile Modernism**. By moving away from clinical pure blacks and whites, the system uses deep, forest-inspired charcoals and earthy mid-tones to create a sense of environmental depth. The visual language evokes the feeling of a high-end architectural cabin: dark, moody, yet inviting and tactile. High-contrast typography ensures that despite the moody atmosphere, clarity and accessibility remain paramount.

## Colors
The palette is centered around "The Canopy"—a range of deep forest greens and charcoal grays that form a low-fatigue foundation. 

- **Primary Forest Green (#789D7A):** A desaturated, warm sage used for calls to action and primary brand moments. It provides enough luminance to remain accessible against dark backgrounds without causing eye strain.
- **Earthy Accent (#D4A373):** A clay-inspired secondary color used sparingly for highlights, status indicators, or interactive feedback.
- **Foundation Neutrals:** The background is a custom "Deep Bark" (#0E110F), which is softer than pure black. Surfaces use a slightly lighter, green-tinted charcoal (#1A1F1B) to distinguish content layers.
- **High-Contrast Text:** Typography utilizes "Off-White Mist" (#F2F4F2) for primary headers to ensure maximum readability, while secondary text uses a muted "Lichen Gray" (#A1ADA3) to maintain visual hierarchy.

## Typography
The typography system relies exclusively on **Nunito Sans** to capitalize on its rounded terminals, which reinforce the organic and friendly nature of the design. 

To maintain high readability against dark backgrounds:
- **Weights:** Use SemiBold (600) or Bold (700) for headlines to ensure they don't "bleed" into the dark background.
- **Spacing:** Letter spacing is slightly increased for smaller labels to prevent the rounded characters from touching.
- **Hierarchy:** Use the "Off-White Mist" for all headers and "Lichen Gray" for body copy. This 20-30% contrast gap between headers and body text creates a natural reading flow that guides the eye without requiring heavy dividers.

## Layout & Spacing
The layout follows a **Fluid Grid** philosophy based on an 8px spacing scale, ensuring a rhythmic and predictable flow of information.

- **Grid:** A standard 12-column grid is used for desktop (breakpoints at 1440px and 1024px). For mobile (375px), the grid collapses to 4 columns.
- **Rhythm:** Generous white space (or "dark space") is encouraged to prevent the organic elements from feeling cluttered. Gutters are kept wide (24px) to allow components to "breathe" against the deep background.
- **Padding:** Internal component padding should favor the larger side of the scale (minimum 16px) to maintain the "warm" and spacious aesthetic.

## Elevation & Depth
Elevation in this design system is achieved through **Tonal Layering** and **Ambient Green Shadows**, rather than traditional high-opacity black shadows.

1.  **Surfaces:** As elements rise in elevation, they become lighter and slightly "greener." The base is #0E110F; a card is #1A1F1B; a floating modal is #242B25.
2.  **Shadows:** Use extremely soft, large-radius shadows with a hint of the primary forest green (#000000 at 40% combined with a #1B2B21 tint). This creates a "glow" effect that feels like mossy depth rather than a clinical drop shadow.
3.  **Backdrop:** For overlays, use a heavy backdrop blur (12px) with a 60% opacity of the neutral color to maintain the "frosted forest" feel.

## Shapes
In alignment with the organic narrative, sharp corners are strictly avoided. A standard corner radius of **12px** (0.75rem) is applied to all primary components including cards, buttons, and input fields.

- **Small Components:** Tags and chips should use a pill-shape (full rounding) to contrast against the more structural 12px cards.
- **Icons:** Use "Rounded" variant icons with a stroke weight of 2px to match the visual weight of the Nunito Sans typeface. Avoid sharp-edged icons or hair-line strokes.

## Components
- **Buttons:** Primary buttons use the Forest Green fill with dark charcoal text (#0E110F) for maximum contrast. Secondary buttons should be "Ghost" style with a 1.5px border in Sage.
- **Inputs:** Text fields use a deep charcoal fill (#121412) with a subtle 1px border in a muted green-gray. On focus, the border transitions to the Earthy Accent (#D4A373).
- **Cards:** Cards feature a 12px radius and a very subtle 1px border (#2D352F) to define edges against the background. They do not use heavy shadows unless they are interactive or hoverable.
- **Chips/Badges:** Use low-saturation background tints with high-saturation text to denote status without breaking the earthy vibe.
- **Lists:** Items are separated by subtle "Lichen" colored horizontal rules with 10% opacity, ensuring a clean but soft separation of data.