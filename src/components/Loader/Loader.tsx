import { useEffect } from 'react';
import { initLoaderAnimation, animateClouds } from '../../animations/loader';
import './Loader.scss';

interface LoaderProps {
  onComplete: () => void;
}

export default function Loader({ onComplete }: LoaderProps) {
  useEffect(() => {
    animateClouds();
    const timer = setTimeout(() => {
      initLoaderAnimation(onComplete);
    }, 500);
    return () => clearTimeout(timer);
  }, [onComplete]);

  return (
    <div className="loader">
      <div className="loader__sky" />
      <div className="loader__sun loader__sun" />
      <div className="loader__clouds">
        <div className="loader__cloud loader__cloud-1" />
        <div className="loader__cloud loader__cloud-2" />
        <div className="loader__cloud loader__cloud-3" />
      </div>
      <div className="loader__mountain">
        <svg viewBox="0 0 1440 400" preserveAspectRatio="none">
          <path
            d="M0,400 L120,280 L240,320 L360,200 L480,260 L600,140 L720,220 L840,100 L960,180 L1080,60 L1200,160 L1320,120 L1440,180 L1440,400 Z"
            fill="#28435E"
          />
          <path
            d="M0,400 L180,300 L360,340 L540,240 L720,280 L900,180 L1080,240 L1260,200 L1440,260 L1440,400 Z"
            fill="#1D1D1D"
          />
        </svg>
      </div>
      <div className="loader__observatory">
        <svg viewBox="0 0 100 60" fill="none">
          <rect x="30" y="20" width="40" height="30" fill="rgba(255,255,255,0.1)" stroke="rgba(255,255,255,0.3)" strokeWidth="1"/>
          <polygon points="30,20 50,5 70,20" fill="none" stroke="rgba(255,255,255,0.3)" strokeWidth="1"/>
          <line x1="35" y1="25" x2="35" y2="45" stroke="rgba(255,255,255,0.2)" strokeWidth="0.5"/>
          <line x1="45" y1="25" x2="45" y2="45" stroke="rgba(255,255,255,0.2)" strokeWidth="0.5"/>
          <line x1="55" y1="25" x2="55" y2="45" stroke="rgba(255,255,255,0.2)" strokeWidth="0.5"/>
          <line x1="65" y1="25" x2="65" y2="45" stroke="rgba(255,255,255,0.2)" strokeWidth="0.5"/>
        </svg>
      </div>
      <div className="loader__logo">
        <div className="loader__logo-mark">
          <svg viewBox="0 0 60 60" fill="none">
            <path d="M30 5 L55 50 L5 50 Z" stroke="currentColor" strokeWidth="1.5" fill="none"/>
            <circle cx="30" cy="25" r="6" stroke="currentColor" strokeWidth="1"/>
          </svg>
        </div>
        <div className="loader__logo-text">
          <span className="loader__logo-name">THE ALTITUDE</span>
          <span className="loader__logo-sub">ABOVE THE CLOUDS</span>
        </div>
      </div>
    </div>
  );
}
