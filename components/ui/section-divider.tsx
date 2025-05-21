import React from 'react';

interface SectionDividerProps {
  className?: string;
}

const SectionDivider: React.FC<SectionDividerProps> = ({ className = '' }) => {
  return (
    <div className={`w-full h-4 bg-gradient-to-r from-amber-300 via-teal-400 to-amber-300 ${className}`}>
      <div className="h-full w-full opacity-80 bg-gradient-to-b from-transparent to-white/30"></div>
    </div>
  );
};

export default SectionDivider;
