import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { SIGNATURE_COFFEES } from '../../utils/constants';
import { useRevealOnScroll } from '../../hooks/useScrollTrigger';
import './SignatureCoffee.scss';

export default function SignatureCoffee() {
  const sectionRef = useRevealOnScroll();
  const cardsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const cards = entry.target.querySelectorAll('.signature-coffee__card');
            gsap.fromTo(
              cards,
              { opacity: 0, y: 60 },
              {
                opacity: 1,
                y: 0,
                duration: 0.8,
                stagger: 0.2,
                ease: 'power3.out',
              }
            );
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.2 }
    );

    if (cardsRef.current) observer.observe(cardsRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section className="signature-coffee section" id="coffee" ref={sectionRef}>
      <div className="container">
        <div className="signature-coffee__header">
          <span className="signature-coffee__label reveal">The Collection</span>
          <h2 className="signature-coffee__title reveal section__title">
            Signature<br />Altitude Blends
          </h2>
          <p className="signature-coffee__intro reveal">
            Each blend tells a story of elevation. Harvested at the precise altitude
            where terroir and temperature create extraordinary complexity.
          </p>
        </div>

        <div className="signature-coffee__grid" ref={cardsRef}>
          {SIGNATURE_COFFEES.map((coffee, index) => (
            <div className="signature-coffee__card" key={coffee.name}>
              <div className="signature-coffee__card-header">
                <span className="signature-coffee__card-number">
                  {String(index + 1).padStart(2, '0')}
                </span>
                <span className="signature-coffee__card-elevation">{coffee.elevation}</span>
              </div>

              <div className="signature-coffee__card-visual">
                <div className="signature-coffee__card-cup">
                  <svg viewBox="0 0 120 120" fill="none">
                    <ellipse cx="60" cy="95" rx="35" ry="8" fill="rgba(40,67,94,0.1)"/>
                    <path d="M30,50 Q30,95 60,95 Q90,95 90,50 Z" fill="rgba(40,67,94,0.08)" stroke="rgba(40,67,94,0.3)" strokeWidth="1"/>
                    <path d="M35,50 Q35,90 60,90 Q85,90 85,50 Z" fill="rgba(255,255,255,0.5)"/>
                  </svg>
                  <div className="signature-coffee__steam">
                    <span /><span /><span />
                  </div>
                </div>
              </div>

              <div className="signature-coffee__card-content">
                <h3 className="signature-coffee__card-name">{coffee.name}</h3>
                <p className="signature-coffee__card-origin">{coffee.origin}</p>
                <p className="signature-coffee__card-desc">{coffee.description}</p>

                <div className="signature-coffee__card-notes">
                  {coffee.notes.map((note) => (
                    <span className="signature-coffee__note" key={note}>{note}</span>
                  ))}
                </div>

                <div className="signature-coffee__card-footer">
                  <span className="signature-coffee__card-price">{coffee.price}</span>
                  <button className="signature-coffee__card-btn" data-hover>
                    Order
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
