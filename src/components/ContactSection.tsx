import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Mail, Phone, Send, Check, Copy, Sparkles, MapPin, Globe } from 'lucide-react';
import { portfolioData } from '../data/portfolio';

interface ContactSectionProps {
  initialService?: string;
}

export const ContactSection: React.FC<ContactSectionProps> = ({ initialService }) => {
  const { personal, services } = portfolioData;
  const [copied, setCopied] = useState(false);
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    interest: initialService || services[0]?.title || 'Frontend & Web App Development',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(personal.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 800);
  };

  return (
    <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
      {/* Background container with subtle border */}
      <div className="relative rounded-3xl bg-[#111113] border border-[#27272a] p-8 sm:p-12 overflow-hidden shadow-2xl">
        {/* Subtle glow inside card */}
        <div className="absolute -top-24 -right-24 w-80 h-80 bg-sky-500/10 blur-[100px] rounded-full pointer-events-none" />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          {/* Left Column: Direct Info */}
          <div className="lg:col-span-5 flex flex-col justify-between space-y-8">
            <div>
              <div className="flex items-center gap-2 text-xs font-mono text-sky-400 tracking-wider uppercase mb-2">
                <Sparkles className="w-3.5 h-3.5" />
                <span>Get In Touch</span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white mb-4">
                Let's build something remarkable.
              </h2>
              <p className="text-sm text-zinc-400 leading-relaxed font-normal">
                Available for frontend engineering, full-stack projects, and custom web development.
              </p>
            </div>

            {/* Direct Contact Cards */}
            <div className="space-y-3">
              {/* Email Copier */}
              <div className="p-4 rounded-xl bg-[#161619] border border-[#27272a] flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="p-2.5 rounded-lg bg-[#1a1a1e] text-sky-400">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-[11px] font-mono text-zinc-400">Direct Email</div>
                    <div className="text-xs sm:text-sm font-mono text-white font-medium">
                      {personal.email}
                    </div>
                  </div>
                </div>

                <button
                  onClick={handleCopyEmail}
                  className="px-3 py-1.5 rounded-lg bg-[#1f1f24] hover:bg-[#28282f] text-xs font-mono text-zinc-300 hover:text-white border border-[#2e2e36] transition-colors flex items-center gap-1.5"
                >
                  {copied ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-emerald-400" />
                      <span className="text-emerald-400">Copied</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5" />
                      <span>Copy</span>
                    </>
                  )}
                </button>
              </div>

              {/* Phone / WhatsApp if present */}
              {personal.phone && (
                <div className="p-4 rounded-xl bg-[#161619] border border-[#27272a] flex items-center gap-3">
                  <div className="p-2.5 rounded-lg bg-[#1a1a1e] text-emerald-400">
                    <Phone className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-[11px] font-mono text-zinc-400">Phone / WhatsApp</div>
                    <div className="text-xs sm:text-sm font-mono text-white font-medium">
                      {personal.phone}
                    </div>
                  </div>
                </div>
              )}

              {/* Location info */}
              <div className="p-4 rounded-xl bg-[#161619] border border-[#27272a] flex items-center gap-3 text-xs font-mono">
                <div className="p-2.5 rounded-lg bg-[#1a1a1e] text-sky-400">
                  <MapPin className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-[11px] text-zinc-400">Location</div>
                  <div className="text-zinc-200">{personal.location}</div>
                </div>
              </div>
            </div>

            {/* Response time commitment */}
            <div className="text-xs font-mono text-zinc-400 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span>Response time: &lt; 24 hours</span>
            </div>
          </div>

          {/* Right Column: Contact Form */}
          <div className="lg:col-span-7 bg-[#141417] p-6 sm:p-8 rounded-2xl border border-[#27272a]">
            {submitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="py-12 text-center space-y-4"
              >
                <div className="w-12 h-12 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 flex items-center justify-center mx-auto">
                  <Check className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-white">Message Sent</h3>
                <p className="text-xs sm:text-sm text-zinc-400 max-w-sm mx-auto">
                  Thank you, <span className="text-white font-medium">{formState.name}</span>. Your message has been dispatched. I will reply to you as soon as possible.
                </p>
                <button
                  onClick={() => {
                    setSubmitted(false);
                    setFormState({ name: '', email: '', interest: services[0]?.title || 'Frontend Development', message: '' });
                  }}
                  className="mt-4 px-4 py-2 rounded-xl bg-[#1f1f23] text-xs font-mono text-zinc-300 hover:text-white border border-[#27272a]"
                >
                  Send another inquiry
                </button>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Name */}
                  <div>
                    <label className="block text-xs font-mono text-zinc-400 mb-1.5">
                      Your Name
                    </label>
                    <input
                      type="text"
                      required
                      value={formState.name}
                      onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                      placeholder="e.g. Alex Vance"
                      className="w-full px-3.5 py-2.5 rounded-xl bg-[#1a1a1e] border border-[#27272a] text-sm text-white placeholder:text-zinc-600 focus:outline-none focus:border-sky-400 transition-colors"
                    />
                  </div>

                  {/* Email */}
                  <div>
                    <label className="block text-xs font-mono text-zinc-400 mb-1.5">
                      Email Address
                    </label>
                    <input
                      type="email"
                      required
                      value={formState.email}
                      onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                      placeholder="you@company.com"
                      className="w-full px-3.5 py-2.5 rounded-xl bg-[#1a1a1e] border border-[#27272a] text-sm text-white placeholder:text-zinc-600 focus:outline-none focus:border-sky-400 transition-colors"
                    />
                  </div>
                </div>

                {/* Inquiry Type */}
                <div>
                  <label className="block text-xs font-mono text-zinc-400 mb-1.5">
                    Service / Inquiry Type
                  </label>
                  <select
                    value={formState.interest}
                    onChange={(e) => setFormState({ ...formState, interest: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-[#1a1a1e] border border-[#27272a] text-sm text-white focus:outline-none focus:border-sky-400 transition-colors"
                  >
                    {services.map((srv) => (
                      <option key={srv.id} value={srv.title}>
                        {srv.title}
                      </option>
                    ))}
                    <option value="General Technical Inquiry">General Technical Inquiry</option>
                  </select>
                </div>

                {/* Message */}
                <div>
                  <label className="block text-xs font-mono text-zinc-400 mb-1.5">
                    Project Overview / Message
                  </label>
                  <textarea
                    rows={4}
                    required
                    value={formState.message}
                    onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                    placeholder="Describe your project, timeline, or requirements..."
                    className="w-full px-3.5 py-2.5 rounded-xl bg-[#1a1a1e] border border-[#27272a] text-sm text-white placeholder:text-zinc-600 focus:outline-none focus:border-sky-400 transition-colors resize-none"
                  />
                </div>

                {/* Submit button */}
                <button
                  type="submit"
                  disabled={loading}
                  className="w-full flex items-center justify-center gap-2 py-3 rounded-xl bg-white text-black font-semibold text-sm hover:bg-zinc-200 transition-colors shadow-lg disabled:opacity-50"
                >
                  {loading ? (
                    <span className="font-mono text-xs">Sending message...</span>
                  ) : (
                    <>
                      <span>Send Inquiry</span>
                      <Send className="w-4 h-4" />
                    </>
                  )}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
