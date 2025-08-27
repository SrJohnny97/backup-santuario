import { useState } from 'react';
import RitualCard from '../components/RitualCard'; // New import
import type { Ritual } from '../types';
import CosmicCanvas from '../components/CosmicCanvas';
import '../styles/HomePage.css';

interface HomePageProps {
  rituals: Ritual[];
}

const HomePage = ({ rituals }: HomePageProps) => {

  // Assume the last ritual in the array is the newest one
  const newestRitual = rituals.length > 0 ? rituals[rituals.length - 1] : null;
  const otherRituals = rituals.length > 1 ? rituals.slice(0, rituals.length - 1) : [];

  return (
    <>
      <CosmicCanvas />
      <div className="home-container">
        <header className="home-header">
          <h1 className="home-title">Santuario de Rituales</h1>
          <p className="home-description">Elige un ritual para comenzar tu práctica.</p>
        </header>

        {/* Featured Ritual Section */}
        {newestRitual && (
          <section className="featured-section">
            <h2 className="section-title">Ritual de la Semana</h2>
            <RitualCard ritual={newestRitual} isFeatured={true} />
          </section>
        )}

        {/* Library Section */}
        {otherRituals.length > 0 && (
          <section className="library-section">
            <h2 className="section-title">Tu Biblioteca de Rituales</h2>
            <div className="ritual-grid">
              {otherRituals.map((ritual) => (
                <RitualCard key={ritual.slug} ritual={ritual} isFeatured={false} />
              ))}
            </div>
          </section>
        )}

        {/* Fallback for when there is only one ritual and it's featured */}
        {rituals.length === 1 && otherRituals.length === 0 && (
          <p className="library-fallback-text">Tu biblioteca crecerá cada semana.</p>
        )}

        {rituals.length === 0 && (
          <p>No se encontraron rituales.</p>
        )}
      </div>
    </>
  );
};

export default HomePage;
