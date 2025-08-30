'use client';

import React, { useState } from 'react';
import { OptimizedImage } from './ui/optimized-image';
import { motion, AnimatePresence } from 'framer-motion';
import { Badge } from '@/components/ui/badge';
import { cn } from '@/lib/utils';

type TrackWithSingleImage = {
  title: string;
  description: string;
  outcome: string;
  image: string;
  images?: never;
};

type TrackWithDualImages = {
  title: string;
  description: string;
  outcome: string;
  image?: never;
  images: { left: string; right: string };
};

type Track = TrackWithSingleImage | TrackWithDualImages;

export default function TracksSection() {
  const tracks: Track[] = [
    {
      title: "FinTech & Digital Payments",
      description: "Foster innovation in financial technologies and digital payment solutions to revolutionize how we transact in the digital world.",
      outcome: "Cutting-edge payment systems, blockchain solutions, and financial management tools.",
      image: "/tracks/fintech.jpg"
    },
    {
      title: "HealthTech & EdTech",
      description: "Create revolutionary solutions for healthcare and education challenges using AI, data analytics, and immersive technologies.",
      outcome: "Advanced health monitoring systems, virtual learning platforms, and accessibility tools.",
      images: {
        left: "/tracks/health.jpg",
        right: "/tracks/ed.avif"
      }
    },
    {
      title: "RetailTech | SaaS | Smart Mobility",
      description: "Enhance retail experiences, develop scalable software solutions, and reimagine transportation for a connected world.",
      outcome: "Immersive shopping platforms, enterprise solutions, and intelligent transport systems.",
      image: "/tracks/retail.jpg"
    },
    {
      title: "AgriTech & SDG",
      description: "Develop innovative agricultural solutions aligned with Sustainable Development Goals to address global challenges.",
      outcome: "Smart farming systems, sustainable resource management, and climate-responsive technologies.",
      images: {
        left: "/tracks/agri.jpg",
        right: "/tracks/sust.webp"
      }
    },
    {
      title: "Open Innovation",
      description: "Cultivate an entrepreneurial mindset for groundbreaking, cross-domain tech innovations outside conventional categories.",
      outcome: "Disruptive solutions addressing real-world challenges through creative interdisciplinary approaches.",
      image: "/tracks/open.jpg"
    },
  ];

  const [activeIndex, setActiveIndex] = useState(0);

  // Variants for animations
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const trackVariants = {
    expanded: (i: number) => ({
      flex: i === activeIndex ? 10 : 1,
      transition: {
        flex: { duration: 0.4, ease: "easeInOut" }
      }
    }),
    collapsed: { 
      flex: 1,
      transition: {
        flex: { duration: 0.4, ease: "easeInOut" }
      }
    }
  };

  const textVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.4, ease: "easeOut" }
    }
  };

  const titleVariants = {
    vertical: { 
      writingMode: "vertical-rl" as const,
      rotate: 180,
      x: "0%",
      textAlign: "center" as const,
      transition: { duration: 0.3, ease: "easeInOut" }
    },
    horizontal: { 
      writingMode: "horizontal-tb" as const,
      rotate: 0,
      x: "0%",
      textAlign: "left" as const,
      transition: { duration: 0.3, ease: "easeInOut" }
    }
  };

  return (
    <section id="tracks" className="min-h-screen py-16 text-white bg-black">
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="mb-6 text-center font-bold tracking-wider leading-tight" style={{ fontSize: "clamp(40px, 10vw, 70px)" }}>
            <span className="text-white">VOID </span>
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-violet-700">TRACKS</span>
          </h2>
          <motion.div 
            className="h-1 w-32 bg-gradient-to-r from-purple-600 to-violet-800 mx-auto mb-10 rounded-full"
            initial={{ width: 0, opacity: 0 }}
            animate={{ width: "8rem", opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          />
        </motion.div>

        {/* Desktop View */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="hidden sm:flex h-[450px] gap-3 max-w-[95vw] lg:max-w-6xl mx-auto"
        >
          {tracks.map((track, index) => (
            <motion.div
              key={track.title}
              custom={index}
              variants={trackVariants}
              initial="collapsed"
              animate="expanded"
              className="relative overflow-hidden bg-black/40 flex-1 cursor-pointer track-container void-border"
              style={{ flexGrow: index === activeIndex ? 10 : 1 }}
              onClick={() => setActiveIndex(index)}
              onMouseEnter={() => setActiveIndex(index)}
              whileHover={{ scale: 1.01, transition: { duration: 0.2 } }}
            >
              <div className="a l"></div>
              <div className="a r"></div>
              <div className="a t"></div>
              <div className="a b"></div>
              
              {/* Background images */}
              {'images' in track ? (
                <div className="absolute inset-0 w-full h-full">
                  <div className="absolute inset-0 w-1/2 h-full">
                    <OptimizedImage
                      src={track.images!.left}
                      alt={`${track.title} - Left`}
                      fill
                      className="object-cover"
                      style={{
                        opacity: index === activeIndex ? 0.5 : 0.3,
                        filter: index === activeIndex ? 'brightness(0.7) hue-rotate(240deg)' : 'brightness(0.5) hue-rotate(240deg)',
                        objectPosition: track.title === "HealthTech & EdTech" ? '85% center' : 
                                       track.title === "AgriTech & SDG" ? 'center center' : 'center'
                      }}
                      mobileQuality={60}
                      desktopQuality={85}
                      priority={index === 0}
                    />
                  </div>
                  <div className="absolute right-0 w-1/2 h-full">
                    <OptimizedImage
                      src={track.images!.right}
                      alt={`${track.title} - Right`}
                      fill
                      className="object-cover"
                      style={{
                        opacity: index === activeIndex ? 0.5 : 0.3,
                        filter: index === activeIndex ? 'brightness(0.7) hue-rotate(240deg)' : 'brightness(0.5) hue-rotate(240deg)',
                        objectPosition: track.title === "HealthTech & EdTech" ? '95% center' : 
                                     track.title === "AgriTech & SDG" ? 'center center' : 'center'
                      }}
                      mobileQuality={60}
                      desktopQuality={85}
                      priority={index === 0}
                    />
                  </div>
                </div>
              ) : (
                <OptimizedImage
                  src={track.image}
                  alt={track.title}
                  fill
                  className="absolute inset-0 object-cover w-full h-full"
                  style={{
                    opacity: index === activeIndex ? 0.5 : 0.3,
                    filter: index === activeIndex ? 'brightness(0.7) hue-rotate(240deg)' : 'brightness(0.5) hue-rotate(240deg)'
                  }}
                  mobileQuality={60}
                  desktopQuality={85}
                  priority={index === 0}
                />
              )}

              {/* Gradient overlay */}
              <div 
                className="absolute inset-0 z-10 pointer-events-none"
                style={{
                  background: index === activeIndex 
                    ? 'linear-gradient(to bottom, rgba(0,0,0,0.7) 0%, rgba(76, 29, 149, 0.3) 30%, rgba(76, 29, 149, 0.3) 70%, rgba(0,0,0,0.7) 100%)'
                    : 'linear-gradient(to right, rgba(0,0,0,0.7) 0%, rgba(76, 29, 149, 0.2) 100%)'
                }}
              ></div>

              {/* Desktop View Content */}
              <div className={cn(
                "relative z-20 h-full p-6 flex flex-col",
                index === activeIndex ? "justify-between" : "justify-start"
              )}>
                <motion.h3 
                  variants={titleVariants}
                  initial="vertical"
                  animate={index === activeIndex ? "horizontal" : "vertical"}
                  className="font-heading text-sm md:text-lg uppercase tracking-wider font-medium text-white mb-2"
                  style={{
                    textShadow: '0 0 15px rgba(138, 43, 226, 0.8), 0 2px 5px rgba(0, 0, 0, 0.9)'
                  }}
                >
                  {track.title}
                </motion.h3>

                <AnimatePresence>
                  {index === activeIndex && (
                    <motion.div
                      variants={textVariants}
                      initial="hidden"
                      animate="visible"
                      exit={{ opacity: 0, y: 10, transition: { duration: 0.2 } }}
                      className="mt-auto"
                    >
                      <Badge className="bg-purple-700/80 hover:bg-purple-700 mb-3">Track {index + 1}</Badge>
                      <p className="text-sm leading-tight text-gray-200 mb-3">{track.description}</p>
                      <p className="text-sm leading-tight text-purple-300">
                        <span className="font-semibold">Outcome:</span> {track.outcome}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Mobile View */}
        <div className="sm:hidden space-y-6 max-w-md mx-auto">
          {tracks.map((track, index) => (
            <motion.div 
              key={track.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ 
                opacity: 1, 
                y: 0,
                height: index === activeIndex ? 400 : 70 
              }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
              className="track-container bg-black/40 overflow-hidden relative cursor-pointer void-border"
              onClick={() => setActiveIndex(index)}
            >
              <div className="a l"></div>
              <div className="a r"></div>
              <div className="a t"></div>
              <div className="a b"></div>

              {/* Content layer */}
              <div className="relative z-10 p-6 flex flex-col h-full">
                {/* Title always at top */}
                <h3 className="font-heading text-base sm:text-lg uppercase tracking-wider font-medium text-white mb-2"
                  style={{
                    textShadow: '0 0 15px rgba(138, 43, 226, 0.8), 0 2px 5px rgba(0, 0, 0, 0.9)'
                  }}
                >
                  {track.title}
                </h3>

                {/* Expandable content */}
                <AnimatePresence>
                  {index === activeIndex && (
                    <motion.div
                      variants={textVariants}
                      initial="hidden"
                      animate="visible"
                      exit={{ opacity: 0, transition: { duration: 0.2 } }}
                      className="flex-grow flex flex-col justify-end"
                    >
                      {/* All content at bottom */}
                      <div className="mt-auto">
                        <Badge className="bg-purple-700/80 hover:bg-purple-700 w-fit mb-3">Track {index + 1}</Badge>
                        <p className="text-sm leading-tight text-gray-200 mb-3">{track.description}</p>
                        <p className="text-sm leading-tight text-purple-300">
                          <span className="font-semibold">Outcome:</span> {track.outcome}
                        </p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/* Background image with overlay */}
              <div className="absolute inset-0 z-0">
                {'images' in track ? (
                  <div className="absolute inset-0 w-full h-full">
                    <div className="absolute inset-0 w-1/2 h-full">
                      <OptimizedImage
                        src={track.images!.left}
                        alt={`${track.title} - Left`}
                        fill
                        className="object-cover"
                        style={{
                          opacity: index === activeIndex ? 0.5 : 0.3,
                          filter: index === activeIndex ? 'brightness(0.7) hue-rotate(240deg)' : 'brightness(0.5) hue-rotate(240deg)',
                          objectPosition: track.title === "HealthTech & EdTech" ? '80% center' : 'center'
                        }}
                        mobileQuality={60}
                        desktopQuality={85}
                      />
                    </div>
                    <div className="absolute right-0 w-1/2 h-full">
                      <OptimizedImage
                        src={track.images!.right}
                        alt={`${track.title} - Right`}
                        fill
                        className="object-cover"
                        style={{
                          opacity: index === activeIndex ? 0.5 : 0.3,
                          filter: index === activeIndex ? 'brightness(0.7) hue-rotate(240deg)' : 'brightness(0.5) hue-rotate(240deg)',
                          objectPosition: track.title === "HealthTech & EdTech" ? '95% center' : 'center'
                        }}
                        mobileQuality={60}
                        desktopQuality={85}
                      />
                    </div>
                  </div>
                ) : (
                  <OptimizedImage
                    src={track.image}
                    alt={track.title}
                    fill
                    className="object-cover"
                    style={{
                      opacity: index === activeIndex ? 0.5 : 0.3,
                      filter: index === activeIndex ? 'brightness(0.7) hue-rotate(240deg)' : 'brightness(0.5) hue-rotate(240deg)',
                      objectPosition: track.title === "RetailTech | SaaS | Smart Mobility" ? '65% center' : 'center'
                    }}
                    mobileQuality={60}
                    desktopQuality={85}
                  />
                )}
                
                {/* Overlay */}
                <div 
                  className="absolute inset-0" 
                  style={{
                    background: index === activeIndex
                      ? 'linear-gradient(to bottom, rgba(0,0,0,0.7) 0%, rgba(76, 29, 149, 0.3) 30%, rgba(76, 29, 149, 0.3) 70%, rgba(0,0,0,0.7) 100%)'
                      : 'linear-gradient(to bottom, rgba(0,0,0,0.7) 0%, rgba(76, 29, 149, 0.2) 100%)'
                  }}
                ></div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* SVG filter for animated borders - same as used in FAQs */}
      <svg className="hidden">
        <filter id="unopaq" width="3000%" x="-1000%" height="3000%" y="-1000%">
          <feColorMatrix
            values="1 0 0 0 0 
                    0 1 0 0 0 
                    0 0 1 0 0 
                    0 0 0 2 0"
          ></feColorMatrix>
        </filter>
      </svg>

      <style jsx>{`
        .track-container {
          position: relative;
          transition: all 0.3s ease;
        }
        
        .track-container:hover {
          transform: translateY(-2px);
        }

        .track-container::before {
          content: "";
          position: absolute;
          inset: 0;
          opacity: 0;
          background: radial-gradient(
              circle at 50% 50%,
              #0000 0,
              #0000 20%,
              #111111aa 50%
            ),
            radial-gradient(ellipse 100% 100%, #fff, #fff0);
          background-size:
            3px 3px,
            auto auto;
          transition: 0.3s;
          z-index: 5;
        }

        .track-container:hover::before {
          opacity: 0.4;
        }

        .a {
          pointer-events: none;
          position: absolute;
          --w: 2.5px;
          --t: -20px;
          --s: calc(var(--t) * -1);
          --e: calc(100% + var(--t));
          --g: #fff0, #9333EA40 var(--s), #9333EA80 var(--s), #9333EA, #9333EA80 var(--e),
            #9333EA40 var(--e), #fff0;
          z-index: 30;
        }

        .a::before {
          content: "";
          position: absolute;
          inset: 0;
          background: inherit;
          filter: blur(3px) url(#unopaq);
          z-index: 25;
        }

        .a::after {
          content: "";
          position: absolute;
          inset: 0;
          background: inherit;
          filter: blur(8px) url(#unopaq);
          opacity: 0;
          z-index: 25;
          transition: 0.3s;
        }

        .track-container:hover .a::after {
          opacity: 1;
        }

        .l {
          left: -2px;
          background: linear-gradient(var(--g));
          top: var(--t);
          bottom: var(--t);
          width: var(--w);
        }

        .r {
          right: -2px;
          background: linear-gradient(var(--g));
          top: var(--t);
          bottom: var(--t);
          width: var(--w);
        }

        .t {
          top: -2px;
          background: linear-gradient(90deg, var(--g));
          left: var(--t);
          right: var(--t);
          height: var(--w);
        }

        .b {
          bottom: -2px;
          background: linear-gradient(90deg, var(--g));
          left: var(--t);
          right: var(--t);
          height: var(--w);
        }
      `}</style>
    </section>
  );
}