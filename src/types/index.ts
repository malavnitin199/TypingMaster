export type FingerType =
  | 'leftPinky'
  | 'leftRing'
  | 'leftMiddle'
  | 'leftIndex'
  | 'thumb'
  | 'rightIndex'
  | 'rightMiddle'
  | 'rightRing'
  | 'rightPinky'
  | 'neutral';

export interface KeyConfig {
  key: string;          // Primary key label (e.g. "Q", "Tab")
  shiftKey?: string;    // Label shown when Shift is active (e.g. "!", "@")
  code: string;         // KeyboardEvent.code (e.g. "KeyQ", "Tab")
  finger: FingerType;   // Which finger presses this key
  row: number;          // Row index (0 to 4)
  width: number;        // CSS col-span width multiplier
  colorGroup: string;   // Color group identifier
}

export type CharStatus = 'neutral' | 'correct' | 'incorrect';

export interface CharItem {
  char: string;
  status: CharStatus;
}

export interface StatsType {
  wpm: number;
  accuracy: number;
  correctChars: number;
  incorrectChars: number;
  totalTyped: number;
  timeElapsed: number; // in seconds
}
