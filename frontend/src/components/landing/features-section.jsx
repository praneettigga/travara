import FeatureCard from './feature-card'

const FEATURE_ITEMS = [
  {
    icon: 'auto_awesome',
    title: 'AI Itineraries',
    description:
      'Generative schedules that adapt to your pace, preferences, and real-time conditions. No more rigid templates.',
    accentClassName: 'text-primary',
    className: 'md:col-span-8',
    glowClassName:
      '-right-20 -top-20 bg-primary/5 group-hover:bg-primary/10',
  },
  {
    icon: 'account_balance_wallet',
    title: 'Budget Control',
    description:
      'Transparent tracking with smart alerts, keeping you comfortably within limits.',
    accentClassName: 'text-secondary',
    className: 'md:col-span-4',
  },
  {
    icon: 'travel_explore',
    title: 'Hidden Gems',
    description:
      'Discover off-the-beaten-path locations curated by local experts and filtered by AI.',
    accentClassName: 'text-tertiary',
    className: 'md:col-span-5',
  },
  {
    icon: 'dashboard_customize',
    title: 'Visual Planning Canvas',
    description:
      'A spatial interface to map out your journey. Drag, drop, and visualize your entire route in a quiet, distraction-free environment.',
    accentClassName: 'text-primary-fixed-dim',
    className: 'md:col-span-7',
    glowClassName:
      '-bottom-20 -left-20 bg-tertiary/5 group-hover:bg-tertiary/10',
  },
]

function FeaturesSection() {
  return (
    <section className="relative z-10 mx-auto flex w-full max-w-container-max flex-col gap-12 bg-background px-margin-mobile py-24 md:px-margin-desktop">
      <div className="mb-8 flex flex-col gap-4 text-center md:text-left">
        <h2 className="font-headline-lg text-headline-lg text-on-surface">
          Effortless Exploration
        </h2>
        <p className="max-w-xl font-body-md text-body-md text-on-surface-variant">
          Tools designed to quietly support your journey, fading into the
          background so you can focus on the experience.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-gutter md:grid-cols-12">
        {FEATURE_ITEMS.map((item) => (
          <FeatureCard key={item.title} {...item} />
        ))}
      </div>
    </section>
  )
}

export default FeaturesSection
