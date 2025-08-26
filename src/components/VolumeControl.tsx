import { Volume2, VolumeX } from 'lucide-react';
import '../styles/VolumeControl.css';

interface VolumeControlProps {
  volume: number;
  onVolumeChange: (newVolume: number) => void;
}

const VolumeControl = ({ volume, onVolumeChange }: VolumeControlProps) => {
  return (
    <div className="volume-control-container">
      <VolumeX size={20} />
      <input 
        type="range" 
        min="0" 
        max="1" 
        step="0.01" 
        value={volume}
        onChange={(e) => onVolumeChange(Number(e.target.value))}
        className="volume-slider"
      />
      <Volume2 size={20} />
    </div>
  );
};

export default VolumeControl;
