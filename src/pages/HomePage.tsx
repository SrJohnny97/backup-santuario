import { Link } from 'react-router-dom';
import type { Ritual } from '../types';
import '../styles/HomePage.css';

interface HomePageProps {
  rituals: Ritual[];
}

const HomePage = ({ rituals }: HomePageProps) => {
  return (
    <div className="home-container">
      <h1 className="home-title">Santuario de Rituales</h1>
      <p className="home-description">Elige un ritual para comenzar tu práctica.</p>
      <div className="rituals-list">
        {rituals.length > 0 ? (
          rituals.map((ritual) => (
            <Link key={ritual.slug} to={`/ritual/${ritual.slug}`} className="ritual-card">
              <h2 className="ritual-card-title">{ritual.title}</h2>
              <p className="ritual-card-description">{ritual.description}</p>
            </Link>
          ))
        ) : (
          <p>No se encontraron rituales.</p>
        )}
      </div>
    </div>
  );
};

export default HomePage;
