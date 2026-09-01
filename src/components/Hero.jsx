import React from 'react';
import { Terminal, ArrowUpRight, Code2 } from 'lucide-react';
import { credibilityData, profileData } from '../data/portfolioData';

export default function Hero({ onOpenTerminal }) {
  return (
    <section id="about" className="pt-20 pb-14 sm:pt-28 sm:pb-20 max-w-6xl mx-auto px-6">
      <div className="grid lg:grid-cols-[1.35fr_0.65fr] gap-12 lg:gap-16 items-center">
        <div>
          <div className="inline-flex items-center space-x-2 px-3 py-1.5 rounded-full bg-zinc-900/90 border border-zinc-800 text-xs text-zinc-300 mb-8 backdrop-blur-sm">
            <Terminal className="w-3.5 h-3.5 text-emerald-400 animate-pulse" />
            <span className="font-mono">{profileData.title}</span>
          </div>

          <h1 className="text-4xl sm:text-6xl lg:text-6xl font-extrabold tracking-[-0.04em] text-white leading-[1.06]">
            {profileData.headline}
          </h1>

          <p className="mt-6 text-lg sm:text-xl text-zinc-300 font-normal max-w-3xl leading-relaxed">
            {profileData.tagline}
          </p>

          <p className="mt-4 text-sm text-zinc-500">
            {profileData.name} · {profileData.role} · Based in Thailand, working globally
          </p>

          <div className="mt-8 flex flex-wrap gap-4 items-center">
        <a
          href="#work"
          className="px-6 py-3.5 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-black font-semibold text-sm transition-all flex items-center gap-2 shadow-lg shadow-emerald-500/10 hover:shadow-emerald-500/20"
        >
          View case studies
          <ArrowUpRight className="w-4 h-4" />
        </a>

        <a
          href="#contact"
          className="px-6 py-3.5 rounded-xl bg-zinc-900 hover:bg-zinc-800 border border-zinc-800 hover:border-zinc-700 text-white font-medium text-sm transition-all"
        >
          Discuss a system
        </a>

        <a
          href={profileData.contact.github}
          target="_blank"
          rel="noreferrer"
          className="px-5 py-3.5 rounded-xl text-zinc-300 hover:text-white text-sm transition-all flex items-center gap-2"
        >
          <Code2 className="w-4 h-4" />
          <span>Inspect the code</span>
        </a>
          </div>
        </div>

        <figure className="relative max-w-sm mx-auto lg:max-w-none w-full">
          <div className="absolute -inset-4 rounded-[2rem] bg-emerald-500/10 blur-3xl" />
          <div className="relative overflow-hidden rounded-[1.75rem] border border-zinc-700/80 bg-zinc-900 shadow-2xl shadow-black/40">
            <img
              src="/ceo-wisitchai.png"
              alt="Wisitchai Bunrae, Founder and Lead Architect at BoomTech"
              className="aspect-[4/5] w-full object-cover object-top"
              width="1122"
              height="1402"
              fetchPriority="high"
            />
            <figcaption className="absolute inset-x-3 bottom-3 rounded-xl border border-white/10 bg-black/75 p-3 backdrop-blur-md">
              <div className="text-sm font-semibold text-white">Wisitchai Bunrae</div>
              <div className="mt-0.5 text-[11px] font-mono text-emerald-400">Founder · Architect · Builder</div>
            </figcaption>
          </div>
        </figure>
      </div>

      <div className="mt-14 grid grid-cols-2 lg:grid-cols-4 border-y border-zinc-800/70">
        {credibilityData.map((item) => (
          <div key={item.label} className="py-6 pr-5 border-zinc-800/70 odd:border-r lg:border-r lg:last:border-r-0 lg:pl-5 lg:first:pl-0">
            <div className="text-xl sm:text-2xl font-bold text-white font-mono">{item.value}</div>
            <div className="text-sm text-zinc-300 mt-1">{item.label}</div>
            <div className="text-xs text-zinc-600 mt-1">{item.detail}</div>
          </div>
        ))}
      </div>

      <button onClick={onOpenTerminal} className="mt-6 inline-flex items-center gap-2 text-xs font-mono text-zinc-500 hover:text-emerald-400 transition-colors">
        <Terminal className="w-3.5 h-3.5" /> Open interactive system console
      </button>
    </section>
  );
}
