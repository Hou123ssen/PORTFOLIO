import { useLayoutEffect, useRef } from 'react';

import { gsap } from '../lib/gsap.js';

const LOGO_MASK = {
  WebkitMaskImage: "url('/images/hd-logo.svg')",
  WebkitMaskPosition: 'center',
  WebkitMaskRepeat: 'no-repeat',
  WebkitMaskSize: 'contain',
  maskImage: "url('/images/hd-logo.svg')",
  maskPosition: 'center',
  maskRepeat: 'no-repeat',
  maskSize: 'contain',
};

const PORTRAIT_SRC = '/images/houssen-portrait.png';

function preloadImage(src) {
  return new Promise((resolve) => {
    const image = new Image();
    let settled = false;
    const finish = () => {
      if (settled) return;
      settled = true;
      image.removeEventListener('load', finish);
      image.removeEventListener('error', finish);
      resolve();
    };

    image.addEventListener('load', finish, { once: true });
    image.addEventListener('error', finish, { once: true });
    image.src = src;

    if (image.complete) finish();
  });
}

function waitForCriticalAssets() {
  const fontsReady = document.fonts?.ready ?? Promise.resolve();
  return Promise.allSettled([fontsReady, preloadImage(PORTRAIT_SRC)]);
}

export function PageLoader({ onComplete }) {
  const loaderRef = useRef(null);
  const fillRef = useRef(null);
  const waveRef = useRef(null);

  useLayoutEffect(() => {
    const loader = loaderRef.current;
    const fill = fillRef.current;
    const wave = waveRef.current;
    if (!loader || !fill || !wave) return undefined;

    let cancelled = false;
    let completionTimeline;
    let reducedMotionTween;
    let liquidTween;
    const reducedMotion = window.matchMedia(
      '(prefers-reduced-motion: reduce)',
    ).matches;
    const previousBodyOverflow = document.body.style.overflow;
    const previousHtmlOverflow = document.documentElement.style.overflow;

    document.body.style.overflow = 'hidden';
    document.documentElement.style.overflow = 'hidden';

    const progress = { value: reducedMotion ? 92 : 0 };
    const updateFill = () => {
      const value = Math.max(0, Math.min(100, progress.value));
      const waveAllowance = (12 * value) / 100;
      fill.style.height = `calc(${value}% + ${waveAllowance}px)`;
      fill.style.opacity = value > 0.25 ? '1' : '0';
    };

    updateFill();
    gsap.set(loader, { clipPath: 'inset(0% 0% 0% 0%)' });

    const waveTween = reducedMotion
      ? null
      : gsap.fromTo(
          wave,
          { xPercent: -25 },
          {
            xPercent: 0,
            duration: 1.35,
            ease: 'none',
            repeat: -1,
          },
        );

    const runLoader = async () => {
      if (reducedMotion) {
        await waitForCriticalAssets();
        if (cancelled) return;

        progress.value = 100;
        updateFill();

        reducedMotionTween = gsap.to(loader, {
          clipPath: 'inset(0% 0% 100% 0%)',
          duration: 0.28,
          ease: 'power2.inOut',
          onComplete: () => {
            if (!cancelled) onComplete();
          },
        });
        return;
      }

      const liquidProgress = new Promise((resolve) => {
        liquidTween = gsap.to(progress, {
          value: 100,
          duration: 4,
          ease: 'sine.inOut',
          onUpdate: updateFill,
          onComplete: resolve,
          onInterrupt: resolve,
        });
      });

      await Promise.all([waitForCriticalAssets(), liquidProgress]);

      if (cancelled) return;

      completionTimeline = gsap.timeline({
        onComplete: () => {
          if (!cancelled) onComplete();
        },
      });

      completionTimeline
        .to({}, { duration: 0.2 })
        .to(loader, {
          clipPath: 'inset(0% 0% 100% 0%)',
          duration: 0.7,
          ease: 'power4.inOut',
        });
    };

    runLoader();

    return () => {
      cancelled = true;
      waveTween?.kill();
      liquidTween?.kill();
      completionTimeline?.kill();
      reducedMotionTween?.kill();
      gsap.killTweensOf([loader, wave, progress]);
      document.body.style.overflow = previousBodyOverflow;
      document.documentElement.style.overflow = previousHtmlOverflow;
    };
  }, [onComplete]);

  return (
    <div
      ref={loaderRef}
      className="fixed inset-0 z-[200] grid h-[100svh] h-[100dvh] w-full place-items-center overflow-hidden bg-[var(--paper)]"
      role="status"
      aria-label="Loading portfolio"
    >
      <div className="relative aspect-[772/392] w-[128px] min-[681px]:w-[164px] min-[1024px]:w-[205px]">
        <div
          className="absolute inset-0 bg-[rgba(17,17,15,0.10)]"
          style={LOGO_MASK}
          aria-hidden="true"
        />

        <div
          className="absolute inset-0 overflow-hidden"
          style={LOGO_MASK}
          aria-hidden="true"
        >
          <div
            ref={fillRef}
            className="absolute inset-x-0 bottom-0 opacity-0"
          >
            <svg
              ref={waveRef}
              className="absolute left-0 top-0 h-3 w-[200%] max-w-none"
              viewBox="0 0 240 12"
              preserveAspectRatio="none"
              aria-hidden="true"
            >
              <path
                d="M0 6C10 2 20 2 30 6S50 10 60 6 80 2 90 6s20 4 30 0 20-4 30 0 20 4 30 0 20-4 30 0 20 4 30 0v6H0Z"
                fill="var(--ink)"
              />
            </svg>
            <div className="absolute inset-x-0 bottom-0 top-[11px] bg-[var(--ink)]" />
          </div>
        </div>
      </div>
    </div>
  );
}
