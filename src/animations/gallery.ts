import gsap from 'gsap';

export function initGalleryAnimations() {
  const gallery = document.querySelector('.scenic-gallery');
  if (!gallery) return;

  const items = gallery.querySelectorAll('.scenic-gallery__item');
  const activeItem = gallery.querySelector('.scenic-gallery__active');

  items.forEach((item, index) => {
    item.addEventListener('mouseenter', () => {
      gsap.to(item, {
        scale: 1.02,
        duration: 0.4,
        ease: 'power2.out',
      });
    });

    item.addEventListener('mouseleave', () => {
      gsap.to(item, {
        scale: 1,
        duration: 0.4,
        ease: 'power2.out',
      });
    });
  });
}

export function animateGalleryTransition(
  outElement: HTMLElement,
  inElement: HTMLElement
) {
  const tl = gsap.timeline();

  tl.to(outElement, {
    opacity: 0,
    scale: 1.05,
    duration: 0.6,
    ease: 'power2.inOut',
  })
    .fromTo(
      inElement,
      { opacity: 0, scale: 0.95 },
      { opacity: 1, scale: 1, duration: 0.6, ease: 'power2.out' },
      '-=0.3'
    );

  return tl;
}

export function animateGalleryCaption(caption: HTMLElement) {
  gsap.fromTo(
    caption,
    { opacity: 0, y: 20 },
    { opacity: 1, y: 0, duration: 0.5, ease: 'power3.out' }
  );
}

export function initGalleryScrollTrigger() {
  const gallery = document.querySelector('.scenic-gallery');
  if (!gallery) return;

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          gsap.fromTo(
            '.scenic-gallery__item',
            { opacity: 0, y: 60 },
            {
              opacity: 1,
              y: 0,
              duration: 0.8,
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

  observer.observe(gallery);
}
