import React from 'react';
import { Shield } from 'lucide-react';

const Header = () => {
  return (
    <div className="text-center mb-8">
      <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-2xl mb-4 animate-pulse">
        <Shield className="w-8 h-8 text-white" />
      </div>
      <h1 className="text-5xl font-bold bg-gradient-to-r from-white to-purple-300 bg-clip-text text-transparent mb-4 animate-fade-in">
        Sports Injury Prevention Guide
      </h1>
      <p className="text-xl text-purple-200 max-w-2xl mx-auto animate-fade-in-delay">
        Interactive body diagram to explore common sports injuries, prevention techniques, and recovery strategies
      </p>
    </div>
  );
};

export default Header;