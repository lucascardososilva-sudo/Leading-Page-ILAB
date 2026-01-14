import React from 'react';

export const FoxLogo: React.FC<{ className?: string }> = ({ className = "w-12 h-12" }) => {
  return (
    <svg 
      viewBox="0 0 100 100" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      {/* Abstract geometric fox head shape based on description */}
      <path 
        d="M20 25 L10 45 L35 55 L50 85 L65 55 L90 45 L80 25 L50 35 L20 25Z" 
        fill="#f58025" 
        stroke="#1a2b4b" 
        strokeWidth="2"
        strokeLinejoin="round"
      />
      <path 
        d="M35 55 L50 35 L65 55" 
        fill="#ffe8cc" 
      />
      {/* Eyes */}
      <path d="M38 50 L45 52 L38 54 Z" fill="#1a2b4b" />
      <path d="M62 50 L55 52 L62 54 Z" fill="#1a2b4b" />
      {/* Nose */}
      <circle cx="50" cy="85" r="3" fill="#1a2b4b" />
    </svg>
  );
};