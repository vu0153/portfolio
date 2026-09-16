import profile from "@/data/profile";
import PillButton from "./PillButton";
import Reveal from "./Reveal";

export default function AboutPreview() {
  const recentRole = profile.experience[0];
  const education = profile.education[0];

  return (
    <section className="flex h-full flex-col bg-black px-[var(--page-x)] py-16 text-dark-text">
      <div className="mx-auto flex w-full max-w-[1800px] flex-1 flex-col justify-center gap-10">
        <Reveal className="flex flex-col gap-10">
          <div className="flex items-baseline justify-between text-xs tracking-[0.14em] text-dark-text/50 uppercase">
            <span>About</span>
            <span>03 / Background</span>
          </div>

          <h2
            className="max-w-3xl font-normal leading-[1.05] tracking-[-0.02em]"
            style={{ fontSize: "clamp(1.6rem, 1.1rem + 2vw, 3rem)" }}
          >
            I work in network operations and IT support, with a growing focus on cybersecurity, and
            a personal practice in photography on the side.
          </h2>

          <div className="grid gap-8 sm:grid-cols-2">
            <div>
              <p className="text-xs tracking-[0.14em] text-dark-text/50 uppercase">Most recent role</p>
              <p className="mt-2 text-lg">
                {recentRole.role} · {recentRole.company}
              </p>
              <p className="text-sm text-dark-text/60">{recentRole.period}</p>
            </div>
            <div>
              <p className="text-xs tracking-[0.14em] text-dark-text/50 uppercase">Education</p>
              <p className="mt-2 text-lg">{education.degree}</p>
              <p className="text-sm text-dark-text/60">
                {education.institution} · {education.period}
              </p>
            </div>
          </div>
        </Reveal>
      </div>

      <div className="mx-auto flex w-full max-w-[1800px] justify-end">
        <PillButton href="/about">View full background</PillButton>
      </div>
    </section>
  );
}
