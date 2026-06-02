import React from 'react';
import { useTyping } from '../hooks/useTyping';
import { useKeyboard } from '../hooks/useKeyboard';
import { StatsDashboard } from '../components/Stats/StatsDashboard';
import { TypingArea } from '../components/TypingArea/TypingArea';
import { FingerGuide } from '../components/FingerGuide/FingerGuide';
import { InteractiveKeyboard } from '../components/Keyboard/InteractiveKeyboard';
import { CompletionModal } from '../components/TypingArea/CompletionModal';

interface TypingTrainerProps {
  // Allow parent App to trigger resets if needed
  onResetRef?: React.MutableRefObject<(() => void) | null>;
}

export const TypingTrainer: React.FC<TypingTrainerProps> = ({ onResetRef }) => {
  const {
    charItems,
    currentIndex,
    stats,
    isCompleted,
    targetChar,
    targetKeyCode,
    targetFinger,
    resetTrainer,
  } = useTyping();

  const { activeKeys } = useKeyboard();

  // Expose the reset function to the ref if provided
  if (onResetRef) {
    onResetRef.current = resetTrainer;
  }

  return (
    <div className="flex flex-col gap-6 max-w-4xl mx-auto w-full items-stretch">
      {/* Live Stats */}
      <StatsDashboard stats={stats} />

      {/* Typing Display Block */}
      <TypingArea charItems={charItems} currentIndex={currentIndex} />

      {/* Guidance and Visual Keyboard */}
      <div className="flex flex-col gap-6">
        <FingerGuide targetFinger={targetFinger} targetChar={targetChar} />
        
        <InteractiveKeyboard
          activeKeys={activeKeys}
          targetKeyCode={targetKeyCode}
          targetFinger={targetFinger}
        />
      </div>

      {/* Completion congratulations modal */}
      <CompletionModal
        isOpen={isCompleted}
        stats={stats}
        onRestart={resetTrainer}
      />
    </div>
  );
};
export default TypingTrainer;
