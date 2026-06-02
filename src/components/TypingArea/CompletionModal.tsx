import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { StatsType } from '../../types';
import { Award, RotateCcw, Zap, Target, Clock, ShieldCheck } from 'lucide-react';

interface CompletionModalProps {
  isOpen: boolean;
  stats: StatsType;
  onRestart: () => void;
}

export const CompletionModal: React.FC<CompletionModalProps> = ({
  isOpen,
  stats,
  onRestart,
}) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="absolute inset-0 bg-[#07080d]/80 backdrop-blur-md"
            onClick={onRestart}
          />

          {/* Modal Content */}
          <motion.div
            initial={{ scale: 0.9, opacity: 0, y: 20 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.9, opacity: 0, y: 20 }}
            transition={{ type: 'spring', duration: 0.6 }}
            className="glass-panel w-full max-w-lg rounded-3xl p-8 border-slate-800 shadow-2xl relative overflow-hidden text-center z-10"
          >
            {/* Header glow */}
            <div className="absolute -top-12 left-1/2 -translate-x-1/2 w-48 h-48 bg-gradient-to-tr from-cyan-500/20 to-indigo-500/20 rounded-full blur-2xl" />

            {/* Icon */}
            <div className="mx-auto w-16 h-16 bg-gradient-to-tr from-cyan-500 to-indigo-500 rounded-2xl flex items-center justify-center shadow-lg shadow-cyan-500/10 mb-6">
              <Award className="w-8 h-8 text-slate-950" />
            </div>

            {/* Title */}
            <h2 className="text-3xl font-extrabold tracking-tight bg-gradient-to-r from-cyan-400 via-indigo-400 to-cyan-400 bg-clip-text text-transparent mb-2">
              🎉 Sentence Completed
            </h2>
            <p className="text-sm text-slate-400 mb-8">
              Outstanding! Let's check how well you did on this practice session.
            </p>

            {/* Stats Grid */}
            <div className="grid grid-cols-2 gap-4 mb-8">
              <div className="bg-slate-950/60 border border-slate-900 rounded-2xl p-4 flex items-center gap-3">
                <div className="p-2.5 rounded-xl bg-cyan-500/10 text-cyan-400">
                  <Zap className="w-5 h-5" />
                </div>
                <div className="text-left">
                  <p className="text-xs text-slate-500 font-semibold uppercase tracking-wider">Speed</p>
                  <p className="text-xl font-bold text-slate-200">{stats.wpm} WPM</p>
                </div>
              </div>

              <div className="bg-slate-950/60 border border-slate-900 rounded-2xl p-4 flex items-center gap-3">
                <div className="p-2.5 rounded-xl bg-indigo-500/10 text-indigo-400">
                  <Target className="w-5 h-5" />
                </div>
                <div className="text-left">
                  <p className="text-xs text-slate-500 font-semibold uppercase tracking-wider">Accuracy</p>
                  <p className="text-xl font-bold text-slate-200">{stats.accuracy}%</p>
                </div>
              </div>

              <div className="bg-slate-950/60 border border-slate-900 rounded-2xl p-4 flex items-center gap-3">
                <div className="p-2.5 rounded-xl bg-amber-500/10 text-amber-400">
                  <Clock className="w-5 h-5" />
                </div>
                <div className="text-left">
                  <p className="text-xs text-slate-500 font-semibold uppercase tracking-wider">Time</p>
                  <p className="text-xl font-bold text-slate-200">{stats.timeElapsed}s</p>
                </div>
              </div>

              <div className="bg-slate-950/60 border border-slate-900 rounded-2xl p-4 flex items-center gap-3">
                <div className="p-2.5 rounded-xl bg-emerald-500/10 text-emerald-400">
                  <ShieldCheck className="w-5 h-5" />
                </div>
                <div className="text-left">
                  <p className="text-xs text-slate-500 font-semibold uppercase tracking-wider">Mistakes</p>
                  <p className="text-xl font-bold text-slate-200">{stats.incorrectChars}</p>
                </div>
              </div>
            </div>

            {/* Restart Button */}
            <button
              onClick={onRestart}
              className="w-full flex items-center justify-center gap-2 py-4 bg-gradient-to-r from-cyan-500 to-indigo-500 hover:from-cyan-400 hover:to-indigo-400 text-slate-950 font-bold rounded-2xl shadow-lg shadow-cyan-500/20 hover:shadow-cyan-500/35 hover:scale-[1.02] active:scale-[0.98] transition-all duration-200 cursor-pointer"
            >
              <RotateCcw className="w-5 h-5" />
              Practice Next Sentence
            </button>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};
