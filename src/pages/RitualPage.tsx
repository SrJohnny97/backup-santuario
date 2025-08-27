import { useParams } from 'react-router-dom';
import { useRef, useState, useEffect } from 'react'; // Import useEffect
import type { Ritual } from '../types';
import { useRitualTimer } from '../hooks/useRitualTimer';
import Orbe from '../components/Orbe';
import TimerControls from '../components/TimerControls';
import VolumeControl from '../components/VolumeControl';
import VideoBackground from '../components/VideoBackground';
import RitualStepsList from '../components/RitualStepsList';
import FocusModeToggle from '../components/FocusModeToggle';
import '../styles/RitualPage.css';

interface RitualPageProps {
  rituals: Ritual[];
}

const RitualPage = ({ rituals }: RitualPageProps) => {
  const { slug } = useParams<{ slug: string }>();
  const ritual = rituals.find((r) => r.slug === slug);

  const [isFocusMode, setIsFocusMode] = useState(false);
  const toggleFocusMode = () => setIsFocusMode(!isFocusMode);

  // Add a class to the body when this page is active
  useEffect(() => {
    document.body.classList.add('ritual-page-active');
    // Cleanup function to remove the class when the component unmounts
    return () => {
      document.body.classList.remove('ritual-page-active');
    };
  }, []); // Empty dependency array means this effect runs only once on mount

  // Create refs for the audio elements
  const backgroundAudioRef = useRef<HTMLAudioElement>(null);
  const notificationAudioRef = useRef<HTMLAudioElement>(null);

  const { 
    currentStep, 
    timeLeft, 
    isActive, 
    isPaused, 
    isFinished, 
    volume,
    start, 
    pause, 
    resume, 
    restart, 
    skipStep,
    changeVolume,
    formattedTime,
    totalDuration
  } = useRitualTimer(ritual?.steps || [], {
    backgroundAudioRef: backgroundAudioRef as React.RefObject<HTMLAudioElement>,
    notificationAudioRef: notificationAudioRef as React.RefObject<HTMLAudioElement>,
  });

  if (!ritual) {
    return (
      <div className="ritual-not-found">
        <h1>Ritual no encontrado</h1>
        <p>El ritual que buscas no existe o ha sido movido.</p>
      </div>
    );
  }

  const progress = totalDuration > 0 ? ((totalDuration - timeLeft) / totalDuration) * 100 : 0;
  const stepName = isFinished ? "Ritual Completado" : (isActive ? currentStep.name : "Listo para comenzar");

  return (
    <>
      <VideoBackground videoSrc={ritual.videoFondo} />
      <div className={`santuario-container ${isFocusMode ? 'focus-mode-active' : ''} ${isFinished ? 'ritual-finished' : ''}`}>
        {isFinished && <div className="completion-ripple"></div>} {/* New ripple element */}
        <FocusModeToggle isFocusMode={isFocusMode} onToggle={toggleFocusMode} />
        {/* Hidden Audio Players */}
        <audio ref={backgroundAudioRef} src={ritual.audioAmbiente} loop preload="auto" />
        <audio ref={notificationAudioRef} src="https://pub-7dd386e270924cc58cbf4575f4c336d0.r2.dev/notificacion.mp3" preload="auto" />

        <div className="guion-container">
          <h1>{ritual.title}</h1>
          <p className="ritual-description">{ritual.description}</p>

          <RitualStepsList 
            steps={ritual.steps}
            currentStepName={currentStep?.name || ''}
            isActive={isActive}
          />

          
        </div>
        <div className="altar-container">
          <Orbe 
            formattedTime={formattedTime}
            stepName={stepName}
            isPulsing={isActive && !isPaused}
            progress={progress}
          />
          <TimerControls 
            isActive={isActive}
            isPaused={isPaused}
            start={start}
            pause={pause}
            resume={resume}
            restart={restart}
            skipStep={skipStep}
          />
          <VolumeControl 
            volume={volume}
            onVolumeChange={changeVolume}
          />
        </div>
      </div>
    </>
  );
};

export default RitualPage;
