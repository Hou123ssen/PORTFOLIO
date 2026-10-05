import { technologies } from '../../data/profile.js';

const stripClass =
  'relative z-[8] grid min-h-[88px] grid-cols-[auto_1px_1fr] items-center gap-[clamp(24px,3.5vw,52px)] border-y border-[rgba(17,17,15,0.22)] bg-[var(--paper)] px-[var(--gutter)] py-4 max-[900px]:grid-cols-[auto_1px_1fr] min-[681px]:max-[900px]:gap-4 min-[681px]:max-[900px]:px-6 max-[680px]:grid-cols-1 max-[680px]:gap-[22px] max-[680px]:min-h-0 max-[680px]:px-[26px] max-[680px]:py-[28px]';

const labelClass =
  'min-w-[clamp(118px,13vw,190px)] text-[clamp(0.72rem,0.76vw,0.84rem)] leading-[1.05] font-[620] uppercase max-[680px]:min-w-0 max-[680px]:text-[0.78rem]';

const dividerClass =
  'h-12 w-px bg-[rgba(17,17,15,0.24)] max-[680px]:hidden';

const listClass =
  'm-0 flex flex-wrap items-center gap-y-2.5 text-[clamp(0.95rem,1.22vw,1.34rem)] font-[420] min-[681px]:max-[900px]:text-[0.9rem] max-[680px]:grid max-[680px]:grid-cols-2 max-[680px]:items-center max-[680px]:gap-x-[22px] max-[680px]:gap-y-[18px] max-[680px]:text-[clamp(1rem,4.3vw,1.12rem)]';

const itemClass =
  'inline-flex items-center max-[680px]:min-w-0 max-[680px]:whitespace-nowrap';

const separatorClass =
  'mx-[clamp(12px,2vw,30px)] text-[var(--muted)] not-italic min-[681px]:max-[900px]:mx-2 max-[680px]:hidden';

export function TechStrip() {
  return (
    <section
      className={stripClass}
      id="hero-tech"
      data-tech-strip
      aria-label="Core technologies"
    >
      <div className={labelClass}>
        <span className="block">CORE</span>
        <span className="block">TECHNOLOGIES</span>
      </div>

      <div className={dividerClass} aria-hidden="true" />

     <p className={listClass}>
  {technologies.map((technology, index) => (
    <span className={itemClass} key={technology}>
      {technology}

      {index < technologies.length - 1 && (
        <i className={separatorClass} aria-hidden="true">
          •
        </i>
      )}
    </span>
  ))}
</p>
    </section>
  );
}