import CircleButton from "./CircleButton";

const featuredProjects = [
  { title: "Enterprise Network Design and Simulation", category: "Network Infrastructure" },
  { title: "POODLE Attack Simulation and Mitigation", category: "Cybersecurity" },
  { title: "Smart Home Brute-force Detection and Mitigation", category: "Cybersecurity / IoT" },
  { title: "Health IT Governance (Acting CISO)", category: "Security Governance" },
];

const otherProjects = [
  { title: "Disaster Recovery and Business Continuity Plan", category: "Security Governance" },
  { title: "Cloud-based Inventory Management System", category: "Cloud / Automation" },
  { title: "Data Analytics Pipeline with R and MongoDB", category: "Data Analysis" },
  { title: "Indigenous Art Atlas", category: "Web Development" },
  { title: "AquaGuard IoT for Smart Aquaculture", category: "IoT / Project Management" },
];

export default function ProjectsPreview() {
  return (
    <section className="bg-paper px-[var(--page-x)] py-20 text-ink sm:py-32">
      <div className="mx-auto flex max-w-[1800px] flex-col gap-10">
        <div className="flex items-baseline justify-between text-xs tracking-[0.14em] text-muted uppercase">
          <span>Selected Work</span>
          <span>01 / Technical</span>
        </div>

        <h2
          className="font-normal leading-[0.95] tracking-[-0.03em]"
          style={{ fontSize: "clamp(2rem, 1.2rem + 3vw, 4rem)" }}
        >
          Technical Projects
        </h2>

        <ul className="flex flex-col divide-y divide-line border-t border-b border-line">
          {featuredProjects.map((project) => (
            <li key={project.title} className="flex flex-col gap-1 py-5 sm:flex-row sm:items-baseline sm:justify-between">
              <span className="text-lg">{project.title}</span>
              <span className="text-sm tracking-[0.02em] text-muted">{project.category}</span>
            </li>
          ))}
        </ul>

        <p className="text-xs tracking-[0.14em] text-muted uppercase">Other Projects</p>

        <ul className="flex flex-col divide-y divide-line border-t border-b border-line">
          {otherProjects.map((project) => (
            <li
              key={project.title}
              className="flex flex-col gap-1 py-4 text-muted sm:flex-row sm:items-baseline sm:justify-between"
            >
              <span>{project.title}</span>
              <span className="text-sm tracking-[0.02em]">{project.category}</span>
            </li>
          ))}
        </ul>

        <div className="flex justify-end">
          <CircleButton href="/projects">View all projects</CircleButton>
        </div>
      </div>
    </section>
  );
}
