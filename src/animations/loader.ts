import gsap from 'gsap';

export function initLoaderAnimation(onComplete: () => void) {
  const tl = gsap.timeline({
    onComplete,
  });

  tl.set('.loader', { opacity: 1 })
    .fromTo('.loader__cloud-1', { x: '-100%', opacity: 0 }, { x: '0%', opacity: 0.8, duration: 1.5, ease: 'power2.out' })
    .fromTo('.loader__cloud-2', { x: '100%', opacity: 0 }, { x: '0%', opacity: 0.6, duration: 1.5, ease: 'power2.out' }, '-=1.2')
    .fromTo('.loader__cloud-3', { y: '50%', opacity: 0 }, { y: '0%', opacity: 0.5, duration: 1.2, ease: 'power2.out' }, '-=0.8')
    .fromTo('.loader__mountain', { scaleY: 0, transformOrigin: 'bottom center' }, { scaleY: 1, duration: 1.2, ease: 'power3.out' }, '-=0.6')
    .fromTo('.loader__sun', { y: 80, opacity: 0, scale: 0.5 }, { y: 0, opacity: 1, scale: 1, duration: 1, ease: 'power2.out' }, '-=0.8')
    .fromTo('.loader__logo', { opacity: 0, y: 20, filter: 'blur(10px)' }, { opacity: 1, y: 0, filter: 'blur(0px)', duration: 0.8, ease: 'power3.out' }, '-=0.4')
    .to('.loader__logo', { opacity: 1, duration: 0.6, delay: 0.3 })
    .to('.loader', {
      opacity: 0,
      duration: 0.8,
      ease: 'power2.inOut',
    })
    .set('.loader', { display: 'none' });

  return tl;
}

export function animateClouds() {
  gsap.to('.loader__cloud-1', {
    x: '20%',
    duration: 8,
    ease: 'sine.inOut',
    repeat: -1,
    yoyo: true,
  });
  gsap.to('.loader__cloud-2', {
    x: '-15%',
    duration: 10,
    ease: 'sine.inOut',
    repeat: -1,
    yoyo: true,
  });
  gsap.to('.loader__cloud-3', {
    y: '10%',
    duration: 6,
    ease: 'sine.inOut',
    repeat: -1,
    yoyo: true,
  });
}
