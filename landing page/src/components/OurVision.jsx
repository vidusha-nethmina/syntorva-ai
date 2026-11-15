import React from 'react';
import { ROADMAP_PHASES } from '../data/projectData';

export default function OurVision() {
  return (
    <section id="vision" className="py-20 md:py-28 bg-forest text-offwhite relative overflow-hidden">
      {/* Background accents */}
      <div className="absolute inset-0 tech-grid-dark opacity-35 pointer-events-none" />
      <div className="absolute top-1/3 -right-60 w-96 h-96 bg-emerald/20 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-10 -left-48 w-80 h-80 bg-gold/15 rounded-full blur-[120px] pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-forest-light/70 border border-mint/25 text-xs font-semibold text-mint uppercase tracking-wider mb-3">
            <span>Evolutionary Roadmap</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white leading-tight">
            Starting with Agriculture.{' '}
            <span className="bg-gradient-to-r from-mint to-gold bg-clip-text text-transparent">
              Building an Intelligent Future.
            </span>
          </h2>
          <p className="mt-4 text-base sm:text-lg text-offwhite/85 leading-relaxed">
            Zynaide Coco represents our proof-of-value in one of the most critical agricultural domains. Our broader architectural mission is to create a universally reusable, multi-agent deployment framework for complex organizational challenges.
          </p>
          
          {/* Important Clarity / Academic Disclaimer Pill */}
          <div className="mt-6 inline-flex items-center space-x-2 px-4 py-2 rounded-2xl bg-forest-dark/80 border border-gold/30 text-xs font-medium text-gold/90">
            <span className="w-2 h-2 rounded-full bg-gold"></span>
            <span>
              <strong>Note on Roadmap:</strong> Phase 01 represents our current pilot prototype. Phases 02–04 represent research and proposed future development goals.
            </span>
          </div>
        </div>

        {/* 4 Phases Timeline Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {ROADMAP_PHASES.map((phase) => (
            <div
              key={phase.phase}
              className={`relative rounded-3xl p-6 sm:p-7 border flex flex-col justify-between transition-all duration-300 ${
                phase.isCurrent
                  ? 'bg-gradient-to-b from-forest-light/60 to-forest-dark border-mint shadow-soft-glow'
                  : 'bg-forest-dark/80 border-mint/15 hover:border-mint/30 shadow-dark-card'
              }`}
            >
              <div>
                {/* Phase Badge & Status Tag */}
                <div className="flex items-center justify-between mb-4">
                  <span className={`text-xs font-mono font-bold tracking-wider px-2.5 py-1 rounded-lg ${
                    phase.isCurrent ? 'bg-emerald text-white' : 'bg-forest text-mint/80'
                  }`}>
                    {phase.phase}
                  </span>
                  
                  <span className={`text-[10px] font-mono px-2 py-0.5 rounded-full border ${
                    phase.isCurrent
                      ? 'bg-mint/15 text-mint border-mint/40 font-bold'
                      : 'bg-white/5 text-offwhite/60 border-white/10'
                  }`}>
                    {phase.status}
                  </span>
                </div>

                {/* Phase Name & Tagline */}
                <h3 className="text-xl font-bold text-white mb-1">{phase.name}</h3>
                <div className="text-xs font-semibold text-gold mb-4 leading-snug">
                  {phase.tagline}
                </div>

                {/* Description */}
                <p className="text-xs sm:text-sm text-offwhite/80 leading-relaxed mb-6 font-normal">
                  {phase.description}
                </p>

                {/* Key Milestones List */}
                <div className="space-y-2 border-t border-mint/10 pt-4">
                  <div className="text-[10px] uppercase font-mono tracking-wider text-mint/70 font-semibold mb-2">
                    Key Deliverables
                  </div>
                  {phase.milestones.map((m, idx) => (
                    <div key={idx} className="flex items-start space-x-2 text-xs text-offwhite/90">
                      <span className={phase.isCurrent ? 'text-emerald-light font-bold' : 'text-mint/60'}>✦</span>
                      <span>{m}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Card Footer Indicator */}
              <div className="mt-8 pt-4 border-t border-mint/10 flex items-center justify-between text-[11px] font-mono">
                <span className="text-mint/70">Maturity Level</span>
                <span className={phase.isCurrent ? 'text-emerald-light font-bold' : 'text-gold'}>
                  {phase.isCurrent ? 'Pilot Phase' : 'Proposed Future Target'}
                </span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
