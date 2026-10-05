import { useEffect, useRef } from 'react';
import { heroCopy, editorialServices, profile } from '../../data/profile.js';
import { gsap, ScrollTrigger } from '../../lib/gsap.js';
import { HeroHeadline } from './HeroHeadline.jsx';
import { HeroPortrait } from './HeroPortrait.jsx';

const sectionClass =
  'relative box-border mt-[76px] flex h-[calc(100svh_-_76px)] h-[calc(100dvh_-_76px)] flex-col overflow-x-clip overflow-y-visible max-[1180px]:mt-[68px] max-[1180px]:h-[calc(100svh_-_68px)] max-[1180px]:h-[calc(100dvh_-_68px)] min-[960px]:max-[1100px]:h-[clamp(475px,63.4svh,515px)] min-[960px]:max-[1100px]:h-[clamp(475px,63.4dvh,515px)] max-[900px]:h-auto max-[900px]:min-h-0 min-[681px]:max-[900px]:h-[clamp(540px,54svh,560px)] min-[681px]:max-[900px]:h-[clamp(540px,54dvh,560px)] max-[680px]:mt-[64px]';

const innerClass =
  'hero-inner relative mx-auto w-full max-w-[1600px] flex-1 px-[var(--gutter)] pt-[clamp(44px,5vh,68px)] min-[960px]:max-[1100px]:grid min-[960px]:max-[1100px]:grid-rows-[auto_1fr] min-[960px]:max-[1100px]:-translate-y-[72px] min-[960px]:max-[1100px]:px-[clamp(34px,4.2vw,46px)] min-[960px]:max-[1100px]:pt-[clamp(42px,5.8vh,48px)] max-[900px]:pt-[34px] min-[681px]:max-[900px]:grid min-[681px]:max-[900px]:grid-rows-[auto_1fr] min-[681px]:max-[900px]:px-[24px] min-[681px]:max-[900px]:pt-[32px] max-[680px]:px-4 max-[680px]:pt-6';

const lowerClass =
  'hero-lower relative z-[3] grid min-h-[clamp(408px,49vh,560px)] grid-cols-[minmax(190px,0.82fr)_minmax(460px,1.44fr)_minmax(300px,0.96fr)] items-end gap-[clamp(18px,4vw,70px)] mt-[clamp(-38px,-2.2vw,-16px)] min-[1440px]:min-h-[528px] max-[1180px]:min-h-[430px] max-[1180px]:grid-cols-[minmax(150px,0.82fr)_minmax(300px,1.26fr)_minmax(240px,0.96fr)] min-[960px]:max-[1100px]:w-full min-[960px]:max-[1100px]:self-end min-[960px]:max-[1100px]:grid-cols-[minmax(214px,0.86fr)_minmax(282px,1.08fr)_minmax(248px,0.92fr)] min-[960px]:max-[1100px]:gap-[clamp(14px,2.1vw,24px)] min-[960px]:max-[1100px]:min-h-[clamp(342px,44.5dvh,370px)] min-[960px]:max-[1100px]:mt-[clamp(-24px,-2dvh,-12px)] max-[900px]:grid-cols-2 max-[900px]:gap-7 max-[900px]:min-h-0 max-[900px]:mt-[-18px] min-[681px]:max-[900px]:mt-[-20px] min-[681px]:max-[900px]:grid-cols-[190px_minmax(270px,1fr)_205px] min-[681px]:max-[900px]:gap-[12px] min-[681px]:max-[900px]:self-end min-[681px]:max-[900px]:min-h-[342px] min-[681px]:max-[900px]:items-end max-[680px]:mt-0 max-[680px]:flex max-[680px]:flex-col max-[680px]:items-stretch max-[680px]:gap-0';

const roleClass =
  'hero-role col-start-1 self-end pb-[clamp(118px,17vh,184px)] min-[960px]:max-[1100px]:w-[214px] min-[960px]:max-[1100px]:pb-[clamp(52px,8.2dvh,64px)] max-[900px]:col-start-1 max-[900px]:pb-[34px] min-[681px]:max-[900px]:w-[190px] min-[681px]:max-[900px]:pb-[36px] max-[680px]:order-2 max-[680px]:grid max-[680px]:w-full max-[680px]:grid-cols-[minmax(0,1fr)_auto] max-[680px]:items-center max-[680px]:gap-4 max-[680px]:pb-[44px]';


const roleTextClass =
  "m-0 font-['Helvetica_Neue',Helvetica,Arial,ui-sans-serif,system-ui,sans-serif] text-[clamp(30px,2.35vw,36px)] leading-[0.96] font-[430] tracking-[-0.025em] min-[960px]:max-[1100px]:text-[clamp(23px,2.35vw,25px)] min-[960px]:max-[1100px]:leading-[0.96] min-[681px]:max-[900px]:text-[19px] min-[681px]:max-[900px]:leading-[0.96] min-[681px]:max-[900px]:[&>span]:whitespace-nowrap max-[680px]:text-[clamp(22px,6vw,27px)] max-[680px]:leading-[0.98] max-[680px]:tracking-[-0.025em] max-[680px]:[&>span]:whitespace-nowrap";

const scrollCueClass =
  'scroll-cue flex w-fit items-center gap-[clamp(18px,1.7vw,24px)] mt-[clamp(30px,4.2vh,46px)] min-[960px]:max-[1100px]:gap-3.5 min-[960px]:max-[1100px]:mt-[clamp(16px,2.4dvh,22px)] min-[681px]:max-[900px]:mt-[22px] min-[681px]:max-[900px]:gap-3 max-[680px]:mt-0';

const scrollIndicatorClass =
  'grid aspect-square w-[clamp(108px,8vw,120px)] place-items-center rounded-full border border-[rgba(17,17,15,0.32)] text-[clamp(3.1rem,3.8vw,4.35rem)] leading-none font-extralight min-[960px]:max-[1100px]:w-[clamp(78px,8.8vw,92px)] min-[960px]:max-[1100px]:text-[clamp(2.35rem,3.5vw,3rem)] min-[681px]:max-[900px]:w-[78px] min-[681px]:max-[900px]:text-[2.45rem] max-[680px]:w-[72px] max-[680px]:text-[2.35rem]';

const scrollLabelClass =
  'block text-[clamp(0.68rem,0.7vw,0.78rem)] leading-[1.16] font-[460] tracking-[0.02em] uppercase max-[680px]:text-[11px] max-[680px]:leading-[1.12]';

const copyClass =
  'hero-copy z-[5] col-start-3 w-[min(100%,392px)] self-end justify-self-end pb-[clamp(48px,8vh,88px)] min-[960px]:max-[1100px]:w-[min(100%,292px)] min-[960px]:max-[1100px]:pb-[clamp(12px,2.1dvh,18px)] max-[900px]:col-start-2 max-[900px]:max-w-none max-[900px]:pb-[34px] min-[681px]:max-[900px]:col-start-3 min-[681px]:max-[900px]:w-[205px] min-[681px]:max-[900px]:pb-[30px] max-[680px]:order-3 max-[680px]:w-full max-[680px]:max-w-none max-[680px]:pb-[44px]';

const copyTextClass =
  "m-0 w-[min(100%,310px)] font-['Helvetica_Neue',Helvetica,Arial,ui-sans-serif,system-ui,sans-serif] text-[clamp(17px,1.32vw,19px)] leading-[1.12] font-[410] tracking-[-0.012em] text-left min-[960px]:max-[1100px]:w-[min(100%,264px)] min-[960px]:max-[1100px]:text-[clamp(14px,1.48vw,16px)] min-[960px]:max-[1100px]:leading-[1.1] min-[681px]:max-[900px]:w-[205px] min-[681px]:max-[900px]:text-[13.5px] min-[681px]:max-[900px]:leading-[1.08] max-[680px]:w-full max-[680px]:max-w-[390px] max-[680px]:text-[clamp(18px,4.8vw,21px)] max-[680px]:leading-[1.08]";

const servicesClass =
  "border-b border-[var(--rule)] py-3.5 text-left font-['Helvetica_Neue',Helvetica,Arial,ui-sans-serif,system-ui,sans-serif] text-[clamp(13px,0.95vw,15px)] leading-none font-[420] tracking-[-0.006em] uppercase min-[960px]:max-[1100px]:py-2 min-[960px]:max-[1100px]:text-[clamp(11.5px,1.18vw,12.5px)] min-[681px]:max-[900px]:py-[7px] min-[681px]:max-[900px]:text-[12.5px] max-[680px]:mt-[28px] max-[680px]:border-t max-[680px]:border-b-0 max-[680px]:py-0";

const serviceItemClass =
  "border-b border-[var(--rule)] py-3.5 text-left font-['Helvetica_Neue',Helvetica,Arial,ui-sans-serif,system-ui,sans-serif] text-[clamp(13px,0.95vw,15px)] leading-none font-[420] tracking-[-0.006em] uppercase min-[960px]:max-[1100px]:py-2 min-[960px]:max-[1100px]:text-[clamp(11.5px,1.18vw,12.5px)] min-[681px]:max-[900px]:py-[7px] min-[681px]:max-[900px]:text-[13px] max-[680px]:py-[17px] max-[680px]:text-[clamp(14px,3.8vw,16px)]";

export function Hero() {
  const heroRef = useRef(null);

  useEffect(() => {
    const root = heroRef.current;
    if (!root) return undefined;

    const reducedMotion = window.matchMedia(
      '(prefers-reduced-motion: reduce)',
    ).matches;

    if (reducedMotion) {
      gsap.set(root.querySelectorAll('[data-reveal]'), {
        clearProps: 'all',
        opacity: 1,
        y: 0,
      });
      return undefined;
    }

    const ctx = gsap.context(() => {
      const timeline = gsap.timeline({ defaults: { ease: 'power3.out' } });

      timeline
        .from('[data-nav]', { y: -18, opacity: 0, duration: 0.7 })
        .from(
          '[data-headline-line] span',
          { yPercent: 105, duration: 1.05, stagger: 0.13 },
          '-=0.3',
        )
        .from(
          '[data-portrait]',
          { y: 52, opacity: 0, duration: 1.05 },
          '-=0.72',
        )
        .from(
          '[data-support]',
          { y: 24, opacity: 0, duration: 0.8, stagger: 0.08 },
          '-=0.58',
        )
        .from('[data-tech-strip]', { y: 20, opacity: 0, duration: 0.65 }, '-=0.24');

      gsap.to('[data-headline]', {
        yPercent: -7,
        ease: 'none',
        scrollTrigger: {
          trigger: root,
          start: 'top top',
          end: 'bottom top',
          scrub: true,
        },
      });

      gsap.to('[data-portrait]', {
        yPercent: 4,
        ease: 'none',
        scrollTrigger: {
          trigger: root,
          start: 'top top',
          end: 'bottom top',
          scrub: true,
        },
      });
    }, root);

    return () => {
      ctx.revert();
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return (
    <section className={sectionClass} id="home" ref={heroRef}>
      <div className={innerClass}>
        <HeroHeadline />

        <div className={lowerClass}>
          <aside className={roleClass} data-support>
            <p className={roleTextClass}>
              {profile.roleLines.map((line) => (
                <span className="block" key={line}>{line}</span>
              ))}
            </p>
            <a className={scrollCueClass} href="#hero-tech" aria-label="Scroll to core technologies">
              <span className={scrollIndicatorClass} aria-hidden="true">
                {'\u2198'}
              </span>
              <span className={scrollLabelClass}>
                <span className="block">SCROLL TO</span>
                <span className="block">EXPLORE</span>
              </span>
            </a>
          </aside>

          <HeroPortrait />

          <aside className={copyClass} data-support>
            <p className={copyTextClass}>
              {heroCopy.map((line) => (
                <span className="block" key={line}>{line}</span>
              ))}
            </p>
            <ul className={servicesClass} aria-label="Development services">
              {editorialServices.map((service) => (
                <li className={serviceItemClass} key={service}>{service}</li>
              ))}
            </ul>
          </aside>
        </div>
      </div>

    </section>
  );
}