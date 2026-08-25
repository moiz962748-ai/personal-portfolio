'use client';

import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Services } from './components/Services';
import { Projects } from './components/Projects';
import { Arsenal } from './components/Arsenal';
import { Experience } from './components/Experience';
import { Certifications } from './components/Certifications';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';

export default function App() {
  const [selectedServiceForContact, setSelectedServiceForContact] = useState<string>('');

  const handleOpenContact = (serviceTitle?: string) => {
    if (serviceTitle) {
      setSelectedServiceForContact(serviceTitle);
    }
    const contactElement = document.getElementById('contact');
    if (contactElement) {
      contactElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="bg-[#0a0a0a] text-zinc-100 min-h-screen selection:bg-zinc-800 selection:text-white font-sans relative antialiased">
      {/* Subtle Background Grid Texture */}
      <div className="fixed inset-0 bg-grid-pattern opacity-40 pointer-events-none -z-20" />

      {/* Floating Navigation Bar */}
      <Navbar onOpenContact={() => handleOpenContact()} />

      {/* Main Content Sections */}
      <main>
        <Hero onOpenContact={() => handleOpenContact()} />
        <Services onSelectService={(title) => handleOpenContact(title)} />
        <Projects />
        <Arsenal />
        <Experience />
        <Certifications />
        <ContactSection initialService={selectedServiceForContact} />
      </main>

      {/* Engineering Footer */}
      <Footer />
    </div>
  );
}
