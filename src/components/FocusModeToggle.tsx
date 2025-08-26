import React from 'react';
import { Maximize, Minimize } from 'lucide-react';
import '../styles/FocusModeToggle.css';

interface FocusModeToggleProps {
  isFocusMode: boolean;
  onToggle: () => void;
}

const FocusModeToggle: React.FC<FocusModeToggleProps> = ({ isFocusMode, onToggle }) => {
  return (
    <button onClick={onToggle} className="focus-mode-toggle" title={isFocusMode ? 'Mostrar descripción' : 'Modo Enfoque'}>
      {isFocusMode ? <Maximize size={24} /> : <Minimize size={24} />}
    </button>
  );
};

export default FocusModeToggle;
