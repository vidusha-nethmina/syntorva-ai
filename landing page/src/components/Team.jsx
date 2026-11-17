import React from 'react';
import { TEAM_MEMBERS } from '../data/projectData';

const accentStyles = {
  emerald: 'bg-emerald/15 text-emerald border-emerald/20',
  mint: 'bg-mint/30 text-forest border-mint/50',
  gold: 'bg-gold/15 text-gold border-gold/30',
  forest: 'bg-forest text-mint border-forest'
};

export default function Team() {
  return (
    <section id="team" className="py-20 md:py-28 bg-offwhite text-charcoal relative overflow-hidden">
      <div className="absolute inset-0 tech-dots opacity-40 pointer-events-none" />
      <div className="absolute -top-32 -right-32 w-80 h-80 bg-mint/30 rounded-full blur-3xl pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mb-14">
          <div className="inline-flex items-center px-3 py-1 rounded-full bg-emerald/10 border border-emerald/20 text-xs font-semibold text-emerald uppercase tracking-wider mb-3">
            The People Behind Zynaide
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-forest leading-tight">
            One team.{' '}
            <span className="text-emerald">Four perspectives.</span>
          </h2>
          <p className="mt-4 text-base sm:text-lg text-charcoal-muted leading-relaxed">
            Zynaide brings together product thinking, AI engineering, agricultural expertise, and human-centred design to turn trusted knowledge into useful decisions.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {TEAM_MEMBERS.map((member) => (
            <article
              key={member.name}
              className="group bg-white rounded-3xl p-6 border border-offwhite-border shadow-premium hover:shadow-card-hover transition-all duration-300 hover:-translate-y-1"
            >
              <div className={`w-14 h-14 rounded-2xl border flex items-center justify-center text-sm font-extrabold tracking-wide ${accentStyles[member.accent]}`}>
                {member.initials}
              </div>
              <div className="mt-6">
                <h3 className="text-lg font-bold text-forest">{member.name}</h3>
                <p className="mt-1 text-xs font-mono uppercase tracking-wide text-emerald">{member.role}</p>
                <p className="mt-4 text-sm text-charcoal-muted leading-relaxed">{member.description}</p>
              </div>
              <div className="mt-6 pt-4 border-t border-offwhite-border flex items-center space-x-2 text-[11px] font-mono text-charcoal-light">
                <span className="w-2 h-2 rounded-full bg-emerald animate-pulse" />
                <span>Building with purpose</span>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-8 rounded-2xl bg-forest px-5 py-4 sm:px-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 text-sm text-offwhite/85 border border-mint/20">
          <span>
            <strong className="text-white">Academic project team:</strong> Group CS-31
          </span>
          <span className="text-mint font-mono text-xs">Agile Team Project 2026/27</span>
        </div>
      </div>
    </section>
  );
}
