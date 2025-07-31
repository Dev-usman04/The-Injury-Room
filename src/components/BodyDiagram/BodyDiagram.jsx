// src/components/BodyDiagram/BodyDiagram.jsx
import React from 'react';
import { injuryData } from '../../data/injuryData';
import { getBodyPartPositions } from '../../utils/helpers';

const BodyDiagram = ({ selectedBodyPart, onBodyPartClick }) => {
  const positions = getBodyPartPositions();

  return (
    <div className="bg-white/10 backdrop-blur-lg rounded-3xl p-8 border border-white/20">
      <h3 className="text-2xl font-bold mb-6 text-center">Click on Body Parts to Explore</h3>
      <div className="flex justify-center">
        <svg
          viewBox="0 0 300 500"
          className="w-full max-w-sm h-auto cursor-pointer"
          style={{ filter: 'drop-shadow(0 0 20px rgba(147, 51, 234, 0.3))' }}
        >
          {/* Body outline */}
          <path 
            d="M150 50 L130 70 L130 120 L120 150 L120 200 L110 250 L110 350 L120 400 L140 450 L160 450 L180 400 L190 350 L190 250 L180 200 L180 150 L170 120 L170 70 Z" 
            fill="rgba(255,255,255,0.1)" 
            stroke="rgba(255,255,255,0.3)" 
            strokeWidth="2"
          />
          
          {/* Head */}
          <circle
            cx="150"
            cy="40"
            r="25"
            fill={selectedBodyPart === 'head' ? '#8b5cf6' : 'rgba(147, 51, 234, 0.6)'}
            stroke="white"
            strokeWidth="2"
            className="hover:fill-purple-400 transition-all duration-300 animate-pulse-slow"
            onClick={() => onBodyPartClick('head')}
          />
          
          {/* Shoulders */}
          <ellipse
            cx="120"
            cy="85"
            rx="20"
            ry="15"
            fill={selectedBodyPart === 'shoulder' ? '#8b5cf6' : 'rgba(59, 130, 246, 0.6)'}
            stroke="white"
            strokeWidth="2"
            className="hover:fill-blue-400 transition-all duration-300 animate-pulse-slow"
            onClick={() => onBodyPartClick('shoulder')}
          />
          <ellipse
            cx="180"
            cy="85"
            rx="20"
            ry="15"
            fill={selectedBodyPart === 'shoulder' ? '#8b5cf6' : 'rgba(59, 130, 246, 0.6)'}
            stroke="white"
            strokeWidth="2"
            className="hover:fill-blue-400 transition-all duration-300 animate-pulse-slow"
            onClick={() => onBodyPartClick('shoulder')}
          />
          
          {/* Lower Back */}
          <ellipse
            cx="150"
            cy="200"
            rx="25"
            ry="20"
            fill={selectedBodyPart === 'back' ? '#8b5cf6' : 'rgba(16, 185, 129, 0.6)'}
            stroke="white"
            strokeWidth="2"
            className="hover:fill-emerald-400 transition-all duration-300 animate-pulse-slow"
            onClick={() => onBodyPartClick('back')}
          />
          
          {/* Knees */}
          <circle
            cx="130"
            cy="320"
            r="18"
            fill={selectedBodyPart === 'knee' ? '#8b5cf6' : 'rgba(239, 68, 68, 0.6)'}
            stroke="white"
            strokeWidth="2"
            className="hover:fill-red-400 transition-all duration-300 animate-pulse-slow"
            onClick={() => onBodyPartClick('knee')}
          />
          <circle
            cx="170"
            cy="320"
            r="18"
            fill={selectedBodyPart === 'knee' ? '#8b5cf6' : 'rgba(239, 68, 68, 0.6)'}
            stroke="white"
            strokeWidth="2"
            className="hover:fill-red-400 transition-all duration-300 animate-pulse-slow"
            onClick={() => onBodyPartClick('knee')}
          />
          
          {/* Ankles */}
          <ellipse
            cx="130"
            cy="420"
            rx="12"
            ry="8"
            fill={selectedBodyPart === 'ankle' ? '#8b5cf6' : 'rgba(245, 158, 11, 0.6)'}
            stroke="white"
            strokeWidth="2"
            className="hover:fill-amber-400 transition-all duration-300 animate-pulse-slow"
            onClick={() => onBodyPartClick('ankle')}
          />
          <ellipse
            cx="170"
            cy="420"
            rx="12"
            ry="8"
            fill={selectedBodyPart === 'ankle' ? '#8b5cf6' : 'rgba(245, 158, 11, 0.6)'}
            stroke="white"
            strokeWidth="2"
            className="hover:fill-amber-400 transition-all duration-300 animate-pulse-slow"
            onClick={() => onBodyPartClick('ankle')}
          />

          {/* Injury indicators */}
          {Object.entries(injuryData).map(([bodyPart, data], index) => {
            const pos = positions[bodyPart];
            if (!pos) return null;
            
            return (
              <g key={bodyPart}>
                <circle
                  cx={pos.x}
                  cy={pos.y}
                  r="6"
                  fill="#ef4444"
                  className="animate-ping"
                  style={{ animationDelay: `${index * 500}ms` }}
                />
                <circle
                  cx={pos.x}
                  cy={pos.y}
                  r="4"
                  fill="#fecaca"
                />
                <text
                  x={pos.x + 10}
                  y={pos.y + 4}
                  fill="white"
                  fontSize="10"
                  className="font-medium"
                >
                  {data.injuries.length}
                </text>
              </g>
            );
          })}
        </svg>
      </div>
    </div>
  );
};

export default BodyDiagram;