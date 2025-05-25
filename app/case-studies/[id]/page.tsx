"use client";

import { useParams } from "next/navigation";
import { useState, useEffect, useRef } from "react";
import Header from "@/components/ui/header";
import Footer from "@/components/ui/footer";
import Link from "next/link";
import { motion, useInView, useScroll, useTransform, AnimatePresence } from "framer-motion";

interface CaseStudy {
  id: string;
  title: string;
  client: string;
  industry: string;
  service: string;
  summary: string;
  challenge: string;
  solution: string;
  results: string[];
  image: string;
  logoColor?: string;
  implementationDetails?: string[];
  technicalChallenges?: string[];
  technicalSolutions?: string[];
  deliveryHighlights?: string[];
  timeline?: string;
  teamSize?: string;
  testimonial?: {
    quote: string;
    author: string;
    position: string;
  };
}

// This data is duplicated from the case-studies page. In a real application, you would likely
// fetch this from an API or a shared data store to avoid duplication.
const caseStudies: CaseStudy[] = [
  {
    id: "lead-generation-automation",
    title: "Lead Generation & Outreach Automation",
    client: "B2B Software Consultancy",
    industry: "Technology Consulting",
    service: "Automation",
    summary: "Implemented an AI-powered lead generation and outreach system that significantly increased qualified leads and boosted revenue by 67% within six months. This ongoing partnership continues to deliver results today.",
    challenge: "The client was struggling with inconsistent lead generation and manual outreach processes. Their sales team spent too much time on administrative tasks instead of building relationships. Leads were falling through the cracks, and follow-up was inconsistent. Their existing CRM was underutilized and data quality was poor, making it difficult to track the sales pipeline accurately.",
    solution: "We designed and implemented a comprehensive AI-driven lead generation system that integrated with their existing CRM. The solution includes multi-channel lead capture forms, AI-powered lead scoring, intelligent outreach automation, personalized email sequences, and AI-based follow-up scheduling that adapts based on prospect engagement patterns.",
    results: [
      "67% increase in quarterly revenue",
      "3.5x more qualified leads per month",
      "85% reduction in manual outreach tasks",
      "41% higher conversion rate from lead to customer",
      "Sales team able to handle 2.8x more prospects with the same headcount"
    ],
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&h=500&q=80",
    logoColor: "#4A90E2",
    implementationDetails: [
      "Conducted a thorough audit of existing CRM data and sales processes to identify bottlenecks and opportunities",
      "Implemented CRM integration with AI-powered lead scoring algorithms that continuously learn from conversion patterns",
      "Created dynamic email templates with AI-driven personalization that adapts based on recipient engagement",
      "Developed custom web forms with progressive profiling and AI lead qualification to increase lead quality",
      "Built automated workflows with AI lead routing that directs prospects to the appropriate team members based on intent signals, industry, and deal size"
    ],
    technicalChallenges: [
      "CRM data quality was poor with over 40% of records containing duplicate or incomplete information",
      "Existing email marketing platform had limited API capabilities, making integration difficult",
      "Client required the solution to maintain GDPR compliance while scaling lead generation efforts",
      "Sales team was resistant to learning new tools or changing established processes"
    ],
    technicalSolutions: [
      "Implemented an ETL process using Python and ML algorithms to clean, deduplicate, and enrich CRM data",
      "Built a custom middleware layer with AI data synchronization to overcome API limitations",
      "Created a comprehensive GDPR compliance system with AI-monitored consent tracking",
      "Developed AI-assisted lead scoring models that continuously improve based on conversion data",
      "Implemented natural language processing for email sentiment analysis to optimize outreach timing"
    ],
    deliveryHighlights: [
      "Launched lead capture forms within 2 weeks, allowing immediate data collection while the rest of the system was being built",
      "Implemented CRM integration with basic lead routing by week 4, giving the sales team early access to improved workflows",
      "Delivered email automation sequences in phases, with the first set going live after just 6 weeks",
      "Provided weekly progress dashboards showing the impact of each new feature as it was deployed",
      "Conducted iterative training sessions that allowed the team to start using new features immediately after delivery"
    ],
    timeline: "Initial deployment: 2 weeks, Full implementation: 3 months, Ongoing partnership: Present",
    teamSize: "Key skills: AI Lead Scoring, CRM Integration, Marketing Automation, NLP, Machine Learning",
    testimonial: {
      quote: "The AI-powered automation solution brapo built transformed our sales process. We're now converting more leads with less effort, and our sales team can focus on what they do best - building relationships and closing deals. The ROI has been exceptional, which is why we continue our partnership today as they still generate high-quality leads for us month after month.",
      author: "Vladimir Antonoski",
      position: "CEO, Audacity One"
    }
  },
  {
    id: "car-rental-crm-implementation",
    title: "CRM System for Car Rental Business",
    client: "EuroRent Cars",
    industry: "Automotive",
    service: "Automation",
    summary: "Developed and implemented a custom CRM solution for a car rental company that streamlined operations, provided robust KPI tracking, and optimized their fleet investment decisions.",
    challenge: "The client was managing their entire car rental operation through spreadsheets and paper records. They lacked visibility into key metrics like fleet utilization, maintenance schedules, and customer preferences. Investment decisions were made on gut feeling rather than data. With multiple locations across three countries, coordination was becoming increasingly problematic, and they were losing potential bookings due to inefficient inventory management.",
    solution: "We built a comprehensive CRM system tailored to their specific needs, with modules for reservation management, fleet tracking, maintenance scheduling, customer history, and financial reporting. The system provided real-time dashboards and automated alerts for critical KPIs.",
    results: [
      "28% reduction in operational costs",
      "Fleet utilization improved from 64% to 89%",
      "Maintenance costs reduced by 32% through preventative scheduling",
      "ROI-based fleet investment decisions led to 18% higher profit margins",
      "Customer retention increased by 40% through data-driven loyalty programs"
    ],
    image: "https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&h=500&q=80",
    logoColor: "#E74C3C",
    implementationDetails: [
      "Conducted comprehensive business process analysis across all rental locations to identify operational inefficiencies",
      "Designed a centralized database architecture with location-specific views while maintaining global inventory visibility",
      "Implemented a multi-tier reservation system with real-time inventory updates across all locations",
      "Developed a predictive maintenance module that tracked vehicle metrics and scheduled service based on usage patterns",
      "Created custom reporting dashboards for different stakeholders (operations, finance, management) with role-based access controls"
    ],
    technicalChallenges: [
      "Legacy data existed in multiple incompatible formats (Excel, paper records, local Access databases)",
      "Internet connectivity at some rural locations was unreliable, risking data synchronization issues",
      "Multi-currency and multi-language requirements for operations across three countries",
      "Complex booking rules varied by location, vehicle type, season, and customer segment"
    ],
    technicalSolutions: [
      "Created a custom ETL pipeline that consolidated and validated data from disparate sources during migration",
      "Implemented an offline-first architecture with local caching and automatic synchronization when connectivity resumed",
      "Developed a flexible localization system with automatic currency conversion and language detection",
      "Built a rules engine that could handle complex booking logic while remaining maintainable and configurable"
    ],
    deliveryHighlights: [
      "Deployed the reservation management module within the first 8 weeks, enabling immediate use while other features were developed", 
      "Implemented location-specific dashboards in stages, with priority locations getting access first",
      "Delivered the mobile app for field staff after 12 weeks, allowing for real-time vehicle inspections",
      "Provided bi-weekly data migration updates that incrementally improved data quality and completeness",
      "Conducted phased training for each location as their specific system components were ready to use"
    ],
    timeline: "Core reservation system: 8 weeks, Full system with all modules: 6 months",
    teamSize: "Key skills: Database Architecture, UI/UX Design, Frontend Development, Backend Integration, DevOps",
    testimonial: {
      quote: "The CRM system digitrail built for us has completely transformed our business. We now have visibility into our operations that we never thought possible. The system has paid for itself several times over through improved fleet management alone.",
      author: "Filip Andrejic",
      position: "CEO, BGDiplomat"
    }
  },
  {
    id: "barber-shop-mobile-app",
    title: "Barber Shop Mobile App Development",
    client: "Dos Hermanos Barbers",
    industry: "Personal Services",
    service: "Development",
    summary: "Created a custom mobile app for a premium barber shop that revolutionized their scheduling system, increased client retention by 70%, and boosted average revenue per customer.",
    challenge: "The client was losing business due to an inefficient appointment booking system. Clients had to call during business hours to book appointments, leading to missed opportunities and no-shows. They also lacked a way to build customer loyalty or promote additional services. As a high-end establishment, they needed a solution that matched their premium brand while remaining intuitive for clients of all ages.",
    solution: "We developed a custom mobile app with real-time appointment scheduling, barber selection, service browsing, and integrated payment processing. The app included a loyalty program, personalized style recommendations based on past visits, and push notifications for appointment reminders and promotions.",
    results: [
      "70% improvement in client retention",
      "89% reduction in no-show appointments",
      "24/7 booking capability increased total appointments by 35%",
      "22% increase in average spending per visit through upselling features",
      "Staff efficiency improved by 40% with optimized scheduling"
    ],
    image: "https://images.unsplash.com/photo-1503951914875-452162b0f3f1?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&h=500&q=80",
    logoColor: "#27AE60",
    implementationDetails: [
      "Week 1-2: Released first working version with basic appointment booking capability, which the client immediately put into use",
      "Week 3-4: Client was so impressed they requested additional features beyond the original scope",
      "Week 5-6: Added service time values for each type of haircut/treatment to enable precise scheduling and maximize barber efficiency",
      "Week 7-8: Implemented push notifications for appointment reminders and sync with Google Calendar for both barbers and customers",
      "Week 9-12: Added WhatsApp and Viber automated outreach to re-engage past customers, which increased repeat business by 53%"
    ],
    technicalChallenges: [
      "Existing booking data was stored in a proprietary POS system with no official API",
      "Barbers needed a simple interface that wouldn't disrupt their workflow during busy periods",
      "Client base included many older customers who were less comfortable with mobile technology",
      "Required real-time synchronization between multiple barbers' schedules to prevent double-booking"
    ],
    technicalSolutions: [
      "Reverse-engineered the POS system's data format and created a custom adapter to extract booking history",
      "Developed a streamlined barber interface with large, clear buttons and minimal input requirements",
      "Implemented an industry-leading UX with high contrast, larger text options, and simplified navigation paths",
      "Built a real-time scheduling engine using Firebase, ensuring all devices stayed in sync instantly"
    ],
    deliveryHighlights: [
      "Launched a functional booking app in just 2 weeks that the shop started using immediately with select VIP clients",
      "Expanded features based on client enthusiasm for the initial version, adding more capabilities than originally scoped",
      "Created a dynamic scheduling algorithm that accounted for varying service durations, maximizing barber productivity",
      "Integrated with popular calendar platforms allowing clients to add appointments directly to their digital calendars",
      "Implemented WhatsApp and Viber integration that automatically reminded customers of upcoming appointments and suggested booking if they hadn't visited in a while"
    ],
    timeline: "Initial version: 2 weeks, Full feature set: 3 months",
    teamSize: "Key skills: Mobile UI/UX, Backend Integration, Real-time Database Management, Payment Processing",
    testimonial: {
      quote: "Our clients absolutely love the app. It's not just made our lives easier by automating bookings—it's actually become a differentiator that sets us apart from other barber shops in the area. The style recommendations have been particularly popular, driving additional service revenue we weren't capturing before.",
      author: "Janko Srdic",
      position: "Owner, Dos Hermanos Barbers"
    }
  }
];

// Animated counter component for statistics
const AnimatedCounter = ({ value, label, prefix = "", suffix = "", color = "amber" }: { 
  value: number | string, 
  label: string, 
  prefix?: string, 
  suffix?: string,
  color?: string 
}) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const [count, setCount] = useState(0);
  
  // Convert string values like "3.5x" to numbers
  const numericValue = typeof value === 'string' ? 
    parseFloat(value.replace(/[^\d.]/g, '')) : value;
  
  useEffect(() => {
    if (isInView) {
      let startValue = 0;
      const endValue = numericValue;
      const duration = 2000;
      const startTime = Date.now();
      
      const timer = setInterval(() => {
        const currentTime = Date.now();
        const elapsedTime = currentTime - startTime;
        const progress = Math.min(elapsedTime / duration, 1);
        
        // Use easeOutQuart for smoother animation
        const easeOut = 1 - Math.pow(1 - progress, 4);
        const currentValue = startValue + (endValue - startValue) * easeOut;
        
        setCount(currentValue);
        
        if (progress === 1) clearInterval(timer);
      }, 16);
      
      return () => clearInterval(timer);
    }
  }, [isInView, numericValue]);
  
  // Format the displayed value
  const displayValue = typeof value === 'string' && value.includes('x') ?
    `${count.toFixed(1)}x` : `${prefix}${count.toFixed(numericValue % 1 === 0 ? 0 : 1)}${suffix}`;
  
  let colorClass = "";
  switch(color) {
    case "amber":
      colorClass = "from-amber-500 to-amber-600";
      break;
    case "teal":
      colorClass = "from-teal-500 to-teal-600";
      break;
    case "blue":
      colorClass = "from-blue-500 to-blue-600";
      break;
    case "red":
      colorClass = "from-red-500 to-red-600";
      break;
    case "green":
      colorClass = "from-green-500 to-green-600";
      break;
    default:
      colorClass = "from-amber-500 to-amber-600";
  }
  
  return (
    <div ref={ref} className="flex flex-col items-center p-6 bg-white dark:bg-zinc-800 rounded-xl shadow-md">
      <div className={`text-3xl md:text-4xl font-bold bg-gradient-to-r ${colorClass} bg-clip-text text-transparent`}>
        {isInView ? displayValue : prefix + "0" + suffix}
      </div>
      <div className="mt-2 text-zinc-600 dark:text-zinc-400 text-center">{label}</div>
    </div>
  );
};

// Process Flow component
const ProcessFlow = ({ steps }: { steps: string[] }) => {
  return (
    <div className="mt-12 mb-16">
      <div className="relative flex flex-col md:flex-row justify-between items-start md:items-center">
        {steps.map((step, index) => (
          <motion.div 
            key={index}
            initial={{ opacity: 0.3, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
            viewport={{ once: true, margin: "-100px 0px" }}
            className="relative z-10 flex flex-col items-center text-center mb-8 md:mb-0"
          >
            <div className="w-16 h-16 flex items-center justify-center rounded-full bg-gradient-to-r from-amber-500 to-teal-600 text-white font-bold text-xl shadow-lg">
              {index + 1}
            </div>
            <div className="mt-4 max-w-[200px] font-medium">{step}</div>
          </motion.div>
        ))}
        
        {/* Connecting line */}
        <div className="absolute top-8 left-0 right-0 h-0.5 bg-gradient-to-r from-amber-300 to-teal-400 hidden md:block" />
      </div>
    </div>
  );
};

export default function CaseStudyDetail() {
  const params = useParams();
  const [caseStudy, setCaseStudy] = useState<CaseStudy | null>(null);
  const [loading, setLoading] = useState(true);
  const { scrollYProgress } = useScroll();
  const scrollOpacity = useTransform(scrollYProgress, [0, 0.1], [1, 0]);
  
  // Using whileInView for all animations for consistency
  
  // We'll use whileInView for all sections for consistency
  
  useEffect(() => {
    if (params?.id) {
      const id = Array.isArray(params.id) ? params.id[0] : params.id;
      const study = caseStudies.find(study => study.id === id);
      setCaseStudy(study || null);
      setLoading(false);
    }
  }, [params]);
  
  if (loading) {
    return (
      <div className="relative">
        <Header />
        <main className="pt-20">
          <div className="container mx-auto px-4 md:px-6 py-16 text-center">
            <div className="flex items-center justify-center space-x-2">
              <div className="w-4 h-4 rounded-full bg-amber-500 animate-bounce" style={{ animationDelay: '0ms' }} />
              <div className="w-4 h-4 rounded-full bg-amber-500 animate-bounce" style={{ animationDelay: '150ms' }} />
              <div className="w-4 h-4 rounded-full bg-amber-500 animate-bounce" style={{ animationDelay: '300ms' }} />
            </div>
            <p className="mt-4 text-zinc-600 dark:text-zinc-400">Loading case study...</p>
          </div>
        </main>
        <Footer />
      </div>
    );
  }
  
  if (!caseStudy) {
    return (
      <div className="relative">
        <Header />
        <main className="pt-20">
          <div className="container mx-auto px-4 md:px-6 py-16 text-center">
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
            >
              <h1 className="text-3xl font-bold mb-6">Case Study Not Found</h1>
              <p className="mb-6">Sorry, we couldn't find the case study you're looking for.</p>
              <Link href="/case-studies" className="inline-flex items-center text-amber-600 dark:text-amber-400 font-medium hover:text-amber-700 dark:hover:text-amber-300 transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M9.707 14.707a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 1.414L7.414 9H15a1 1 0 110 2H7.414l2.293 2.293a1 1 0 010 1.414z" clipRule="evenodd" />
                </svg>
                Back to all case studies
              </Link>
            </motion.div>
          </div>
        </main>
        <Footer />
      </div>
    );
  }
  
  // Extract process steps based on case study type
  const processSteps = caseStudy.id === 'lead-generation-automation' ?
    ['Requirement Analysis', 'Custom Solution Design', 'Integration Setup', 'Testing & Optimization', 'Ongoing Support'] :
    caseStudy.id === 'car-rental-crm-implementation' ?
    ['Business Analysis', 'CRM Architecture', 'Custom Development', 'Data Migration', 'User Training'] :
    ['UX Research', 'App Design', 'Development', 'Testing', 'Launch & Support'];

  // Extract numeric values from results for animated counters
  const keyMetrics = caseStudy.results.map(result => {
    // Extract numeric values with regex
    const matches = result.match(/(\d+(\.\d+)?)(\s*[%x])?/);
    if (!matches) return null;
    
    const value = matches[1];
    const suffix = matches[3]?.trim() || '';
    const label = result.replace(matches[0], '').trim();
    
    return { value: suffix === 'x' ? `${value}x` : parseFloat(value), suffix: suffix === '%' ? '%' : '', label };
  }).filter(Boolean);

  return (
    <div className="relative">
      <Header />
      <main className="pt-20">
        {/* Hero Section with Parallax Effect */}
        <div className="w-full h-[500px] md:h-[600px] relative overflow-hidden">
          <motion.div 
            style={{ opacity: scrollOpacity }}
            className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/30 z-10"
          ></motion.div>
          
          <motion.div
            initial={{ scale: 1.1 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.7 }}
            className="w-full h-full"
          >
            <img 
              src={caseStudy.image} 
              alt={caseStudy.title} 
              className="w-full h-full object-cover"
            />
          </motion.div>
          
          <div className="container mx-auto px-4 md:px-6 absolute inset-0 z-20 flex flex-col justify-center">
            <motion.div 
              initial={{ opacity: 0.3, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="max-w-3xl"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-white dark:bg-zinc-800 rounded-full p-2 flex items-center justify-center shadow-lg">
                  <div className="w-full h-full rounded-full" style={{ backgroundColor: caseStudy.logoColor }}></div>
                </div>
                <div>
                  <span className="inline-block px-3 py-1 text-xs font-medium rounded-full bg-white/20 backdrop-blur-sm text-white">
                    {caseStudy.industry}
                  </span>
                  <span className="inline-block px-3 py-1 text-xs font-medium rounded-full bg-white/20 backdrop-blur-sm text-white ml-2">
                    {caseStudy.service}
                  </span>
                </div>
              </div>
              
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 drop-shadow-md">
                {caseStudy.title}
              </h1>
              
              <p className="text-xl text-white/90 max-w-2xl mb-8 drop-shadow-sm">
                Client: <strong className="text-amber-300">{caseStudy.client}</strong>
              </p>
              
              <motion.div 
                initial={{ opacity: 0.3, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.6 }}
                className="inline-block"
              >
                <Link 
                  href="#overview" 
                  className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-amber-500 to-amber-600 text-white rounded-lg shadow-lg hover:from-amber-600 hover:to-amber-700 transition-all font-medium"
                  onClick={(e) => {
                    e.preventDefault();
                    document.getElementById('overview')?.scrollIntoView({ behavior: 'smooth' });
                  }}
                >
                  Explore Case Study
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 animate-bounce" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M16.707 10.293a1 1 0 010 1.414l-6 6a1 1 0 01-1.414 0l-6-6a1 1 0 111.414-1.414L9 14.586V3a1 1 0 012 0v11.586l4.293-4.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </Link>
              </motion.div>
            </motion.div>
          </div>
        </div>
        
        {/* Overview Section */}
        <section id="overview" className="py-20 bg-white dark:bg-zinc-900">
          <div className="container mx-auto px-4 md:px-6">
            <div className="max-w-4xl mx-auto">
              <motion.div 
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true, margin: "-100px 0px" }}
                className="mb-16 text-center"
              >
                <h2 className="text-3xl md:text-4xl font-bold mb-6">Project Overview</h2>
                <p className="text-xl text-zinc-700 dark:text-zinc-300">{caseStudy.summary}</p>
              </motion.div>
              
              {/* Key Metrics Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-20">
                {keyMetrics.slice(0, 3).map((metric, index) => (
                  metric && (
                    <AnimatedCounter 
                      key={index}
                      value={metric.value} 
                      label={metric.label}
                      suffix={metric.suffix}
                      color={index === 0 ? 'amber' : index === 1 ? 'teal' : 'blue'}
                    />
                  )
                ))}
              </div>

              {/* Process Flow */}
              <motion.div
                initial={{ opacity: 0.3, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true, margin: "-100px 0px" }}
                className="mb-8"
              >
                <h3 className="text-2xl font-bold mb-6 text-center">Our Process</h3>
                <ProcessFlow steps={processSteps} />
              </motion.div>
              
              {/* Challenge Section */}
              <div className="mb-16">
                <motion.div 
                  initial={{ opacity: 0.3, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6 }}
                  viewport={{ once: true, margin: "-100px 0px" }}
                  className="flex flex-col md:flex-row gap-8 items-center"
                >
                  <div className="w-full md:w-1/3 aspect-square rounded-2xl bg-gradient-to-br from-amber-100 to-amber-200 dark:from-amber-900/30 dark:to-amber-800/20 flex items-center justify-center p-8">
                    <svg xmlns="http://www.w3.org/2000/svg" className="w-32 h-32 text-amber-600 dark:text-amber-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
                    </svg>
                  </div>
                  <div className="w-full md:w-2/3">
                    <h2 className="text-2xl md:text-3xl font-bold mb-4">The Challenge</h2>
                    <p className="text-zinc-700 dark:text-zinc-300">{caseStudy.challenge}</p>
                  </div>
                </motion.div>
              </div>
              
              {/* Solution Section */}
              <div className="mb-16">
                <motion.div 
                  initial={{ opacity: 0.3, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6 }}
                  viewport={{ once: true, margin: "-100px 0px" }}
                  className="flex flex-col md:flex-row-reverse gap-8 items-center"
                >
                  <div className="w-full md:w-1/3 aspect-square rounded-2xl bg-gradient-to-br from-teal-100 to-teal-200 dark:from-teal-900/30 dark:to-teal-800/20 flex items-center justify-center p-8">
                    <svg xmlns="http://www.w3.org/2000/svg" className="w-32 h-32 text-teal-600 dark:text-teal-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
                      <path d="M9 12l2 2 4-4"></path>
                    </svg>
                  </div>
                  <div className="w-full md:w-2/3">
                    <h2 className="text-2xl md:text-3xl font-bold mb-4">Our Solution</h2>
                    <p className="text-zinc-700 dark:text-zinc-300 mb-6">{caseStudy.solution}</p>
                    
                    {/* Implementation Details */}
                    {caseStudy.implementationDetails && caseStudy.implementationDetails.length > 0 && (
                      <div className="mt-4">
                        <h3 className="text-xl font-bold mb-3 text-amber-600 dark:text-amber-400">How We Implemented It</h3>
                        <ul className="list-disc pl-5 space-y-2 text-zinc-700 dark:text-zinc-300">
                          {caseStudy.implementationDetails.map((detail, index) => (
                            <li key={index}>{detail}</li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </div>
                </motion.div>
              </div>
              
              {/* Technical Challenges & Solutions Section */}
              {(caseStudy.technicalChallenges && caseStudy.technicalChallenges.length > 0) && (
                <motion.div 
                  initial={{ opacity: 0.3, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6 }}
                  viewport={{ once: true, margin: "-100px 0px" }}
                  className="mb-16 bg-gradient-to-r from-zinc-100 to-zinc-50 dark:from-zinc-900 dark:to-zinc-800 rounded-2xl p-8 border border-zinc-200 dark:border-zinc-700"
                >
                  <h2 className="text-2xl md:text-3xl font-bold mb-8">Technical Challenges & Solutions</h2>
                  
                  <div className="space-y-8">
                    <div>
                      <h3 className="text-xl font-bold mb-4 text-amber-600 dark:text-amber-400">Challenges We Faced</h3>
                      <div className="space-y-4">
                        {caseStudy.technicalChallenges.map((challenge, index) => (
                          <motion.div
                            key={index}
                            initial={{ opacity: 0.3, x: -10 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.4, delay: index * 0.1 }}
                            viewport={{ once: true, margin: "-100px 0px" }}
                            className="flex items-start gap-3"
                          >
                            <div className="shrink-0 w-6 h-6 bg-red-500 text-white rounded-full flex items-center justify-center mt-0.5">
                              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                              </svg>
                            </div>
                            <div className="text-zinc-800 dark:text-zinc-200">{challenge}</div>
                          </motion.div>
                        ))}
                      </div>
                    </div>
                    
                    <div>
                      <h3 className="text-xl font-bold mb-4 text-teal-600 dark:text-teal-400">Our Solutions</h3>
                      <div className="space-y-4">
                        {caseStudy.technicalSolutions?.map((solution, index) => (
                          <motion.div
                            key={index}
                            initial={{ opacity: 0.3, x: 10 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.4, delay: index * 0.1 }}
                            viewport={{ once: true, margin: "-100px 0px" }}
                            className="flex items-start gap-3"
                          >
                            <div className="shrink-0 w-6 h-6 bg-teal-500 text-white rounded-full flex items-center justify-center mt-0.5">
                              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                                <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                              </svg>
                            </div>
                            <div className="text-zinc-800 dark:text-zinc-200">{solution}</div>
                          </motion.div>
                        ))}
                      </div>
                    </div>
                  </div>
                </motion.div>
              )}
              
              {/* Results Section */}
              <div className="mb-16">
                <motion.div 
                  initial={{ opacity: 0.3, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6 }}
                  viewport={{ once: true, margin: "-100px 0px" }}
                >
                  <h2 className="text-2xl md:text-3xl font-bold mb-8 text-center">Key Results</h2>
                  
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {caseStudy.results.map((result, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                        viewport={{ once: true, margin: "-100px 0px" }}
                        className="flex items-start gap-3 p-4 bg-gradient-to-r from-amber-50 to-teal-50 dark:from-zinc-800 dark:to-zinc-800 rounded-lg border border-amber-100 dark:border-amber-900/20"
                      >
                        <div className="shrink-0 w-8 h-8 bg-amber-500 text-white rounded-full flex items-center justify-center mt-0.5">
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                          </svg>
                        </div>
                        <div className="text-zinc-800 dark:text-zinc-200 font-medium">{result}</div>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              </div>
              
              {/* Delivery Highlights Section */}
              {caseStudy.deliveryHighlights && caseStudy.deliveryHighlights.length > 0 && (
                <motion.div
                  initial={{ opacity: 0.3, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6 }}
                  viewport={{ once: true, margin: "-100px 0px" }}
                  className="mb-16"
                >
                  <h2 className="text-2xl md:text-3xl font-bold mb-8 text-center">Incremental Delivery Highlights</h2>
                  
                  <div className="space-y-4">
                    {caseStudy.deliveryHighlights.map((highlight: string, index: number) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0.3, x: -10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.4, delay: index * 0.1 }}
                        viewport={{ once: true, margin: "-100px 0px" }}
                        className="flex items-start gap-4 p-4 bg-gradient-to-r from-amber-50 to-zinc-50 dark:from-zinc-800 dark:to-zinc-800 rounded-lg border border-amber-100 dark:border-zinc-700"
                      >
                        <div className="shrink-0 w-8 h-8 bg-amber-500 text-white rounded-full flex items-center justify-center mt-0.5">
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                        </div>
                        <div className="text-zinc-800 dark:text-zinc-200 font-medium">{highlight}</div>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              )}

              {/* Project Details Section */}
              {(caseStudy.timeline || caseStudy.teamSize) && (
                <motion.div
                  initial={{ opacity: 0.3, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6 }}
                  viewport={{ once: true, margin: "-100px 0px" }}
                  className="mb-16 bg-zinc-50 dark:bg-zinc-800 rounded-xl p-6 border border-zinc-200 dark:border-zinc-700"
                >
                  <h2 className="text-2xl md:text-3xl font-bold mb-8 text-center">Project Details</h2>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {caseStudy.timeline && (
                      <div className="flex flex-col items-center text-center p-6 bg-white dark:bg-zinc-900 rounded-lg shadow-md">
                        <div className="w-12 h-12 bg-amber-100 dark:bg-amber-900/30 rounded-full flex items-center justify-center mb-4">
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-amber-600 dark:text-amber-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                          </svg>
                        </div>
                        <h3 className="text-lg font-bold mb-2">Project Timeline</h3>
                        <p className="text-zinc-700 dark:text-zinc-300">{caseStudy.timeline}</p>
                      </div>
                    )}
                    
                    {caseStudy.teamSize && (
                      <div className="flex flex-col items-center text-center p-6 bg-white dark:bg-zinc-900 rounded-lg shadow-md">
                        <div className="w-12 h-12 bg-teal-100 dark:bg-teal-900/30 rounded-full flex items-center justify-center mb-4">
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-teal-600 dark:text-teal-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                          </svg>
                        </div>
                        <h3 className="text-lg font-bold mb-2">Team Composition</h3>
                        <p className="text-zinc-700 dark:text-zinc-300">{caseStudy.teamSize}</p>
                      </div>
                    )}
                  </div>
                </motion.div>
              )}

              {/* Client Testimonial */}
              {caseStudy.testimonial && (
                <motion.div
                  initial={{ opacity: 0.3, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6 }}
                  viewport={{ once: true, margin: "-100px 0px" }}
                  className="mb-16 p-8 md:p-10 bg-gradient-to-r from-amber-50 to-teal-50 dark:from-zinc-900 dark:to-zinc-800 rounded-2xl relative border border-amber-100 dark:border-zinc-700"
                >
                  <div className="absolute top-6 left-8 text-amber-500 dark:text-amber-400">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 opacity-30" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M10 11l-2.5-5H0l3.5 5H3l-3 5h7.6l2.4-5zm14 0l-2.6-5H14l3.5 5H17l-3 5h7.6l2.4-5z" />
                    </svg>
                  </div>
                  
                  <div className="flex flex-col items-center text-center max-w-3xl mx-auto pt-4">
                    <p className="text-xl md:text-2xl italic text-zinc-800 dark:text-zinc-100 mb-8">"{caseStudy.testimonial.quote}"</p>
                    
                    <div>
                      <p className="font-bold text-lg mb-1">{caseStudy.testimonial.author}</p>
                      <p className="text-zinc-600 dark:text-zinc-400">{caseStudy.testimonial.position}</p>
                    </div>
                  </div>
                </motion.div>
              )}

              {/* CTA Section */}
              <motion.div 
                initial={{ opacity: 0.3, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true, margin: "-100px 0px" }}
                className="mt-20 bg-gradient-to-r from-amber-100 to-teal-100 dark:from-zinc-800 dark:to-zinc-900 rounded-2xl p-8 md:p-12 text-center shadow-xl border border-amber-200 dark:border-amber-900/20"
              >
                <h3 className="text-2xl md:text-3xl font-bold mb-4">Ready to achieve similar results?</h3>
                <p className="text-zinc-700 dark:text-zinc-300 mb-8 max-w-2xl mx-auto">
                  Let's work together to create your success story. Our team is ready to help you overcome challenges and reach your business goals.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link 
                    href="/case-studies" 
                    className="inline-flex items-center justify-center px-6 py-3 rounded-lg border border-zinc-300 dark:border-zinc-700 text-zinc-800 dark:text-zinc-200 hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-colors"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M9.707 14.707a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 1.414L7.414 9H15a1 1 0 110 2H7.414l2.293 2.293a1 1 0 010 1.414z" clipRule="evenodd" />
                    </svg>
                    View all case studies
                  </Link>
                  <Link 
                    href="#cta" 
                    className="inline-flex items-center justify-center px-6 py-3 rounded-lg bg-gradient-to-r from-amber-600 to-teal-600 text-white hover:from-amber-700 hover:to-teal-700 transition-colors shadow-md"
                    onClick={(e) => {
                      e.preventDefault();
                      document.getElementById('cta')?.scrollIntoView({ behavior: 'smooth' });
                    }}
                  >
                    Get started with us
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                    </svg>
                  </Link>
                </div>
              </motion.div>
            </div>
          </div>
        </section>
        
        {/* More Case Studies Section */}
        <section className="py-20 bg-amber-50 dark:bg-zinc-800">
          <div className="container mx-auto px-4 md:px-6">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-2xl md:text-3xl font-bold mb-12 text-center">Explore More Case Studies</h2>
              <div className="grid sm:grid-cols-2 gap-8">
                {caseStudies
                  .filter(study => study.id !== caseStudy.id)
                  .map((study, index) => (
                    <motion.div
                      key={study.id}
                      initial={{ opacity: 0.3, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      viewport={{ once: true, margin: "-100px 0px" }}
                      className="bg-white dark:bg-zinc-900 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
                    >
                      <div className="h-48 relative">
                        <img 
                          src={study.image} 
                          alt={study.title} 
                          className="w-full h-full object-cover"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent flex items-end">
                          <div className="p-6">
                            <div className="flex gap-2 mb-3">
                              <span className="inline-block px-2 py-1 text-xs font-medium rounded-full bg-amber-500 text-white">
                                {study.service}
                              </span>
                              <span className="inline-block px-2 py-1 text-xs font-medium rounded-full bg-white/20 backdrop-blur-sm text-white">
                                {study.industry}
                              </span>
                            </div>
                            <h3 className="text-xl font-bold text-white">{study.title}</h3>
                          </div>
                        </div>
                      </div>
                      <div className="p-6">
                        <p className="text-zinc-600 dark:text-zinc-400 mb-6 line-clamp-3">
                          {study.summary}
                        </p>
                        <Link 
                          href={`/case-studies/${study.id}`}
                          className="inline-flex items-center text-amber-600 dark:text-amber-400 font-medium hover:text-amber-700 dark:hover:text-amber-300 transition-colors"
                        >
                          Read full case study
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" viewBox="0 0 20 20" fill="currentColor">
                            <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                          </svg>
                        </Link>
                      </div>
                    </motion.div>
                  ))}
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
