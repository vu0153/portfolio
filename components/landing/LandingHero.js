import Image from "next/image";
import Link from "next/link";
import profile from "@/data/profile";

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

        <div className="relative flex flex-col items-center gap-8 sm:gap-4">
          <h1 className="sr-only">{profile.name}</h1>

          <div className="grid w-full grid-cols-1 items-center gap-6 sm:grid-cols-[1fr_auto_1fr] sm:gap-4">
            <p
              aria-hidden
              className="hidden select-none text-right font-normal leading-[0.85] tracking-[-0.03em] sm:block"
              style={{ fontSize: "clamp(1.6rem, 1vw + 1.4rem, 3.4rem)" }}
            >
              NGOC LONG VU
            </p>

            <div className="relative mx-auto w-full max-w-[320px] sm:max-w-[380px]">
              <Image
                src="/photos/ricky-hero.webp"
                alt={`Portrait of ${profile.shortName}`}
                width={963}
                height={1400}
                priority
                className="h-auto w-full object-cover"
              />
            </div>

            <p
              aria-hidden
              className="hidden select-none text-left font-normal leading-[0.85] tracking-[-0.03em] sm:block"
              style={{ fontSize: "clamp(1.6rem, 1vw + 1.4rem, 3.4rem)" }}
            >
              RICKY VU
            </p>
          </div>

          <div
            aria-hidden
            className="flex select-none flex-col items-center gap-1 leading-[0.9] tracking-[-0.03em] sm:hidden"
            style={{ fontSize: "clamp(2rem, 9vw, 3rem)" }}
          >
            <p>NGOC LONG VU</p>
            <p>RICKY VU</p>
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
              {route.label}
              <span aria-hidden className="transition-transform group-hover:translate-x-1">
                →
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
