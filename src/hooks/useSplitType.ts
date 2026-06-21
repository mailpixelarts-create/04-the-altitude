import { useEffect, useRef } from 'react';
import SplitType from 'split-type';

interface UseSplitTypeOptions {
  type?: 'chars' | 'words' | 'lines';
  tagName?: string;
  className?: string;
}

export function useSplitType(options: UseSplitTypeOptions = {}) {
  const ref = useRef<HTMLDivElement>(null);
  const splitRef = useRef<SplitType | null>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    splitRef.current = new SplitType(el, {
      types: options.type || 'chars,words',
      tagName: options.tagName || 'span',
      splitClass: options.className || '',
    });

    return () => {
      splitRef.current?.revert();
    };
  }, []);

  return ref;
}

export function splitText(element: HTMLElement, types: string = 'chars,words') {
  return new SplitType(element, {
    types: types as any,
    tagName: 'span',
  });
}
