const stripClass =
  'relative z-[8] overflow-hidden border-y border-[rgba(17,17,15,0.18)] bg-[var(--paper)] px-[var(--gutter)] py-[clamp(22px,2.7vw,34px)] min-[681px]:max-[900px]:px-6 max-[680px]:px-4 max-[680px]:py-6';

const innerClass = 'mx-auto grid max-w-[1600px] gap-[clamp(16px,2vw,24px)]';

const labelClass =
  "font-['Helvetica_Neue',Helvetica,Arial,ui-sans-serif,system-ui,sans-serif] text-[0.68rem] font-[620] uppercase leading-none tracking-[0.09em] text-[rgba(17,17,15,0.48)] max-[680px]:text-[0.64rem]";

const viewportClass =
  'relative -mx-[var(--gutter)] overflow-hidden min-[681px]:max-[900px]:-mx-6 max-[680px]:-mx-4';

const edgeClass =
  'pointer-events-none absolute inset-y-0 z-[2] w-[clamp(48px,8vw,130px)]';

const trackClass =
  'flex w-max items-center gap-[clamp(42px,5.8vw,88px)] py-1 [animation:tech-marquee_36s_linear_infinite] motion-reduce:animate-none max-[680px]:gap-9 max-[680px]:[animation-duration:30s]';

const groupClass =
  'flex shrink-0 items-center gap-[clamp(42px,5.8vw,88px)] max-[680px]:gap-9';

const itemClass =
  "group/tech inline-flex shrink-0 items-center gap-3 text-[rgba(17,17,15,0.64)] transition-transform duration-300 ease-out hover:scale-[1.04] focus-visible:scale-[1.04] focus-visible:outline focus-visible:outline-1 focus-visible:outline-offset-4 focus-visible:outline-[var(--ink)]";

const iconClass =
  'h-8 w-8 shrink-0 grayscale saturate-0 brightness-[0.36] transition-[filter,transform] duration-300 ease-out group-hover/tech:grayscale-0 group-hover/tech:saturate-100 group-hover/tech:brightness-100 group-focus-visible/tech:grayscale-0 group-focus-visible/tech:saturate-100 group-focus-visible/tech:brightness-100 min-[681px]:max-[900px]:h-7 min-[681px]:max-[900px]:w-7 max-[680px]:h-6 max-[680px]:w-6';

const nameClass =
  "font-['Helvetica_Neue',Helvetica,Arial,ui-sans-serif,system-ui,sans-serif] text-[clamp(0.92rem,0.95vw,1.02rem)] font-[520] leading-none tracking-[-0.01em] transition-colors duration-300 ease-out group-hover/tech:text-[var(--ink)] group-focus-visible/tech:text-[var(--ink)] max-[680px]:text-[0.86rem]";

function ReactLogo() {
  return (
    <svg viewBox="-11.5 -10.23174 23 20.46348" aria-hidden="true" className={iconClass}>
      <circle cx="0" cy="0" r="2.05" fill="#61DAFB" />
      <g fill="none" stroke="#61DAFB" strokeWidth="1">
        <ellipse rx="11" ry="4.2" />
        <ellipse rx="11" ry="4.2" transform="rotate(60)" />
        <ellipse rx="11" ry="4.2" transform="rotate(120)" />
      </g>
    </svg>
  );
}

function LaravelLogo() {
  return (
    <svg viewBox="0 0 32 32" aria-hidden="true" className={iconClass}>
      <path fill="#FF2D20" d="M31.2 8.1 25.4 4.8a1.2 1.2 0 0 0-1.2 0l-5.8 3.3a1.2 1.2 0 0 0-.6 1v6.6l-3.6 2.1-3.6-2.1V9.1a1.2 1.2 0 0 0-.6-1L4.2 4.8a1.2 1.2 0 0 0-1.2 0L.8 6a1.2 1.2 0 0 0-.6 1v13.8a1.2 1.2 0 0 0 .6 1l11.8 6.8a1.2 1.2 0 0 0 1.2 0l17.4-10a1.2 1.2 0 0 0 .6-1V9.1a1.2 1.2 0 0 0-.6-1ZM3.6 7.2l4.6 2.6v5.3l-4.6-2.6V7.2Zm9.6 18.9L2.6 20V14l10.6 6.1v6Zm1.2-8.2 4.6-2.7 4.6 2.7-4.6 2.6-4.6-2.6Zm10.2-1.9L20 13.4V9.8l4.6-2.6V16Zm4.8.9-4.6 2.6v-5.2l4.6-2.7v5.3Z" />
    </svg>
  );
}

function MySqlLogo() {
  return (
    <svg viewBox="0 0 48 32" aria-hidden="true" className={iconClass}>
      <path fill="#00758F" d="M39.4 10.4c-2.5-.1-4.4.5-5.9 1.4.4-1.9.1-3.7-1.1-5.2-2.2 1.6-3.2 3.8-3 6.7-2.4 1.8-4.7 4.4-7.8 7.7-5.5 5.7-11.3 5.1-15.4 2.9 4.8 4.7 13.2 5.2 19.1-.6 3.4-3.4 5.5-6.1 8.6-7.8 2.5-1.4 5.3-1.5 8.5-.1-1-2-1.9-3.5-3-5Z" />
      <path fill="#F29111" d="M33.1 9.9c2.4-1.2 5.1-1.5 8-.8-1.2-1.6-2.8-2.9-4.8-3.8-2 .9-3.2 2.5-3.2 4.6Z" />
      <path fill="#00758F" d="M8.6 18.1c-.8-3.8.8-6.9 4.6-9.4-4.8 1.3-8.1 4.1-9.9 8.4 1.5.8 3.3 1.1 5.3 1Z" />
    </svg>
  );
}

function JavaScriptLogo() {
  return (
    <svg
      viewBox="0 0 24 24"
      aria-hidden="true"
      focusable="false"
      className={`${iconClass} text-[var(--ink)] group-hover/tech:text-[#F7DF1E] group-focus-visible/tech:text-[#F7DF1E]`}
    >
      <path
        fill="currentColor"
        d="M0 0h24v24H0V0zm22.034 18.276c-.175-1.095-.888-2.015-3.003-2.873-.736-.345-1.554-.585-1.797-1.14-.091-.33-.105-.51-.046-.705.15-.646.915-.84 1.515-.66.39.12.75.42.976.9 1.034-.676 1.034-.676 1.755-1.125-.27-.42-.404-.601-.586-.78-.63-.705-1.469-1.065-2.834-1.034l-.705.089c-.676.165-1.32.525-1.71 1.005-1.14 1.291-.811 3.541.569 4.471 1.365 1.02 3.361 1.244 3.616 2.205.24 1.17-.87 1.545-1.966 1.41-.811-.18-1.26-.586-1.755-1.336l-1.83 1.051c.21.48.45.689.81 1.109 1.74 1.756 6.09 1.666 6.871-1.004.029-.09.24-.705.074-1.65l.046.067zm-8.983-7.245h-2.248c0 1.938-.009 3.864-.009 5.805 0 1.232.063 2.363-.138 2.711-.33.689-1.18.601-1.566.48-.396-.196-.597-.466-.83-.855-.063-.105-.11-.196-.127-.196l-1.825 1.125c.305.63.75 1.172 1.324 1.517.855.51 2.004.675 3.207.405.783-.226 1.458-.691 1.811-1.411.51-.93.402-2.07.397-3.346.012-2.054 0-4.109 0-6.179l.004-.056z"
      />
    </svg>
  );
}

function TailwindLogo() {
  return (
    <svg viewBox="0 0 48 32" aria-hidden="true" className={iconClass}>
      <path fill="#06B6D4" d="M24 6.4c-6.4 0-10.4 3.2-12 9.6 2.4-3.2 5.2-4.4 8.4-3.6 1.8.5 3.1 1.8 4.5 3.2 2.3 2.3 4.9 4.9 10.6 4.9 6.4 0 10.4-3.2 12-9.6-2.4 3.2-5.2 4.4-8.4 3.6-1.8-.5-3.1-1.8-4.5-3.2-2.3-2.3-4.9-4.9-10.6-4.9ZM12 18.4c-6.4 0-10.4 3.2-12 9.6 2.4-3.2 5.2-4.4 8.4-3.6 1.8.5 3.1 1.8 4.5 3.2 2.3 2.3 4.9 4.9 10.6 4.9 6.4 0 10.4-3.2 12-9.6-2.4 3.2-5.2 4.4-8.4 3.6-1.8-.5-3.1-1.8-4.5-3.2-2.3-2.3-4.9-4.9-10.6-4.9Z" />
    </svg>
  );
}

function NodeLogo() {
  return (
    <svg viewBox="0 0 36 40" aria-hidden="true" className={iconClass}>
      <path fill="#539E43" d="M18 1.6 3.3 10v20L18 38.4 32.7 30V10L18 1.6Z" />
      <path fill="#fff" d="M13.6 27.7c-.7 0-1.3-.2-1.9-.5l-1.4-.8c-.2-.1-.1-.2 0-.3l1.7-.8h.3l1.1.6c.4.2.9.2 1.3 0 .4-.2.6-.6.6-1.1V13.6c0-.2.1-.3.3-.3h2.1c.2 0 .3.1.3.3v11.2c0 1.1-.6 2.1-1.6 2.6-.8.2-1.7.3-2.8.3Zm8.3 0c-2 0-3.2-.7-4-1.9-.1-.2-.1-.3.1-.4l1.6-.9c.1-.1.3 0 .4.1.5.8 1.1 1.1 2 1.1.8 0 1.7-.3 1.7-1.2s-.8-1.1-2.2-1.3c-2-.3-3.3-.9-3.3-3 0-1.9 1.6-3.1 3.7-3.1 1.6 0 2.8.5 3.6 1.7.1.1.1.3-.1.4l-1.6 1c-.1.1-.3.1-.4-.1-.4-.6-.9-.9-1.6-.9-.8 0-1.3.4-1.3 1 0 .8.7.9 2.1 1.1 2 .3 3.5.8 3.5 3.1.1 2.1-1.6 3.3-4.2 3.3Z" />
    </svg>
  );
}

function NextLogo() {
  return (
    <svg viewBox="0 0 32 32" aria-hidden="true" className={iconClass}>
      <circle cx="16" cy="16" r="15" fill="#000" />
      <path fill="#fff" d="M10.2 9.2h2.4l9.4 14.4h-2.4L10.2 9.2Zm9.1 0h2.3v13.6l-2.3-3.5V9.2Zm-9.1 0h2.3v13.6h-2.3V9.2Z" />
    </svg>
  );
}

function ExpoLogo() {
  return (
    <svg viewBox="0 0 32 32" aria-hidden="true" className={iconClass}>
      <path fill="#000020" d="M16 2.4c1.4 0 2.5.8 3.4 2.3l10.2 17.9c.9 1.6.4 3.3-1.2 4.2-1.6.9-3.2.3-4.2-1.3L16 11.1 7.8 25.5c-1 1.6-2.6 2.2-4.2 1.3-1.6-.9-2.1-2.6-1.2-4.2L12.6 4.7c.9-1.5 2-2.3 3.4-2.3Z" />
    </svg>
  );
}

const techItems = [
  { name: 'React', Logo: ReactLogo },
  { name: 'Laravel', Logo: LaravelLogo },
  { name: 'MySQL', Logo: MySqlLogo },
  { name: 'JavaScript', Logo: JavaScriptLogo },
  { name: 'Tailwind CSS', Logo: TailwindLogo },
  { name: 'Node.js', Logo: NodeLogo },
  { name: 'Next.js', Logo: NextLogo },
  { name: 'Expo', Logo: ExpoLogo },
];

function TechGroup({ hidden = false }) {
  return (
    <div className={groupClass} aria-hidden={hidden || undefined}>
      {techItems.map(({ name, Logo }) => (
        <span className={itemClass} tabIndex={hidden ? -1 : 0} key={name}>
          <Logo />
          <span className={nameClass}>{name}</span>
        </span>
      ))}
    </div>
  );
}

export function TechStrip() {
  return (
    <section
      className={stripClass}
      id="hero-tech"
      data-tech-strip
      aria-label="Technologies I work with"
    >
      <style>
        {'@keyframes tech-marquee{from{transform:translate3d(0,0,0)}to{transform:translate3d(-50%,0,0)}}'}
      </style>

      <div className={innerClass}>
        <p className={labelClass}>TECHNOLOGIES I WORK WITH</p>

        <div className={viewportClass}>
          <span
            className={`${edgeClass} left-0 bg-gradient-to-r from-[var(--paper)] to-transparent`}
            aria-hidden="true"
          />
          <span
            className={`${edgeClass} right-0 bg-gradient-to-l from-[var(--paper)] to-transparent`}
            aria-hidden="true"
          />

          <div className={trackClass}>
            <TechGroup />
            <TechGroup hidden />
          </div>
        </div>
      </div>
    </section>
  );
}
