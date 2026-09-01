import React, { lazy, Suspense, useCallback, useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ProjectsSection from './components/ProjectsSection';
import ServicesSection from './components/ServicesSection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';
import TerminalWidget from './components/TerminalWidget';

const AdminInbox = lazy(() => import('./components/AdminInbox'));

export default function App() {
  const [terminalOpen, setTerminalOpen] = useState(false);
  const openTerminal = useCallback(() => setTerminalOpen(true), []);
  const closeTerminal = useCallback(() => setTerminalOpen(false), []);

  if (window.location.pathname.startsWith('/admin')) {
    return <Suspense fallback={<div className="grid min-h-screen place-items-center bg-[#07090d] text-zinc-400">Loading secure inbox…</div>}><AdminInbox /></Suspense>;
  }

  return (
    <div className="min-h-screen bg-[#0a0a0c] text-[#e1e1e6] font-sans selection:bg-emerald-500/20 selection:text-emerald-300">
      {/* Navbar */}
      <Navbar onOpenTerminal={openTerminal} />

      {/* Hero Section */}
      <main>
        <Hero onOpenTerminal={openTerminal} />

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
        onClose={closeTerminal}
      />
    </div>
  );
}
