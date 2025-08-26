'use client'

import { Badge } from "@/components/ui/badge"
import { Sparkles } from "lucide-react"
import { FaCalendarAlt, FaMapMarkerAlt } from "react-icons/fa"
import { motion } from "framer-motion"
import AppInterface from "@/components/AppInterface"
import EventHorizon from "@/components/EventHorizon"
import AnimatedDots from "@/components/AnimatedDots"
import { useRef } from "react"
import { HeroScrollDemo } from "@/components/HeroScrollDemo"

export default function HomePage() {
  const videoRef = useRef<HTMLVideoElement | null>(null)

  const handleMouseEnter = () => {
    if (videoRef.current) {
      videoRef.current.play().catch((error) => {
        console.error("Error playing video:", error)
      })
    }
  }

  const handleMouseLeave = () => {
    if (videoRef.current) {
      videoRef.current.pause()
      videoRef.current.currentTime = 0
    }
  }

  return (
    <div className="min-h-screen text-white relative overflow-hidden">
      {/* Background Animated Dots */}
      <AnimatedDots />

      {/* Hero Content */}
      <main className="relative z-10 flex flex-col items-center text-center px-6 py-2">
        {/* Header Section */}
        <div className="flex flex-col items-center gap-0 max-w-4xl mx-auto">
          {/* Main Heading with Image and Caption */}
          <h1 className="text-9xl md:text-[12rem] font-bold leading-tight font-sans py-6">
            <img
              src="/void.jpg"
              alt="Void Logo"
              className="w-full h-auto max-w-[20rem] md:max-w-[24rem] mx-auto"
            />
          </h1>
        </div>

        {/* Event Details */}
        <div className="flex flex-col items-center gap-2 py-2">
          <motion.div
            className="flex items-center justify-center space-x-2"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            <FaCalendarAlt className="text-purple-400 text-lg" />
            <span className="text-white text-sm md:text-xl font-medium">
              April 11-12, 2025
            </span>
          </motion.div>
          <motion.div
            className="flex items-center justify-center space-x-2"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
          >
            <FaMapMarkerAlt className="text-purple-400 text-lg" />
            <span className="text-white text-sm md:text-xl font-medium">
              MG Auditorium, VIT Chennai
            </span>
          </motion.div>
        </div>

        {/* Event Horizon Timer with increased gap */}
        <div className="my-8 w-full flex justify-center">
          <EventHorizon />
        </div>

        <img src="/header.gif" alt="" />

        <HeroScrollDemo/>

      </main>
    </div>
  )
}