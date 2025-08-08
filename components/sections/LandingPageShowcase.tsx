"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";

const showcaseItems = [
  {
    id: 1,
    title: "SaaS Product Launch",
    industry: "Technology",
    conversionRate: "12.4%",
    improvement: "+340%",
    description: "Clean, modern design focusing on product benefits and free trial signup",
    features: ["Hero video", "Feature comparison", "Social proof", "Free trial CTA"],
    colors: ["bg-blue-500", "bg-blue-600", "bg-blue-700"],
    mockup: {
      header: "Revolutionary SaaS Platform",
      subtitle: "Streamline your workflow with AI-powered automation",
      cta: "Start Free Trial"
    }
  },
  {
    id: 2,
    title: "E-commerce Store",
    industry: "Retail",
    conversionRate: "8.9%",
    improvement: "+275%",
    description: "Product-focused design with clear value proposition and urgency elements",
    features: ["Product showcase", "Limited time offers", "Customer reviews", "Easy checkout"],
    colors: ["bg-green-500", "bg-green-600", "bg-green-700"],
    mockup: {
      header: "Premium Products, Unbeatable Prices",
      subtitle: "Discover quality products with 30% off limited time offer",
      cta: "Shop Now"
    }
  },
  {
    id: 3,
    title: "Professional Services",
    industry: "Consulting",
    conversionRate: "15.2%",
    improvement: "+520%",
    description: "Trust-building design with testimonials and clear service offerings",
    features: ["Service packages", "Client testimonials", "Case studies", "Consultation booking"],
    colors: ["bg-purple-500", "bg-purple-600", "bg-purple-700"],
    mockup: {
      header: "Expert Business Consulting",
      subtitle: "Transform your business with proven strategies",
      cta: "Book Consultation"
    }
  },
  {
    id: 4,
    title: "Lead Generation",
    industry: "Real Estate",
    conversionRate: "11.7%",
    improvement: "+480%",
    description: "High-converting form design with strong incentives and local focus",
    features: ["Lead magnets", "Local targeting", "Property showcase", "Contact forms"],
    colors: ["bg-orange-500", "bg-orange-600", "bg-orange-700"],
    mockup: {
      header: "Find Your Dream Home",
      subtitle: "Get exclusive access to properties before they hit the market",
      cta: "Get Free Report"
    }
  }
];

const caseStudies = [
  {
    client: "TechStart Inc.",
    industry: "SaaS",
    challenge: "Low signup conversion from ads",
    solution: "Mobile-first design with simplified signup flow",
    results: [
      { metric: "Conversion Rate", before: "2.1%", after: "8.4%", improvement: "+300%" },
      { metric: "Cost per Lead", before: "$45", after: "$12", improvement: "-73%" },
      { metric: "Mobile Conversions", before: "1.2%", after: "7.8%", improvement: "+550%" }
    ]
  },
  {
    client: "E-Shop Pro",
    industry: "E-commerce",
    challenge: "High cart abandonment rate",
    solution: "Streamlined checkout with trust signals",
    results: [
      { metric: "Conversion Rate", before: "3.2%", after: "9.1%", improvement: "+184%" },
      { metric: "Average Order Value", before: "$67", after: "$89", improvement: "+33%" },
      { metric: "Mobile Sales", before: "28%", after: "65%", improvement: "+132%" }
    ]
  }
];

export default function LandingPageShowcase() {
  const [activeShowcase, setActiveShowcase] = useState(0);
  // const [activeCaseStudy, setActiveCaseStudy] = useState(0);

  return (
    <div className="py-20 bg-white dark:bg-gray-900 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23000000' fill-opacity='0.05'%3E%3Cpath d='M20 20c0-11.046-8.954-20-20-20s-20 8.954-20 20 8.954 20 20 20 20-8.954 20-20zm10 0c0-11.046-8.954-20-20-20s-20 8.954-20 20 8.954 20 20 20 20-8.954 20-20z'/%3E%3C/g%3E%3C/svg%3E")`
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
            Landing Pages That Convert
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            See real examples of high-converting landing pages we've created for businesses across different industries.
          </p>
        </motion.div>

        {/* Showcase Gallery */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Showcase List */}
            <div className="space-y-4">
              {showcaseItems.map((item, index) => (
                <motion.button
                  key={item.id}
                  onClick={() => setActiveShowcase(index)}
                  className={`w-full text-left p-6 rounded-xl transition-all duration-300 ${
                    activeShowcase === index
                      ? 'bg-gradient-to-r from-blue-500 to-purple-600 text-white shadow-lg'
                      : 'bg-gray-50 dark:bg-gray-800 hover:bg-gray-100 dark:hover:bg-gray-700'
                  }`}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="font-bold text-lg">{item.title}</h3>
                    <span className={`text-sm px-2 py-1 rounded ${
                      activeShowcase === index
                        ? 'bg-white/20 text-white'
                        : 'bg-blue-100 text-blue-600 dark:bg-blue-900 dark:text-blue-300'
                    }`}>
                      {item.industry}
                    </span>
                  </div>
                  <p className={`text-sm mb-3 ${
                    activeShowcase === index ? 'text-white/90' : 'text-gray-600 dark:text-gray-300'
                  }`}>
                    {item.description}
                  </p>
                  <div className="flex justify-between text-sm">
                    <span className={activeShowcase === index ? 'text-white' : 'text-gray-500 dark:text-gray-400'}>
                      Conversion: {item.conversionRate}
                    </span>
                    <span className={`font-semibold ${
                      activeShowcase === index ? 'text-white' : 'text-green-600 dark:text-green-400'
                    }`}>
                      {item.improvement}
                    </span>
                  </div>
                </motion.button>
              ))}
            </div>

            {/* Mockup Display */}
            <div className="lg:col-span-2">
              <motion.div
                key={activeShowcase}
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
                className="bg-gray-100 dark:bg-gray-800 rounded-2xl p-8 h-96 relative overflow-hidden"
              >
                <div className="h-full flex flex-col">
                  {/* Browser Bar */}
                  <div className="flex items-center mb-6">
                    <div className="flex space-x-2">
                      <div className="w-3 h-3 bg-red-400 rounded-full"></div>
                      <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
                      <div className="w-3 h-3 bg-green-400 rounded-full"></div>
                    </div>
                    <div className="ml-4 bg-white dark:bg-gray-700 rounded px-3 py-1 text-xs text-gray-500 flex-1">
                      https://example.com/landing-page
                    </div>
                  </div>

                  {/* Mockup Content */}
                  <div className="flex-1 bg-white dark:bg-gray-700 rounded-lg p-6 relative">
                    <div className={`absolute top-0 left-0 right-0 h-2 bg-gradient-to-r ${showcaseItems[activeShowcase].colors.join(' ')}`}></div>
                    <div className="text-center mt-4">
                      <h3 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">
                        {showcaseItems[activeShowcase].mockup.header}
                      </h3>
                      <p className="text-gray-600 dark:text-gray-300 mb-6">
                        {showcaseItems[activeShowcase].mockup.subtitle}
                      </p>
                      <button className={`${showcaseItems[activeShowcase].colors[0]} text-white px-8 py-3 rounded-lg font-semibold hover:opacity-90 transition-opacity`}>
                        {showcaseItems[activeShowcase].mockup.cta}
                      </button>
                    </div>
                    
                    {/* Feature Pills */}
                    <div className="absolute bottom-4 left-4 right-4">
                      <div className="flex flex-wrap gap-2">
                        {showcaseItems[activeShowcase].features.map((feature, idx) => (
                          <span
                            key={idx}
                            className="text-xs bg-gray-100 dark:bg-gray-600 text-gray-700 dark:text-gray-300 px-2 py-1 rounded"
                          >
                            {feature}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </motion.div>

        {/* Case Studies */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h3 className="text-3xl font-bold text-center mb-12 text-gray-900 dark:text-white">
            Real Results from Real Clients
          </h3>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {caseStudies.map((study, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="bg-gradient-to-br from-gray-50 to-blue-50 dark:from-gray-800 dark:to-blue-900 p-8 rounded-2xl"
              >
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-white font-bold text-lg">
                    {study.client.charAt(0)}
                  </div>
                  <div className="ml-4">
                    <h4 className="font-bold text-lg text-gray-900 dark:text-white">{study.client}</h4>
                    <span className="text-sm text-gray-500 dark:text-gray-400">{study.industry}</span>
                  </div>
                </div>
                
                <div className="mb-6">
                  <h5 className="font-semibold text-gray-900 dark:text-white mb-2">Challenge:</h5>
                  <p className="text-gray-600 dark:text-gray-300 mb-4">{study.challenge}</p>
                  
                  <h5 className="font-semibold text-gray-900 dark:text-white mb-2">Solution:</h5>
                  <p className="text-gray-600 dark:text-gray-300">{study.solution}</p>
                </div>
                
                <div>
                  <h5 className="font-semibold text-gray-900 dark:text-white mb-4">Results:</h5>
                  <div className="space-y-3">
                    {study.results.map((result, resultIndex) => (
                      <div key={resultIndex} className="flex justify-between items-center">
                        <span className="text-gray-600 dark:text-gray-300">{result.metric}:</span>
                        <div className="text-right">
                          <div className="text-sm text-gray-500 dark:text-gray-400">
                            {result.before} → {result.after}
                          </div>
                          <div className="font-bold text-green-600 dark:text-green-400">
                            {result.improvement}
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
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
          <h3 className="text-3xl font-bold mb-4">Ready to See These Results for Your Business?</h3>
          <p className="text-xl mb-8 opacity-90">
            These aren't just pretty designs—they're conversion machines that drive real revenue.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button 
              onClick={() => document.getElementById('contact-form')?.scrollIntoView({ behavior: 'smooth' })}
              className="bg-white text-blue-600 px-8 py-4 rounded-xl font-bold text-lg hover:bg-gray-100 transition-all duration-300 transform hover:scale-105"
            >
              Get Your Landing Page
            </button>
            <button 
              onClick={() => document.getElementById('showcase')?.scrollIntoView({ behavior: 'smooth' })}
              className="border-2 border-white text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-white hover:text-blue-600 transition-all duration-300"
            >
              View More Examples
            </button>
          </div>
        </motion.div>
      </div>
    </div>
  );
} 