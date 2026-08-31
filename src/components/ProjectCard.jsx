import React from 'react';
import { ExternalLink, Info } from 'lucide-react';

export default function ProjectCard({ project, onSelectProject }) {
  return (
    <div className="p-8 rounded-xl bg-zinc-900/40 border border-zinc-800/70 hover:border-zinc-700 transition-all group relative overflow-hidden flex flex-col justify-between">
      <div>
        {/* Header Tags */}
        <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
          <div className="flex items-center space-x-2">
            <span className="text-xs font-semibold px-2.5 py-0.5 rounded bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 font-mono">
              {project.tag}
            </span>
            <span className="text-xs text-zinc-500 font-mono">{project.category}</span>
          </div>
          <span className="text-xs font-mono text-zinc-400 bg-zinc-800/40 px-2 py-0.5 rounded border border-zinc-800">
            {project.metrics}
          </span>
        </div>

        {/* Title */}
        <h3 className="text-2xl font-bold text-white group-hover:text-emerald-400 transition-colors">
          {project.title}
        </h3>

        {/* Description */}
        <p className="text-zinc-400 text-sm mt-3 leading-relaxed">
          {project.shortDesc}
        </p>

        {/* Highlights */}
        <div className="mt-4 space-y-1.5">
          {project.highlights.slice(0, 2).map((item, idx) => (
            <div key={idx} className="flex items-center space-x-2 text-xs text-zinc-300">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
              <span>{item}</span>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-6 pt-4 border-t border-zinc-800/60 flex flex-wrap items-center justify-between gap-4">
        {/* Tech badges */}
        <div className="flex flex-wrap gap-1.5">
          {project.tech.map((t) => (
            <span key={t} className="text-xs font-mono px-2 py-0.5 rounded bg-zinc-800/50 text-zinc-400">
              {t}
            </span>
          ))}
        </div>

        {/* Actions */}
        <div className="flex items-center space-x-2">
          <button
            onClick={() => onSelectProject(project)}
            className="flex items-center space-x-1.5 px-3 py-1.5 rounded-lg bg-zinc-800/80 hover:bg-zinc-700 text-xs text-zinc-200 font-medium transition-colors"
          >
            <Info className="w-3.5 h-3.5 text-emerald-400" />
            <span>Architecture & Details</span>
          </button>

          {project.liveUrl !== '#' && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noreferrer"
              className="p-2 rounded-lg bg-emerald-500/10 hover:bg-emerald-500/20 text-emerald-400 border border-emerald-500/20 transition-colors"
              title="Visit Live System"
            >
              <ExternalLink className="w-4 h-4" />
            </a>
          )}
        </div>
      </div>
    </div>
  );
}
