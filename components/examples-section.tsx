"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

export default function ExamplesSection() {
  const [activeTab, setActiveTab] = useState("educational")

  const examples = {
    educational: [
      {
        title: "Introduction to Quantum Computing",
        videoId: "JhHMJCUmq28",
        summary:
          "This video provides a comprehensive introduction to quantum computing, explaining qubits, superposition, and quantum entanglement. The presenter breaks down complex concepts into understandable analogies and visual examples.",
        keyPoints: [
          "Quantum bits (qubits) can exist in multiple states simultaneously",
          "Quantum entanglement allows for instantaneous communication",
          "Quantum computers excel at specific types of calculations",
          "Current limitations include error rates and stability",
        ],
        sentiment: "positive",
      },
      {
        title: "The History of Ancient Rome",
        videoId: "oBDZtt0vWD8",
        summary:
          "A detailed exploration of Ancient Rome's rise and fall, covering key historical figures, political structures, and cultural impacts. The video presents archaeological evidence and historical accounts to paint a complete picture of Roman civilization.",
        keyPoints: [
          "Rome evolved from a kingdom to a republic to an empire",
          "Julius Caesar's assassination marked a pivotal turning point",
          "Roman engineering achievements included aqueducts and roads",
          "The empire's fall was caused by multiple factors including economic issues",
        ],
        sentiment: "neutral",
      },
    ],
    business: [
      {
        title: "Effective Leadership Strategies",
        videoId: "RDmvh3uSfBY",
        summary:
          "This business video explores different leadership styles and their effectiveness in various organizational contexts. It provides actionable advice for developing leadership skills and building high-performing teams.",
        keyPoints: [
          "Transformational leadership focuses on inspiring and motivating teams",
          "Situational leadership requires adapting to different team needs",
          "Emotional intelligence is crucial for effective leadership",
          "Regular feedback and recognition improve team performance",
        ],
        sentiment: "positive",
      },
      {
        title: "Digital Marketing Trends 2023",
        videoId: "e29F5n3ea0I",
        summary:
          "An analysis of emerging digital marketing trends, including AI-driven content creation, voice search optimization, and privacy-focused advertising. The video provides case studies and implementation strategies.",
        keyPoints: [
          "AI tools are revolutionizing content creation and personalization",
          "Voice search requires different SEO strategies than text search",
          "First-party data collection becomes more important with cookie deprecation",
          "Short-form video continues to dominate engagement metrics",
        ],
        sentiment: "positive",
      },
    ],
    entertainment: [
      {
        title: "Film Analysis: The Shawshank Redemption",
        videoId: "rhGJ5SmSoRk",
        summary:
          "A deep dive into the cinematography, themes, and storytelling techniques used in The Shawshank Redemption. The analysis explores how visual elements and character development contribute to the film's enduring appeal.",
        keyPoints: [
          "The film uses visual motifs of walls and barriers to represent imprisonment",
          "Character arcs follow themes of hope and institutional corruption",
          "Roger Deakins' cinematography emphasizes contrast between prison and freedom",
          "The narrative structure builds tension through parallel storylines",
        ],
        sentiment: "positive",
      },
      {
        title: "Evolution of Video Game Graphics",
        videoId: "3FmkuPnKR9M",
        summary:
          "This video traces the development of video game graphics from 8-bit pixel art to modern ray-tracing technology. It highlights technological breakthroughs and their impact on gameplay and immersion.",
        keyPoints: [
          "The transition from 2D to 3D revolutionized game design in the 1990s",
          "Lighting and shadow techniques dramatically improved in the 2000s",
          "Motion capture technology transformed character animation",
          "Ray-tracing represents the current frontier of realistic rendering",
        ],
        sentiment: "neutral",
      },
    ],
  }

  return (
    <div className="container mx-auto px-6 py-16">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center mb-16"
      >
        <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
          Example
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-400 to-red-600"> Analyses</span>
        </h1>
        <p className="text-gray-400 text-xl max-w-3xl mx-auto">
          See how our AI analyzes different types of YouTube content across various categories.
        </p>
      </motion.div>

      <Tabs defaultValue="educational" value={activeTab} onValueChange={setActiveTab} className="max-w-5xl mx-auto">
        <TabsList className="grid grid-cols-3 mb-12 bg-white/10 backdrop-blur-sm">
          <TabsTrigger value="educational" className="data-[state=active]:bg-red-600 data-[state=active]:text-white">
            Educational
          </TabsTrigger>
          <TabsTrigger value="business" className="data-[state=active]:bg-red-600 data-[state=active]:text-white">
            Business
          </TabsTrigger>
          <TabsTrigger value="entertainment" className="data-[state=active]:bg-red-600 data-[state=active]:text-white">
            Entertainment
          </TabsTrigger>
        </TabsList>

        {Object.keys(examples).map((category) => (
          <TabsContent key={category} value={category}>
            {examples[category as keyof typeof examples].map((example, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 * index }}
                className="mb-12"
              >
                <Card className="bg-white/10 border-white/20 backdrop-blur-sm overflow-hidden">
                  <CardContent className="p-0">
                    <div className="grid grid-cols-1 lg:grid-cols-2">
                      {/* Video embed */}
                      <div className="aspect-video w-full">
                        <iframe
                          width="100%"
                          height="100%"
                          src={`https://www.youtube.com/embed/${example.videoId}`}
                          title="YouTube video player"
                          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                          allowFullScreen
                          className="w-full h-full"
                        ></iframe>
                      </div>

                      {/* Analysis */}
                      <div className="p-6">
                        <h3 className="text-2xl font-bold text-white mb-4">{example.title}</h3>

                        <div className="mb-4">
                          <h4 className="text-lg font-semibold text-white mb-2">Summary</h4>
                          <p className="text-gray-300">{example.summary}</p>
                        </div>

                        <div className="mb-4">
                          <h4 className="text-lg font-semibold text-white mb-2">Key Points</h4>
                          <ul className="list-disc pl-5 text-gray-300 space-y-1">
                            {example.keyPoints.map((point, i) => (
                              <li key={i}>{point}</li>
                            ))}
                          </ul>
                        </div>

                        <div className="mb-6">
                          <h4 className="text-lg font-semibold text-white mb-2">Sentiment</h4>
                          <div
                            className={`inline-block px-3 py-1 rounded-full ${
                              example.sentiment === "positive"
                                ? "bg-green-500/20 text-green-400"
                                : example.sentiment === "negative"
                                  ? "bg-red-500/20 text-red-400"
                                  : "bg-blue-500/20 text-blue-400"
                            }`}
                          >
                            {example.sentiment.charAt(0).toUpperCase() + example.sentiment.slice(1)}
                          </div>
                        </div>

                        <Button className="bg-red-600 hover:bg-red-700 text-white">
                          Try with this video
                          <ArrowRight className="ml-2 h-4 w-4" />
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </TabsContent>
        ))}
      </Tabs>
    </div>
  )
}
