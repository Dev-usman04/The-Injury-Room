// src/components/ui/StatsCards.jsx
import React from 'react';
import { Activity, AlertTriangle, Target, TrendingUp } from 'lucide-react';
import { statsData } from '../../data/injuryData';

const iconMap = {
  Activity,
  AlertTriangle,
  Target,
  TrendingUp
};

const StatsCards = ({ showStats }) => {
  if (!showStats) return null;

  return (
    <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8 animate-slide-up">
      {statsData.map((stat, index) => {
        const IconComponent = iconMap[stat.icon];
        
        return (
          <div 
            key={index} 
            className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20 hover:scale-105 transition-all duration-300 animate-bounce-in" 
            style={{ animationDelay: `${index * 200}ms` }}
          >
            <div className={`inline-flex items-center justify-center w-12 h-12 bg-gradient-to-r ${stat.color} rounded-xl mb-3`}>
              <IconComponent className="w-6 h-6 text-white" />
            </div>
            <div>
              <div className="text-2xl font-bold text-white">{stat.value}</div>
              <div className="text-purple-200">{stat.label}</div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default StatsCards;