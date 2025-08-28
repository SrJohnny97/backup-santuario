
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

  // Estilo en línea para la prueba de depuración
  const cardStyle = {
    background: `
      radial-gradient(ellipse at 10% 20%, rgba(255, 215, 0, 0.05) 0%, transparent 40%),
      radial-gradient(ellipse at 90% 80%, rgba(255, 195, 113, 0.05) 0%, transparent 50%)
    `,
    backgroundColor: 'rgba(18, 18, 24, 0.7)'
  };

  return (
    <Link
      ref={cardRef}
      to={`/ritual/${ritual.slug}`}
      className={cardClassName}
      style={cardStyle}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      <h3 class="ritual-card-title">{ritual.title}</h3>
      <p className="ritual-card-description">{ritual.description}</p>
    </Link>
  );
};

export default RitualCard;
