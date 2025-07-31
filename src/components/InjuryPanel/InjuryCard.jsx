import React from 'react';
import { AlertTriangle, Info, Shield, Clock } from 'lucide-react';
import { getSeverityColor } from '../../utils/helpers';

const InjuryCard = ({ injury, index }) => {
  return (
    <div 
      className="bg-white/5 rounded-2xl p-6 border border-white/10 hover:bg-white/10 transition-all duration-300 animate-fade-in" 
      style={{ animationDelay: `${index * 200}ms` }}
    >
      <div className="flex items-start justify-between mb-4">
        <div>
          <h4 className="text-xl font-semibold text-white mb-2">{injury.name}</h4>
          <div className="flex items-center space-x-4">
            <span className={`px-3 py-1 rounded-full text-sm font-medium ${getSeverityColor(injury.severity)}`}>
              {injury.severity.charAt(0).toUpperCase() + injury.severity.slice(1)} Risk
            </span>
            <span className="text-purple-200 text-sm">
              {injury.frequency}% frequency
            </span>
          </div>
        </div>
        <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-500 rounded-xl flex items-center justify-center">
          <AlertTriangle className="w-8 h-8 text-white" />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <h5 className="font-semibold text-purple-200 mb-2 flex items-center">
            <Info className="w-4 h-4 mr-2" />
            Symptoms
          </h5>
          <ul className="space-y-1">
            {injury.symptoms.map((symptom, idx) => (
              <li key={idx} className="text-gray-300 text-sm flex items-center">
                <span className="w-1.5 h-1.5 bg-purple-400 rounded-full mr-2"></span>
                {symptom}
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h5 className="font-semibold text-green-200 mb-2 flex items-center">
            <Shield className="w-4 h-4 mr-2" />
            Prevention
          </h5>
          <ul className="space-y-1">
            {injury.prevention.map((tip, idx) => (
              <li key={idx} className="text-gray-300 text-sm flex items-center">
                <span className="w-1.5 h-1.5 bg-green-400 rounded-full mr-2"></span>
                {tip}
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="mt-4 pt-4 border-t border-white/10">
        <div className="flex items-center justify-between">
          <div>
            <span className="text-blue-200 font-medium flex items-center">
              <Clock className="w-4 h-4 mr-2" />
              Recovery Time
            </span>
            <span className="text-gray-300 text-sm">{injury.recovery}</span>
          </div>
          <div className="flex space-x-2">
            {injury.sports.slice(0, 3).map((sport, idx) => (
              <span key={idx} className="px-2 py-1 bg-purple-500/30 rounded-lg text-xs text-purple-200">
                {sport}
              </span>
            ))}
            {injury.sports.length > 3 && (
              <span className="px-2 py-1 bg-purple-500/30 rounded-lg text-xs text-purple-200">
                +{injury.sports.length - 3}
              </span>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default InjuryCard;