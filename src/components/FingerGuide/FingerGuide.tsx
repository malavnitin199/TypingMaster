import React from 'react';
import { FingerType } from '../../types';
import { getFingerColorScheme } from '../../utils/fingerColors';
import { HelpCircle } from 'lucide-react';

interface FingerGuideProps {
  targetFinger: FingerType;
  targetChar: string;
}

const fingerNameMap: Record<FingerType, string> = {
  leftPinky: 'Left Pinky Finger',
  leftRing: 'Left Ring Finger',
  leftMiddle: 'Left Middle Finger',
  leftIndex: 'Left Index Finger',
  thumb: 'Thumb (Left/Right)',
  rightIndex: 'Right Index Finger',
  rightMiddle: 'Right Middle Finger',
  rightRing: 'Right Ring Finger',
  rightPinky: 'Right Pinky Finger',
  neutral: 'Any Finger',
};

export const FingerGuide: React.FC<FingerGuideProps> = ({ targetFinger, targetChar }) => {
  const colorScheme = getFingerColorScheme(targetFinger);
  const friendlyName = fingerNameMap[targetFinger] || 'Any Finger';

  return (
    <div className="glass-panel p-5 rounded-2xl border-slate-800/80 flex items-center justify-between gap-6 transition-all duration-300 hover:border-slate-700/80">
      <div className="flex items-center gap-4">
        <div className="p-3 rounded-xl bg-slate-900/60 border border-slate-800 text-slate-400">
          <HelpCircle className="w-5 h-5 text-cyan-400" />
        </div>
        <div>
          <h4 className="text-xs font-semibold text-slate-500 uppercase tracking-widest mb-1">
            Next Finger Placement
          </h4>
          <p className="text-lg font-bold text-slate-100 flex items-center gap-2">
            Use{' '}
            <span
              className={`px-2.5 py-0.5 rounded-lg border text-sm font-extrabold ${colorScheme.text} ${colorScheme.border} ${colorScheme.bg}`}
            >
              {friendlyName}
            </span>
          </p>
        </div>
      </div>

      <div className="flex items-center gap-3 bg-slate-950/40 px-4 py-2 rounded-xl border border-slate-900">
        <span className="text-xs text-slate-500 font-semibold uppercase tracking-wider">
          Target Key:
        </span>
        <span className="text-2xl font-black font-mono text-cyan-400 bg-slate-900 px-3 py-1 rounded-lg border border-slate-800 shadow-[0_0_10px_rgba(6,182,212,0.15)]">
          {targetChar === ' ' ? 'Space' : targetChar}
        </span>
      </div>
    </div>
  );
};
