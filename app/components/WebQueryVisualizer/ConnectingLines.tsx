import React from 'react';

const ConnectingLines: React.FC = () => {
  return (
    <svg className="absolute inset-0 w-full h-[85%] z-0" viewBox="20 20 500 350" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path 
        d="M180,150 C220,150 240,150 280,200" 
        stroke="#52c4c6" 
        strokeWidth="2" 
        strokeDasharray="6 4"
        className="animate-dash"
      />
      <path 
        d="M280,300 C240,310 220,350 180,350" 
        stroke="#52c4c6" 
        strokeWidth="2" 
        strokeDasharray="6 4"
        className="animate-dash"
      />
    </svg>
  );
};

export default ConnectingLines;