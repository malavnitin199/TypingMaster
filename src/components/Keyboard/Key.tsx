import React from 'react';
import { motion } from 'framer-motion';
import { KeyConfig } from '../../types';
import { getFingerColorScheme } from '../../utils/fingerColors';

interface KeyProps {
  config: KeyConfig;
  isPressed: boolean;
  isTarget: boolean;
}

export const Key: React.FC<KeyProps> = ({ config, isPressed, isTarget }) => {
  const colorScheme = getFingerColorScheme(config.finger);

  // We determine how to render labels. Double key labels (e.g. "1" and "!") should stack vertically
  const renderLabel = () => {
    // Specials like Spacebar
    if (config.key === ' ') {
      return <span className="text-[10px] text-slate-500 uppercase tracking-widest">Space</span>;
    }

    if (config.shiftKey) {
      return (
        <div className="flex flex-col items-center justify-between h-full py-0.5 select-none">
          <span className={`text-[10px] ${isPressed ? 'text-slate-900 font-bold' : 'text-slate-400'} font-semibold transition-colors`}>
            {config.shiftKey}
          </span>
          <span className={`text-sm ${isPressed ? 'text-slate-950 font-extrabold' : 'text-slate-200'} font-bold transition-colors`}>
            {config.key}
          </span>
        </div>
      );
    }

    return (
      <span className={`text-xs md:text-sm font-bold ${isPressed ? 'text-slate-950 font-extrabold' : 'text-slate-200'} uppercase transition-colors select-none`}>
        {config.key}
      </span>
    );
  };

  return (
    <motion.div
      animate={
        isPressed
          ? { scale: 0.93, y: 1.5 }
          : isTarget
          ? { scale: [1, 1.05, 1] }
          : { scale: 1, y: 0 }
      }
      transition={
        isTarget
          ? { repeat: Infinity, duration: 1.2, ease: 'easeInOut' }
          : { type: 'spring', stiffness: 500, damping: 20 }
      }
      className={`h-11 md:h-12 rounded-lg border text-center transition-all duration-100 flex flex-col justify-center items-center relative overflow-hidden
        ${
          isPressed
            ? `${colorScheme.activeBg} ${colorScheme.glow} border-white/50 shadow-lg`
            : `${colorScheme.bg} ${colorScheme.border} ${colorScheme.text}`
        }
        ${
          isTarget && !isPressed
            ? `${colorScheme.glow} border-cyan-400 border-2 relative after:absolute after:inset-0 after:rounded-lg after:border after:border-cyan-400 after:animate-ping after:opacity-20`
            : ''
        }
      `}
      style={{ gridColumn: `span ${Math.round(config.width * 4)}` }}
    >
      {/* Light glow overlay for Target Key */}
      {isTarget && !isPressed && (
        <div className="absolute inset-0 bg-cyan-400/5 pointer-events-none" />
      )}
      {renderLabel()}
    </motion.div>
  );
};
