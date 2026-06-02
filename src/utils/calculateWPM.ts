/**
 * Calculate typing speed in Words Per Minute (WPM).
 * Formula: (correctCharacters / 5) / elapsedMinutes
 *
 * @param correctChars Count of correctly typed characters
 * @param timeElapsedSeconds Elapsed time in seconds
 * @returns Rounded WPM value
 */
export const calculateWPM = (correctChars: number, timeElapsedSeconds: number): number => {
  if (timeElapsedSeconds <= 0 || correctChars <= 0) return 0;
  const elapsedMinutes = timeElapsedSeconds / 60;
  const wpm = (correctChars / 5) / elapsedMinutes;
  return Math.round(wpm);
};
