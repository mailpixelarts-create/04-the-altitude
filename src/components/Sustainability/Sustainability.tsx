import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { SUSTAINABILITY_STATS, TIMELINE_EVENTS } from '../../utils/constants';
import { useRevealOnScroll } from '../../hooks/useScrollTrigger';
import './Sustainability.scss';

export default function Sustainability() {
  const sectionRef = useRevealOnScroll();
  const timelineRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const events = entry.target.querySelectorAll('.sustainability__event');
            gsap.fromTo(
              events,
              { opacity: 0, x: -30 },
              {
                opacity: 1,
                x: 0,
                duration: 0.6,
                stagger: 0.15,
                ease: 'power3.out',
              }
            );
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.2 }
    );

    if (timelineRef.current) observer.observe(timelineRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section className="sustainability section" ref={sectionRef}>
      <div className="container">
        <div className="sustainability__header">
          <span className="sustainability__label reveal">Our Commitment</span>
          <h2 className="sustainability__title reveal section__title">
            Zero Impact,<br />Infinite Views
          </h2>
        </div>

        <div className="sustainability__stats reveal">
          {SUSTAINABILITY_STATS.map((stat) => (
            <div className="sustainability__stat" key={stat.label}>
              <span className="sustainability__stat-value">{stat.value}</span>
              <span className="sustainability__stat-label">{stat.label}</span>
            </div>
          ))}
        </div>

        <div className="sustainability__timeline" ref={timelineRef}>
          <h3 className="sustainability__timeline-title reveal">Our Mountain Journey</h3>
          <div className="sustainability__events">
            {TIMELINE_EVENTS.map((event, index) => (
              <div className="sustainability__event" key={event.year}>
                <div className="sustainability__event-year">{event.year}</div>
                <div className="sustainability__event-dot" />
                <div className="sustainability__event-content">
                  <h4 className="sustainability__event-title">{event.title}</h4>
                  <p className="sustainability__event-desc">{event.desc}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="sustainability__timeline-line" />
        </div>
      </div>
    </section>
  );
}
