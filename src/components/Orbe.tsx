interface OrbeProps {
  formattedTime: string;
  stepName: string;
  isPulsing: boolean;
  progress: number;
}

const Orbe = ({ formattedTime, stepName, isPulsing, progress }: OrbeProps) => {
  const progressRingStyle = {
    background: `conic-gradient(var(--color-gold) ${progress}%, transparent ${progress}%)`,
  };

  return (
    <div className="orbe-container">
      <div className="orbe-progress-ring" style={progressRingStyle}></div>
      <div className={`orbe ${isPulsing ? 'pulsing' : ''}`}>
        <div className="orbe-timer">{formattedTime}</div>
        <div className="orbe-step-name" key={stepName}>{stepName}</div>
      </div>
    </div>
  );
};

export default Orbe;
