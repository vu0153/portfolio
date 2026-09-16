"use client";

import Link from "next/link";
import { useRef } from "react";

const MAX_OFFSET = 8;
const STRENGTH = 0.25;

const routes = [
  {
    number: "01",
    label: "Technical Projects",
    href: "/projects",
    icon: <path d="M3 6a1 1 0 0 1 1-1h4.5l1.5 2H20a1 1 0 0 1 1 1v10a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V6Z" />,
  },
  {
    number: "02",
    label: "About",
    href: "/about",
    icon: (
      <>
        <path d="M7 3h7l4 4v13a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1Z" />
        <path d="M14 3v4h4" />
        <path d="M9 12h6M9 15.5h6M9 8.5h2.5" />
      </>
    ),
  },
  {
    number: "03",
    label: "Photography",
    href: "/photography",
    icon: (
      <>
        <rect x="3" y="7.5" width="18" height="12.5" rx="2" />
        <path d="M8 7.5 9.3 5h5.4l1.3 2.5" />
        <circle cx="12" cy="13.5" r="3.3" />
      </>
    ),
  },
];

function RouteItem({ route }) {
  const ref = useRef(null);

  const handleMouseMove = (e) => {
    if (typeof window === "undefined") return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    // Ignore while a button is held: a mid-drag pointer session (e.g. the card
    // slider) also mutates transforms, and fighting over the same element's
    // style during an active drag causes Chromium to cancel the pointer.
    if (e.buttons !== 0) return;

    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const relX = e.clientX - (rect.left + rect.width / 2);
    const relY = e.clientY - (rect.top + rect.height / 2);
    const x = Math.max(-MAX_OFFSET, Math.min(MAX_OFFSET, relX * STRENGTH));
    const y = Math.max(-MAX_OFFSET, Math.min(MAX_OFFSET, relY * STRENGTH));
    el.style.transitionDuration = "90ms";
    el.style.transform = `translate(${x}px, ${y}px)`;
  };

  const handleMouseLeave = () => {
    const el = ref.current;
    if (!el) return;
    el.style.transitionDuration = "350ms";
    el.style.transform = "";
  };

  return (
    <Link
      ref={ref}
      href={route.href}
      draggable={false}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="group relative flex w-full items-center gap-4 overflow-hidden rounded-2xl border border-dark-text/25 bg-black/30 px-5 py-4 text-dark-text backdrop-blur-sm transition-transform [transition-timing-function:var(--ease-out)]"
    >
      <span
        aria-hidden
        className="absolute inset-0 origin-left scale-x-0 bg-accent transition-transform duration-500 [transition-timing-function:var(--ease-out)] group-hover:scale-x-100"
      />
      <svg
        aria-hidden="true"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.4"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="relative z-10 h-7 w-7 shrink-0"
      >
        {route.icon}
      </svg>
      <span className="relative z-10 flex flex-col items-start">
        <span className="text-xs text-dark-text/60">{route.number}</span>
        <span className="flex items-center gap-2 text-base font-semibold">
          {route.label}
          <span
            aria-hidden
            className="transition-transform duration-300 [transition-timing-function:var(--ease-out)] group-hover:translate-x-1.5"
          >
            →
          </span>
        </span>
      </span>
    </Link>
  );
}

export default function HeroRoutes() {
  return (
    <div className="relative z-10 mt-2 flex flex-col gap-3 px-[var(--page-x)] pb-10 text-sm tracking-[0.02em] sm:absolute sm:inset-y-0 sm:right-0 sm:mt-0 sm:w-[280px] sm:flex-col sm:items-start sm:justify-center sm:gap-4 sm:px-8 sm:pb-0 lg:w-[320px] lg:px-10">
      {routes.map((route) => (
        <RouteItem key={route.href} route={route} />
      ))}
    </div>
  );
}
