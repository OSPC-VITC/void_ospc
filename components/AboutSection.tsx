"use client"
import React, { useRef } from 'react';
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { motion, useScroll, useTransform, useInView } from 'framer-motion';
import { Card, CardContent } from './ui/card';
import { Calendar, Shield } from "lucide-react"; // Only keep the icons you use

const AboutSection: React.FC = () => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });
  
  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.12,
        delayChildren: 0.1
      }
    }
  };
  
  const itemVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { 
        duration: 0.7, 
        ease: [0.25, 0.1, 0.25, 1.0] 
      } 
    }
  };

  const titleVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { 
        duration: 0.6, 
        ease: "easeOut",
        staggerChildren: 0.08,
        delayChildren: 0.2
      }
    }
  };
  
  const letterVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  const floatingAnimation = {
    y: [0, -10, 0],
    transition: {
      duration: 2,
      repeat: Infinity,
      ease: "easeInOut"
    }
  };
  
  const titleText = "VOID";
  const titleLetters = titleText.split("");

  // Staggered card animations
  const cardContainerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.3
      }
    }
  };
  
  const cardVariants = {
    hidden: { opacity: 0, y: 30, scale: 0.95 },
    visible: { 
      opacity: 1, 
      y: 0, 
      scale: 1,
      transition: { 
        duration: 0.7,
        ease: [0.25, 0.1, 0.25, 1.0]
      }
    },
    hover: {
      y: -8,
      scale: 1.02,
      transition: { duration: 0.3, ease: "easeOut" }
    }
  };
  
  const iconVariants = {
    initial: { scale: 1 },
    hover: { 
      scale: 1.1, 
      rotate: 5, 
      transition: { 
        repeat: Infinity, 
        repeatType: "mirror" as const, 
        duration: 1 
      } 
    }
  };

  return (
    <section id="about" className="relative text-white py-24 overflow-hidden" ref={ref}>
      {/* Dynamic background elements removed */}
      
      <div className="relative z-10 container mx-auto px-4 md:px-8">
        <motion.div 
          className="max-w-6xl mx-auto"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          <motion.div
            variants={itemVariants}
            className="text-center mb-16"
          >
            <motion.div 
              className="inline-block mb-6"
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.7, delay: 0.1 }}
            >
              <motion.div animate={floatingAnimation} className="inline-block mb-5">
              <div className="relative">
                <div className="inline-block h-14 w-14 rounded-full bg-gradient-to-br from-purple-600 to-violet-800 blur-md opacity-70"></div>
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 font-bold tracking-wide text-lg">
                  <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-violet-400">24H</span>
                </div>
              </div>
            </motion.div>
            </motion.div>
            
            
          <h2 className="mb-10 text-center font-bold tracking-wider leading-tight font-heading" style={{ fontSize: "clamp(40px, 10vw, 70px)" }}>
            <span className="text-white">ABOUT </span>
              <motion.span 
                className="relative inline-block"
                variants={titleVariants}
                initial="hidden"
                animate={isInView ? "visible" : "hidden"}
              >
                <span className="absolute -inset-1 rounded-lg blur-md bg-gradient-to-r from-purple-600/20 to-violet-800/20 opacity-50"></span>
                <span className="relative inline-block bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-violet-700">
                  {titleLetters.map((letter, index) => (
                    <motion.span
                      key={index}
                      variants={letterVariants}
                      className="inline-block"
                      style={{ 
                        textShadow: "0 0 25px rgba(139, 92, 246, 0.4)" 
                      }}
                    >
                      {letter}
                    </motion.span>
                  ))}
                </span>
              </motion.span>
            </h2>
            
            <motion.div 
              className="h-1 w-32 bg-gradient-to-r from-purple-600 to-violet-800 mx-auto mb-10 rounded-full"
              initial={{ width: 0, opacity: 0 }}
              animate={{ width: "8rem", opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.5 }}
            />
            
            <motion.div 
              className="text-gray-300 text-xl md:text-2xl text-center max-w-4xl mx-auto leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <p className="mb-4">
                VOID isn&apos;t just a hackathon—it&apos;s an immersive journey into the depths of innovation and technology. We challenge participants to explore the uncharted territories of creativity, craft solutions that defy conventional boundaries, and transform abstract concepts into tangible realities.
              </p>
              <p className="text-purple-400 font-semibold italic">
                Venture into the unknown, collaborate with brilliant minds, and emerge with creations that reshape our digital landscape!
              </p>
            </motion.div>
          </motion.div>
          
          {/* Featured highlight cards with animations */}
          <motion.div
            variants={cardContainerVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12 px-3"
          >
            {/* First Card */}
            <motion.div
              variants={cardVariants}
              whileHover="hover"
              className="relative"
            >
              <Card className="relative bg-gradient-to-br from-purple-950/30 to-black/60 backdrop-blur-md overflow-hidden shadow-lg hover:shadow-purple-900/20 h-full card-container !rounded-none">
                <div className="a l"></div>
                <div className="a r"></div>
                <div className="a t"></div>
                <div className="a b"></div>
                <CardContent className="p-8 !rounded-none">
                  <div className="flex items-center mb-5">
                    <motion.span 
                      className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-br from-purple-600/20 to-violet-800/20 backdrop-blur-sm group-hover:from-purple-500/30 group-hover:to-violet-800/30 transition-all duration-300 shadow-md overflow-hidden"
                      variants={iconVariants}
                      whileHover="hover"
                    >
                      <motion.div
                        initial={{ scale: 0.8 }}
                        animate={{ scale: 1 }}
                        transition={{ duration: 0.5 }}
                      >
                        <Calendar className="h-7 w-7 text-purple-400" />
                      </motion.div>
                      <motion.div 
                        className="absolute inset-0 bg-purple-600/10 rounded-full"
                        initial={{ scale: 0 }}
                        animate={{ scale: [0, 1.5, 0] }}
                        transition={{ duration: 2, repeat: Infinity, repeatDelay: 3 }}
                      />
                    </motion.span>
                    <h3 className="text-2xl font-heading ml-5 font-semibold tracking-wide text-white">The Event</h3>
                  </div>
                  <p className="text-base md:text-lg text-gray-300 leading-relaxed">
                    With our cutting-edge tracks focused on future technologies, VOID challenges participants to think beyond the conventional, developing solutions that bridge the gap between imagination and reality. Experience a hackathon that's not just about coding but about creating technological marvels that could define tomorrow.
                  </p>
                </CardContent>
              </Card>
            </motion.div>

            {/* Second Card */}
            <motion.div
              variants={cardVariants}
              whileHover="hover"
              className="relative"
            >
              <Card className="relative bg-gradient-to-br from-violet-950/30 to-black/60 backdrop-blur-md overflow-hidden shadow-lg hover:shadow-violet-900/20 h-full card-container !rounded-none">
                <div className="a l"></div>
                <div className="a r"></div>
                <div className="a t"></div>
                <div className="a b"></div>
                <CardContent className="p-8 !rounded-none">
                  <div className="flex items-center mb-5">
                    <motion.span 
                      className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-br from-violet-600/20 to-purple-900/20 backdrop-blur-sm group-hover:from-violet-500/30 group-hover:to-purple-900/30 transition-all duration-300 shadow-md overflow-hidden"
                      variants={iconVariants}
                      whileHover="hover"
                    >
                      <motion.div
                        initial={{ scale: 0.8 }}
                        animate={{ scale: 1 }}
                        transition={{ duration: 0.5 }}
                      >
                        <Shield className="h-7 w-7 text-violet-400" />
                      </motion.div>
                      <motion.div 
                        className="absolute inset-0 bg-violet-600/10 rounded-full"
                        initial={{ scale: 0 }}
                        animate={{ scale: [0, 1.5, 0] }}
                        transition={{ duration: 2, repeat: Infinity, repeatDelay: 3.5 }}
                      />
                    </motion.span>
                    <h3 className="text-2xl font-heading ml-5 font-semibold tracking-wide text-white">Our Approach</h3>
                  </div>
                  <p className="text-base md:text-lg text-gray-300 leading-relaxed">
                    At VOID, we don't just promote innovation—we foster an environment where technological boundaries dissolve. With mentorship from industry experts and exclusive speaker sessions, participants gain insights that transform their ideas from concepts to impactful solutions ready for the real world.
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>

      {/* SVG filter for animated borders */}
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
        .card-container {
          position: relative;
          transition: all 0.3s ease;
        }

        .a {
          pointer-events: none;
          position: absolute;
          --w: 2px;
          --glow-color: rgba(147, 51, 234, 0.8);
          z-index: 30;
          filter: drop-shadow(0 0 5px var(--glow-color));
          transition: all 0.3s ease;
        }

        .a::before {
          content: "";
          position: absolute;
          inset: 0;
          background: inherit;
          filter: url(#unopaq);
          z-index: 25;
        }

        .a::after {
          content: "";
          position: absolute;
          inset: 0;
          background: inherit;
          filter: url(#unopaq);
          opacity: 0;
          z-index: 25;
          transition: 0.3s;
        }

        .card-container:hover .a::after {
          opacity: 1;
        }

        .l {
          left: 0;
          background: linear-gradient(to bottom, 
            transparent 0%, 
            rgba(147, 51, 234, 0.8) 15%, 
            rgba(147, 51, 234, 0.8) 85%, 
            transparent 100%
          );
          top: 0;
          bottom: 0;
          width: var(--w);
          box-shadow: 0 0 15px 2px rgba(147, 51, 234, 0.8);
        }

        .r {
          right: 0;
          background: linear-gradient(to bottom, 
            transparent 0%, 
            rgba(147, 51, 234, 0.8) 15%, 
            rgba(147, 51, 234, 0.8) 85%, 
            transparent 100%
          );
          top: 0;
          bottom: 0;
          width: var(--w);
          box-shadow: 0 0 15px 2px rgba(147, 51, 234, 0.8);
        }

        .t {
          top: 0;
          background: linear-gradient(to right, 
            transparent 0%, 
            rgba(147, 51, 234, 0.8) 15%, 
            rgba(147, 51, 234, 0.8) 85%, 
            transparent 100%
          );
          left: 0;
          right: 0;
          height: var(--w);
          box-shadow: 0 0 15px 2px rgba(147, 51, 234, 0.8);
        }

        .b {
          bottom: 0;
          background: linear-gradient(to right, 
            transparent 0%, 
            rgba(147, 51, 234, 0.8) 15%, 
            rgba(147, 51, 234, 0.8) 85%, 
            transparent 100%
          );
          left: 0;
          right: 0;
          height: var(--w);
          box-shadow: 0 0 15px 2px rgba(147, 51, 234, 0.8);
        }

        .card-container {
          border-radius: 0 !important;
        }

        .card-container > div:first-child {
          border-radius: 0 !important;
        }

        .card-container:hover {
          transform: translateY(-5px);
          box-shadow: 0 15px 30px rgba(138, 43, 226, 0.2);
        }

        .card-container:hover .a {
          --glow-color: rgba(138, 43, 226, 1);
          filter: drop-shadow(0 0 8px var(--glow-color));
        }

        .card-container:hover .l,
        .card-container:hover .r,
        .card-container:hover .t,
        .card-container:hover .b {
          --w: 3px;
          box-shadow: 0 0 20px 3px rgba(138, 43, 226, 0.8);
        }
      `}</style>
    </section>
  );
};

export default AboutSection;