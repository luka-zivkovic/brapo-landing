"use client";
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";

interface Testimonial {
  quote: string;
  author: string;
  position: string;
  company: string;
  avatar: string;
}

const testimonials: Testimonial[] = [
  {
    quote: "Digitrail's development team revamped our entire web presence, resulting in a 45% increase in user engagement and a 3x boost in conversions. Their approach to UX and technical implementation was exceptional.",
    author: "Marko Marinkovic",
    position: "CEO",
    company: "Evervise",
    avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=crop&w=128&h=128&q=80"
  },
  {
    quote: "The AI integration and automation services provided by Digitrail transformed our customer service operations completely. We've reduced response time by 78% while improving customer satisfaction ratings.",
    author: "Vladimir Antonoski",
    position: "CEO",
    company: "Audacity",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&auto=format&fit=crop&w=128&h=128&q=80"
  },
  {
    quote: "brapo helped us with strategic marketing that perfectly aligned with our innovation-focused brand. Their data-driven approach generated a 220% ROI on our digital campaigns within just the first quarter.",
    author: "Filip Andrejic",
    position: "CEO",
    company: "BGDiplomat Limo",
    avatar: "https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?ixlib=rb-1.2.1&auto=format&fit=crop&w=128&h=128&q=80"
  },
  {
    quote: "The Ed Tech campaign created by Digitrail for my online courses was brilliant. They understood exactly how to reach educators and students alike, resulting in over 10,000 new enrollments and significant audience growth.",
    author: "Luka Bojovic",
    position: "EdTech Influencer",
    company: "LearnWithLuka",
    avatar: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?ixlib=rb-1.2.1&auto=format&fit=crop&w=128&h=128&q=80"
  },
  {
    quote: "Your success story starts here. Partner with Digitrail to transform your digital presence and achieve remarkable business growth, just like our satisfied clients.",
    author: "Your Name",
    position: "Your Position",
    company: "Your Company",
    avatar: "https://images.unsplash.com/photo-1568602471122-7832951cc4c5?ixlib=rb-1.2.1&auto=format&fit=crop&w=128&h=128&q=80"
  }
];

const variants = {
  enter: (direction: number) => {
    return {
      x: direction > 0 ? 1000 : -1000,
      opacity: 0
    };
  },
  center: {
    zIndex: 1,
    x: 0,
    opacity: 1
  },
  exit: (direction: number) => {
    return {
      zIndex: 0,
      x: direction < 0 ? 1000 : -1000,
      opacity: 0
    };
  }
};

export default function Testimonials() {
  const [[page, direction], setPage] = useState([0, 0]);
  const [autoplay, setAutoplay] = useState(true);
  
  const testimonialIndex = ((page % testimonials.length) + testimonials.length) % testimonials.length;
  
  const paginate = (newDirection: number) => {
    setAutoplay(false);
    setPage([page + newDirection, newDirection]);
  };
  
  useEffect(() => {
    if (!autoplay) return;
    
    const interval = setInterval(() => {
      setPage([page + 1, 1]);
    }, 5000);
    
    return () => clearInterval(interval);
  }, [page, autoplay]);

  return (
    <section className="w-full py-16 md:py-24 bg-gradient-to-b from-zinc-50 to-zinc-100 dark:from-zinc-950 dark:to-zinc-900" id="testimonials">
      <div className="container mx-auto px-4 md:px-6">
        <div className="mb-10 space-y-4 text-center">
          <div className="inline-block bg-amber-50 dark:bg-amber-900/20 border border-amber-200 dark:border-amber-800/30 rounded-full px-4 py-1.5 text-amber-700 dark:text-amber-400 text-sm font-medium mb-2">
            Success Stories
          </div>
          <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">What Our Clients Say</h2>
          <p className="mx-auto max-w-[600px] text-zinc-600 md:text-xl/relaxed lg:text-base/relaxed dark:text-zinc-400">
            Discover how we&apos;ve helped businesses like yours achieve remarkable growth
          </p>
        </div>
        
        <div className="relative overflow-hidden mx-auto max-w-5xl">
          <div className="relative h-[400px] sm:h-[350px] md:h-[320px] w-full">
            <AnimatePresence initial={false} custom={direction}>
              <motion.div
                key={page}
                custom={direction}
                variants={variants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{ type: "spring", stiffness: 300, damping: 30 }}
                className="absolute w-full h-full"
              >
                <div className="relative h-full w-full flex flex-col justify-center">
                  <div className="bg-white dark:bg-zinc-900 p-6 md:p-8 rounded-xl shadow-lg border border-zinc-200 dark:border-zinc-800">
                    {/* Quote mark decoration */}
                    <div className="absolute -top-6 -left-2 text-amber-200 dark:text-amber-700 opacity-30">
                      <svg xmlns="http://www.w3.org/2000/svg" width="80" height="80" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M6.5 10c-.223 0-.437.034-.65.065.069-.232.14-.468.254-.68.114-.308.292-.575.469-.844.148-.291.409-.488.601-.737.201-.242.475-.403.692-.604.213-.21.492-.315.714-.463.232-.133.434-.28.65-.35.208-.086.39-.16.539-.222.302-.125.474-.197.474-.197L9.758 4.03c0 0-.218.052-.597.144C8.97 4.222 8.737 4.278 8.472 4.345c-.271.069-.56.164-.882.27-.318.106-.673.257-1.055.421-.365.163-.786.363-1.158.673-.371.31-.772.705-1.12 1.18-.347.47-.707 1.02-.976 1.614-.266.593-.47 1.23-.602 1.896-.139.661-.192 1.341-.192 2.01 0 .658.243 1.292.681 1.732.438.44 1.023.66 1.644.66.813 0 1.54-.358 2.035-.942.495-.584.742-1.314.742-2.046 0-.633-.249-1.255-.687-1.706-.438-.451-1.03-.675-1.612-.675zM17.5 10c-.223 0-.437.034-.65.065.069-.232.14-.468.254-.68.114-.308.292-.575.469-.844.148-.291.409-.488.601-.737.201-.242.475-.403.692-.604.213-.21.492-.315.714-.463.232-.133.434-.28.65-.35.208-.086.39-.16.539-.222.302-.125.474-.197.474-.197L20.758 4.03c0 0-.218.052-.597.144-.191.048-.424.104-.689.171-.271.069-.56.164-.882.27-.317.107-.672.258-1.054.422-.365.163-.786.363-1.158.673-.371.31-.772.705-1.12 1.18-.347.47-.707 1.02-.976 1.614-.266.593-.47 1.23-.602 1.896-.139.661-.192 1.341-.192 2.01 0 .658.243 1.292.681 1.732.438.44 1.023.66 1.644.66.813 0 1.54-.358 2.035-.942.495-.584.742-1.314.742-2.046 0-.633-.249-1.255-.687-1.706-.438-.451-1.03-.675-1.612-.675z"/>
                      </svg>
                    </div>
                    
                    <div className="flex flex-col md:flex-row md:items-center gap-8">
                      <div className="shrink-0 flex flex-col items-center">
                        <div className="relative">
                          <div className="absolute inset-0 rounded-full bg-gradient-to-br from-amber-400 to-teal-500 blur-sm opacity-50"></div>
                          <img 
                            src={testimonials[testimonialIndex].avatar} 
                            alt={testimonials[testimonialIndex].author}
                            className="relative w-20 h-20 rounded-full object-cover border-2 border-white dark:border-zinc-700"
                          />
                        </div>
                        
                        {/* Only show Your Success Story badge for the last testimonial */}
                        {testimonialIndex === testimonials.length - 1 && (
                          <div className="mt-4 bg-gradient-to-r from-amber-500 to-teal-500 text-white px-3 py-1 rounded-full text-xs font-semibold">
                            Join Their Success
                          </div>
                        )}
                      </div>
                      
                      <div className="flex-1">
                        <div className="flex mb-3">
                          {[...Array(5)].map((_, i) => (
                            <svg 
                              key={i}
                              xmlns="http://www.w3.org/2000/svg" 
                              className="h-5 w-5 text-amber-400 dark:text-amber-300"
                              viewBox="0 0 20 20"
                              fill="currentColor"
                            >
                              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                            </svg>
                          ))}
                        </div>
                        <blockquote className="text-lg md:text-xl italic mb-4 text-zinc-700 dark:text-zinc-300 leading-relaxed">
                          &quot;{testimonials[testimonialIndex].quote}&quot;
                        </blockquote>
                        <div>
                          <div className="font-bold text-lg text-zinc-900 dark:text-white">
                            {testimonials[testimonialIndex].author}
                          </div>
                          <div className="text-sm text-teal-600 dark:text-teal-400 font-medium">
                            {testimonials[testimonialIndex].position}, {testimonials[testimonialIndex].company}
                          </div>
                        </div>
                      </div>
                    </div>
                    
                    {/* Call to action for the last testimonial */}
                    {testimonialIndex === testimonials.length - 1 && (
                      <div className="mt-6 text-center">
                        <a
                          href="#cta"
                          className="inline-flex items-center px-5 py-2.5 bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-white font-medium rounded-lg shadow-lg hover:shadow-xl transition-all duration-200"
                          onClick={(e) => {
                            e.preventDefault();
                            document.getElementById('cta')?.scrollIntoView({ behavior: 'smooth' });
                          }}
                        >
                          <span>Create Your Success Story</span>
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" viewBox="0 0 20 20" fill="currentColor">
                            <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                          </svg>
                        </a>
                      </div>
                    )}
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
          
          <div className="flex justify-center gap-3 mt-8">
            <button 
              onClick={() => paginate(-1)}
              className="p-2 rounded-full bg-amber-100 dark:bg-amber-900/30 hover:bg-amber-200 dark:hover:bg-amber-800/50 transition-colors text-amber-700 dark:text-amber-400"
              aria-label="Previous testimonial"
            >
              <svg 
                xmlns="http://www.w3.org/2000/svg" 
                className="h-5 w-5" 
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path 
                  fillRule="evenodd" 
                  d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" 
                  clipRule="evenodd" 
                />
              </svg>
            </button>
            
            <div className="flex items-center gap-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => {
                    setAutoplay(false);
                    setPage([index, index - testimonialIndex]);
                  }}
                  className={cn(
                    "w-2 h-2 rounded-full transition-all duration-300",
                    index === testimonialIndex 
                      ? "bg-amber-600 w-8" 
                      : "bg-amber-200 dark:bg-amber-800/50 hover:bg-amber-300 dark:hover:bg-amber-700/50"
                  )}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>
            
            <button 
              onClick={() => paginate(1)}
              className="p-2 rounded-full bg-amber-100 dark:bg-amber-900/30 hover:bg-amber-200 dark:hover:bg-amber-800/50 transition-colors text-amber-700 dark:text-amber-400"
              aria-label="Next testimonial"
            >
              <svg 
                xmlns="http://www.w3.org/2000/svg" 
                className="h-5 w-5" 
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path 
                  fillRule="evenodd" 
                  d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" 
                  clipRule="evenodd" 
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
