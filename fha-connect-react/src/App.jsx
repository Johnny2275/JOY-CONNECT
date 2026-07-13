import Header from './components/Header'
import Hero from './components/Hero'
import StatsStrip from './components/StatsStrip'
import HowItWorks from './components/HowItWorks'
import Plans from './components/Plans'
import Coverage from './components/Coverage'
import Voices from './components/Voices'
import FAQ from './components/FAQ'
import CTABand from './components/CTABand'
import Footer from './components/Footer'
import FloatingWhatsApp from './components/FloatingWhatsApp'

export default function App() {
  return (
    <div className="min-h-screen bg-cloud">
      <Header />
      <Hero />
      <StatsStrip />
      <HowItWorks />
      <Plans />
      <Coverage />
      <Voices />
      <FAQ />
      <CTABand />
      <Footer />
      <FloatingWhatsApp />
    </div>
  )
}
