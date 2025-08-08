"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";

const mobileStats = [
  {
    number: "72%",
    description: "of web traffic comes from mobile devices",
    color: "text-blue-600"
  },
  {
    number: "57%",
    description: "of users won't recommend a business with a poor mobile site",
    color: "text-red-600"
  },
  {
    number: "3 sec",
    description: "is the maximum load time before users leave",
    color: "text-green-600"
  },
  {
    number: "61%",
    description: "of users are unlikely to return to a mobile site they had trouble accessing",
    color: "text-purple-600"
  }
];

const mobileFeatures = [
  {
    icon: "⚡",
    title: "Lightning Fast Loading",
    description: "Optimized images and code ensure your page loads in under 2 seconds",
    benefit: "Higher engagement rates"
  },
  {
    icon: "📱",
    title: "Touch-Friendly Design",
    description: "Buttons and forms designed for finger navigation, not mouse clicks",
    benefit: "Better user experience"
  },
  {
    icon: "🎯",
    title: "Mobile-First Layout",
    description: "Designed for mobile first, then enhanced for desktop",
    benefit: "Consistent experience"
  },
  {
    icon: "🔍",
    title: "Readable Typography",
    description: "Text that's easy to read on small screens without zooming",
    benefit: "Reduced bounce rate"
  },
  {
    icon: "📊",
    title: "Simplified Forms",
    description: "Streamlined forms with minimal fields for easy mobile completion",
    benefit: "Higher conversion rates"
  },
  {
    icon: "🖼️",
    title: "Optimized Media",
    description: "Images and videos that look perfect on any screen size",
    benefit: "Professional appearance"
  }
];

export default function MobileFirst() {
  const [activeTab, setActiveTab] = useState<'mobile' | 'desktop'>('mobile');

  return (
    <div className="py-20 bg-gradient-to-br from-gray-50 to-blue-50 dark:from-gray-900 dark:to-blue-900 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-10 left-10 w-32 h-32 bg-gradient-to-br from-blue-400 to-purple-600 rounded-full opacity-10 animate-pulse"></div>
        <div className="absolute bottom-10 right-10 w-48 h-48 bg-gradient-to-br from-purple-400 to-pink-600 rounded-full opacity-10 animate-pulse"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-gray-900 to-blue-600 dark:from-white dark:to-blue-300 bg-clip-text text-transparent">
            Mobile-First is Not Optional
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            In 2024, mobile optimization isn't a nice-to-have feature—it's essential for survival. Here's why your landing page must be mobile-perfect.
          </p>
        </motion.div>

        {/* Mobile Statistics */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20"
        >
          {mobileStats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 text-center"
            >
              <div className={`text-5xl font-bold mb-4 ${stat.color}`}>
                {stat.number}
              </div>
              <p className="text-gray-600 dark:text-gray-300">
                {stat.description}
              </p>
            </motion.div>
          ))}
        </motion.div>

        {/* Device Preview Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <h3 className="text-3xl font-bold text-center mb-12 text-gray-900 dark:text-white">
            See the Difference Mobile Optimization Makes
          </h3>
          
          {/* Tab Switcher */}
          <div className="flex justify-center mb-8">
            <div className="bg-gray-200 dark:bg-gray-700 p-1 rounded-xl">
              <button
                onClick={() => setActiveTab('mobile')}
                className={`px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${
                  activeTab === 'mobile'
                    ? 'bg-blue-600 text-white shadow-lg'
                    : 'text-gray-600 dark:text-gray-300 hover:text-blue-600'
                }`}
              >
                📱 Mobile View
              </button>
              <button
                onClick={() => setActiveTab('desktop')}
                className={`px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${
                  activeTab === 'desktop'
                    ? 'bg-blue-600 text-white shadow-lg'
                    : 'text-gray-600 dark:text-gray-300 hover:text-blue-600'
                }`}
              >
                💻 Desktop View
              </button>
            </div>
          </div>

          {/* Device Mockups */}
          <div className="flex justify-center">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, x: activeTab === 'mobile' ? -30 : 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className={`relative ${
                activeTab === 'mobile' ? 'w-80' : 'w-full max-w-4xl'
              }`}
            >
              {activeTab === 'mobile' ? (
                <div className="bg-gray-900 rounded-3xl p-2 mx-auto w-fit">
                  <div className="bg-white dark:bg-gray-100 rounded-2xl p-6 w-72 h-96 overflow-hidden">
                    <div className="text-center space-y-4">
                      <div className="h-4 bg-blue-600 rounded w-3/4 mx-auto"></div>
                      <div className="h-20 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg"></div>
                      <div className="space-y-2">
                        <div className="h-3 bg-gray-300 rounded w-full"></div>
                        <div className="h-3 bg-gray-300 rounded w-5/6 mx-auto"></div>
                      </div>
                      <div className="h-12 bg-blue-600 rounded-lg"></div>
                      <div className="grid grid-cols-2 gap-2">
                        <div className="h-16 bg-gray-200 rounded"></div>
                        <div className="h-16 bg-gray-200 rounded"></div>
                      </div>
                    </div>
                  </div>
                </div>
              ) : (
                <div className="bg-gray-300 rounded-lg p-4">
                  <div className="bg-white dark:bg-gray-100 rounded h-96 p-8">
                    <div className="grid grid-cols-2 gap-8 h-full">
                      <div className="space-y-6">
                        <div className="h-6 bg-blue-600 rounded w-3/4"></div>
                        <div className="h-32 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg"></div>
                        <div className="space-y-3">
                          <div className="h-4 bg-gray-300 rounded w-full"></div>
                          <div className="h-4 bg-gray-300 rounded w-4/5"></div>
                          <div className="h-4 bg-gray-300 rounded w-3/4"></div>
                        </div>
                        <div className="h-12 bg-blue-600 rounded-lg w-2/3"></div>
                      </div>
                      <div className="grid grid-cols-2 gap-4">
                        <div className="h-24 bg-gray-200 rounded"></div>
                        <div className="h-24 bg-gray-200 rounded"></div>
                        <div className="h-24 bg-gray-200 rounded"></div>
                        <div className="h-24 bg-gray-200 rounded"></div>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </motion.div>
          </div>
        </motion.div>

        {/* Mobile Features Grid */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h3 className="text-3xl font-bold text-center mb-12 text-gray-900 dark:text-white">
            What Makes Our Mobile Landing Pages Different
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {mobileFeatures.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
              >
                <div className="text-3xl mb-4">{feature.icon}</div>
                <h4 className="text-xl font-bold mb-3 text-gray-900 dark:text-white">
                  {feature.title}
                </h4>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  {feature.description}
                </p>
                <div className="text-sm font-semibold text-green-600 dark:text-green-400 bg-green-100 dark:bg-green-900 px-3 py-2 rounded-lg inline-block">
                  {feature.benefit}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Warning Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="bg-gradient-to-r from-red-500 to-orange-500 text-white p-12 rounded-3xl text-center"
        >
          <div className="text-6xl mb-6">⚠️</div>
          <h3 className="text-3xl font-bold mb-4">Don't Lose 72% of Your Potential Customers</h3>
          <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
            A poorly optimized mobile experience is costing you money every single day. Every mobile user who leaves frustrated is a lost opportunity.
          </p>
          <button 
            onClick={() => document.getElementById('contact-form')?.scrollIntoView({ behavior: 'smooth' })}
            className="bg-white text-red-600 px-8 py-4 rounded-xl font-bold text-lg hover:bg-gray-100 transition-all duration-300 transform hover:scale-105"
          >
            Get Mobile-Perfect Landing Page
          </button>
        </motion.div>
      </div>
    </div>
  );
} 