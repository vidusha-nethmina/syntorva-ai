import React from 'react';

export default function CallToAction({ onOpenContactModal, onOpenCocoModal }) {
  return (
    <section id="contact" className="py-20 md:py-28 bg-offwhite text-charcoal relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main CTA Card */}
        <div className="relative rounded-3xl bg-gradient-to-br from-forest via-forest to-forest-deep p-8 sm:p-14 lg:p-16 text-offwhite overflow-hidden shadow-2xl border border-mint/20">
          
          {/* Ambient Lighting Accents */}
          <div className="absolute top-0 right-0 w-80 h-80 bg-emerald/25 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute bottom-0 left-10 w-80 h-80 bg-gold/15 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute inset-0 tech-grid-dark opacity-30 pointer-events-none" />

          <div className="relative z-10 max-w-3xl mx-auto text-center space-y-6">
            
            <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-forest-light/80 border border-mint/25 text-xs font-semibold text-mint uppercase tracking-wider">
              <span>Collaborate With Zynaide</span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white leading-tight">
              Let's Build a Smarter Future Together.
            </h2>

            <p className="text-base sm:text-lg text-offwhite/90 leading-relaxed max-w-2xl mx-auto">
              Connecting artificial intelligence, trusted knowledge and meaningful innovation.
            </p>

            {/* Buttons Row */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
              <button
                onClick={onOpenContactModal}
                className="w-full sm:w-auto px-8 py-4 rounded-2xl bg-emerald hover:bg-emerald-hover text-white font-bold text-sm tracking-wide shadow-soft-glow transition-all duration-200 hover:-translate-y-0.5 border border-emerald-light/40"
              >
                Get in Touch
              </button>

              <button
                onClick={onOpenCocoModal}
                className="w-full sm:w-auto px-8 py-4 rounded-2xl bg-forest-light/70 hover:bg-forest-light text-mint hover:text-white font-semibold text-sm border border-mint/30 transition-all duration-200 hover:-translate-y-0.5"
              >
                Experience Live Advisory Simulator
              </button>
            </div>

            {/* Academic & Affiliation Notice */}
            <div className="pt-8 border-t border-mint/15 text-xs text-mint/70 font-mono flex flex-wrap items-center justify-center gap-x-6 gap-y-2">
              <span>Coconut Research Institute Context</span>
              <span>•</span>
              <span>Group CS-31 | Agile Team Project 2026/27</span>
              <span>•</span>
              <span>Open for Academic & Agronomy Partnerships</span>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
