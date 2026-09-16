import Image from "next/image";
import profile from "@/data/profile";
import LocationBadge from "./LocationBadge";
import CircuitPattern from "./CircuitPattern";
import HeroRoutes from "./HeroRoutes";

const highlights = ["CCNA", "Cisco CyberOps Associate", "CompTIA Security+", "MCSA"];

export default function LandingHero() {
  return (
    <section className="relative flex h-full flex-col overflow-hidden bg-black text-dark-text">
      <Image
        src="/photos/ricky-hero.webp"
        alt={`Portrait of ${profile.shortName}`}
        fill
        priority
        sizes="100vw"
        className="object-cover object-[50%_20%] sm:object-[85%_20%] lg:object-[95%_15%]"
      />

      <div
        aria-hidden
        className="absolute inset-0 bg-[linear-gradient(to_top,black_0%,black_68%,rgba(0,0,0,0.7)_82%,transparent_100%)] sm:bg-[linear-gradient(to_right,black_0%,black_32%,transparent_55%)]"
      />

      <div
        aria-hidden
        className="pointer-events-none absolute inset-y-0 left-0 w-full text-dark-text/[0.14] sm:w-[60%]"
      >
        <CircuitPattern />
      </div>

      <div className="relative z-10 flex flex-1 flex-col px-[var(--page-x)] py-10 sm:py-14">
        <div className="mx-auto flex w-full max-w-[1800px] flex-1 flex-col justify-end gap-6 sm:justify-center">
          <LocationBadge place="Adelaide, Australia" />

          <div className="max-w-xl">
            <h1 className="sr-only">{profile.name}</h1>
            <p aria-hidden className="text-sm tracking-[0.14em] text-dark-text/60 uppercase">
              {profile.name}
            </p>
            <div className="mt-2 flex flex-col text-4xl leading-[0.95] font-bold tracking-tight sm:text-5xl lg:text-6xl">
              {profile.headlineItems.map((item) => (
                <span key={item}>{item}</span>
              ))}
            </div>

            <p className="mt-6 max-w-md text-base leading-relaxed text-dark-text/70 sm:text-lg">
              {profile.tagline}
            </p>

            <ul className="mt-6 flex flex-wrap gap-2">
              {highlights.map((item) => (
                <li
                  key={item}
                  className="rounded-full border border-dark-text/20 px-3 py-1 text-xs tracking-[0.02em] text-dark-text/90"
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      <HeroRoutes />
    </section>
  );
}
