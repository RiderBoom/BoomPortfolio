import React from 'react';
import {
  Terminal,
  Layers,
  Cpu,
  Globe,
  ArrowUpRight,
  ShieldCheck,
  Database,
  Radio,
  Code2,
  ExternalLink,
  Mail,
  Phone
} from 'lucide-react';

export default function PortfolioPreview() {
  const projects = [
    {
      title: "Boom Rider Ecosystem",
      tag: "Flagship Project",
      category: "On-Demand Logistics & Real-Time Dispatch",
      description: "ระบบโลจิสติกส์และ On-demand Dispatch แบบครบวงจร ครอบคลุมการส่งอาหาร ซื้อของ ส่งพัสดุ พร้อมระบบติดตามสถานะเรียลไทม์ และระบบกระจายงานฉุกเฉิน",
      tech: ["Next.js", "Supabase", "Tailwind CSS", "Real-Time Engine", "Vercel"],
      liveUrl: "https://boomrider.vercel.app"
    },
    {
      title: "BoomTech-Gateway",
      tag: "Web3 Platform",
      category: "Decentralized Finance & Asset Tracking",
      description: "Super-App แพลตฟอร์มสำหรับติดตามสินทรัพย์ดิจิทัล แดชบอร์ดการเงิน และการเชื่อมต่อสัญญาอัจฉริยะ (Smart Contracts)",
      tech: ["Solidity", "React", "Web3.js", "PostgreSQL", "UUPS Proxy"],
      liveUrl: "https://boomtech.app"
    },
    {
      title: "Tactical Dispatch & SOS Hub",
      tag: "Mission Critical",
      category: "Disaster Relief & Command System",
      description: "โมดูลต่อยอดสำหรับการประสานงานกู้ภัยฉุกเฉินและระบบโลจิสติกส์เชิงยุทธการ (Tactical C2 Logistics Engine)",
      tech: ["Architecture", "Edge Dispatch", "Real-Time Tracking", "API Gateway"],
      liveUrl: "#"
    }
  ];

  const services = [
    {
      icon: <Layers className="w-6 h-6 text-emerald-400" />,
      title: "End-to-End System Architecture",
      desc: "ออกแบบและพัฒนา Web Application ตั้งแต่ Database Schema, Backend APIs จนถึง Frontend UI/UX ระดับ Production"
    },
    {
      icon: <Radio className="w-6 h-6 text-emerald-400" />,
      title: "Real-Time Dispatch Engines",
      desc: "พัฒนาระบบคิว โลจิสติกส์ ระบบติดตามตำแหน่งแบบเรียลไทม์ และการจัดการสถานะ Order อัตโนมัติ"
    },
    {
      icon: <Cpu className="w-6 h-6 text-emerald-400" />,
      title: "AI & Workflow Automation",
      desc: "เชื่อมต่อ LLM APIs, AI Agents และสร้างระบบ Automation เพื่อเพิ่มประสิทธิภาพการทำงานของธุรกิจ"
    },
    {
      icon: <Database className="w-6 h-6 text-emerald-400" />,
      title: "Infrastructure & Web3 Solutions",
      desc: "ออกแบบ Mini Data Center, ระบบเซิร์ฟเวอร์ Edge Computing และสถาปัตยกรรม Smart Contract"
    }
  ];

  const techStack = [
    "Next.js", "React", "Node.js", "Supabase", "PostgreSQL",
    "Tailwind CSS", "Solidity", "MariaDB", "Vercel", "Framer Motion"
  ];

  return (
    <div className="min-h-screen bg-[#0a0a0c] text-[#e1e1e6] font-sans selection:bg-emerald-500/20 selection:text-emerald-300">
      {/* Navigation */}
      <nav className="border-b border-zinc-800/60 bg-[#0a0a0c]/80 backdrop-blur-md sticky top-0 z-50">
        <div className="max-w-5xl mx-auto px-6 h-16 flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <div className="w-3 h-3 rounded-full bg-emerald-500 animate-pulse" />
            <span className="font-bold tracking-tight text-white">BoomTech Studio</span>
          </div>
          <div className="flex items-center space-x-6 text-sm text-zinc-400">
            <a href="#work" className="hover:text-white transition-colors">Works</a>
            <a href="#services" className="hover:text-white transition-colors">Services</a>
            <a href="#about" className="hover:text-white transition-colors">About</a>
            <a
              href="#contact"
              className="px-3.5 py-1.5 rounded-md bg-zinc-800 hover:bg-zinc-700 text-white transition-colors"
            >
              Get in touch
            </a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="py-24 max-w-5xl mx-auto px-6">
        <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-zinc-900 border border-zinc-800 text-xs text-zinc-400 mb-8">
          <Terminal className="w-3.5 h-3.5 text-emerald-400" />
          <span>Founder & Lead Architect at BoomTech</span>
        </div>

        <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight text-white leading-tight">
          Wisitchai Bunrae
        </h1>
        <p className="mt-4 text-xl sm:text-2xl text-zinc-400 font-normal max-w-3xl leading-relaxed">
          Building resilient real-time platforms, high-performance web systems, and decentralized applications from idea to deployment.
        </p>

        <div className="mt-8 flex flex-wrap gap-4 items-center">
          <a
            href="#work"
            className="px-6 py-3 rounded-lg bg-emerald-500 hover:bg-emerald-400 text-black font-semibold text-sm transition-all flex items-center gap-2"
          >
            Explore Featured Work
            <ArrowUpRight className="w-4 h-4" />
          </a>
          <a
            href="#contact"
            className="px-6 py-3 rounded-lg bg-zinc-900 hover:bg-zinc-800 border border-zinc-800 text-white font-medium text-sm transition-all"
          >
            Technical Consultation
          </a>
        </div>

        {/* Tech Badges */}
        <div className="mt-12 flex flex-wrap gap-2 pt-8 border-t border-zinc-900">
          {techStack.map((tech) => (
            <span key={tech} className="px-3 py-1 rounded bg-zinc-900/80 border border-zinc-800/80 text-xs font-mono text-zinc-400">
              {tech}
            </span>
          ))}
        </div>
      </section>

      {/* Featured Works */}
      <section id="work" className="py-16 max-w-5xl mx-auto px-6">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h2 className="text-2xl font-bold text-white tracking-tight">Featured Engineering</h2>
            <p className="text-sm text-zinc-400 mt-1">คัดสรรระบบที่พัฒนาตั้งแต่สถาปัตยกรรมจนถึงการใช้งานจริง</p>
          </div>
        </div>

        <div className="grid gap-6">
          {projects.map((p, idx) => (
            <div
              key={idx}
              className="p-8 rounded-xl bg-zinc-900/40 border border-zinc-800/70 hover:border-zinc-700 transition-all group relative overflow-hidden"
            >
              <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4">
                <div>
                  <div className="flex items-center space-x-3 mb-2">
                    <span className="text-xs font-semibold px-2 py-0.5 rounded bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 font-mono">
                      {p.tag}
                    </span>
                    <span className="text-xs text-zinc-500 font-mono">{p.category}</span>
                  </div>
                  <h3 className="text-xl font-bold text-white group-hover:text-emerald-400 transition-colors">
                    {p.title}
                  </h3>
                  <p className="text-zinc-400 text-sm mt-3 leading-relaxed max-w-2xl">
                    {p.description}
                  </p>
                </div>
                {p.liveUrl !== "#" && (
                  <a
                    href={p.liveUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="shrink-0 p-2.5 rounded-lg bg-zinc-800/60 hover:bg-zinc-700 text-zinc-300 hover:text-white transition-colors"
                  >
                    <ExternalLink className="w-5 h-5" />
                  </a>
                )}
              </div>

              <div className="mt-6 flex flex-wrap gap-2">
                {p.tech.map((t) => (
                  <span key={t} className="text-xs font-mono px-2 py-0.5 rounded bg-zinc-800/50 text-zinc-400">
                    {t}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-16 max-w-5xl mx-auto px-6 border-t border-zinc-900">
        <h2 className="text-2xl font-bold text-white tracking-tight mb-2">Services & Capabilities</h2>
        <p className="text-sm text-zinc-400 mb-8">ขอบเขตงานรับทำและบริการด้านสถาปัตยกรรมซอฟต์แวร์</p>

        <div className="grid sm:grid-cols-2 gap-4">
          {services.map((s, idx) => (
            <div key={idx} className="p-6 rounded-xl bg-zinc-900/20 border border-zinc-800/50 hover:bg-zinc-900/40 transition-all">
              <div className="mb-4">{s.icon}</div>
              <h3 className="text-base font-semibold text-white mb-2">{s.title}</h3>
              <p className="text-sm text-zinc-400 leading-relaxed">{s.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 max-w-5xl mx-auto px-6 border-t border-zinc-900">
        <div className="p-8 sm:p-12 rounded-2xl bg-gradient-to-b from-zinc-900 to-zinc-950 border border-zinc-800">
          <div className="max-w-xl">
            <h2 className="text-3xl font-bold text-white tracking-tight">Let's build something scalable.</h2>
            <p className="text-zinc-400 text-sm mt-3 leading-relaxed">
              พร้อมให้คำปรึกษาและร่วมงานพัฒนา Full-Stack Application, ระบบ Real-Time Dispatch หรือโซลูชันเฉพาะทาง
            </p>

            <div className="mt-8 space-y-3">
              <div className="flex items-center space-x-3 text-zinc-300 text-sm">
                <Phone className="w-4 h-4 text-emerald-400" />
                <span>0950524447</span>
              </div>
              <div className="flex items-center space-x-3 text-zinc-300 text-sm">
                <Globe className="w-4 h-4 text-emerald-400" />
                <span>Khao Sai, Phichit, Thailand (Operating Globally)</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 border-t border-zinc-900 text-center text-xs text-zinc-600 font-mono">
        © 2026 Wisitchai Bunrae · Founder of BoomTech & Boom Rider. All rights reserved.
      </footer>
    </div>
  );
}
