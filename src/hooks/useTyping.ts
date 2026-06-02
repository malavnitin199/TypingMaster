import { useState, useEffect, useCallback, useRef } from 'react';
import { CharItem, StatsType, FingerType } from '../types';
import { getRandomSentence } from '../data/sentences';
import { charToKeyCodeMap, keyboardConfig } from '../data/keyboardConfig';
import { calculateWPM } from '../utils/calculateWPM';
import { calculateAccuracy } from '../utils/calculateAccuracy';

export const useTyping = () => {
  const [sentence, setSentence] = useState<string>('');
  const [charItems, setCharItems] = useState<CharItem[]>([]);
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [correctCount, setCorrectCount] = useState<number>(0);
  const [incorrectCount, setIncorrectCount] = useState<number>(0);
  const [totalTyped, setTotalTyped] = useState<number>(0);
  const [startTime, setStartTime] = useState<number | null>(null);
  const [elapsedTime, setElapsedTime] = useState<number>(0);
  const [isCompleted, setIsCompleted] = useState<boolean>(false);

  // References to keep timer accurate and avoid closures issue
  const startTimeRef = useRef<number | null>(null);

  // Initialize or reset typing trainer
  const resetTrainer = useCallback(() => {
    const newSentence = getRandomSentence();
    setSentence(newSentence);
    setCharItems(
      newSentence.split('').map((char) => ({
        char,
        status: 'neutral',
      }))
    );
    setCurrentIndex(0);
    setCorrectCount(0);
    setIncorrectCount(0);
    setTotalTyped(0);
    setStartTime(null);
    startTimeRef.current = null;
    setElapsedTime(0);
    setIsCompleted(false);
  }, []);

  // Initialize with a sentence
  useEffect(() => {
    resetTrainer();
  }, [resetTrainer]);

  // Update timer in real time
  useEffect(() => {
    if (startTime === null || isCompleted) return;

    const interval = setInterval(() => {
      if (startTimeRef.current) {
        setElapsedTime(Math.floor((Date.now() - startTimeRef.current) / 1000));
      }
    }, 100);

    return () => clearInterval(interval);
  }, [startTime, isCompleted]);

  // Handle keyboard event
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (isCompleted) return;

      // Only listen to single characters (letters, numbers, symbols, space)
      if (e.key.length !== 1) return;

      // Start timer on first keypress
      let currentStartTime = startTime;
      if (startTime === null) {
        const now = Date.now();
        setStartTime(now);
        startTimeRef.current = now;
        currentStartTime = now;
      }

      const expectedChar = sentence[currentIndex];
      const typedChar = e.key;

      setTotalTyped((prev) => prev + 1);

      if (typedChar === expectedChar) {
        // Correct key pressed
        setCharItems((prevItems) => {
          const nextItems = [...prevItems];
          nextItems[currentIndex].status = 'correct';
          return nextItems;
        });
        
        const nextIndex = currentIndex + 1;
        setCorrectCount((prev) => prev + 1);
        setCurrentIndex(nextIndex);

        // Check if finished
        if (nextIndex >= sentence.length) {
          setIsCompleted(true);
        }
      } else {
        // Incorrect key pressed
        setCharItems((prevItems) => {
          const nextItems = [...prevItems];
          nextItems[currentIndex].status = 'incorrect';
          return nextItems;
        });
        setIncorrectCount((prev) => prev + 1);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [sentence, currentIndex, startTime, isCompleted]);

  // Calculate live stats
  const wpm = calculateWPM(correctCount, elapsedTime);
  const accuracy = calculateAccuracy(correctCount, totalTyped);

  const stats: StatsType = {
    wpm,
    accuracy,
    correctChars: correctCount,
    incorrectChars: incorrectCount,
    totalTyped,
    timeElapsed: elapsedTime,
  };

  // Determine next expected key details
  const targetChar = currentIndex < sentence.length ? sentence[currentIndex] : '';
  const targetKeyCode = targetChar ? (charToKeyCodeMap[targetChar] || '') : '';
  
  // Find key config for expected key to extract finger
  const targetKeyConfig = targetKeyCode 
    ? keyboardConfig.find((k) => k.code === targetKeyCode) 
    : undefined;
    
  const targetFinger: FingerType = targetKeyConfig ? targetKeyConfig.finger : 'neutral';

  return {
    charItems,
    currentIndex,
    stats,
    isCompleted,
    targetChar,
    targetKeyCode,
    targetFinger,
    resetTrainer,
  };
};
