import TopNavBar from '../components/landing/top-nav-bar'
import SideNavBar from '../components/landing/side-nav-bar'
import HeroSection from '../components/landing/hero-section'
import FeaturesSection from '../components/landing/features-section'
import SiteFooter from '../components/landing/site-footer'

function LandingPage() {
  return (
    <div className="min-h-screen overflow-x-hidden bg-background font-body-md text-on-background antialiased">
      <TopNavBar />
      <SideNavBar />
      <main className="flex w-full flex-col">
        <HeroSection />
        <FeaturesSection />
      </main>
      <SiteFooter />
    </div>
  )
}

export default LandingPage
