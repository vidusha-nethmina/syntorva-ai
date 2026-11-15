import React from 'react';

export default function PalmIllustration() {
  return (
    <div className="relative w-full max-w-xl mx-auto lg:max-w-none aspect-[4/3.8] flex items-center justify-center select-none">
      {/* Background radial glow */}
      <div className="absolute inset-0 bg-gradient-to-tr from-emerald/20 via-forest-light/30 to-mint/10 rounded-3xl blur-3xl -z-10" />

      {/* Main Container Card */}
      <div className="relative w-full h-full rounded-3xl border border-mint/20 bg-gradient-to-b from-forest/90 via-forest to-forest-deep/95 p-6 md:p-8 shadow-dark-card overflow-hidden flex flex-col justify-between">
        
        {/* Subtle background tech grid */}
        <div className="absolute inset-0 tech-grid-dark opacity-40 pointer-events-none" />

        {/* Ambient Top Glow */}
        <div className="absolute -top-24 -right-24 w-72 h-72 bg-emerald/25 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute -bottom-24 -left-24 w-72 h-72 bg-gold/15 rounded-full blur-3xl pointer-events-none" />

        {/* Header Bar of the Interactive AI Visualization */}
        <div className="relative z-10 flex items-center justify-between border-b border-mint/10 pb-4">
          <div className="flex items-center space-x-3">
            <div className="flex space-x-1.5">
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-light/80 animate-pulse" />
              <span className="w-2.5 h-2.5 rounded-full bg-gold/80" />
              <span className="w-2.5 h-2.5 rounded-full bg-mint/50" />
            </div>
            <div className="text-xs font-mono tracking-wider text-mint uppercase font-semibold flex items-center space-x-2">
              <span className="inline-block w-1.5 h-1.5 rounded-full bg-emerald"></span>
              <span>ZYNAIDE COCO • MULTIMODAL INTAKE</span>
            </div>
          </div>
          <span className="px-2.5 py-1 text-[11px] font-mono font-medium rounded-full bg-emerald/20 text-mint border border-emerald/40">
            CRI Validated
          </span>
        </div>

        {/* Center Illustration: Coconut Palm Canopy + Neural AI Network */}
        <div className="relative z-10 my-auto py-2 flex items-center justify-center">
          <svg
            viewBox="0 0 460 320"
            className="w-full h-auto max-h-[290px] drop-shadow-2xl"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <defs>
              <linearGradient id="palmStemGrad" x1="230" y1="300" x2="230" y2="70" gradientUnits="userSpaceOnUse">
                <stop offset="0%" stopColor="#0B221A" />
                <stop offset="60%" stopColor="#1E8A63" />
                <stop offset="100%" stopColor="#B7E4C7" />
              </linearGradient>

              <linearGradient id="leafGlow" x1="0" y1="0" x2="1" y2="1">
                <stop offset="0%" stopColor="#1E8A63" stopOpacity="0.9" />
                <stop offset="100%" stopColor="#B7E4C7" stopOpacity="0.3" />
              </linearGradient>

              <linearGradient id="goldPulse" x1="0" y1="0" x2="1" y2="0">
                <stop offset="0%" stopColor="#D6B56D" />
                <stop offset="100%" stopColor="#FFE8B5" />
              </linearGradient>

              <filter id="softGlowFilter" x="-20%" y="-20%" width="140%" height="140%">
                <feGaussianBlur stdDeviation="3" result="blur" />
                <feComposite in="SourceGraphic" in2="blur" operator="over" />
              </filter>
            </defs>

            {/* Neural Lattice Synapses connecting palm leaves */}
            <g stroke="rgba(183, 228, 199, 0.25)" strokeWidth="1" strokeDasharray="3 3">
              <line x1="80" y1="120" x2="160" y2="90" />
              <line x1="160" y1="90" x2="230" y2="70" />
              <line x1="230" y1="70" x2="300" y2="90" />
              <line x1="300" y1="90" x2="380" y2="120" />
              <line x1="140" y1="170" x2="230" y2="150" />
              <line x1="230" y1="150" x2="320" y2="170" />
              <line x1="180" y1="230" x2="230" y2="210" />
              <line x1="230" y1="210" x2="280" y2="230" />
            </g>

            {/* Coconut Palm Fronds — Left Side */}
            <path
              d="M230 150 C 180 130, 110 110, 50 140 C 100 160, 170 160, 230 150 Z"
              fill="url(#leafGlow)"
              stroke="#B7E4C7"
              strokeWidth="1.2"
            />
            <path
              d="M230 120 C 160 90, 100 70, 70 85 C 120 100, 180 115, 230 120 Z"
              fill="#1E8A63"
              fillOpacity="0.75"
              stroke="#B7E4C7"
              strokeWidth="0.8"
            />
            <path
              d="M230 90 C 180 50, 130 35, 110 45 C 150 65, 190 75, 230 90 Z"
              fill="#187453"
              fillOpacity="0.85"
            />

            {/* Coconut Palm Fronds — Right Side */}
            <path
              d="M230 150 C 280 130, 350 110, 410 140 C 360 160, 290 160, 230 150 Z"
              fill="url(#leafGlow)"
              stroke="#B7E4C7"
              strokeWidth="1.2"
            />
            <path
              d="M230 120 C 300 90, 360 70, 390 85 C 340 100, 280 115, 230 120 Z"
              fill="#1E8A63"
              fillOpacity="0.75"
              stroke="#B7E4C7"
              strokeWidth="0.8"
            />
            <path
              d="M230 90 C 280 50, 330 35, 350 45 C 310 65, 270 75, 230 90 Z"
              fill="#187453"
              fillOpacity="0.85"
            />

            {/* Palm Trunk / Central Synaptic Conduit */}
            <path
              d="M225 310 Q 230 200 230 70"
              stroke="url(#palmStemGrad)"
              strokeWidth="5"
              strokeLinecap="round"
            />
            <path
              d="M235 310 Q 230 200 230 70"
              stroke="rgba(183, 228, 199, 0.4)"
              strokeWidth="1.5"
            />

            {/* Stylized Coconut Cluster */}
            <circle cx="218" cy="148" r="14" fill="#0B221A" stroke="#1E8A63" strokeWidth="2" />
            <circle cx="242" cy="148" r="14" fill="#12372A" stroke="#1E8A63" strokeWidth="2" />
            <circle cx="230" cy="162" r="13" fill="#163E30" stroke="#D6B56D" strokeWidth="2" />

            {/* Gemini Vision Targeting Reticle Overlay */}
            <g transform="translate(140, 75)" className="animate-float">
              {/* Target Box */}
              <rect
                x="0"
                y="0"
                width="180"
                height="105"
                rx="10"
                fill="rgba(18, 55, 42, 0.65)"
                stroke="#1E8A63"
                strokeWidth="1.5"
                strokeDasharray="6 4"
              />
              
              {/* Corner brackets */}
              <path d="M 0 16 L 0 0 L 16 0" stroke="#B7E4C7" strokeWidth="2.5" fill="none" />
              <path d="M 164 0 L 180 0 L 180 16" stroke="#B7E4C7" strokeWidth="2.5" fill="none" />
              <path d="M 180 89 L 180 105 L 164 105" stroke="#B7E4C7" strokeWidth="2.5" fill="none" />
              <path d="M 16 105 L 0 105 L 0 89" stroke="#B7E4C7" strokeWidth="2.5" fill="none" />

              {/* Laser Scan Line */}
              <line x1="8" y1="52" x2="172" y2="52" stroke="#D6B56D" strokeWidth="1.8" filter="url(#softGlowFilter)" opacity="0.9" />

              {/* Reticle Tag */}
              <rect x="12" y="10" width="105" height="18" rx="4" fill="#0B221A" stroke="#1E8A63" strokeWidth="1" />
              <text x="18" y="22" fill="#B7E4C7" fontSize="8.5" fontFamily="monospace" fontWeight="600">
                GEMINI VISION 1.5
              </text>

              <circle cx="155" cy="52" r="3.5" fill="#D6B56D" filter="url(#softGlowFilter)" />
              <circle cx="95" cy="72" r="2.5" fill="#B7E4C7" />
            </g>

            {/* Golden Neural Nodes along the Fronds */}
            <circle cx="50" cy="140" r="4.5" fill="#D6B56D" filter="url(#softGlowFilter)" />
            <circle cx="410" cy="140" r="4.5" fill="#D6B56D" filter="url(#softGlowFilter)" />
            <circle cx="70" cy="85" r="4" fill="#B7E4C7" />
            <circle cx="390" cy="85" r="4" fill="#B7E4C7" />
            <circle cx="110" cy="45" r="3" fill="#D6B56D" />
            <circle cx="350" cy="45" r="3" fill="#D6B56D" />
            <circle cx="230" cy="70" r="5.5" fill="#B7E4C7" filter="url(#softGlowFilter)" />
          </svg>
        </div>

        {/* Bottom Interactive Agent Status Pill Bar */}
        <div className="relative z-10 pt-3 border-t border-mint/10 grid grid-cols-2 sm:grid-cols-4 gap-2">
          <div className="bg-forest-dark/80 rounded-xl p-2 border border-mint/10 text-center">
            <div className="text-[10px] text-mint/70 font-mono">COORDINATOR</div>
            <div className="text-xs font-semibold text-white mt-0.5">Active Sync</div>
          </div>
          <div className="bg-forest-dark/80 rounded-xl p-2 border border-mint/10 text-center">
            <div className="text-[10px] text-mint/70 font-mono">RESEARCH</div>
            <div className="text-xs font-semibold text-mint mt-0.5">CRI Leaflet 34</div>
          </div>
          <div className="bg-forest-dark/80 rounded-xl p-2 border border-mint/10 text-center">
            <div className="text-[10px] text-gold/80 font-mono">FEASIBILITY</div>
            <div className="text-xs font-semibold text-white mt-0.5">Context Valid</div>
          </div>
          <div className="bg-forest-dark/80 rounded-xl p-2 border border-mint/10 text-center">
            <div className="text-[10px] text-emerald-light font-mono">REVIEW AUDIT</div>
            <div className="text-xs font-semibold text-emerald-light mt-0.5">94.8% Verified</div>
          </div>
        </div>

        {/* Floating Confidence Badge */}
        <div className="absolute top-16 right-5 sm:right-8 bg-forest-deep/95 border border-gold/40 rounded-xl px-3 py-2 shadow-gold-glow flex items-center space-x-2.5 backdrop-blur-md animate-float">
          <div className="w-2.5 h-2.5 rounded-full bg-gold animate-ping" />
          <div>
            <div className="text-[10px] uppercase font-mono text-gold/90 font-medium">Confidence Score</div>
            <div className="text-sm font-bold text-white tracking-tight">94.8% CRI Matched</div>
          </div>
        </div>

        {/* Floating Vision Diagnostic Tag */}
        <div className="absolute bottom-20 left-4 sm:left-7 bg-forest-deep/95 border border-mint/30 rounded-xl px-3 py-2 shadow-soft-glow flex items-center space-x-2.5 backdrop-blur-md">
          <div className="w-2 h-2 rounded-full bg-emerald" />
          <div>
            <div className="text-[10px] uppercase font-mono text-mint/80">Gemini Vision Detection</div>
            <div className="text-xs font-semibold text-white">Spear & Nut Necrosis Checked</div>
          </div>
        </div>

      </div>
    </div>
  );
}
