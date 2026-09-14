import CircleButton from "./CircleButton";
import Reveal from "./Reveal";
import profile from "@/data/profile";

export default function ResumePreview() {
  return (
    <section className="bg-paper px-[var(--page-x)] py-20 text-ink sm:py-32">
      <Reveal className="mx-auto flex max-w-[1800px] flex-col gap-10">
        <div className="flex items-baseline justify-between text-xs tracking-[0.14em] text-muted uppercase">
          <span>Experience</span>
          <span>03 / Resume</span>
        </div>

        <h2
          className="font-normal leading-[0.95] tracking-[-0.03em]"
          style={{ fontSize: "clamp(2rem, 1.2rem + 3vw, 4rem)" }}
        >
          Resume
        </h2>

        <Reveal as="ul" stagger className="flex flex-col divide-y divide-line border-t border-b border-line">
          {profile.experience.map((job) => (
            <li
              key={`${job.company}-${job.period}`}
              className="flex flex-col gap-1 py-5 sm:flex-row sm:items-baseline sm:justify-between"
            >
              <span className="text-lg">{job.role}</span>
              <span className="text-sm tracking-[0.02em] text-muted">{job.company}</span>
              <span className="text-sm tracking-[0.02em] text-muted">{job.period}</span>
            </li>
          ))}
        </Reveal>

        <div className="flex justify-end">
          <CircleButton href="/about">View full resume</CircleButton>
        </div>
      </Reveal>
    </section>
  );
}
