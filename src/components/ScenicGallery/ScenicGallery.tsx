import { useState, useEffect, useRef } from 'react';
import gsap from 'gsap';
import { GALLERY_ITEMS } from '../../utils/constants';
import { initGalleryAnimations, initGalleryScrollTrigger } from '../../animations/gallery';
import './ScenicGallery.scss';

export default function ScenicGallery() {
  const [activeIndex, setActiveIndex] = useState(0);
  const galleryRef = useRef<HTMLDivElement>(null);
  const activeRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    initGalleryAnimations();
    initGalleryScrollTrigger();
  }, []);

  const handleItemClick = (index: number) => {
    if (index === activeIndex) return;

    const outEl = activeRef.current;
    const inEl = document.querySelector(`.scenic-gallery__item:nth-child(${index + 1})`);

    if (outEl && inEl) {
      gsap.to(outEl, { opacity: 0, scale: 1.05, duration: 0.5, ease: 'power2.inOut' });
      gsap.fromTo(
        inEl,
        { opacity: 0, scale: 0.95 },
        { opacity: 1, scale: 1, duration: 0.5, ease: 'power2.out', delay: 0.2 }
      );
    }

    setActiveIndex(index);
  };

  return (
    <section className="scenic-gallery section" id="gallery">
      <div className="container">
        <div className="scenic-gallery__header">
          <span className="scenic-gallery__label reveal">The View</span>
          <h2 className="scenic-gallery__title reveal section__title">
            Captured<br />Above the Mist
          </h2>
        </div>

        <div className="scenic-gallery__showcase">
          <div className="scenic-gallery__active" ref={activeRef}>
            <div className="scenic-gallery__active-image">
              <div className="scenic-gallery__placeholder">
                <svg viewBox="0 0 1200 700" fill="none">
                  <rect width="1200" height="700" fill="#e8f4f8"/>
                  <path d="M0,700 L200,500 L400,550 L600,350 L800,450 L1000,300 L1200,400 L1200,700 Z" fill="#28435E" opacity="0.2"/>
                  <path d="M0,700 L300,550 L600,500 L900,400 L1200,500 L1200,700 Z" fill="#28435E" opacity="0.35"/>
                  <circle cx="900" cy="200" r="80" fill="#ffd700" opacity="0.3"/>
                </svg>
              </div>
              <div className="scenic-gallery__caption">
                <span className="scenic-gallery__caption-text">
                  {GALLERY_ITEMS[activeIndex].caption}
                </span>
                <span className="scenic-gallery__caption-count">
                  {String(activeIndex + 1).padStart(2, '0')} / {String(GALLERY_ITEMS.length).padStart(2, '0')}
                </span>
              </div>
            </div>
          </div>

          <div className="scenic-gallery__thumbnails">
            {GALLERY_ITEMS.map((item, index) => (
              <button
                key={item.caption}
                className={`scenic-gallery__item ${index === activeIndex ? 'scenic-gallery__item--active' : ''}`}
                onClick={() => handleItemClick(index)}
                data-hover
              >
                <div className="scenic-gallery__thumb">
                  <div className="scenic-gallery__thumb-placeholder" />
                </div>
                <span className="scenic-gallery__thumb-label">{item.caption}</span>
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
