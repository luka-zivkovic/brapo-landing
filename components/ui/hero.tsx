"use client";
import React, { useRef, useEffect, useState } from "react";

export const Hero = () => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [showContent, setShowContent] = useState(false);
  const [videoSrc, setVideoSrc] = useState('/comet_background_flipped.mp4');
  
  // Effect to handle responsive video sources
  useEffect(() => {
    const handleResize = () => {
      // Check if we're on mobile (less than 768px width)
      if (window.innerWidth < 768) {
        setVideoSrc('/comet_background_flipped_phone.mp4');
      } else {
        setVideoSrc('/comet_background_flipped.mp4');
      }
    };
    
    // Initialize on mount
    handleResize();
    
    // Add resize listener
    window.addEventListener('resize', handleResize);
    
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  // Effect to handle the delay of text appearance
  useEffect(() => {
    // Set a timeout to show the hero content after a short delay
    const timer = setTimeout(() => {
      setShowContent(true);
    }, 1000); // 1 second delay
    
    // Clean up
    return () => {
      clearTimeout(timer);
    };
  }, []);

  // No custom style object needed - using className instead

  return (
    <div className="relative bg-white w-full h-screen overflow-hidden">
      {/* Fullscreen video that scales to fit the screen */}
      <div className="absolute inset-0 w-full h-full overflow-hidden">
        <video
          ref={videoRef}
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 w-full h-full object-cover z-10"
          src={videoSrc}
          key={videoSrc} // Add key to force remount when source changes
        >
          Your browser does not support the video tag.
        </video>
      </div>
      
      {/* Title positioned according to screenshot - desktop: higher, mobile: top of screen */}
      <div 
        className={`absolute top-[10%] md:top-[15%] left-8 md:left-[15%] z-30 transition-opacity duration-1000 ${showContent ? 'opacity-100' : 'opacity-0'}`}
      >
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-amber-500 mb-6 drop-shadow-lg leading-tight">
          From Idea to <br />Impact - <span className="text-amber-400">Fast</span>
        </h1>
        
        {/* Buttons positioned directly below the title - stacked vertically on mobile but horizontally on desktop */}
        <div className="mt-4">
          <div className="mb-3 md:mb-0 md:inline-block md:mr-4">
            <a 
              href="#pricing" 
              className="w-4/5 md:w-auto px-6 py-3 md:px-8 md:py-4 text-base bg-gradient-to-r from-teal-600 to-teal-700 hover:from-teal-700 hover:to-teal-800 text-white font-medium rounded-lg shadow-lg hover:shadow-xl transition-all duration-200 transform hover:scale-105 flex items-center justify-start"
              onClick={(e: React.MouseEvent<HTMLAnchorElement>) => {
                e.preventDefault();
                document.getElementById('pricing')?.scrollIntoView({ behavior: 'smooth' });
              }}
            >
              <span>Explore Our Solutions</span>
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
            </a>
          </div>
          <div className="md:inline-block">
            <a 
              href="#cta" 
              className="w-3/5 md:w-auto px-6 py-3 md:px-8 md:py-4 text-base bg-white text-teal-600 border-2 border-teal-300 font-medium rounded-lg shadow-md hover:shadow-lg hover:bg-teal-50 transition-all duration-200 transform hover:scale-105 flex items-center justify-start"
              onClick={(e: React.MouseEvent<HTMLAnchorElement>) => {
                e.preventDefault();
                document.getElementById('cta')?.scrollIntoView({ behavior: 'smooth' });
              }}
            >
              <span>Get in Touch</span>
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" viewBox="0 0 20 20" fill="currentColor">
                <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
              </svg>
            </a>
          </div>
        </div>
      </div>

      {/* Subtitle positioned according to screenshot - moved higher on desktop, kept position on mobile */}
      <div 
        className={`absolute md:top-[60%] bottom-[10%] md:bottom-auto md:right-8 md:left-auto right-4 left-auto z-30 text-right transition-opacity duration-1000 ${showContent ? 'opacity-100' : 'opacity-0'}`}
      >
        <p className="text-2xl md:text-5xl lg:text-6xl text-teal-400 drop-shadow-md">
          Software.<br />Marketing.<br />Automation.<br />
          <span className="font-light italic text-teal-300">Delivered Without Delay.</span>
        </p>
      </div>

      {/* Section divider gradient to better distinguish between sections */}
      <div className="absolute bottom-0 left-0 right-0 h-2 bg-gradient-to-r from-amber-300 via-teal-400 to-amber-300 z-40"></div>
      
      {/* Scroll indicator - also with delayed appearance */}
      <div className={`absolute bottom-8 left-1/2 transform -translate-x-1/2 z-30 animate-bounce transition-opacity duration-1000 ${showContent ? 'opacity-80' : 'opacity-0'}`}>
        <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </div>
    </div>
  );
};

export default Hero;
