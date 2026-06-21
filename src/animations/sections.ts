import gsap from 'gsap';
import SplitType from 'split-type';

export function initSectionReveal() {
  const sections = document.querySelectorAll('.section');

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          revealSection(entry.target as HTMLElement);
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.1 }
  );

  sections.forEach((section) => observer.observe(section));
}

function revealSection(section: HTMLElement) {
  const reveals = section.querySelectorAll('.reveal, .reveal-left, .reveal-right, .reveal-scale');

  gsap.fromTo(
    reveals,
    { opacity: 0, y: 40 },
    {
      opacity: 1,
      y: 0,
      duration: 0.8,
      stagger: 0.12,
      ease: 'power3.out',
    }
  );

  const headlines = section.querySelectorAll('.section__title');
  headlines.forEach((headline) => {
    const split = new SplitType(headline as HTMLElement, { types: 'chars,words' });
    gsap.fromTo(
      split.chars,
      { opacity: 0, y: 30 },
      {
        opacity: 1,
        y: 0,
        duration: 0.6,
        stagger: 0.02,
        ease: 'power3.out',
      }
    );
  });
}

export function parallaxSection(section: HTMLElement, speed: number = 0.3) {
  const children = section.querySelectorAll('[data-parallax]');

  children.forEach((child) => {
    const el = child as HTMLElement;
    const depth = parseFloat(el.dataset.parallax || '1');
    gsap.to(el, {
      y: speed * depth * 100,
      ease: 'none',
    });
  });
}
