const services = [
  {
    number: '01',
    title: 'FULL-STACK WEB APPLICATION DEVELOPMENT',
    description:
      'Production-minded web applications built from responsive interfaces to backend APIs and databases.',
  },
  {
    number: '02',
    title: 'SAAS PRODUCT DEVELOPMENT',
    description:
      'Scalable SaaS products with authentication, dashboards, workflows, roles, and real product logic.',
  },
  {
    number: '03',
    title: 'UI/UX DESIGN & FRONTEND IMPLEMENTATION',
    description:
      'Thoughtful, responsive interfaces designed for clarity and implemented with modern frontend technologies.',
  },
  {
    number: '04',
    title: 'API DEVELOPMENT & INTEGRATION',
    description:
      'Reliable REST APIs and clean integrations connecting applications, backend services, and external systems.',
  },
];

const sectionClass =
  'border-t border-[var(--rule)] bg-[var(--paper)] px-[var(--gutter)] py-[clamp(64px,7vw,112px)] text-[var(--ink)] min-[681px]:max-[959px]:px-8 min-[681px]:max-[959px]:py-14 max-[680px]:py-12';

const innerClass =
  'mx-auto grid max-w-[1600px] gap-[clamp(36px,5vw,86px)] xl:grid-cols-[minmax(300px,0.38fr)_minmax(0,0.62fr)] xl:items-start min-[960px]:max-[1279px]:grid-cols-[minmax(250px,0.36fr)_minmax(0,0.64fr)] min-[960px]:max-[1279px]:gap-9';

const eyebrowClass =
  "mb-[clamp(28px,4vw,54px)] flex items-center gap-3 font-['Helvetica_Neue',Helvetica,Arial,ui-sans-serif,system-ui,sans-serif] text-[0.72rem] font-[560] leading-none uppercase tracking-[0.035em] text-[var(--muted)] min-[681px]:max-[959px]:mb-8 max-[680px]:mb-7";

const headingClass =
  "m-0 font-['Helvetica_Neue',Helvetica,Arial,ui-sans-serif,system-ui,sans-serif] text-[clamp(4rem,8.2vw,8.8rem)] font-[780] uppercase leading-[0.84] tracking-[-0.055em] min-[960px]:max-[1279px]:text-[clamp(3.65rem,7.2vw,5.8rem)] min-[681px]:max-[959px]:text-[clamp(4.45rem,13vw,7rem)] max-[680px]:text-[clamp(3.45rem,18vw,5.2rem)]";

const serviceListClass =
  'border-y border-[var(--rule)] xl:mt-[clamp(10px,1.5vw,22px)] min-[960px]:max-[1279px]:mt-2';

export function Services() {
  return (
    <section className={sectionClass} id="services" aria-labelledby="services-title">
      <div className={innerClass}>
        <div>
          <p className={eyebrowClass}>
            <span>04</span>
            <span>/</span>
            <span>SERVICES</span>
            <span className="h-px w-[86px] bg-[var(--rule)]" aria-hidden="true" />
          </p>

          <h2 className={headingClass} id="services-title">
            <span className="block">HOW I CAN</span>
            <span className="block text-[var(--muted)]">HELP</span>
          </h2>
        </div>

        <div className={serviceListClass}>
          {services.map((service, index) => (
            <article
              className={`group grid grid-cols-[54px_minmax(250px,1.1fr)_minmax(260px,0.9fr)_54px] items-center gap-[clamp(18px,2.3vw,34px)] py-[clamp(24px,2.7vw,38px)] transition-transform duration-300 ease-out hover:translate-x-1 focus-within:translate-x-1 min-[960px]:max-[1279px]:grid-cols-[48px_minmax(210px,1fr)_minmax(190px,0.82fr)_48px] min-[960px]:max-[1279px]:gap-5 min-[681px]:max-[959px]:grid-cols-[48px_minmax(0,1fr)_48px] min-[681px]:max-[959px]:gap-5 max-[680px]:grid-cols-[46px_minmax(0,1fr)_42px] max-[680px]:items-start max-[680px]:gap-x-4 max-[680px]:gap-y-3 max-[680px]:py-6 ${
                index > 0 ? 'border-t border-[var(--rule)]' : ''
              }`}
              key={service.title}
            >
              <span className="grid aspect-square w-[46px] place-items-center rounded-full border border-[rgba(17,17,15,0.28)] bg-transparent font-['Helvetica_Neue',Helvetica,Arial,ui-sans-serif,system-ui,sans-serif] text-[0.72rem] font-[560] leading-none tracking-[0.02em] text-[var(--ink)] transition-colors duration-300 ease-out group-hover:border-[var(--ink)] group-hover:bg-[var(--ink)] group-hover:text-[var(--paper)] group-focus-within:border-[var(--ink)] group-focus-within:bg-[var(--ink)] group-focus-within:text-[var(--paper)] min-[681px]:max-[1279px]:w-11 max-[680px]:w-10">
                {service.number}
              </span>

              <h3 className="m-0 font-['Helvetica_Neue',Helvetica,Arial,ui-sans-serif,system-ui,sans-serif] text-[clamp(1.05rem,1.45vw,1.55rem)] font-[620] uppercase leading-[1.02] tracking-[-0.024em] min-[960px]:max-[1279px]:text-[clamp(0.95rem,1.75vw,1.25rem)] min-[681px]:max-[959px]:text-[clamp(1rem,2.8vw,1.35rem)] max-[680px]:text-[1rem]">
                {service.title}
              </h3>

              <p className="m-0 font-['Helvetica_Neue',Helvetica,Arial,ui-sans-serif,system-ui,sans-serif] text-[clamp(0.9rem,0.96vw,1rem)] font-[410] leading-[1.28] tracking-[-0.006em] text-[var(--muted)] min-[681px]:max-[959px]:col-start-2 min-[681px]:max-[959px]:max-w-[34rem] max-[680px]:col-start-2 max-[680px]:col-end-4 max-[680px]:text-[0.94rem]">
                {service.description}
              </p>

              <a
                className="grid aspect-square w-[46px] place-items-center justify-self-end rounded-full border border-[rgba(17,17,15,0.28)] bg-transparent font-['Helvetica_Neue',Helvetica,Arial,ui-sans-serif,system-ui,sans-serif] text-[1.25rem] leading-none text-[var(--ink)] transition-colors duration-300 ease-out group-hover:border-[var(--ink)] group-hover:bg-[var(--ink)] group-hover:text-[var(--paper)] group-focus-within:border-[var(--ink)] group-focus-within:bg-[var(--ink)] group-focus-within:text-[var(--paper)] focus-visible:outline focus-visible:outline-1 focus-visible:outline-offset-4 focus-visible:outline-[var(--ink)] min-[681px]:max-[1279px]:w-11 max-[680px]:w-10 max-[680px]:text-[1.1rem]"
                href="#contact"
                aria-label={`Contact me about ${service.title}`}
              >
                <span className="inline-block transition-transform duration-300 ease-out group-hover:translate-x-1 group-focus-within:translate-x-1">
                  {'\u2192'}
                </span>
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
