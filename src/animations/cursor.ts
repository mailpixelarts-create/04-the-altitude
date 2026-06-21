import gsap from 'gsap';

export function initCursorAnimations() {
  const cursor = document.querySelector('.cursor');
  const cursorFollower = document.querySelector('.cursor__follower');
  const cursorRipple = document.querySelector('.cursor__ripple');

  if (!cursor || !cursorFollower) return;

  let mouseX = 0;
  let mouseY = 0;
  let cursorX = 0;
  let cursorY = 0;
  let followerX = 0;
  let followerY = 0;

  document.addEventListener('mousemove', (e) => {
    mouseX = e.clientX;
    mouseY = e.clientY;
  });

  function animateCursor() {
    const dx = mouseX - cursorX;
    const dy = mouseY - cursorY;
    cursorX += dx * 0.2;
    cursorY += dy * 0.2;

    const fdx = mouseX - followerX;
    const fdy = mouseY - followerY;
    followerX += fdx * 0.08;
    followerY += fdy * 0.08;

    gsap.set(cursor, { x: cursorX, y: cursorY });
    gsap.set(cursorFollower, { x: followerX, y: followerY });

    requestAnimationFrame(animateCursor);
  }

  animateCursor();

  document.addEventListener('mousedown', () => {
    gsap.to(cursor, { scale: 0.8, duration: 0.2 });
    gsap.to(cursorFollower, { scale: 1.2, duration: 0.3 });
    if (cursorRipple) {
      gsap.fromTo(
        cursorRipple,
        { scale: 0, opacity: 0.6 },
        { scale: 4, opacity: 0, duration: 0.6, ease: 'power2.out' }
      );
    }
  });

  document.addEventListener('mouseup', () => {
    gsap.to(cursor, { scale: 1, duration: 0.2 });
    gsap.to(cursorFollower, { scale: 1, duration: 0.3 });
  });

  const links = document.querySelectorAll('a, button, [data-hover]');
  links.forEach((link) => {
    link.addEventListener('mouseenter', () => {
      gsap.to(cursor, { scale: 1.5, duration: 0.3 });
      gsap.to(cursorFollower, { scale: 2, duration: 0.3 });
    });
    link.addEventListener('mouseleave', () => {
      gsap.to(cursor, { scale: 1, duration: 0.3 });
      gsap.to(cursorFollower, { scale: 1, duration: 0.3 });
    });
  });
}

export function createWindRipple(x: number, y: number) {
  const ripple = document.createElement('div');
  ripple.className = 'wind-ripple';
  ripple.style.left = `${x}px`;
  ripple.style.top = `${y}px`;
  document.body.appendChild(ripple);

  gsap.fromTo(
    ripple,
    { scale: 0, opacity: 0.4, rotation: 0 },
    {
      scale: 3,
      opacity: 0,
      rotation: 180,
      duration: 1.2,
      ease: 'power2.out',
      onComplete: () => ripple.remove(),
    }
  );
}
