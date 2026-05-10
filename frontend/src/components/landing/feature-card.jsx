import { motion } from 'framer-motion'

function FeatureCard({
  icon,
  title,
  description,
  accentClassName,
  className = '',
  glowClassName = '',
}) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.45, ease: 'easeOut' }}
      whileHover={{ y: -2 }}
      className={`group relative flex flex-col justify-between overflow-hidden rounded-xl border border-outline-variant/20 bg-surface-container-low p-8 transition-colors hover:border-outline-variant/40 ${className}`}
    >
      {glowClassName ? <div className={`absolute h-64 w-64 rounded-full blur-3xl ${glowClassName}`} /> : null}

      <div className="relative z-10 flex flex-col gap-4">
        <div
          className={`mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-surface-variant ${accentClassName}`}
        >
          <span className="material-symbols-outlined">{icon}</span>
        </div>
        <h3 className="font-headline-md text-headline-md text-on-surface">{title}</h3>
        <p className="font-body-md text-body-md text-on-surface-variant">{description}</p>
      </div>
    </motion.article>
  )
}

export default FeatureCard
