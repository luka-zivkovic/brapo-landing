import Header from "@/components/ui/header";
import Footer from "@/components/ui/footer";
import LandingPageHero from "@/components/sections/LandingPageHero";
import WhyLandingPages from "@/components/sections/WhyLandingPages";
import MobileFirst from "@/components/sections/MobileFirst";
import LandingPagePricing from "@/components/sections/LandingPagePricing";
import LandingPageCTA from "@/components/sections/LandingPageCTA";
import LandingPageShowcase from "@/components/sections/LandingPageShowcase";
import ContactForm from "@/components/sections/ContactForm";
import SectionDivider from "@/components/ui/section-divider";

export default function LandingPagesService() {
  return (
    <div className="relative">
      <Header />
      <main>
        {/* Hero Section */}
        <section id="hero">
          <LandingPageHero />
        </section>
        
        {/* Why Landing Pages Section */}
        <section id="why-landing-pages">
          <WhyLandingPages />
        </section>
        
        <SectionDivider />
        
        {/* Mobile First Section */}
        <section id="mobile-first">
          <MobileFirst />
        </section>
        
        <SectionDivider />
        
        {/* Showcase Section */}
        <section id="showcase">
          <LandingPageShowcase />
        </section>
        
        <SectionDivider />
        
        {/* Pricing Section */}
        <section id="pricing">
          <LandingPagePricing />
        </section>
        
        <SectionDivider />
        
        {/* Contact Form Section */}
        <section id="contact">
          <ContactForm />
        </section>
        
        <SectionDivider />
        
        {/* CTA Section */}
        <section id="cta">
          <LandingPageCTA />
        </section>
      </main>
      <Footer />
    </div>
  );
} 