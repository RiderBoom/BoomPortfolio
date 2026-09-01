import React, { useEffect, useRef, useState } from 'react';
import { MessageCircle, Send, ShieldCheck } from 'lucide-react';
import { isSupabaseConfigured, supabase } from '../lib/supabase';

const conversationStorageKey = 'boomtech_conversation_id';
const mergeMessage = (current, next) => current.some(({ id }) => id === next.id)
  ? current
  : [...current, next].sort((a, b) => new Date(a.created_at) - new Date(b.created_at));

export default function ContactSection() {
  const [visitorName, setVisitorName] = useState('');
  const [draft, setDraft] = useState('');
  const [conversationId, setConversationId] = useState(null);
  const [messages, setMessages] = useState([]);
  const [status, setStatus] = useState(isSupabaseConfigured ? 'connecting' : 'error');
  const [errorMessage, setErrorMessage] = useState(isSupabaseConfigured ? '' : 'ระบบแชทยังไม่ได้ตั้งค่าการเชื่อมต่อ');
  const messageEndRef = useRef(null);

  useEffect(() => {
    if (!supabase) {
      return undefined;
    }

    let channel;
    let active = true;
    const connect = async () => {
      const { data: sessionData } = await supabase.auth.getSession();
      if (!sessionData.session) {
        const { error } = await supabase.auth.signInAnonymously();
        if (error) throw error;
      }

      const savedId = localStorage.getItem(conversationStorageKey);
      if (!savedId || !active) {
        setStatus('ready');
        return;
      }

      const { data: conversation } = await supabase.from('conversations')
        .select('id, visitor_name').eq('id', savedId).maybeSingle();
      if (!conversation) {
        localStorage.removeItem(conversationStorageKey);
        setStatus('ready');
        return;
      }

      setConversationId(conversation.id);
      setVisitorName(conversation.visitor_name);
      const { data: history, error: historyError } = await supabase.from('messages')
        .select('id, sender, body, created_at').eq('conversation_id', conversation.id).order('created_at');
      if (historyError) throw historyError;
      setMessages(history ?? []);

      channel = supabase.channel(`conversation:${conversation.id}`)
        .on('postgres_changes', { event: 'INSERT', schema: 'public', table: 'messages', filter: `conversation_id=eq.${conversation.id}` }, ({ new: newMessage }) => {
          setMessages((current) => mergeMessage(current, newMessage));
        }).subscribe();
      setStatus('ready');
    };

    connect().catch(() => {
      setStatus('error');
      setErrorMessage('เชื่อมต่อระบบแชทไม่สำเร็จ กรุณาลองใหม่อีกครั้ง');
    });
    return () => {
      active = false;
      if (channel) supabase.removeChannel(channel);
    };
  }, []);

  useEffect(() => {
    messageEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  const submitMessage = async (event) => {
    event.preventDefault();
    const body = draft.trim();
    const name = visitorName.trim();
    if (!body || !name || status === 'sending') return;
    setStatus('sending');
    setErrorMessage('');

    try {
      const { data: { user } } = await supabase.auth.getUser();
      if (!user) throw new Error('Missing chat session');
      let activeConversationId = conversationId;
      if (!activeConversationId) {
        const { data: conversation, error } = await supabase.from('conversations')
          .insert({ owner_id: user.id, visitor_name: name }).select('id').single();
        if (error) throw error;
        activeConversationId = conversation.id;
        setConversationId(activeConversationId);
        localStorage.setItem(conversationStorageKey, activeConversationId);
      }

      const { data: message, error } = await supabase.from('messages')
        .insert({ conversation_id: activeConversationId, owner_id: user.id, body })
        .select('id, sender, body, created_at').single();
      if (error) throw error;
      setMessages((current) => mergeMessage(current, message));
      setDraft('');
      setStatus('ready');
    } catch {
      setStatus('error');
      setErrorMessage('ส่งข้อความไม่สำเร็จ กรุณาลองใหม่อีกครั้ง');
    }
  };

  return (
    <section id="contact" className="py-20 max-w-6xl mx-auto px-6 border-t border-zinc-900">
      <div className="grid lg:grid-cols-[0.8fr_1.2fr] gap-10 items-center rounded-3xl border border-zinc-800 bg-gradient-to-b from-zinc-900/80 to-zinc-950 p-7 sm:p-12">
        <div>
          <div className="inline-flex items-center gap-2 text-xs font-mono text-emerald-400 mb-4"><MessageCircle className="w-4 h-4" /> Direct project chat</div>
          <h2 className="text-3xl sm:text-4xl font-bold text-white">Talk directly about your system.</h2>
          <p className="mt-4 text-sm leading-relaxed text-zinc-400">เริ่มบทสนทนากับทีม BoomTech ได้จากหน้านี้ ข้อความจะถูกบันทึกอย่างปลอดภัยและอยู่ใน conversation เดิมเมื่อกลับมาอีกครั้ง</p>
          <div className="mt-6 flex items-start gap-3 text-xs leading-relaxed text-zinc-500"><ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0" /><span>Anonymous session + Row Level Security: ผู้เข้าชมแต่ละคนเข้าถึงได้เฉพาะข้อความของตนเอง</span></div>
        </div>

        <div className="overflow-hidden rounded-2xl border border-zinc-800 bg-[#0b0b0e] shadow-2xl">
          <div className="flex items-center justify-between border-b border-zinc-800 px-5 py-4">
            <div><div className="text-sm font-semibold text-white">BoomTech Project Chat</div><div className="text-[11px] text-zinc-500">Typically replies as soon as available</div></div>
            <span className="flex items-center gap-2 text-[11px] text-emerald-400"><span className="w-2 h-2 rounded-full bg-emerald-400" /> Secure</span>
          </div>
          <div className="h-72 overflow-y-auto p-5 space-y-3" aria-live="polite">
            <div className="max-w-[85%] rounded-2xl rounded-tl-sm bg-zinc-800 px-4 py-3 text-sm text-zinc-300">สวัสดีครับ เล่าเป้าหมายหรือปัญหาของระบบที่ต้องการพัฒนาได้เลย</div>
            {messages.map((message) => <div key={message.id} className={`max-w-[85%] rounded-2xl px-4 py-3 text-sm ${message.sender === 'team' ? 'rounded-tl-sm bg-zinc-800 text-zinc-200' : 'ml-auto rounded-tr-sm bg-emerald-500 text-black'}`}>{message.body}</div>)}
            <div ref={messageEndRef} />
          </div>
          <form onSubmit={submitMessage} className="border-t border-zinc-800 p-4 space-y-3">
            {!conversationId ? <><label htmlFor="visitor-name" className="sr-only">ชื่อของคุณหรือบริษัท</label><input id="visitor-name" value={visitorName} onChange={(event) => setVisitorName(event.target.value)} maxLength={80} required autoComplete="name" placeholder="ชื่อของคุณ / บริษัท" className="w-full rounded-lg border border-zinc-800 bg-zinc-950 px-4 py-2.5 text-sm text-white outline-none focus:border-emerald-500" /></> : null}
            <div className="flex gap-2">
              <label htmlFor="chat-message" className="sr-only">ข้อความเกี่ยวกับโปรเจกต์</label>
              <textarea id="chat-message" value={draft} onChange={(event) => setDraft(event.target.value)} maxLength={2000} required rows={2} placeholder="พิมพ์ข้อความเกี่ยวกับโปรเจกต์..." className="min-h-12 flex-1 resize-none rounded-lg border border-zinc-800 bg-zinc-950 px-4 py-3 text-sm text-white outline-none focus:border-emerald-500" />
              <button type="submit" disabled={!isSupabaseConfigured || status === 'connecting' || status === 'sending'} aria-label="Send chat message" className="self-stretch rounded-lg bg-emerald-500 px-4 text-black hover:bg-emerald-400 disabled:cursor-not-allowed disabled:opacity-50"><Send className="w-4 h-4" /></button>
            </div>
            {errorMessage && <p role="alert" className="text-xs text-rose-400">{errorMessage}</p>}
          </form>
        </div>
      </div>
    </section>
  );
}
