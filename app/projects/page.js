export const metadata = {
  title: "Projects",
  description: "Network, cybersecurity and web projects — coming soon.",
};

export default function ProjectsPage() {
  return (
    <div className="mx-auto flex max-w-4xl flex-col gap-4 px-4 py-16 sm:px-6">
      <h1 className="text-3xl font-semibold tracking-tight">Projects</h1>
      <p className="max-w-2xl text-lg leading-relaxed text-black/70 dark:text-white/70">
        Project case studies — including Memory Lane Photography, enterprise
        network design work, and cybersecurity labs — are coming soon.
      </p>
    </div>
  );
}
