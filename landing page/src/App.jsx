import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Features from './components/Features';
import HowItWorks from './components/HowItWorks';
import OurVision from './components/OurVision';
import CallToAction from './components/CallToAction';
import Footer from './components/Footer';
import CocoDemoModal from './components/CocoDemoModal';
import ContactModal from './components/ContactModal';

export default function App() {
  const [isCocoModalOpen, setIsCocoModalOpen] = useState(false);
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);

  return (
    <div className="min-h-screen bg-offwhite text-charcoal font-sans flex flex-col selection:bg-emerald/20 selection:text-forest">
      {/* Sticky Navigation Bar */}
      <Navbar
        onOpenCocoModal={() => setIsCocoModalOpen(true)}
        onOpenContactModal={() => setIsContactModalOpen(true)}
      />

      {/* Main Sections Container */}
      <main className="flex-grow">
        {/* Section 2: Hero */}
        <Hero
          onOpenCocoModal={() => setIsCocoModalOpen(true)}
        />

        {/* Section 3: About Zynaide & 4-Agent Architecture */}
        <About
          onOpenCocoModal={() => setIsCocoModalOpen(true)}
        />

        {/* Section 4: Core Features */}
        <Features />

        {/* Section 5: How It Works 6-Stage Workflow */}
        <HowItWorks />

        {/* Section 6: Our Vision 4-Phase Roadmap */}
        <OurVision />

        {/* Section 7: Call to Action */}
        <CallToAction
          onOpenContactModal={() => setIsContactModalOpen(true)}
          onOpenCocoModal={() => setIsCocoModalOpen(true)}
        />
      </main>

      {/* Section 8: Footer */}
      <Footer
        onOpenContactModal={() => setIsContactModalOpen(true)}
        onOpenCocoModal={() => setIsCocoModalOpen(true)}
      />

      {/* Interactive Modals */}
      <CocoDemoModal
        isOpen={isCocoModalOpen}
        onClose={() => setIsCocoModalOpen(false)}
      />

      <ContactModal
        isOpen={isContactModalOpen}
        onClose={() => setIsContactModalOpen(false)}
      />
    </div>
  );
}
