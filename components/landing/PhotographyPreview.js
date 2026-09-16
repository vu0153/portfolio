import Image from "next/image";
import PillButton from "./PillButton";
import Reveal from "./Reveal";

export default function PhotographyPreview() {
  return (
    <section className="relative flex h-full flex-col overflow-hidden bg-black text-dark-text">
      <Image
        src="/photos/photography-card.webp"
        alt="Country road through farmland at sunset, South Australia"
        fill
        priority
        sizes="68vw"
        className="object-cover object-[45%_55%]"
      />

      <div
        aria-hidden
        className="absolute inset-0 bg-[linear-gradient(to_right,black_0%,black_36%,transparent_66%)]"
      />
      <div
        aria-hidden
        className="absolute inset-0 bg-[linear-gradient(to_top,black_0%,transparent_45%)]"
      />

      <div className="relative z-10 flex h-full flex-col justify-end px-[var(--page-x)] py-16">
        <Reveal className="mx-auto flex w-full max-w-[1800px] flex-col gap-10">
          <div className="flex items-baseline justify-between text-xs tracking-[0.14em] text-dark-text/50 uppercase">
            <span>Selected Images</span>
            <span>02 / Photography</span>
          </div>

          <h2
            className="font-normal leading-[0.95] tracking-[-0.03em]"
            style={{ fontSize: "clamp(2rem, 1.2rem + 3vw, 4rem)" }}
          >
            Photography
          </h2>

          <p className="max-w-xl text-lg leading-relaxed text-dark-text/70">
            The story of how a second-hand camera in 2012 turned into Memory Lane Photography, with
            photos from along the way.
          </p>

          <div className="flex justify-end">
            <PillButton href="/photography">View photography</PillButton>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
