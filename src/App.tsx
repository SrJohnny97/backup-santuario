import { useState, useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import type { Ritual } from './types';
import HomePage from './pages/HomePage';
import RitualPage from './pages/RitualPage';

function App() {
  const [rituals, setRituals] = useState<Ritual[]>([]);
  const [loading, setLoading] = useState(true);
  const location = useLocation();

  useEffect(() => {
    // Fetch data from the new location in /public
    fetch('/rituales.json')
      .then(res => {
        if (!res.ok) {
          throw new Error('Network response was not ok');
        }
        return res.json();
      })
      .then((data: Ritual[]) => {
        setRituals(data);
      })
      .catch(err => console.error("Failed to fetch ritual data:", err))
      .finally(() => setLoading(false));
  }, []);

  useEffect(() => {
    // Scroll to top on page change
    window.scrollTo(0, 0);
  }, [location.pathname]);

  if (loading) {
    return (
      <div style={{ textAlign: 'center', fontFamily: 'Lato, sans-serif', color: 'white', fontSize: '1.2rem' }}>
        <h1>Cargando Santuario...</h1>
      </div>
    );
  }

  return (
    <Routes>
      <Route path="/" element={<HomePage rituals={rituals} />} />
      <Route path="/ritual/:slug" element={<RitualPage rituals={rituals} />} />
    </Routes>
  );
}

export default App;
