import { motion } from 'framer-motion'

function HeroSection() {
  return (
    <section className="hero-background relative flex min-h-screen w-full flex-col items-center justify-start overflow-hidden bg-background pt-32 md:pt-40">
      <div className="pointer-events-none absolute inset-0 z-0 bg-gradient-to-b from-background/90 via-background/40 to-background" />

      <div className="relative z-10 mx-auto flex max-w-4xl flex-col items-center gap-6 px-margin-mobile text-center md:px-margin-desktop">
        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="font-display-lg text-display-lg text-on-surface drop-shadow-md"
        >
          Your India,
          <br />
          <span className="text-primary-fixed-dim">Intelligently Planned.</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1, ease: 'easeOut' }}
          className="max-w-2xl font-body-lg text-body-lg text-on-surface-variant drop-shadow-sm"
        >
          Rooted in tradition, powered by intelligence. Discover a sanctuary-like
          planning experience for your next journey through India.
        </motion.p>

        <motion.button
          type="button"
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2, ease: 'easeOut' }}
          className="mt-4 rounded-full bg-primary px-8 py-4 font-label-md text-label-md text-on-primary shadow-[0_0_20px_rgba(169,208,170,0.2)] transition-colors hover:bg-primary-fixed"
        >
          Start Planning
        </motion.button>
      </div>

      <div className="absolute bottom-12 left-1/2 flex -translate-x-1/2 animate-bounce flex-col items-center gap-2 text-on-surface-variant opacity-70">
        <span className="font-label-sm text-label-sm uppercase tracking-widest">Scroll</span>
        <span className="material-symbols-outlined text-[20px]">arrow_downward</span>
      </div>
    </section>
  )
}

export default HeroSection
