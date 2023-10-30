import React from "react";
import HeroSection from "./Hero/HeroSection";
import Services from "./Service/ServiceSection";
import BenefitSection from "./Benefits/BenefitSection";
import PricingSection from "./Pricing/PricingSection";
import TestimonialSection from "./Testimonial/Testimonial";
import CtaSection from "./Action/ActionSection";
import Footer from "./Footer/Footer";

function App() {
  return (
    <div>
      <HeroSection />
      <Services />
      <BenefitSection />
      <PricingSection />
      <TestimonialSection />
      <CtaSection />
      <Footer />
    </div>
  );
}

export default App;
