import profile from "@/data/profile";

export const metadata = {
  title: "Contact",
  description: `Get in touch with ${profile.name}.`,
};

export default function ContactPage() {
  return (
    <div className="mx-auto flex max-w-4xl flex-col gap-6 px-4 py-16 sm:px-6">
      <h1 className="text-3xl font-semibold tracking-tight">Contact</h1>
      <p className="max-w-2xl text-lg leading-relaxed text-black/70 dark:text-white/70">
        Currently seeking full-time Network, IT Support or Helpdesk
        opportunities in Australia. Feel free to reach out.
      </p>
      <div className="flex flex-col gap-3 sm:flex-row">
        <a
          href={`mailto:${profile.contact.email}`}
          className="inline-flex h-11 items-center justify-center rounded-full bg-foreground px-6 font-medium text-background transition-colors hover:bg-black/80 dark:hover:bg-white/80"
        >
          Email {profile.contact.email}
        </a>
        <a
          href={profile.contact.linkedin}
          target="_blank"
          rel="noreferrer"
          className="inline-flex h-11 items-center justify-center rounded-full border border-black/15 px-6 font-medium transition-colors hover:bg-black/[.04] dark:border-white/20 dark:hover:bg-white/[.06]"
        >
          LinkedIn
        </a>
      </div>
    </div>
  );
}
