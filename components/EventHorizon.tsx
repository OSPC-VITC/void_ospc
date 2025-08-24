export default function EventHorizon() {
  return (
    <div className="relative flex items-center justify-center w-full h-96 overflow-hidden bg-[#0B0617]">
      <div
        className="absolute top-10 left-20 w-2 h-2 bg-[#9D4EDD] rounded-full cosmic-particle opacity-80 animate-pulse"
        style={{ animationDelay: "0s" }}
      />
      <div
        className="absolute top-16 right-32 w-1 h-1 bg-[#C77DFF] rounded-full cosmic-particle opacity-90 animate-pulse"
        style={{ animationDelay: "2s" }}
      />
      <div
        className="absolute bottom-20 left-16 w-3 h-3 bg-[#7B2CBF] rounded-full cosmic-particle opacity-70 animate-pulse"
        style={{ animationDelay: "4s" }}
      />
      <div
        className="absolute top-32 right-20 w-1 h-1 bg-[#E0AAFF] rounded-full cosmic-particle opacity-95 animate-pulse"
        style={{ animationDelay: "6s" }}
      />
      <div
        className="absolute bottom-32 right-40 w-2 h-2 bg-[#9D4EDD] rounded-full cosmic-particle opacity-60 animate-pulse"
        style={{ animationDelay: "1s" }}
      />
      <div
        className="absolute top-20 left-40 w-1.5 h-1.5 bg-[#C77DFF] rounded-full cosmic-particle opacity-85 animate-pulse"
        style={{ animationDelay: "3s" }}
      />
      <div
        className="absolute bottom-16 right-16 w-2.5 h-2.5 bg-[#7B2CBF] rounded-full cosmic-particle opacity-75 animate-pulse"
        style={{ animationDelay: "5s" }}
      />

      <div className="absolute bottom-0 w-[800px] h-[400px] rounded-t-full bg-gradient-to-t from-[#5A189A]/40 via-[#240046]/15 to-transparent blur-3xl cosmic-drift" />

      <div
        className="absolute bottom-0 w-[680px] h-[340px] rounded-t-full bg-gradient-to-t from-[#7B2CBF]/60 via-[#9D4EDD]/30 to-transparent blur-2xl cosmic-drift"
        style={{ animationDelay: "1s" }}
      />

      <div
        className="absolute bottom-0 w-[560px] h-[280px] rounded-t-full bg-gradient-to-t from-[#9D4EDD]/50 via-[#5A189A]/40 to-transparent blur-xl cosmic-drift"
        style={{ animationDelay: "2s" }}
      />

      <div
        className="absolute bottom-0 w-[480px] h-[240px] rounded-t-full bg-gradient-to-t from-[#C77DFF]/70 via-[#7B2CBF]/25 to-transparent blur-lg cosmic-drift"
        style={{ animationDelay: "0.5s" }}
      />

      {/* Core transition zone */}
      <div className="absolute bottom-0 w-[360px] h-[180px] rounded-t-full bg-gradient-to-t from-[#E0AAFF]/80 via-[#0B0617]/90 to-transparent blur-lg" />

      <div className="absolute bottom-0 w-[280px] h-[140px] rounded-t-full bg-gradient-to-t from-[#0B0617] via-[#0B0617]/95 to-transparent shadow-[0_0_120px_rgba(157,78,221,0.7),0_0_60px_rgba(199,125,255,0.4)]" />

      <div className="relative z-10 px-10 py-5 bg-[#240046]/50 backdrop-blur-md rounded-full border border-[#9D4EDD]/60 cosmic-glow text-white font-bold text-xl font-sans tracking-wide shadow-lg">
        <span className="bg-gradient-to-r from-[#9D4EDD] via-[#C77DFF] to-[#E0AAFF] bg-clip-text text-transparent animate-pulse">
          Caption
        </span>
      </div>

      <div
        className="absolute bottom-0 w-[240px] h-[120px] rounded-t-full border-2 border-[#7B2CBF]/30 cosmic-drift animate-pulse"
        style={{ animationDelay: "3s" }}
      />
      <div
        className="absolute bottom-0 w-[200px] h-[100px] rounded-t-full border-2 border-[#C77DFF]/40 cosmic-drift animate-pulse"
        style={{ animationDelay: "4s" }}
      />
      <div
        className="absolute bottom-0 w-[160px] h-[80px] rounded-t-full border border-[#9D4EDD]/50 cosmic-drift animate-pulse"
        style={{ animationDelay: "2.5s" }}
      />
    </div>
  )
}
