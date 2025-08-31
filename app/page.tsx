'use client'

import { Badge } from "@/components/ui/badge"
import { Sparkles } from "lucide-react"
import { FaCalendarAlt, FaMapMarkerAlt } from "react-icons/fa"
import { motion } from "framer-motion"
import EventHorizon from "@/components/EventHorizon"
import AnimatedDots from "@/components/AnimatedDots"
import { useRef, memo, useMemo } from "react"
import { HeroScrollDemo } from "@/components/HeroScrollDemo"
import AboutSection from "@/components/AboutSection"
import TracksSection from "@/components/TracksSection"
import PrizesSection from "@/components/PrizesSection"
import JudgesSection from "@/components/JudgesSection"
import OrganisersSection from "@/components/OrganizersSection"
import { OptimizedImage } from "@/components/ui/optimized-image"

import * as THREE from 'three'
import { useFrame, Canvas } from '@react-three/fiber'
import { MeshDistortMaterial, AdaptiveDpr, Environment, useGLTF } from '@react-three/drei'

// Memoized VoidSphere component to prevent unnecessary re-renders
const VoidSphere = memo(function VoidSphere() {
  const meshRef = useRef<THREE.Mesh>(null!)
  
  useFrame(({ clock }) => {
    if (meshRef.current) {
      // Use elapsed time for smoother animation
      const time = clock.getElapsedTime()
      meshRef.current.rotation.z = time * 0.1
      meshRef.current.rotation.y = time * 0.15
    }
  })
  
  // Memoize material properties to avoid recreating them on each render
  const materialProps = useMemo(() => ({
    color: "#240046",
    distort: 0.4,
    speed: 4,
    roughness: 0.2,
    metalness: 2,
    opacity: 1,
    transparent: true,
    wireframe: false
  }), [])
  
  return (
    <mesh ref={meshRef} position={[0, 0, 0]} scale={1.8}>
      <sphereGeometry args={[3, 128, 128]} />
      <MeshDistortMaterial
        attach="material"
        {...materialProps}
      />
    </mesh>
  )
})

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

  // Memoize the Canvas settings to prevent unnecessary re-renders
  const canvasSettings = useMemo(() => ({
    camera: { position: [0, 0, 15] as [number, number, number], fov: 65 },
    dpr: [1, 2] as [number, number], // Limit max DPR for better performance
    performance: { min: 0.5 } // Allow scaling down for better performance
  }), [])

  return (
    <div className="min-h-screen text-white relative overflow-hidden">
      {/* Background Animated Dots */}
      <AnimatedDots />

      {/* Hero Content */}
      <main className="relative z-10 flex flex-col items-center text-center px-6 pt-0">
        {/* Hero Section with VoidSphere and Logo */}
        <div className="w-full flex flex-col items-center justify-center pt-0 pb-2 relative hero-section">
          {/* Void Sphere Canvas */}
          <div className="sphere-container w-full h-[450px] relative mb-0">
            <Canvas 
              camera={canvasSettings.camera}
              dpr={canvasSettings.dpr}
              performance={canvasSettings.performance}
            >
              <AdaptiveDpr pixelated />
              <ambientLight intensity={0.2} />
              <directionalLight position={[10, 10, 10]} intensity={0.5} color="#9333EA" />
              <directionalLight position={[-10, -10, -10]} intensity={0.3} color="#A855F7" />
              <fog attach="fog" args={['black', 10, 40]} />
              <VoidSphere />
              <Environment preset="night" />
            </Canvas>
            
            {/* Logo overlay in center of sphere */}
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[220px] md:w-[280px] z-10 void-logo-pulse">
              <OptimizedImage
                src="/images/text.png"
                alt="Void Logo"
                width={280}
                height={120}
                className="w-full h-auto"
                priority={true}
                desktopQuality={90}
                mobileQuality={75}
              />
            </div>
            
            {/* Radial gradient overlay */}
            <div className="absolute inset-0 bg-gradient-radial-void" />
          </div>

          {/* Event Details under the sphere */}
          <div className="flex flex-col items-center gap-2 py-1">
            <motion.div
              className="flex items-center justify-center space-x-2"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
            >
              <FaCalendarAlt className="text-purple-400 text-lg" />
              <span className="text-white text-sm md:text-xl font-medium">
                September 29, 2025
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
        </div>

        {/* Event Horizon Timer - removed gap */}
        <div className="mt-2 mb-4 w-full flex justify-center">
          <EventHorizon />
        </div>

        <HeroScrollDemo/>
        <AboutSection/>
        <TracksSection/>
        <PrizesSection/>
        <JudgesSection/>
        <OrganisersSection/>

      </main>
    </div>
  )
}