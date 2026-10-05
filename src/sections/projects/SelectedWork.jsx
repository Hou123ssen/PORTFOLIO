import { selectedProjects } from '../../data/profile.js';

const sectionClass =
  'bg-[var(--paper)] px-[var(--gutter)] pt-[clamp(42px,6vw,86px)] pb-[clamp(72px,10vw,140px)] text-[var(--ink)] min-[681px]:max-[959px]:px-8 min-[681px]:max-[959px]:pt-14';

const headerClass =
  'mx-auto grid max-w-[1600px] gap-[clamp(26px,4vw,58px)] min-[681px]:max-[959px]:gap-7 lg:grid-cols-[minmax(360px,0.95fr)_minmax(300px,0.58fr)_auto] lg:items-start';

const eyebrowClass =
  "mb-[clamp(28px,4vw,54px)] flex items-center gap-3 font-['Helvetica_Neue',Helvetica,Arial,ui-sans-serif,system-ui,sans-serif] text-[0.72rem] font-[560] leading-none uppercase tracking-[0.035em] text-[var(--muted)] min-[681px]:max-[959px]:mb-8";

const titleClass =
  "m-0 max-w-[680px] font-['Helvetica_Neue',Helvetica,Arial,ui-sans-serif,system-ui,sans-serif] text-[clamp(3.9rem,9.2vw,8.8rem)] leading-[0.84] font-[780] tracking-[-0.055em] uppercase min-[681px]:max-[959px]:text-[clamp(4.8rem,11vw,6.5rem)]";

const introClass =
  'grid gap-[clamp(22px,2.6vw,38px)] justify-self-start min-[681px]:max-[959px]:gap-5 min-[681px]:max-[959px]:max-w-[430px] lg:max-w-[520px] lg:pt-[clamp(72px,8vw,112px)]';

const introTextClass =
  "m-0 max-w-[500px] font-['Helvetica_Neue',Helvetica,Arial,ui-sans-serif,system-ui,sans-serif] text-[clamp(1rem,1.18vw,1.18rem)] leading-[1.2] font-[410] tracking-[-0.012em] uppercase min-[681px]:max-[959px]:max-w-[430px] min-[681px]:max-[959px]:text-[16px] min-[681px]:max-[959px]:leading-[1.22]";

const viewAllClass =
  "group inline-flex w-fit items-center gap-[clamp(14px,1.7vw,22px)] justify-self-start font-['Helvetica_Neue',Helvetica,Arial,ui-sans-serif,system-ui,sans-serif] text-[clamp(0.76rem,0.86vw,0.92rem)] font-[540] uppercase tracking-[0.02em] text-[var(--ink)] transition-colors duration-300 ease-out focus-visible:outline focus-visible:outline-1 focus-visible:outline-offset-4 focus-visible:outline-[var(--ink)] min-[681px]:max-[959px]:text-[0.86rem] lg:justify-self-end lg:pt-[clamp(72px,8vw,112px)]";

const viewAllButtonClass =
  'grid aspect-square w-[clamp(76px,7vw,108px)] place-items-center rounded-full border border-[rgba(17,17,15,0.32)] bg-transparent text-[clamp(2.05rem,2.6vw,3rem)] leading-none text-[var(--ink)] transition-colors duration-300 ease-out group-hover:border-[var(--ink)] group-hover:bg-[var(--ink)] group-hover:text-[var(--paper)] group-focus-visible:border-[var(--ink)] group-focus-visible:bg-[var(--ink)] group-focus-visible:text-[var(--paper)] min-[681px]:max-[959px]:w-[68px] min-[681px]:max-[959px]:text-[2.2rem]';

const gridClass =
  'mx-auto mt-[clamp(42px,5.6vw,78px)] grid max-w-[1600px] gap-[clamp(22px,2.4vw,34px)] min-[681px]:max-[959px]:grid-cols-2 min-[681px]:max-[959px]:gap-5 md:grid-cols-2 xl:grid-cols-[minmax(0,1fr)_minmax(0,0.54fr)_minmax(0,0.46fr)] xl:items-start';

const cardGridClass = {
  true:
    'min-[681px]:max-[959px]:col-span-2 md:col-span-2 xl:col-span-1',

  false:
    'min-[681px]:max-[959px]:col-span-1 md:col-span-1 xl:col-span-1',
};

/*
  IMPORTANT:
  - Tablet stays exactly as designed:
      DigiBank 16:9
      Academy/LuxurrStay 4:5
  - Large desktop uses a much shorter shared media height.
  - This prevents Academy and LuxurrStay from being aggressively zoomed.
*/
const imageHeightClass = {
  true:
    'h-[clamp(390px,48vw,620px)] ' +
    'min-[681px]:max-[959px]:aspect-[16/9] ' +
    'min-[681px]:max-[959px]:!h-auto ' +
    'min-[681px]:max-[959px]:w-full ' +
    'md:h-[clamp(430px,48vw,560px)] ' +
    'xl:h-[clamp(360px,28vw,450px)]',

  false:
    'h-[clamp(360px,58vw,500px)] ' +
    'min-[681px]:max-[959px]:aspect-[4/5] ' +
    'min-[681px]:max-[959px]:!h-auto ' +
    'min-[681px]:max-[959px]:w-full ' +
    'md:h-[clamp(390px,43vw,500px)] ' +
    'xl:h-[clamp(360px,28vw,450px)]',
};

const overlayTextClass = {
  true:
    "text-[clamp(2.35rem,4.35vw,4.9rem)] leading-[0.9] tracking-[-0.052em] min-[681px]:max-[959px]:text-[clamp(2rem,5.2vw,2.75rem)]",

  false:
    "text-[clamp(1.72rem,2.18vw,2.5rem)] leading-[0.92] tracking-[-0.045em] min-[681px]:max-[959px]:text-[clamp(1.38rem,3.55vw,1.9rem)]",
};

function ProjectCard({ project }) {
  const featured = Boolean(project.featured);

  return (
    <article className={cardGridClass[featured]}>
      <a
        className="group block"
        href={project.projectUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={`${project.ctaLabel} - ${project.title}`}
      >
        <figure
          className={`relative m-0 overflow-hidden bg-[var(--ink)] ${imageHeightClass[featured]}`}
        >
          <img
            className={`h-full w-full object-cover ${
              project.imagePosition ?? 'object-center'
            } opacity-[0.94] transition duration-500 ease-out lg:group-hover:scale-[1.02] lg:group-focus-visible:scale-[1.02]`}
            src={project.cover}
            alt={`${project.title} project cover`}
            loading="lazy"
            decoding="async"
          />

          <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(17,17,15,0.38)_0%,rgba(17,17,15,0.08)_46%,rgba(17,17,15,0.48)_100%)] opacity-80 transition-opacity duration-400 ease-out lg:opacity-60 lg:group-hover:opacity-100 lg:group-focus-visible:opacity-100" />

          <figcaption className="absolute inset-0 flex flex-col justify-between p-[clamp(18px,2.15vw,30px)] text-[#f5f3ee] min-[681px]:max-[959px]:p-5">
            <span className="font-['Helvetica_Neue',Helvetica,Arial,ui-sans-serif,system-ui,sans-serif] text-[0.82rem] font-[520] leading-none tracking-[0.02em]">
              {project.number}
            </span>

            <div>
              <p
                className={`pointer-events-none m-0 font-['Helvetica_Neue',Helvetica,Arial,ui-sans-serif,system-ui,sans-serif] font-[760] uppercase opacity-100 transition duration-400 ease-out lg:translate-y-[12px] lg:opacity-0 lg:group-hover:translate-y-0 lg:group-hover:opacity-100 lg:group-focus-visible:translate-y-0 lg:group-focus-visible:opacity-100 ${overlayTextClass[featured]}`}
              >
                {project.overlay.map((line) => (
                  <span className="block" key={line}>
                    {line}
                  </span>
                ))}
              </p>

              <span className="mt-[clamp(18px,2.1vw,28px)] inline-flex items-center gap-3 font-['Helvetica_Neue',Helvetica,Arial,ui-sans-serif,system-ui,sans-serif] text-[0.75rem] font-[560] uppercase tracking-[0.02em]">
                {project.ctaLabel}
                <span aria-hidden="true">{'\u2192'}</span>
              </span>
            </div>
          </figcaption>
        </figure>
      </a>

      <div className="grid gap-2.5 border-b border-[var(--rule)] py-5 min-[681px]:max-[959px]:gap-2 min-[681px]:max-[959px]:py-4">
        <div>
          <h3 className="m-0 font-['Helvetica_Neue',Helvetica,Arial,ui-sans-serif,system-ui,sans-serif] text-[clamp(1.45rem,2.1vw,2.35rem)] leading-none font-[650] tracking-[-0.035em] min-[681px]:max-[959px]:text-[clamp(1.38rem,3vw,1.6rem)]">
            {project.title}
          </h3>

          <p className="mt-2 m-0 max-w-[24rem] font-['Helvetica_Neue',Helvetica,Arial,ui-sans-serif,system-ui,sans-serif] text-[0.82rem] leading-[1.15] font-[430] uppercase tracking-[-0.004em] text-[var(--muted)] min-[681px]:max-[959px]:text-[0.82rem]">
            {project.category}
          </p>
        </div>

        <p className="m-0 max-w-[28rem] font-['Helvetica_Neue',Helvetica,Arial,ui-sans-serif,system-ui,sans-serif] text-[0.78rem] leading-[1.2] font-[430] text-[var(--ink)] min-[681px]:max-[959px]:text-[0.82rem]">
          {project.techStack}
        </p>
      </div>
    </article>
  );
}

export function SelectedWork() {
  return (
    <section
      className={sectionClass}
      id="projects"
      aria-labelledby="selected-work-title"
    >
      <header className={headerClass}>
        <div>
          <p className={eyebrowClass}>
            <span>02</span>
            <span>/</span>
            <span>PROJECTS</span>

            <span
              className="h-px w-[86px] bg-[var(--rule)]"
              aria-hidden="true"
            />
          </p>

          <h2 className={titleClass} id="selected-work-title">
            <span className="block">SELECTED</span>
            <span className="block text-[var(--muted)]">WORK</span>
          </h2>
        </div>

        <div className={introClass}>
          <p className={introTextClass}>
            A SELECTION OF FULL-STACK PROJECTS FOCUSED ON REAL-WORLD
            SYSTEMS, THOUGHTFUL USER EXPERIENCES, AND PRODUCTION-READY
            ARCHITECTURE.
          </p>
        </div>

        <a
          className={viewAllClass}
          href="https://github.com/Hou123ssen"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="View GitHub profile"
        >
          <span className={viewAllButtonClass} aria-hidden="true">
            <span className="inline-block transition-transform duration-300 ease-out group-hover:translate-x-1 group-hover:-translate-y-1 group-focus-visible:translate-x-1 group-focus-visible:-translate-y-1">
              {'\u2198'}
            </span>
          </span>

          <span>
            <span className="block">VIEW</span>
            <span className="block">GITHUB</span>
          </span>
        </a>
      </header>

      <div className={gridClass}>
        {selectedProjects.map((project) => (
          <ProjectCard project={project} key={project.title} />
        ))}
      </div>
    </section>
  );
}
