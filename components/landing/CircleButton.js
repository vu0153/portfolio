"use client";

import Link from "next/link";
import { useRef } from "react";

const MAX_OFFSET = 10;
const STRENGTH = 0.3;

export default function CircleButton({ href, children, variant = "dark", external = false }) {
  const ref = useRef(null);
  const reducedMotionRef = useRef(false);

  const handleMouseMove = (e) => {
    if (typeof window === "undefined") return;
    reducedMotionRef.current = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reducedMotionRef.current) return;

    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const relX = e.clientX - (rect.left + rect.width / 2);
    const relY = e.clientY - (rect.top + rect.height / 2);
    const x = Math.max(-MAX_OFFSET, Math.min(MAX_OFFSET, relX * STRENGTH));
    const y = Math.max(-MAX_OFFSET, Math.min(MAX_OFFSET, relY * STRENGTH));
    // Snappy while actively tracking the cursor...
    el.style.transitionDuration = "90ms";
    el.style.transform = `translate(${x}px, ${y}px)`;
  };

  const handleMouseLeave = () => {
    const el = ref.current;
    if (!el) return;
    // ...slower, springier settle back to rest.
    el.style.transitionDuration = "350ms";
    el.style.transform = "";
  };

  const classes =
    variant === "accent"
      ? "bg-accent text-dark-text"
      : "bg-dark text-dark-text";

  const className = `inline-flex h-28 w-28 shrink-0 items-center justify-center rounded-full text-center text-sm leading-tight tracking-[0.02em] transition-transform [transition-timing-function:var(--ease-out)] hover:scale-105 sm:h-32 sm:w-32 ${classes}`;

  if (external) {
    return (
      <a
        ref={ref}
        href={href}
        target="_blank"
        rel="noreferrer"
        className={className}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
      >
        {children}
      </a>
    );
  }

  return (
    <Link
      ref={ref}
      href={href}
      className={className}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      {children}
    </Link>
  );
}
