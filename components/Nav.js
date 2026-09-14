"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import profile from "@/data/profile";

const links = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/projects", label: "Projects" },
  { href: "/photography", label: "Photography" },
  { href: "/contact", label: "Contact" },
];

export default function Nav() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [lastPathname, setLastPathname] = useState(pathname);

  if (pathname !== lastPathname) {
    setLastPathname(pathname);
    setOpen(false);
  }

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 80);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  useEffect(() => {
    if (!open) return undefined;
    const onKeyDown = (e) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [open]);

  const showTextLinks = !scrolled;

  return (
    <header
      className={`sticky top-0 z-50 border-b bg-background transition-shadow ${
        scrolled ? "border-black/10 shadow-sm dark:border-white/15" : "border-transparent"
      }`}
    >
      <div className="mx-auto flex max-w-4xl items-center justify-between px-4 py-4 sm:px-6">
        <Link href="/" className="font-semibold">
          {profile.name}
        </Link>

        <ul className={`hidden gap-6 ${showTextLinks ? "sm:flex" : "sm:hidden"}`}>
          {links.map((link) => {
            const active = pathname === link.href;
            return (
              <li key={link.href}>
                <Link
                  href={link.href}
                  aria-current={active ? "page" : undefined}
                  className={
                    active
                      ? "font-semibold underline underline-offset-4"
                      : "hover:underline underline-offset-4"
                  }
                >
                  {link.label}
                </Link>
              </li>
            );
          })}
        </ul>

        <button
          type="button"
          className={`relative flex h-9 w-9 flex-col items-center justify-center gap-1.5 rounded-full ${
            showTextLinks ? "sm:hidden" : ""
          }`}
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          onClick={() => setOpen((prev) => !prev)}
        >
          <span
            className={`block h-0.5 w-5 bg-current transition-transform ${
              open ? "translate-y-2 rotate-45" : ""
            }`}
          />
          <span className={`block h-0.5 w-5 bg-current transition-opacity ${open ? "opacity-0" : ""}`} />
          <span
            className={`block h-0.5 w-5 bg-current transition-transform ${
              open ? "-translate-y-2 -rotate-45" : ""
            }`}
          />
        </button>
      </div>

      <div
        className={`fixed inset-0 z-40 flex flex-col items-center justify-center gap-6 bg-background transition-all duration-300 [transition-timing-function:var(--ease-out)] ${
          open ? "visible scale-100 opacity-100" : "invisible scale-95 opacity-0"
        }`}
      >
        {links.map((link, i) => {
          const active = pathname === link.href;
          return (
            <Link
              key={link.href}
              href={link.href}
              aria-current={active ? "page" : undefined}
              tabIndex={open ? undefined : -1}
              style={{
                transitionDelay: open ? `${i * 40}ms` : "0ms",
                transitionDuration: "300ms",
              }}
              className={`text-4xl font-normal tracking-tight transition-all [transition-timing-function:var(--ease-out)] hover:opacity-60 sm:text-6xl ${
                open ? "translate-y-0 opacity-100" : "translate-y-3 opacity-0"
              } ${active ? "underline underline-offset-8" : ""}`}
            >
              {link.label}
            </Link>
          );
        })}

        <div className="absolute bottom-8 flex gap-4 text-sm text-muted">
          <a href={`mailto:${profile.contact.email}`} tabIndex={open ? undefined : -1} className="hover:text-ink">
            Email
          </a>
          <a
            href={profile.contact.linkedin}
            target="_blank"
            rel="noreferrer"
            tabIndex={open ? undefined : -1}
            className="hover:text-ink"
          >
            LinkedIn
          </a>
        </div>
      </div>
    </header>
  );
}
