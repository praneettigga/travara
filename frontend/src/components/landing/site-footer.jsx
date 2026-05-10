function SiteFooter() {
  return (
    <footer className="relative z-20 flex w-full flex-col items-center justify-between gap-8 border-t border-outline-variant/20 bg-surface-dim px-margin-mobile py-12 md:flex-row md:px-margin-desktop">
      <div className="font-headline-lg text-headline-lg font-bold text-on-surface">
        TRAVARA
      </div>

      <div className="flex flex-wrap justify-center gap-6">
        <a
          href="#"
          className="font-body-md text-body-md text-on-secondary-fixed-variant opacity-80 transition-colors hover:text-primary hover:underline hover:opacity-100"
        >
          Privacy Policy
        </a>
        <a
          href="#"
          className="font-body-md text-body-md text-on-secondary-fixed-variant opacity-80 transition-colors hover:text-primary hover:underline hover:opacity-100"
        >
          Terms of Service
        </a>
        <a
          href="#"
          className="font-body-md text-body-md text-on-secondary-fixed-variant opacity-80 transition-colors hover:text-primary hover:underline hover:opacity-100"
        >
          Travel Guides
        </a>
        <a
          href="#"
          className="font-body-md text-body-md text-on-secondary-fixed-variant opacity-80 transition-colors hover:text-primary hover:underline hover:opacity-100"
        >
          Support
        </a>
      </div>

      <div className="text-center font-body-md text-body-md text-on-surface-variant opacity-80 md:text-right">
        &copy; 2026 TRAVARA. Rooted in tradition, powered by intelligence.
      </div>
    </footer>
  )
}

export default SiteFooter
