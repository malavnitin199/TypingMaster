import React from 'react';
import { CharItem } from '../../types';

interface TypingAreaProps {
  charItems: CharItem[];
  currentIndex: number;
}

export const TypingArea: React.FC<TypingAreaProps> = ({ charItems, currentIndex }) => {
  return (
    <div className="glass-panel p-8 rounded-3xl relative overflow-hidden transition-all duration-300 border-slate-800/80 hover:border-slate-700/80">
      <div className="absolute top-0 left-0 w-full h-[3px] bg-gradient-to-r from-cyan-500 via-indigo-500 to-cyan-500" />
      
      {/* Typing instruction hint */}
      <div className="flex justify-between items-center mb-6 text-xs text-slate-500 font-semibold uppercase tracking-widest">
        <span>Practice Session</span>
        <span className="flex items-center gap-1.5">
          <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-ping" />
          Active Typing Mode
        </span>
      </div>

      {/* Target Sentence Display */}
      <div className="text-2xl md:text-3xl font-mono leading-relaxed select-none tracking-wide text-left break-words">
        {charItems.map((item, idx) => {
          const isActive = idx === currentIndex;
          let colorClass = 'text-slate-500'; // neutral
          
          if (item.status === 'correct') {
            colorClass = 'text-emerald-400 drop-shadow-[0_0_8px_rgba(52,211,153,0.25)]';
          } else if (item.status === 'incorrect') {
            colorClass = 'text-rose-500 bg-rose-500/10 rounded px-[2px] -mx-[2px]';
          }

          return (
            <span
              key={idx}
              className={`relative transition-all duration-150 ${colorClass} ${
                isActive ? 'text-white font-semibold' : ''
              }`}
            >
              {/* Blinking Caret */}
              {isActive && (
                <span className="absolute left-0 bottom-0 top-1 w-[2px] bg-cyan-400 animate-caret shadow-[0_0_8px_#06b6d4]" />
              )}
              {/* Render space as a visible space but subtle so they know it is a space */}
              {item.char === ' ' ? '\u00A0' : item.char}
            </span>
          );
        })}
      </div>

      {/* Keyboard guidance hint */}
      <div className="mt-6 flex justify-between items-center text-xs text-slate-500">
        <span>No need to click! Just start typing on your keyboard.</span>
        <span>
          Character {currentIndex} of {charItems.length}
        </span>
      </div>
    </div>
  );
};
