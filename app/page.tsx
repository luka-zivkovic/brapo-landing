import { HeroParallax } from "@/components/ui/hero-parallax";
import Header from "@/components/ui/header";
import Footer from "@/components/ui/footer";
import HowWeHelp from "@/components/sections/HowWeHelp";
import WhatWeDo from "@/components/sections/WhatWeDo";
import Pricing from "@/components/sections/Pricing";
import Testimonials from "@/components/sections/Testimonials";
import CTA from "@/components/sections/CTA";
import { heroProducts } from "@/app/data/hero-data";

export default function Home() {
  return (
    <div className="relative">
      <Header />
      <main>
        {/* Hero Section */}
        <section id="top" className="pt-16">
          <HeroParallax products={heroProducts} />
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
