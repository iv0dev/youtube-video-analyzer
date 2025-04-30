"use client"

import { motion } from "framer-motion"
import { Youtube, Search, FileText, BarChart3, Download } from "lucide-react"

export default function HowItWorksSection() {
  const steps = [
    {
      icon: <Youtube className="h-12 w-12 text-red-500" />,
      title: "Paste YouTube Link",
      description: "Simply copy and paste any YouTube video URL into our analyzer.",
    },
    {
      icon: <Search className="h-12 w-12 text-red-500" />,
      title: "AI Processing",
      description: "Our advanced AI processes the video content, extracting audio and analyzing the transcript.",
    },
    {
      icon: <FileText className="h-12 w-12 text-red-500" />,
      title: "Generate Summary",
      description: "The AI creates a concise summary highlighting the key points and main ideas.",
    },
    {
      icon: <BarChart3 className="h-12 w-12 text-red-500" />,
      title: "Analyze Sentiment",
      description: "We analyze the emotional tone and sentiment throughout the video content.",
    },
    {
      icon: <Download className="h-12 w-12 text-red-500" />,
      title: "Review & Export",
      description: "Review the analysis results and export them in your preferred format.",
    },
  ]

  return (
    <div className="container mx-auto px-6 py-16">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center mb-16"
      >
        <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
          How
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-400 to-red-600"> It Works</span>
        </h1>
        <p className="text-gray-400 text-xl max-w-3xl mx-auto">
          Our streamlined process makes it easy to extract valuable insights from any YouTube video in minutes.
        </p>
      </motion.div>

      <div className="max-w-4xl mx-auto">
        {steps.map((step, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 * index }}
            className="flex flex-col md:flex-row items-center mb-16 relative"
          >
            {/* Connecting line */}
            {index < steps.length - 1 && (
              <div className="hidden md:block absolute h-full w-0.5 bg-gradient-to-b from-red-500 to-red-700 left-16 top-24 -z-10" />
            )}

            {/* Step number and icon */}
            <div className="flex-shrink-0 mb-6 md:mb-0">
              <div className="w-32 h-32 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center relative">
                <div className="absolute -top-2 -right-2 w-8 h-8 rounded-full bg-red-600 flex items-center justify-center text-white font-bold">
                  {index + 1}
                </div>
                {step.icon}
              </div>
            </div>

            {/* Step content */}
            <div className="md:ml-8 text-center md:text-left">
              <h3 className="text-2xl font-bold text-white mb-2">{step.title}</h3>
              <p className="text-gray-300 text-lg">{step.description}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  )
}