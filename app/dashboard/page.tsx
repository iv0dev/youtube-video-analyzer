import { SparklesCore } from "@/components/sparkles"
import Navbar from "@/components/navbar"
import DashboardContent from "@/components/dashboard-content"

export default function DashboardPage() {
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
        <div className="container mx-auto px-6 py-16">
          <DashboardContent />
        </div>
      </div>
    </main>
  )
}
