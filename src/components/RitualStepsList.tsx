import React, { useEffect, useRef } from 'react';
import { Clock } from 'lucide-react'; // Import a premium icon
import type { RitualStep } from '../types';
import '../styles/RitualStepsList.css';

interface RitualStepsListProps {
  steps: RitualStep[];
  currentStepName: string;
  isActive: boolean;
}

// Helper to format seconds into MM:SS
const formatDuration = (seconds: number) => {
  const minutes = Math.floor(seconds / 60);
  const remainingSeconds = seconds % 60;
  return `${minutes.toString().padStart(2, '0')}:${remainingSeconds.toString().padStart(2, '0')}`;
};

const RitualStepsList: React.FC<RitualStepsListProps> = ({ steps, currentStepName, isActive }) => {
  const listRef = useRef<HTMLOListElement>(null);

  useEffect(() => {
    const isMobile = window.innerWidth <= 600;
    if (isActive && isMobile && listRef.current) {
      const activeStepElement = listRef.current.querySelector('.active-step');
      if (activeStepElement) {
        activeStepElement.scrollIntoView({
          behavior: 'smooth',
          block: 'center',
        });
      }
    }
  }, [currentStepName, isActive]);

  return (
    <div className="ritual-steps-container">
      <ol className="ritual-steps-list" ref={listRef}>
        {steps.map((step, index) => {
          const isCurrent = isActive && step.name === currentStepName;
          const stepClasses = `ritual-step-item ${isCurrent ? 'active-step' : ''}`;

          return (
            <li key={index} className={stepClasses}>
              <div className="step-header">
                <span className="step-number">{index + 1}</span>
                <h4 className="step-name">{step.name}</h4>
                <div className="step-duration-container">
                  <Clock size={16} className="step-duration-icon" />
                  <span className="step-duration">{formatDuration(step.duration)}</span>
                </div>
              </div>
              <div className="step-instruction">
                {step.instruction.split('\n').map((line, i) => (
                  line.trim() && <p key={i}>{line}</p>
                ))}
              </div>
            </li>
          );
        })}
      </ol>
    </div>
  );
};

export default RitualStepsList;
