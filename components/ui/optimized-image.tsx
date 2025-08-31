'use client';

import React, { useState, useEffect, useMemo, useCallback } from 'react';
import Image, { ImageProps } from 'next/image';

interface OptimizedImageProps extends Omit<ImageProps, 'quality' | 'loading' | 'alt'> {
  desktopQuality?: number;
  mobileQuality?: number;
  mobileSizes?: string;
  desktopSizes?: string;
  loading?: 'lazy' | 'eager';
  priority?: boolean;
  alt?: string;
}

export function OptimizedImage({ 
  desktopQuality = 85,
  mobileQuality = 65, 
  mobileSizes = "(max-width: 768px) 100vw, 50vw",
  desktopSizes = "(max-width: 1200px) 50vw, 33vw",
  sizes,
  loading,
  priority,
  alt = '',
  ...props 
}: OptimizedImageProps) {
  const [isMobile, setIsMobile] = useState(false);
  const [isClient, setIsClient] = useState(false);

  // Determine the correct loading value
  // If priority is true, don't set loading (Next.js will use 'eager')
  // Otherwise use the provided loading value or default to 'lazy'
  const loadingValue = priority ? undefined : (loading || 'lazy');

  // Debounced resize handler for better performance
  const debouncedCheckMobile = useCallback(() => {
    let timeoutId: NodeJS.Timeout | null = null;
    
    return () => {
      if (timeoutId) {
        clearTimeout(timeoutId);
      }
      
      timeoutId = setTimeout(() => {
        const isMobileDevice = 
          typeof window !== 'undefined' && 
          (window.innerWidth < 768 || 
           'ontouchstart' in window || 
           navigator.maxTouchPoints > 0);
        setIsMobile(isMobileDevice);
        timeoutId = null;
      }, 100);
    };
  }, []);

  // Memoize quality and sizes based on device type
  const quality = useMemo(() => 
    isMobile ? mobileQuality : desktopQuality, 
    [isMobile, mobileQuality, desktopQuality]
  );

  const sizeValue = useMemo(() => 
    sizes || (isMobile ? mobileSizes : desktopSizes), 
    [sizes, isMobile, mobileSizes, desktopSizes]
  );

  useEffect(() => {
    // Set initial client state
    setIsClient(true);
    
    // Initial mobile check
    const isMobileDevice = 
      window.innerWidth < 768 || 
      'ontouchstart' in window || 
      navigator.maxTouchPoints > 0;
      setIsMobile(isMobileDevice);
    
    // Add debounced resize listener
    const handleResize = debouncedCheckMobile();
    window.addEventListener('resize', handleResize);
    
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [debouncedCheckMobile]);

  // Common props for both SSR and client renders
  const imageProps = {
    ...props,
    alt,
    priority,
    loading: loadingValue
  };

  // Server-side rendering or initial render
  if (!isClient) {
    return (
      <Image 
        {...imageProps}
        quality={desktopQuality}
        sizes={sizes || desktopSizes}
        alt={alt} /* Ensure alt is explicitly set */
      />
    );
  }

  return (
    <Image 
      {...imageProps}
      quality={quality}
      sizes={sizeValue}
      alt={alt} /* Ensure alt is explicitly set */
    />
  );
} 