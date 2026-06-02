/**
 * Calculate typing accuracy percentage.
 * Formula: (correctCharacters / totalTypedCharacters) * 100
 *
 * @param correctChars Count of correctly typed characters
 * @param totalTyped Total keypresses (correct + incorrect)
 * @returns Accuracy percentage rounded to one decimal place
 */
export const calculateAccuracy = (correctChars: number, totalTyped: number): number => {
  if (totalTyped <= 0) return 100;
  const accuracy = (correctChars / totalTyped) * 100;
  // Round to 1 decimal place, cap at 100% and min at 0%
  const rounded = Math.min(100, Math.max(0, Math.round(accuracy * 10) / 10));
  return rounded;
};
