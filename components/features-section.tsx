"use client"

import { motion } from "framer-motion"
import { FileText, Clock, Sparkles, Languages, BarChart3, Download, Share2, History, Bookmark } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export default function FeaturesSection() {
  const features = [
    {
      icon: <FileText className="h-10 w-10 text-red-500" />,
      title: "Transcript Analysis",
      description: "Get complete transcripts with timestamps and speaker identification.",
    },
    {
      icon: <Clock className="h-10 w-10 text-red-500" />,
      title: "Time Savings",
      description: "Extract key information from hours of content in just minutes.",
    },
    {
      icon: <Sparkles className="h-10 w-10 text-red-500" />,
      title: "AI-Powered Insights",
      description: "Advanced algorithms identify themes, topics, and sentiment.",
    },
    {
      icon: <Languages className="h-10 w-10 text-red-500" />,
      title: "Multi-language Support",
      description: "Analyze videos in over 30 different languages.",
    },
    {
      icon: <BarChart3 className="h-10 w-10 text-red-500" />,
      title: "Visual Analytics",
      description: "Interactive charts and graphs to visualize video content.",
    },
    {
      icon: <Download className="h-10 w-10 text-red-500" />,
      title: "Exportable Results",
      description: "Download summaries as PDF, Word, or plain text formats.",
    },
    {
      icon: <Share2 className="h-10 w-10 text-red-500" />,
      title: "Easy Sharing",
      description: "Share analysis results with teammates via link or email.",
    },
    {
      icon: <History className="h-10 w-10 text-red-500" />,
      title: "Analysis History",
      description: "Access your previously analyzed videos anytime.",
    },
    {
      icon: <Bookmark className="h-10 w-10 text-red-500" />,
      title: "Bookmarking",
      description: "Save important moments from videos for quick reference.",
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
          Powerful Features for
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-400 to-red-600">
            {" "}
            Video Analysis
          </span>
        </h1>
        <p className="text-gray-400 text-xl max-w-3xl mx-auto">
          Our platform offers a comprehensive suite of tools to help you extract maximum value from YouTube content.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {features.map((feature, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 * index }}
          >
            <Card className="bg-white/10 border-white/20 backdrop-blur-sm hover:bg-white/20 transition-colors">
              <CardHeader>
                <div className="mb-4">{feature.icon}</div>
                <CardTitle className="text-white text-xl">{feature.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-300 text-base">{feature.description}</CardDescription>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
    </div>
  )
}
