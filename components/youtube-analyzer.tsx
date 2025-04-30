"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { ArrowRight, AlertCircle, CheckCircle2 } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"
import { useRouter } from "next/navigation"

export default function YouTubeAnalyzer() {
  const [youtubeUrl, setYoutubeUrl] = useState("")
  const [videoId, setVideoId] = useState<string | null>(null)
  const [isValid, setIsValid] = useState<boolean | null>(null)
  const [errorMessage, setErrorMessage] = useState("")
  const router = useRouter()

  // Extract video ID from YouTube URL
  useEffect(() => {
    if (!youtubeUrl.trim()) {
      setIsValid(null)
      setVideoId(null)
      setErrorMessage("")
      return
    }

    try {
      const extractedId = extractYouTubeVideoId(youtubeUrl)
      if (extractedId) {
        setVideoId(extractedId)
        setIsValid(true)
        setErrorMessage("")
      } else {
        setVideoId(null)
        setIsValid(false)
        setErrorMessage("Invalid YouTube URL. Please enter a valid YouTube video link.")
      }
    } catch (error) {
      setVideoId(null)
      setIsValid(false)
      setErrorMessage("Error processing URL. Please try again.")
    }
  }, [youtubeUrl])

  const handleAnalyze = () => {
    if (isValid && videoId) {
      // Encode the URL to pass it safely in the query string
      const encodedUrl = encodeURIComponent(youtubeUrl)
      router.push(`/summary?url=${encodedUrl}&videoId=${videoId}`)
    }
  }

  return (
    <div className="w-full max-w-2xl mx-auto">
      <div className="flex flex-col gap-4">
        <div className="relative">
          <Input
            type="text"
            placeholder="Paste YouTube URL here... (e.g., https://www.youtube.com/watch?v=dQw4w9WgXcQ)"
            className="bg-white/10 border-white/20 text-white placeholder:text-gray-400 pr-10"
            value={youtubeUrl}
            onChange={(e) => setYoutubeUrl(e.target.value)}
          />
          <div className="absolute right-3 top-1/2 transform -translate-y-1/2">
            <AnimatePresence mode="wait">
              {isValid === true && (
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.8 }}
                  transition={{ duration: 0.2 }}
                >
                  <CheckCircle2 className="h-5 w-5 text-green-500" />
                </motion.div>
              )}
              {isValid === false && (
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.8 }}
                  transition={{ duration: 0.2 }}
                >
                  <AlertCircle className="h-5 w-5 text-red-500" />
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>

        <AnimatePresence>
          {errorMessage && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="text-red-400 text-sm"
            >
              {errorMessage}
            </motion.div>
          )}
        </AnimatePresence>

        <AnimatePresence>
          {videoId && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="aspect-video w-full rounded-lg overflow-hidden bg-black/50"
            >
              <iframe
                width="100%"
                height="100%"
                src={`https://www.youtube.com/embed/${videoId}`}
                title="YouTube video player"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="w-full h-full"
              ></iframe>
            </motion.div>
          )}
        </AnimatePresence>

        <Button
          onClick={handleAnalyze}
          size="lg"
          className="bg-red-600 hover:bg-red-700 text-white w-full"
          disabled={!isValid}
        >
          Analyze Video
          <ArrowRight className="ml-2 h-5 w-5" />
        </Button>
      </div>
    </div>
  )
}

// Helper function to extract YouTube video ID from various URL formats
function extractYouTubeVideoId(url: string): string | null {
  // Handle different YouTube URL formats
  const patterns = [
    /(?:https?:\/\/)?(?:www\.)?youtube\.com\/watch\?v=([^&]+)/i,
    /(?:https?:\/\/)?(?:www\.)?youtu\.be\/([^?]+)/i,
    /(?:https?:\/\/)?(?:www\.)?youtube\.com\/embed\/([^?]+)/i,
    /(?:https?:\/\/)?(?:www\.)?youtube\.com\/v\/([^?]+)/i,
    /(?:https?:\/\/)?(?:www\.)?youtube\.com\/user\/[^/]+\/\?v=([^&]+)/i,
    /(?:https?:\/\/)?(?:www\.)?youtube\.com\/shorts\/([^?]+)/i,
  ]

  for (const pattern of patterns) {
    const match = url.match(pattern)
    if (match && match[1]) {
      return match[1]
    }
  }

  return null
}
