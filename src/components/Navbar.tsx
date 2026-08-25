'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X, ArrowUpRight, Mail, Github, Linkedin } from 'lucide-react';
import { portfolioData } from '../data/portfolio';

interface NavbarProps {
  onOpenContact?: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenContact }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile drawer on escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setMobileMenuOpen(false);
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  // Prevent background scroll when mobile drawer is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [mobileMenuOpen]);

  const navLinks = [
    { label: 'Services', href: '#services' },
    { label: 'Projects', href: '#projects' },
    { label: 'Arsenal', href: '#arsenal' },
    { label: 'Experience', href: '#experience' },
    { label: 'Contact', href: '#contact' },
  ];

  const handleContactClick = (e: React.MouseEvent) => {
    if (onOpenContact) {
      e.preventDefault();
      onOpenContact();
    }
    setMobileMenuOpen(false);
  };

  return (
    <>
      <header
        className={`sticky top-0 z-50 w-full transition-all duration-300 backdrop-blur-md bg-[#0a0a0a]/80 border-b border-zinc-800 ${
          scrolled ? 'shadow-lg shadow-black/40' : ''
        }`}
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 h-16 sm:h-20 flex items-center justify-between">
          {/* Brand Text Logo */}
          <a
            href="#"
            className="group flex items-center gap-1.5 focus:outline-none focus-visible:ring-2 focus-visible:ring-sky-400 rounded-lg py-1"
          >
            <span className="text-xl sm:text-2xl font-bold tracking-tight text-white font-sans group-hover:text-zinc-200 transition-colors">
              Abdul Moiz
            </span>
            <span className="text-sky-400 text-2xl font-black leading-none animate-pulse">.</span>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center gap-1.5 bg-zinc-900/60 border border-zinc-800/80 px-4 py-1.5 rounded-full shadow-inner">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="px-3.5 py-1.5 text-xs lg:text-sm font-medium text-zinc-400 hover:text-white hover:bg-zinc-800/70 rounded-full transition-all duration-200"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Right Action: High Contrast CTA + Mobile Toggle */}
          <div className="flex items-center gap-3">
            <a
              href="#contact"
              onClick={handleContactClick}
              className="hidden sm:inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold bg-white text-black hover:bg-zinc-200 transition-all duration-200 shadow-md shadow-white/10 hover:shadow-white/20 active:scale-[0.98]"
            >
              <span>Hire Me / Contact</span>
              <ArrowUpRight className="w-4 h-4" />
            </a>

            {/* Mobile Hamburger Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2.5 rounded-xl bg-zinc-900/80 border border-zinc-800 text-zinc-300 hover:text-white hover:bg-zinc-800 transition-colors focus:outline-none focus:ring-2 focus:ring-sky-400"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Slide-Out Drawer Navigation */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <>
            {/* Backdrop Overlay */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              onClick={() => setMobileMenuOpen(false)}
              className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm md:hidden"
            />

            {/* Slide-out Menu Panel */}
            <motion.aside
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 28, stiffness: 280 }}
              className="fixed top-0 right-0 bottom-0 z-50 w-[82%] max-w-sm bg-[#0e0e11] border-l border-zinc-800 p-6 flex flex-col justify-between shadow-2xl md:hidden"
            >
              {/* Top Drawer Header */}
              <div>
                <div className="flex items-center justify-between pb-6 border-b border-zinc-800">
                  <div className="flex items-center gap-1">
                    <span className="text-xl font-bold text-white tracking-tight">Abdul Moiz</span>
                    <span className="text-sky-400 text-xl font-bold">.</span>
                  </div>
                  <button
                    onClick={() => setMobileMenuOpen(false)}
                    className="p-2 rounded-xl bg-zinc-900 border border-zinc-800 text-zinc-400 hover:text-white transition-colors"
                    aria-label="Close navigation menu"
                  >
                    <X className="w-5 h-5" />
                  </button>
                </div>

                {/* Mobile Links List */}
                <nav className="mt-6 flex flex-col gap-1.5">
                  {navLinks.map((link) => (
                    <a
                      key={link.label}
                      href={link.href}
                      onClick={() => setMobileMenuOpen(false)}
                      className="flex items-center justify-between px-4 py-3 rounded-xl text-base font-medium text-zinc-300 hover:text-white hover:bg-zinc-900/90 border border-transparent hover:border-zinc-800 transition-colors"
                    >
                      <span>{link.label}</span>
                      <ArrowUpRight className="w-4 h-4 text-zinc-600" />
                    </a>
                  ))}
                </nav>
              </div>

              {/* Bottom Drawer Actions */}
              <div className="pt-6 border-t border-zinc-800 space-y-4">
                <a
                  href="#contact"
                  onClick={handleContactClick}
                  className="w-full flex items-center justify-center gap-2 py-3 rounded-xl bg-white text-black font-semibold text-sm hover:bg-zinc-200 transition-colors shadow-lg"
                >
                  <Mail className="w-4 h-4" />
                  <span>Hire Me / Contact</span>
                </a>

                {/* Social Quick Links */}
                <div className="flex items-center justify-between text-xs font-mono text-zinc-400 px-1 pt-1">
                  <a
                    href={portfolioData.personal.github}
                    target="_blank"
                    rel="noreferrer"
                    className="hover:text-white flex items-center gap-1.5"
                  >
                    <Github className="w-3.5 h-3.5" />
                    <span>GitHub</span>
                  </a>
                  <span>•</span>
                  <a
                    href={portfolioData.personal.linkedin}
                    target="_blank"
                    rel="noreferrer"
                    className="hover:text-white flex items-center gap-1.5"
                  >
                    <Linkedin className="w-3.5 h-3.5" />
                    <span>LinkedIn</span>
                  </a>
                </div>
              </div>
            </motion.aside>
          </>
        )}
      </AnimatePresence>
    </>
  );
};
