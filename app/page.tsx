import Hero from "@/components/ui/hero";
import Header from "@/components/ui/header";
import Footer from "@/components/ui/footer";
import HowWeHelp from "@/components/sections/HowWeHelp";
import WhatWeDo from "@/components/sections/WhatWeDo";
import Pricing from "@/components/sections/Pricing";
import Testimonials from "@/components/sections/Testimonials";
import CTA from "@/components/sections/CTA";
import SectionDivider from "@/components/ui/section-divider";


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
        <section id="what-we-do">
          <WhatWeDo />
        </section>
        
        {/* Section Divider */}
        <SectionDivider />
        
        {/* How We Help Section */}
        <section id="how-we-help">
          <HowWeHelp />
        </section>
        
        {/* Section Divider */}
        <SectionDivider />
        
        {/* Pricing Section */}
        <section id="pricing">
          <Pricing />
        </section>
        
        {/* Section Divider */}
        <SectionDivider />
        
        {/* Testimonials Section */}
        <section id="testimonials">
          <Testimonials />
        </section>
        
        {/* Section Divider */}
        <SectionDivider />
        
        {/* CTA Section */}
        <section id="cta">
          <CTA />
        </section>
      </main>
      <Footer />
    </div>
  );
}
