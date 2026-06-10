import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const NAV_LINKS = [
  { label: 'Home', href: '#', active: true },
  { label: 'Explore', href: '#explore' },
  { label: 'Itineraries', href: '#itineraries' },
  { label: 'Bookings', href: '#bookings' },
]

function TopNavBar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <>
      {/* ── Floating Pill Nav ── */}
      <motion.nav
        initial={{ opacity: 0, y: -16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: 'easeOut' }}
        className={`fixed left-0 right-0 z-50 mx-auto transition-all duration-500 ${
          scrolled ? 'top-3' : 'top-5'
        }`}
        style={{ width: 'min(900px, calc(100vw - 32px))' }}
        aria-label="Primary navigation"
      >
        {/* Glass pill container */}
        <div
          className={`flex items-center justify-between gap-4 rounded-full border px-5 py-3 transition-all duration-500 ${
            scrolled
              ? 'border-outline-variant/30 bg-surface-container-lowest/80 shadow-[0_8px_32px_rgba(0,0,0,0.45),0_0_0_1px_rgba(169,208,170,0.06)] backdrop-blur-xl'
              : 'border-outline-variant/20 bg-surface-container-lowest/60 shadow-[0_4px_24px_rgba(0,0,0,0.35),0_0_0_1px_rgba(169,208,170,0.04)] backdrop-blur-md'
          }`}
        >
          {/* ── Logo ── */}
          <a
            href="#"
            className="shrink-0 font-display-lg text-lg font-extrabold tracking-tight text-on-surface transition-opacity hover:opacity-80"
            aria-label="Travara home"
          >
            TRAVARA
          </a>

          {/* ── Desktop Nav Links ── */}
          <ul className="hidden items-center gap-1 md:flex" role="list">
            {NAV_LINKS.map((link) => (
              <li key={link.label}>
                <a
                  href={link.href}
                  className={`relative px-4 py-1.5 font-label-md text-label-md rounded-full transition-all duration-200 ${
                    link.active
                      ? 'text-primary'
                      : 'text-on-surface-variant hover:text-on-surface hover:bg-surface-container-high/60'
                  }`}
                >
                  {link.label}
                  {link.active && (
                    <motion.span
                      layoutId="nav-indicator"
                      className="absolute bottom-0 left-1/2 h-0.5 w-4 -translate-x-1/2 rounded-full bg-primary"
                    />
                  )}
                </a>
              </li>
            ))}
          </ul>

          {/* ── Actions ── */}
          <div className="flex shrink-0 items-center gap-3">
            {/* CTA Button */}
            <motion.a
              href="#"
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.96 }}
              className="hidden rounded-full bg-primary px-5 py-2 font-label-md text-label-md text-on-primary shadow-[0_0_16px_rgba(169,208,170,0.25)] transition-all duration-200 hover:bg-primary-fixed hover:shadow-[0_0_24px_rgba(169,208,170,0.35)] md:block"
            >
              Plan My Trip
            </motion.a>

            {/* Profile Circle */}
            <motion.button
              type="button"
              whileHover={{ scale: 1.08 }}
              whileTap={{ scale: 0.94 }}
              aria-label="Open profile"
              className="flex h-9 w-9 items-center justify-center rounded-full border border-outline-variant/40 bg-surface-container-high/80 text-on-surface-variant shadow-sm transition-all duration-200 hover:border-primary/40 hover:text-primary"
            >
              <span className="material-symbols-outlined text-[18px]">person</span>
            </motion.button>

            {/* Mobile Hamburger */}
            <motion.button
              type="button"
              whileHover={{ scale: 1.08 }}
              whileTap={{ scale: 0.94 }}
              onClick={() => setMobileOpen((v) => !v)}
              aria-label="Toggle mobile menu"
              aria-expanded={mobileOpen}
              className="flex h-9 w-9 items-center justify-center rounded-full border border-outline-variant/40 bg-surface-container-high/80 text-on-surface-variant transition-all duration-200 hover:border-primary/40 hover:text-primary md:hidden"
            >
              <motion.span
                key={mobileOpen ? 'close' : 'menu'}
                initial={{ rotate: -90, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                exit={{ rotate: 90, opacity: 0 }}
                transition={{ duration: 0.18 }}
                className="material-symbols-outlined text-[20px]"
              >
                {mobileOpen ? 'close' : 'menu'}
              </motion.span>
            </motion.button>
          </div>
        </div>

        {/* ── Mobile Dropdown ── */}
        <AnimatePresence>
          {mobileOpen && (
            <motion.div
              initial={{ opacity: 0, y: -8, scale: 0.97 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -8, scale: 0.97 }}
              transition={{ duration: 0.22, ease: 'easeOut' }}
              className="mt-2 overflow-hidden rounded-2xl border border-outline-variant/25 bg-surface-container-lowest/85 p-3 shadow-[0_12px_40px_rgba(0,0,0,0.5)] backdrop-blur-2xl"
            >
              <ul className="flex flex-col gap-1" role="list">
                {NAV_LINKS.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      onClick={() => setMobileOpen(false)}
                      className={`flex items-center gap-3 rounded-xl px-4 py-3 font-label-md text-label-md transition-all duration-150 ${
                        link.active
                          ? 'bg-primary/10 text-primary'
                          : 'text-on-surface-variant hover:bg-surface-container-high/60 hover:text-on-surface'
                      }`}
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
                <li className="mt-2 border-t border-outline-variant/20 pt-2">
                  <a
                    href="#"
                    className="flex w-full items-center justify-center rounded-xl bg-primary px-5 py-3 font-label-md text-label-md text-on-primary shadow-[0_0_16px_rgba(169,208,170,0.2)] transition-all duration-200 hover:bg-primary-fixed"
                  >
                    Plan My Trip
                  </a>
                </li>
              </ul>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>
    </>
  )
}

export default TopNavBar
