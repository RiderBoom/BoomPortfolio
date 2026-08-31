import React, { useState, useRef, useEffect } from 'react';
import { X, Terminal, CornerDownLeft, Trash2 } from 'lucide-react';
import { terminalCommands } from '../data/portfolioData';

export default function TerminalWidget({ isOpen, onClose }) {
  const [input, setInput] = useState('');
  const [history, setHistory] = useState([
    { type: 'output', text: 'BoomTech CLI v2.0. Type "help" to list available commands.' }
  ]);
  const bottomRef = useRef(null);

  useEffect(() => {
    if (isOpen) {
      bottomRef.current?.scrollIntoView({ behavior: 'smooth' });
    }
  }, [history, isOpen]);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const handleCommand = (e) => {
    e.preventDefault();
    const cmd = input.trim().toLowerCase();
    if (!cmd) return;

    const newHistory = [...history, { type: 'input', text: `$ ${input}` }];

    if (cmd === 'clear') {
      setHistory([]);
      setInput('');
      return;
    }

    if (terminalCommands[cmd]) {
      newHistory.push({ type: 'output', text: terminalCommands[cmd] });
    } else {
      newHistory.push({
        type: 'error',
        text: `Command not found: "${cmd}". Type "help" for a list of valid commands.`
      });
    }

    setHistory(newHistory);
    setInput('');
  };

  const executeQuickCmd = (cmd) => {
    setInput(cmd);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="bg-[#0c0d10] border border-zinc-800 rounded-2xl max-w-2xl w-full overflow-hidden shadow-2xl font-mono text-xs text-zinc-300">
        {/* Titlebar */}
        <div className="px-4 py-3 bg-zinc-900 border-b border-zinc-800 flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <div className="flex space-x-1.5">
              <span className="w-3 h-3 rounded-full bg-rose-500/80 inline-block" />
              <span className="w-3 h-3 rounded-full bg-amber-500/80 inline-block" />
              <span className="w-3 h-3 rounded-full bg-emerald-500/80 inline-block" />
            </div>
            <span className="text-zinc-400 font-semibold ml-2 flex items-center gap-1.5">
              <Terminal className="w-3.5 h-3.5 text-emerald-400" />
              wisitchai@boomtech-cli:~
            </span>
          </div>

          <div className="flex items-center space-x-2">
            <button
              onClick={() => setHistory([])}
              className="p-1 rounded text-zinc-400 hover:text-white hover:bg-zinc-800"
              title="Clear terminal"
            >
              <Trash2 className="w-3.5 h-3.5" />
            </button>
            <button
              aria-label="Close terminal"
              onClick={onClose}
              className="p-1 rounded text-zinc-400 hover:text-white hover:bg-zinc-800"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Quick Helper Buttons */}
        <div className="px-4 py-2 bg-zinc-900/40 border-b border-zinc-800/60 flex flex-wrap gap-2 text-[11px]">
          <span className="text-zinc-500 py-0.5">Quick run:</span>
          {['help', 'about', 'projects', 'services', 'skills', 'contact'].map((c) => (
            <button
              key={c}
              onClick={() => executeQuickCmd(c)}
              className="px-2 py-0.5 rounded bg-zinc-800/80 hover:bg-zinc-700 text-emerald-400 transition-colors"
            >
              {c}
            </button>
          ))}
        </div>

        {/* Terminal Body */}
        <div className="p-4 h-80 overflow-y-auto space-y-2 leading-relaxed bg-[#0a0a0c]">
          {history.map((item, index) => (
            <div key={index}>
              {item.type === 'input' && (
                <div className="text-emerald-400 font-bold">{item.text}</div>
              )}
              {item.type === 'output' && (
                <pre className="whitespace-pre-wrap text-zinc-300 font-mono text-xs">{item.text}</pre>
              )}
              {item.type === 'error' && (
                <div className="text-rose-400 font-mono">{item.text}</div>
              )}
            </div>
          ))}
          <div ref={bottomRef} />
        </div>

        {/* Input Form */}
        <form onSubmit={handleCommand} className="p-3 bg-zinc-900/80 border-t border-zinc-800 flex items-center space-x-2">
          <span className="text-emerald-400 font-bold">$</span>
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Type command ('help', 'projects', etc)..."
            className="flex-1 bg-transparent text-white focus:outline-none font-mono text-xs"
            autoFocus
          />
          <button type="submit" className="p-1.5 rounded bg-emerald-500/10 text-emerald-400 hover:bg-emerald-500/20">
            <CornerDownLeft className="w-3.5 h-3.5" />
          </button>
        </form>
      </div>
    </div>
  );
}
