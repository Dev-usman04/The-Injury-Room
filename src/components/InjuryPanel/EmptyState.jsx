// src/components/InjuryPanel/EmptyState.jsx
import React from 'react';
import { Target, BookOpen } from 'lucide-react';
import { injuryData } from '../../data/injuryData';

const EmptyState = ({ onBodyPartClick, showNoResults = false }) => {
  if (showNoResults) {
    return (
      <div className="text-center py-12 text-purple-200">
        <BookOpen className="w-16 h-16 mx-auto mb-4 opacity-50" />
        <p>No injuries found for the selected sport in this body region.</p>
        <p className="text-sm mt-2">Try selecting a different sport or body part.</p>
      </div>
    );
  }

  return (
    <div className="bg-white/10 backdrop-blur-lg rounded-3xl p-8 border border-white/20 text-center">
      <div className="mb-6">
        <Target className="w-16 h-16 mx-auto text-purple-400 mb-4" />
        <h3 className="text-2xl font-bold text-white mb-4">Select a Body Part</h3>
        <p className="text-purple-200">
          Click on any highlighted body part in the diagram to explore common injuries, 
          prevention strategies, and recovery information.
        </p>
      </div>
      
      <div className="grid grid-cols-2 gap-4 mt-8">
        {Object.entries(injuryData).map(([bodyPart, data]) => (
          <button
            key={bodyPart}
            onClick={() => onBodyPartClick(bodyPart)}
            className="p-4 bg-white/5 hover:bg-white/10 rounded-xl border border-white/10 transition-all duration-300 hover:scale-105"
          >
            <div className="text-white font-medium">{data.name}</div>
            <div className="text-purple-200 text-sm">{data.injuries.length} injuries</div>
          </button>
        ))}
      </div>
    </div>
  );
};

export default EmptyState;