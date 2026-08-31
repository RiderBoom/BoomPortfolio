import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ProjectsSection from './components/ProjectsSection';
import ServicesSection from './components/ServicesSection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';
import TerminalWidget from './components/TerminalWidget';

export default function App() {
  const [terminalOpen, setTerminalOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[#0a0a0c] text-[#e1e1e6] font-sans selection:bg-emerald-500/20 selection:text-emerald-300">
      {/* Navbar */}
      <Navbar onOpenTerminal={() => setTerminalOpen(true)} />

      {/* Hero Section */}
      <main>
        <Hero onOpenTerminal={() => setTerminalOpen(true)} />

        {/* Featured Projects Showcase */}
        <ProjectsSection />

        {/* Technical Capabilities & Services */}
        <ServicesSection />

        {/* Contact & Technical Consultation */}
        <ContactSection />
      </main>

      {/* Footer */}
      <Footer />

      {/* Interactive Terminal Widget Modal */}
      <TerminalWidget
        isOpen={terminalOpen}
        onClose={() => setTerminalOpen(false)}
      />
    </div>
  );
}
