import React, { useState, useEffect } from 'react';

export default function Navbar({ onOpenCocoModal, onOpenContactModal }) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Home', href: '#home' },
    { label: 'About', href: '#about' },
    { label: 'Features', href: '#features' },
    { label: 'How It Works', href: '#how-it-works' },
    { label: 'Our Vision', href: '#vision' },
    { label: 'Team', href: '#team' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        scrolled
          ? 'bg-forest/95 backdrop-blur-md border-b border-mint/15 shadow-lg py-3'
          : 'bg-forest/80 backdrop-blur-sm border-b border-white/5 py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* Logo & Brand Identity */}
          <a href="#home" className="flex items-center space-x-3 group">
            <div className="w-10 h-10 rounded-xl bg-forest-dark border border-mint/30 flex items-center justify-center p-1.5 transition-transform group-hover:scale-105 shadow-soft-glow">
              <img
                src="/zynaide-leaf-logo.svg"
                alt="ZYNAIDE Platform Logo"
                className="w-full h-full object-contain"
              />
            </div>
            <div className="flex flex-col">
              <span className="text-xl font-extrabold tracking-tight text-white group-hover:text-mint transition-colors">
                ZYNAIDE
              </span>
              <span className="text-[10px] font-mono tracking-wider text-mint/80 uppercase -mt-1">
                AI Agent Platform
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center space-x-1 lg:space-x-2">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="px-3 py-1.5 rounded-lg text-sm font-medium text-offwhite/80 hover:text-white hover:bg-forest-light/50 transition-colors"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Call to Action Button */}
          <div className="hidden md:flex items-center space-x-3">
            <button
              onClick={onOpenCocoModal}
              className="relative inline-flex items-center justify-center px-4 py-2 text-xs font-bold uppercase tracking-wider text-white bg-emerald hover:bg-emerald-hover rounded-xl shadow-md shadow-emerald/30 transition-all duration-200 hover:-translate-y-0.5 border border-emerald-light/40"
            >
              <span className="w-2 h-2 rounded-full bg-mint mr-2 animate-pulse" />
              Explore Zynaide Coco
            </button>
          </div>

          {/* Mobile Menu Toggle Button */}
          <div className="flex md:hidden items-center space-x-2">
            <button
              onClick={onOpenCocoModal}
              className="px-2.5 py-1.5 text-[11px] font-bold text-white bg-emerald rounded-lg"
            >
              Zynaide Coco
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg text-mint hover:text-white bg-forest-light/60 focus:outline-none"
              aria-label="Toggle navigation menu"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {mobileMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>

        </div>

        {/* Mobile Navigation Dropdown */}
        {mobileMenuOpen && (
          <div className="md:hidden mt-3 pt-3 pb-2 border-t border-mint/15 bg-forest-dark/95 rounded-2xl px-4 space-y-1">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="block px-3 py-2 rounded-lg text-sm font-medium text-offwhite/90 hover:text-white hover:bg-forest-light"
              >
                {link.label}
              </a>
            ))}
            <div className="pt-2">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenCocoModal();
                }}
                className="w-full text-center px-4 py-2 text-xs font-bold text-white bg-emerald rounded-xl"
              >
                Explore Zynaide Coco
              </button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
