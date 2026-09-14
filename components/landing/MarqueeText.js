"use client";

import { useEffect, useRef } from "react";

export default function MarqueeText({ text, repeat = 4 }) {
  const trackRef = useRef(null);

  useEffect(() => {
    const el = trackRef.current;
    if (!el) return undefined;

    const observer = new IntersectionObserver(
      ([entry]) => {
        el.style.animationPlayState = entry.isIntersecting ? "running" : "paused";
      },
      { threshold: 0 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={trackRef}
      className="marquee-track flex w-max items-center gap-20 whitespace-nowrap font-semibold leading-none tracking-[-0.03em] text-white"
      style={{ fontSize: "clamp(5rem, 2rem + 11vw, 13rem)", willChange: "transform" }}
    >
      <span className="flex shrink-0 items-center gap-20">
        {Array.from({ length: repeat }).map((_, i) => (
          <span key={i}>{text}</span>
        ))}
      </span>
      <span aria-hidden="true" className="flex shrink-0 items-center gap-20">
        {Array.from({ length: repeat }).map((_, i) => (
          <span key={`dup-${i}`}>{text}</span>
        ))}
      </span>
    </div>
  );
}
