import PillButton from "./PillButton";
import Reveal from "./Reveal";

const featuredProjects = [
  { title: "Enterprise Network Design and Simulation", category: "Network Infrastructure" },
  { title: "POODLE Attack Simulation and Mitigation", category: "Cybersecurity" },
  { title: "Smart Home Brute-force Detection and Mitigation", category: "Cybersecurity / IoT" },
  { title: "Health IT Governance (Acting CISO)", category: "Security Governance" },
];

export default function ProjectsPreview() {
  return (
    <section className="flex h-full flex-col bg-black px-[var(--page-x)] py-16 text-dark-text">
      <div className="mx-auto flex w-full max-w-[1800px] flex-1 flex-col justify-center gap-10">
        <Reveal className="flex flex-col gap-10">
          <div className="flex items-baseline justify-between text-xs tracking-[0.14em] text-dark-text/50 uppercase">
            <span>Selected Work</span>
            <span>01 / Technical</span>
          </div>

          <h2
            className="font-normal leading-[0.95] tracking-[-0.03em]"
            style={{ fontSize: "clamp(2rem, 1.2rem + 3vw, 4rem)" }}
          >
            Technical Projects
          </h2>

          <Reveal
            as="ul"
            stagger
            className="flex flex-col divide-y divide-dark-text/15 border-t border-b border-dark-text/15"
          >
            {featuredProjects.map((project) => (
              <li key={project.title} className="flex flex-col gap-1 py-5 sm:flex-row sm:items-baseline sm:justify-between">
                <span className="text-lg">{project.title}</span>
                <span className="text-sm tracking-[0.02em] text-dark-text/60">{project.category}</span>
              </li>
            ))}
          </Reveal>
        </Reveal>
      </div>

      <div className="mx-auto flex w-full max-w-[1800px] justify-end">
        <PillButton href="/projects">View all projects</PillButton>
      </div>
    </section>
  );
}
