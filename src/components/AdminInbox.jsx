import React, { useEffect, useMemo, useRef, useState } from 'react';
import { ArrowLeft, CheckCircle2, LogOut, MessageCircle, Send } from 'lucide-react';
import { supabase } from '../lib/supabase';

const mergeMessage = (current, next) => current.some(({ id }) => id === next.id)
  ? current
  : [...current, next].sort((a, b) => new Date(a.created_at) - new Date(b.created_at));

export default function AdminInbox() {
  const [session, setSession] = useState(null);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [conversations, setConversations] = useState([]);
  const [activeId, setActiveId] = useState(null);
  const [messages, setMessages] = useState([]);
  const [draft, setDraft] = useState('');
  const [status, setStatus] = useState('loading');
  const [errorMessage, setErrorMessage] = useState('');
  const messageEndRef = useRef(null);

  const activeConversation = useMemo(
    () => conversations.find(({ id }) => id === activeId) ?? null,
    [activeId, conversations],
  );

  useEffect(() => {
    if (!supabase) {
      return undefined;
    }

    let active = true;
    supabase.auth.getSession().then(async ({ data }) => {
      if (!active) return;
      if (data.session?.user?.is_anonymous) {
        await supabase.auth.signOut();
        return;
      }
      setSession(data.session);
      setStatus(data.session ? 'ready' : 'signed-out');
    });
    const { data: listener } = supabase.auth.onAuthStateChange((_event, nextSession) => {
      if (nextSession?.user?.is_anonymous) return;
      setSession(nextSession);
      setStatus(nextSession ? 'ready' : 'signed-out');
    });
    return () => {
      active = false;
      listener.subscription.unsubscribe();
    };
  }, []);

  useEffect(() => {
    if (!session || !supabase) return undefined;
    let active = true;
    let channel;

    const loadInbox = async () => {
      const { data: allowed, error: permissionError } = await supabase.rpc('is_chat_admin');
      if (permissionError || !allowed) throw new Error('This account is not a chat administrator.');

      const { data, error } = await supabase.from('conversations')
        .select('id, owner_id, visitor_name, status, created_at, updated_at')
        .order('updated_at', { ascending: false });
      if (error) throw error;
      if (!active) return;
      setConversations(data ?? []);
      setActiveId((current) => current ?? data?.[0]?.id ?? null);
      channel = supabase.channel('admin-inbox')
        .on('postgres_changes', { event: '*', schema: 'public', table: 'conversations' }, ({ eventType, new: row }) => {
          if (eventType === 'DELETE') return;
          setConversations((current) => [row, ...current.filter(({ id }) => id !== row.id)]
            .sort((a, b) => new Date(b.updated_at) - new Date(a.updated_at)));
        })
        .on('postgres_changes', { event: 'INSERT', schema: 'public', table: 'messages' }, ({ new: message }) => {
          if (message.conversation_id === activeId) setMessages((current) => mergeMessage(current, message));
        })
        .subscribe();
      setStatus('ready');
    };

    loadInbox().catch((error) => {
      setStatus('forbidden');
      setErrorMessage(error.message);
    });
    return () => {
      active = false;
      if (channel) supabase.removeChannel(channel);
    };
  }, [session, activeId]);

  useEffect(() => {
    if (!activeId || !supabase) {
      return undefined;
    }
    let active = true;
    supabase.from('messages').select('id, conversation_id, sender, body, created_at')
      .eq('conversation_id', activeId).order('created_at')
      .then(({ data, error }) => {
        if (!active) return;
        if (error) setErrorMessage(error.message);
        else setMessages(data ?? []);
      });
    return () => { active = false; };
  }, [activeId]);

  useEffect(() => {
    messageEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  const signIn = async (event) => {
    event.preventDefault();
    setStatus('loading');
    setErrorMessage('');
    const { error } = await supabase.auth.signInWithPassword({ email, password });
    if (error) {
      setStatus('signed-out');
      setErrorMessage('เข้าสู่ระบบไม่สำเร็จ กรุณาตรวจสอบอีเมลและรหัสผ่าน');
    }
  };

  const sendReply = async (event) => {
    event.preventDefault();
    const body = draft.trim();
    if (!body || !activeConversation || status === 'sending') return;
    setStatus('sending');
    const { data, error } = await supabase.from('messages').insert({
      conversation_id: activeConversation.id,
      owner_id: activeConversation.owner_id,
      sender: 'team',
      body,
    }).select('id, conversation_id, sender, body, created_at').single();
    if (error) setErrorMessage(error.message);
    else {
      setMessages((current) => mergeMessage(current, data));
      setDraft('');
    }
    setStatus('ready');
  };

  const toggleClosed = async () => {
    if (!activeConversation) return;
    const nextStatus = activeConversation.status === 'closed' ? 'open' : 'closed';
    const { error } = await supabase.from('conversations').update({ status: nextStatus }).eq('id', activeConversation.id);
    if (error) setErrorMessage(error.message);
  };

  const selectConversation = (conversationId) => {
    setMessages([]);
    setActiveId(conversationId);
  };

  if (!supabase) {
    return <main className="grid min-h-screen place-items-center bg-[#07090d] p-6 text-zinc-100"><p role="alert" className="text-rose-400">ระบบ Admin ยังไม่ได้ตั้งค่าการเชื่อมต่อ Supabase</p></main>;
  }

  if (!session || status === 'signed-out') {
    return (
      <main className="min-h-screen bg-[#07090d] px-6 py-16 text-zinc-100">
        <form onSubmit={signIn} className="mx-auto max-w-sm rounded-2xl border border-zinc-800 bg-zinc-950 p-7 shadow-2xl">
          <a href="/" className="mb-8 inline-flex items-center gap-2 text-sm text-zinc-400 hover:text-white"><ArrowLeft className="h-4 w-4" /> กลับหน้าโปรไฟล์</a>
          <h1 className="text-2xl font-bold">BoomTech Admin Inbox</h1>
          <p className="mt-2 text-sm text-zinc-500">สำหรับบัญชีผู้ดูแลที่ได้รับสิทธิ์เท่านั้น</p>
          <label className="mt-7 block text-sm text-zinc-300" htmlFor="admin-email">อีเมล</label>
          <input id="admin-email" type="email" autoComplete="email" required value={email} onChange={(event) => setEmail(event.target.value)} className="mt-2 w-full rounded-lg border border-zinc-800 bg-black px-4 py-3 outline-none focus:border-emerald-500" />
          <label className="mt-4 block text-sm text-zinc-300" htmlFor="admin-password">รหัสผ่าน</label>
          <input id="admin-password" type="password" autoComplete="current-password" required value={password} onChange={(event) => setPassword(event.target.value)} className="mt-2 w-full rounded-lg border border-zinc-800 bg-black px-4 py-3 outline-none focus:border-emerald-500" />
          {errorMessage ? <p role="alert" className="mt-4 text-sm text-rose-400">{errorMessage}</p> : null}
          <button disabled={status === 'loading'} className="mt-6 w-full rounded-lg bg-emerald-500 px-4 py-3 font-semibold text-black disabled:opacity-50">เข้าสู่ระบบ</button>
        </form>
      </main>
    );
  }

  if (status === 'forbidden') {
    return <main className="grid min-h-screen place-items-center bg-[#07090d] p-6 text-zinc-100"><div className="max-w-md text-center"><h1 className="text-2xl font-bold">ไม่มีสิทธิ์เข้าถึง Inbox</h1><p className="mt-3 text-zinc-400">บัญชีนี้เข้าสู่ระบบสำเร็จ แต่ยังไม่ได้รับสิทธิ์ผู้ดูแล</p><button onClick={() => supabase.auth.signOut()} className="mt-6 rounded-lg bg-zinc-800 px-4 py-2">ออกจากระบบ</button></div></main>;
  }

  return (
    <main className="min-h-screen bg-[#07090d] text-zinc-100">
      <header className="flex h-16 items-center justify-between border-b border-zinc-800 px-5 sm:px-8">
        <div><h1 className="font-bold">BoomTech Admin Inbox</h1><p className="text-xs text-zinc-500">{session.user.email}</p></div>
        <button onClick={() => supabase.auth.signOut()} className="inline-flex items-center gap-2 rounded-lg border border-zinc-800 px-3 py-2 text-sm text-zinc-300 hover:bg-zinc-900"><LogOut className="h-4 w-4" /> ออกจากระบบ</button>
      </header>
      <div className="grid min-h-[calc(100vh-4rem)] lg:grid-cols-[22rem_1fr]">
        <aside className="border-b border-zinc-800 lg:border-b-0 lg:border-r">
          <div className="border-b border-zinc-800 p-4 text-xs font-mono uppercase tracking-wider text-zinc-500">Conversations ({conversations.length})</div>
          <div className="max-h-72 overflow-y-auto lg:max-h-[calc(100vh-8rem)]">
            {conversations.map((conversation) => (
              <button key={conversation.id} onClick={() => selectConversation(conversation.id)} className={`w-full border-b border-zinc-900 p-4 text-left hover:bg-zinc-900 ${activeId === conversation.id ? 'bg-zinc-900' : ''}`}>
                <div className="flex items-center justify-between gap-3"><span className="font-medium">{conversation.visitor_name}</span><span className={`text-[10px] uppercase ${conversation.status === 'open' ? 'text-emerald-400' : 'text-zinc-600'}`}>{conversation.status}</span></div>
                <time className="mt-1 block text-xs text-zinc-600">{new Date(conversation.updated_at).toLocaleString('th-TH')}</time>
              </button>
            ))}
          </div>
        </aside>
        <section aria-label="บทสนทนาที่เลือก" className="flex min-h-[36rem] flex-col">
          {activeConversation ? <>
            <div className="flex items-center justify-between border-b border-zinc-800 px-5 py-4"><div><h2 className="font-semibold">{activeConversation.visitor_name}</h2><p className="text-xs text-zinc-500">Conversation ID: {activeConversation.id}</p></div><button onClick={toggleClosed} className="inline-flex items-center gap-2 rounded-lg border border-zinc-800 px-3 py-2 text-xs hover:bg-zinc-900"><CheckCircle2 className="h-4 w-4" />{activeConversation.status === 'closed' ? 'เปิดบทสนทนา' : 'ปิดบทสนทนา'}</button></div>
            <div className="flex-1 space-y-3 overflow-y-auto p-5" aria-live="polite">
              {messages.map((message) => <div key={message.id} className={`max-w-[80%] rounded-2xl px-4 py-3 text-sm ${message.sender === 'team' ? 'ml-auto bg-emerald-500 text-black' : 'bg-zinc-800 text-zinc-200'}`}><p>{message.body}</p><time className="mt-1 block text-[10px] opacity-60">{new Date(message.created_at).toLocaleString('th-TH')}</time></div>)}
              <div ref={messageEndRef} />
            </div>
            <form onSubmit={sendReply} className="flex gap-3 border-t border-zinc-800 p-4"><label htmlFor="admin-reply" className="sr-only">ข้อความตอบกลับ</label><textarea id="admin-reply" value={draft} onChange={(event) => setDraft(event.target.value)} maxLength={2000} required rows={2} placeholder="พิมพ์ข้อความตอบกลับ..." className="min-h-12 flex-1 resize-none rounded-lg border border-zinc-800 bg-black px-4 py-3 text-sm outline-none focus:border-emerald-500" /><button disabled={status === 'sending' || activeConversation.status === 'closed'} aria-label="ส่งข้อความตอบกลับ" className="rounded-lg bg-emerald-500 px-5 text-black disabled:opacity-50"><Send className="h-4 w-4" /></button></form>
          </> : <div className="grid flex-1 place-items-center text-zinc-600"><div className="text-center"><MessageCircle className="mx-auto h-8 w-8" /><p className="mt-3">ยังไม่มีบทสนทนา</p></div></div>}
          {errorMessage ? <p role="alert" className="border-t border-zinc-800 px-5 py-3 text-sm text-rose-400">{errorMessage}</p> : null}
        </section>
      </div>
    </main>
  );
}
