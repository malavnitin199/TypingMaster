export const sentences = [
  "The quick brown fox jumps over the lazy dog.",
  "Pack my box with five dozen liquor jugs.",
  "Jackdaws love my big sphinx of quartz.",
  "How vexingly quick daft zebras jump!",
  "Sphinx of black quartz, judge my vow.",
  "Continuous effort, not strength or intelligence, is the key to unlocking our potential.",
  "Success is not final, failure is not fatal: it is the courage to continue that counts.",
  "To be yourself in a world that is constantly trying to make you something else is the greatest accomplishment.",
  "The only way to do great work is to love what you do.",
  "Life is what happens when you're busy making other plans.",
  "Proper finger placement on the home row builds speed and accuracy over time.",
  "Remember to keep your wrists raised slightly and hit every key with the correct finger.",
  "Practice makes perfect when learning touch typing.",
  "All human actions have one or more of these seven causes: chance, nature, compulsion, habit, reason, passion, desire."
];

export const getRandomSentence = (): string => {
  const index = Math.floor(Math.random() * sentences.length);
  return sentences[index];
};
