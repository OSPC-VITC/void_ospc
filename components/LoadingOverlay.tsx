'use client'

import React, { useEffect, useState } from 'react'

export default function LoadingOverlay() {
  const [isVisible, setIsVisible] = useState(true)
  const [isFading, setIsFading] = useState(false)

  useEffect(() => {
    if (typeof window === 'undefined') return

    const hide = () => {
      setIsFading(true)
      window.setTimeout(() => setIsVisible(false), 400)
    }

    if (document.readyState === 'complete') {
      hide()
    } else {
      const onLoad = () => hide()
      window.addEventListener('load', onLoad, { once: true })
      return () => window.removeEventListener('load', onLoad)
    }
  }, [])

  if (!isVisible) return null

  return (
    <div
      aria-hidden
      className={`fixed inset-0 z-[9999] flex items-center justify-center bg-black transition-opacity duration-300 ${isFading ? 'opacity-0' : 'opacity-100'}`}
    >
      <div className="spinner-box" role="status" aria-label="Loading">
        <div className="blue-orbit leo" />
        <div className="green-orbit leo" />
        <div className="red-orbit leo" />
        <div className="white-orbit w1 leo" />
        <div className="white-orbit w2 leo" />
        <div className="white-orbit w3 leo" />
      </div>

      <style jsx>{`
        /* KEYFRAMES */
        @keyframes spin {
          from { transform: rotate(0); }
          to { transform: rotate(359deg); }
        }
        @keyframes spin3D {
          from { transform: rotate3d(.5,.5,.5, 360deg); }
          to { transform: rotate3d(0deg); }
        }
        @keyframes configure-clockwise {
          0% { transform: rotate(0); }
          25% { transform: rotate(90deg); }
          50% { transform: rotate(180deg); }
          75% { transform: rotate(270deg); }
          100% { transform: rotate(360deg); }
        }
        @keyframes configure-xclockwise {
          0% { transform: rotate(45deg); }
          25% { transform: rotate(-45deg); }
          50% { transform: rotate(-135deg); }
          75% { transform: rotate(-225deg); }
          100% { transform: rotate(-315deg); }
        }
        @keyframes pulse {
          from { opacity: 1; transform: scale(1); }
          to { opacity: .25; transform: scale(.75); }
        }

        /* CONTAINER */
        .spinner-box {
          width: 300px;
          height: 300px;
          display: flex;
          justify-content: center;
          align-items: center;
          background-color: transparent;
        }

        /* ORBITS - themed */
        .leo { position: absolute; display: flex; justify-content: center; align-items: center; border-radius: 50%; }
        .blue-orbit { width: 165px; height: 165px; border: 1px solid rgba(147, 51, 234, 0.65); animation: spin3D 3s linear .2s infinite; }
        .green-orbit { width: 120px; height: 120px; border: 1px solid rgba(168, 85, 247, 0.65); animation: spin3D 2s linear 0s infinite; }
        .red-orbit { width: 90px; height: 90px; border: 1px solid rgba(124, 58, 237, 0.65); animation: spin3D 1s linear 0s infinite; }
        .white-orbit { width: 60px; height: 60px; border: 2px solid rgba(255,255,255,0.9); animation: spin3D 10s linear 0s infinite; }
        .w1 { transform: rotate3D(1, 1, 1, 90deg); }
        .w2 { transform: rotate3D(1, 2, .5, 90deg); }
        .w3 { transform: rotate3D(.5, 1, 2, 90deg); }

        /* Reduce motion respect */
        @media (prefers-reduced-motion: reduce) {
          .blue-orbit, .green-orbit, .red-orbit, .white-orbit { animation: none; }
        }
      `}</style>
    </div>
  )
} 