import { useState, useEffect, useRef, useCallback } from 'react';
import type { RitualStep } from '../types';

// We pass the audio refs to the hook to control them
interface AudioControls {
  backgroundAudioRef: React.RefObject<HTMLAudioElement>;
  notificationAudioRef: React.RefObject<HTMLAudioElement>;
}

export const useRitualTimer = (steps: RitualStep[], { backgroundAudioRef, notificationAudioRef }: AudioControls) => {
  const [currentStepIndex, setCurrentStepIndex] = useState(0);
  const [timeLeft, setTimeLeft] = useState(steps[0]?.duration || 0);
  const [isActive, setIsActive] = useState(false);
  const [isPaused, setIsPaused] = useState(false);
  const [isFinished, setIsFinished] = useState(false);
  const [volume, setVolume] = useState(0.5); // Default volume 50%

  const timerRef = useRef<number | null>(null);

  const playNotification = useCallback(() => {
    if (notificationAudioRef.current) {
      notificationAudioRef.current.currentTime = 0;
      notificationAudioRef.current.play();
    }
  }, [notificationAudioRef]);

  useEffect(() => {
    if (isActive && !isPaused) {
      timerRef.current = setInterval(() => {
        setTimeLeft((prevTime) => {
          if (prevTime > 1) {
            return prevTime - 1;
          } else {
            playNotification(); // Play sound on transition
            if (currentStepIndex < steps.length - 1) {
              setCurrentStepIndex(currentStepIndex + 1);
              return steps[currentStepIndex + 1].duration;
            } else {
              setIsActive(false);
              setIsFinished(true);
              backgroundAudioRef.current?.pause();
              return 0;
            }
          }
        });
      }, 1000);
    } else {
      if (timerRef.current) clearInterval(timerRef.current);
    }

    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [isActive, isPaused, currentStepIndex, steps, backgroundAudioRef, playNotification]);

  const start = () => {
    setCurrentStepIndex(0);
    setTimeLeft(steps[0].duration);
    setIsActive(true);
    setIsPaused(false);
    setIsFinished(false);
    backgroundAudioRef.current?.play();
  };

  const pause = () => {
    setIsPaused(true);
    backgroundAudioRef.current?.pause();
  };

  const resume = () => {
    setIsPaused(false);
    backgroundAudioRef.current?.play();
  };

  const restart = () => {
    if (backgroundAudioRef.current) {
      backgroundAudioRef.current.pause();
      backgroundAudioRef.current.currentTime = 0;
    }
    setIsActive(false);
    setIsPaused(false);
    setIsFinished(false);
    setCurrentStepIndex(0);
    setTimeLeft(steps[0]?.duration || 0);
  };

  const skipStep = () => {
    // Only allow skipping if the ritual is active and not on the last step
    if (isActive && currentStepIndex < steps.length - 1) {
      playNotification();
      setCurrentStepIndex(currentStepIndex + 1);
      setTimeLeft(steps[currentStepIndex + 1].duration);
    } else if (isActive && currentStepIndex === steps.length - 1) {
      // If it's the last step, skipping will finish the ritual
      playNotification();
      setIsActive(false);
      setIsFinished(true);
      if (backgroundAudioRef.current) {
        backgroundAudioRef.current.pause();
      }
      setTimeLeft(0);
    }
  };

  const changeVolume = (newVolume: number) => {
    setVolume(newVolume);
    if (backgroundAudioRef.current) {
      backgroundAudioRef.current.volume = newVolume;
    }
    if (notificationAudioRef.current) {
      notificationAudioRef.current.volume = newVolume;
    }
  };

  const formatTime = (seconds: number): string => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${String(minutes).padStart(2, '0')}:${String(remainingSeconds).padStart(2, '0')}`;
  };

  return {
    currentStep: steps[currentStepIndex],
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
    formattedTime: formatTime(timeLeft),
    totalDuration: steps[currentStepIndex]?.duration || 0,
  };
};
