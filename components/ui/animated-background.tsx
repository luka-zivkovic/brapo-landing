"use client";
import React from 'react';
import { motion } from 'framer-motion';

interface AnimatedBackgroundProps {
  className?: string;
  density?: number;
  speed?: number;
  animate?: boolean;
}

export default function AnimatedBackground({
  className = "",
  density = 20,
  speed = 15,
  animate = true,
}: AnimatedBackgroundProps) {
  // Create particles with randomized properties
  const particles = Array.from({ length: density }).map((_, i) => ({
    id: i,
    size: Math.random() * 15 + 2,
    x: Math.random() * 100,
    y: Math.random() * 100,
    duration: (Math.random() * speed) + (speed / 2),
    delay: Math.random() * -20,
    opacity: Math.random() * 0.5 + 0.1,
  }));

  return (
    <div className={`absolute inset-0 overflow-hidden pointer-events-none ${className}`}>
      {particles.map((particle) => (
        <motion.div
          key={particle.id}
          className="absolute rounded-full bg-gradient-to-br from-blue-100/30 to-blue-600/10 dark:from-blue-100/10 dark:to-blue-400/5 blur-md"
          style={{
            width: particle.size,
            height: particle.size,
            left: `${particle.x}%`,
            top: `${particle.y}%`,
            opacity: particle.opacity,
          }}
          animate={animate ? {
            x: [
              particle.size * -2,
              particle.size * 2,
              particle.size * -1,
              particle.size,
              particle.size * -2,
            ],
            y: [
              particle.size,
              particle.size * -2,
              particle.size * 2,
              particle.size * -1,
              particle.size,
            ],
          } : {}}
          transition={{
            duration: particle.duration,
            ease: "linear",
            repeat: Infinity,
            delay: particle.delay,
          }}
        />
      ))}
    </div>
  );
}
