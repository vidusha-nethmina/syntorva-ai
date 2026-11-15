import React from 'react';
import PalmIllustration from './PalmIllustration';

export default function Hero({ onOpenCocoModal }) {
  return (
    <section
      id="home"
      className="relative pt-28 pb-20 md:pt-36 md:pb-32 bg-forest text-offwhite overflow-hidden"
    >
      {/* Background Subtle Tech Grid & Ambient Gradients */}
      <div className="absolute inset-0 tech-grid-dark opacity-35 pointer-events-none" />
      <div className="absolute top-1/4 -left-48 w-96 h-96 bg-emerald/20 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute top-1/2 -right-48 w-96 h-96 bg-gold/15 rounded-full blur-[140px] pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Hero Content & CTAs */}
          <div className="lg:col-span-7 space-y-8 text-center lg:text-left">
            
            {/* Top Pill: Project Overview & CRI Context */}
            <div className="inline-flex items-center space-x-2.5 px-3.5 py-1.5 rounded-full bg-forest-light/60 border border-mint/25 text-xs font-medium text-mint backdrop-blur-sm shadow-sm">
              <span className="w-2 h-2 rounded-full bg-emerald-light animate-ping" />
              <span className="font-semibold text-white tracking-wide">PILOT DEPLOYMENT</span>
              <span className="text-mint/60">•</span>
              <span className="text-offwhite/90">Coconut Research Institute (CRI) Context</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-[1.12]">
              Intelligence for Agriculture.{' '}
              <span className="bg-gradient-to-r from-mint via-offwhite to-gold bg-clip-text text-transparent">
                Innovation for Tomorrow.
              </span>
            </h1>

            {/* Supporting Text */}
            <p className="text-base sm:text-lg text-offwhite/85 max-w-2xl mx-auto lg:mx-0 leading-relaxed font-normal">
              Meet <strong className="text-white font-semibold">Zynaide Coco</strong>, an intelligent AI-powered coconut advisory system combining image understanding, trusted agricultural research and specialised AI agents to support better decision-making.
            </p>

            {/* Two Action Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-2">
              <button
                onClick={onOpenCocoModal}
                className="w-full sm:w-auto inline-flex items-center justify-center px-7 py-3.5 rounded-2xl bg-emerald hover:bg-emerald-hover text-white font-bold text-sm tracking-wide shadow-soft-glow transition-all duration-200 hover:-translate-y-0.5 border border-emerald-light/40 group"
              >
                <span>Explore Zynaide Coco</span>
                <svg
                  className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </button>

              <a
                href="#vision"
                className="w-full sm:w-auto inline-flex items-center justify-center px-7 py-3.5 rounded-2xl bg-forest-light/60 hover:bg-forest-light text-offwhite hover:text-white font-semibold text-sm border border-mint/25 transition-all duration-200 hover:-translate-y-0.5"
              >
                Discover Our Vision
              </a>
            </div>

            {/* Key Platform Highlights Footer */}
            <div className="pt-6 border-t border-mint/15 grid grid-cols-3 gap-4 max-w-lg mx-auto lg:mx-0 text-left">
              <div>
                <div className="text-xl sm:text-2xl font-bold text-white tracking-tight">4 Agents</div>
                <div className="text-[11px] text-mint/80 font-mono mt-0.5">Collaborative Mesh</div>
              </div>
              <div>
                <div className="text-xl sm:text-2xl font-bold text-mint tracking-tight">Gemini</div>
                <div className="text-[11px] text-mint/80 font-mono mt-0.5">Vision 1.5 Diagnostic</div>
              </div>
              <div>
                <div className="text-xl sm:text-2xl font-bold text-gold tracking-tight">Zero</div>
                <div className="text-[11px] text-mint/80 font-mono mt-0.5">Blind Hallucination</div>
              </div>
            </div>

          </div>

          {/* Right Column: Visual combining Coconut Plantation & AI elements */}
          <div className="lg:col-span-5 relative">
            <PalmIllustration />
          </div>

        </div>
      </div>
    </section>
  );
}
