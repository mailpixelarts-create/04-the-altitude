import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export function createHeroAnimation(): gsap.core.Timeline {
  const tl = gsap.timeline({ delay: 0.3 });

  // Clouds drift in
  tl.to('.hero__cloud', {
    opacity: 0.5,
    stagger: 0.2,
    duration: 2,
    ease: 'power2.out',
  }, 0);

  // Sun rises
  tl.to('.hero__sun', {
    opacity: 1,
    duration: 2.5,
    ease: 'power2.out',
  }, 0.5);

  // Mountains reveal
  tl.fromTo('.hero__mountain--back',
    { y: 50, opacity: 0 },
    { y: 0, opacity: 1, duration: 1.5, ease: 'power3.out' },
    0.8
  );
  tl.fromTo('.hero__mountain--mid',
    { y: 40, opacity: 0 },
    { y: 0, opacity: 1, duration: 1.2, ease: 'power3.out' },
    1
  );
  tl.fromTo('.hero__mountain--front',
    { y: 30, opacity: 0 },
    { y: 0, opacity: 1, duration: 1, ease: 'power3.out' },
    1.2
  );

  // Glass observatory appears
  tl.to('.hero__glass', {
    opacity: 0.4,
    scale: 1,
    duration: 1.5,
    ease: 'power2.out',
  }, 1);

  // Elevation badge
  tl.to('.hero__elevation', {
    opacity: 1,
    duration: 0.8,
    ease: 'power2.out',
  }, 1.5);

  // Title reveals
  tl.to('.hero__title-line', {
    y: 0,
    opacity: 1,
    stagger: 0.2,
    duration: 1.2,
    ease: 'power3.out',
  }, 1.8);

  // Divider
  tl.to('.hero__divider', {
    opacity: 1,
    duration: 0.6,
    ease: 'power2.out',
  }, 2.5);
  tl.to('.hero__divider-line', {
    scaleX: 1,
    duration: 0.8,
    ease: 'power3.inOut',
  }, 2.6);
  tl.to('.hero__divider-diamond', {
    scale: 1,
    duration: 0.5,
    ease: 'back.out(1.7)',
  }, 2.9);

  // Subtitle
  tl.to('.hero__subtitle', {
    opacity: 1,
    duration: 0.8,
    ease: 'power2.out',
  }, 2.8);

  // Actions
  tl.to('.hero__actions', {
    opacity: 1,
    duration: 0.8,
    ease: 'power2.out',
  }, 3);

  // Stats
  tl.to('.hero__stats', {
    opacity: 1,
    duration: 0.8,
    ease: 'power2.out',
  }, 3.2);

  // Scroll indicator
  tl.to('.hero__scroll-indicator', {
    opacity: 0.5,
    duration: 0.6,
    ease: 'power2.out',
  }, 3.4);

  // Coordinates
  tl.to('.hero__coordinates', {
    opacity: 1,
    duration: 0.8,
    ease: 'power2.out',
  }, 3.6);

  return tl;
}

export function createHeroParallax(): void {
  const hero = document.querySelector('.hero');
  if (!hero) return;

  // Content parallax — floats up
  gsap.to('.hero__content', {
    y: -100,
    opacity: 0,
    ease: 'none',
    scrollTrigger: {
      trigger: hero,
      start: 'top top',
      end: 'bottom top',
      scrub: 2,
    },
  });

  // Clouds drift faster on scroll
  gsap.to('.hero__clouds', {
    y: -80,
    ease: 'none',
    scrollTrigger: {
      trigger: hero,
      start: 'top top',
      end: 'bottom top',
      scrub: 1.5,
    },
  });

  // Sun moves up
  gsap.to('.hero__sun', {
    y: -60,
    ease: 'none',
    scrollTrigger: {
      trigger: hero,
      start: 'top top',
      end: 'bottom top',
      scrub: 1,
    },
  });

  // Mountains parallax at different speeds
  gsap.to('.hero__mountain--back', {
    y: -20,
    ease: 'none',
    scrollTrigger: {
      trigger: hero,
      start: 'top top',
      end: 'bottom top',
      scrub: 3,
    },
  });
  gsap.to('.hero__mountain--mid', {
    y: -30,
    ease: 'none',
    scrollTrigger: {
      trigger: hero,
      start: 'top top',
      end: 'bottom top',
      scrub: 2.5,
    },
  });
  gsap.to('.hero__mountain--front', {
    y: -40,
    ease: 'none',
    scrollTrigger: {
      trigger: hero,
      start: 'top top',
      end: 'bottom top',
      scrub: 2,
    },
  });
}
