import profile from "@/data/profile";
import LocalTime from "./LocalTime";

export default function Footer() {
  return (
    <footer className="mt-auto border-t border-black/10 dark:border-white/15">
      <div className="mx-auto flex max-w-4xl flex-col gap-2 px-4 py-6 text-sm text-black/60 sm:flex-row sm:items-center sm:justify-between sm:px-6 dark:text-white/60">
        <p>
          &copy; {new Date().getFullYear()} {profile.name}
        </p>
        <LocalTime />
        <div className="flex gap-4">
          <a href={`mailto:${profile.contact.email}`} className="hover:underline">
            Email
          </a>
          <a
            href={profile.contact.linkedin}
            target="_blank"
            rel="noreferrer"
            className="hover:underline"
          >
            LinkedIn
          </a>
        </div>
      </div>
    </footer>
  );
}
