import CircleButton from "./CircleButton";
import Reveal from "./Reveal";

export default function PhotographyPreview() {
  return (
    <section className="bg-paper px-[var(--page-x)] py-20 text-ink sm:py-32">
      <Reveal className="mx-auto flex max-w-[1800px] flex-col gap-10">
        <div className="flex items-baseline justify-between text-xs tracking-[0.14em] text-muted uppercase">
          <span>Selected Images</span>
          <span>02 / Photography</span>
        </div>

        <h2
          className="font-normal leading-[0.95] tracking-[-0.03em]"
          style={{ fontSize: "clamp(2rem, 1.2rem + 3vw, 4rem)" }}
        >
          Photography
        </h2>

        <p className="max-w-xl text-lg leading-relaxed text-muted">
          A gallery of landscape and outdoor photography is coming soon.
        </p>

        <div className="flex justify-end">
          <CircleButton href="/photography">View photography</CircleButton>
        </div>
      </Reveal>
    </section>
  );
}
