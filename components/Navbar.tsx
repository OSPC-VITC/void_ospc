'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { GitHubLogoIcon, LinkedInLogoIcon } from '@radix-ui/react-icons';
import { usePathname } from 'next/navigation';

interface NavLink {
  id: string;
  title: string;
  path: string;
}

const navLinks: NavLink[] = [
  { id: 'home', title: 'Home', path: '/' },
  { id: 'about', title: 'About', path: '/#about' },
  { id: 'tracks', title: 'Tracks', path: '/#tracks' },
  { id: 'prizes', title: 'Prizes', path: '/#prizes' },
  { id: 'judges', title: 'Judges', path: '/#judges' },
  { id: 'organisers', title: 'Organisers', path: '/#organisers' },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const navVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <motion.nav 
      className="fixed w-full z-50 top-0 backdrop-blur-md bg-black/20 border-b border-purple-700/20"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <motion.div 
            className="flex-shrink-0"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
          >
            <Link href="/" className="flex items-center">
              <span className="logo-text text-white mr-2">VOID</span>
            </Link>
          </motion.div>

          {/* Desktop Navigation - Now centered with flex-grow */}
          <motion.div 
            className="hidden md:flex flex-grow justify-center items-center"
            variants={navVariants}
            initial="hidden"
            animate="visible"
          >
            <div className="flex space-x-8">
              {navLinks.map((link) => (
                <motion.div 
                  key={link.id} 
                  variants={itemVariants}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Link
                    href={link.path}
                    className={`text-sm text-gray-200 hover:text-purple-400 font-medium transition duration-300 relative nav-link`}
                  >
                    {link.title}
                    <span className="nav-link-underline"></span>
                  </Link>
                </motion.div>
              ))}
            </div>
          </motion.div>
            
          {/* Right side icons and Register button */}
          <div className="hidden md:flex items-center space-x-4">
            <motion.div variants={itemVariants} whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.9 }}>
              <a href="https://github.com/OSPC-VITC" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-purple-400 transition-colors">
                <GitHubLogoIcon className="h-5 w-5" />
              </a>
            </motion.div>
            
            <motion.div variants={itemVariants} whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.9 }}>
              <a href="https://www.linkedin.com/company/opensource-programming-club-vitc" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-purple-400 transition-colors">
                <LinkedInLogoIcon className="h-5 w-5" />
              </a>
            </motion.div>
            
            <motion.div 
              variants={itemVariants}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="void-border-pulse"
            >
              <a href="#" className="bg-gradient-to-r from-purple-600 to-violet-700 text-white py-2 px-4 rounded-md text-sm font-medium shadow-lg hover:shadow-purple-500/50 transition-all duration-300">
                Register Now
              </a>
            </motion.div>
          </div>

          {/* Mobile Navigation Toggle Button */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white focus:outline-none"
            >
              <span className="sr-only">Open main menu</span>
              <div className="h-6 w-6 flex flex-col justify-between items-center">
                <span 
                  className={`block w-full h-0.5 bg-current transform transition duration-300 ease-in-out ${isOpen ? 'rotate-45 translate-y-2.5' : ''}`}
                ></span>
                <span 
                  className={`block w-full h-0.5 bg-current transition duration-300 ease-in-out ${isOpen ? 'opacity-0' : ''}`}
                ></span>
          <span
                  className={`block w-full h-0.5 bg-current transform transition duration-300 ease-in-out ${isOpen ? '-rotate-45 -translate-y-2.5' : ''}`}
                ></span>
        </div>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      {isOpen && (
        <motion.div 
          className="md:hidden"
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          exit={{ opacity: 0, height: 0 }}
          transition={{ duration: 0.3 }}
        >
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-black/50 backdrop-blur-lg border-t border-purple-900/20">
            {navLinks.map((link) => (
              <Link
                key={link.id}
                href={link.path}
                className="block text-sm px-3 py-2 text-gray-200 hover:text-purple-400 transition duration-300"
              >
                {link.title}
              </Link>
            ))}
            <div className="flex space-x-4 px-3 py-2">
              <a href="https://github.com/OSPC-VITC" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-purple-400 transition-colors">
                <GitHubLogoIcon className="h-5 w-5" />
              </a>
              <a href="https://www.linkedin.com/company/opensource-programming-club-vitc" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-purple-400 transition-colors">
                <LinkedInLogoIcon className="h-5 w-5" />
              </a>
            </div>
            <div className="px-3 py-2">
              <a href="#" className="block bg-gradient-to-r from-purple-600 to-violet-700 text-white py-2 px-4 rounded-md text-center text-sm font-medium shadow-lg hover:shadow-purple-500/50 transition-all duration-300">
                Register Now
              </a>
        </div>
      </div>
        </motion.div>
      )}

      <style jsx>{`
        .nav-link {
          position: relative;
          display: inline-block;
        }
        
        .nav-link-underline {
          position: absolute;
          left: 0;
          bottom: -4px;
          width: 0;
          height: 2px;
          background: linear-gradient(90deg, #9333EA, #A855F7);
          transition: width 0.3s ease;
          border-radius: 3px;
        }
        
        .nav-link:hover .nav-link-underline {
          width: 100%;
        }
        
        .void-border-pulse {
          position: relative;
          overflow: hidden;
          border-radius: 0.375rem; /* rounded-md */
          z-index: 1;
        }
        
        .void-border-pulse::before {
          content: '';
          position: absolute;
          inset: -2px;
          background: linear-gradient(
            45deg, 
            rgba(138, 43, 226, 0.8), 
            rgba(147, 51, 234, 0.8),
            rgba(168, 85, 247, 0.8),
            rgba(138, 43, 226, 0.8)
          );
          z-index: -1;
          animation: pulse-rotate 2s linear infinite;
          border-radius: 0.5rem;
        }
        
        @keyframes pulse-rotate {
          0% {
            transform: rotate(0deg);
            opacity: 0.8;
          }
          50% {
            opacity: 1;
          }
          100% {
            transform: rotate(360deg);
            opacity: 0.8;
          }
        }
      `}</style>
    </motion.nav>
  );
}
