"use client"
 
import { useEffect, useState } from "react"
import { motion } from "framer-motion"
import { Youtube } from "lucide-react"
 
export default function FloatingPaper({ count = 5 }) {
  const [dimensions, setDimensions] = useState({ width: 1200, height: 800 })
  const [items, setItems] = useState<
    {
      initialX: number
      initialY: number
      animateX: number[]
      animateY: number[]
      duration: number
    }[]
  >([])
 
  useEffect(() => {
    setDimensions({
      width: window.innerWidth,
      height: window.innerHeight,
    })
 
    const handleResize = () => {
      setDimensions({
        width: window.innerWidth,
        height: window.innerHeight,
      })
    }
 
    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [])
 
  useEffect(() => {
    const generated = Array.from({ length: count }).map(() => {
      const initialX = Math.random() * dimensions.width
      const initialY = Math.random() * dimensions.height
 
      return {
        initialX,
        initialY,
        animateX: [
          initialX,
          Math.random() * dimensions.width,
          Math.random() * dimensions.width,
        ],
        animateY: [
          initialY,
          Math.random() * dimensions.height,
          Math.random() * dimensions.height,
        ],
        duration: 20 + Math.random() * 10,
      }
    })
 
    setItems(generated)
  }, [count, dimensions.width, dimensions.height])
 
  return (
    <div className="relative w-full h-full">
      {items.map((item, i) => (
        <motion.div
          key={i}
          className="absolute"
          initial={{
            x: item.initialX,
            y: item.initialY,
          }}
          animate={{
            x: item.animateX,
            y: item.animateY,
            rotate: [0, 180, 360],
          }}
          transition={{
            duration: item.duration,
            repeat: Number.POSITIVE_INFINITY,
            ease: "linear",
          }}
        >
          <div className="relative w-16 h-20 bg-white/5 backdrop-blur-sm rounded-lg border border-white/10 flex items-center justify-center transform hover:scale-110 transition-transform">
            <Youtube className="w-8 h-8 text-red-400/50" />
          </div>
        </motion.div>
      ))}
    </div>
  )
}
 