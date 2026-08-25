'use client';

import React, { useState } from 'react';
import { Navbar } from '../src/components/Navbar';
import { Hero } from '../src/components/Hero';
import { Services } from '../src/components/Services';
import { Projects } from '../src/components/Projects';
import { Arsenal } from '../src/components/Arsenal';
import { Experience } from '../src/components/Experience';
import { Certifications } from '../src/components/Certifications';
import { Footer } from '../src/components/Footer';

export default function Page() {
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

      {/* Floating Navigation Header */}
      <Navbar onOpenContact={() => handleOpenContact()} />

      {/* Main Content Sections */}
      <main>
        <Hero onOpenContact={() => handleOpenContact()} />
        <Services onSelectService={(title) => handleOpenContact(title)} />
        <Projects />
        <Arsenal />
        <Experience />
        <Certifications />
      </main>

      {/* Engineering Footer */}
      <Footer />
    </div>
  );
}

