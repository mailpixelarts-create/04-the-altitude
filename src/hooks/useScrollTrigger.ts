import { useEffect, useRef } from 'react';
import gsap from 'gsap';

interface ScrollTriggerOptions {
  trigger: string;
  start?: string;
  end?: string;
  onEnter?: () => void;
  onLeave?: () => void;
  onEnterBack?: () => void;
  onLeaveBack?: () => void;
}

export function useScrollTrigger(options: ScrollTriggerOptions) {
  const elementRef = useRef<HTMLElement | null>(null);
  const hasTriggered = useRef(false);

  useEffect(() => {
    const el = elementRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !hasTriggered.current) {
            hasTriggered.current = true;
            options.onEnter?.();
          } else if (!entry.isIntersecting && hasTriggered.current) {
            options.onLeave?.();
          }
        });
      },
      {
        threshold: 0.2,
        rootMargin: options.start || '0px',
      }
    );

    observer.observe(el);

    return () => observer.disconnect();
  }, []);

  return elementRef;
}

export function useRevealOnScroll() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const children = el.querySelectorAll('.reveal, .reveal-left, .reveal-right, .reveal-scale');
            children.forEach((child, i) => {
              gsap.fromTo(
                child,
                { opacity: 0, y: 30 },
                {
                  opacity: 1,
                  y: 0,
                  duration: 0.8,
                  delay: i * 0.1,
                  ease: 'power3.out',
                }
              );
            });
            observer.unobserve(el);
          }
        });
      },
      { threshold: 0.15 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return ref;
}
