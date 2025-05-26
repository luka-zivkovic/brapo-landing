"use client";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";

export default function Footer() {
  const footerLinks = [
    {
      title: "Services",
      links: [
        { name: "Development", href: "/#pricing" },
        { name: "Marketing", href: "/#pricing" },
        { name: "Automation", href: "/#pricing" },
        { name: "Ed Tech Solutions", href: "/#pricing" },
      ],
    },
    {
      title: "Resources",
      links: [
        { name: "Case Studies", href: "/case-studies" },
        { name: "Knowledge Base", href: "/knowledge-base" },
        { name: "Success Stories", href: "/#testimonials" },
      ],
    },
    {
      title: "Contact",
      links: [
        { name: "Privacy Policy", href: "/privacy-policy" },
        { name: "Terms of Service", href: "/terms-of-service" },
      ],
    },
  ];

  return (
    <footer className="w-full bg-gradient-to-b from-zinc-50 to-zinc-100 dark:from-zinc-900 dark:to-zinc-950">
      <div className="container mx-auto px-4 md:px-6 py-12 md:py-16">
        <div className="grid grid-cols-2 md:grid-cols-3 gap-8 mb-12">
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
              <Image 
                src="/logo_duo.png" 
                alt="digitrail logo" 
                width={40}
                height={40}
                className="w-full h-full object-contain"
              />
            </div>
            <span className="text-xl font-bold bg-gradient-to-r from-amber-600 to-teal-600 dark:from-amber-400 dark:to-teal-400 text-transparent bg-clip-text">digitrail</span>
          </div>
          
          <div className="text-sm text-zinc-600 dark:text-zinc-400">
            © {new Date().getFullYear()} digitrail. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
}
