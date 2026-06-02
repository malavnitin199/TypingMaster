import { useRef } from 'react';
import { MainLayout } from './components/Layout/MainLayout';
import { TypingTrainer } from './pages/TypingTrainer';
import './App.css';

function App() {
  const resetRef = useRef<(() => void) | null>(null);

  const handleReset = () => {
    if (resetRef.current) {
      resetRef.current();
    }
  };

  return (
    <MainLayout onReset={handleReset}>
      <TypingTrainer onResetRef={resetRef} />
    </MainLayout>
  );
}

export default App;
