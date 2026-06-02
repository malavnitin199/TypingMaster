import React from 'react';
import { Keyboard, Activity, RefreshCw } from 'lucide-react';

interface MainLayoutProps {
  children: React.ReactNode;
  onReset: () => void;
}

export const MainLayout: React.FC<MainLayoutProps> = ({ children, onReset }) => {
  return (
    <div className="min-h-screen bg-[#07080d] text-slate-100 flex flex-col selection:bg-cyan-500/30 selection:text-cyan-200">
      {/* Glow effects in the background */}
      <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-cyan-500/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-10 right-1/4 w-[400px] h-[400px] bg-indigo-500/5 rounded-full blur-[100px] pointer-events-none" />

      {/* Header */}
      <header className="border-b border-slate-800/80 bg-slate-950/40 backdrop-blur-md sticky top-0 z-40 transition-all duration-300">
        <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="p-2 bg-gradient-to-tr from-cyan-500 to-indigo-500 rounded-xl shadow-lg shadow-cyan-500/10">
              <Keyboard className="w-6 h-6 text-slate-950 font-bold" />
            </div>
            <div>
              <span className="text-xl font-extrabold tracking-tight bg-gradient-to-r from-white via-slate-200 to-slate-400 bg-clip-text text-transparent">
                TypingMaster
              </span>
              <span className="ml-1.5 px-2 py-0.5 text-[10px] font-semibold bg-slate-800 text-cyan-400 rounded-full border border-slate-700">
                PRO
              </span>
            </div>
          </div>

          <div className="flex items-center gap-6">
            <button
              onClick={onReset}
              className="flex items-center gap-2 px-3 py-1.5 text-xs font-medium text-slate-400 hover:text-white bg-slate-900/60 hover:bg-slate-800/80 border border-slate-800 hover:border-slate-700 rounded-lg transition-all cursor-pointer group"
            >
              <RefreshCw className="w-3.5 h-3.5 transition-transform duration-300 group-hover:rotate-180" />
              Reset Session
            </button>
            <div className="flex items-center gap-1.5 text-xs text-slate-400 bg-slate-900/40 px-3 py-1.5 rounded-lg border border-slate-800/50">
              <Activity className="w-3.5 h-3.5 text-emerald-400 animate-pulse" />
              Live Diagnostics
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1 max-w-6xl w-full mx-auto px-6 py-8 flex flex-col justify-center gap-8 relative z-10">
        {children}
      </main>

      {/* Footer */}
      <footer className="border-t border-slate-900 bg-slate-950/20 py-6 text-center text-xs text-slate-500">
        <div className="max-w-6xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p>© 2026 TypingMaster. Build speed, master finger placement.</p>
          <div className="flex gap-4">
            <a href="#" className="hover:text-cyan-400 transition-colors">Documentation</a>
            <span className="text-slate-800">|</span>
            <a href="#" className="hover:text-cyan-400 transition-colors">Privacy Policy</a>
            <span className="text-slate-800">|</span>
            <a href="#" className="hover:text-cyan-400 transition-colors">Settings</a>
          </div>
        </div>
      </footer>
    </div>
  );
};
