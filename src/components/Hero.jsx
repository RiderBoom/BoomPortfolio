import React from 'react';
import { Terminal, ArrowUpRight } from 'lucide-react';
import { profileData, techStackData } from '../data/portfolioData';

export default function Hero({ onOpenTerminal }) {
  return (
    <section className="py-20 sm:py-28 max-w-6xl mx-auto px-6">
      {/* Badge */}
      <div className="inline-flex items-center space-x-2 px-3 py-1.5 rounded-full bg-zinc-900/90 border border-zinc-800 text-xs text-zinc-300 mb-8 backdrop-blur-sm">
        <Terminal className="w-3.5 h-3.5 text-emerald-400 animate-pulse" />
        <span className="font-mono">{profileData.title}</span>
      </div>

      {/* Main Headline */}
      <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-white leading-[1.1]">
        {profileData.name}
      </h1>

      <p className="mt-2 text-lg sm:text-xl font-mono text-emerald-400 font-medium">
        {profileData.role}
      </p>

      <p className="mt-5 text-xl sm:text-2xl text-zinc-300 font-normal max-w-3xl leading-relaxed">
        {profileData.tagline}
      </p>

      {/* Action Buttons */}
      <div className="mt-8 flex flex-wrap gap-4 items-center">
        <a
          href="#work"
          className="px-6 py-3.5 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-black font-semibold text-sm transition-all flex items-center gap-2 shadow-lg shadow-emerald-500/10 hover:shadow-emerald-500/20"
        >
          Explore Featured Systems
          <ArrowUpRight className="w-4 h-4" />
        </a>

        <a
          href="#contact"
          className="px-6 py-3.5 rounded-xl bg-zinc-900 hover:bg-zinc-800 border border-zinc-800 hover:border-zinc-700 text-white font-medium text-sm transition-all"
        >
          Technical Consultation
        </a>

        <button
          onClick={onOpenTerminal}
          className="px-5 py-3.5 rounded-xl bg-zinc-900/80 hover:bg-zinc-800 border border-emerald-500/30 hover:border-emerald-500/60 text-emerald-400 font-mono text-xs transition-all flex items-center gap-2"
        >
          <Terminal className="w-4 h-4" />
          <span>Launch CLI Emulator</span>
        </button>
      </div>

      {/* Metric Cards Banner */}
      <div className="mt-12 grid grid-cols-2 sm:grid-cols-4 gap-4 pt-8 border-t border-zinc-900">
        <div className="p-4 rounded-xl bg-zinc-900/30 border border-zinc-800/50">
          <div className="text-2xl font-bold text-white font-mono">99.9%</div>
          <div className="text-xs text-zinc-500 mt-1">Uptime Reliability</div>
        </div>
        <div className="p-4 rounded-xl bg-zinc-900/30 border border-zinc-800/50">
          <div className="text-2xl font-bold text-emerald-400 font-mono">&lt; 100ms</div>
          <div className="text-xs text-zinc-500 mt-1">Dispatch Latency</div>
        </div>
        <div className="p-4 rounded-xl bg-zinc-900/30 border border-zinc-800/50">
          <div className="text-2xl font-bold text-white font-mono">Web3</div>
          <div className="text-xs text-zinc-500 mt-1">UUPS Smart Contracts</div>
        </div>
        <div className="p-4 rounded-xl bg-zinc-900/30 border border-zinc-800/50">
          <div className="text-2xl font-bold text-emerald-400 font-mono">Edge C2</div>
          <div className="text-xs text-zinc-500 mt-1">Offline-First Hub</div>
        </div>
      </div>

      {/* Tech Badges */}
      <div className="mt-8 flex flex-wrap gap-2">
        {techStackData.map((tech) => (
          <span
            key={tech.name}
            className="px-3 py-1 rounded-md bg-zinc-900/80 border border-zinc-800/80 text-xs font-mono text-zinc-400 hover:text-emerald-300 hover:border-emerald-500/30 transition-colors cursor-default"
          >
            {tech.name}
          </span>
        ))}
      </div>
    </section>
  );
}
