import Image from "next/image";
import Link from "next/link";
import profile from "@/data/profile";
import MarqueeText from "./MarqueeText";
import LocationBadge from "./LocationBadge";

const routes = [
  { number: "01", label: "Technical Projects", href: "/projects" },
  { number: "02", label: "Resume", href: "/about" },
  { number: "03", label: "Photography", href: "/photography" },
];

export default function LandingHero() {
  return (
    <section className="relative flex min-h-[560px] flex-col overflow-hidden bg-hero sm:min-h-[720px] lg:min-h-[860px]">
      <Image
        src="/photos/ricky-hero.webp"
        alt={`Portrait of ${profile.shortName}`}
        fill
        priority
        sizes="100vw"
        className="object-cover object-[50%_30%]"
      />

      <div className="relative z-10 flex flex-1 flex-col px-[var(--page-x)] py-10 sm:py-14">
        <div className="mx-auto flex w-full max-w-[1800px] flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
          <LocationBadge place="Adelaide, Australia" />
          <div
            className="flex flex-col text-2xl leading-tight font-bold tracking-tight text-white sm:items-end sm:text-3xl"
            style={{ textShadow: "0 2px 16px rgba(0,0,0,0.35)" }}
          >
            {profile.headlineItems.map((item) => (
              <span key={item}>{item}</span>
            ))}
          </div>
        </div>

        <div className="relative flex-1">
          <h1 className="sr-only">{profile.name}</h1>

          {/* Mobile-only: static, readable name near the bottom of the photo (no marquee) */}
          <div
            aria-hidden
            className="absolute inset-x-0 bottom-0 flex select-none flex-col items-center gap-1 text-center leading-[0.9] tracking-[-0.03em] text-white sm:hidden"
            style={{ fontSize: "clamp(2rem, 11vw, 3.25rem)" }}
          >
            <p>NGOC LONG VU</p>
            <p>RICKY VU</p>
          </div>

          {/* Desktop-only: name drifts slowly on top of the photo, seamless loop */}
          <div className="pointer-events-none absolute inset-x-0 bottom-10 hidden overflow-hidden sm:bottom-14 sm:block">
            <MarqueeText text="NGOC LONG VU - RICKY VU -" />
          </div>
        </div>

        <div className="mx-auto flex w-full max-w-[1800px] flex-col gap-4 text-sm tracking-[0.02em] text-white sm:flex-row sm:items-start sm:justify-between">
          {routes.map((route) => (
            <Link
              key={route.href}
              href={route.href}
              className="group flex items-center gap-2 border-b border-transparent pb-1 transition-colors hover:border-white"
            >
              <span className="text-white/60">{route.number}</span>
              <span className="transition-[letter-spacing] duration-300 group-hover:tracking-[0.04em]">
                {route.label}
              </span>
              <span
                aria-hidden
                className="transition-transform duration-300 [transition-timing-function:var(--ease-out)] group-hover:translate-x-1.5"
              >
                →
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
