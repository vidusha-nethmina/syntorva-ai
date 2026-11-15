import React, { useState } from 'react';
import { SIMULATED_CASES, AGENTS } from '../data/projectData';

export default function CocoDemoModal({ isOpen, onClose }) {
  const [selectedCaseId, setSelectedCaseId] = useState(SIMULATED_CASES[0].id);
  const [activeTab, setActiveTab] = useState('agent-breakdown'); // 'agent-breakdown' | 'final-advisory'

  if (!isOpen) return null;

  const activeCase = SIMULATED_CASES.find((c) => c.id === selectedCaseId) || SIMULATED_CASES[0];

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-charcoal/80 backdrop-blur-md flex items-center justify-center p-3 sm:p-6 animate-fadeIn">
      {/* Modal Card */}
      <div className="relative w-full max-w-4xl bg-gradient-to-b from-forest to-forest-deep rounded-3xl border border-mint/30 shadow-2xl overflow-hidden text-offwhite my-8">
        
        {/* Header Bar */}
        <div className="flex items-center justify-between px-6 py-5 border-b border-mint/15 bg-forest-dark/90">
          <div className="flex items-center space-x-3">
            <div className="w-9 h-9 rounded-xl bg-emerald/20 border border-emerald/50 flex items-center justify-center text-mint font-bold text-sm">
              ZC
            </div>
            <div>
              <div className="flex items-center space-x-2">
                <h3 className="text-lg font-bold text-white tracking-tight">Zynaide Coco Interactive Explorer</h3>
                <span className="px-2 py-0.5 text-[10px] uppercase font-mono font-bold tracking-wider rounded-md bg-gold/20 text-gold border border-gold/40">
                  CRI Pilot Simulation
                </span>
              </div>
              <p className="text-xs text-mint/80">
                Explore how multimodal Gemini Vision and 4 specialized agents deliberate on field inquiries.
              </p>
            </div>
          </div>
          
          <button
            onClick={onClose}
            className="w-9 h-9 rounded-full bg-forest-light/60 hover:bg-forest-light text-mint/80 hover:text-white flex items-center justify-center transition border border-mint/20 text-xl font-medium"
            aria-label="Close modal"
          >
            &times;
          </button>
        </div>

        {/* Content Body */}
        <div className="p-6 sm:p-8 space-y-6">
          
          {/* Case Selector Pills */}
          <div>
            <div className="text-xs font-mono uppercase tracking-wider text-mint/70 mb-2 font-semibold">
              Select Sample Agricultural Diagnostic Case:
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5">
              {SIMULATED_CASES.map((item) => {
                const isSelected = item.id === selectedCaseId;
                return (
                  <button
                    key={item.id}
                    onClick={() => setSelectedCaseId(item.id)}
                    className={`text-left p-3 rounded-2xl border transition-all ${
                      isSelected
                        ? 'bg-emerald/20 border-emerald shadow-soft-glow'
                        : 'bg-forest-dark/60 border-mint/10 hover:border-mint/30 text-mint/70 hover:text-white'
                    }`}
                  >
                    <div className="text-xs font-bold text-white truncate">{item.title}</div>
                    <div className="text-[11px] font-mono text-mint/80 truncate italic mt-0.5">
                      {item.scientificName}
                    </div>
                    <div className="flex items-center justify-between mt-2 pt-1.5 border-t border-white/5 text-[10px] font-mono">
                      <span className="text-gold">{item.confidence}</span>
                      <span className={item.id === 'bud-rot' ? 'text-amber-400 font-bold' : 'text-mint/60'}>
                        {item.urgency.split(' ')[0]}
                      </span>
                    </div>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Diagnostic Profile Banner */}
          <div className="bg-forest-dark/80 rounded-2xl border border-mint/20 p-5 grid grid-cols-1 md:grid-cols-12 gap-5 items-center">
            <div className="md:col-span-8 space-y-2">
              <div className="flex items-center space-x-2">
                <span className="px-2 py-0.5 rounded text-[10px] font-mono font-semibold bg-mint/15 text-mint border border-mint/30">
                  Visible Symptoms
                </span>
                <span className="text-xs font-mono text-gold">{activeCase.scientificName}</span>
              </div>
              <h4 className="text-base font-bold text-white">{activeCase.title}</h4>
              <p className="text-xs text-offwhite/90 leading-relaxed">{activeCase.symptomSummary}</p>
            </div>
            
            <div className="md:col-span-4 bg-forest/90 rounded-xl p-3.5 border border-mint/15 space-y-1.5">
              <div className="text-[10px] uppercase font-mono text-mint/70">Research Grounding</div>
              <div className="text-xs font-semibold text-white leading-snug">{activeCase.researchSource}</div>
              <div className="text-[11px] font-mono text-gold flex items-center space-x-1 pt-1">
                <span className="w-1.5 h-1.5 rounded-full bg-gold inline-block"></span>
                <span>Verified with CRI Compendium</span>
              </div>
            </div>
          </div>

          {/* Tab Selector: Agent Breakdown vs Final Advisory */}
          <div className="flex items-center space-x-2 border-b border-mint/15 pb-2">
            <button
              onClick={() => setActiveTab('agent-breakdown')}
              className={`px-4 py-2 text-xs font-bold rounded-xl transition ${
                activeTab === 'agent-breakdown'
                  ? 'bg-emerald text-white shadow-soft-glow'
                  : 'text-mint/70 hover:text-white bg-transparent'
              }`}
            >
              4-Agent Deliberation & Findings
            </button>
            <button
              onClick={() => setActiveTab('final-advisory')}
              className={`px-4 py-2 text-xs font-bold rounded-xl transition ${
                activeTab === 'final-advisory'
                  ? 'bg-emerald text-white shadow-soft-glow'
                  : 'text-mint/70 hover:text-white bg-transparent'
              }`}
            >
              Synthesized Decision & Expert Escalation
            </button>
          </div>

          {/* Tab 1: 4-Agent Deliberation */}
          {activeTab === 'agent-breakdown' && (
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
              {/* Coordinator */}
              <div className="bg-forest-dark/90 rounded-2xl border border-mint/15 p-4 space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold text-white flex items-center space-x-1.5">
                    <span className="w-2 h-2 rounded-full bg-emerald"></span>
                    <span>Coordinator Agent</span>
                  </span>
                  <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-emerald/20 text-mint border border-emerald/40">
                    Workflow
                  </span>
                </div>
                <p className="text-xs text-mint/90 leading-relaxed font-sans">
                  {activeCase.agentFindings.coordinator}
                </p>
              </div>

              {/* Research */}
              <div className="bg-forest-dark/90 rounded-2xl border border-mint/15 p-4 space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold text-white flex items-center space-x-1.5">
                    <span className="w-2 h-2 rounded-full bg-mint"></span>
                    <span>Research Agent</span>
                  </span>
                  <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-mint/20 text-mint border border-mint/40">
                    CRI Grounded
                  </span>
                </div>
                <p className="text-xs text-mint/90 leading-relaxed font-sans">
                  {activeCase.agentFindings.research}
                </p>
              </div>

              {/* Feasibility */}
              <div className="bg-forest-dark/90 rounded-2xl border border-mint/15 p-4 space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold text-white flex items-center space-x-1.5">
                    <span className="w-2 h-2 rounded-full bg-gold"></span>
                    <span>Feasibility Agent</span>
                  </span>
                  <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-gold/20 text-gold border border-gold/40">
                    Context Match
                  </span>
                </div>
                <p className="text-xs text-mint/90 leading-relaxed font-sans">
                  {activeCase.agentFindings.feasibility}
                </p>
              </div>

              {/* Review */}
              <div className="bg-forest-dark/90 rounded-2xl border border-mint/15 p-4 space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold text-white flex items-center space-x-1.5">
                    <span className="w-2 h-2 rounded-full bg-emerald-light"></span>
                    <span>Review Agent</span>
                  </span>
                  <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-emerald/20 text-emerald-light border border-emerald/40">
                    Quality Audit
                  </span>
                </div>
                <p className="text-xs text-mint/90 leading-relaxed font-sans">
                  {activeCase.agentFindings.review}
                </p>
              </div>
            </div>
          )}

          {/* Tab 2: Synthesized Decision & Expert Escalation */}
          {activeTab === 'final-advisory' && (
            <div className="bg-forest-dark/90 rounded-2xl border border-mint/20 p-6 space-y-4">
              <div className="flex items-center justify-between flex-wrap gap-2">
                <span className="text-xs font-mono uppercase tracking-wider text-mint/80 font-semibold">
                  Synthesized Advisory Recommendation
                </span>
                <span className="text-xs font-mono px-3 py-1 rounded-full bg-gold/20 text-gold border border-gold/40">
                  Confidence: {activeCase.confidence}
                </span>
              </div>
              
              <div className="bg-forest/80 rounded-xl p-4 border border-mint/15 text-sm text-white leading-relaxed">
                {activeCase.recommendation}
              </div>

              {/* High Stakes Warning / Expert referral banner */}
              {selectedCaseId === 'bud-rot' ? (
                <div className="p-4 rounded-xl bg-amber-950/50 border border-amber-500/40 text-amber-200 text-xs flex items-start space-x-3">
                  <span className="text-lg">⚠️</span>
                  <div>
                    <div className="font-bold text-white">Human-In-The-Loop Agronomist Escalation Triggered</div>
                    <div className="mt-1 leading-relaxed text-amber-200/90">
                      Because Phytophthora Bud Rot can lead to total crown collapse within 14–21 days, Zynaide Coco's Review Agent prevents solitary automated resolution and automatically initiates a referral ticket to certified Coconut Research Institute (CRI) extension specialists.
                    </div>
                  </div>
                </div>
              ) : (
                <div className="p-3.5 rounded-xl bg-emerald/15 border border-emerald/40 text-xs text-mint flex items-center space-x-2.5">
                  <span className="w-2 h-2 rounded-full bg-emerald"></span>
                  <span>
                    Verified against standard agronomic advisory protocols. Recommended for seasonal field deployment.
                  </span>
                </div>
              )}
            </div>
          )}

        </div>

        {/* Footer Bar */}
        <div className="px-6 py-4 bg-forest-dark/95 border-t border-mint/15 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-mint/70">
          <div>
            Grounding Source: <span className="text-white font-medium">{activeCase.researchSource}</span>
          </div>
          <button
            onClick={onClose}
            className="w-full sm:w-auto px-5 py-2 rounded-xl bg-emerald hover:bg-emerald-hover text-white font-semibold transition"
          >
            Close Explorer
          </button>
        </div>

      </div>
    </div>
  );
}
