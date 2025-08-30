'use client'

import { useState, useEffect } from "react"
import { motion } from "framer-motion"

export default function EventHorizon() {
  // Timer state
  const [timeLeft, setTimeLeft] = useState({
    days: "00",
    hours: "00",
    minutes: "00",
    seconds: "00",
  })

  useEffect(() => {
    // Set target time to September 29, 2025
    const targetDate = new Date("September 29, 2025 00:00:00").getTime()

    const updateTimer = () => {
      const now = new Date().getTime()
      const distance = targetDate - now

      if (distance <= 0) {
        setTimeLeft({ days: "00", hours: "00", minutes: "00", seconds: "00" })
        return
      }

      const days = Math.floor(distance / (1000 * 60 * 60 * 24))
      const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60))
      const seconds = Math.floor((distance % (1000 * 60)) / 1000)

      setTimeLeft({
        days: String(days).padStart(2, "0"),
        hours: String(hours).padStart(2, "0"),
        minutes: String(minutes).padStart(2, "0"),
        seconds: String(seconds).padStart(2, "0"),
      })
    }

    // Update timer every second
    updateTimer() // Initial call
    const interval = setInterval(updateTimer, 1000)

    // Cleanup interval on component unmount
    return () => clearInterval(interval)
  }, [])

  return (
    <div className="relative flex items-center justify-center w-full h-32">
      <motion.div 
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="relative z-10 px-8 py-4 bg-[#240046]/35 backdrop-blur-lg rounded-full void-pulse text-white font-heading text-4xl md:text-5xl tracking-wide shadow-lg border border-purple-800/30"
      >
        <div className="flex items-center gap-4 md:gap-6 bg-gradient-to-r from-[#8A2BE2] via-[#9333EA] to-[#A855F7] bg-clip-text text-transparent animate-pulse">
          <div className="flex flex-col items-center">
            <span>{timeLeft.days}</span>
            <span className="text-sm md:text-base font-sans">Days</span>
          </div>
          <span className="text-white">:</span>
          <div className="flex flex-col items-center">
            <span>{timeLeft.hours}</span>
            <span className="text-sm md:text-base font-sans">Hrs</span>
          </div>
          <span className="text-white">:</span>
          <div className="flex flex-col items-center">
            <span>{timeLeft.minutes}</span>
            <span className="text-sm md:text-base font-sans">Mins</span>
          </div>
          <span className="text-white">:</span>
          <div className="flex flex-col items-center">
            <span>{timeLeft.seconds}</span>
            <span className="text-sm md:text-base font-sans">Secs</span>
          </div>
        </div>
        
        {/* Animated particles around the timer */}
        <div className="absolute inset-0 -z-10 overflow-hidden rounded-full">
          {[...Array(10)].map((_, i) => (
            <div
              key={i}
              className="absolute w-1 h-1 rounded-full bg-purple-500 void-particle"
              style={{
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
                opacity: Math.random() * 0.7 + 0.3,
                animationDelay: `${Math.random() * 5}s`,
                animationDuration: `${Math.random() * 4 + 4}s`
              }}
            />
          ))}
        </div>
      </motion.div>
    </div>
  )
}