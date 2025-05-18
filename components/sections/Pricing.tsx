"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface ServicePricing {
  name: string;
  setupPrice: string;
  monthlyPrice?: string;
  description: string;
  features: string[];
  inDemand?: boolean;
  category: 'development' | 'marketing' | 'automation';
}

const services: ServicePricing[] = [
  // Development Services
  {
    name: "Landing Page Creation",
    setupPrice: "300€",
    monthlyPrice: "100€",
    description: "High-converting landing pages designed to turn visitors into customers",
    features: [
      "Custom design & development",
      "Mobile responsive layout",
      "CTA optimization",
      "Lead capture forms",
      "Analytics integration"
    ],
    inDemand: true,
    category: 'development'
  },
  {
    name: "Mobile App Development",
    setupPrice: "4.000€",
    description: "Custom mobile applications for iOS and Android platforms",
    features: [
      "Native or cross-platform development",
      "User interface design",
      "Backend integration",
      "App Store submission",
      "Post-launch support"
    ],
    inDemand: true,
    category: 'development'
  },
  {
    name: "E-Commerce Website",
    setupPrice: "2.500€",
    monthlyPrice: "150€",
    description: "Full-featured online stores built to drive sales and growth",
    features: [
      "Product catalog management",
      "Secure payment processing",
      "Inventory management",
      "Mobile-responsive design",
      "SEO optimization"
    ],
    category: 'development'
  },
  {
    name: "AI Agents Implementation",
    setupPrice: "1.200€",
    monthlyPrice: "180€",
    description: "Intelligent AI agents integrated into your website to enhance user experience",
    features: [
      "Custom AI agent development",
      "Knowledge base integration",
      "Conversational interface",
      "24/7 customer support capability",
      "Analytics and continuous improvement"
    ],
    inDemand: true,
    category: 'development'
  },
  
  // Marketing Services
  {
    name: "Email Marketing",
    setupPrice: "500€",
    monthlyPrice: "250€",
    description: "Strategic email campaigns to nurture leads and drive conversions",
    features: [
      "Campaign strategy & planning",
      "Email template design",
      "Audience segmentation",
      "A/B testing",
      "Performance analytics"
    ],
    inDemand: true,
    category: 'marketing'
  },
  {
    name: "PPC Advertising",
    setupPrice: "800€",
    monthlyPrice: "350€",
    description: "Targeted pay-per-click campaigns across search and social platforms",
    features: [
      "Keyword research & strategy",
      "Ad copywriting & design",
      "Bid management",
      "A/B testing",
      "ROI optimization"
    ],
    category: 'marketing'
  },
  {
    name: "AI Avatars",
    setupPrice: "900€",
    monthlyPrice: "200€",
    description: "Custom AI-driven virtual brand representatives for enhanced marketing",
    features: [
      "Personalized virtual brand ambassador",
      "Content creation automation",
      "Social media integration",
      "Interactive customer engagement",
      "Brand voice consistency"
    ],
    inDemand: true,
    category: 'marketing'
  },
  {
    name: "Ed Tech Campaigns",
    setupPrice: "1.200€",
    monthlyPrice: "350€",
    description: "Strategic marketing campaigns tailored for educational technology platforms",
    features: [
      "Education market research",
      "Targeted institutional outreach",
      "Student engagement strategies",
      "Learning platform promotion",
      "Educator community building"
    ],
    inDemand: true,
    category: 'marketing'
  },
  
  // Automation Services
  {
    name: "CRM Implementation",
    setupPrice: "1.500€",
    monthlyPrice: "200€",
    description: "Custom CRM solutions to streamline your customer relationships",
    features: [
      "System configuration",
      "Data migration",
      "User training",
      "Workflow automation",
      "Integration with existing systems"
    ],
    inDemand: true,
    category: 'automation'
  },
  {
    name: "Lead Generation & Outreach",
    setupPrice: "1.000€",
    monthlyPrice: "300€",
    description: "Automated systems to capture, qualify, and nurture potential customers",
    features: [
      "Lead capture form creation",
      "Automated follow-up sequences",
      "Lead scoring implementation",
      "Sales pipeline integration",
      "Performance reporting"
    ],
    inDemand: true,
    category: 'automation'
  }
];

export default function Pricing() {
  const [activeCategory, setActiveCategory] = useState<'all' | 'development' | 'marketing' | 'automation'>('all');
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 6; // 2x3 grid

  // Filter services based on category
  const filteredServices = React.useMemo(() => {
    if (activeCategory === 'all') return services;
    return services.filter(service => service.category === activeCategory);
  }, [activeCategory]);
  
  // Calculate pagination, accounting for the "Custom Solution" card
  const adjustedItemsPerPage = itemsPerPage - 1; // Reserve one slot for custom solution card
  const totalPages = Math.ceil(filteredServices.length / adjustedItemsPerPage);
  
  const currentServices = React.useMemo(() => {
    // For category views, show all filtered services
    if (activeCategory !== 'all') {
      return filteredServices;
    }
    
    // For "all" view with pagination
    const startIndex = (currentPage - 1) * adjustedItemsPerPage;
    return filteredServices.slice(startIndex, startIndex + adjustedItemsPerPage);
  }, [filteredServices, currentPage, activeCategory, adjustedItemsPerPage]);
  
  // Reset to first page when changing category
  React.useEffect(() => {
    setCurrentPage(1);
  }, [activeCategory]);

  return (
    <section className="w-full py-16 md:py-24 bg-zinc-50 dark:bg-zinc-950" id="pricing">
      <div className="container mx-auto px-4 md:px-6">
        <div className="mb-10 space-y-4 text-center">
          <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">Service-Based Pricing</h2>
          <p className="mx-auto max-w-[700px] text-zinc-600 md:text-xl/relaxed lg:text-base/relaxed dark:text-zinc-400">
            Transparent pricing for our most popular services. Contact us for a customized solution tailored to your specific needs.
          </p>
          
          <div className="mt-6 flex items-center justify-center">
            <div className="relative flex flex-wrap items-center bg-zinc-100 dark:bg-zinc-800 p-1 rounded-full gap-1 justify-center">
              <button
                onClick={() => setActiveCategory("all")}
                className={cn(
                  "relative rounded-full px-4 py-2 text-sm font-medium transition-all duration-200",
                  activeCategory === "all" 
                    ? "bg-white dark:bg-zinc-700 text-zinc-900 dark:text-white shadow-sm" 
                    : "text-zinc-700 dark:text-zinc-300"
                )}
              >
                All Services
              </button>
              <button
                onClick={() => setActiveCategory("development")}
                className={cn(
                  "relative rounded-full px-4 py-2 text-sm font-medium transition-all duration-200",
                  activeCategory === "development" 
                    ? "bg-white dark:bg-zinc-700 text-zinc-900 dark:text-white shadow-sm" 
                    : "text-zinc-700 dark:text-zinc-300"
                )}
              >
                Development
              </button>
              <button
                onClick={() => setActiveCategory("marketing")}
                className={cn(
                  "relative rounded-full px-4 py-2 text-sm font-medium transition-all duration-200",
                  activeCategory === "marketing" 
                    ? "bg-white dark:bg-zinc-700 text-zinc-900 dark:text-white shadow-sm" 
                    : "text-zinc-700 dark:text-zinc-300"
                )}
              >
                Marketing
              </button>
              <button
                onClick={() => setActiveCategory("automation")}
                className={cn(
                  "relative rounded-full px-4 py-2 text-sm font-medium transition-all duration-200",
                  activeCategory === "automation" 
                    ? "bg-white dark:bg-zinc-700 text-zinc-900 dark:text-white shadow-sm" 
                    : "text-zinc-700 dark:text-zinc-300"
                )}
              >
                Automation
              </button>
            </div>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {currentServices.map((service, index) => (
            <motion.div
              key={service.name}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className={cn(
                "relative flex flex-col rounded-xl border shadow-sm p-6 transition-all duration-200",
                service.inDemand 
                  ? "border-amber-500 bg-white dark:bg-zinc-800" 
                  : "border-zinc-200 bg-white dark:border-zinc-800 dark:bg-zinc-900",
                service.inDemand && "md:scale-105 md:-translate-y-2"
              )}
            >
              {service.inDemand && (
                <div className="absolute -top-4 left-0 right-0 mx-auto w-fit px-3 py-1 bg-gradient-to-r from-amber-500 to-orange-500 text-white text-xs font-medium rounded-full">
                  HIGH DEMAND
                </div>
              )}
              
              <div className="mb-5">
                <h3 className="text-xl font-bold">{service.name}</h3>
                <div className="mt-3 flex gap-3">
                  <div>
                    <span className="text-xs text-zinc-500 dark:text-zinc-400">Setup</span>
                    <div>
                      <span className="text-2xl font-bold text-amber-600 dark:text-amber-500">{service.setupPrice}</span>
                    </div>
                  </div>
                  
                  {service.monthlyPrice && (
                    <div>
                      <span className="text-xs text-zinc-500 dark:text-zinc-400">Monthly</span>
                      <div>
                        <span className="text-lg font-bold text-teal-600 dark:text-teal-500">{service.monthlyPrice}</span>
                      </div>
                    </div>
                  )}
                </div>
                <p className="mt-3 text-sm text-zinc-600 dark:text-zinc-400">{service.description}</p>
              </div>
              
              <div className="mb-6 flex-grow">
                <ul className="space-y-2">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-sm">
                      <svg 
                        xmlns="http://www.w3.org/2000/svg" 
                        className="h-5 w-5 shrink-0 text-green-500" 
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path 
                          fillRule="evenodd" 
                          d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" 
                          clipRule="evenodd" 
                        />
                      </svg>
                      <span className="text-zinc-700 dark:text-zinc-300">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
              
              <a 
                href="#cta" 
                className={cn(
                  "w-full rounded-lg px-4 py-3 font-medium text-sm transition-colors text-center",
                  service.inDemand 
                    ? "bg-gradient-to-r from-amber-600 to-orange-600 text-white hover:from-amber-700 hover:to-orange-700" 
                    : "bg-zinc-100 text-zinc-900 hover:bg-zinc-200 dark:bg-zinc-800 dark:text-zinc-100 dark:hover:bg-zinc-700"
                )}
                onClick={(e) => {
                  e.preventDefault();
                  document.getElementById('cta')?.scrollIntoView({ behavior: 'smooth' });
                }}
              >
                Get a Custom Quote
              </a>
            </motion.div>
          ))}
          
          {/* Custom solution card always at the end */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.5 }}
            className="relative flex flex-col rounded-xl border border-dashed border-amber-300 dark:border-amber-700 p-6 transition-all duration-200 bg-amber-50/50 dark:bg-zinc-800/50 items-center justify-center text-center"
          >
            <div className="mb-4 w-16 h-16 rounded-full bg-amber-100 dark:bg-amber-900/30 flex items-center justify-center text-amber-600 dark:text-amber-400">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" viewBox="0 0 20 20" fill="currentColor">
                <path d="M11 17a1 1 0 001.447.894l4-2A1 1 0 0017 15V9.236a1 1 0 00-1.447-.894l-4 2a1 1 0 00-.553.894V17zM15.211 6.276a1 1 0 000-1.788l-4.764-2.382a1 1 0 00-.894 0L4.789 4.488a1 1 0 000 1.788l4.764 2.382a1 1 0 00.894 0l4.764-2.382zM4.447 8.342A1 1 0 003 9.236V15a1 1 0 00.553.894l4 2A1 1 0 009 17v-5.764a1 1 0 00-.553-.894l-4-2z" />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-amber-700 dark:text-amber-500 mb-2">Custom Solution</h3>
            <p className="text-zinc-700 dark:text-zinc-300 mb-4">
              Looking for a bespoke solution? We create tailored strategies and implementations designed specifically for your unique business challenges.  
            </p>
            <a 
              href="#cta" 
              className="inline-flex items-center px-4 py-2 rounded-lg bg-amber-600 text-white hover:bg-amber-700 transition-colors duration-200 font-medium text-sm"
              onClick={(e) => {
                e.preventDefault();
                document.getElementById('cta')?.scrollIntoView({ behavior: 'smooth' });
              }}
            >
              <span>Get a Tailored Quote</span>
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
            </a>
          </motion.div>
        </div>
        
        {/* Pagination controls - only show for All Services view when there are multiple pages */}
        {activeCategory === 'all' && totalPages > 1 && (
          <div className="flex justify-center mt-10 space-x-2">
            {Array.from({ length: totalPages }, (_, i) => i + 1).map(page => (
              <button
                key={page}
                onClick={() => setCurrentPage(page)}
                className={cn(
                  "w-10 h-10 rounded-full flex items-center justify-center transition-colors",
                  currentPage === page 
                    ? "bg-amber-600 text-white" 
                    : "bg-amber-100 text-amber-800 hover:bg-amber-200 dark:bg-amber-900/30 dark:text-amber-300 dark:hover:bg-amber-800/50"
                )}
              >
                {page}
              </button>
            ))}
          </div>
        )}
        
        {/* Bundle discount section */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mt-16 max-w-3xl mx-auto bg-gradient-to-r from-amber-50 to-amber-100 dark:from-zinc-800 dark:to-zinc-800/80 rounded-xl p-6 border border-amber-200 dark:border-amber-900/30 shadow-md"
        >
          <div className="flex flex-col md:flex-row items-center gap-4 md:gap-8">
            <div className="md:w-1/4 flex justify-center">
              <div className="bg-amber-100 dark:bg-amber-900/30 rounded-full p-4 w-20 h-20 flex items-center justify-center text-amber-600 dark:text-amber-400">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M17.707 9.293a1 1 0 010 1.414l-7 7a1 1 0 01-1.414 0l-7-7A.997.997 0 012 10V5a3 3 0 013-3h5c.256 0 .512.098.707.293l7 7zM5 6a1 1 0 100-2 1 1 0 000 2z" clipRule="evenodd" />
                </svg>
              </div>
            </div>
            <div className="md:w-3/4 text-center md:text-left">
              <h3 className="text-xl font-bold text-amber-800 dark:text-amber-400 mb-2">Save Up to 20% with Service Bundles</h3>
              <p className="text-zinc-700 dark:text-zinc-300">
                Combine multiple services to unlock significant discounts. For example, pair Website Development with Email Marketing, or Mobile App Development with CRM Implementation for enhanced savings and better results.
              </p>
              <div className="mt-4">
                <a 
                  href="#cta" 
                  className="inline-flex items-center text-amber-600 dark:text-amber-400 font-medium hover:underline"
                  onClick={(e) => {
                    e.preventDefault();
                    document.getElementById('cta')?.scrollIntoView({ behavior: 'smooth' });
                  }}
                >
                  Ask about our bundle options
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </motion.div>

        <div className="mt-8 text-center">
          <p className="text-zinc-600 dark:text-zinc-400 text-sm">
            All prices are starting points and may vary based on project complexity and specific requirements.{" "}
            <a href="#contact" className="font-medium text-amber-600 dark:text-amber-400 hover:underline">
              Contact our team
            </a>
            {" "}for a detailed proposal.
          </p>
        </div>
      </div>
    </section>
  );
}
