import React from 'react';
import { profileData } from '../data/portfolioData';

export default function Footer() {
  return (
    <footer className="py-12 border-t border-zinc-900 bg-[#070709] text-center text-xs text-zinc-500 font-mono">
      <div className="max-w-6xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-4">
        <div>
          © 2026 {profileData.name} · Founder of BoomTech & Boom Rider. All rights reserved.
        </div>
        <div className="flex items-center space-x-4 text-zinc-400">
          <a href="#work" className="hover:text-emerald-400 transition-colors">Works</a>
          <span>·</span>
          <a href="#services" className="hover:text-emerald-400 transition-colors">Services</a>
          <span>·</span>
          <a href="#contact" className="hover:text-emerald-400 transition-colors">Contact</a>
        </div>
      </div>
    </footer>
  );
}
