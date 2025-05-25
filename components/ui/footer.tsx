"use client";
import Link from "next/link";
import { motion } from "framer-motion";

export default function Footer() {
  const footerLinks = [
    {
      title: "Company",
      links: [
        { name: "About", href: "#" },
        { name: "Our Story", href: "#" },
        { name: "Team", href: "#" },
        { name: "Careers", href: "#" },
      ],
    },
    {
      title: "Services",
      links: [
        { name: "Development", href: "#pricing" },
        { name: "Marketing", href: "#pricing" },
        { name: "Automation", href: "#pricing" },
        { name: "Ed Tech Solutions", href: "#pricing" },
      ],
    },
    {
      title: "Resources",
      links: [
        { name: "Case Studies", href: "/case-studies" },
        { name: "Blog", href: "#" },
        { name: "Knowledge Base", href: "/knowledge-base" },
        { name: "Success Stories", href: "#testimonials" },
      ],
    },
    {
      title: "Contact",
      links: [
        { name: "Consultation", href: "#cta" },
        { name: "Support", href: "#" },
        { name: "Privacy Policy", href: "/privacy-policy" },
        { name: "Terms of Service", href: "/terms-of-service" },
      ],
    },
  ];

  return (
    <footer className="w-full bg-gradient-to-b from-zinc-50 to-zinc-100 dark:from-zinc-900 dark:to-zinc-950">
      <div className="container mx-auto px-4 md:px-6 py-12 md:py-16">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
          {footerLinks.map((section, index) => (
            <motion.div 
              key={section.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <h3 className="font-semibold text-lg mb-3">{section.title}</h3>
              <ul className="space-y-2">
                {section.links.map((link) => (
                  <li key={link.name}>
                    <Link 
                      href={link.href}
                      className="text-sm text-zinc-600 hover:text-amber-600 dark:text-zinc-400 dark:hover:text-amber-400 transition-colors"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
        
        <div className="border-t border-amber-200 dark:border-amber-900/30 pt-8 flex flex-col md:flex-row items-center justify-between">
          <div className="flex items-center gap-2 mb-4 md:mb-0">
            <div className="relative w-10 h-10 flex items-center justify-center">
              <img 
                src="/logo_duo.png" 
                alt="digitrail logo" 
                className="w-full h-full object-contain"
              />
            </div>
            <span className="text-xl font-bold bg-gradient-to-r from-amber-600 to-teal-600 dark:from-amber-400 dark:to-teal-400 text-transparent bg-clip-text">digitrail</span>
          </div>
          
          <div className="flex gap-4 mb-4 md:mb-0">
            <a href="#" className="p-2 rounded-full bg-amber-100 dark:bg-amber-900/30 hover:bg-amber-200 dark:hover:bg-amber-800/50 transition-colors">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="text-amber-700 dark:text-amber-400"
              >
                <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
              </svg>
            </a>
            <a href="#" className="p-2 rounded-full bg-amber-100 dark:bg-amber-900/30 hover:bg-amber-200 dark:hover:bg-amber-800/50 transition-colors">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="text-amber-700 dark:text-amber-400"
              >
                <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z" />
              </svg>
            </a>
            <a href="#" className="p-2 rounded-full bg-amber-100 dark:bg-amber-900/30 hover:bg-amber-200 dark:hover:bg-amber-800/50 transition-colors">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="text-amber-700 dark:text-amber-400"
              >
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
              </svg>
            </a>
            <a href="#" className="p-2 rounded-full bg-amber-100 dark:bg-amber-900/30 hover:bg-amber-200 dark:hover:bg-amber-800/50 transition-colors">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="text-amber-700 dark:text-amber-400"
              >
                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                <rect x="2" y="9" width="4" height="12" />
                <circle cx="4" cy="4" r="2" />
              </svg>
            </a>
          </div>
          
          <div className="text-sm text-zinc-600 dark:text-zinc-400">
            © {new Date().getFullYear()} digitrail. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
}
