import { useState, useRef, useEffect } from 'react';
import gsap from 'gsap';
import { OBSERVATORY_HOTSPOTS } from '../../utils/constants';
import { useRevealOnScroll } from '../../hooks/useScrollTrigger';
import './Observatory.scss';

export default function Observatory() {
  const [activeHotspot, setActiveHotspot] = useState<string | null>(null);
  const [rotation, setRotation] = useState(0);
  const sectionRef = useRevealOnScroll();
  const rotationRef = useRef(0);

  useEffect(() => {
    let animationFrame: number;
    let lastTime = Date.now();

    const animate = () => {
      const now = Date.now();
      const delta = (now - lastTime) / 1000;
      lastTime = now;

      rotationRef.current += delta * 5;
      setRotation(rotationRef.current);
      animationFrame = requestAnimationFrame(animate);
    };

    animationFrame = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animationFrame);
  }, []);

  return (
    <section className="observatory section" id="observatory" ref={sectionRef}>
      <div className="container">
        <div className="observatory__header">
          <span className="observatory__label reveal">The Observatory</span>
          <h2 className="observatory__title reveal section__title">
            360° of<br />Infinite Range
          </h2>
          <p className="observatory__intro reveal">
            Our glass-wrapped observatory offers an uninterrupted panorama of the Alps.
            Touch any peak to discover its story.
          </p>
        </div>

        <div className="observatory__view reveal-scale">
          <div className="observatory__sphere" style={{ transform: `rotateY(${rotation}deg)` }}>
            <svg viewBox="0 0 800 400" fill="none" className="observatory__panorama">
              <defs>
                <linearGradient id="skyGrad" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="#c8dff0"/>
                  <stop offset="100%" stopColor="#AFCDEB"/>
                </linearGradient>
              </defs>
              <rect width="800" height="400" fill="url(#skyGrad)"/>
              <path d="M0,400 L50,300 L100,320 L150,250 L200,280 L250,200 L300,240 L350,180 L400,220 L450,160 L500,200 L550,140 L600,180 L650,120 L700,160 L750,100 L800,140 L800,400 Z" fill="#28435E" opacity="0.4"/>
              <path d="M0,400 L80,340 L160,360 L240,300 L320,330 L400,260 L480,300 L560,240 L640,280 L720,220 L800,260 L800,400 Z" fill="#28435E" opacity="0.6"/>
              <path d="M0,400 L120,370 L240,380 L360,340 L480,360 L600,320 L720,350 L800,330 L800,400 Z" fill="#1D1D1D" opacity="0.5"/>
              <circle cx="650" cy="100" r="40" fill="#ffd700" opacity="0.4"/>
            </svg>

            {OBSERVATORY_HOTSPOTS.map((spot) => (
              <button
                key={spot.id}
                className={`observatory__hotspot ${activeHotspot === spot.id ? 'observatory__hotspot--active' : ''}`}
                style={{ left: `${spot.x}%`, top: `${spot.y}%` }}
                onClick={() => setActiveHotspot(activeHotspot === spot.id ? null : spot.id)}
                data-hover
              >
                <span className="observatory__hotspot-ring" />
                <span className="observatory__hotspot-dot" />
                <span className="observatory__hotspot-label">{spot.label}</span>
              </button>
            ))}
          </div>

          {activeHotspot && (
            <div className="observatory__info">
              {OBSERVATORY_HOTSPOTS.filter((s) => s.id === activeHotspot).map((spot) => (
                <div key={spot.id}>
                  <span className="observatory__info-name">{spot.label}</span>
                  <span className="observatory__info-elevation">{spot.elevation}</span>
                </div>
              ))}
            </div>
          )}
        </div>

        <div className="observatory__controls reveal">
          <span className="observatory__controls-hint">Auto-rotating panorama — Click peaks to explore</span>
        </div>
      </div>
    </section>
  );
}
