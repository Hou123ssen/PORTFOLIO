export function HeroHeadline() {
  return (
    <div className="hero-headline-stage mx-auto grid w-fit max-w-full font-['Helvetica_Neue',Helvetica,Arial,ui-sans-serif,system-ui,sans-serif] text-[clamp(104px,min(12vw,18.6dvh),178px)] leading-[0.87] font-[780] tracking-[-0.05em] uppercase min-[960px]:max-[1100px]:translate-y-[92px] min-[960px]:max-[1100px]:justify-self-center min-[960px]:max-[1100px]:text-[clamp(100px,min(11vw,14.2dvh),114px)] min-[960px]:max-[1100px]:leading-[0.86] max-[900px]:text-[clamp(5.1rem,18.5vw,10.2rem)] min-[681px]:max-[900px]:text-[clamp(6.5rem,15.35vw,7.45rem)] min-[681px]:max-[900px]:leading-[0.84] max-[680px]:w-full max-[680px]:text-[clamp(3.55rem,15.4vw,4.25rem)] max-[680px]:leading-[0.84] max-[680px]:tracking-[-0.06em] max-[360px]:text-[clamp(3rem,14vw,3.18rem)] max-[360px]:tracking-[-0.062em]">
      <h1
        className="hero-headline hero-headline-solid relative col-start-1 row-start-1 m-0 font-[inherit] leading-[inherit] tracking-[inherit] uppercase max-[680px]:whitespace-nowrap"
        data-headline
        aria-label="Explore my portfolio"
      >
        <span data-headline-line>
          <span>
            EXPLORE <em>MY</em>
          </span>
        </span>

        <span className="portfolio-line" data-headline-line>
          <span>
            PORT<span className="tone">FOL</span>IO
          </span>
        </span>
      </h1>

      <div
        className="hero-headline hero-headline-outline relative col-start-1 row-start-1 m-0 font-[inherit] leading-[inherit] tracking-[inherit] uppercase max-[680px]:whitespace-nowrap"
        data-headline
        aria-hidden="true"
      >
        <span>
          <span>EXPLORE MY</span>
        </span>

        <span>
          <span>PORTFOLIO</span>
        </span>
      </div>
    </div>
  );
}
