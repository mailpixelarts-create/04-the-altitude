import { useEffect, useRef } from 'react';
import { initCursorAnimations, createWindRipple } from '../../animations/cursor';
import './Cursor.scss';

export default function Cursor() {
  const cursorRef = useRef<HTMLDivElement>(null);
  const followerRef = useRef<HTMLDivElement>(null);
  const rippleRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const isTouchDevice = 'ontouchstart' in window || navigator.maxTouchPoints > 0;
    if (isTouchDevice) return;

    initCursorAnimations();

    const handleMouseMove = (e: MouseEvent) => {
      if (Math.random() > 0.92) {
        createWindRipple(e.clientX, e.clientY);
      }
    };

    document.addEventListener('mousemove', handleMouseMove);
    return () => document.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const isTouchDevice = typeof window !== 'undefined' && ('ontouchstart' in window || navigator.maxTouchPoints > 0);
  if (isTouchDevice) return null;

  return (
    <>
      <div className="cursor" ref={cursorRef} />
      <div className="cursor__follower" ref={followerRef} />
      <div className="cursor__ripple" ref={rippleRef} />
    </>
  );
}
