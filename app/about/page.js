import profile from "@/data/profile";
import SectionHeading from "@/components/SectionHeading";

export const metadata = {
  title: "About",
  description: profile.summary,
};

export default function AboutPage() {
  return (
    <div className="mx-auto flex max-w-4xl flex-col gap-12 px-4 py-16 sm:px-6">
      <div className="flex flex-col gap-3">
        <h1 className="text-3xl font-semibold tracking-tight">About</h1>
        <p className="max-w-2xl text-lg leading-relaxed text-black/70 dark:text-white/70">
          {profile.summary}
        </p>
      </div>

      <section className="flex flex-col gap-4">
        <SectionHeading>Experience</SectionHeading>
        <div className="flex flex-col gap-6">
          {profile.experience.map((job) => (
            <div key={`${job.company}-${job.period}`}>
              <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
                <h3 className="font-medium">
                  {job.role} · {job.company}
                </h3>
                <span className="text-sm text-black/60 dark:text-white/60">
                  {job.period}
                </span>
              </div>
              <ul className="mt-2 list-disc space-y-1 pl-5 text-black/70 dark:text-white/70">
                {job.bullets.map((bullet) => (
                  <li key={bullet}>{bullet}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      <section className="flex flex-col gap-4">
        <SectionHeading>Skills</SectionHeading>
        <div className="grid gap-6 sm:grid-cols-2">
          {profile.skills.map((group) => (
            <div key={group.category}>
              <h3 className="font-medium">{group.category}</h3>
              <ul className="mt-2 flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <li
                    key={item}
                    className="rounded-full border border-black/10 px-3 py-1 text-sm text-black/70 dark:border-white/15 dark:text-white/70"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      <section className="flex flex-col gap-4">
        <SectionHeading>Certifications</SectionHeading>
        <ul className="flex flex-col gap-2">
          {profile.certifications.map((cert) => (
            <li key={cert.name} className="flex items-baseline gap-2">
              <span className="font-medium">{cert.name}</span>
              <span className="text-sm text-black/60 dark:text-white/60">
                {cert.year}
                {cert.status === "in progress" ? " · in progress" : ""}
              </span>
            </li>
          ))}
        </ul>
      </section>

      <section className="flex flex-col gap-4">
        <SectionHeading>Education</SectionHeading>
        <ul className="flex flex-col gap-3">
          {profile.education.map((school) => (
            <li key={school.degree}>
              <p className="font-medium">{school.degree}</p>
              <p className="text-sm text-black/60 dark:text-white/60">
                {school.institution} · {school.period}
              </p>
            </li>
          ))}
        </ul>
      </section>

      <section className="flex flex-col gap-4">
        <SectionHeading>Outside work</SectionHeading>
        <ul className="list-disc space-y-1 pl-5 text-black/70 dark:text-white/70">
          {profile.interests.map((interest) => (
            <li key={interest}>{interest}</li>
          ))}
        </ul>
      </section>
    </div>
  );
}
