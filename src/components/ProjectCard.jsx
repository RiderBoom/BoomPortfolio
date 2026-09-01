import React from 'react';
import { ArrowRight, ExternalLink } from 'lucide-react';

export default function ProjectCard({ project, onSelectProject }) {
  return (
    <article className="p-6 sm:p-9 rounded-2xl bg-zinc-900/30 border border-zinc-800/70 hover:border-zinc-700 transition-all group">
      <div className="grid lg:grid-cols-[0.72fr_1.28fr] gap-8 lg:gap-14">
        <div>
        {/* Header Tags */}
        <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
          <div className="flex items-center space-x-2">
            <span className="text-xs font-semibold px-2.5 py-0.5 rounded bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 font-mono">
              {project.tag}
            </span>
          </div>
          <span className="text-xs font-mono text-zinc-500">{project.category}</span>
        </div>

        {/* Title */}
        <h3 className="text-2xl font-bold text-white group-hover:text-emerald-400 transition-colors">
          {project.title}
        </h3>

        {/* Description */}
        <p className="text-zinc-400 text-sm mt-4 leading-relaxed">
          {project.shortDesc}
        </p>
        <div className="mt-6 inline-flex px-3 py-1.5 rounded-md border border-emerald-500/20 bg-emerald-500/5 text-xs font-mono text-emerald-400">
          {project.metrics}
        </div>
        </div>

        <div className="space-y-5">
          {[
            ['The problem', project.problem],
            ['The approach', project.approach],
            ['The outcome', project.outcome],
          ].map(([label, copy]) => (
            <div key={label} className="grid sm:grid-cols-[110px_1fr] gap-1 sm:gap-5">
              <div className="text-[11px] uppercase tracking-[0.16em] font-mono text-zinc-600">{label}</div>
              <p className="text-sm leading-relaxed text-zinc-300">{copy}</p>
            </div>
          ))}
          <div className="pt-5 border-t border-zinc-800/70 flex flex-wrap items-center justify-between gap-4">
            <div className="flex flex-wrap gap-1.5">
              {project.tech.slice(0, 5).map((t) => (
                <span key={t} className="text-[11px] font-mono px-2 py-1 rounded bg-zinc-800/50 text-zinc-500">{t}</span>
              ))}
            </div>
            <div className="flex items-center gap-2">
              <button
                onClick={() => onSelectProject(project)}
                className="flex items-center gap-1.5 px-3 py-2 rounded-lg text-xs text-zinc-200 hover:text-white transition-colors"
              >
                <span>Read technical detail</span><ArrowRight className="w-3.5 h-3.5" />
              </button>

          {project.liveUrl !== '#' && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noreferrer"
                className="flex items-center gap-1.5 px-3 py-2 rounded-lg bg-emerald-500 text-black text-xs font-semibold hover:bg-emerald-400 transition-colors"
              title="Visit Live System"
            >
                Live system <ExternalLink className="w-3.5 h-3.5" />
            </a>
          )}
            </div>
          </div>
        </div>
      </div>
    </article>
  );
}
