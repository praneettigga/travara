const NAV_ITEMS = [
  { icon: 'home', label: 'Home', active: true },
  { icon: 'explore', label: 'Explore' },
  { icon: 'map', label: 'Itineraries' },
  { icon: 'luggage', label: 'Bookings' },
  { icon: 'bookmark', label: 'Saved' },
  { icon: 'person', label: 'Profile', isProfile: true },
]

function SideNavBar() {
  return (
    <nav className="fixed left-6 top-1/2 z-50 hidden h-fit w-16 -translate-y-1/2 flex-col items-center gap-6 bg-transparent py-6 md:flex">
      {NAV_ITEMS.map((item) => {
        const baseClasses =
          'flex h-12 w-12 items-center justify-center rounded-full transition-all duration-300'
        const activeClasses =
          'bg-primary text-on-primary shadow-lg hover:scale-105 active:scale-95'
        const inactiveClasses =
          'text-on-surface-variant hover:scale-105 hover:bg-surface-container-highest/50 hover:text-primary active:scale-95'

        return (
          <a
            key={item.icon}
            href="#"
            aria-label={item.label}
            className={`${baseClasses} ${item.active ? activeClasses : inactiveClasses} ${
              item.isProfile ? 'mt-auto border-t border-outline-variant/10 pt-4' : ''
            }`}
          >
            <span className="material-symbols-outlined">{item.icon}</span>
          </a>
        )
      })}
    </nav>
  )
}

export default SideNavBar
