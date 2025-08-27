
import { useRef } from 'react';
import { Link } from 'react-router-dom';
import type { Ritual } from '../types';

interface RitualCardProps {
  ritual: Ritual;
  isFeatured: boolean;
}

const RitualCard = ({ ritual, isFeatured }: RitualCardProps) => {
  const cardRef = useRef<HTMLAnchorElement>(null);

  const handleMouseMove = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (!cardRef.current) return;

    const { clientX, clientY } = e;
    const { left, top, width, height } = cardRef.current.getBoundingClientRect();
    const x = clientX - left;
    const y = clientY - top;

    const rotateX = (y / height - 0.5) * -20; // -10 to 10 degrees
    const rotateY = (x / width - 0.5) * 20; // -10 to 10 degrees

    cardRef.current.style.setProperty('--rotateX', `${rotateX}deg`);
    cardRef.current.style.setProperty('--rotateY', `${rotateY}deg`);
    cardRef.current.style.setProperty('--glowX', `${x / width * 100}%`);
    cardRef.current.style.setProperty('--glowY', `${y / height * 100}%`);
  };

  const handleMouseLeave = () => {
    if (!cardRef.current) return;
    cardRef.current.style.setProperty('--rotateX', '0deg');
    cardRef.current.style.setProperty('--rotateY', '0deg');
  };

  const cardClassName = isFeatured
    ? "ritual-card featured-ritual-card"
    : "ritual-card";

  return (
    <Link
      ref={cardRef}
      to={`/ritual/${ritual.slug}`}
      className={cardClassName}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      <h3 className="ritual-card-title">{ritual.title}</h3>
      <p className="ritual-card-description">{ritual.description}</p>
    </Link>
  );
};

export default RitualCard;
