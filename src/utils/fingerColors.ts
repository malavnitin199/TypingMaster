import { FingerType } from '../types';

export interface ColorScheme {
  border: string;
  bg: string;
  text: string;
  activeBg: string;
  shadow: string;
  glow: string;
  name: string;
}

export const fingerColorSchemes: Record<FingerType, ColorScheme> = {
  leftPinky: {
    border: 'border-red-500/40',
    bg: 'bg-red-500/10',
    text: 'text-red-400',
    activeBg: 'bg-red-500! text-slate-950! font-bold',
    shadow: 'shadow-red-500/25',
    glow: 'shadow-[0_0_15px_rgba(239,68,68,0.6)] border-red-500!',
    name: 'Left Pinky'
  },
  leftRing: {
    border: 'border-orange-500/40',
    bg: 'bg-orange-500/10',
    text: 'text-orange-400',
    activeBg: 'bg-orange-500! text-slate-950! font-bold',
    shadow: 'shadow-orange-500/25',
    glow: 'shadow-[0_0_15px_rgba(249,115,22,0.6)] border-orange-500!',
    name: 'Left Ring'
  },
  leftMiddle: {
    border: 'border-green-500/40',
    bg: 'bg-green-500/10',
    text: 'text-green-400',
    activeBg: 'bg-green-500! text-slate-950! font-bold',
    shadow: 'shadow-green-500/25',
    glow: 'shadow-[0_0_15px_rgba(34,197,94,0.6)] border-green-500!',
    name: 'Left Middle'
  },
  leftIndex: {
    border: 'border-cyan-500/40',
    bg: 'bg-cyan-500/10',
    text: 'text-cyan-400',
    activeBg: 'bg-cyan-500! text-slate-950! font-bold',
    shadow: 'shadow-cyan-500/25',
    glow: 'shadow-[0_0_15px_rgba(6,182,212,0.6)] border-cyan-500!',
    name: 'Left Index'
  },
  thumb: {
    border: 'border-slate-500/40',
    bg: 'bg-slate-500/10',
    text: 'text-slate-400',
    activeBg: 'bg-slate-400! text-slate-950! font-bold',
    shadow: 'shadow-slate-500/25',
    glow: 'shadow-[0_0_15px_rgba(148,163,184,0.6)] border-slate-400!',
    name: 'Thumb'
  },
  rightIndex: {
    border: 'border-indigo-500/40',
    bg: 'bg-indigo-500/10',
    text: 'text-indigo-400',
    activeBg: 'bg-indigo-500! text-slate-950! font-bold',
    shadow: 'shadow-indigo-500/25',
    glow: 'shadow-[0_0_15px_rgba(99,102,241,0.6)] border-indigo-500!',
    name: 'Right Index'
  },
  rightMiddle: {
    border: 'border-blue-500/40',
    bg: 'bg-blue-500/10',
    text: 'text-blue-400',
    activeBg: 'bg-blue-500! text-slate-950! font-bold',
    shadow: 'shadow-blue-500/25',
    glow: 'shadow-[0_0_15px_rgba(59,130,246,0.6)] border-blue-500!',
    name: 'Right Middle'
  },
  rightRing: {
    border: 'border-yellow-500/40',
    bg: 'bg-yellow-500/10',
    text: 'text-yellow-400',
    activeBg: 'bg-yellow-500! text-slate-950! font-bold',
    shadow: 'shadow-yellow-500/25',
    glow: 'shadow-[0_0_15px_rgba(234,179,8,0.6)] border-yellow-500!',
    name: 'Right Ring'
  },
  rightPinky: {
    border: 'border-lime-500/40',
    bg: 'bg-lime-500/10',
    text: 'text-lime-400',
    activeBg: 'bg-lime-500! text-slate-950! font-bold',
    shadow: 'shadow-lime-500/25',
    glow: 'shadow-[0_0_15px_rgba(132,204,22,0.6)] border-lime-500!',
    name: 'Right Pinky'
  },
  neutral: {
    border: 'border-slate-800',
    bg: 'bg-slate-900/40',
    text: 'text-slate-400',
    activeBg: 'bg-slate-700! text-slate-100!',
    shadow: 'shadow-slate-500/5',
    glow: 'shadow-[0_0_10px_rgba(255,255,255,0.2)] border-slate-600!',
    name: 'Neutral'
  }
};

export const getFingerColorScheme = (finger: FingerType): ColorScheme => {
  return fingerColorSchemes[finger] || fingerColorSchemes.neutral;
};
