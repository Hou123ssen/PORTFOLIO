import { useEffect, useRef, useState } from 'react';
import { gsap } from '../../lib/gsap.js';

const interactiveSelector = [
  'a',
  'button',
  '[role="button"]',
  'input',
  'textarea',
  'select',
  '[data-project-card]',
].join(',');

export function CustomCursor() {
  const cursorRef = useRef(null);
  const [isActive, setIsActive] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const supportsCursor = window.matchMedia(
      '(pointer: fine) and (hover: hover) and (min-width: 1024px)',
    ).matches;
    const reducedMotion = window.matchMedia(
      '(prefers-reduced-motion: reduce)',
    ).matches;

    if (!supportsCursor || reducedMotion || !cursorRef.current) {
      return undefined;
    }

    const cursor = cursorRef.current;
    const xTo = gsap.quickTo(cursor, 'x', {
      duration: 0.34,
      ease: 'power3.out',
    });
    const yTo = gsap.quickTo(cursor, 'y', {
      duration: 0.34,
      ease: 'power3.out',
    });

    const handlePointerMove = (event) => {
      setIsVisible(true);
      xTo(event.clientX);
      yTo(event.clientY);
    };

    const handlePointerOver = (event) => {
      setIsActive(Boolean(event.target.closest(interactiveSelector)));
    };

    const handlePointerOut = (event) => {
      if (!event.relatedTarget?.closest?.(interactiveSelector)) {
        setIsActive(false);
      }
    };

    const handlePointerLeave = () => {
      setIsVisible(false);
      setIsActive(false);
    };

    window.addEventListener('pointermove', handlePointerMove);
    document.addEventListener('pointerover', handlePointerOver);
    document.addEventListener('pointerout', handlePointerOut);
    document.documentElement.addEventListener('mouseleave', handlePointerLeave);

    return () => {
      window.removeEventListener('pointermove', handlePointerMove);
      document.removeEventListener('pointerover', handlePointerOver);
      document.removeEventListener('pointerout', handlePointerOut);
      document.documentElement.removeEventListener('mouseleave', handlePointerLeave);
    };
  }, []);

  return (
    <div
      ref={cursorRef}
      className={`pointer-events-none fixed left-0 top-0 z-[100] hidden h-4 w-4 -translate-x-1/2 -translate-y-1/2 rounded-full border transition-[width,height,background-color,border-color,opacity] duration-300 ease-out lg:block ${
        isActive
          ? 'h-9 w-9 border-[rgba(17,17,15,0.32)] bg-[rgba(17,17,15,0.08)]'
          : 'border-[rgba(17,17,15,0.58)] bg-transparent'
      } ${isVisible ? 'opacity-100' : 'opacity-0'}`}
      aria-hidden="true"
    />
  );
}
