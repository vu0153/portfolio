import profile from "@/data/profile";
import CircleButton from "./CircleButton";
import Reveal from "./Reveal";

export default function ContactCTA() {
  return (
    <section className="bg-dark px-[var(--page-x)] py-20 text-dark-text sm:py-32">
      <Reveal className="mx-auto flex max-w-[1800px] flex-col gap-10 sm:flex-row sm:items-center sm:justify-between">
        <p
          className="max-w-2xl font-normal leading-[1.05] tracking-[-0.02em]"
          style={{ fontSize: "clamp(1.8rem, 1.2rem + 2.5vw, 3.5rem)" }}
        >
          Let&apos;s discuss how I can support your team.
        </p>

        <CircleButton href={`mailto:${profile.contact.email}`} variant="accent" external>
          Get in touch
        </CircleButton>
      </Reveal>

      <div className="mx-auto max-w-[1800px]">
        <div className="mt-10 flex flex-wrap gap-6 border-t border-dark-text/20 pt-6 text-sm tracking-[0.02em] text-dark-text/70">
          <a href={`mailto:${profile.contact.email}`} className="hover:text-dark-text">
            Email
          </a>
          <a
            href={profile.contact.linkedin}
            target="_blank"
            rel="noreferrer"
            className="hover:text-dark-text"
          >
            LinkedIn
          </a>
          <span>Adelaide, Australia</span>
        </div>
      </div>
    </section>
  );
}
