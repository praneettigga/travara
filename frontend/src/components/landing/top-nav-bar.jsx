function TopNavBar() {
  return (
    <nav className="fixed top-0 z-40 flex w-full items-center justify-between bg-transparent px-margin-mobile py-4 md:hidden">
      <div className="font-display-lg text-xl font-bold text-on-surface">TRAVARA</div>
      <div className="flex gap-4">
        <button
          type="button"
          className="font-label-md text-label-md text-on-surface-variant transition-colors hover:text-primary"
        >
          Sign In
        </button>
        <button
          type="button"
          className="font-label-md text-label-md font-bold text-primary-fixed-dim"
        >
          Plan My Trip
        </button>
      </div>
    </nav>
  )
}

export default TopNavBar
