import React, { useState } from 'react';
import { AGENTS } from '../data/projectData';

export default function About({ onOpenCocoModal }) {
  const [activeAgentId, setActiveAgentId] = useState('coordinator');
  const activeAgent = AGENTS.find((a) => a.id === activeAgentId) || AGENTS[0];

  return (
    <section id="about" className="py-20 md:py-28 bg-offwhite text-charcoal relative">
      {/* Subtle tech background accents */}
      <div className="absolute inset-0 tech-grid opacity-30 pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-emerald/10 border border-emerald/20 text-xs font-semibold text-emerald uppercase tracking-wider mb-3">
            <span>Platform Architecture</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-forest leading-tight">
            More Than an AI Assistant.{' '}
            <span className="text-emerald">A Smarter Way to Connect Knowledge.</span>
          </h2>
          <p className="mt-4 text-base sm:text-lg text-charcoal-muted leading-relaxed">
            Conventional single-prompt chatbots often hallucinate, generalize, or deliver ungrounded advice. <strong>ZYNAIDE</strong> is fundamentally engineered as an intelligent agent deployment and orchestration platform where specialized autonomous roles collaborate, fact-check, and ground every conclusion in peer-reviewed science.
          </p>
        </div>

        {/* Two-Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-center">
          
          {/* Left Column: Platform vs Pilot Product Story */}
          <div className="lg:col-span-6 space-y-6">
            
            <div className="bg-white rounded-3xl p-6 sm:p-8 border border-offwhite-border shadow-premium hover:shadow-card-hover transition-all">
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-10 h-10 rounded-2xl bg-forest text-mint flex items-center justify-center font-bold text-sm">
                  01
                </div>
                <div>
                  <h3 className="text-lg font-bold text-forest">The ZYNAIDE Platform Engine</h3>
                  <p className="text-xs text-charcoal-muted">Autonomous Multi-Agent Orchestration</p>
                </div>
              </div>
              <p className="text-sm text-charcoal-muted leading-relaxed">
                At its core, ZYNAIDE decouples raw model inference from decision governance. Rather than relying on a black-box model, ZYNAIDE distributes cognitive labor across specialized sub-agents with strict verification boundaries, telemetry logging, and deterministic fallback protocols.
              </p>
            </div>

            <div className="bg-white rounded-3xl p-6 sm:p-8 border border-offwhite-border shadow-premium hover:shadow-card-hover transition-all">
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-10 h-10 rounded-2xl bg-emerald text-white flex items-center justify-center font-bold text-sm">
                  02
                </div>
                <div>
                  <h3 className="text-lg font-bold text-forest">Pilot Product: ZYNAIDE COCO</h3>
                  <p className="text-xs text-charcoal-muted">Dedicated to the Coconut Research Institute (CRI) Context</p>
                </div>
              </div>
              <p className="text-sm text-charcoal-muted leading-relaxed">
                Our initial flagship deployment focuses on the critical coconut agro-economy. Zynaide Coco equips plantation managers and agricultural extension officers with multimodal disease diagnostics, indexing certified CRI publications to identify pathogens, pests, and physiological deficiencies.
              </p>
              
              <div className="mt-4 pt-4 border-t border-offwhite-border flex items-center justify-between">
                <span className="text-xs font-mono text-emerald font-semibold">
                  Zero blind diagnosis • Human-in-the-loop referrals
                </span>
                <button
                  onClick={onOpenCocoModal}
                  className="text-xs font-bold text-forest hover:text-emerald flex items-center space-x-1"
                >
                  <span>Test in Simulator</span>
                  <span>→</span>
                </button>
              </div>
            </div>

            <div className="bg-forest-light/10 rounded-2xl p-4 border border-emerald/20 flex items-start space-x-3 text-xs text-forest">
              <span className="text-emerald font-bold text-base">✦</span>
              <p className="leading-relaxed">
                <strong>Future-Proof Vision:</strong> While Zynaide Coco pioneers in agronomy, the platform's multi-agent architecture is designed to generalize seamlessly across enterprise organizations, legal compliance, and manufacturing.
              </p>
            </div>

          </div>

          {/* Right Column: Interactive 4-Agent Orchestration Architecture Card */}
          <div className="lg:col-span-6">
            <div className="bg-forest rounded-3xl p-6 sm:p-8 text-offwhite border border-mint/20 shadow-dark-card relative overflow-hidden">
              
              {/* Decorative background glow */}
              <div className="absolute top-0 right-0 w-64 h-64 bg-emerald/20 rounded-full blur-3xl pointer-events-none" />
              <div className="absolute bottom-0 left-0 w-64 h-64 bg-gold/15 rounded-full blur-3xl pointer-events-none" />

              <div className="relative z-10 flex items-center justify-between border-b border-mint/15 pb-4 mb-6">
                <div>
                  <span className="text-[10px] font-mono uppercase tracking-widest text-mint font-semibold">
                    Interactive Architecture
                  </span>
                  <h3 className="text-xl font-bold text-white tracking-tight">The 4 Specialised Agents</h3>
                </div>
                <span className="px-2.5 py-1 text-[11px] font-mono rounded-lg bg-forest-light text-mint border border-mint/20">
                  Select Role
                </span>
              </div>

              {/* Agent Role Selection Tabs */}
              <div className="relative z-10 grid grid-cols-2 gap-2.5 mb-6">
                {AGENTS.map((agent) => {
                  const isSelected = agent.id === activeAgentId;
                  return (
                    <button
                      key={agent.id}
                      onClick={() => setActiveAgentId(agent.id)}
                      className={`p-3 rounded-2xl border text-left transition-all ${
                        isSelected
                          ? 'bg-emerald/30 border-mint shadow-soft-glow'
                          : 'bg-forest-dark/70 border-mint/10 hover:border-mint/30 text-mint/70 hover:text-white'
                      }`}
                    >
                      <div className="text-xs font-bold text-white truncate">{agent.name}</div>
                      <div className="text-[10px] font-mono text-mint/80 truncate mt-0.5">{agent.badge}</div>
                    </button>
                  );
                })}
              </div>

              {/* Active Agent Detail Card */}
              <div className="relative z-10 bg-forest-dark/90 rounded-2xl p-5 border border-mint/20 space-y-3">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2.5">
                    <div className="w-8 h-8 rounded-xl bg-emerald/20 border border-emerald/50 flex items-center justify-center text-mint font-bold text-xs">
                      {activeAgent.name.charAt(0)}
                    </div>
                    <div>
                      <div className="text-sm font-bold text-white">{activeAgent.name}</div>
                      <div className="text-[11px] font-mono text-gold">{activeAgent.role}</div>
                    </div>
                  </div>
                  <span className="text-[11px] font-mono px-2.5 py-1 rounded bg-forest border border-mint/20 text-mint">
                    {activeAgent.metrics}
                  </span>
                </div>

                <p className="text-xs text-offwhite/90 leading-relaxed font-normal">
                  {activeAgent.description}
                </p>

                <div className="pt-2 border-t border-mint/10 flex items-center justify-between text-[11px] font-mono text-mint/70">
                  <span>Protocol: Consensus Driven</span>
                  <span className="text-emerald-light">Safety Checked ✓</span>
                </div>
              </div>

              {/* Architecture Synapse Diagram Preview */}
              <div className="relative z-10 mt-6 pt-4 border-t border-mint/15 flex items-center justify-between text-xs text-mint/80">
                <span className="flex items-center space-x-1.5">
                  <span className="w-2 h-2 rounded-full bg-gold"></span>
                  <span>Human-in-the-Loop Referral Gate</span>
                </span>
                <span className="font-mono text-[11px] text-offwhite/60">
                  CRI Extension Protocol #26
                </span>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
