import React from 'react';
import { BRAND } from '../data/projectData';

export default function Footer({ onOpenContactModal, onOpenCocoModal }) {
  const quickLinks = [
    { label: 'Home', href: '#home' },
    { label: 'About Zynaide', href: '#about' },
    { label: 'Core Features', href: '#features' },
    { label: 'How It Works', href: '#how-it-works' },
    { label: 'Our Vision', href: '#vision' },
    { label: 'Contact', href: '#contact' },
  ];

  const agentLinks = [
    { label: 'Coordinator Agent', desc: 'Workflow orchestrator' },
    { label: 'Research Agent', desc: 'CRI knowledge retriever' },
    { label: 'Feasibility Agent', desc: 'Contextual evaluator' },
    { label: 'Review Agent', desc: 'Evidence & safety auditor' },
  ];

  return (
    <footer className="bg-forest-deep text-offwhite border-t border-mint/15 pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-mint/10">
          
          {/* Brand Info */}
          <div className="lg:col-span-5 space-y-4">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 rounded-xl bg-forest border border-mint/30 flex items-center justify-center p-1.5 shadow-soft-glow">
                <img
                  src="/zynaide-leaf-logo.svg"
                  alt="ZYNAIDE Platform"
                  className="w-full h-full object-contain"
                />
              </div>
              <div>
                <span className="text-xl font-extrabold tracking-tight text-white">
                  ZYNAIDE
                </span>
                <span className="block text-[10px] font-mono tracking-wider text-mint uppercase -mt-1">
                  Intelligent AI Agent Platform
                </span>
              </div>
            </div>

            <p className="text-xs sm:text-sm text-offwhite/75 leading-relaxed max-w-sm">
              An intelligent AI-agent deployment and orchestration platform. Featuring <strong className="text-white">Zynaide Coco</strong>, a multimodal AI-powered coconut advisory and decision-support system designed for the Coconut Research Institute (CRI) context.
            </p>

            <div className="pt-2 flex items-center space-x-2 text-xs font-mono text-gold">
              <span className="w-2 h-2 rounded-full bg-gold"></span>
              <span>Grounded in Peer-Reviewed Agricultural Science</span>
            </div>
          </div>

          {/* Quick Navigation Links */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs font-mono uppercase tracking-wider text-mint font-bold">
              Navigation
            </h4>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-xs text-offwhite/80 hover:text-white hover:underline transition"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Agent Architecture Roles */}
          <div className="lg:col-span-4 space-y-3">
            <div className="flex items-center justify-between">
              <h4 className="text-xs font-mono uppercase tracking-wider text-mint font-bold">
                Specialised AI Agents
              </h4>
              <button
                onClick={onOpenCocoModal}
                className="text-[11px] font-mono text-emerald-light hover:underline font-semibold"
              >
                Launch Simulator →
              </button>
            </div>
            <ul className="space-y-2">
              {agentLinks.map((agent) => (
                <li key={agent.label} className="text-xs">
                  <span className="font-semibold text-white">{agent.label}</span>
                  <span className="text-offwhite/60 ml-2">— {agent.desc}</span>
                </li>
              ))}
            </ul>

            <div className="pt-4">
              <button
                onClick={onOpenContactModal}
                className="inline-flex items-center px-4 py-2 rounded-xl bg-forest-light text-xs font-bold text-mint hover:text-white border border-mint/20 transition"
              >
                Inquire With Project Team
              </button>
            </div>
          </div>

        </div>

        {/* Bottom Credits & Mandatory Project Attribution */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-offwhite/60 font-mono">
          <div>
            {BRAND.copyright}
          </div>

          {/* Group CS-31 | Agile Team Project 2026/27 */}
          <div className="px-3.5 py-1.5 rounded-full bg-forest border border-mint/20 text-mint font-semibold text-[11px]">
            {BRAND.academicCredit}
          </div>

          <div className="flex items-center space-x-4">
            <a href="#home" className="hover:text-mint transition">Back to Top ↑</a>
          </div>
        </div>

      </div>
    </footer>
  );
}
