import Navbar from "@/components/navbar"
import { SparklesCore } from "@/components/sparkles"
import HowItWorksSection from "@/components/how-it-works-section"

export default function HowItWorksPage() {
  return (
    <main className="min-h-screen bg-black/[0.96] antialiased bg-grid-white/[0.02] relative overflow-hidden">
      {/* Animated sparkles background */}
      <div className="h-full w-full absolute inset-0 z-0">
        <SparklesCore
          id="tsparticlesfullpage"
          background="transparent"
          minSize={0.6}
          maxSize={1.4}
          particleDensity={100}
          className="w-full h-full"
          particleColor="#FFFFFF"
        />
      </div>

      <div className="relative z-10">
        <Navbar />
        <HowItWorksSection />
      </div>
    </main>
  )
}