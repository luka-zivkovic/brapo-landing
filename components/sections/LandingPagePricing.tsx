"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";

const pricingTiers = [
  {
    name: "Essentials",
    price: "€300",
    description: "Perfect for small businesses and startups",
    features: [
      "Single landing page design",
      "Mobile-responsive layout",
      "Contact form integration",
      "Basic SEO optimization",
      "1 week delivery",
      "2 revision rounds",
      "HTML/CSS files included"
    ],
    popular: false,
    buttonText: "Start Project",
    color: "blue"
  },
  {
    name: "Professional",
    price: "€500",
    description: "Ideal for growing businesses",
    features: [
      "Premium landing page design",
      "Mobile-first optimization",
      "Advanced form integration",
      "A/B testing setup",
      "Analytics integration",
      "5 days delivery",
      "3 revision rounds",
      "Performance optimization",
      "Social media integration"
    ],
    popular: true,
    buttonText: "Most Popular",
    color: "purple"
  },
  {
    name: "Enterprise",
    price: "€800",
    description: "For businesses serious about conversion",
    features: [
      "Custom landing page design",
      "Multi-device optimization",
      "Advanced lead capture",
      "CRM integration",
      "Heat map analysis setup",
      "3 days delivery",
      "Unlimited revisions",
      "Performance monitoring",
      "Conversion optimization",
      "Priority support",
      "Post-launch consulting"
    ],
    popular: false,
    buttonText: "Get Started",
    color: "green"
  }
];

const addOns = [
  {
    name: "Additional Page",
    price: "€150",
    description: "Extra landing page with consistent design"
  },
  {
    name: "Advanced Analytics",
    price: "€100",
    description: "Google Analytics 4 + conversion tracking setup"
  },
  {
    name: "Rush Delivery",
    price: "€200",
    description: "48-hour delivery (subject to availability)"
  },
  {
    name: "Content Writing",
    price: "€150",
    description: "Professional copywriting for your landing page"
  }
];

const comparisonData = [
  {
    category: "Design & Development",
    features: [
      { name: "Responsive Design", essential: true, professional: true, enterprise: true },
      { name: "Custom Graphics", essential: false, professional: true, enterprise: true },
      { name: "Advanced Animations", essential: false, professional: false, enterprise: true },
      { name: "Brand Guidelines Integration", essential: false, professional: true, enterprise: true }
    ]
  },
  {
    category: "Features & Integration",
    features: [
      { name: "Contact Forms", essential: true, professional: true, enterprise: true },
      { name: "Social Media Integration", essential: false, professional: true, enterprise: true },
      { name: "CRM Integration", essential: false, professional: false, enterprise: true },
      { name: "Third-party API Integration", essential: false, professional: false, enterprise: true }
    ]
  },
  {
    category: "Optimization & Analytics",
    features: [
      { name: "Basic SEO", essential: true, professional: true, enterprise: true },
      { name: "A/B Testing Setup", essential: false, professional: true, enterprise: true },
      { name: "Conversion Tracking", essential: false, professional: true, enterprise: true },
      { name: "Heat Map Analysis", essential: false, professional: false, enterprise: true }
    ]
  }
];

export default function LandingPagePricing() {
  const [showComparison, setShowComparison] = useState(false);
  const [selectedTier, setSelectedTier] = useState(1); // Professional is default

  return (
    <div className="py-20 bg-gradient-to-br from-gray-50 to-blue-50 dark:from-gray-900 dark:to-blue-900 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-gradient-to-br from-blue-400/20 to-purple-600/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-gradient-to-br from-purple-400/20 to-pink-600/20 rounded-full blur-3xl"></div>
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
            Simple, Transparent Pricing
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto mb-8">
            No hidden fees, no surprises. Choose the package that fits your business needs and start converting visitors today.
          </p>
          
          {/* Toggle Buttons */}
          <div className="flex justify-center mb-8">
            <div className="bg-white dark:bg-gray-800 p-1 rounded-xl shadow-lg">
              <button
                onClick={() => setShowComparison(false)}
                className={`px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${
                  !showComparison
                    ? 'bg-blue-600 text-white shadow-lg'
                    : 'text-gray-600 dark:text-gray-300 hover:text-blue-600'
                }`}
              >
                Pricing Plans
              </button>
              <button
                onClick={() => setShowComparison(true)}
                className={`px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${
                  showComparison
                    ? 'bg-blue-600 text-white shadow-lg'
                    : 'text-gray-600 dark:text-gray-300 hover:text-blue-600'
                }`}
              >
                Compare Features
              </button>
            </div>
          </div>
        </motion.div>

        {!showComparison ? (
          <>
            {/* Pricing Cards */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16"
            >
              {pricingTiers.map((tier, index) => (
                <motion.div
                  key={tier.name}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className={`relative bg-white dark:bg-gray-800 rounded-2xl shadow-xl overflow-hidden ${
                    tier.popular ? 'ring-4 ring-purple-500 scale-105' : ''
                  }`}
                >
                  {tier.popular && (
                    <div className="absolute top-0 left-0 right-0 bg-gradient-to-r from-purple-500 to-blue-500 text-white text-center py-2 text-sm font-semibold">
                      🎯 Most Popular Choice
                    </div>
                  )}
                  
                  <div className={`p-8 ${tier.popular ? 'pt-16' : ''}`}>
                    <div className="text-center mb-8">
                      <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                        {tier.name}
                      </h3>
                      <p className="text-gray-600 dark:text-gray-300 mb-4">
                        {tier.description}
                      </p>
                      <div className="text-4xl font-bold text-gray-900 dark:text-white mb-2">
                        {tier.price}
                      </div>
                      <div className="text-sm text-gray-500 dark:text-gray-400">
                        One-time payment
                      </div>
                    </div>

                    <ul className="space-y-4 mb-8">
                      {tier.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-start">
                          <svg className="w-5 h-5 text-green-500 mt-0.5 mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                          </svg>
                          <span className="text-gray-700 dark:text-gray-300">{feature}</span>
                        </li>
                      ))}
                    </ul>

                    <button
                      onClick={() => document.getElementById('contact-form')?.scrollIntoView({ behavior: 'smooth' })}
                      className={`w-full py-4 px-6 rounded-xl font-bold text-lg transition-all duration-300 transform hover:scale-105 ${
                        tier.popular
                          ? 'bg-gradient-to-r from-purple-500 to-blue-500 text-white shadow-lg hover:shadow-xl'
                          : tier.color === 'blue'
                          ? 'bg-blue-600 text-white hover:bg-blue-700'
                          : tier.color === 'green'
                          ? 'bg-green-600 text-white hover:bg-green-700'
                          : 'bg-gray-600 text-white hover:bg-gray-700'
                      }`}
                    >
                      {tier.buttonText}
                    </button>
                  </div>
                </motion.div>
              ))}
            </motion.div>

            {/* Add-ons Section */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="mb-16"
            >
              <h3 className="text-3xl font-bold text-center mb-12 text-gray-900 dark:text-white">
                Optional Add-ons
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {addOns.map((addon, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
                  >
                    <div className="text-center">
                      <h4 className="font-bold text-lg mb-2 text-gray-900 dark:text-white">
                        {addon.name}
                      </h4>
                      <div className="text-2xl font-bold text-blue-600 dark:text-blue-400 mb-3">
                        {addon.price}
                      </div>
                      <p className="text-gray-600 dark:text-gray-300 text-sm">
                        {addon.description}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </>
        ) : (
          /* Feature Comparison Table */
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl overflow-hidden mb-16"
          >
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-gray-50 dark:bg-gray-700">
                  <tr>
                    <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900 dark:text-white">
                      Features
                    </th>
                    <th className="px-6 py-4 text-center text-sm font-semibold text-gray-900 dark:text-white">
                      Essentials<br />
                      <span className="text-blue-600 dark:text-blue-400">€300</span>
                    </th>
                    <th className="px-6 py-4 text-center text-sm font-semibold text-gray-900 dark:text-white bg-purple-50 dark:bg-purple-900/20">
                      Professional<br />
                      <span className="text-purple-600 dark:text-purple-400">€500</span>
                    </th>
                    <th className="px-6 py-4 text-center text-sm font-semibold text-gray-900 dark:text-white">
                      Enterprise<br />
                      <span className="text-green-600 dark:text-green-400">€800</span>
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {comparisonData.map((category, categoryIndex) => (
                    <React.Fragment key={categoryIndex}>
                      <tr className="bg-gray-100 dark:bg-gray-600">
                        <td colSpan={4} className="px-6 py-3 text-sm font-semibold text-gray-900 dark:text-white">
                          {category.category}
                        </td>
                      </tr>
                      {category.features.map((feature, featureIndex) => (
                        <tr key={featureIndex} className="border-t border-gray-200 dark:border-gray-600">
                          <td className="px-6 py-4 text-sm text-gray-900 dark:text-white">
                            {feature.name}
                          </td>
                          <td className="px-6 py-4 text-center">
                            {feature.essential ? (
                              <svg className="w-5 h-5 text-green-500 mx-auto" fill="currentColor" viewBox="0 0 20 20">
                                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                              </svg>
                            ) : (
                              <span className="text-gray-400">—</span>
                            )}
                          </td>
                          <td className="px-6 py-4 text-center bg-purple-50 dark:bg-purple-900/20">
                            {feature.professional ? (
                              <svg className="w-5 h-5 text-green-500 mx-auto" fill="currentColor" viewBox="0 0 20 20">
                                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                              </svg>
                            ) : (
                              <span className="text-gray-400">—</span>
                            )}
                          </td>
                          <td className="px-6 py-4 text-center">
                            {feature.enterprise ? (
                              <svg className="w-5 h-5 text-green-500 mx-auto" fill="currentColor" viewBox="0 0 20 20">
                                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                              </svg>
                            ) : (
                              <span className="text-gray-400">—</span>
                            )}
                          </td>
                        </tr>
                      ))}
                    </React.Fragment>
                  ))}
                </tbody>
              </table>
            </div>
          </motion.div>
        )}

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center bg-gradient-to-r from-blue-600 to-purple-600 text-white p-12 rounded-3xl"
        >
          <h3 className="text-3xl font-bold mb-4">Ready to Start Converting?</h3>
          <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
            Don't wait another day to start capturing leads. Your competitors are already ahead—let's get you caught up.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button 
              onClick={() => document.getElementById('contact-form')?.scrollIntoView({ behavior: 'smooth' })}
              className="bg-white text-blue-600 px-8 py-4 rounded-xl font-bold text-lg hover:bg-gray-100 transition-all duration-300 transform hover:scale-105"
            >
              Get Started Today
            </button>
            <button 
              onClick={() => document.getElementById('contact-form')?.scrollIntoView({ behavior: 'smooth' })}
              className="border-2 border-white text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-white hover:text-blue-600 transition-all duration-300"
            >
              Schedule Consultation
            </button>
          </div>
        </motion.div>
      </div>
    </div>
  );
} 