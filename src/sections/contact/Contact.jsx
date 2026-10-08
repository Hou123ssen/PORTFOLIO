import { useCallback, useEffect, useRef, useState } from 'react';
import { profile } from '../../data/profile.js';
import { gsap, ScrollTrigger } from '../../lib/gsap.js';
import { ContactModal } from './ContactModal.jsx';

const currentYear = new Date().getFullYear();

const footerLinks = [
  {
    label: 'GitHub',
    href: profile.links.github,
    external: true,
  },
  {
    label: 'LinkedIn',
    href: profile.links.linkedin,
    external: true,
  },
  {
    label: 'Email',
    href: `mailto:${profile.email}`,
    external: false,
  },
];

const sectionClass =
  'border-t border-[rgba(245,243,238,0.18)] bg-[var(--ink)] px-[var(--gutter)] py-[clamp(64px,8vw,126px)] pb-[clamp(28px,4vw,54px)] text-[var(--paper)] min-[681px]:max-[959px]:px-8 min-[681px]:max-[959px]:py-16 min-[681px]:max-[959px]:pb-8 max-[680px]:overflow-x-clip max-[680px]:py-12 max-[680px]:pb-7';

const innerClass = 'mx-auto max-w-[1600px] max-[360px]:w-full max-[360px]:min-w-0 max-[360px]:max-w-full';

const mainClass =
  'grid gap-[clamp(34px,5vw,78px)] xl:grid-cols-[minmax(0,0.72fr)_minmax(300px,0.28fr)] xl:items-center min-[960px]:max-[1279px]:grid-cols-[minmax(0,0.64fr)_minmax(280px,0.36fr)] min-[960px]:max-[1279px]:items-center min-[960px]:max-[1279px]:gap-10 max-[360px]:w-full max-[360px]:min-w-0 max-[360px]:max-w-full';

const eyebrowClass =
  "mb-[clamp(28px,4vw,54px)] flex items-center gap-3 font-['Helvetica_Neue',Helvetica,Arial,ui-sans-serif,system-ui,sans-serif] text-[0.72rem] font-[560] leading-none uppercase tracking-[0.035em] text-[rgba(245,243,238,0.58)] max-[680px]:mb-7";

const headlineClass =
  "m-0 font-['Helvetica_Neue',Helvetica,Arial,ui-sans-serif,system-ui,sans-serif] text-[clamp(4.1rem,7vw,8.2rem)] font-[780] uppercase leading-[0.84] tracking-[-0.058em] min-[960px]:max-[1279px]:text-[clamp(4rem,8vw,7rem)] min-[681px]:max-[959px]:text-[clamp(4.4rem,12.5vw,7rem)] max-[680px]:text-[clamp(2.5rem,10.5vw,3.25rem)] max-[680px]:leading-[0.88] max-[680px]:tracking-[-0.05em] max-[360px]:w-full max-[360px]:min-w-0 max-[360px]:max-w-full max-[360px]:text-[2rem] max-[360px]:leading-[0.9] max-[360px]:tracking-[-0.055em]";

const copyClass =
  "m-0 max-w-[390px] font-['Helvetica_Neue',Helvetica,Arial,ui-sans-serif,system-ui,sans-serif] text-[clamp(1rem,1.08vw,1.12rem)] font-[410] leading-[1.34] tracking-[-0.01em] text-[rgba(245,243,238,0.72)] min-[681px]:max-[959px]:max-w-[520px] max-[680px]:max-w-none max-[360px]:w-full max-[360px]:min-w-0 max-[360px]:max-w-full";

const ctaClass =
  "group inline-flex w-fit cursor-pointer items-center gap-3 border border-[var(--paper)] bg-[var(--paper)] px-5 py-3 font-['Helvetica_Neue',Helvetica,Arial,ui-sans-serif,system-ui,sans-serif] text-[0.78rem] font-[560] uppercase tracking-[0.025em] text-[var(--ink)] transition-colors duration-300 ease-out hover:border-[#e9e5dc] hover:bg-[#e9e5dc] focus-visible:border-[#e9e5dc] focus-visible:bg-[#e9e5dc] focus-visible:outline focus-visible:outline-1 focus-visible:outline-offset-4 focus-visible:outline-[var(--paper)]";

const footerClass =
  'mt-[clamp(58px,8vw,120px)] border-t border-[rgba(245,243,238,0.16)] pt-[clamp(22px,2.7vw,36px)]';

const footerLogoClass =
  "block aspect-[772/392] w-12 bg-current text-[var(--paper)] [-webkit-mask:url('/images/hd-logo.svg')_center/contain_no-repeat] [mask:url('/images/hd-logo.svg')_center/contain_no-repeat]";

const toastText = "Message sent successfully. I'll get back to you soon.";

export function Contact() {
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);
  const [isToastVisible, setIsToastVisible] = useState(false);
  const sectionRef = useRef(null);
  const contactTriggerRef = useRef(null);

  const closeContactModal = useCallback(() => {
    setIsContactModalOpen(false);
  }, []);

  const handleContactSuccess = useCallback(() => {
    setIsContactModalOpen(false);
    setIsToastVisible(true);
    window.setTimeout(() => contactTriggerRef.current?.focus(), 0);
  }, []);

  useEffect(() => {
    if (!isToastVisible) {
      return undefined;
    }

    const toastTimer = window.setTimeout(() => {
      setIsToastVisible(false);
    }, 3500);

    return () => {
      window.clearTimeout(toastTimer);
    };
  }, [isToastVisible]);

  useEffect(() => {
    const root = sectionRef.current;
    if (!root) return undefined;

    const reducedMotion = window.matchMedia(
      '(prefers-reduced-motion: reduce)',
    ).matches;
    const revealTargets = root.querySelectorAll(
      '[data-contact-reveal], [data-contact-headline-line], [data-contact-great], [data-footer-reveal], [data-footer-rule]',
    );

    if (reducedMotion) {
      gsap.set(revealTargets, {
        clearProps: 'all',
        clipPath: 'inset(0% 0% 0% 0%)',
        opacity: 1,
        scaleX: 1,
        x: 0,
        y: 0,
      });
      ScrollTrigger.refresh();
      return undefined;
    }

    const ctx = gsap.context(() => {
      const media = gsap.matchMedia();

      const createContactTimeline = ({ start, end, scrub }) => {
        gsap.timeline({
          defaults: { ease: 'none' },
          scrollTrigger: {
            trigger: root,
            start,
            end,
            scrub,
            invalidateOnRefresh: true,
          },
        })
          .fromTo(
            '[data-contact-reveal="eyebrow"]',
            { x: -16, opacity: 0 },
            { x: 0, opacity: 1, duration: 0.2 },
            0,
          )
          .fromTo(
            '[data-contact-headline-line="build"]',
            { x: -20, clipPath: 'inset(0% 100% 0% 0%)' },
            { x: 0, clipPath: 'inset(0% 0% 0% 0%)', duration: 0.34 },
            0.08,
          )
          .fromTo(
            '[data-contact-headline-line="something"]',
            { x: -18, clipPath: 'inset(0% 100% 0% 0%)' },
            { x: 0, clipPath: 'inset(0% 0% 0% 0%)', duration: 0.38 },
            0.2,
          )
          .fromTo(
            '[data-contact-great]',
            { x: 18, opacity: 0 },
            { x: 0, opacity: 1, duration: 0.33 },
            0.35,
          )
          .fromTo(
            '[data-contact-reveal="copy"]',
            { x: -20, opacity: 0 },
            { x: 0, opacity: 1, duration: 0.25 },
            0.55,
          )
          .fromTo(
            '[data-contact-reveal="cta"]',
            { x: -14, clipPath: 'inset(0% 100% 0% 0%)' },
            { x: 0, clipPath: 'inset(0% 0% 0% 0%)', duration: 0.24 },
            0.7,
          )
          .fromTo(
            '[data-contact-reveal="cta-arrow"]',
            { x: -6, opacity: 0 },
            { x: 0, opacity: 1, duration: 0.18 },
            0.76,
          );
      };

      const createFooterTimeline = (end = 'bottom bottom') => {
        gsap.timeline({
          defaults: { ease: 'none' },
          scrollTrigger: {
            trigger: root.querySelector('[data-footer]'),
            start: 'top 95%',
            end,
            scrub: 0.6,
            invalidateOnRefresh: true,
          },
        })
          .fromTo(
            '[data-footer-rule]',
            { scaleX: 0 },
            { scaleX: 1, duration: 0.28 },
            0,
          )
          .fromTo(
            '[data-footer-reveal]',
            { y: 10, opacity: 0 },
            { y: 0, opacity: 1, duration: 0.22, stagger: 0.06 },
            0.12,
          );
      };

      media.add('(max-width: 680px)', () => {
        createContactTimeline({
          start: 'top 90%',
          end: () => ScrollTrigger.maxScroll(window),
          scrub: 0.65,
        });
        createFooterTimeline(() => ScrollTrigger.maxScroll(window));
      });

      media.add('(min-width: 681px)', () => {
        createContactTimeline({
          start: 'top 88%',
          end: 'bottom bottom',
          scrub: 0.8,
        });
        createFooterTimeline();
      });

      return () => {
        media.revert();
      };
    }, root);

    return () => {
      ctx.revert();
    };
  }, []);

  return (
    <>
      <section className={sectionClass} id="contact" aria-labelledby="contact-title" ref={sectionRef}>
        <div className={innerClass}>
          <div className={mainClass}>
            <div className="max-[360px]:w-full max-[360px]:min-w-0 max-[360px]:max-w-full">
              <p className={eyebrowClass} data-contact-reveal="eyebrow">
                <span>05</span>
                <span>/</span>
                <span>CONTACT</span>
                <span className="h-px w-[86px] bg-[rgba(245,243,238,0.22)]" aria-hidden="true" />
              </p>

              <h2 className={headlineClass} id="contact-title">
                <span className="block" data-contact-headline-line="build">LET&apos;S BUILD</span>
                <span className="block max-w-full overflow-visible max-[680px]:whitespace-nowrap max-[360px]:max-w-full max-[360px]:text-[clamp(1.62rem,8.2vw,1.78rem)] max-[360px]:tracking-[-0.06em] max-[360px]:whitespace-nowrap xl:whitespace-nowrap">
                  <span className="inline-block" data-contact-headline-line="something">SOMETHING </span>
                  <span className="inline-block text-[rgba(245,243,238,0.42)]" data-contact-great>GREAT</span>
                </span>
              </h2>
            </div>

            <div className="grid content-center gap-7 xl:pt-[clamp(64px,7vw,112px)] min-[960px]:max-[1279px]:pt-16">
              <p className={copyClass} data-contact-reveal="copy">
                Have a project in mind, a SaaS idea, or just want to connect?
                I&apos;m open to discussing full-stack development, UI/UX, and new
                opportunities.
              </p>

              <button
                className={ctaClass}
                onClick={() => setIsContactModalOpen(true)}
                ref={contactTriggerRef}
                type="button"
                data-contact-reveal="cta"
              >
                <span className="text-[var(--ink)]">GET IN TOUCH</span>
                <span
                  className="inline-block text-[var(--ink)] transition-transform duration-300 ease-out group-hover:translate-x-1 group-focus-visible:translate-x-1"
                  data-contact-reveal="cta-arrow"
                  aria-hidden="true"
                >
                  {'\u2192'}
                </span>
              </button>
            </div>
          </div>

          <footer className={`${footerClass} relative`} data-footer>
            <span
              className="pointer-events-none absolute left-0 top-0 h-px w-full origin-left bg-[rgba(245,243,238,0.16)]"
              data-footer-rule
              aria-hidden="true"
            />
            <div className="grid gap-7 min-[960px]:grid-cols-[minmax(260px,1fr)_auto_auto] min-[960px]:items-center min-[681px]:max-[959px]:grid-cols-2 min-[681px]:max-[959px]:items-start">
              <div data-footer-reveal>
                <span className={footerLogoClass} aria-hidden="true" />
                <p className="mt-3 m-0 font-['Helvetica_Neue',Helvetica,Arial,ui-sans-serif,system-ui,sans-serif] text-[0.76rem] font-[410] leading-[1.25] tracking-[-0.004em] text-[rgba(245,243,238,0.58)]">
                  &copy; {currentYear} Houssen Doudli. All rights reserved.
                </p>
              </div>

              <nav
                className="flex flex-wrap items-center gap-x-6 gap-y-3 font-['Helvetica_Neue',Helvetica,Arial,ui-sans-serif,system-ui,sans-serif] text-[0.76rem] font-[520] uppercase tracking-[0.025em] text-[rgba(245,243,238,0.72)] min-[681px]:max-[959px]:justify-end max-[680px]:gap-x-5"
                aria-label="Footer links"
                data-footer-reveal
              >
                {footerLinks.map((link) => (
                  <a
                    className="transition-colors duration-300 ease-out hover:text-[var(--paper)] focus-visible:outline focus-visible:outline-1 focus-visible:outline-offset-4 focus-visible:outline-[var(--paper)]"
                    href={link.href}
                    target={link.external ? '_blank' : undefined}
                    rel={link.external ? 'noopener noreferrer' : undefined}
                    key={link.label}
                  >
                    {link.label}
                  </a>
                ))}
              </nav>

              <a
                className="group inline-flex w-fit items-center gap-3 justify-self-start font-['Helvetica_Neue',Helvetica,Arial,ui-sans-serif,system-ui,sans-serif] text-[0.76rem] font-[520] uppercase tracking-[0.025em] text-[rgba(245,243,238,0.72)] transition-colors duration-300 ease-out hover:text-[var(--paper)] focus-visible:outline focus-visible:outline-1 focus-visible:outline-offset-4 focus-visible:outline-[var(--paper)] min-[960px]:justify-self-end min-[681px]:max-[959px]:col-span-2"
                href="#home"
                data-footer-reveal
              >
                <span className="grid aspect-square w-9 place-items-center rounded-full border border-[rgba(245,243,238,0.28)] transition-colors duration-300 ease-out group-hover:border-[var(--paper)] group-hover:bg-[var(--paper)] group-hover:text-[var(--ink)] group-focus-visible:border-[var(--paper)] group-focus-visible:bg-[var(--paper)] group-focus-visible:text-[var(--ink)]">
                  <span className="inline-block transition-transform duration-300 ease-out group-hover:-translate-y-0.5 group-focus-visible:-translate-y-0.5" aria-hidden="true">
                    {'\u2191'}
                  </span>
                </span>
                <span>BACK TO TOP</span>
              </a>
            </div>
          </footer>
        </div>
      </section>
      <ContactModal
        isOpen={isContactModalOpen}
        onClose={closeContactModal}
        onSuccessComplete={handleContactSuccess}
      />
      <div
        aria-live="polite"
        className={`fixed bottom-5 right-5 z-[90] max-w-[min(360px,calc(100vw-32px))] border border-[rgba(17,17,15,0.18)] bg-[var(--paper)] px-4 py-3 font-['Helvetica_Neue',Helvetica,Arial,ui-sans-serif,system-ui,sans-serif] text-sm font-[420] leading-[1.25] tracking-[-0.005em] text-[var(--ink)] transition-all duration-300 ease-out max-[680px]:left-4 max-[680px]:right-4 max-[680px]:bottom-4 max-[680px]:max-w-none ${
          isToastVisible
            ? 'translate-y-0 opacity-100'
            : 'pointer-events-none translate-y-3 opacity-0'
        }`}
        role="status"
      >
        {toastText}
      </div>
    </>
  );
}
