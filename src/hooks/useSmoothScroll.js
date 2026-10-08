import { useEffect } from 'react';
import Lenis from 'lenis';
import { gsap, ScrollTrigger } from '../lib/gsap.js';

let activeLenis = null;

export function scrollToSection(target, hash) {
  if (!target) return;

  const header = document.querySelector('[data-nav]');
  const headerHeight = header?.getBoundingClientRect().height ?? 0;
  const reducedMotion = window.matchMedia(
    '(prefers-reduced-motion: reduce)',
  ).matches;

  if (reducedMotion || !activeLenis) {
    window.scrollTo(0, Math.max(0, target.getBoundingClientRect().top + window.scrollY - headerHeight));
  } else {
    activeLenis.scrollTo(target, {
      duration: 1.2,
      offset: -headerHeight,
      easing: (value) => 1 - Math.pow(1 - value, 4),
    });
  }

  window.history.replaceState(null, '', hash);
}

export function useSmoothScroll() {
  useEffect(() => {
    const reducedMotion = window.matchMedia(
      '(prefers-reduced-motion: reduce)',
    ).matches;

    if (reducedMotion) {
      activeLenis = null;
      ScrollTrigger.refresh();
      return undefined;
    }

    const lenis = new Lenis({
      anchors: true,
      duration: 0.95,
      lerp: 0.105,
      smoothWheel: true,
      syncTouch: false,
    });
    activeLenis = lenis;

    lenis.on('scroll', ScrollTrigger.update);

    const update = (time) => {
      lenis.raf(time * 1000);
    };

    gsap.ticker.add(update);
    gsap.ticker.lagSmoothing(0);
    ScrollTrigger.refresh();

    return () => {
      if (activeLenis === lenis) {
        activeLenis = null;
      }
      gsap.ticker.remove(update);
      lenis.destroy();
    };
  }, []);
}
