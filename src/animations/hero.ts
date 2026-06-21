import gsap from 'gsap';
import SplitType from 'split-type';

export function initHeroAnimations() {
  const hero = document.querySelector('.hero');
  if (!hero) return;

  const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });

  tl.fromTo('.hero__clouds', { opacity: 0, scale: 1.1 }, { opacity: 1, scale: 1, duration: 2 })
    .fromTo('.hero__sun', { y: 100, opacity: 0 }, { y: 0, opacity: 1, duration: 1.5 }, '-=1.5')
    .fromTo('.hero__mountains', { y: 60, opacity: 0 }, { y: 0, opacity: 1, duration: 1.2 }, '-=1');

  const headline = hero.querySelector('.hero__headline');
  if (headline) {
    const split = new SplitType(headline as HTMLElement, { types: 'chars,words' });
    tl.fromTo(
      split.chars,
      { opacity: 0, y: 40, filter: 'blur(8px)' },
      { opacity: 1, y: 0, filter: 'blur(0px)', stagger: 0.03, duration: 0.8 },
      '-=0.5'
    );
  }

  tl.fromTo('.hero__sub', { opacity: 0, y: 20 }, { opacity: 1, y: 0, duration: 0.8 }, '-=0.3')
    .fromTo('.hero__cta', { opacity: 0, y: 20 }, { opacity: 1, y: 0, duration: 0.8 }, '-=0.5')
    .fromTo('.hero__scroll', { opacity: 0 }, { opacity: 1, duration: 0.6 }, '-=0.3');

  gsap.to('.hero__clouds', {
    x: '3%',
    duration: 20,
    ease: 'none',
    repeat: -1,
    yoyo: true,
  });

  gsap.to('.hero__sun', {
    scale: 1.05,
    duration: 4,
    ease: 'sine.inOut',
    repeat: -1,
    yoyo: true,
  });

  return tl;
}

export function animateHeroParallax(scrollProgress: number) {
  gsap.to('.hero__clouds', { y: scrollProgress * 100, ease: 'none' });
  gsap.to('.hero__mountains', { y: scrollProgress * 50, ease: 'none' });
  gsap.to('.hero__content', { y: scrollProgress * -80, opacity: 1 - scrollProgress * 0.8, ease: 'none' });
}
