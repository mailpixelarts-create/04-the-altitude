import { useEffect, useRef } from 'react';
import { initHeroAnimations, animateHeroParallax } from '../../animations/hero';
import './Hero.scss';

export default function Hero() {
  const heroRef = useRef<HTMLElement>(null);

  useEffect(() => {
    initHeroAnimations();

    const handleScroll = () => {
      if (!heroRef.current) return;
      const rect = heroRef.current.getBoundingClientRect();
      const progress = Math.min(1, Math.max(0, -rect.top / rect.height));
      animateHeroParallax(progress);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section className="hero section" ref={heroRef}>
      <div className="hero__bg">
        <div className="hero__gradient" />
        <div className="hero__clouds">
          <div className="hero__cloud hero__cloud--1" />
          <div className="hero__cloud hero__cloud--2" />
          <div className="hero__cloud hero__cloud--3" />
          <div className="hero__cloud hero__cloud--4" />
        </div>
        <div className="hero__sun" />
        <div className="hero__mountains">
          <svg viewBox="0 0 1440 500" preserveAspectRatio="none" className="hero__mountain-svg">
            <path d="M0,500 L120,350 L240,400 L360,280 L480,340 L600,200 L720,300 L840,150 L960,240 L1080,100 L1200,200 L1320,160 L1440,220 L1440,500 Z" fill="rgba(40,67,94,0.3)"/>
            <path d="M0,500 L180,380 L360,420 L540,320 L720,360 L900,240 L1080,300 L1260,260 L1440,320 L1440,500 Z" fill="rgba(40,67,94,0.5)"/>
            <path d="M0,500 L240,430 L480,460 L720,380 L960,420 L1200,350 L1440,400 L1440,500 Z" fill="rgba(29,29,29,0.4)"/>
          </svg>
        </div>
      </div>

      <div className="hero__content">
        <div className="hero__badge">
          <span>Elevation 3,200m</span>
        </div>
        <h1 className="hero__headline">
          Above<br />the Clouds
        </h1>
        <p className="hero__sub">
          A glass observatory where mountain air meets artisan coffee.
          <br />Sunrise service begins at dawn.
        </p>
        <div className="hero__cta">
          <a href="#reservation" className="hero__btn hero__btn--primary" data-hover>
            Reserve Your Table
          </a>
          <a href="#story" className="hero__btn hero__btn--secondary" data-hover>
            Explore
          </a>
        </div>
      </div>

      <div className="hero__scroll">
        <span className="hero__scroll-text">Scroll to ascend</span>
        <div className="hero__scroll-line" />
      </div>
    </section>
  );
}
