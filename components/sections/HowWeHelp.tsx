"use client";
import React, { useState, useRef, useEffect } from "react";
import { motion, useInView } from "framer-motion";
import { cn } from "@/lib/utils";
import TiltCard from "@/components/ui/tilt-card";
import AnimatedBackground from "@/components/ui/animated-background";
import ClientOnly from "@/components/ui/client-only";

interface FeatureProps {
  title: string;
  description: string;
  icon: React.ReactNode;
}

const features: FeatureProps[] = [
  {
    title: "Optimized Landing Pages",
    description: "We design and develop high-converting landing pages that turn visitors into customers with industry-leading optimization techniques.",
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
          d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5m-9-6h.008v.008H12v-.008zM12 15h.008v.008H12V15zm0 2.25h.008v.008H12v-.008zM9.75 15h.008v.008H9.75V15zm0 2.25h.008v.008H9.75v-.008zM7.5 15h.008v.008H7.5V15zm0 2.25h.008v.008H7.5v-.008zm6.75-4.5h.008v.008h-.008v-.008zm0 2.25h.008v.008h-.008V15zm0 2.25h.008v.008h-.008v-.008zm2.25-4.5h.008v.008H16.5v-.008zm0 2.25h.008v.008H16.5V15z"
        />
      </svg>
    ),
  },
  {
    title: "Mobile App Development",
    description: "We create intuitive mobile applications that connect your customers with your business, enhancing engagement and loyalty.",
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
          d="M10.5 1.5H8.25A2.25 2.25 0 006 3.75v16.5a2.25 2.25 0 002.25 2.25h7.5A2.25 2.25 0 0018 20.25V3.75a2.25 2.25 0 00-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-3 18.75h3"
        />
      </svg>
    ),
  },
  {
    title: "Automation Systems",
    description: "We implement powerful automation solutions that streamline your customer outreach, saving time and increasing effectiveness.",
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
          d="M3.75 12h16.5m-16.5 3.75h16.5M3.75 19.5h16.5M5.625 4.5h12.75a1.875 1.875 0 010 3.75H5.625a1.875 1.875 0 010-3.75z"
        />
      </svg>
    ),
  },
  {
    title: "Conversion Optimization",
    description: "We employ data-driven techniques to optimize your digital assets for maximum conversion rates and business growth.",
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
          d="M2.25 18L9 11.25l4.306 4.307a11.95 11.95 0 015.814-5.519l2.74-1.22m0 0l-5.94-2.28m5.94 2.28l-2.28 5.941"
        />
      </svg>
    ),
  },
  {
    title: "Customer Journey Mapping",
    description: "We design seamless customer experiences across all touchpoints, ensuring a cohesive and engaging journey for your users.",
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
          d="M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 018.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0111.964-3.07M12 6.375a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zm8.25 2.25a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z"
        />
      </svg>
    ),
  },
  {
    title: "Performance Analytics",
    description: "We provide comprehensive analytics and reporting to measure the success of your digital initiatives and drive continuous improvement.",
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
          d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z"
        />
      </svg>
    ),
  },
];

export function FeatureItem({
  title,
  description,
  icon,
  className,
}: FeatureProps & { className?: string }) {
  const [isHovered, setIsHovered] = useState(false);
  
  return (
    <motion.div
      initial={{ opacity: 0, y: 25 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: "easeInOut" }}
      className={cn(
        "group relative overflow-hidden p-6 rounded-xl border border-teal-200 bg-white shadow-sm transition-all duration-200 hover:shadow-md dark:border-teal-900 dark:bg-zinc-900",
        className
      )}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Desktop: Use 3D tilt effect */}
      <div className="hidden md:block h-full">
        <TiltCard>
          <FeatureContent 
            title={title} 
            description={description} 
            icon={icon} 
            isHovered={isHovered} 
          />
        </TiltCard>
      </div>
      
      {/* Mobile: Normal display without tilt (for better performance) */}
      <div className="block md:hidden">
        <FeatureContent 
          title={title} 
          description={description} 
          icon={icon} 
          isHovered={isHovered} 
        />
      </div>
      
      {/* Subtle animated gradient on hover */}
      <motion.div 
        className="absolute inset-0 bg-gradient-to-tr from-teal-500/10 to-amber-500/10 opacity-0 pointer-events-none z-0"
        animate={{ opacity: isHovered ? 1 : 0 }}
        transition={{ duration: 0.3 }}
      />
    </motion.div>
  );
}

function FeatureContent({ 
  title, 
  description, 
  icon, 
  isHovered 
}: { 
  title: string; 
  description: string; 
  icon: React.ReactNode; 
  isHovered: boolean 
}) {
  return (
    <div className="space-y-4 z-10 relative">
      <motion.div 
        className="flex items-center gap-3"
        animate={{ 
          scale: isHovered ? 1.05 : 1,
        }}
        transition={{ type: "spring", stiffness: 300, damping: 20 }}
      >
        <motion.div 
          className="rounded-full bg-teal-50 p-3 text-teal-600 dark:bg-teal-900/20 dark:text-teal-400"
          animate={{ 
            rotate: isHovered ? [0, -5, 5, -5, 0] : 0,
            scale: isHovered ? 1.1 : 1
          }}
          transition={{ 
            duration: 0.6, 
            ease: "easeInOut",
            delay: 0.1
          }}
        >
          {icon}
        </motion.div>
        <h3 className="text-lg font-semibold group-hover:text-teal-600 dark:group-hover:text-teal-400 transition-colors">
          {title}
        </h3>
      </motion.div>
      <p className="text-sm text-zinc-600 dark:text-zinc-400">{description}</p>
    </div>
  );
}

function HowWeHelpContent() {
  const containerRef = React.useRef<HTMLDivElement>(null);
  
  // Growth journey steps
  const growthSteps = [
    {
      number: "01",
      title: "Discover Your Potential",
      description: "We start by understanding your current strengths and identifying untapped opportunities to accelerate your digital growth.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
          <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18L9 11.25l4.306 4.307a11.95 11.95 0 015.814-5.519l2.74-1.22m0 0l-5.94-2.28m5.94 2.28l-2.28 5.941" />
        </svg>
      ),
      benefit: "69% faster strategic planning",
      color: "from-teal-500/80 to-amber-500/80",
      fomo: "Your competitors will identify growth opportunities before you can react"
    },
    {
      number: "02",
      title: "Create Your Growth Plan",
      description: "We develop tailored digital solutions that amplify your strengths and position your business for exponential growth.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
          <path strokeLinecap="round" strokeLinejoin="round" d="M11.42 15.17L17.25 21A2.652 2.652 0 0021 17.25l-5.877-5.877M11.42 15.17l2.496-3.03c.317-.384.74-.626 1.208-.766M11.42 15.17l-4.655 5.653a2.548 2.548 0 11-3.586-3.586l6.837-5.63m5.108-.233c.55-.164 1.163-.188 1.743-.14a4.5 4.5 0 004.486-6.336l-3.276 3.277a3.004 3.004 0 01-2.25-2.25l3.276-3.276a4.5 4.5 0 00-6.336 4.486c.091 1.076-.071 2.264-.904 2.95l-.102.085m-1.745 1.437L5.909 7.5H4.5L2.25 3.75l1.5-1.5L7.5 4.5v1.409l4.26 4.26m-1.745 1.437l1.745-1.437m6.615 8.206L15.75 15.75M4.867 19.125h.008v.008h-.008v-.008z" />
        </svg>
      ),
      benefit: "85% improvement in growth trajectory",
      color: "from-amber-500/80 to-teal-500/80",
      fomo: "You'll waste resources on uncoordinated initiatives that don't generate meaningful ROI"
    },
    {
      number: "03",
      title: "Implement & Accelerate",
      description: "We seamlessly integrate new solutions with your existing systems, ensuring a smooth transition that accelerates your business momentum.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
          <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 12h16.5m-16.5 3.75h16.5M3.75 19.5h16.5M5.625 4.5h12.75a1.875 1.875 0 010 3.75H5.625a1.875 1.875 0 010-3.75z" />
        </svg>
      ),
      benefit: "93% of clients report 'accelerated growth'",
      color: "from-teal-500/80 to-amber-500/80",
      fomo: "Your implementation will stall, causing disruption to your business and customer experience"
    },
    {
      number: "04",
      title: "Optimize & Scale",
      description: "We provide ongoing optimization and support to ensure your business can scale efficiently and continue reaching new heights.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
          <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18L9 11.25l4.306 4.307a11.95 11.95 0 015.814-5.519l2.74-1.22m0 0l-5.94-2.28m5.94 2.28l-2.28 5.941" />
        </svg>
      ),
      benefit: "75% increase in scalability potential",
      color: "from-amber-500/80 to-teal-500/80",
      fomo: "Your business will hit a growth ceiling as manual processes become overwhelmed by increased demand"
    }
  ];
  
  // Business outcomes
  const outcomes = [
    { icon: "⏱️", title: "Time Saved", value: "36", unit: "hours/week", description: "Average time saved per business with our solutions" },
    { icon: "💰", title: "Revenue Growth", value: "47", unit: "%", description: "Average revenue increase within 6 months for our clients" },
    { icon: "⚡", title: "Efficiency Gain", value: "3.2", unit: "×", description: "Average improvement in operational efficiency" }
  ];
  
  return (
    <section className="w-full py-16 md:py-24 bg-gradient-to-br from-amber-50 via-white to-teal-50 dark:from-zinc-950 dark:via-zinc-900 dark:to-zinc-800 relative overflow-hidden" id="how-we-help">
      {/* Background decoration - more subtle */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Subtle gradient circles */}
        <div className="absolute top-10 left-0 w-72 h-72 bg-gradient-to-br from-teal-200/20 to-amber-200/20 rounded-full blur-3xl transform -translate-x-1/2"></div>
        <div className="absolute top-1/4 right-0 w-96 h-96 bg-gradient-to-bl from-amber-200/10 to-teal-200/10 rounded-full blur-3xl transform translate-x-1/3"></div>
        <div className="absolute bottom-20 left-1/3 w-64 h-64 bg-gradient-to-tr from-teal-200/10 to-amber-200/10 rounded-full blur-3xl"></div>
      </div>  
      {/* Main content container */}
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <motion.div 
          className="mb-16 space-y-4 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <div className="inline-flex items-center justify-center mb-4">
            <span className="px-3 py-1 text-xs font-medium bg-amber-100 text-amber-800 dark:bg-amber-900/40 dark:text-amber-400 rounded-full">
              ELEVATE YOUR BUSINESS
            </span>
          </div>
          
          <h2 className="text-3xl font-bold tracking-tighter md:text-5xl lg:text-6xl max-w-3xl mx-auto">
            <span className="text-amber-600 dark:text-amber-400">Elevate</span> your business to new heights
          </h2>
          
          <p className="mx-auto max-w-[700px] text-zinc-600 md:text-xl lg:text-2xl dark:text-zinc-400 mt-4">
            We help you unlock your business's full potential, maximize your strengths, and focus on what truly matters: <span className="text-amber-600 dark:text-amber-400 font-medium">reaching new heights</span>.
          </p>
        </motion.div>
        
        {/* Growth journey - Mobile-friendly steps */}
        <div className="max-w-5xl mx-auto mb-20 relative">
          {/* Connection line (hidden on mobile) */}
          <div className="absolute top-0 bottom-0 left-1/2 w-0.5 bg-gradient-to-b from-teal-500 to-amber-500 transform -translate-x-1/2 hidden md:block"></div>
          
          {/* Growth journey steps */}
          <div className="space-y-12 md:space-y-24 relative z-10">
            {growthSteps.map((step, index) => (
              <motion.div 
                key={step.number}
                className={`flex flex-col ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} items-center gap-6 md:gap-12`}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true, margin: "-100px" }}
              >
                {/* Step number and icon */}
                <div className="md:w-1/3 flex flex-col items-center md:items-start text-center md:text-left">
                  <div className={`relative flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br ${step.color} shadow-lg mb-4 text-white`}>
                    <span className="absolute -top-2 -right-2 bg-white dark:bg-zinc-900 text-amber-600 dark:text-amber-400 text-xs font-bold rounded-full w-6 h-6 flex items-center justify-center shadow-sm">
                      {step.number}
                    </span>
                    <div className="w-6 h-6">{step.icon}</div>
                  </div>
                  <h3 className="text-xl font-bold mb-2">{step.title}</h3>
                  <div className="bg-gradient-to-r from-amber-200 to-teal-200 dark:from-amber-900/30 dark:to-teal-900/30 px-3 py-1 rounded-full text-xs font-medium text-amber-800 dark:text-amber-300 inline-flex items-center mb-4">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3 mr-1" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    {step.benefit}
                  </div>
                </div>
                
                {/* Description */}
                <div className="md:w-2/3 bg-white dark:bg-zinc-800/80 rounded-xl p-6 shadow-lg border border-zinc-100 dark:border-zinc-700">
                  <p className="text-zinc-700 dark:text-zinc-300">{step.description}</p>
                  <div className="mt-4 bg-zinc-50 dark:bg-zinc-900/50 border border-zinc-100 dark:border-zinc-800 p-3 rounded-lg">
                    <p className="text-sm text-zinc-600 dark:text-zinc-400 font-medium flex items-start">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-red-500 mr-2 flex-shrink-0 mt-0.5" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                      </svg>
                      Without this: {step.fomo}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
        
        {/* Business outcomes - Mobile friendly cards in a slider-like layout */}
        <motion.div 
          className="mb-10"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >
          <h3 className="text-2xl md:text-3xl font-bold text-center mb-10">
            Measurable <span className="bg-clip-text text-transparent bg-gradient-to-r from-amber-500/80 to-teal-500/80">Growth Results</span>
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {outcomes.map((outcome, index) => (
              <motion.div 
                key={index} 
                className="bg-white dark:bg-zinc-800 rounded-xl shadow-lg overflow-hidden border border-zinc-100 dark:border-zinc-700 h-full flex flex-col"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                viewport={{ once: true }}
              >
                <div className="bg-white dark:bg-zinc-800 p-4 text-center border-b">
                  <span className="text-4xl">{outcome.icon}</span>
                  <h4 className="font-bold mt-2 bg-clip-text text-transparent bg-gradient-to-r from-amber-500/80 to-teal-500/80">{outcome.title}</h4>
                </div>
                <div className="p-6 text-center flex-grow flex flex-col justify-center items-center">
                  <div className="flex items-baseline justify-center mb-4">
                    <span className="text-4xl md:text-5xl font-bold text-amber-600 dark:text-amber-400">{outcome.value}</span>
                    <span className="text-lg md:text-xl text-zinc-500 dark:text-zinc-400 ml-1">{outcome.unit}</span>
                  </div>
                  <p className="text-zinc-600 dark:text-zinc-400 text-sm">{outcome.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
        
        {/* Mobile-friendly CTA */}
        <motion.div 
          className="bg-white dark:bg-zinc-800 border border-zinc-100 dark:border-zinc-700 rounded-2xl p-8 md:p-12 text-center shadow-xl max-w-4xl mx-auto"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <h3 className="text-2xl md:text-3xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-amber-500 to-teal-500">
            Ready to reach new heights?
          </h3>
          <p className="mb-8 max-w-2xl mx-auto text-zinc-700 dark:text-zinc-300">
            Book a free consultation and we'll help you unlock your business's full potential.
          </p>
          
          <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
            <a 
              href="#cta" 
              className="px-6 py-3 bg-gradient-to-r from-amber-500/90 to-teal-500/90 text-white font-medium rounded-lg shadow-md hover:shadow-lg transition-all duration-200 w-full sm:w-auto flex items-center justify-center"
              onClick={(e) => {
                e.preventDefault();
                document.getElementById('cta')?.scrollIntoView({ behavior: 'smooth' });
              }}
            >
              <span>Get Started</span>
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
            </a>
            <a 
              href="#what-we-do" 
              className="px-6 py-3 bg-transparent border border-amber-500 text-amber-600 dark:text-amber-400 font-medium rounded-lg hover:bg-amber-50 dark:hover:bg-amber-900/10 transition-all duration-200 w-full sm:w-auto"
            >
              Explore Solutions
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

// Animated counter component
function StatCounter({ label, end, suffix = "" }: { label: string; end: number; suffix?: string }) {
  // Safe counter that only runs on client
  const [count, setCount] = useState(0);
  const nodeRef = useRef(null);
  const isInView = useInView(nodeRef, { once: true, amount: 0.5 });
  
  // Animation effect - only runs on client
  useEffect(() => {
    if (isInView) {
      let start = 0;
      const duration = 2000;
      const increment = end / (duration / 16); // 60fps
      
      const timer = setInterval(() => {
        start += increment;
        if (start > end) {
          setCount(end);
          clearInterval(timer);
        } else {
          setCount(Math.floor(start));
        }
      }, 16);
      
      return () => clearInterval(timer);
    }
  }, [isInView, end]);
  
  return (
    <div ref={nodeRef} className="p-4 text-center">
      <motion.div 
        className="text-2xl md:text-3xl font-bold text-teal-600 dark:text-teal-400"
        initial={{ opacity: 0, scale: 0.5 }}
        animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.5 }}
        transition={{ duration: 0.5, type: "spring" }}
      >
        {count}{suffix}
      </motion.div>
      <p className="text-sm text-zinc-600 dark:text-zinc-400 mt-1">{label}</p>
    </div>
  );
}

// Export with ClientOnly wrapper to prevent hydration issues
export default function HowWeHelp() {
  return (
    <ClientOnly>
      <HowWeHelpContent />
    </ClientOnly>
  );
}
