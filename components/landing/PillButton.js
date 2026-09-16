"use client";

import Link from "next/link";
import { useRef } from "react";

const MAX_OFFSET = 8;
const STRENGTH = 0.25;

export default function PillButton({ href, children, variant = "dark", external = false }) {
  const ref = useRef(null);

  const handleMouseMove = (e) => {
    if (typeof window === "undefined") return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
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

  const classes = variant === "accent" ? "bg-accent text-dark-text" : "bg-dark-text text-black";

  const className = `group inline-flex items-center gap-3 rounded-2xl px-7 py-4 text-base font-semibold tracking-[0.01em] shadow-[0_20px_50px_rgba(0,0,0,0.5)] transition-transform [transition-timing-function:var(--ease-out)] hover:scale-105 sm:px-9 sm:py-5 sm:text-lg ${classes}`;

  const content = (
    <>
      {children}
      <span
        aria-hidden
        className="transition-transform duration-300 [transition-timing-function:var(--ease-out)] group-hover:translate-x-1"
      >
        →
      </span>
    </>
  );

  if (external) {
    return (
      <a
        ref={ref}
        href={href}
        target="_blank"
        rel="noreferrer"
        draggable={false}
        className={className}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
      >
        {content}
      </a>
    );
  }

  return (
    <Link
      ref={ref}
      href={href}
      draggable={false}
      className={className}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      {content}
    </Link>
  );
}
