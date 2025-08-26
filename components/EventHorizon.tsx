'use client'

import { useState, useEffect } from "react"

export default function EventHorizon() {
  // Timer state
  const [timeLeft, setTimeLeft] = useState({
    days: "00",
    hours: "00",
    minutes: "00",
    seconds: "00",
  })

  useEffect(() => {
    // Set target time to 24 hours from now
    const targetTime = new Date().getTime() + 24 * 60 * 60 * 1000

    const updateTimer = () => {
      const now = new Date().getTime()
      const distance = targetTime - now

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
    <div className="relative flex items-center justify-center w-full h-48 overflow-hidden bg-gradient-to-b from-[#0B0617]/80 via-[#0B0617]/90 to-transparent">
      <div
        className="absolute top-6 left-12 w-1.5 h-1.5 bg-[#9D4EDD] rounded-full cosmic-particle opacity-80 animate-pulse"
        style={{ animationDelay: "0s" }}
      />
      <div
        className="absolute top-8 right-16 w-0.75 h-0.75 bg-[#C77DFF] rounded-full cosmic-particle opacity-90 animate-pulse"
        style={{ animationDelay: "2s" }}
      />
      <div
        className="absolute bottom-12 left-8 w-2 h-2 bg-[#7B2CBF] rounded-full cosmic-particle opacity-70 animate-pulse"
        style={{ animationDelay: "4s" }}
      />
      <div
        className="absolute top-16 right-12 w-0.75 h-0.75 bg-[#E0AAFF] rounded-full cosmic-particle opacity-95 animate-pulse"
        style={{ animationDelay: "6s" }}
      />
      <div
        className="absolute bottom-16 right-20 w-1.5 h-1.5 bg-[#9D4EDD] rounded-full cosmic-particle opacity-60 animate-pulse"
        style={{ animationDelay: "1s" }}
      />
      <div
        className="absolute top-12 left-20 w-1 h-1 bg-[#C77DFF] rounded-full cosmic-particle opacity-85 animate-pulse"
        style={{ animationDelay: "3s" }}
      />
      <div
        className="absolute bottom-8 right-8 w-2 h-2 bg-[#7B2CBF] rounded-full cosmic-particle opacity-75 animate-pulse"
        style={{ animationDelay: "5s" }}
      />

      <div className="absolute bottom-0 w-[400px] h-[200px] rounded-t-full bg-gradient-to-t from-[#5A189A]/25 via-[#240046]/10 to-transparent blur-3xl cosmic-drift" />

      <div
        className="absolute bottom-0 w-[340px] h-[170px] rounded-t-full bg-gradient-to-t from-[#7B2CBF]/45 via-[#9D4EDD]/20 to-transparent blur-2xl cosmic-drift"
        style={{ animationDelay: "1s" }}
      />

      <div
        className="absolute bottom-0 w-[280px] h-[140px] rounded-t-full bg-gradient-to-t from-[#9D4EDD]/35 via-[#5A189A]/25 to-transparent blur-xl cosmic-drift"
        style={{ animationDelay: "2s" }}
      />

      <div
        className="absolute bottom-0 w-[240px] h-[120px] rounded-t-full bg-gradient-to-t from-[#C77DFF]/55 via-[#7B2CBF]/15 to-transparent blur-lg cosmic-drift"
        style={{ animationDelay: "0.5s" }}
      />

      {/* Core transition zone */}
      <div className="absolute bottom-0 w-[180px] h-[90px] rounded-t-full bg-gradient-to-t from-[#E0AAFF]/65 via-[#0B0617]/80 to-transparent blur-lg" />

      <div className="absolute bottom-0 w-[140px] h-[70px] rounded-t-full bg-gradient-to-t from-[#0B0617]/95 via-[#0B0617]/85 to-transparent shadow-[0_0_50px_rgba(157,78,221,0.5),0_0_25px_rgba(199,125,255,0.25)]" />

      <div className="relative z-10 px-12 py-6 bg-[#240046]/35 backdrop-blur-lg rounded-full cosmic-glow text-white font-bold text-5xl md:text-6xl font-sans tracking-wide shadow-md">
        <div className="flex items-center gap-8 bg-gradient-to-r from-[#9D4EDD] via-[#C77DFF] to-[#E0AAFF] bg-clip-text text-transparent animate-pulse">
          <div className="flex flex-col items-center">
            <span>{timeLeft.days}</span>
            <span className="text-lg md:text-xl">Days</span>
          </div>
          <span>:</span>
          <div className="flex flex-col items-center">
            <span>{timeLeft.hours}</span>
            <span className="text-lg md:text-xl">Hrs</span>
          </div>
          <span>:</span>
          <div className="flex flex-col items-center">
            <span>{timeLeft.minutes}</span>
            <span className="text-lg md:text-xl">Mins</span>
          </div>
          <span>:</span>
          <div className="flex flex-col items-center">
            <span>{timeLeft.seconds}</span>
            <span className="text-lg md:text-xl">Secs</span>
          </div>
        </div>
      </div>

      <div
        className="absolute bottom-0 w-[120px] h-[60px] rounded-t-full bg-gradient-to-t from-[#7B2CBF]/20 via-transparent to-transparent cosmic-drift animate-pulse"
        style={{ animationDelay: "3s" }}
      />
      <div
        className="absolute bottom-0 w-[100px] h-[50px] rounded-t-full bg-gradient-to-t from-[#C77DFF]/25 via-transparent to-transparent cosmic-drift animate-pulse"
        style={{ animationDelay: "4s" }}
      />
      <div
        className="absolute bottom-0 w-[80px] h-[40px] rounded-t-full bg-gradient-to-t from-[#9D4EDD]/15 via-transparent to-transparent cosmic-drift animate-pulse"
        style={{ animationDelay: "2.5s" }}
      />
    </div>
  )
}