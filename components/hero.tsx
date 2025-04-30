"use client"
import { motion } from "framer-motion"
import { YoutubeBotAnimation } from "@/components/youtube-bot-animation"
import YouTubeAnalyzer from "@/components/youtube-analyzer"

export default function Hero() {
  return (
    <div className="relative min-h-[calc(100vh-76px)] flex items-center">
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6">
              Unlock YouTube Video
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-400 to-red-600"> Insights</span>
            </h1>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-gray-400 text-xl mb-8 max-w-2xl mx-auto"
          >
            Paste any YouTube link and get an instant AI-powered summary, key points, and sentiment analysis.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="mb-12"
          >
            <YouTubeAnalyzer />
          </motion.div>
        </div>
      </div>

      {/* Animated YouTube bot */}
      <div className="absolute bottom-0 right-0 w-96 h-96">
        <YoutubeBotAnimation />
      </div>
    </div>
  )
}
