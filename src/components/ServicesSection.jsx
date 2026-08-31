import React from 'react';
import { Layers, Radio, Cpu, Database, Check } from 'lucide-react';
import { servicesData } from '../data/portfolioData';

const iconMap = {
  arch: <Layers className="w-6 h-6 text-emerald-400" />,
  dispatch: <Radio className="w-6 h-6 text-emerald-400" />,
  ai: <Cpu className="w-6 h-6 text-emerald-400" />,
  infra: <Database className="w-6 h-6 text-emerald-400" />
};

export default function ServicesSection() {
  return (
    <section id="services" className="py-20 max-w-6xl mx-auto px-6 border-t border-zinc-900">
      <div className="mb-10">
        <div className="text-xs font-mono text-emerald-400 font-semibold tracking-wider uppercase mb-1">
          Technical Capabilities
        </div>
        <h2 className="text-3xl font-bold text-white tracking-tight">Services & Architecture Solutions</h2>
        <p className="text-sm text-zinc-400 mt-1">
          ขอบเขตบริการที่รับออกแบบ พัฒนา และดูแลระบบด้านวิศวกรรมซอฟต์แวร์
        </p>
      </div>

      <div className="grid sm:grid-cols-2 gap-6">
        {servicesData.map((s) => (
          <div
            key={s.id}
            className="p-8 rounded-xl bg-zinc-900/20 border border-zinc-800/60 hover:border-zinc-700 hover:bg-zinc-900/40 transition-all flex flex-col justify-between"
          >
            <div>
              <div className="p-3 rounded-lg bg-zinc-900/80 border border-zinc-800 w-fit mb-5">
                {iconMap[s.id]}
              </div>
              <h3 className="text-xl font-bold text-white mb-2">{s.title}</h3>
              <p className="text-sm text-zinc-400 leading-relaxed mb-6">{s.desc}</p>
            </div>

            <div className="pt-4 border-t border-zinc-800/40 space-y-2">
              <div className="text-xs font-mono text-zinc-500 uppercase tracking-wider mb-2">Key Deliverables</div>
              {s.deliverables.map((item, idx) => (
                <div key={idx} className="flex items-start space-x-2 text-xs text-zinc-300">
                  <Check className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
