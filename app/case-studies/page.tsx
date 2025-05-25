"use client";

import Header from "@/components/ui/header";
import Footer from "@/components/ui/footer";
import Link from "next/link";
import { motion } from "framer-motion";

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
}

const caseStudies: CaseStudy[] = [
  {
    id: "lead-generation-automation",
    title: "Lead Generation & Outreach Automation",
    client: "B2B Software Consultancy",
    industry: "Technology Consulting",
    service: "Automation",
    summary: "Implemented an automated lead generation and outreach system that significantly increased qualified leads and boosted revenue by 67% within six months.",
    challenge: "The client was struggling with inconsistent lead generation and manual outreach processes. Their sales team spent too much time on administrative tasks instead of building relationships. Leads were falling through the cracks, and follow-up was inconsistent.",
    solution: "We designed and implemented a comprehensive lead generation automation system that integrated with their existing CRM. The solution included multi-channel lead capture forms, automated lead scoring, personalized email sequences, and intelligent follow-up scheduling based on prospect engagement.",
    results: [
      "67% increase in quarterly revenue",
      "3.5x more qualified leads per month",
      "85% reduction in manual outreach tasks",
      "41% higher conversion rate from lead to customer",
      "Sales team able to handle 2.8x more prospects with the same headcount"
    ],
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&h=500&q=80"
  },
  {
    id: "car-rental-crm-implementation",
    title: "CRM System for Car Rental Business",
    client: "EuroRent Cars",
    industry: "Automotive",
    service: "Automation",
    summary: "Developed and implemented a custom CRM solution for a car rental company that streamlined operations, provided robust KPI tracking, and optimized their fleet investment decisions.",
    challenge: "The client was managing their entire car rental operation through spreadsheets and paper records. They lacked visibility into key metrics like fleet utilization, maintenance schedules, and customer preferences. Investment decisions were made on gut feeling rather than data.",
    solution: "We built a comprehensive CRM system tailored to their specific needs, with modules for reservation management, fleet tracking, maintenance scheduling, customer history, and financial reporting. The system provided real-time dashboards and automated alerts for critical KPIs.",
    results: [
      "28% reduction in operational costs",
      "Fleet utilization improved from 64% to 89%",
      "Maintenance costs reduced by 32% through preventative scheduling",
      "ROI-based fleet investment decisions led to 18% higher profit margins",
      "Customer retention increased by 40% through data-driven loyalty programs"
    ],
    image: "https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&h=500&q=80"
  },
  {
    id: "barber-shop-mobile-app",
    title: "Barber Shop Mobile App Development",
    client: "Classic Cuts",
    industry: "Personal Services",
    service: "Development",
    summary: "Created a custom mobile app for a premium barber shop that revolutionized their scheduling system, increased client retention by 70%, and boosted average revenue per customer.",
    challenge: "The client was losing business due to an inefficient appointment booking system. Clients had to call during business hours to book appointments, leading to missed opportunities and no-shows. They also lacked a way to build customer loyalty or promote additional services.",
    solution: "We developed a custom mobile app with real-time appointment scheduling, barber selection, service browsing, and integrated payment processing. The app included a loyalty program, personalized style recommendations based on past visits, and push notifications for appointment reminders and promotions.",
    results: [
      "70% improvement in client retention",
      "89% reduction in no-show appointments",
      "24/7 booking capability increased total appointments by 35%",
      "22% increase in average spending per visit through upselling features",
      "Staff efficiency improved by 40% with optimized scheduling"
    ],
    image: "https://images.unsplash.com/photo-1503951914875-452162b0f3f1?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&h=500&q=80"
  }
];

export default function CaseStudies() {
  return (
    <div className="relative">
      <Header />
      <main className="pt-20">
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-b from-amber-50 to-white dark:from-zinc-900 dark:to-zinc-950">
          <div className="container mx-auto px-4 md:px-6">
            <div className="mx-auto max-w-3xl text-center mb-16">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-4">Case Studies</h1>
              <p className="text-xl text-zinc-600 dark:text-zinc-400">
                Explore how we've helped businesses solve real-world challenges and achieve measurable results.
              </p>
            </div>
            
            <div className="grid gap-12 mt-8">
              {caseStudies.map((study, index) => (
                <motion.div 
                  key={study.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-white dark:bg-zinc-800 rounded-xl overflow-hidden shadow-lg"
                >
                  <div className="grid md:grid-cols-2 gap-0">
                    <div className="h-64 md:h-auto">
                      <img 
                        src={study.image} 
                        alt={study.title} 
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="p-6 md:p-8 flex flex-col">
                      <div className="flex items-center gap-2 mb-3">
                        <span className="inline-block px-3 py-1 text-xs font-medium rounded-full bg-amber-100 text-amber-800 dark:bg-amber-900/30 dark:text-amber-400">
                          {study.industry}
                        </span>
                        <span className="inline-block px-3 py-1 text-xs font-medium rounded-full bg-teal-100 text-teal-800 dark:bg-teal-900/30 dark:text-teal-400">
                          {study.service}
                        </span>
                      </div>
                      <h2 className="text-2xl font-bold mb-2">{study.title}</h2>
                      <p className="text-zinc-600 dark:text-zinc-400 mb-4"><strong>Client:</strong> {study.client}</p>
                      <p className="text-zinc-600 dark:text-zinc-400 mb-4">{study.summary}</p>
                      <div className="mt-auto">
                        <Link href={`/case-studies/${study.id}`} className="inline-flex items-center text-amber-600 dark:text-amber-400 font-medium hover:text-amber-700 dark:hover:text-amber-300 transition-colors">
                          Read full case study
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" viewBox="0 0 20 20" fill="currentColor">
                            <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                          </svg>
                        </Link>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
            
            <div className="mt-16 text-center">
              <div className="inline-block bg-gradient-to-r from-amber-50 to-teal-50 dark:from-amber-900/30 dark:to-teal-900/30 p-8 rounded-xl border border-amber-100 dark:border-amber-800/30 shadow-sm">
                <h2 className="text-2xl font-bold mb-4">Ready to achieve similar results?</h2>
                <p className="text-zinc-600 dark:text-zinc-400 mb-6 max-w-2xl mx-auto">
                  Let's work together to create your success story. Our team is ready to help you overcome challenges and reach your business goals.
                </p>
                <Link 
                  href="#cta" 
                  className="inline-flex items-center justify-center rounded-lg bg-gradient-to-r from-amber-600 to-teal-600 px-6 py-3 text-white font-medium hover:from-amber-700 hover:to-teal-700 transition-colors"
                  onClick={(e) => {
                    e.preventDefault();
                    document.getElementById('cta')?.scrollIntoView({ behavior: 'smooth' });
                  }}
                >
                  Get Started
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
