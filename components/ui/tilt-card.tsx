"use client";
import React, { useRef, useState } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';

interface TiltCardProps {
  children: React.ReactNode;
  className?: string;
  tiltAmount?: number;
  speed?: number;
}

export default function TiltCard({ 
  children, 
  className = "", 
  tiltAmount = 10, 
  speed = 400,
}: TiltCardProps) {
  const [isHovering, setIsHovering] = useState(false);
  const ref = useRef(null);
  
  // Motion values for the card's rotation
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  
  // Smoother motion with springs
  const springConfig = { damping: 30, stiffness: 300 };
  const xSpring = useSpring(x, springConfig);
  const ySpring = useSpring(y, springConfig);
  
  // Convert the motion values to rotateY and rotateX
  const rotateY = useTransform(xSpring, [-0.5, 0.5], [-tiltAmount, tiltAmount]);
  const rotateX = useTransform(ySpring, [-0.5, 0.5], [tiltAmount, -tiltAmount]);
  
  // Card glare effect
  const glareOpacity = useTransform(
    xSpring,
    [-0.5, 0, 0.5],
    [0.2, 0.4, 0.2]
  );
  const glarePosition = {
    x: useTransform(xSpring, [-0.5, 0.5], ["-20%", "120%"]),
    y: useTransform(ySpring, [-0.5, 0.5], ["120%", "-20%"]),
  };
  
  function onMouseMove(e: React.MouseEvent<HTMLDivElement>) {
    if (!ref.current) return;
    
    const rect = (ref.current as HTMLElement).getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    
    // Calculate the position of the mouse relative to the card (values between -0.5 and 0.5)
    const xValue = (e.clientX - rect.left) / width - 0.5;
    const yValue = (e.clientY - rect.top) / height - 0.5;
    
    // Update the motion values
    x.set(xValue);
    y.set(yValue);
  }

  return (
    <motion.div
      ref={ref}
      className={`relative overflow-visible ${className}`}
      onMouseMove={onMouseMove}
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => {
        setIsHovering(false);
        // Reset the position when the mouse leaves
        x.set(0);
        y.set(0);
      }}
      style={{
        perspective: 1000,
        transformStyle: "preserve-3d",
      }}
      whileHover={{ scale: 1.02 }}
      transition={{ duration: 0.3 }}
    >
      <motion.div
        style={{
          rotateY,
          rotateX,
          transition: `all ${speed}ms cubic-bezier(0.03, 0.98, 0.52, 0.99)`,
          transformStyle: "preserve-3d",
        }}
        className="w-full h-full will-change-transform relative z-10"
      >
        <div className="h-full w-full relative overflow-visible z-20"> 
          {children}
        </div>
        
        {/* Glare effect - only visible on desktop */}
        <motion.div
          className="absolute hidden md:block inset-0 bg-gradient-to-tr from-white to-transparent opacity-0 pointer-events-none mix-blend-overlay z-10"
          style={{
            opacity: isHovering ? glareOpacity : 0,
            left: glarePosition.x,
            top: glarePosition.y,
            backgroundImage: `linear-gradient(135deg, rgba(255,255,255,0.4) 0%, rgba(255,255,255,0) 60%)`,
          }}
        />
      </motion.div>
    </motion.div>
  );
}
