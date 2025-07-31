import React, { useState, useEffect } from 'react';
import Layout from './components/Layout/Layout';
import Header from './components/ui/Header';
import StatsCards from './components/ui/StatsCards';
import SportFilter from './components/ui/SportFilter';
import BodyDiagram from './components/BodyDiagram/BodyDiagram';
import InjuryPanel from './components/InjuryPanel/InjuryPanel';
import './styles/animations.css';

const App = () => {
  const [selectedBodyPart, setSelectedBodyPart] = useState(null);
  const [selectedSport, setSelectedSport] = useState('all');
  const [animationKey, setAnimationKey] = useState(0);
  const [showStats, setShowStats] = useState(false);

  const handleBodyPartClick = (bodyPart) => {
    setSelectedBodyPart(bodyPart);
    setAnimationKey(prev => prev + 1);
  };

  const handleSportChange = (sport) => {
    setSelectedSport(sport);
  };

  const handleClosePanel = () => {
    setSelectedBodyPart(null);
  };

  useEffect(() => {
    const timer = setTimeout(() => setShowStats(true), 1000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <Layout>
      {/* Header */}
      <header className="pt-8 pb-6">
        <div className="container mx-auto px-6">
          <Header />
          <StatsCards showStats={showStats} />
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-6 pb-12">
        <SportFilter 
          selectedSport={selectedSport} 
          onSportChange={handleSportChange} 
        />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <BodyDiagram 
            selectedBodyPart={selectedBodyPart}
            onBodyPartClick={handleBodyPartClick}
          />

          <InjuryPanel 
            selectedBodyPart={selectedBodyPart}
            selectedSport={selectedSport}
            animationKey={animationKey}
            onClose={handleClosePanel}
            onBodyPartClick={handleBodyPartClick}
          />
        </div>
      </main>
    </Layout>
  );
};

export default App;