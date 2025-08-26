import { Button } from "./ui/button"
import { LogIn } from "lucide-react"

function Navbar() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      {/* Glass backdrop with seamless blending layers */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/10 via-purple-900/15 to-black/10 backdrop-blur-2xl"></div>
      <div className="absolute inset-0 bg-gradient-to-b from-white/5 via-transparent to-transparent"></div>

      <div className="relative flex items-center justify-between px-6 py-4 max-w-7xl mx-auto">
        <div className="flex items-center gap-3">
          <div className="relative w-8 h-8 rounded-lg overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-purple-400/80 via-purple-500/60 to-purple-700/80 backdrop-blur-sm"></div>
            <div className="absolute inset-0 bg-white/10 border border-white/20 rounded-lg"></div>
            <div className="relative w-full h-full flex items-center justify-center">
              <div className="w-3 h-3 bg-white/90 rounded-sm shadow-lg" />
            </div>
          </div>
          <span className="text-xl cursor-pointer font-semibold text-white/95 tracking-tight drop-shadow-lg">Void</span>
        </div>

        <nav className="hidden md:flex items-center relative">
          <div className="absolute inset-0 bg-gradient-to-r from-white/5 via-white/10 to-white/5 backdrop-blur-md rounded-2xl"></div>
          <div className="absolute inset-0 bg-gradient-to-b from-purple-500/10 via-transparent to-blue-500/10 rounded-2xl"></div>
          <div className="absolute inset-0 border border-white/20 rounded-2xl shadow-sm shadow-black/20"></div>
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent rounded-2xl"></div>

          <div className="relative flex items-center gap-1 px-6 py-3">
            <a
              href="#"
              className="relative px-4 py-2 text-white/80 font-medium transition-all duration-500 group hover:scale-110 hover:text-cyan-300"
            >
              <span className="relative z-10 drop-shadow-sm">About Us</span>
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-400/0 via-cyan-400/20 to-cyan-400/0 backdrop-blur-sm rounded-lg opacity-0 group-hover:opacity-100 transition-all duration-500"></div>
              <div className="absolute inset-0 border border-cyan-300/0 group-hover:border-cyan-300/40 rounded-lg transition-all duration-500 shadow-lg shadow-cyan-400/0 group-hover:shadow-cyan-400/20"></div>
              <div className="absolute inset-0 bg-white/0 group-hover:bg-white/5 rounded-lg transition-all duration-500"></div>
            </a>

            <a
              href="#"
              className="relative px-4 py-2 text-white/80 font-medium transition-all duration-500 group hover:rotate-2 hover:text-green-300"
            >
              <span className="relative z-10 drop-shadow-sm">Tracks</span>
              <div className="absolute inset-0 bg-gradient-to-br from-green-400/0 via-green-400/20 to-green-400/0 backdrop-blur-sm rounded-lg opacity-0 group-hover:opacity-100 transition-all duration-500 group-hover:animate-pulse"></div>
              <div className="absolute -inset-1 bg-gradient-to-r from-green-300/0 via-green-300/30 to-green-300/0 rounded-lg opacity-0 group-hover:opacity-100 blur-sm transition-all duration-500"></div>
              <div className="absolute inset-0 bg-white/0 group-hover:bg-white/5 rounded-lg transition-all duration-500"></div>
            </a>

            <a
              href="#"
              className="relative px-4 py-2 text-white/80 font-medium transition-all duration-500 group hover:-translate-y-1 hover:text-yellow-300"
            >
              <span className="relative z-10 drop-shadow-sm">Prizes</span>
              <div className="absolute inset-0 bg-gradient-to-t from-yellow-400/0 via-yellow-400/20 to-yellow-400/0 backdrop-blur-sm rounded-lg opacity-0 group-hover:opacity-100 transition-all duration-500"></div>
              <div className="absolute bottom-0 left-1/2 w-0 h-0.5 bg-gradient-to-r from-transparent via-yellow-300 to-transparent group-hover:w-full group-hover:left-0 transition-all duration-500 shadow-lg shadow-yellow-400/50"></div>
              <div className="absolute inset-0 bg-white/0 group-hover:bg-white/5 rounded-lg transition-all duration-500"></div>
            </a>

            <a
              href="#"
              className="relative px-4 py-2 text-white/80 font-medium transition-all duration-500 group hover:scale-105 hover:text-red-300"
            >
              <span className="relative z-10 drop-shadow-sm">Judges</span>
              <div className="absolute inset-0 bg-gradient-to-r from-red-400/0 via-red-400/20 to-red-400/0 backdrop-blur-sm rounded-lg opacity-0 group-hover:opacity-100 transition-all duration-500"></div>
              <div className="absolute inset-0 border-2 border-red-300/0 group-hover:border-red-300/40 rounded-lg transition-all duration-500 group-hover:animate-ping shadow-lg shadow-red-400/0 group-hover:shadow-red-400/20"></div>
              <div className="absolute inset-0 bg-white/0 group-hover:bg-white/5 rounded-lg transition-all duration-500"></div>
            </a>

            <a
              href="#"
              className="relative px-4 py-2 text-white/80 font-medium transition-all duration-700 group hover:skew-x-12 hover:text-purple-300"
            >
              <span className="relative z-10 drop-shadow-sm">Organizers</span>
              <div className="absolute inset-0 bg-gradient-to-l from-purple-400/0 via-purple-400/20 to-purple-400/0 backdrop-blur-sm rounded-lg opacity-0 group-hover:opacity-100 transition-all duration-500"></div>
              <div className="absolute inset-0 bg-purple-300/0 group-hover:bg-purple-300/10 rounded-lg opacity-0 group-hover:opacity-100 transition-all duration-500 group-hover:animate-bounce"></div>
              <div className="absolute inset-0 bg-white/0 group-hover:bg-white/5 rounded-lg transition-all duration-500"></div>
            </a>
          </div>
        </nav>

        <div className="flex items-center gap-3">
          <Button
            variant="ghost"
            className="relative text-white/90 cursor-pointer bg-gradient-to-r from-purple-500/60 to-purple-600/60 backdrop-blur-md border border-white/20 hover:bg-white/10 transition-all duration-300 font-medium flex items-center gap-2 shadow-lg shadow-purple-500/20 hover:shadow-purple-400/30 hover:scale-105"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-white/5 to-white/10 rounded-md"></div>
            <LogIn className="w-4 h-4 relative z-10 drop-shadow-sm" />
            <span className="relative z-10 drop-shadow-sm">Login</span>
          </Button>
        </div>
      </div>
    </header>
  )
}

export default Navbar