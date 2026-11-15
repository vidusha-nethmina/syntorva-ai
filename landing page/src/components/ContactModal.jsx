import React, { useState } from 'react';

export default function ContactModal({ isOpen, onClose }) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    organization: '',
    inquiryType: 'Research Collaboration (CRI Context)',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const handleReset = () => {
    setSubmitted(false);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-charcoal/80 backdrop-blur-md flex items-center justify-center p-3 sm:p-6 animate-fadeIn">
      <div className="relative w-full max-w-lg bg-offwhite rounded-3xl border border-offwhite-border shadow-2xl overflow-hidden text-charcoal">
        
        {/* Header */}
        <div className="px-6 py-5 bg-forest text-white flex items-center justify-between border-b border-forest-light">
          <div>
            <span className="text-[10px] font-mono uppercase tracking-widest text-mint font-semibold">
              Connect With The Zynaide Team
            </span>
            <h3 className="text-xl font-bold tracking-tight text-white mt-0.5">Let's Build a Smarter Future</h3>
          </div>
          <button
            onClick={onClose}
            className="w-8 h-8 rounded-full bg-forest-light/60 hover:bg-forest-light text-mint hover:text-white flex items-center justify-center transition text-xl"
            aria-label="Close"
          >
            &times;
          </button>
        </div>

        {submitted ? (
          <div className="p-8 text-center space-y-4">
            <div className="w-16 h-16 mx-auto rounded-full bg-emerald/10 text-emerald flex items-center justify-center text-3xl">
              ✓
            </div>
            <h4 className="text-xl font-bold text-forest">Thank You for Reaching Out!</h4>
            <p className="text-sm text-charcoal-muted leading-relaxed">
              Your message regarding <span className="font-semibold text-forest">"{formData.inquiryType}"</span> has been logged. The Zynaide academic & development team (Group CS-31) will review your note shortly.
            </p>
            <div className="pt-2">
              <button
                onClick={handleReset}
                className="px-6 py-2.5 rounded-xl bg-emerald hover:bg-emerald-hover text-white font-semibold text-sm transition shadow-sm"
              >
                Close Window
              </button>
            </div>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="p-6 sm:p-8 space-y-4">
            <div>
              <label className="block text-xs font-semibold uppercase tracking-wider text-charcoal-muted mb-1">
                Your Full Name
              </label>
              <input
                required
                type="text"
                placeholder="Dr. Samantha Perera"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="w-full px-4 py-2.5 rounded-xl border border-offwhite-border bg-white text-charcoal text-sm focus:outline-none focus:ring-2 focus:ring-emerald/40 transition"
              />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-charcoal-muted mb-1">
                  Email Address
                </label>
                <input
                  required
                  type="email"
                  placeholder="samantha@cri.gov.lk"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full px-4 py-2.5 rounded-xl border border-offwhite-border bg-white text-charcoal text-sm focus:outline-none focus:ring-2 focus:ring-emerald/40 transition"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-charcoal-muted mb-1">
                  Organization / Affiliation
                </label>
                <input
                  type="text"
                  placeholder="CRI / University / Estate"
                  value={formData.organization}
                  onChange={(e) => setFormData({ ...formData, organization: e.target.value })}
                  className="w-full px-4 py-2.5 rounded-xl border border-offwhite-border bg-white text-charcoal text-sm focus:outline-none focus:ring-2 focus:ring-emerald/40 transition"
                />
              </div>
            </div>

            <div>
              <label className="block text-xs font-semibold uppercase tracking-wider text-charcoal-muted mb-1">
                Inquiry Topic
              </label>
              <select
                value={formData.inquiryType}
                onChange={(e) => setFormData({ ...formData, inquiryType: e.target.value })}
                className="w-full px-4 py-2.5 rounded-xl border border-offwhite-border bg-white text-charcoal text-sm focus:outline-none focus:ring-2 focus:ring-emerald/40 transition"
              >
                <option value="Research Collaboration (CRI Context)">Research Collaboration (CRI Context)</option>
                <option value="Zynaide Coco Pilot Inquiries">Zynaide Coco Pilot Inquiries</option>
                <option value="Enterprise AI Agent Deployment">Enterprise AI Agent Deployment (Phase 02)</option>
                <option value="Academic & Group CS-31 Inquiries">Academic & Agile Project Inquiries</option>
              </select>
            </div>

            <div>
              <label className="block text-xs font-semibold uppercase tracking-wider text-charcoal-muted mb-1">
                Message / Details
              </label>
              <textarea
                rows={3}
                required
                placeholder="Share your inquiry, feedback, or interest in the Zynaide agent platform..."
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                className="w-full px-4 py-2.5 rounded-xl border border-offwhite-border bg-white text-charcoal text-sm focus:outline-none focus:ring-2 focus:ring-emerald/40 transition resize-none"
              />
            </div>

            <div className="pt-2 flex items-center justify-between">
              <span className="text-[11px] text-charcoal-muted">
                Group CS-31 • 2026/27 Project Inquiries
              </span>
              <button
                type="submit"
                className="px-6 py-2.5 rounded-xl bg-emerald hover:bg-emerald-hover text-white font-semibold text-sm transition shadow-md shadow-emerald/20"
              >
                Send Message
              </button>
            </div>
          </form>
        )}

      </div>
    </div>
  );
}
