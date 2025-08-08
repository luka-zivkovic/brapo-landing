"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";

export default function ContactForm() {
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [activeTab, setActiveTab] = useState<'email' | 'schedule'>('email');

  const handleEmailSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    setIsSubmitting(false);
    setIsSubmitted(true);
    
    // Reset after 3 seconds
    setTimeout(() => {
      setIsSubmitted(false);
      setEmail("");
    }, 3000);
  };

  const handleCalendlyClick = () => {
    // Open Calendly link - replace with your actual Calendly URL
    window.open('https://calendly.com/your-username/landing-page-consultation', '_blank');
  };

  return (
    <div id="contact-form" className="py-20 bg-gradient-to-br from-blue-50 to-purple-50 dark:from-gray-900 dark:to-blue-900 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 right-1/4 w-64 h-64 bg-gradient-to-br from-blue-400/20 to-purple-600/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 left-1/4 w-80 h-80 bg-gradient-to-br from-purple-400/20 to-pink-600/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-gray-900 to-blue-600 dark:from-white dark:to-blue-300 bg-clip-text text-transparent">
            Ready to Transform Your Business?
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Join hundreds of businesses that have increased their conversion rates with our proven landing page system.
          </p>
        </motion.div>

        {/* Tab Switcher */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="flex justify-center mb-8"
        >
          <div className="bg-white dark:bg-gray-800 p-1 rounded-xl shadow-lg">
            <button
              onClick={() => setActiveTab('email')}
              className={`px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${
                activeTab === 'email'
                  ? 'bg-blue-600 text-white shadow-lg'
                  : 'text-gray-600 dark:text-gray-300 hover:text-blue-600'
              }`}
            >
              📧 Get Free Quote
            </button>
            <button
              onClick={() => setActiveTab('schedule')}
              className={`px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${
                activeTab === 'schedule'
                  ? 'bg-blue-600 text-white shadow-lg'
                  : 'text-gray-600 dark:text-gray-300 hover:text-blue-600'
              }`}
            >
              📅 Schedule Call
            </button>
          </div>
        </motion.div>

        {/* Content based on active tab */}
        <motion.div
          key={activeTab}
          initial={{ opacity: 0, x: activeTab === 'email' ? -30 : 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="bg-white dark:bg-gray-800 rounded-2xl shadow-2xl p-8 md:p-12"
        >
          {activeTab === 'email' ? (
            <div className="text-center">
              <div className="text-6xl mb-6">🚀</div>
              <h3 className="text-3xl font-bold mb-4 text-gray-900 dark:text-white">
                Get Your Custom Quote in 24 Hours
              </h3>
              <p className="text-gray-600 dark:text-gray-300 mb-8 max-w-2xl mx-auto">
                Enter your email and we'll send you a personalized quote for your landing page project. 
                No spam, just a detailed proposal tailored to your business needs.
              </p>

              {!isSubmitted ? (
                <form onSubmit={handleEmailSubmit} className="max-w-md mx-auto">
                  <div className="flex flex-col sm:flex-row gap-4 mb-6">
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="Enter your email address"
                      required
                      className="flex-1 px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:bg-gray-700 dark:text-white"
                    />
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="px-8 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg font-semibold hover:scale-105 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      {isSubmitting ? (
                        <div className="flex items-center">
                          <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin mr-2"></div>
                          Sending...
                        </div>
                      ) : (
                        'Get Quote'
                      )}
                    </button>
                  </div>
                  
                  <div className="text-sm text-gray-500 dark:text-gray-400 mb-6">
                    ✅ Free consultation • ✅ No commitment • ✅ 24-hour response
                  </div>
                </form>
              ) : (
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="text-center"
                >
                  <div className="text-6xl mb-4">✅</div>
                  <h4 className="text-2xl font-bold text-green-600 dark:text-green-400 mb-2">
                    Quote Request Sent!
                  </h4>
                  <p className="text-gray-600 dark:text-gray-300">
                    We'll send your personalized quote to <strong>{email}</strong> within 24 hours.
                  </p>
                </motion.div>
              )}

              {/* Benefits */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
                <div className="text-center">
                  <div className="text-3xl mb-3">🎯</div>
                  <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Custom Strategy</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-300">Tailored to your business goals</p>
                </div>
                <div className="text-center">
                  <div className="text-3xl mb-3">⚡</div>
                  <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Fast Delivery</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-300">Ready in 3-7 days</p>
                </div>
                <div className="text-center">
                  <div className="text-3xl mb-3">💰</div>
                  <h4 className="font-semibold text-gray-900 dark:text-white mb-2">ROI Guaranteed</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-300">Or we'll optimize until it converts</p>
                </div>
              </div>
            </div>
          ) : (
            <div className="text-center">
              <div className="text-6xl mb-6">📞</div>
              <h3 className="text-3xl font-bold mb-4 text-gray-900 dark:text-white">
                Schedule a Free Strategy Call
              </h3>
              <p className="text-gray-600 dark:text-gray-300 mb-8 max-w-2xl mx-auto">
                Book a 30-minute consultation call with our landing page experts. We'll discuss your goals, 
                analyze your current setup, and create a custom conversion strategy.
              </p>

              <button
                onClick={handleCalendlyClick}
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-green-600 to-blue-600 text-white rounded-xl font-bold text-lg hover:scale-105 transition-all duration-300 shadow-lg mb-8"
              >
                <span className="mr-3">📅</span>
                Book Your Free Call Now
              </button>

              {/* What to expect */}
              <div className="bg-gray-50 dark:bg-gray-700 rounded-xl p-6 mb-8">
                <h4 className="font-semibold text-gray-900 dark:text-white mb-4">What to expect on the call:</h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-left">
                  <div className="flex items-start">
                    <span className="text-green-500 mr-3 mt-1">✅</span>
                    <span className="text-gray-600 dark:text-gray-300">Analysis of your current website/funnel</span>
                  </div>
                  <div className="flex items-start">
                    <span className="text-green-500 mr-3 mt-1">✅</span>
                    <span className="text-gray-600 dark:text-gray-300">Custom conversion strategy discussion</span>
                  </div>
                  <div className="flex items-start">
                    <span className="text-green-500 mr-3 mt-1">✅</span>
                    <span className="text-gray-600 dark:text-gray-300">Timeline and pricing breakdown</span>
                  </div>
                  <div className="flex items-start">
                    <span className="text-green-500 mr-3 mt-1">✅</span>
                    <span className="text-gray-600 dark:text-gray-300">Actionable next steps</span>
                  </div>
                </div>
              </div>

              {/* Urgency */}
              <div className="bg-gradient-to-r from-red-100 to-orange-100 dark:from-red-900/20 dark:to-orange-900/20 border border-red-200 dark:border-red-800 rounded-lg p-4">
                <p className="text-red-700 dark:text-red-300 font-semibold">
                  ⏰ Limited spots available this month - we only take on 10 new projects
                </p>
              </div>
            </div>
          )}
        </motion.div>
      </div>
    </div>
  );
} 