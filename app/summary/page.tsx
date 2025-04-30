"use client"

import { useSearchParams } from "next/navigation"
import { useEffect, useState } from "react"
import Navbar from "@/components/navbar"
import { SparklesCore } from "@/components/sparkles"
import { Button } from "@/components/ui/button"
import { ArrowLeft } from "lucide-react"
import Link from "next/link"
import { motion } from "framer-motion"

interface VideoSummary {
  title: string
  summary: string
  keyPoints: string[]
  sentiment: "positive" | "neutral" | "negative"
}

export default function SummaryPage() {
  const searchParams = useSearchParams()
  const url = searchParams.get("url")
  const videoId = searchParams.get("videoId")
  const [loading, setLoading] = useState(true)
  const [summary, setSummary] = useState<VideoSummary | null>(null)

  useEffect(() => {
    // Simulate API call to analyze the video
    const timer = setTimeout(() => {
      // This is mock data - in a real app, you would fetch this from your API
      setSummary({
        title: "How to Build a Next.js Application",
        summary:
          "This video covers the fundamentals of building modern web applications with Next.js. The presenter walks through setting up a project, explaining key concepts like Server Components, Client Components, and the App Router. They demonstrate how to create a responsive UI with Tailwind CSS and add animations with Framer Motion.",
        keyPoints: [
          "Next.js App Router provides file-based routing",
          "Server Components reduce client-side JavaScript",
          "Tailwind CSS simplifies responsive design",
          "Framer Motion enables smooth animations",
          "Vercel deployment is seamless with Next.js",
        ],
        sentiment: "positive",
      })
      setLoading(false)
    }, 2000)

    return () => clearTimeout(timer)
  }, [url])

  return (
    <div className="min-h-screen bg-black/[0.96] antialiased bg-grid-white/[0.02] relative">
      {/* Animated sparkles background */}
      <div className="h-full w-full absolute inset-0 z-0">
        <SparklesCore
          id="tsparticlesfullpage"
          background="transparent"
          minSize={0.6}
          maxSize={1.4}
          particleDensity={50}
          className="w-full h-full"
          particleColor="#FFFFFF"
        />
      </div>

      <div className="relative z-10">
        <Navbar />

        <div className="container mx-auto px-6 py-12">
          <Link href="/">
            <Button variant="ghost" className="text-white mb-8">
              <ArrowLeft className="mr-2 h-5 w-5" />
              Back to Home
            </Button>
          </Link>

          {loading ? (
            <div className="flex flex-col items-center justify-center py-20">
              <div className="w-16 h-16 border-4 border-red-500 border-t-transparent rounded-full animate-spin mb-4"></div>
              <p className="text-white text-xl">Analyzing video...</p>
            </div>
          ) : (
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5 }}>
              {videoId && (
                <div className="aspect-video max-w-4xl mx-auto mb-8 rounded-xl overflow-hidden">
                  <iframe
                    width="100%"
                    height="100%"
                    src={`https://www.youtube.com/embed/${videoId}`}
                    title="YouTube video player"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    className="w-full h-full"
                  ></iframe>
                </div>
              )}

              <div className="bg-white/10 backdrop-blur-md rounded-xl p-8 max-w-4xl mx-auto">
                <h1 className="text-2xl md:text-3xl font-bold text-white mb-6">{summary?.title}</h1>

                <div className="mb-8">
                  <h2 className="text-xl font-semibold text-white mb-3">Summary</h2>
                  <p className="text-gray-300">{summary?.summary}</p>
                </div>

                <div className="mb-8">
                  <h2 className="text-xl font-semibold text-white mb-3">Key Points</h2>
                  <ul className="list-disc pl-5 text-gray-300 space-y-2">
                    {summary?.keyPoints.map((point, index) => (
                      <li key={index}>{point}</li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h2 className="text-xl font-semibold text-white mb-3">Sentiment</h2>
                  <div
                    className={`inline-block px-4 py-2 rounded-full ${
                      summary?.sentiment === "positive"
                        ? "bg-green-500/20 text-green-400"
                        : summary?.sentiment === "negative"
                          ? "bg-red-500/20 text-red-400"
                          : "bg-blue-500/20 text-blue-400"
                    }`}
                  >
                    {summary?.sentiment.charAt(0).toUpperCase() + summary?.sentiment.slice(1)}
                  </div>
                </div>
              </div>
            </motion.div>
          )}
        </div>
      </div>
    </div>
  )
}
