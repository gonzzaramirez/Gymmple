import { HeroSection } from "./components/hero-section";
import { WhyChooseSection } from "./components/why-choose-section";
import { SystemCarousel } from "./components/carousel";
import { PricingSection } from "./components/pricing-section";
import { ContactSection } from "./components/contact-section";
import { Background } from "./components/background";

export default function HomePage() {
  return (
    <main className="relative min-h-screen">
      <Background />
      <HeroSection />

      <WhyChooseSection />

      <SystemCarousel />

      <PricingSection />

      <ContactSection />
    </main>
  );
}
