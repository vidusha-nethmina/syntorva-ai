import React, { useState } from 'react';
import { WORKFLOW_STAGES } from '../data/projectData';

export default function HowItWorks() {
  const [activeStep, setActiveStep] = useState(1);

  const renderStepIcon = (step) => {
    switch (step) {
      case 1:
        return (
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
          </svg>
        );
      case 2:
        return (
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
          </svg>
        );
      case 3:
        return (
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 14v3m4-3v3m4-3v3M3 21h18M3 10h18M3 7l9-4 9 4M4 10h16v11H4V10z" />
          </svg>
        );
      case 4:
        return (
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z" />
          </svg>
        );
      case 5:
        return (
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
          </svg>
        );
      case 6:
      default:
        return (
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
          </svg>
        );
    }
  };

  const selectedStage = WORKFLOW_STAGES.find((s) => s.step === activeStep) || WORKFLOW_STAGES[0];

  return (
    <section id="how-it-works" className="py-20 md:py-28 bg-offwhite text-charcoal relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-emerald/10 border border-emerald/20 text-xs font-semibold text-emerald uppercase tracking-wider mb-3">
            <span>Orchestration Pipeline</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-forest">
            From a Simple Inquiry to an Informed Response.
          </h2>
          <p className="mt-4 text-base sm:text-lg text-charcoal-muted leading-relaxed">
            Follow the six systematic stages executed within seconds whenever a grower, agronomist, or estate manager submits a coconut health observation.
          </p>
        </div>

        {/* 6-Step Visual Timeline Navigator */}
        <div className="relative mb-12">
          {/* Horizontal Connecting Track on Desktop */}
          <div className="hidden lg:block absolute top-7 left-12 right-12 h-1 bg-offwhite-border -z-0">
            <div
              className="h-full bg-emerald transition-all duration-500"
              style={{ width: `${((activeStep - 1) / (WORKFLOW_STAGES.length - 1)) * 100}%` }}
            />
          </div>

          {/* Stepper Buttons */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 sm:gap-4 relative z-10">
            {WORKFLOW_STAGES.map((stage) => {
              const isCurrent = stage.step === activeStep;
              const isPast = stage.step < activeStep;

              return (
                <button
                  key={stage.step}
                  onClick={() => setActiveStep(stage.step)}
                  className={`flex flex-col items-center p-4 rounded-2xl border text-center transition-all ${
                    isCurrent
                      ? 'bg-forest text-white border-forest shadow-premium scale-105'
                      : isPast
                      ? 'bg-white text-forest border-emerald/30 hover:border-emerald'
                      : 'bg-white/80 text-charcoal-muted border-offwhite-border hover:border-charcoal-muted/30'
                  }`}
                >
                  <div
                    className={`w-11 h-11 rounded-2xl flex items-center justify-center font-bold text-sm mb-2.5 transition-all ${
                      isCurrent
                        ? 'bg-emerald text-white shadow-soft-glow'
                        : isPast
                        ? 'bg-emerald/15 text-emerald'
                        : 'bg-offwhite text-charcoal-muted'
                    }`}
                  >
                    {renderStepIcon(stage.step)}
                  </div>
                  <span className="text-[11px] font-mono uppercase tracking-wider font-semibold opacity-75">
                    Stage 0{stage.step}
                  </span>
                  <span className={`text-xs font-bold mt-1 line-clamp-1 ${isCurrent ? 'text-mint' : ''}`}>
                    {stage.title.split(' ')[0]} {stage.title.split(' ')[1]}
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Active Stage Detailed Interactive Card */}
        <div className="bg-white rounded-3xl p-6 sm:p-10 border border-offwhite-border shadow-card-hover relative overflow-hidden">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Left: Stage Information */}
            <div className="lg:col-span-7 space-y-4">
              <div className="flex items-center space-x-3">
                <span className="px-3 py-1 rounded-full text-xs font-mono font-bold bg-forest text-mint">
                  Stage 0{selectedStage.step} of 06
                </span>
                <span className="px-3 py-1 rounded-full text-xs font-mono font-semibold bg-emerald/10 text-emerald border border-emerald/20">
                  {selectedStage.tag}
                </span>
              </div>

              <h3 className="text-2xl sm:text-3xl font-extrabold text-forest tracking-tight">
                {selectedStage.title}
              </h3>

              <div className="text-base text-charcoal font-medium leading-relaxed bg-offwhite p-4 rounded-2xl border border-offwhite-border">
                {selectedStage.summary}
              </div>

              <p className="text-sm text-charcoal-muted leading-relaxed">
                {selectedStage.detail}
              </p>

              {/* Navigation controls */}
              <div className="pt-4 flex items-center space-x-3">
                <button
                  disabled={activeStep === 1}
                  onClick={() => setActiveStep((prev) => Math.max(1, prev - 1))}
                  className={`px-4 py-2 rounded-xl text-xs font-bold border transition ${
                    activeStep === 1
                      ? 'opacity-40 cursor-not-allowed border-offwhite-border'
                      : 'border-offwhite-border hover:bg-offwhite text-forest'
                  }`}
                >
                  ← Previous Stage
                </button>
                <button
                  disabled={activeStep === 6}
                  onClick={() => setActiveStep((prev) => Math.min(6, prev + 1))}
                  className={`px-4 py-2 rounded-xl text-xs font-bold transition ${
                    activeStep === 6
                      ? 'opacity-40 cursor-not-allowed bg-offwhite-border text-charcoal-muted'
                      : 'bg-emerald hover:bg-emerald-hover text-white shadow-sm'
                  }`}
                >
                  Next Stage →
                </button>
              </div>
            </div>

            {/* Right: Stage Visual Telemetry Panel */}
            <div className="lg:col-span-5 bg-forest-dark rounded-2xl p-6 text-offwhite border border-mint/20 space-y-4">
              <div className="flex items-center justify-between border-b border-mint/15 pb-3">
                <div className="text-xs font-mono text-mint uppercase tracking-wider flex items-center space-x-2">
                  <span className="w-2 h-2 rounded-full bg-emerald animate-pulse"></span>
                  <span>Pipeline Execution Telemetry</span>
                </div>
                <span className="text-[11px] font-mono text-gold">Realtime</span>
              </div>

              {selectedStage.step === 1 && (
                <div className="space-y-2 text-xs font-mono">
                  <div className="text-mint/80">&gt; Payload: Multi-part form received</div>
                  <div className="text-white">&gt; Field Image: high_res_frond_4032.jpg</div>
                  <div className="text-white">&gt; Grower Note: "Spear leaf chlorosis observed on 4 palms"</div>
                  <div className="text-gold">&gt; Location: Kurunegala Coconut Triangle</div>
                </div>
              )}

              {selectedStage.step === 2 && (
                <div className="space-y-2 text-xs font-mono">
                  <div className="text-mint/80">&gt; Vision Engine: Gemini 1.5 Multimodal</div>
                  <div className="text-white">&gt; Visual Feature Vector: [0.892, 0.441, 0.912]</div>
                  <div className="text-emerald-light">&gt; Lesion Bounding: (x: 142, y: 88, w: 94, h: 62)</div>
                  <div className="text-gold">&gt; Symptom Match: Phytophthora necrosis vs Aceria mite</div>
                </div>
              )}

              {selectedStage.step === 3 && (
                <div className="space-y-2 text-xs font-mono">
                  <div className="text-mint/80">&gt; Research Agent: Vector query executed</div>
                  <div className="text-white">&gt; CRI Pathology Leaflets indexed: 142 documents</div>
                  <div className="text-emerald-light">&gt; Matched: CRI Advisory Circular No. 112 (Bud Rot)</div>
                  <div className="text-white">&gt; Grounding Citation Score: 98.4%</div>
                </div>
              )}

              {selectedStage.step === 4 && (
                <div className="space-y-2 text-xs font-mono">
                  <div className="text-mint/80">&gt; Feasibility Agent: Regional parameters loaded</div>
                  <div className="text-white">&gt; Soil: Red Yellow Podzolic (Wet Intermediate Zone)</div>
                  <div className="text-white">&gt; Season: Southwest Monsoon precursor</div>
                  <div className="text-gold">&gt; Constraint: Chemical fungicide requires immediate dry spell</div>
                </div>
              )}

              {selectedStage.step === 5 && (
                <div className="space-y-2 text-xs font-mono">
                  <div className="text-mint/80">&gt; Review Agent: Safety audit initiated</div>
                  <div className="text-white">&gt; Hallucination check: Pass (0 ungrounded claims)</div>
                  <div className="text-gold">&gt; Uncertainty assessment: High stake pathogen detected</div>
                  <div className="text-emerald-light">&gt; Dual Outcome: Advisory + Expert CRI referral ticket</div>
                </div>
              )}

              {selectedStage.step === 6 && (
                <div className="space-y-2 text-xs font-mono">
                  <div className="text-emerald-light">&gt; Outcome Status: Delivered to Grower</div>
                  <div className="text-white">&gt; Advisory: Immediate crown hygiene instructions</div>
                  <div className="text-mint">&gt; CRI Ticket Created: #CRI-AGR-2026-903</div>
                  <div className="text-gold">&gt; SLA: Field Agronomist review within 24 hours</div>
                </div>
              )}

              <div className="pt-3 border-t border-mint/10 text-[11px] font-mono text-mint/60 flex items-center justify-between">
                <span>Latency: ~1.2s</span>
                <span className="text-mint">Status: OK 200</span>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
