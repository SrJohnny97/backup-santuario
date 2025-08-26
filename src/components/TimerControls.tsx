import '../styles/TimerControls.css';

interface TimerControlsProps {
  isActive: boolean;
  isPaused: boolean;
  start: () => void;
  pause: () => void;
  resume: () => void;
  restart: () => void;
  skipStep: () => void;
}

const TimerControls = ({ isActive, isPaused, start, pause, resume, restart, skipStep }: TimerControlsProps) => {
  return (
    <div className="main-controls">
      {!isActive ? (
        <button onClick={start} className="start-btn">COMENZAR</button>
      ) : (
        <div className="active-controls">
          <button onClick={restart} className="control-btn icon-btn" aria-label="Reiniciar ritual">
            ⟳
          </button>
          <button onClick={isPaused ? resume : pause} className="control-btn main-action">
            {isPaused ? 'REANUDAR' : 'PAUSAR'}
          </button>
          <button onClick={skipStep} className="control-btn icon-btn" aria-label="Saltar paso">
            ⏭
          </button>
        </div>
      )}
    </div>
  );
};

export default TimerControls;
