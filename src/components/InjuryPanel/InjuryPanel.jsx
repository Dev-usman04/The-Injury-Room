// src/components/InjuryPanel/InjuryPanel.jsx
import React from 'react';
import { X } from 'lucide-react';
import { injuryData } from '../../data/injuryData';
import { filterInjuriesBySport } from '../../utils/helpers';
import InjuryCard from './InjuryCard';
import EmptyState from './EmptyState';

const InjuryPanel = ({ 
  selectedBodyPart, 
  selectedSport, 
  animationKey, 
  onClose, 
  onBodyPartClick 
}) => {
  if (!selectedBodyPart) {
    return <EmptyState onBodyPartClick={onBodyPartClick} />;
  }

  const bodyPartData = injuryData[selectedBodyPart];
  const filteredInjuries = filterInjuriesBySport(bodyPartData.injuries, selectedSport);

  return (
    <div 
      key={animationKey} 
      className="bg-white/10 backdrop-blur-lg rounded-3xl p-8 border border-white/20 animate-slide-in-right"
    >
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-2xl font-bold text-white">
          {bodyPartData.name} Injuries
        </h3>
        <button
          onClick={onClose}
          className="p-2 hover:bg-white/20 rounded-xl transition-colors"
        >
          <X className="w-6 h-6" />
        </button>
      </div>

      <div className="space-y-6">
        {filteredInjuries.length > 0 ? (
          filteredInjuries.map((injury, index) => (
            <InjuryCard key={index} injury={injury} index={index} />
          ))
        ) : (
          <EmptyState showNoResults={true} />
        )}
      </div>
    </div>
  );
};

export default InjuryPanel;