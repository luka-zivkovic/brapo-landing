"use client";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { cn } from "@/lib/utils";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  
  // Fix navigation by ensuring hash links work from any page by prefixing with / for root path
  const navLinks = [
    { name: "Home", href: "/" },
    { name: "How We Help", href: "/#how-we-help" },
    { name: "What We Do", href: "/#what-we-do" },
    { name: "Pricing", href: "/#pricing" },
    { name: "Testimonials", href: "/#testimonials" },
    { name: "Case Studies", href: "/case-studies", isStandalone: true },
    { name: "Knowledge Base", href: "/knowledge-base", isStandalone: true },
  ];
  
  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        isScrolled
          ? "bg-white/90 dark:bg-zinc-900/90 backdrop-blur-sm shadow-md border-b border-amber-100 dark:border-amber-900/20"
          : "bg-transparent"
      )}
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center gap-2">
            <Link href="/" className="flex items-center gap-2">
              <div className="relative w-10 h-10 flex items-center justify-center">
                <img 
                  src="/logo_duo.png" 
                  alt="digitrail logo" 
                  className="w-full h-full object-contain"
                />
              </div>
              <span className="text-xl font-bold bg-gradient-to-r from-amber-600 to-teal-600 dark:from-amber-400 dark:to-teal-400 text-transparent bg-clip-text">digitrail</span>
            </Link>
          </div>
          
          <nav className="hidden md:flex items-center gap-6">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className={`text-sm font-medium transition-colors ${
                  link.isStandalone
                    ? "px-3 py-1 border border-amber-500 dark:border-amber-600 text-amber-600 dark:text-amber-500 hover:bg-amber-50 dark:hover:bg-amber-900/20 rounded-md"
                    : "hover:text-amber-600 dark:hover:text-amber-400"
                }`}
              >
                {link.name}
              </Link>
            ))}
          </nav>
          
          <div className="flex items-center gap-2">
            <Link
              href="/#cta"
              className="hidden md:flex h-9 items-center justify-center px-4 text-sm font-medium bg-amber-500 dark:bg-amber-600 text-white dark:text-white hover:bg-amber-600 dark:hover:bg-amber-700 rounded-md transition-colors shadow-sm"
            >
              Get Started
            </Link>
            
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden rounded-md p-2 text-zinc-700 dark:text-zinc-300 hover:bg-zinc-100 dark:hover:bg-zinc-800"
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? (
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
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              ) : (
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
                    d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                  />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>
      
      {/* Mobile menu */}
      <motion.div
        initial={{ opacity: 0, height: 0 }}
        animate={{
          opacity: isMobileMenuOpen ? 1 : 0,
          height: isMobileMenuOpen ? "auto" : 0,
        }}
        transition={{ duration: 0.2 }}
        className="md:hidden overflow-hidden"
      >
        <div className="px-4 py-3 space-y-1 border-t border-amber-200 dark:border-amber-900/30 bg-white dark:bg-zinc-900">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className={`block py-2 text-sm font-medium transition-colors ${
                link.isStandalone
                  ? "my-2 px-3 py-2 border border-amber-500 dark:border-amber-600 text-amber-600 dark:text-amber-500 text-center rounded-md"
                  : "hover:text-amber-600 dark:hover:text-amber-400"
              }`}
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {link.name}
            </Link>
          ))}
          <Link
            href="/#cta"
            className="block py-2 mt-2 text-sm font-medium bg-amber-500 dark:bg-amber-600 text-white dark:text-white hover:bg-amber-600 dark:hover:bg-amber-700 rounded-md px-3 text-center transition-colors shadow-sm"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Get Started
          </Link>
        </div>
      </motion.div>
    </header>
  );
}
