"use client";
import React from "react";
import { motion } from "framer-motion";

export default function CTA() {
  return (
    <section className="w-full py-16 md:py-24 bg-gradient-to-b from-amber-50 to-amber-100 dark:from-zinc-900 dark:to-zinc-950" id="cta">
      <div className="container mx-auto px-4 md:px-6">
        <div className="relative overflow-hidden rounded-2xl bg-gradient-to-r from-amber-600 to-teal-600 p-8 md:p-12 shadow-xl">
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute -top-[40%] -right-[10%] h-[500px] w-[500px] rounded-full bg-amber-500 opacity-30 blur-3xl"></div>
            <div className="absolute -bottom-[20%] -left-[10%] h-[400px] w-[400px] rounded-full bg-teal-500 opacity-20 blur-3xl"></div>
          </div>
          
          <div className="relative z-10 flex flex-col items-center text-center">
            <motion.div 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
              className="inline-block bg-white/20 dark:bg-white/10 backdrop-blur-sm rounded-full px-4 py-1.5 text-white text-sm font-medium mb-6"
            >
              <span className="mr-2">✨</span> Let&apos;s Grow Together
            </motion.div>
            
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-3xl md:text-4xl/tight lg:text-5xl/tight font-bold tracking-tight text-white mb-6"
            >
              Ready to Elevate Your Business Growth?
            </motion.h2>
            
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="max-w-2xl text-lg text-amber-50 mb-8"
            >
              Take the first step toward transforming your digital presence. 
              Schedule a complimentary consultation with our experts to discover tailored solutions for your business needs.
            </motion.p>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="w-full max-w-md"
            >
              <form className="grid gap-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <input
                    type="text"
                    placeholder="Full Name"
                    className="w-full h-12 px-4 rounded-lg border-2 border-transparent bg-white/10 text-white placeholder:text-amber-50 focus:border-white focus:outline-none focus:ring-0"
                  />
                  <div className="relative">
                    <input
                      type="email"
                      placeholder="Email Address *"
                      className="w-full h-12 px-4 rounded-lg border-2 border-transparent bg-white/10 text-white placeholder:text-amber-50 focus:border-white focus:outline-none focus:ring-0"
                      required
                    />
                  </div>
                </div>
                
                <input
                  type="text"
                  placeholder="Business Name"
                  className="w-full h-12 px-4 rounded-lg border-2 border-transparent bg-white/10 text-white placeholder:text-amber-50 focus:border-white focus:outline-none focus:ring-0"
                />
                
                <select 
                  className="w-full h-12 px-4 rounded-lg border-2 border-transparent bg-white/10 text-white focus:border-white focus:outline-none focus:ring-0 appearance-none"
                  defaultValue=""
                >
                  <option value="" disabled className="text-zinc-500">I&apos;m interested in...</option>
                  <option value="development" className="text-zinc-800">Development Services</option>
                  <option value="marketing" className="text-zinc-800">Marketing Services</option>
                  <option value="automation" className="text-zinc-800">Automation Services</option>
                  <option value="multiple" className="text-zinc-800">Multiple Services</option>
                </select>
                
                <motion.button
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.98 }}
                  className="h-12 rounded-lg bg-white font-medium text-amber-600 hover:bg-amber-50 transition-colors shadow-lg"
                  type="submit"
                >
                  Schedule Your Free Consultation
                </motion.button>
              </form>
              
              <p className="mt-3 text-xs text-amber-50">
                No obligation. We&apos;ll analyze your needs and provide a custom growth plan.
              </p>
            </motion.div>
            
            <div className="mt-10 flex flex-wrap justify-center gap-8 md:gap-12">
              <div className="flex flex-col items-center">
                <div className="mb-2 text-3xl font-bold text-white">97%</div>
                <div className="text-sm text-amber-50">Client Success Rate</div>
              </div>
              
              <div className="flex flex-col items-center">
                <div className="mb-2 text-3xl font-bold text-white">30+</div>
                <div className="text-sm text-amber-50">Industry Specialists</div>
              </div>
              
              <div className="flex flex-col items-center">
                <div className="mb-2 text-3xl font-bold text-white">250+</div>
                <div className="text-sm text-amber-50">Projects Delivered</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
