import React, { useState } from 'react';
import { Menu, X, Terminal, ArrowUpRight } from 'lucide-react';

export default function Navbar({ onOpenTerminal }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { name: 'Works', href: '#work' },
    { name: 'Services', href: '#services' },
    { name: 'Architecture', href: '#architecture' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav className="border-b border-zinc-800/60 bg-[#0a0a0c]/90 backdrop-blur-md sticky top-0 z-50">
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        {/* Brand */}
        <a href="#" className="flex items-center space-x-2.5 group">
          <div className="w-3 h-3 rounded-full bg-emerald-500 animate-pulse group-hover:scale-125 transition-transform" />
          <span className="font-bold tracking-tight text-white group-hover:text-emerald-400 transition-colors">
            BoomTech Studio
          </span>
          <span className="hidden sm:inline-block px-2 py-0.5 text-[10px] font-mono rounded bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
            PROD v2.0
          </span>
        </a>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center space-x-8 text-sm text-zinc-400">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="hover:text-white transition-colors py-1"
            >
              {link.name}
            </a>
          ))}

          <button
            onClick={onOpenTerminal}
            className="flex items-center space-x-1.5 px-3 py-1.5 rounded-md bg-zinc-900 border border-zinc-800 hover:border-emerald-500/50 text-xs font-mono text-emerald-400 hover:text-emerald-300 transition-all"
            title="Open CLI Terminal"
          >
            <Terminal className="w-3.5 h-3.5" />
            <span>CLI Terminal</span>
          </button>

          <a
            href="#contact"
            className="px-4 py-2 rounded-lg bg-emerald-500 hover:bg-emerald-400 text-black font-semibold text-xs transition-all shadow-sm hover:shadow-emerald-500/20"
          >
            Get in touch
          </a>
        </div>

        {/* Mobile Menu Button */}
        <div className="flex items-center space-x-2 md:hidden">
          <button
            onClick={onOpenTerminal}
            className="p-2 rounded-lg bg-zinc-900 border border-zinc-800 text-emerald-400"
            aria-label="CLI Terminal"
          >
            <Terminal className="w-4 h-4" />
          </button>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 text-zinc-400 hover:text-white"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden border-b border-zinc-800 bg-[#0a0a0c] px-6 py-4 space-y-3">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className="block text-zinc-300 hover:text-emerald-400 py-1 text-base font-medium"
            >
              {link.name}
            </a>
          ))}
          <div className="pt-2 flex flex-col space-y-2">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenTerminal();
              }}
              className="w-full flex items-center justify-center space-x-2 px-4 py-2.5 rounded-lg bg-zinc-900 border border-zinc-800 text-emerald-400 text-sm font-mono"
            >
              <Terminal className="w-4 h-4" />
              <span>Interactive CLI Terminal</span>
            </button>
            <a
              href="#contact"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full text-center px-4 py-2.5 rounded-lg bg-emerald-500 hover:bg-emerald-400 text-black font-semibold text-sm"
            >
              Get in touch
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}
