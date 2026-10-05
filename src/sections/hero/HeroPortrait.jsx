export function HeroPortrait() {
  return (
    <div
      className="hero-portrait absolute bottom-0 left-1/2 z-[4] w-[clamp(540px,42vw,630px)] -translate-x-1/2 min-[1440px]:w-[clamp(580px,42vw,640px)] max-[1180px]:w-[clamp(430px,45vw,560px)] min-[960px]:max-[1100px]:w-[clamp(320px,min(32vw,42.5dvh),328px)] max-[900px]:relative max-[900px]:bottom-auto max-[900px]:left-auto max-[900px]:col-span-full max-[900px]:row-start-1 max-[900px]:mt-[-58px] max-[900px]:w-[min(62vw,440px)] max-[900px]:min-w-[290px] max-[900px]:translate-x-0 min-[681px]:max-[900px]:absolute min-[681px]:max-[900px]:bottom-0 min-[681px]:max-[900px]:left-[calc(50%+7.5px)] min-[681px]:max-[900px]:col-span-1 min-[681px]:max-[900px]:col-start-2 min-[681px]:max-[900px]:row-auto min-[681px]:max-[900px]:mt-0 min-[681px]:max-[900px]:w-[clamp(350px,min(47vw,36dvh),365px)] min-[681px]:max-[900px]:min-w-0 min-[681px]:max-[900px]:-translate-x-1/2 min-[681px]:max-[900px]:self-end min-[681px]:max-[900px]:justify-self-center max-[680px]:order-1 max-[680px]:mt-[-18px] max-[680px]:w-[min(88vw,390px)] max-[680px]:min-w-0 max-[680px]:self-center"
      data-portrait
      aria-label="Portrait of Houssen Doudli"
    >
      <img
        className="block h-auto w-full"
        src="/images/houssen-portrait.png"
        alt="Houssen Doudli"
        width="600"
        height="1000"
        decoding="async"
        fetchPriority="high"
      />
    </div>
  );
}
