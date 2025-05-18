"use client";
import React from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface ServiceProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  highDemand?: boolean;
  category: 'development' | 'marketing';
}

const services: ServiceProps[] = [
  // Development Category
  {
    title: "Mobile App Development",
    description: "Creating custom mobile applications that enhance user experience and drive business growth.",
    icon: (
      <svg 
        xmlns="http://www.w3.org/2000/svg" 
        fill="none" 
        viewBox="0 0 24 24" 
        strokeWidth={1.5} 
        stroke="currentColor" 
        className="w-6 h-6"
      >
        <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 1.5H8.25A2.25 2.25 0 006 3.75v16.5a2.25 2.25 0 002.25 2.25h7.5A2.25 2.25 0 0018 20.25V3.75a2.25 2.25 0 00-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-3 18.75h3" />
      </svg>
    ),
    highDemand: true,
    category: "development"
  },
  {
    title: "Website Development",
    description: "Creating modern, responsive websites optimized for performance, user experience, and conversions.",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className="w-6 h-6"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M17.25 6.75L22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3l-4.5 16.5"
        />
      </svg>
    ),
    highDemand: true,
    category: "development"
  },
  {
    title: "CRM Implementation",
    description: "Setting up and customizing customer relationship management systems to optimize your business processes.",
    icon: (
      <svg 
        xmlns="http://www.w3.org/2000/svg" 
        fill="none" 
        viewBox="0 0 24 24" 
        strokeWidth={1.5} 
        stroke="currentColor" 
        className="w-6 h-6"
      >
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 018.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0111.964-3.07M12 6.375a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zm8.25 2.25a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z" />
      </svg>
    ),
    highDemand: true,
    category: "development"
  },
  {
    title: "Web App Development",
    description: "Building powerful web applications with modern frameworks that deliver complex functionality and exceptional user experience.",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className="w-6 h-6"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M9 17.25v1.007a3 3 0 01-.879 2.122L7.5 21h9l-.621-.621A3 3 0 0115 18.257V17.25m6-12V15a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 15V5.25m18 0A2.25 2.25 0 0018.75 3H5.25A2.25 2.25 0 003 5.25m18 0V12a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 12V5.25"
        />
      </svg>
    ),
    highDemand: true,
    category: "development"
  },
  {
    title: "Automation Solutions",
    description: "Implementing custom automation workflows that streamline business processes and eliminate repetitive tasks.",
    icon: (
      <svg 
        xmlns="http://www.w3.org/2000/svg" 
        fill="none" 
        viewBox="0 0 24 24" 
        strokeWidth={1.5} 
        stroke="currentColor" 
        className="w-6 h-6"
      >
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.594 3.94c.09-.542.56-.94 1.11-.94h2.593c.55 0 1.02.398 1.11.94l.213 1.281c.063.374.313.686.645.87.074.04.147.083.22.127.324.196.72.257 1.075.124l1.217-.456a1.125 1.125 0 011.37.49l1.296 2.247a1.125 1.125 0 01-.26 1.431l-1.003.827c-.293.24-.438.613-.431.992a6.759 6.759 0 010 .255c-.007.378.138.75.43.99l1.005.828c.424.35.534.954.26 1.43l-1.298 2.247a1.125 1.125 0 01-1.369.491l-1.217-.456c-.355-.133-.75-.072-1.076.124a6.57 6.57 0 01-.22.128c-.331.183-.581.495-.644.869l-.213 1.28c-.09.543-.56.941-1.11.941h-2.594c-.55 0-1.02-.398-1.11-.94l-.213-1.281c-.062-.374-.312-.686-.644-.87a6.52 6.52 0 01-.22-.127c-.325-.196-.72-.257-1.076-.124l-1.217.456a1.125 1.125 0 01-1.369-.49l-1.297-2.247a1.125 1.125 0 01.26-1.431l1.004-.827c.292-.24.437-.613.43-.992a6.932 6.932 0 010-.255c.007-.378-.138-.75-.43-.99l-1.004-.828a1.125 1.125 0 01-.26-1.43l1.297-2.247a1.125 1.125 0 011.37-.491l1.216.456c.356.133.751.072 1.076-.124.072-.044.146-.087.22-.128.332-.183.582-.495.644-.869l.214-1.281z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
    highDemand: false,
    category: "development"
  },
  {
    title: "Custom API Integration",
    description: "Connecting different software systems to create a unified workflow and seamless data exchange.",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className="w-6 h-6"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M13.5 16.875h3.375m0 0h3.375m-3.375 0V13.5m0 3.375v3.375M6 10.5h2.25a2.25 2.25 0 002.25-2.25V6a2.25 2.25 0 00-2.25-2.25H6A2.25 2.25 0 003.75 6v2.25A2.25 2.25 0 006 10.5zm0 9.75h2.25A2.25 2.25 0 0010.5 18v-2.25a2.25 2.25 0 00-2.25-2.25H6a2.25 2.25 0 00-2.25 2.25V18A2.25 2.25 0 006 20.25zm9.75-9.75H18a2.25 2.25 0 002.25-2.25V6A2.25 2.25 0 0018 3.75h-2.25A2.25 2.25 0 0013.5 6v2.25a2.25 2.25 0 002.25 2.25z"
        />
      </svg>
    ),
    category: "development"
  },
  
  // Marketing Category
  {
    title: "Email Marketing",
    description: "Targeted email campaigns that nurture leads, drive conversions, and strengthen customer relationships.",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className="w-6 h-6"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
        />
      </svg>
    ),
    highDemand: true,
    category: "marketing"
  },
  {
    title: "Digital Marketing Automation",
    description: "Implementing tools and workflows that automate marketing tasks, increasing efficiency and effectiveness.",
    icon: (
      <svg 
        xmlns="http://www.w3.org/2000/svg" 
        fill="none" 
        viewBox="0 0 24 24" 
        strokeWidth={1.5} 
        stroke="currentColor" 
        className="w-6 h-6"
      >
        <path strokeLinecap="round" strokeLinejoin="round" d="M7.5 14.25v2.25m3-4.5v4.5m3-6.75v6.75m3-9v9M6 20.25h12A2.25 2.25 0 0020.25 18V6A2.25 2.25 0 0018 3.75H6A2.25 2.25 0 003.75 6v12A2.25 2.25 0 006 20.25z" />
      </svg>
    ),
    highDemand: true,
    category: "marketing"
  },
  {
    title: "Lead Generation",
    description: "Strategies and tactics to attract and convert prospects into qualified leads for your business.",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className="w-6 h-6"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M12 3c2.755 0 5.455.232 8.083.678.533.09.917.556.917 1.096v1.044a2.25 2.25 0 01-.659 1.591l-5.432 5.432a2.25 2.25 0 00-.659 1.591v2.927a2.25 2.25 0 01-1.244 2.013L9.75 21v-6.568a2.25 2.25 0 00-.659-1.591L3.659 7.409A2.25 2.25 0 013 5.818V4.774c0-.54.384-1.006.917-1.096A48.32 48.32 0 0112 3z"
        />
      </svg>
    ),
    highDemand: true,
    category: "marketing"
  },
  {
    title: "Pay-Per-Click Advertising",
    description: "Strategic ad placement on search engines and social platforms to drive immediate traffic and leads.",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className="w-6 h-6"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M15 8.25H9m6 3H9m3 6l-3-3h1.5a3 3 0 100-6M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
        />
      </svg>
    ),
    highDemand: false,
    category: "marketing"
  },
  {
    title: "Social Media Marketing",
    description: "Building brand awareness and engagement through strategic social media presence and campaigns.",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className="w-6 h-6"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M20.25 8.511c.884.284 1.5 1.128 1.5 2.097v4.286c0 1.136-.847 2.1-1.98 2.193-.34.027-.68.052-1.02.072v3.091l-3-3c-1.354 0-2.694-.055-4.02-.163a2.115 2.115 0 01-.825-.242m9.345-8.334a2.126 2.126 0 00-.476-.095 48.64 48.64 0 00-8.048 0c-1.131.094-1.976 1.057-1.976 2.192v4.286c0 .837.46 1.58 1.155 1.951m9.345-8.334V6.637c0-1.621-1.152-3.026-2.76-3.235A48.455 48.455 0 0011.25 3c-2.115 0-4.198.137-6.24.402-1.608.209-2.76 1.614-2.76 3.235v6.226c0 1.621 1.152 3.026 2.76 3.235.577.075 1.157.14 1.74.194V21l4.155-4.155"
        />
      </svg>
    ),
    category: "marketing"
  },
  {
    title: "AI Marketing Agents",
    description: "Leveraging artificial intelligence to optimize marketing efforts and deliver personalized customer experiences.",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className="w-6 h-6"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 00-2.456 2.456zM16.894 20.567L16.5 21.75l-.394-1.183a2.25 2.25 0 00-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 001.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 001.423 1.423l1.183.394-1.183.394a2.25 2.25 0 00-1.423 1.423z"
        />
      </svg>
    ),
    highDemand: true,
    category: "marketing"
  }
];

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 },
};

function ServiceCard({ title, description, icon, highDemand }: ServiceProps) {
  return (
    <motion.div 
      variants={item}
      className="group flex flex-col p-6 bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 relative overflow-hidden"
    >
      {/* Subtle gradient background that appears on hover */}
      <div className="absolute inset-0 bg-gradient-to-br from-amber-50 to-orange-50 dark:from-amber-900/20 dark:to-orange-900/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
      
      <div className="mb-4 rounded-full bg-amber-50 dark:bg-amber-900/30 p-3 w-fit relative z-10">
        <div className="text-amber-600 dark:text-amber-400">{icon}</div>
      </div>
      
      <h3 className="text-xl font-semibold mb-2 group-hover:text-amber-600 dark:group-hover:text-amber-400 transition-colors relative z-10">{title}</h3>
      <p className="text-zinc-600 dark:text-zinc-400 text-sm relative z-10">{description}</p>
      
      {/* FOMO badge - limited spots or high demand indicator - always visible if highDemand is true */}
      {highDemand && (
        <div className="absolute top-3 right-3 bg-red-100 dark:bg-red-900/50 text-red-600 dark:text-red-400 text-xs py-1 px-2 rounded-full font-medium z-10 flex items-center">
          <span className="relative flex h-2 w-2 mr-1">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-red-600"></span>
          </span>
          High demand
        </div>
      )}
      
      {/* Arrow indicator for clickability */}
      <div className="mt-4 flex justify-end relative z-10 opacity-0 group-hover:opacity-100 transition-opacity">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-amber-500" viewBox="0 0 20 20" fill="currentColor">
          <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
        </svg>
      </div>
    </motion.div>
  );
}

export default function WhatWeDo() {
  const [activeCategory, setActiveCategory] = React.useState<'all' | 'development' | 'marketing'>('all');
  const [currentPage, setCurrentPage] = React.useState(1);
  const itemsPerPage = 6; // 2x3 grid
  
  // Filter services based on category
  const filteredServices = React.useMemo(() => {
    if (activeCategory === 'all') return services;
    return services.filter(service => service.category === activeCategory);
  }, [activeCategory]);
  
  // Calculate pagination
  const totalPages = Math.ceil(filteredServices.length / itemsPerPage);
  const currentServices = React.useMemo(() => {
    const startIndex = (currentPage - 1) * itemsPerPage;
    return filteredServices.slice(startIndex, startIndex + itemsPerPage);
  }, [filteredServices, currentPage]);
  
  // Handle category change
  const handleCategoryChange = (category: 'all' | 'development' | 'marketing') => {
    setActiveCategory(category);
    setCurrentPage(1); // Reset to first page when changing category
  };
  
  return (
    <section className="w-full py-16 md:py-24 relative overflow-hidden bg-gradient-to-b from-white to-amber-50 dark:from-zinc-950 dark:to-zinc-900" id="what-we-do">
      {/* Background decorative elements - different from How We Help */}
      <div className="absolute top-10 right-10 w-64 h-64 bg-orange-200/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-10 left-10 w-64 h-64 bg-amber-200/10 rounded-full blur-3xl"></div>
      <div className="absolute -bottom-20 right-0 w-96 h-96 bg-amber-100/5 rounded-full blur-3xl"></div>
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="mb-12 md:mb-20">
          <div className="flex justify-center mb-4">
            <span className="inline-flex items-center px-3 py-1.5 rounded-full text-sm font-medium bg-orange-100 text-orange-800 dark:bg-orange-900/40 dark:text-orange-400">
              <span className="relative inline-flex rounded-full h-2 w-2 bg-orange-600 mr-2"></span>
              Limited availability for new clients this month
            </span>
          </div>
          
          <div className="bg-white dark:bg-zinc-800 rounded-2xl p-8 md:p-12 shadow-lg border border-zinc-100 dark:border-zinc-700 max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold tracking-tighter md:text-5xl/tight text-center mb-6">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-600 to-orange-600 dark:from-amber-500 dark:to-orange-500">
                What We Do
              </span>
            </h2>
            <p className="mx-auto max-w-[600px] text-center text-zinc-600 md:text-xl/relaxed dark:text-zinc-300 mb-10">
              Our comprehensive suite of digital services designed to help your business transform and grow in the digital landscape.
            </p>
            
            <div className="flex justify-center">
              <div className="inline-flex space-x-2 bg-amber-50/50 dark:bg-amber-900/20 rounded-full p-1 mb-10">
                <button 
                  className={`px-4 py-2 rounded-full ${activeCategory === 'all' ? 'bg-amber-100 text-amber-900 dark:bg-amber-800 dark:text-amber-100 font-medium shadow-sm' : 'text-zinc-700 dark:text-zinc-300 hover:bg-amber-100/50 dark:hover:bg-amber-800/50'} transition-colors duration-200`}
                  onClick={() => handleCategoryChange('all')}
                >
                  All Services
                </button>
                <button 
                  className={`px-4 py-2 rounded-full ${activeCategory === 'development' ? 'bg-amber-100 text-amber-900 dark:bg-amber-800 dark:text-amber-100 font-medium shadow-sm' : 'text-zinc-700 dark:text-zinc-300 hover:bg-amber-100/50 dark:hover:bg-amber-800/50'} transition-colors duration-200`}
                  onClick={() => handleCategoryChange('development')}
                >
                  Development
                </button>
                <button 
                  className={`px-4 py-2 rounded-full ${activeCategory === 'marketing' ? 'bg-amber-100 text-amber-900 dark:bg-amber-800 dark:text-amber-100 font-medium shadow-sm' : 'text-zinc-700 dark:text-zinc-300 hover:bg-amber-100/50 dark:hover:bg-amber-800/50'} transition-colors duration-200`}
                  onClick={() => handleCategoryChange('marketing')}
                >
                  Marketing
                </button>
              </div>
            </div>
            
            <motion.div 
              variants={container}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.2 }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
            >
              {currentServices.map((service, index) => (
                <ServiceCard
                  key={index}
                  title={service.title}
                  description={service.description}
                  icon={service.icon}
                  highDemand={service.highDemand}
                  category={service.category}
                />
              ))}
            </motion.div>
            
            {/* Pagination */}
            {totalPages > 1 && (
              <div className="flex justify-center mt-10 space-x-2">
                {Array.from({ length: totalPages }, (_, i) => i + 1).map(page => (
                  <button
                    key={page}
                    onClick={() => setCurrentPage(page)}
                    className={`w-10 h-10 rounded-full flex items-center justify-center ${currentPage === page ? 'bg-amber-500 text-white' : 'bg-amber-100/50 text-amber-900 hover:bg-amber-200/70'} transition-colors`}
                  >
                    {page}
                  </button>
                ))}
              </div>
            )}
          </div>
        </div>
        
        {/* Client counter - FOMO element */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="mt-16 bg-gradient-to-r from-teal-50 to-amber-50 dark:from-zinc-900 dark:to-zinc-800 p-6 rounded-xl shadow-sm text-center"
        >
          <p className="text-zinc-700 dark:text-zinc-300 font-medium">
            <span className="text-teal-600 dark:text-teal-400 font-bold">97%</span> of our clients see measurable results within <span className="text-amber-600 dark:text-amber-400 font-bold">30 days</span>
          </p>
          <div className="w-full bg-zinc-200 dark:bg-zinc-700 h-2 mt-2 rounded-full overflow-hidden">
            <div className="bg-gradient-to-r from-teal-500 to-amber-500 h-full rounded-full" style={{ width: '97%' }}></div>
          </div>
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.5 }}
          className="mt-16 text-center"
        >
          <div className="inline-block bg-amber-50 dark:bg-amber-900/20 border border-amber-200 dark:border-amber-800/30 rounded-full px-4 py-1.5 text-amber-700 dark:text-amber-400 text-sm font-medium mb-4">
            <span className="mr-1">🔥</span> Get yours now and transform your business
          </div>
          <div>
            <a
              href="#cta"
              className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-teal-600 to-teal-700 hover:from-teal-700 hover:to-teal-800 text-white font-medium rounded-lg shadow-lg hover:shadow-xl transition-all duration-200 transform hover:scale-105"
              onClick={(e) => {
                e.preventDefault();
                document.getElementById('cta')?.scrollIntoView({ behavior: 'smooth' });
              }}
            >
              <span>Schedule a Free Consultation</span>
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
