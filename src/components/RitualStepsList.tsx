import React from 'react';
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
  return (
    <div className="ritual-steps-container">
      <ol className="ritual-steps-list">
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
              <p className="step-instruction">{step.instruction}</p>
            </li>
          );
        })}
      </ol>
    </div>
  );
};

export default RitualStepsList;
