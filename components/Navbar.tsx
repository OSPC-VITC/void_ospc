"use client"
import { Button } from "@/components/ui/button"
import type React from "react"

import { LogIn, Menu, X } from "lucide-react"
import { useCallback, useRef, useState } from "react"

function Navbar() {
  const headerRef = useRef<HTMLElement>(null)
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [activeId, setActiveId] = useState<string | null>(null)

  const scrollToId = useCallback(
    (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
      e.preventDefault()
      setActiveId(id)

      const doScroll = () => {
        const el = document.getElementById(id)
        if (!el) return
        const headerH = headerRef.current?.offsetHeight ?? 80
        const y = el.getBoundingClientRect().top + window.pageYOffset - headerH - 8
        window.scrollTo({ top: y, behavior: "smooth" })
      }

      if (isMenuOpen) {
        setIsMenuOpen(false)
        requestAnimationFrame(() => requestAnimationFrame(doScroll))
      } else {
        doScroll()
      }
    },
    [isMenuOpen],
  )

  const goTop = useCallback(() => {
    if (isMenuOpen) setIsMenuOpen(false)
    setActiveId(null)
    window.scrollTo({ top: 0, behavior: "smooth" })
    if (typeof window !== "undefined" && window.history?.replaceState) {
      window.history.replaceState(null, "", window.location.pathname + window.location.search)
    }
  }, [isMenuOpen])

  const navItems = [
    { id: "about", label: "About Us" },
    { id: "tracks", label: "Tracks" },
    { id: "prizes", label: "Prizes" },
    { id: "judges", label: "Judges" },
    { id: "organizers", label: "Organizers" },
  ] as const

  const NavItem = ({ id, label, isActive }: { id: string; label: string; isActive?: boolean }) => (
    <a
      href={`#${id}`}
      aria-current={isActive ? "page" : undefined}
      onClick={(e) => scrollToId(e, id)}
      className={`relative px-4 py-2 font-medium outline-none transition-all duration-300 group
        ${isActive ? "text-cyan-300" : "text-white/80"}
        hover:text-cyan-300 focus-visible:text-cyan-300 active:text-cyan-300`}
    >
      <span className="relative z-10 drop-shadow-sm">{label}</span>
      <div
        className={`absolute inset-0 rounded-lg backdrop-blur-sm transition-all duration-300
          ${isActive ? "opacity-100 bg-gradient-to-r from-cyan-400/0 via-cyan-400/20 to-cyan-400/0" : "opacity-0 bg-gradient-to-r from-cyan-400/0 via-cyan-400/20 to-cyan-400/0"}
          group-hover:opacity-100 group-active:opacity-100 group-focus-visible:opacity-100`}
      />
      <div
        className={`absolute inset-0 rounded-lg transition-all duration-300
          ${isActive ? "border border-cyan-300/40 shadow-lg shadow-cyan-400/20" : "border border-cyan-300/0 shadow-lg shadow-cyan-400/0"}
          group-hover:border-cyan-300/40 group-active:border-cyan-300/40 group-focus-visible:border-cyan-300/40
          group-hover:shadow-cyan-400/20 group-active:shadow-cyan-400/20 group-focus-visible:shadow-cyan-400/20`}
      />
      <div
        className={`absolute inset-0 rounded-lg transition-all duration-300
          ${isActive ? "bg-white/5" : "bg-white/0"}
          group-hover:bg-white/5 group-active:bg-white/5 group-focus-visible:bg-white/5`}
      />
    </a>
  )

  return (
    <header ref={headerRef} className="fixed top-0 left-0 right-0 z-50 bg-transparent">
      <div className="relative flex items-center justify-between px-6 py-4 max-w-7xl mx-auto">
        <div className="flex items-center gap-3">
          <div className="relative w-8 h-8 rounded-lg overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-purple-400/80 via-purple-500/60 to-purple-700/80 backdrop-blur-sm"></div>
            <div className="absolute inset-0 bg-white/10 border border-white/20 rounded-lg"></div>
            <div className="relative w-full h-full flex items-center justify-center">
              <div className="w-3 h-3 bg-white/90 rounded-sm shadow-lg" />
            </div>
          </div>
          <span
            role="button"
            tabIndex={0}
            onClick={goTop}
            onKeyDown={(e) => {
              if (e.key === "Enter" || e.key === " ") {
                e.preventDefault()
                goTop()
              }
            }}
            className="text-xl cursor-pointer font-semibold text-white/95 tracking-tight drop-shadow-lg logo-text"
          >
            Void
          </span>
        </div>

        <nav className="hidden md:flex items-center relative bg-transparent">
          <div className="relative flex items-center gap-1 px-6 py-3">
            {navItems.map((item) => (
              <NavItem key={item.id} id={item.id} label={item.label} isActive={activeId === item.id} />
            ))}
          </div>
        </nav>

        <div className="flex items-center gap-3">
          <Button
            variant="ghost"
            className="relative text-white/90 cursor-pointer bg-gradient-to-r from-purple-500/60 to-purple-600/60 backdrop-blur-md border border-white/20 hover:bg-white/10 transition-all duration-300 font-medium md:flex hidden items-center gap-2 shadow-lg shadow-purple-500/20 hover:shadow-purple-400/30 hover:scale-105"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-white/5 to-white/10 rounded-md"></div>
            <LogIn className="w-4 h-4 relative z-10 drop-shadow-sm" />
            <span className="relative z-10 drop-shadow-sm">Login</span>
          </Button>

          <button
            type="button"
            aria-label="Toggle menu"
            aria-controls="mobile-menu"
            aria-expanded={isMenuOpen}
            onClick={() => setIsMenuOpen((v) => !v)}
            className="md:hidden inline-flex items-center justify-center p-2 rounded-md text-white/90 hover:bg-white/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-300 transition"
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      <div
        id="mobile-menu"
        className={`md:hidden px-4 pb-4 transition-colors ${isMenuOpen ? "block" : "hidden"} bg-black/80 backdrop-blur-md border-t border-white/10 shadow-lg`}
      >
        <div className="flex flex-col gap-1">
          {navItems.map((item) => (
            <NavItem key={item.id} id={item.id} label={item.label} isActive={activeId === item.id} />
          ))}
          <Button
            variant="ghost"
            className="mt-2 w-full relative text-white/90 cursor-pointer bg-gradient-to-r from-purple-500/60 to-purple-600/60 backdrop-blur-md border border-white/20 hover:bg-white/10 transition-all duration-300 font-medium flex items-center justify-center gap-2 shadow-lg shadow-purple-500/20 hover:shadow-purple-400/30"
          >
            <LogIn className="w-4 h-4" />
            <span>Login</span>
          </Button>
        </div>
      </div>
    </header>
  )
}

export default Navbar
