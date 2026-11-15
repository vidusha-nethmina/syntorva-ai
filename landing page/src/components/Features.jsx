import React from 'react';
import { CORE_FEATURES } from '../data/projectData';

export default function Features() {
  // SVG Icon mappings for clean modern visual presentation
  const renderFeatureIcon = (id) => {
    switch (id) {
      case 'image-analysis':
        return (
          <svg className="w-6 h-6 text-emerald" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z" />
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 13a3 3 0 11-6 0 3 3 0 016 0z" />
          </svg>
        );
      case 'research-grounded':
        return (
          <svg className="w-6 h-6 text-emerald" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
          </svg>
        );
      case 'agent-collaboration':
        return (
          <svg className="w-6 h-6 text-emerald" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
          </svg>
        );
      case 'decision-support':
      default:
        return (
          <svg className="w-6 h-6 text-emerald" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
          </svg>
        );
    }
  };

  return (
    <section id="features" className="py-20 md:py-28 bg-white text-charcoal relative border-y border-offwhite-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-emerald/10 border border-emerald/20 text-xs font-semibold text-emerald uppercase tracking-wider mb-3">
            <span>Core Capabilities</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-forest">
            Intelligence Designed for Real Agricultural Challenges.
          </h2>
          <p className="mt-4 text-base sm:text-lg text-charcoal-muted leading-relaxed">
            Engineered specifically to solve the limitations of generic chatbots by combining computer vision with strict scientific rigor, contextual farm constraints, and expert escalation.
          </p>
        </div>

        {/* 4 Feature Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {CORE_FEATURES.map((feature, idx) => (
            <div
              key={feature.id}
              className="group bg-offwhite rounded-3xl p-6 sm:p-7 border border-offwhite-border shadow-premium hover:shadow-card-hover hover:border-emerald/40 transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                {/* Header: Icon + Metric Badge */}
                <div className="flex items-center justify-between mb-5">
                  <div className="w-12 h-12 rounded-2xl bg-white border border-offwhite-border flex items-center justify-center group-hover:scale-110 group-hover:bg-emerald/10 group-hover:border-emerald/30 transition-all shadow-sm">
                    {renderFeatureIcon(feature.id)}
                  </div>
                  <span className="text-[11px] font-mono px-2.5 py-1 rounded-full bg-white text-forest font-semibold border border-offwhite-border shadow-xs">
                    0{idx + 1}
                  </span>
                </div>

                {/* Feature Title */}
                <h3 className="text-lg font-bold text-forest mb-2.5 group-hover:text-emerald transition-colors">
                  {feature.title}
                </h3>

                {/* Feature Description */}
                <p className="text-sm text-charcoal-muted leading-relaxed mb-5">
                  {feature.description}
                </p>

                {/* Bullet Highlights */}
                <ul className="space-y-2 border-t border-offwhite-border/80 pt-4">
                  {feature.highlights.map((h, i) => (
                    <li key={i} className="text-xs text-charcoal flex items-start space-x-2">
                      <span className="text-emerald font-bold mt-0.5">•</span>
                      <span>{h}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Card Footer Tag */}
              <div className="mt-6 pt-3 border-t border-offwhite-border/60 flex items-center justify-between text-[11px] font-mono text-charcoal-muted">
                <span>Verification</span>
                <span className="font-semibold text-emerald">{feature.metric}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Banner on Agricultural Rigor */}
        <div className="mt-14 bg-forest rounded-3xl p-6 sm:p-8 text-offwhite border border-mint/20 shadow-premium flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="space-y-1 text-center sm:text-left">
            <div className="text-xs font-mono uppercase tracking-widest text-mint font-semibold">
              Research Integrity Standard
            </div>
            <div className="text-lg sm:text-xl font-bold text-white">
              Every diagnosis is anchored directly in vetted Coconut Research Institute publications.
            </div>
            <p className="text-xs sm:text-sm text-mint/80 max-w-2xl">
              When visual signs are ambiguous or treatments carry phytotoxicity risks, the system abstains from conjecture and immediately refers cases to accredited agronomists.
            </p>
          </div>
          <div className="shrink-0">
            <span className="inline-flex items-center px-4 py-2 rounded-xl bg-forest-light border border-mint/30 text-xs font-mono text-mint">
              CRI Compliance Standard
            </span>
          </div>
        </div>

      </div>
    </section>
  );
}
