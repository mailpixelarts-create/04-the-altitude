import { useEffect, useRef } from 'react';
import { useRevealOnScroll } from '../../hooks/useScrollTrigger';
import './MountainStory.scss';

export default function MountainStory() {
  const sectionRef = useRevealOnScroll();

  return (
    <section className="mountain-story section" id="story" ref={sectionRef}>
      <div className="mountain-story__fog mountain-story__fog--top" />

      <div className="container">
        <div className="mountain-story__grid">
          <div className="mountain-story__text">
            <span className="mountain-story__label reveal">Our Story</span>
            <h2 className="mountain-story__title reveal section__title">
              Born Where<br />Air Meets Stone
            </h2>
            <div className="mountain-story__body reveal">
              <p>
                At 3,200 meters, the world transforms. The air thins to crystal clarity.
                Sounds carry differently. Light refracts through ice crystals suspended
                in alpine mist. Here, at the edge of the habitable world, we built
                something extraordinary.
              </p>
              <p>
                THE ALTITUDE is not merely a café. It is an observation post for the
                sublime. A glass pavilion engineered to dissolve the boundary between
                shelter and sky. Every beam of morning light, every drift of cloud
                through the valley below — experienced from the warmth of a fire
                and the ritual of a perfect cup.
              </p>
            </div>
            <div className="mountain-story__stats reveal">
              <div className="mountain-story__stat">
                <span className="mountain-story__stat-value">3,200m</span>
                <span className="mountain-story__stat-label">Elevation</span>
              </div>
              <div className="mountain-story__stat">
                <span className="mountain-story__stat-value">360°</span>
                <span className="mountain-story__stat-label">Panorama</span>
              </div>
              <div className="mountain-story__stat">
                <span className="mountain-story__stat-value">-12°C</span>
                <span className="mountain-story__stat-label">Winter Peak</span>
              </div>
            </div>
          </div>

          <div className="mountain-story__visual">
            <div className="mountain-story__image reveal-scale">
              <div className="mountain-story__image-frame">
                <div className="mountain-story__image-placeholder">
                  <svg viewBox="0 0 400 500" fill="none">
                    <rect width="400" height="500" fill="#e8f4f8"/>
                    <path d="M0,500 L100,350 L200,400 L300,250 L400,300 L400,500 Z" fill="#28435E" opacity="0.3"/>
                    <path d="M0,500 L150,380 L300,320 L400,380 L400,500 Z" fill="#28435E" opacity="0.5"/>
                    <circle cx="300" cy="120" r="50" fill="#ffd700" opacity="0.4"/>
                  </svg>
                </div>
              </div>
            </div>
            <div className="mountain-story__accent reveal" />
          </div>
        </div>
      </div>

      <div className="mountain-story__fog mountain-story__fog--bottom" />
    </section>
  );
}
