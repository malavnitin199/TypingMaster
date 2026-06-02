# TypingMaster 🚀

A premium, production‑ready typing trainer built with React, TypeScript, Tailwind CSS, and Framer Motion. It provides an interactive virtual keyboard (UK layout), real‑time typing validation, finger‑placement guidance, live statistics, and a modern glass‑morphic UI.

## Features
- Interactive visual keyboard with finger‑color mapping and animations.
- Real‑time typing validation, per‑character correctness, caret animation.
- Finger placement guidance (color‑coded).
- Live stats: WPM, accuracy, correct/incorrect counts, elapsed time.
- Dark theme, glass‑morphism cards, smooth animations, responsive layout.
- Fully typed with strict TypeScript.
- Modular architecture: reusable hooks, components, utilities, data files.

## Tech Stack
| Layer | Library / Tool |
|------|----------------|
| **Framework** | React 19, Vite 8 |
| **Language** | TypeScript |
| **Styling** | Tailwind CSS v4 (custom glass‑morphism utilities) |
| **Animations** | Framer Motion |
| **Icons** | lucide‑react |
| **State** | Custom hooks (`useTyping`, `useKeyboard`) |
| **Build** | Vite (with `@tailwindcss/vite` plugin) |
| **Source Control** | Git (repo: https://github.com/malavnitin199/TypingMaster) |

## Getting Started
### Prerequisites
- Node.js ≥ 20  
- npm  

### Installation
```bash
git clone https://github.com/malavnitin199/TypingMaster.git
cd TypingMaster
npm install
```

### Development
```bash
npm run dev   # Vite dev server at http://localhost:5173
```

## Project Structure
```
src/
├── components/
│   ├── Keyboard/
│   │   ├── InteractiveKeyboard.tsx
│   │   └── Key.tsx
│   ├── TypingArea/
│   │   ├── TypingArea.tsx
│   │   └── CompletionModal.tsx
│   ├── Stats/
│   │   └── StatsDashboard.tsx
│   ├── FingerGuide/
│   │   └── FingerGuide.tsx
│   └── Layout/
│       └── MainLayout.tsx
├── hooks/
│   ├── useKeyboard.ts
│   └── useTyping.ts
├── data/
│   ├── keyboardConfig.ts
│   └── sentences.ts
├── utils/
│   ├── calculateWPM.ts
│   ├── calculateAccuracy.ts
│   └── fingerColors.ts
├── types/
│   └── index.ts
├── pages/
│   └── TypingTrainer.tsx
├── App.tsx
├── main.tsx
├── index.css
├── vite-env.d.ts
└── tsconfig.json
```

## Scripts
- `npm run dev` – start dev server
- `npm run build` – production build (`dist/`)
- `npm run lint` – (if configured) run ESLint

## Contributing
1. Fork the repo.  
2. Create a feature branch.  
3. Ensure `npm run build` passes.  
4. Open a PR describing your changes.

## License
MIT © 2026 TypingMaster
