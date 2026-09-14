"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import gallery from "@/data/gallery";
import { lockScroll, unlockScroll } from "@/lib/scrollLock";

const CLOSE_MS = 450;
const MAX_OFFSET = 14;
const STRENGTH = 0.3;

export default function Gallery() {
  const [phase, setPhase] = useState("closed");
  const tagRef = useRef(null);

  useEffect(() => {
    if (phase !== "closing") return undefined;
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const timeout = setTimeout(() => setPhase("closed"), reduced ? 0 : CLOSE_MS);
    return () => clearTimeout(timeout);
  }, [phase]);

  useEffect(() => {
    if (phase === "closed") return undefined;

    lockScroll();
    const onKeyDown = (e) => {
      if (e.key === "Escape") setPhase("closing");
    };
    window.addEventListener("keydown", onKeyDown);

    return () => {
      unlockScroll();
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [phase]);

  const open = () => phase === "closed" && setPhase("open");
  const close = () => phase === "open" && setPhase("closing");

  const handleMouseMove = (e) => {
    if (typeof window === "undefined") return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const el = tagRef.current;
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
    const el = tagRef.current;
    if (!el) return;
    el.style.transitionDuration = "350ms";
    el.style.transform = "";
  };

  return (
    <>
      <button
        ref={tagRef}
        type="button"
        onClick={open}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        aria-haspopup="dialog"
        className="group fixed top-1/2 right-5 z-40 -translate-y-1/2 transition-transform [transition-timing-function:var(--ease-out)] sm:right-8"
      >
        <span aria-hidden className="gallery-pulse absolute inset-0 rounded-full bg-dark" />
        <span className="relative flex h-24 w-24 flex-col items-center justify-center gap-1.5 rounded-full bg-dark text-dark-text shadow-lg transition-transform [transition-timing-function:var(--ease-out)] group-hover:scale-105 sm:h-28 sm:w-28">
          <svg
            aria-hidden="true"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.4"
            className="h-6 w-6 sm:h-7 sm:w-7"
          >
            <rect x="3" y="7" width="18" height="13" rx="2" />
            <path d="M8 7l1.5-2.5h5L16 7" />
            <circle cx="12" cy="13.5" r="3.5" />
          </svg>
          <span className="text-xs font-bold tracking-[0.08em] uppercase">Gallery</span>
        </span>
      </button>

      {phase !== "closed" ? (
        <div
          role="dialog"
          aria-modal="true"
          aria-label="Photo gallery"
          className={`fixed inset-0 z-[110] overflow-y-auto bg-dark text-dark-text ${
            phase === "closing" ? "gallery-leave" : "gallery-enter"
          }`}
        >
          <div className="mx-auto flex max-w-5xl flex-col gap-8 px-[var(--page-x)] py-10 sm:py-14">
            <div className="flex items-center justify-between">
              <p className="text-xs tracking-[0.14em] text-dark-text/60 uppercase">Gallery</p>
              <button
                type="button"
                onClick={close}
                aria-label="Close gallery"
                className="flex h-9 w-9 items-center justify-center rounded-full text-lg transition-opacity hover:opacity-70"
              >
                ✕
              </button>
            </div>

            {gallery.length === 0 ? (
              <p className="py-20 text-center text-dark-text/60">
                New photos will show up here soon.
              </p>
            ) : (
              <div className="grid grid-cols-2 gap-2 sm:grid-cols-3 sm:gap-3 lg:grid-cols-4">
                {gallery.map((photo, i) => (
                  <div
                    key={photo.src}
                    className="gallery-item relative aspect-[4/5] overflow-hidden bg-white/5"
                    style={{ animationDelay: `${Math.min(i, 10) * 40}ms` }}
                  >
                    <Image
                      src={photo.src}
                      alt={photo.alt}
                      fill
                      unoptimized
                      className="object-cover"
                    />
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      ) : null}
    </>
  );
}
