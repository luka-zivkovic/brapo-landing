"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";

export default function CTA() {
  // Form state
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    businessName: "",
    interest: "",
    companyWebsite: "" // Honeypot field
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<null | "success" | "error">(null);
  const [errorMessage, setErrorMessage] = useState("");

  // Handle input changes
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  // Handle form submission
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Honeypot check - if filled, likely a bot
    if (formData.companyWebsite) {
      // Silently reject the submission without notifying the bot
      // We'll pretend it was successful
      setFormData({
        fullName: "",
        email: "",
        businessName: "",
        interest: "",
        companyWebsite: ""
      });
      setSubmitStatus("success");
      return;
    }
    
    // Basic validation
    if (!formData.email) {
      setErrorMessage("Email address is required");
      setSubmitStatus("error");
      return;
    }
    
    setIsSubmitting(true);
    setSubmitStatus(null);
    
    try {
      // Use a relative URL to our own API route which will proxy the request to n8n
      // This avoids CORS issues since we're making the request to our own domain
      const response = await fetch('/api/submit-contact', {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          fullName: formData.fullName,
          email: formData.email,
          businessName: formData.businessName,
          interest: formData.interest,
          source: "Website Contact Form",
          submittedAt: new Date().toISOString()
        })
      });
      
      if (!response.ok) {
        throw new Error("Failed to submit form");
      }
      
      // Clear form and show success
      setFormData({
        fullName: "",
        email: "",
        businessName: "",
        interest: "",
        companyWebsite: ""
      });
      setSubmitStatus("success");
    } catch (error) {
      console.error("Form submission error:", error);
      setErrorMessage("Failed to submit the form. Please try again later.");
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };
  
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
              <form className="grid gap-4" onSubmit={handleSubmit}>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <input
                    type="text"
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleChange}
                    placeholder="Full Name"
                    className="w-full h-12 px-4 rounded-lg border-2 border-transparent bg-white/10 text-white placeholder:text-amber-50 focus:border-white focus:outline-none focus:ring-0"
                  />
                  <div className="relative">
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="Email Address *"
                      className="w-full h-12 px-4 rounded-lg border-2 border-transparent bg-white/10 text-white placeholder:text-amber-50 focus:border-white focus:outline-none focus:ring-0"
                      required
                    />
                  </div>
                </div>
                
                <input
                  type="text"
                  name="businessName"
                  value={formData.businessName}
                  onChange={handleChange}
                  placeholder="Business Name"
                  className="w-full h-12 px-4 rounded-lg border-2 border-transparent bg-white/10 text-white placeholder:text-amber-50 focus:border-white focus:outline-none focus:ring-0"
                />
                
                {/* Honeypot field - hidden from real users but bots will see it */}
                <div className="hidden" aria-hidden="true" style={{ display: 'none' }}>
                  <input
                    type="text"
                    name="companyWebsite"
                    value={formData.companyWebsite}
                    onChange={handleChange}
                    tabIndex={-1}
                    autoComplete="off"
                  />
                </div>
                
                <select 
                  name="interest"
                  value={formData.interest}
                  onChange={handleChange}
                  className="w-full h-12 px-4 rounded-lg border-2 border-transparent bg-white/10 text-white focus:border-white focus:outline-none focus:ring-0 appearance-none"
                >
                  <option value="" disabled className="text-zinc-500">I&apos;m interested in...</option>
                  <option value="development" className="text-zinc-800">Development Services</option>
                  <option value="marketing" className="text-zinc-800">Marketing Services</option>
                  <option value="automation" className="text-zinc-800">Automation Services</option>
                  <option value="multiple" className="text-zinc-800">Multiple Services</option>
                </select>
                
                {submitStatus === "error" && (
                  <div className="bg-red-100 text-red-700 p-3 rounded-lg text-sm">
                    {errorMessage || "An error occurred. Please try again."}
                  </div>
                )}
                
                {submitStatus === "success" && (
                  <div className="bg-green-100 text-green-700 p-3 rounded-lg text-sm">
                    Thank you for your message! We'll be in touch soon.
                  </div>
                )}
                
                <motion.button
                  whileHover={{ scale: isSubmitting ? 1 : 1.03 }}
                  whileTap={{ scale: isSubmitting ? 1 : 0.98 }}
                  className={`h-12 rounded-lg font-medium shadow-lg ${
                    isSubmitting 
                      ? "bg-gray-300 text-gray-600 cursor-not-allowed" 
                      : "bg-white text-amber-600 hover:bg-amber-50 transition-colors"
                  }`}
                  type="submit"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    <span className="flex items-center justify-center">
                      <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-amber-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      Processing...
                    </span>
                  ) : (
                    "Schedule Your Free Consultation"
                  )}
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
