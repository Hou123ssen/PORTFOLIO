const stats = [
  {
    value: '03',
    label: 'FULL-STACK PROJECTS',
  },
  {
    value: '02',
    label: 'LIVE DEPLOYMENTS',
  },
  {
    value: '06',
    label: 'CORE TECHNOLOGIES',
  },
];

const headlineLines = ['A FULL-STACK', 'DEVELOPER FOCUSED', 'ON REAL SYSTEMS'];

const sectionClass =
  'border-t border-[var(--rule)] bg-[var(--paper)] px-[var(--gutter)] py-[clamp(72px,9vw,138px)] text-[var(--ink)] min-[681px]:max-[959px]:px-8 min-[681px]:max-[959px]:py-16 max-[680px]:py-14';

const innerClass =
  'mx-auto grid max-w-[1600px] gap-[clamp(34px,4.4vw,70px)] xl:grid-cols-[minmax(0,0.3fr)_minmax(0,0.5fr)_minmax(190px,0.2fr)] xl:items-start min-[960px]:max-[1279px]:grid-cols-[minmax(220px,0.3fr)_minmax(0,0.48fr)_minmax(150px,0.22fr)] min-[960px]:max-[1279px]:gap-8 min-[681px]:max-[959px]:grid-cols-[minmax(220px,0.42fr)_minmax(0,0.58fr)] min-[681px]:max-[959px]:gap-x-8 min-[681px]:max-[959px]:gap-y-9';

const eyebrowClass =
  "mb-[clamp(28px,4vw,54px)] flex items-center gap-3 font-['Helvetica_Neue',Helvetica,Arial,ui-sans-serif,system-ui,sans-serif] text-[0.72rem] font-[560] leading-none uppercase tracking-[0.035em] text-[var(--muted)] min-[681px]:max-[959px]:col-span-2 min-[681px]:max-[959px]:mb-0";

const portraitClass =
  'aspect-[4/5] w-full min-w-0 object-cover object-[50%_24%] grayscale max-[680px]:aspect-[5/6]';

const headlineClass =
  "m-0 font-['Helvetica_Neue',Helvetica,Arial,ui-sans-serif,system-ui,sans-serif] text-[clamp(3.05rem,5.8vw,7.35rem)] font-[780] uppercase leading-[0.86] tracking-[-0.055em] min-[960px]:max-[1279px]:text-[clamp(3.05rem,5.1vw,4.85rem)] min-[681px]:max-[959px]:text-[clamp(3.4rem,8.2vw,5rem)] max-[680px]:text-[clamp(3rem,15vw,4.85rem)]";

const descriptionClass =
  "m-0 max-w-[680px] font-['Helvetica_Neue',Helvetica,Arial,ui-sans-serif,system-ui,sans-serif] text-[clamp(1rem,1.14vw,1.16rem)] font-[410] leading-[1.35] tracking-[-0.012em] text-[var(--muted)] min-[681px]:max-[959px]:max-w-none max-[680px]:max-w-none max-[680px]:text-[1rem]";

const ctaClass =
  "group inline-flex w-fit items-center gap-3 border border-[var(--ink)] bg-[var(--ink)] px-5 py-3 font-['Helvetica_Neue',Helvetica,Arial,ui-sans-serif,system-ui,sans-serif] text-[0.78rem] font-[560] uppercase tracking-[0.025em] text-[#f5f3ee] transition-colors duration-300 ease-out hover:bg-transparent hover:text-[var(--ink)] focus-visible:bg-transparent focus-visible:text-[var(--ink)] focus-visible:outline focus-visible:outline-1 focus-visible:outline-offset-4 focus-visible:outline-[var(--ink)]";

const statsClass =
  'grid self-start border-y border-[var(--rule)] xl:border-t-0 min-[960px]:max-[1279px]:border-t-0 min-[681px]:max-[959px]:col-span-2 min-[681px]:max-[959px]:grid-cols-3 min-[681px]:max-[959px]:border-y max-[680px]:border-y';

export function About() {
  return (
    <section className={sectionClass} id="about" aria-labelledby="about-title">
      <div className={innerClass}>
        <div>
          <p className={eyebrowClass}>
            <span>03</span>
            <span>/</span>
            <span>ABOUT</span>
            <span className="h-px w-[86px] bg-[var(--rule)]" aria-hidden="true" />
          </p>

          <img
            className={portraitClass}
            src="/images/houssen_doudli.png"
            alt="Houssen Doudli portrait"
            loading="lazy"
            decoding="async"
          />
        </div>

        <div className="grid content-start gap-[clamp(24px,3vw,42px)] min-[681px]:max-[959px]:pt-[clamp(44px,7vw,72px)]">
          <h2 className={headlineClass} id="about-title">
            {headlineLines.map((line, index) => (
              <span className={index === 1 ? 'block text-[var(--muted)]' : 'block'} key={line}>
                {line}
              </span>
            ))}
          </h2>

          <p className={descriptionClass}>
            I'm a full-stack web developer with a strong focus on UI/UX design and SaaS products. I build practical, production-minded applications from interface to API and database, combining clean architecture with thoughtful, responsive user experiences. I care about turning complex workflows into clear, reliable, and visually refined digital products.
          </p>

          <a
            className={ctaClass}
            href="/cv/CV_Houssen_Doudli_Final.pdf"
            target="_blank"
            rel="noopener noreferrer"
          >
            <span className="transition-colors duration-300 ease-out group-hover:text-[var(--ink)] group-focus-visible:text-[var(--ink)]">VIEW MY CV</span>
            <span
              className="inline-block transition duration-300 ease-out group-hover:translate-x-1 group-hover:text-[var(--ink)] group-focus-visible:translate-x-1 group-focus-visible:text-[var(--ink)]"
              aria-hidden="true"
            >
              {'\u2192'}
            </span>
          </a>
        </div>

        <div className={statsClass} aria-label="Portfolio statistics">
          {stats.map((stat, index) => (
            <div
              className={`py-7 min-[681px]:max-[959px]:px-5 min-[681px]:max-[959px]:py-5 ${
                index > 0
                  ? 'border-t border-[var(--rule)] min-[681px]:max-[959px]:border-l min-[681px]:max-[959px]:border-t-0'
                  : ''
              }`}
              key={stat.label}
            >
              <p className="m-0 font-['Helvetica_Neue',Helvetica,Arial,ui-sans-serif,system-ui,sans-serif] text-[clamp(3.1rem,5vw,5.85rem)] font-[760] leading-none tracking-[-0.055em] min-[960px]:max-[1279px]:text-[clamp(2.8rem,4.8vw,4.2rem)] min-[681px]:max-[959px]:text-[clamp(2.8rem,7vw,4.4rem)] max-[680px]:text-[3.4rem]">
                {stat.value}
              </p>
              <p className="mt-3 m-0 max-w-[11rem] font-['Helvetica_Neue',Helvetica,Arial,ui-sans-serif,system-ui,sans-serif] text-[0.74rem] font-[560] uppercase leading-[1.05] tracking-[0.035em] text-[var(--muted)] min-[681px]:max-[959px]:max-w-[8.5rem]">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
