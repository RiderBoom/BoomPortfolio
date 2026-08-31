import React, { useEffect } from 'react';
import { X, ExternalLink, Layers, CheckCircle2 } from 'lucide-react';

export default function ProjectModal({ project, onClose }) {
  useEffect(() => {
    if (!project) return undefined;
    const handleKeyDown = (event) => {
      if (event.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [project, onClose]);

  if (!project) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-in fade-in duration-200" role="dialog" aria-modal="true" aria-labelledby="project-modal-title">
      <div className="bg-[#0e0e12] border border-zinc-800 rounded-2xl max-w-2xl w-full overflow-hidden shadow-2xl">
        {/* Modal Header */}
        <div className="px-6 py-5 border-b border-zinc-800/80 flex items-center justify-between bg-zinc-900/50">
          <div className="flex items-center space-x-3">
            <span className="text-xs font-semibold px-2.5 py-1 rounded bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 font-mono">
              {project.tag}
            </span>
            <span className="text-xs text-zinc-400 font-mono">{project.category}</span>
          </div>
          <button
            onClick={onClose}
            aria-label="Close project details"
            className="p-1.5 rounded-lg text-zinc-400 hover:text-white hover:bg-zinc-800 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6 sm:p-8 max-h-[80vh] overflow-y-auto space-y-6">
          <div>
            <h2 id="project-modal-title" className="text-2xl font-bold text-white">{project.title}</h2>
            <p className="text-zinc-300 text-sm mt-3 leading-relaxed">
              {project.fullDesc}
            </p>
          </div>

          {/* Key System Highlights */}
          <div>
            <h3 className="text-sm font-semibold text-emerald-400 font-mono flex items-center gap-2 mb-3">
              <CheckCircle2 className="w-4 h-4" />
              Key System Capabilities
            </h3>
            <div className="grid gap-2">
              {project.highlights.map((item, idx) => (
                <div key={idx} className="p-3 rounded-lg bg-zinc-900/60 border border-zinc-800/60 text-xs text-zinc-300 flex items-center space-x-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 shrink-0" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Architecture Specification */}
          <div className="p-4 rounded-xl bg-zinc-900/80 border border-zinc-800">
            <h3 className="text-xs font-semibold text-zinc-400 font-mono flex items-center gap-2 mb-2">
              <Layers className="w-4 h-4 text-emerald-400" />
              System Architecture Specification
            </h3>
            <p className="text-xs font-mono text-zinc-300 leading-relaxed">
              {project.architecture}
            </p>
          </div>

          {/* Tech Stack Tags */}
          <div>
            <h3 className="text-xs font-semibold text-zinc-400 font-mono mb-2">Technical Stack</h3>
            <div className="flex flex-wrap gap-2">
              {project.tech.map((t) => (
                <span key={t} className="text-xs font-mono px-2.5 py-1 rounded bg-zinc-800 text-zinc-300">
                  {t}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Modal Footer */}
        <div className="px-6 py-4 border-t border-zinc-800/80 bg-zinc-900/50 flex items-center justify-between">
          <span className="text-xs font-mono text-zinc-500">
            {project.metrics}
          </span>

          <div className="flex items-center space-x-3">
            <button
              onClick={onClose}
              className="px-4 py-2 rounded-lg bg-zinc-800 hover:bg-zinc-700 text-xs text-white font-medium transition-colors"
            >
              Close
            </button>
            {project.liveUrl !== '#' && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noreferrer"
                className="px-4 py-2 rounded-lg bg-emerald-500 hover:bg-emerald-400 text-xs text-black font-semibold transition-colors flex items-center gap-1.5"
              >
                <span>Launch Live System</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
