import React from 'react';
import { keyboardConfig } from '../../data/keyboardConfig';
import { Key } from './Key';
import { FingerType } from '../../types';
import { getFingerColorScheme } from '../../utils/fingerColors';

interface InteractiveKeyboardProps {
  activeKeys: Set<string>;
  targetKeyCode: string;
  targetFinger: FingerType;
}

export const InteractiveKeyboard: React.FC<InteractiveKeyboardProps> = ({
  activeKeys,
  targetKeyCode,
  targetFinger,
}) => {
  // Group keys by row
  const rows = [0, 1, 2, 3, 4].map((rowIndex) =>
    keyboardConfig.filter((k) => k.row === rowIndex)
  );

  // Helper to determine if a key is pressed (handles Enter split)
  const checkIsPressed = (code: string) => {
    if (code.startsWith('Enter')) {
      return activeKeys.has('Enter') || activeKeys.has('EnterTop') || activeKeys.has('EnterBottom');
    }
    return activeKeys.has(code);
  };

  // Helper to determine if a key is the target (handles Enter split)
  const checkIsTarget = (code: string) => {
    if (code.startsWith('Enter')) {
      return targetKeyCode === 'Enter' || targetKeyCode === 'EnterTop' || targetKeyCode === 'EnterBottom';
    }
    return targetKeyCode === code;
  };

  // Nails layout for hands guidance visualization
  const leftFingers: { finger: FingerType; name: string }[] = [
    { finger: 'leftPinky', name: 'Pinky' },
    { finger: 'leftRing', name: 'Ring' },
    { finger: 'leftMiddle', name: 'Middle' },
    { finger: 'leftIndex', name: 'Index' },
    { finger: 'thumb', name: 'Thumb' },
  ];

  const rightFingers: { finger: FingerType; name: string }[] = [
    { finger: 'thumb', name: 'Thumb' },
    { finger: 'rightIndex', name: 'Index' },
    { finger: 'rightMiddle', name: 'Middle' },
    { finger: 'rightRing', name: 'Ring' },
    { finger: 'rightPinky', name: 'Pinky' },
  ];

  return (
    <div className="glass-panel p-6 rounded-3xl border-slate-800/80 flex flex-col items-center gap-6 w-full max-w-4xl mx-auto shadow-2xl relative">
      {/* Dynamic Keyboard container with 60-grid columns */}
      <div className="flex flex-col gap-1.5 w-full bg-slate-950/80 p-4 rounded-2xl border border-slate-900 shadow-inner">
        {rows.map((rowKeys, rowIndex) => (
          <div
            key={rowIndex}
            className="grid grid-cols-60 gap-1 md:gap-1.5 w-full"
          >
            {rowKeys.map((keyConfig, idx) => (
              <Key
                key={`${keyConfig.code}-${idx}`}
                config={keyConfig}
                isPressed={checkIsPressed(keyConfig.code)}
                isTarget={checkIsTarget(keyConfig.code)}
              />
            ))}
          </div>
        ))}
      </div>

      {/* SVG Hands Placement Guide */}
      <div className="flex items-center justify-between w-full max-w-lg border-t border-slate-900 pt-4 px-4">
        {/* Left Hand Indicator */}
        <div className="flex items-center gap-3">
          <span className="text-[10px] text-slate-500 uppercase tracking-widest font-semibold">
            Left Hand
          </span>
          <div className="flex gap-1.5 bg-slate-900/60 p-1.5 rounded-xl border border-slate-900">
            {leftFingers.map((f) => {
              const active = targetFinger === f.finger;
              const color = getFingerColorScheme(f.finger);
              return (
                <div
                  key={f.finger}
                  title={f.name}
                  className={`w-6 h-6 rounded-full border transition-all duration-300 flex items-center justify-center text-[9px] font-bold
                    ${
                      active
                        ? `${color.bg} ${color.border} ${color.text} ${color.glow} scale-110`
                        : 'border-slate-800 bg-slate-950 text-slate-600'
                    }
                  `}
                >
                  {f.name[0]}
                </div>
              );
            })}
          </div>
        </div>

        {/* Spacebar or Thumbs connector line */}
        <div className="hidden sm:block text-slate-700 text-xs">●</div>

        {/* Right Hand Indicator */}
        <div className="flex items-center gap-3">
          <div className="flex gap-1.5 bg-slate-900/60 p-1.5 rounded-xl border border-slate-900">
            {rightFingers.map((f) => {
              const active = targetFinger === f.finger;
              const color = getFingerColorScheme(f.finger);
              return (
                <div
                  key={f.finger}
                  title={f.name}
                  className={`w-6 h-6 rounded-full border transition-all duration-300 flex items-center justify-center text-[9px] font-bold
                    ${
                      active
                        ? `${color.bg} ${color.border} ${color.text} ${color.glow} scale-110`
                        : 'border-slate-800 bg-slate-950 text-slate-600'
                    }
                  `}
                >
                  {f.name[0]}
                </div>
              );
            })}
          </div>
          <span className="text-[10px] text-slate-500 uppercase tracking-widest font-semibold">
            Right Hand
          </span>
        </div>
      </div>
    </div>
  );
};
