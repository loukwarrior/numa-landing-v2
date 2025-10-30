import Hero from '@/components/sections/Hero'
import Positioning from '@/components/sections/Positioning'
import CoreExperiences from '@/components/sections/CoreExperiences'
import TheSpace from '@/components/sections/TheSpace'
import Benefits from '@/components/sections/Benefits'
// import Community from '@/components/sections/Community' // TODO: Enable when we have real testimonials and UGC
import FoundingMembers from '@/components/sections/FoundingMembers'
import Memberships from '@/components/sections/Memberships'
import FoundingTerms from '@/components/sections/FoundingTerms'
// import Team from '@/components/sections/Team' // TODO: Enable when team is confirmed
import Location from '@/components/sections/Location'
import Waitlist from '@/components/sections/Waitlist'
import Footer from '@/components/sections/Footer'

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />
      <Positioning />
      <CoreExperiences />
      <TheSpace />
      <Benefits />
      {/* <Community /> */} {/* Disabled: Waiting for real testimonials, photos and Instagram content */}
      <FoundingMembers />
      <Memberships />
      <FoundingTerms />
      {/* <Team /> */} {/* Disabled: Waiting for confirmed team, partnerships and founder photo */}
      <Location />
      <Waitlist />
      <Footer />
    </main>
  )
}
