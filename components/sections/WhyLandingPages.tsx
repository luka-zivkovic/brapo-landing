"use client";
import React from "react";
import { motion } from "framer-motion";

const reasons = [
  {
    icon: "🎯",
    title: "Focused Conversion",
    description: "Unlike your main website, landing pages have one goal: convert visitors into customers. No distractions, just action.",
    stat: "68% higher conversion than multi-purpose pages"
  },
  {
    icon: "📊",
    title: "Measurable ROI",
    description: "Track exactly which campaigns are working. Every dollar spent on your landing page can be measured and optimized.",
    stat: "Average ROI: 400% within 6 months"
  },
  {
    icon: "⚡",
    title: "Instant Credibility",
    description: "A professional landing page builds trust immediately. First impressions happen in 0.05 seconds.",
    stat: "94% of first impressions are design-related"
  },
  {
    icon: "🚀",
    title: "Competitive Edge",
    description: "While your competitors rely on generic websites, you'll capture leads with targeted, converting pages.",
    stat: "3x more leads than traditional websites"
  }
];

const consequences = [
  {
    icon: "😰",
    title: "Without a Landing Page:",
    points: [
      "Visitors get confused by multiple options",
      "Lower conversion rates (average 2.35%)",
      "Wasted advertising budget",
      "Lost potential customers",
      "Difficulty tracking campaign performance"
    ]
  },
  {
    icon: "🏆",
    title: "With Our Landing Pages:",
    points: [
      "Clear, focused user journey",
      "Higher conversion rates (average 7.5%)",
      "Maximized ad spend efficiency",
      "Captured leads become customers",
      "Detailed performance analytics"
    ]
  }
];

export default function WhyLandingPages() {
  return (
    <div className="py-20 bg-white dark:bg-gray-900 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='0.1'%3E%3Cpath d='M30 30c0-11.046-8.954-20-20-20s-20 8.954-20 20 8.954 20 20 20 20-8.954 20-20zm10 0c0-11.046-8.954-20-20-20s-20 8.954-20 20 8.954 20 20 20 20-8.954 20-20z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
        }}></div>
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
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-gray-900 to-gray-600 dark:from-white dark:to-gray-300 bg-clip-text text-transparent">
            Why Every Business Needs a Landing Page
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Your website might look good, but is it actually converting visitors into customers? Here's why landing pages are essential for business growth.
          </p>
        </motion.div>

        {/* Main Reasons Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          {reasons.map((reason, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-blue-50 to-purple-50 dark:from-gray-800 dark:to-gray-700 p-8 rounded-2xl hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
            >
              <div className="text-4xl mb-4">{reason.icon}</div>
              <h3 className="text-xl font-bold mb-4 text-gray-900 dark:text-white">{reason.title}</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4">{reason.description}</p>
              <div className="text-sm font-semibold text-blue-600 dark:text-blue-400 bg-blue-100 dark:bg-blue-900 px-3 py-2 rounded-lg">
                {reason.stat}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Comparison Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h3 className="text-3xl font-bold text-center mb-12 text-gray-900 dark:text-white">
            The Difference is Clear
          </h3>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {consequences.map((consequence, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                viewport={{ once: true }}
                className={`p-8 rounded-2xl ${
                  index === 0 
                    ? 'bg-red-50 dark:bg-red-900/20 border-2 border-red-200 dark:border-red-800' 
                    : 'bg-green-50 dark:bg-green-900/20 border-2 border-green-200 dark:border-green-800'
                }`}
              >
                <div className="flex items-center mb-6">
                  <span className="text-3xl mr-3">{consequence.icon}</span>
                  <h4 className={`text-xl font-bold ${
                    index === 0 ? 'text-red-700 dark:text-red-300' : 'text-green-700 dark:text-green-300'
                  }`}>
                    {consequence.title}
                  </h4>
                </div>
                <ul className="space-y-3">
                  {consequence.points.map((point, pointIndex) => (
                    <li key={pointIndex} className="flex items-start">
                      <span className={`text-lg mr-3 ${
                        index === 0 ? 'text-red-500' : 'text-green-500'
                      }`}>
                        {index === 0 ? '❌' : '✅'}
                      </span>
                      <span className="text-gray-700 dark:text-gray-300">{point}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center bg-gradient-to-r from-blue-600 to-purple-600 text-white p-12 rounded-3xl"
        >
          <h3 className="text-3xl font-bold mb-4">Don't Let Another Customer Slip Away</h3>
          <p className="text-xl mb-8 opacity-90">
            Every day without a proper landing page is money left on the table. Start converting today.
          </p>
          <button 
            onClick={() => document.getElementById('contact-form')?.scrollIntoView({ behavior: 'smooth' })}
            className="bg-white text-blue-600 px-8 py-4 rounded-xl font-bold text-lg hover:bg-gray-100 transition-all duration-300 transform hover:scale-105"
          >
            Get Started Now - Only €300
          </button>
        </motion.div>
      </div>
    </div>
  );
} 