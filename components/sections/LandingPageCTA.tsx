"use client";
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

const urgencyReasons = [
  "🚀 Every day without a landing page, your competitors gain an advantage",
  "💰 Lost conversions cost you money every single visitor",
  "📱 72% of your potential customers are on mobile right now",
  "⏰ The best time to plant a tree was 20 years ago. The second best time is now",
  "🎯 Your current website is confusing visitors - they need clarity"
];

const processSteps = [
  {
    step: "1",
    title: "Discovery Call",
    description: "We discuss your business goals and target audience",
    time: "30 minutes",
    icon: "💬"
  },
  {
    step: "2",
    title: "Strategy & Design",
    description: "We create a conversion-focused design strategy",
    time: "2-3 days",
    icon: "🎨"
  },
  {
    step: "3",
    title: "Development",
    description: "We build your mobile-optimized landing page",
    time: "3-5 days",
    icon: "⚡"
  },
  {
    step: "4",
    title: "Launch & Optimize",
    description: "We launch and provide optimization recommendations",
    time: "1 day",
    icon: "🚀"
  }
];

const testimonialSnippets = [
  {
    text: "Increased our conversion rate from 2% to 8% in just one month",
    author: "Sarah M., E-commerce Store Owner"
  },
  {
    text: "The mobile optimization alone was worth every penny",
    author: "Mike R., SaaS Founder"
  },
  {
    text: "Finally, a landing page that actually converts visitors",
    author: "Lisa K., Digital Marketer"
  }
];

export default function LandingPageCTA() {
  const [currentUrgencyIndex, setCurrentUrgencyIndex] = useState(0);
  const [currentTestimonialIndex, setCurrentTestimonialIndex] = useState(0);

  // Rotate urgency messages
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentUrgencyIndex((prev) => (prev + 1) % urgencyReasons.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  // Rotate testimonials
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTestimonialIndex((prev) => (prev + 1) % testimonialSnippets.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="py-20 bg-gradient-to-br from-red-50 via-orange-50 to-yellow-50 dark:from-red-900/20 dark:via-orange-900/20 dark:to-yellow-900/20 relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-gradient-to-br from-red-400/20 to-orange-500/20 rounded-full animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-gradient-to-br from-orange-400/20 to-yellow-500/20 rounded-full animate-pulse delay-1000"></div>
        <div className="absolute top-3/4 left-3/4 w-48 h-48 bg-gradient-to-br from-yellow-400/20 to-red-500/20 rounded-full animate-pulse delay-2000"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Urgency Banner */}
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <div className="bg-red-600 text-white px-6 py-3 rounded-full inline-block mb-6 animate-bounce">
            ⚠️ DON'T WAIT - ACT NOW
          </div>
          <motion.div
            key={currentUrgencyIndex}
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -30 }}
            transition={{ duration: 0.5 }}
            className="text-xl md:text-2xl font-semibold text-gray-800 dark:text-gray-200 max-w-4xl mx-auto"
          >
            {urgencyReasons[currentUrgencyIndex]}
          </motion.div>
        </motion.div>

        {/* Main CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-red-600 via-orange-600 to-yellow-600 bg-clip-text text-transparent">
            Stop Losing Customers
          </h2>
          <h3 className="text-2xl md:text-3xl font-bold mb-6 text-gray-900 dark:text-white">
            Get Your High-Converting Landing Page Today
          </h3>
          <p className="text-xl text-gray-600 dark:text-gray-300 mb-8 max-w-3xl mx-auto">
            Join hundreds of businesses that have transformed their online presence with our proven landing page system. 
            Your competitors are already capturing leads while you're reading this.
          </p>

          {/* Special Offer */}
          <div className="bg-gradient-to-r from-red-600 to-orange-600 text-white p-8 rounded-2xl mb-8 max-w-2xl mx-auto">
            <div className="text-3xl font-bold mb-2">🔥 LIMITED TIME OFFER</div>
            <div className="text-xl mb-4">
              Get your landing page for only <span className="text-4xl font-bold">€300</span>
            </div>
            <div className="text-sm opacity-90">
              Normal price: €500 | Save €200 when you order today
            </div>
          </div>

          {/* Primary CTA Button */}
          <motion.button
            onClick={() => document.getElementById('contact-form')?.scrollIntoView({ behavior: 'smooth' })}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-gradient-to-r from-red-600 to-orange-600 text-white px-12 py-6 rounded-2xl font-bold text-2xl shadow-2xl hover:shadow-3xl transition-all duration-300 mb-6 inline-block"
          >
            🚀 YES! Get My Landing Page Now
          </motion.button>

          <div className="text-sm text-gray-600 dark:text-gray-400 mb-8">
            ✅ Mobile-optimized • ✅ Fast delivery • ✅ Money-back guarantee
          </div>
        </motion.div>

        {/* Process Overview */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h3 className="text-3xl font-bold text-center mb-12 text-gray-900 dark:text-white">
            How We'll Get You Converting in Just 7 Days
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {processSteps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg text-center relative"
              >
                <div className="text-4xl mb-4">{step.icon}</div>
                <div className="text-3xl font-bold text-blue-600 dark:text-blue-400 mb-2">
                  {step.step}
                </div>
                <h4 className="text-xl font-bold mb-3 text-gray-900 dark:text-white">
                  {step.title}
                </h4>
                <p className="text-gray-600 dark:text-gray-300 mb-3">
                  {step.description}
                </p>
                <div className="text-sm text-green-600 dark:text-green-400 font-semibold">
                  {step.time}
                </div>
                
                {/* Connector Arrow */}
                {index < processSteps.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-3 transform -translate-y-1/2">
                    <div className="w-6 h-6 bg-blue-600 rounded-full flex items-center justify-center">
                      <span className="text-white text-xs">→</span>
                    </div>
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Social Proof Testimonials */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h3 className="text-3xl font-bold text-center mb-8 text-gray-900 dark:text-white">
            What Our Clients Say
          </h3>
          
          <div className="max-w-3xl mx-auto">
            <motion.div
              key={currentTestimonialIndex}
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -30 }}
              transition={{ duration: 0.5 }}
              className="bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-lg text-center"
            >
              <div className="text-2xl text-yellow-500 mb-4">⭐⭐⭐⭐⭐</div>
              <blockquote className="text-xl text-gray-700 dark:text-gray-300 mb-4 italic">
                "{testimonialSnippets[currentTestimonialIndex].text}"
              </blockquote>
              <cite className="text-gray-600 dark:text-gray-400 font-semibold">
                — {testimonialSnippets[currentTestimonialIndex].author}
              </cite>
            </motion.div>
          </div>
        </motion.div>

        {/* Final Urgency CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="bg-gradient-to-r from-black to-gray-800 text-white p-12 rounded-3xl text-center"
        >
          <div className="text-6xl mb-6">⏰</div>
          <h3 className="text-3xl font-bold mb-4">This Offer Won't Last Forever</h3>
          <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
            We can only take on a limited number of projects each month. 
            Don't let your competition get ahead while you're still thinking about it.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-6">
            <motion.button
              onClick={() => document.getElementById('contact-form')?.scrollIntoView({ behavior: 'smooth' })}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-gradient-to-r from-red-600 to-orange-600 text-white px-10 py-4 rounded-xl font-bold text-xl shadow-2xl"
            >
              🔥 Claim Your €200 Discount Now
            </motion.button>
            <button 
              onClick={() => document.getElementById('contact-form')?.scrollIntoView({ behavior: 'smooth' })}
              className="border-2 border-white text-white px-10 py-4 rounded-xl font-bold text-xl hover:bg-white hover:text-black transition-all duration-300"
            >
              📞 Schedule Free Consultation
            </button>
          </div>
          
          <div className="text-sm opacity-75">
            ⚡ 30-day money-back guarantee • 🚀 Fast 7-day delivery • 📱 Mobile-first design
          </div>
        </motion.div>
      </div>
    </div>
  );
} 