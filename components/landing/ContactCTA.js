import profile from "@/data/profile";
import PillButton from "./PillButton";
import Reveal from "./Reveal";

export default function ContactCTA() {
  return (
    <section className="flex h-full flex-col bg-black px-[var(--page-x)] py-16 text-dark-text">
      <div className="mx-auto flex w-full max-w-[1800px] flex-1 flex-col justify-center">
        <Reveal>
          <p
            className="max-w-2xl font-normal leading-[1.05] tracking-[-0.02em]"
            style={{ fontSize: "clamp(1.8rem, 1.2rem + 2.5vw, 3.5rem)" }}
          >
            Let&apos;s discuss how I can support your team.
          </p>
        </Reveal>
      </div>

      <div className="mx-auto flex w-full max-w-[1800px] flex-col gap-6">
        <div className="flex justify-end">
          <PillButton href={`mailto:${profile.contact.email}`} variant="accent" external>
            Get in touch
          </PillButton>
        </div>

        <div className="flex flex-wrap gap-6 border-t border-dark-text/20 pt-6 text-sm tracking-[0.02em] text-dark-text/70">
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
