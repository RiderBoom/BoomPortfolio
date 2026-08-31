import React, { useState } from 'react';
import { Phone, Mail, MapPin, Copy, Check, Send } from 'lucide-react';
import { profileData } from '../data/portfolioData';

export default function ContactSection() {
  const [copiedField, setCopiedField] = useState(null);
  const [formStatus, setFormStatus] = useState(null);

  const copyToClipboard = (text, fieldName) => {
    navigator.clipboard.writeText(text);
    setCopiedField(fieldName);
    setTimeout(() => setCopiedField(null), 2000);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormStatus('Message received! Wisitchai will reach out to you shortly.');
    setTimeout(() => setFormStatus(null), 5000);
  };

  return (
    <section id="contact" className="py-20 max-w-6xl mx-auto px-6 border-t border-zinc-900">
      <div className="p-8 sm:p-12 rounded-3xl bg-gradient-to-b from-zinc-900/90 to-zinc-950 border border-zinc-800/80 relative overflow-hidden shadow-2xl">
        <div className="grid lg:grid-cols-2 gap-10 items-start">
          {/* Contact Details */}
          <div>
            <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-xs font-mono text-emerald-400 mb-4">
              <span>{profileData.contact.availability}</span>
            </div>

            <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
              Let's build something scalable.
            </h2>
            <p className="text-zinc-400 text-sm mt-3 leading-relaxed">
              พร้อมให้คำปรึกษาและร่วมงานพัฒนา Full-Stack Application, ระบบ Real-Time Dispatch หรือโซลูชันด้านสถาปัตยกรรมระดับองค์กร
            </p>

            <div className="mt-8 space-y-4">
              {/* Phone */}
              <div className="p-4 rounded-xl bg-zinc-900/60 border border-zinc-800 flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <div className="p-2 rounded-lg bg-emerald-500/10 text-emerald-400">
                    <Phone className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-[10px] font-mono text-zinc-500 uppercase">Direct Phone</div>
                    <div className="text-sm font-semibold text-white">{profileData.contact.phone}</div>
                  </div>
                </div>
                <button
                  onClick={() => copyToClipboard(profileData.contact.phone, 'phone')}
                  className="p-2 rounded-lg bg-zinc-800 hover:bg-zinc-700 text-zinc-300 transition-colors"
                  title="Copy Phone"
                >
                  {copiedField === 'phone' ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
                </button>
              </div>

              {/* Email */}
              <div className="p-4 rounded-xl bg-zinc-900/60 border border-zinc-800 flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <div className="p-2 rounded-lg bg-emerald-500/10 text-emerald-400">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-[10px] font-mono text-zinc-500 uppercase">Email Address</div>
                    <div className="text-sm font-semibold text-white">{profileData.contact.email}</div>
                  </div>
                </div>
                <button
                  onClick={() => copyToClipboard(profileData.contact.email, 'email')}
                  className="p-2 rounded-lg bg-zinc-800 hover:bg-zinc-700 text-zinc-300 transition-colors"
                  title="Copy Email"
                >
                  {copiedField === 'email' ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
                </button>
              </div>

              {/* Location */}
              <div className="p-4 rounded-xl bg-zinc-900/60 border border-zinc-800 flex items-center space-x-3">
                <div className="p-2 rounded-lg bg-emerald-500/10 text-emerald-400">
                  <MapPin className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-[10px] font-mono text-zinc-500 uppercase">Base Location</div>
                  <div className="text-sm font-semibold text-white">{profileData.contact.location}</div>
                </div>
              </div>
            </div>
          </div>

          {/* Quick Inquiry Form */}
          <div className="p-6 rounded-2xl bg-zinc-900/80 border border-zinc-800">
            <h3 className="text-lg font-bold text-white mb-2">Send Consultation Request</h3>
            <p className="text-xs text-zinc-400 mb-6">กรอกข้อมูลเพื่อนัดหมายเวลาพูดคุยเกี่ยวกับโปรเจกต์ของคุณ</p>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-xs font-mono text-zinc-400 mb-1">Your Name / Company</label>
                <input
                  type="text"
                  required
                  placeholder="e.g. John Doe (Tech Director)"
                  className="w-full px-4 py-2.5 rounded-lg bg-zinc-950 border border-zinc-800 text-white text-sm focus:outline-none focus:border-emerald-500 transition-colors"
                />
              </div>

              <div>
                <label className="block text-xs font-mono text-zinc-400 mb-1">Email or Phone</label>
                <input
                  type="text"
                  required
                  placeholder="contact@example.com / 0812345678"
                  className="w-full px-4 py-2.5 rounded-lg bg-zinc-950 border border-zinc-800 text-white text-sm focus:outline-none focus:border-emerald-500 transition-colors"
                />
              </div>

              <div>
                <label className="block text-xs font-mono text-zinc-400 mb-1">System Scope / Requirements</label>
                <textarea
                  rows={3}
                  required
                  placeholder="Tell us about your system requirements or project goals..."
                  className="w-full px-4 py-2.5 rounded-lg bg-zinc-950 border border-zinc-800 text-white text-sm focus:outline-none focus:border-emerald-500 transition-colors"
                />
              </div>

              <button
                type="submit"
                className="w-full py-3 rounded-lg bg-emerald-500 hover:bg-emerald-400 text-black font-semibold text-sm transition-all flex items-center justify-center space-x-2"
              >
                <span>Submit Inquiry</span>
                <Send className="w-4 h-4" />
              </button>

              {formStatus && (
                <div className="p-3 rounded-lg bg-emerald-500/10 border border-emerald-500/20 text-xs text-emerald-400 font-mono text-center">
                  {formStatus}
                </div>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
