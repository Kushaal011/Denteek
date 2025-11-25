import React from 'react';

interface LogoProps {
  className?: string;
  variant?: 'light' | 'dark';
}

const Logo: React.FC<LogoProps> = ({ className = "h-10", variant = 'dark' }) => {
  // 'dark' variant means dark text (for light backgrounds)
  // 'light' variant means light text (for dark backgrounds)
  
  const textColor = variant === 'dark' ? '#0f172a' : '#ffffff';
  const dotColor = '#c4d600'; // Brand Lime

  // Helper for animation classes
  const animClass = "animate-pop-in origin-center opacity-0";

  return (
    <svg viewBox="0 0 240 60" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* Icon: Dotted 'd' with staggered animations */}
      <circle cx="10" cy="35" r="3.5" fill={dotColor} className={animClass} style={{ animationDelay: '0.1s' }} />
      <circle cx="20" cy="35" r="3.5" fill={dotColor} className={animClass} style={{ animationDelay: '0.15s' }} />
      <circle cx="30" cy="35" r="3.5" fill={dotColor} className={animClass} style={{ animationDelay: '0.2s' }} />
      
      <circle cx="10" cy="25" r="3.5" fill={dotColor} className={animClass} style={{ animationDelay: '0.25s' }} />
      <circle cx="30" cy="25" r="3.5" fill={dotColor} className={animClass} style={{ animationDelay: '0.3s' }} />
      
      <circle cx="10" cy="15" r="3.5" fill={dotColor} className={animClass} style={{ animationDelay: '0.35s' }} />
      <circle cx="20" cy="15" r="3.5" fill={dotColor} className={animClass} style={{ animationDelay: '0.4s' }} />
      <circle cx="30" cy="15" r="3.5" fill={dotColor} className={animClass} style={{ animationDelay: '0.45s' }} />
      
      <circle cx="30" cy="5" r="3.5" fill={dotColor} className={animClass} style={{ animationDelay: '0.5s' }} />

      {/* Decorative dots above */}
      <circle cx="50" cy="5" r="2" fill={dotColor} className={animClass} style={{ animationDelay: '0.6s' }} />
      <circle cx="60" cy="5" r="2" fill={dotColor} className={animClass} style={{ animationDelay: '0.65s' }} />
      <circle cx="70" cy="5" r="2" fill={dotColor} className={animClass} style={{ animationDelay: '0.7s' }} />
      <circle cx="80" cy="5" r="2" fill={dotColor} className={animClass} style={{ animationDelay: '0.75s' }} />

      {/* Text: denteek */}
      <text x="45" y="40" fontFamily="monospace" fontSize="38" fontWeight="bold" fill={textColor} letterSpacing="-2">
        enteek
      </text>

      {/* Tagline */}
      <text x="48" y="54" fontFamily="sans-serif" fontSize="7" fontWeight="600" fill={variant === 'dark' ? '#64748b' : '#94a3b8'} letterSpacing="1.5" style={{ textTransform: 'uppercase' }}>
        Innovative Dentistry
      </text>
    </svg>
  );
};

export default Logo;