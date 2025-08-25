import { Badge } from "@/components/ui/badge"
import { Sparkles } from "lucide-react"
import Navbar from "@/components/Navbar"
import AppInterface from "@/components/AppInterface"
import EventHorizon from "@/components/EventHorizon"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-[#05010D] text-white relative overflow-hidden">
      {/* Subtle base gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#05010D] via-[#0A0217] to-[#120A25]" />

      {/* Grid overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.01)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.01)_1px,transparent_1px)] bg-[size:70px_70px]" />

      {/* Cosmic particles evenly distributed */}
      {Array.from({ length: 30 }).map((_, i) => {
        const size = Math.random() * 5 + 3 // 3–8px now
        const top = Math.random() * 100
        const left = Math.random() * 100
        const delay = (Math.random() * 6).toFixed(1) + "s"
        const duration = (4 + Math.random() * 5).toFixed(1) + "s"

        // Purple/cyan neon palette
        const colors = [
          "bg-[#9D4EDD]/40 shadow-[#9D4EDD]/20",
          "bg-[#C77DFF]/35 shadow-[#C77DFF]/15",
          "bg-[#7B2CBF]/30 shadow-[#7B2CBF]/15",
          "bg-[#E0AAFF]/35 shadow-[#E0AAFF]/20",
          "bg-[#5A189A]/35 shadow-[#5A189A]/15",
          "bg-[#00CFFF]/30 shadow-[#00CFFF]/15", // add cyan accents
        ]
        const color = colors[i % colors.length]

        return (
          <div
            key={i}
            className={`absolute rounded-full animate-pulse ${color}`}
            style={{
              width: `${size}px`,
              height: `${size}px`,
              top: `${top}%`,
              left: `${left}%`,
              animationDelay: delay,
              animationDuration: duration,
            }}
          />
        )
      })}

      {/* Glowing nebula patches */}
      <div className="absolute top-0 right-0 w-[550px] h-[550px] bg-gradient-radial from-[#7B2CBF]/25 via-transparent to-transparent rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-0 left-0 w-[650px] h-[650px] bg-gradient-radial from-[#9D4EDD]/20 via-transparent to-transparent rounded-full blur-3xl animate-pulse" />
      <div className="absolute top-1/3 left-1/2 w-[500px] h-[500px] bg-gradient-radial from-[#240046]/30 via-transparent to-transparent rounded-full blur-2xl animate-pulse" />

      <Navbar />

      {/* Hero Content */}
      <main className="relative z-10 flex flex-col items-center text-center px-6 py-16">
        <div className="flex flex-col items-center gap-8 max-w-4xl mx-auto">
          {/* AI Badge */}
          <Badge
            variant="secondary"
            className="bg-[#240046]/70 text-[#E0AAFF]/90 border border-[#7B2CBF]/40 flex items-center gap-2 px-4 py-2 backdrop-blur-sm"
          >
            <Sparkles className="w-4 h-4 text-[#C77DFF]" />
            Take notes using AI
          </Badge>

          {/* Main Heading */}
          <h1 className="text-9xl md:text-[12rem] font-bold leading-tight font-sans bg-gradient-to-r from-[#E0AAFF] via-[#C77DFF] to-[#9D4EDD] bg-clip-text text-transparent logo-text">
            Void
          </h1>


          {/* Subheading */}
          <p className="text-xl text-[#BBA9CC] max-w-2xl font-serif">24 Hour Hackathon</p>
        </div>

        {/* Event Horizon Centerpiece */}
        <div className="my-20 w-full flex justify-center">
          <EventHorizon />
        </div>

        {/* App Interface */}
        <div className="w-full max-w-4xl mx-auto">
          <AppInterface />
        </div>
      </main>
    </div>
  )
}
