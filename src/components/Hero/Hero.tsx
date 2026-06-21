import { useEffect, useRef } from 'react';
import { createHeroAnimation, createHeroParallax } from '../../animations/hero';
import './Hero.scss';

export default function Hero() {
  const heroRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const timer = setTimeout(() => {
      createHeroAnimation();
      createHeroParallax();
    }, 2600);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="hero" ref={heroRef}>
      <div className="hero__atmosphere">
        <div className="hero__sky" />
        
        <div className="hero__clouds">
          <div className="hero__cloud hero__cloud--1" />
          <div className="hero__cloud hero__cloud--2" />
          <div className="hero__cloud hero__cloud--3" />
          <div className="hero__cloud hero__cloud--4" />
          <div className="hero__cloud hero__cloud--5" />
        </div>

        <div className="hero__sun">
          <div className="hero__sun-core" />
          <div className="hero__sun-glow" />
          <div className="hero__sun-rays" />
        </div>

        <div className="hero__mountains">
          <svg viewBox="0 0 1440 400" preserveAspectRatio="none" className="hero__mountain-svg">
            <path d="M0,400 L100,280 L200,320 L350,180 L500,250 L650,120 L800,200 L950,80 L1100,160 L1250,100 L1440,180 L1440,400 Z" 
                  className="hero__mountain hero__mountain--back" />
            <path d="M0,400 L150,320 L300,350 L500,250 L700,300 L900,180 L1100,240 L1300,200 L1440,260 L1440,400 Z" 
                  className="hero__mountain hero__mountain--mid" />
            <path d="M0,400 L200,360 L400,380 L600,320 L800,350 L1000,290 L1200,330 L1440,300 L1440,400 Z" 
                  className="hero__mountain hero__mountain--front" />
          </svg>
        </div>

        <div className="hero__glass">
          <div className="hero__glass-frame" />
          <div className="hero__glass-reflection" />
        </div>
      </div>

      <div className="hero__vignette" />

      <div className="hero__content">
        <div className="hero__elevation">
          <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="hero__elevation-icon">
            <path d="M12 2L15 8L22 9L17 14L18 21L12 18L6 21L7 14L2 9L9 8L12 2Z" stroke="currentColor" strokeWidth="1" />
          </svg>
          <span>Elevation 3,200m</span>
        </div>

        <h1 className="hero__title">
          <span className="hero__title-line">Above</span>
          <span className="hero__title-line hero__title-line--accent">The Clouds</span>
        </h1>

        <div className="hero__divider">
          <div className="hero__divider-line" />
          <div className="hero__divider-diamond" />
          <div className="hero__divider-line" />
        </div>

        <p className="hero__subtitle">
          A glass observatory where mountain air meets artisan coffee.<br />
          Sunrise service begins at dawn.
        </p>

        <div className="hero__actions">
          <a href="#reservation" className="hero__btn hero__btn--primary">
            <span>Reserve Your Table</span>
          </a>
          <a href="#story" className="hero__btn hero__btn--secondary">
            <span>Explore</span>
          </a>
        </div>

        <div className="hero__stats">
          <div className="hero__stat">
            <span className="hero__stat-value">3,200m</span>
            <span className="hero__stat-label">Elevation</span>
          </div>
          <div className="hero__stat-divider" />
          <div className="hero__stat">
            <span className="hero__stat-value">-2°C</span>
            <span className="hero__stat-label">Morning</span>
          </div>
          <div className="hero__stat-divider" />
          <div className="hero__stat">
            <span className="hero__stat-value">5:47 AM</span>
            <span className="hero__stat-label">Sunrise</span>
          </div>
        </div>
      </div>

      <div className="hero__scroll-indicator">
        <span>Scroll to ascend</span>
        <div className="hero__scroll-track">
          <div className="hero__scroll-thumb" />
        </div>
      </div>

      <div className="hero__coordinates">
        <span>46.5197° N</span>
        <span>6.6323° E</span>
      </div>
    </section>
  );
}
