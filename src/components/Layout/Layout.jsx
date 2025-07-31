import React from 'react';
import BackgroundElements from './BackgroundElements';

const Layout = ({ children }) => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white relative overflow-hidden">
      <BackgroundElements />
      <div className="relative z-10">
        {children}
      </div>
    </div>
  );
};

export default Layout;