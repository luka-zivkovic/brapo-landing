"use client";
import React, { useRef, useEffect, useState } from "react";

export const Hero = () => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [showContent, setShowContent] = useState(false);
  
  // Effect to handle the delay of text appearance and video behavior
  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;
    
    // Handle video ended event to pause on last frame
    const handleVideoEnded = () => {
      // When video ends, seek to the last frame (a small offset from the end)
      const lastFrameTime = Math.max(0, video.duration - 0.01);
      video.currentTime = lastFrameTime;
      video.pause();
    };
    
    // Set a timeout to show the hero content after 10 seconds
    const timer = setTimeout(() => {
      setShowContent(true);
    }, 10000); // 10 seconds delay
    
    // Add event listener for video ended
    video.addEventListener('ended', handleVideoEnded);
    
    // Clean up
    return () => {
      clearTimeout(timer);
      video.removeEventListener('ended', handleVideoEnded);
    };
  }, []);

  return (
    <div className="relative bg-white w-full h-screen overflow-hidden">
      {/* Centered video - smaller on mobile, full-screen on desktop */}
      <div className="absolute inset-0 w-full h-full flex items-center justify-center overflow-hidden">
        <div className="relative w-full h-full md:w-full md:h-full flex items-center justify-center">
          <video
            ref={videoRef}
            autoPlay
            muted
            playsInline
            className="w-auto h-auto max-w-[85%] md:max-w-none md:min-w-full md:min-h-full object-contain md:object-cover z-10"
            src="/background-new.mp4"
          >
            Your browser does not support the video tag.
          </video>
        </div>
      </div>
      
      {/* Text positioned at the top center - with transition for appearance */}
      <div 
        className={`relative z-30 pt-32 md:pt-36 lg:pt-40 px-6 text-center max-w-5xl mx-auto transition-opacity duration-1000 ${showContent ? 'opacity-100' : 'opacity-0'}`}
      >
        <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 drop-shadow-lg">
          Connect. Convert. <br /> Automate.
        </h1>
        <p className="text-xl md:text-2xl text-white max-w-3xl mx-auto mb-10 drop-shadow-md">
          We craft optimized landing pages, intuitive mobile apps, and powerful automation solutions 
          that connect businesses with their customers and drive measurable growth.
        </p>
        <div className="flex flex-wrap gap-4 justify-center pt-4">
          <a 
            href="#how-we-help" 
            className="px-8 py-4 bg-gradient-to-r from-teal-600 to-teal-700 hover:from-teal-700 hover:to-teal-800 text-white font-medium rounded-lg shadow-lg hover:shadow-xl transition-all duration-200 transform hover:scale-105 flex items-center"
            onClick={(e: React.MouseEvent<HTMLAnchorElement>) => {
              e.preventDefault();
              document.getElementById('how-we-help')?.scrollIntoView({ behavior: 'smooth' });
            }}
          >
            <span>Explore Our Solutions</span>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
            </svg>
          </a>
          <a 
            href="#cta" 
            className="px-8 py-4 bg-white text-teal-600 border-2 border-teal-300 font-medium rounded-lg shadow-md hover:shadow-lg hover:bg-teal-50 transition-all duration-200 transform hover:scale-105 flex items-center"
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
