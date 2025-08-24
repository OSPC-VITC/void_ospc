import { Button } from "./ui/button"
import { LogIn } from "lucide-react"

function Navbar() {
  return (
    <header className="relative z-10 flex items-center justify-between px-6 py-4 max-w-7xl mx-auto">
      <div className="flex items-center gap-3">
        <div className="w-8 h-8 bg-gradient-to-br from-purple-500 via-purple-600 to-purple-700 rounded-lg flex items-center justify-center shadow-lg border border-purple-400/20">
          <div className="w-3 h-3 bg-white rounded-sm opacity-95 shadow-sm" />
        </div>
        <span className="text-xl cursor-pointer font-semibold text-white tracking-tight">Void</span>
      </div>

      <nav className="hidden md:flex items-center gap-8">
        <a href="#" className="text-gray-300 hover:text-white transition-colors duration-200 font-medium">
          About Us
        </a>
        <a href="#" className="text-gray-300 hover:text-white transition-colors duration-200 font-medium">
          Tracks
        </a>
        <a href="#" className="text-gray-300 hover:text-white transition-colors duration-200 font-medium">
          Prizes
        </a>
        <a href="#" className="text-gray-300 hover:text-white transition-colors duration-200 font-medium">
          Judges
        </a>
        <a href="#" className="text-gray-300 hover:text-white transition-colors duration-200 font-medium">
          Organizers
        </a>
      </nav>

      <div className="flex items-center gap-3">
        <Button
          variant="ghost"
          className="text-gray-300 cursor-pointer bg-gradient-to-r from-purple-600 to-purple-700 text-white hover:bg-gray-800/50 transition-all duration-200 font-medium flex items-center gap-2"
        >
          <LogIn className="w-4 h-4" />
          Login
        </Button>
      </div>
    </header>
  )
}

export default Navbar
