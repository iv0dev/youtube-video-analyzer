"use client"

import { motion } from "framer-motion"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Button } from "@/components/ui/button"
import { Youtube, History, BarChart3, Clock } from "lucide-react"
import Link from "next/link"

export default function DashboardContent() {
  // Mock data for recent analyses
  const recentAnalyses = [
    {
      id: "1",
      title: "How to Build a Next.js Application",
      date: "2023-05-15",
      videoId: "JhHMJCUmq28",
    },
    {
      id: "2",
      title: "Understanding Quantum Computing",
      date: "2023-05-12",
      videoId: "e29F5n3ea0I",
    },
    {
      id: "3",
      title: "Digital Marketing Trends 2023",
      date: "2023-05-10",
      videoId: "RDmvh3uSfBY",
    },
  ]

  return (
    <div>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="mb-10"
      >
        <h1 className="text-4xl font-bold text-white mb-2">Welcome back, User!</h1>
        <p className="text-gray-400">Here's an overview of your video analyses and insights.</p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <Card className="bg-white/10 border-white/20 backdrop-blur-sm">
            <CardHeader className="pb-2">
              <CardDescription className="text-gray-400">Total Analyses</CardDescription>
              <CardTitle className="text-3xl text-white">12</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-red-400 flex items-center">
                <BarChart3 className="h-4 w-4 mr-1" />
                <span className="text-sm">+3 this month</span>
              </div>
            </CardContent>
          </Card>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <Card className="bg-white/10 border-white/20 backdrop-blur-sm">
            <CardHeader className="pb-2">
              <CardDescription className="text-gray-400">Time Saved</CardDescription>
              <CardTitle className="text-3xl text-white">5.2 hours</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-red-400 flex items-center">
                <Clock className="h-4 w-4 mr-1" />
                <span className="text-sm">Based on video length</span>
              </div>
            </CardContent>
          </Card>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <Card className="bg-white/10 border-white/20 backdrop-blur-sm">
            <CardHeader className="pb-2">
              <CardDescription className="text-gray-400">Remaining Credits</CardDescription>
              <CardTitle className="text-3xl text-white">38</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-red-400 flex items-center">
                <Youtube className="h-4 w-4 mr-1" />
                <span className="text-sm">Free tier (50/month)</span>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.4 }}
      >
        <Tabs defaultValue="recent" className="w-full">
          <TabsList className="bg-white/10 backdrop-blur-sm">
            <TabsTrigger value="recent" className="data-[state=active]:bg-red-600 data-[state=active]:text-white">
              Recent Analyses
            </TabsTrigger>
            <TabsTrigger value="saved" className="data-[state=active]:bg-red-600 data-[state=active]:text-white">
              Saved Videos
            </TabsTrigger>
          </TabsList>
          <TabsContent value="recent" className="mt-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {recentAnalyses.map((analysis) => (
                <Card key={analysis.id} className="bg-white/10 border-white/20 backdrop-blur-sm overflow-hidden">
                  <div className="aspect-video w-full">
                    <iframe
                      width="100%"
                      height="100%"
                      src={`https://www.youtube.com/embed/${analysis.videoId}`}
                      title="YouTube video player"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                      className="w-full h-full"
                    ></iframe>
                  </div>
                  <CardHeader className="pb-2">
                    <CardTitle className="text-lg text-white truncate">{analysis.title}</CardTitle>
                    <CardDescription className="text-gray-400">Analyzed on {analysis.date}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <Link href={`/summary?videoId=${analysis.videoId}`}>
                      <Button className="w-full bg-red-600 hover:bg-red-700 text-white">View Analysis</Button>
                    </Link>
                  </CardContent>
                </Card>
              ))}

              <Card className="bg-white/5 border-white/10 border-dashed backdrop-blur-sm flex flex-col items-center justify-center h-full">
                <CardContent className="flex flex-col items-center justify-center py-10">
                  <Youtube className="h-12 w-12 text-red-500 mb-4" />
                  <h3 className="text-lg font-medium text-white mb-2">Analyze a new video</h3>
                  <p className="text-gray-400 text-center mb-4">Paste a YouTube URL to get insights</p>
                  <Link href="/">
                    <Button className="bg-red-600 hover:bg-red-700 text-white">New Analysis</Button>
                  </Link>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
          <TabsContent value="saved" className="mt-6">
            <div className="flex flex-col items-center justify-center py-12 text-center">
              <History className="h-16 w-16 text-red-500/50 mb-4" />
              <h3 className="text-xl font-medium text-white mb-2">No saved videos yet</h3>
              <p className="text-gray-400 max-w-md mb-6">
                When you save videos for later, they'll appear here for quick access.
              </p>
              <Link href="/">
                <Button className="bg-red-600 hover:bg-red-700 text-white">Analyze a Video</Button>
              </Link>
            </div>
          </TabsContent>
        </Tabs>
      </motion.div>
    </div>
  )
}
