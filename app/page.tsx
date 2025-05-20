import Hero from "@/components/ui/hero";
import Header from "@/components/ui/header";
import Footer from "@/components/ui/footer";
import HowWeHelp from "@/components/sections/HowWeHelp";
import WhatWeDo from "@/components/sections/WhatWeDo";
import Pricing from "@/components/sections/Pricing";
import Testimonials from "@/components/sections/Testimonials";
import CTA from "@/components/sections/CTA";


export default function Home() {
  return (
    <div className="relative">
      <Header />
      <main>
        {/* Hero Section */}
        <section id="top">
          <Hero />
        </section>
        
        {/* What We Do Section */}
        <WhatWeDo />
        
        {/* How We Help Section */}
        <HowWeHelp />
        
        {/* Pricing Section */}
        <Pricing />
        
        {/* Testimonials Section */}
        <Testimonials />
        
        {/* CTA Section */}
        <CTA />
      </main>
      <Footer />
    </div>
  );
}
