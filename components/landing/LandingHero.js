import Image from "next/image";
import Link from "next/link";
import profile from "@/data/profile";
import MarqueeText from "./MarqueeText";

const routes = [
  { number: "01", label: "Technical Projects", href: "/projects" },
  { number: "02", label: "Resume", href: "/about" },
  { number: "03", label: "Photography", href: "/photography" },
];

export default function LandingHero() {
  return (
    <section className="relative overflow-hidden bg-hero px-[var(--page-x)] pb-16 pt-10 text-ink sm:pb-24 sm:pt-14">
      <div className="mx-auto flex max-w-[1800px] flex-col gap-10">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
          <div className="inline-flex w-fit items-center gap-3 rounded-full bg-dark px-4 py-2 text-dark-text">
            <span aria-hidden className="text-lg leading-none">
              ●
            </span>
            <span className="text-xs leading-tight tracking-[0.04em]">
              Based in
              <br />
              Adelaide, Australia
            </span>
          </div>
          <p className="max-w-[15rem] text-xs tracking-[0.14em] text-ink uppercase sm:text-right">
            {profile.headline}
          </p>
        </div>

        <div className="relative flex flex-col items-center gap-6 sm:gap-2">
          <h1 className="sr-only">{profile.name}</h1>

          {/* Mobile-only: static, readable name above the portrait (no marquee) */}
          <div
            aria-hidden
            className="flex select-none flex-col items-center gap-1 text-center leading-[0.9] tracking-[-0.03em] sm:hidden"
            style={{ fontSize: "clamp(1.8rem, 8vw, 2.75rem)" }}
          >
            <p>NGOC LONG VU</p>
            <p>RICKY VU</p>
          </div>

          <div className="relative flex w-full items-center justify-center">
            <div className="relative mx-auto w-full max-w-[320px] sm:max-w-[380px]">
              <Image
                src="/photos/ricky-hero.webp"
                alt={`Portrait of ${profile.shortName}`}
                width={1120}
                height={1400}
                priority
                className="h-auto w-full object-cover"
              />
            </div>

            {/* Desktop-only: name drifts slowly on top of the portrait, seamless loop */}
            <div className="pointer-events-none absolute inset-0 z-10 hidden items-end overflow-hidden pb-6 sm:flex">
              <MarqueeText text="NGOC LONG VU — RICKY VU" />
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-4 text-sm tracking-[0.02em] sm:flex-row sm:items-start sm:justify-between">
          {routes.map((route) => (
            <Link
              key={route.href}
              href={route.href}
              className="group flex items-center gap-2 border-b border-transparent pb-1 text-ink transition-colors hover:border-ink"
            >
              <span className="text-muted">{route.number}</span>
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
