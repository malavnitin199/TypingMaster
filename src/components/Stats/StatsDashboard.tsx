import React from 'react';
import { StatsType } from '../../types';
import { Zap, Target, Clock, Check, X, ShieldAlert } from 'lucide-react';

interface StatsDashboardProps {
  stats: StatsType;
}

export const StatsDashboard: React.FC<StatsDashboardProps> = ({ stats }) => {
  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };

  return (
    <div className="grid grid-cols-2 md:grid-cols-6 gap-4 w-full">
      {/* WPM Card */}
      <div className="glass-panel p-4 rounded-2xl flex flex-col justify-between relative overflow-hidden transition-all duration-300 hover:border-cyan-500/30 group">
        <div className="absolute top-0 right-0 w-16 h-16 bg-cyan-500/5 rounded-full blur-xl group-hover:bg-cyan-500/10 transition-colors" />
        <div className="flex items-center justify-between text-slate-400 mb-2">
          <span className="text-xs font-semibold uppercase tracking-wider">Speed</span>
          <Zap className="w-4 h-4 text-cyan-400 group-hover:scale-110 transition-transform" />
        </div>
        <div>
          <span className="text-3xl font-extrabold text-cyan-400 tracking-tight">{stats.wpm}</span>
          <span className="text-xs text-slate-500 font-medium ml-1">WPM</span>
        </div>
      </div>

      {/* Accuracy Card */}
      <div className="glass-panel p-4 rounded-2xl flex flex-col justify-between relative overflow-hidden transition-all duration-300 hover:border-indigo-500/30 group">
        <div className="absolute top-0 right-0 w-16 h-16 bg-indigo-500/5 rounded-full blur-xl group-hover:bg-indigo-500/10 transition-colors" />
        <div className="flex items-center justify-between text-slate-400 mb-2">
          <span className="text-xs font-semibold uppercase tracking-wider">Accuracy</span>
          <Target className="w-4 h-4 text-indigo-400 group-hover:scale-110 transition-transform" />
        </div>
        <div>
          <span className="text-3xl font-extrabold text-indigo-400 tracking-tight">{stats.accuracy}</span>
          <span className="text-xs text-slate-500 font-medium ml-1">%</span>
        </div>
      </div>

      {/* Time Elapsed Card */}
      <div className="glass-panel p-4 rounded-2xl flex flex-col justify-between relative overflow-hidden transition-all duration-300 hover:border-amber-500/30 group">
        <div className="absolute top-0 right-0 w-16 h-16 bg-amber-500/5 rounded-full blur-xl group-hover:bg-amber-500/10 transition-colors" />
        <div className="flex items-center justify-between text-slate-400 mb-2">
          <span className="text-xs font-semibold uppercase tracking-wider">Time</span>
          <Clock className="w-4 h-4 text-amber-400 group-hover:scale-110 transition-transform animate-pulse" />
        </div>
        <div>
          <span className="text-3xl font-extrabold text-amber-400 tracking-tight">
            {formatTime(stats.timeElapsed)}
          </span>
        </div>
      </div>

      {/* Correct Keys Card */}
      <div className="glass-panel p-4 rounded-2xl flex flex-col justify-between relative overflow-hidden transition-all duration-300 hover:border-emerald-500/30 group">
        <div className="absolute top-0 right-0 w-16 h-16 bg-emerald-500/5 rounded-full blur-xl group-hover:bg-emerald-500/10 transition-colors" />
        <div className="flex items-center justify-between text-slate-400 mb-2">
          <span className="text-xs font-semibold uppercase tracking-wider">Correct</span>
          <Check className="w-4 h-4 text-emerald-400 group-hover:scale-110 transition-transform" />
        </div>
        <div>
          <span className="text-3xl font-extrabold text-emerald-400 tracking-tight">
            {stats.correctChars}
          </span>
          <span className="text-xs text-slate-500 font-medium ml-1">keys</span>
        </div>
      </div>

      {/* Incorrect Keys Card */}
      <div className="glass-panel p-4 rounded-2xl flex flex-col justify-between relative overflow-hidden transition-all duration-300 hover:border-rose-500/30 group">
        <div className="absolute top-0 right-0 w-16 h-16 bg-rose-500/5 rounded-full blur-xl group-hover:bg-rose-500/10 transition-colors" />
        <div className="flex items-center justify-between text-slate-400 mb-2">
          <span className="text-xs font-semibold uppercase tracking-wider">Mistakes</span>
          <X className="w-4 h-4 text-rose-400 group-hover:scale-110 transition-transform" />
        </div>
        <div>
          <span className="text-3xl font-extrabold text-rose-400 tracking-tight">
            {stats.incorrectChars}
          </span>
          <span className="text-xs text-slate-500 font-medium ml-1">errors</span>
        </div>
      </div>

      {/* Total Keys Card */}
      <div className="glass-panel p-4 rounded-2xl flex flex-col justify-between relative overflow-hidden transition-all duration-300 hover:border-slate-500/30 group">
        <div className="absolute top-0 right-0 w-16 h-16 bg-slate-500/5 rounded-full blur-xl group-hover:bg-slate-500/10 transition-colors" />
        <div className="flex items-center justify-between text-slate-400 mb-2">
          <span className="text-xs font-semibold uppercase tracking-wider">Total Keys</span>
          <ShieldAlert className="w-4 h-4 text-slate-400 group-hover:scale-110 transition-transform" />
        </div>
        <div>
          <span className="text-3xl font-extrabold text-slate-300 tracking-tight">
            {stats.totalTyped}
          </span>
          <span className="text-xs text-slate-500 font-medium ml-1">pressed</span>
        </div>
      </div>
    </div>
  );
};
