
import React from 'react';
import '../styles/CosmicPauseButton.css';

interface CosmicPauseButtonProps {
  isPaused: boolean;
  onToggle: () => void;
}

const PauseIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M10 4H6V20H10V4Z" fill="currentColor"/>
    <path d="M18 4H14V20H18V4Z" fill="currentColor"/>
  </svg>
);

const PlayIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M8 5V19L19 12L8 5Z" fill="currentColor"/>
  </svg>
);

const CosmicPauseButton = ({ isPaused, onToggle }: CosmicPauseButtonProps) => {
  return (
    <button 
      onClick={onToggle} 
      className="cosmic-pause-button"
      aria-label={isPaused ? 'Reanudar animación' : 'Pausar animación'}
    >
      {isPaused ? <PlayIcon /> : <PauseIcon />}
    </button>
  );
};

export default CosmicPauseButton;
