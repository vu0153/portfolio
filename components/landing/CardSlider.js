"use client";

import { Children, useCallback, useEffect, useRef, useState } from "react";
import NetworkBackground from "./NetworkBackground";

const SPACING_VW = 58;
const WHEEL_DIVISOR = 400;
const WHEEL_SETTLE_MS = 160;
const ARROW_MAX_OFFSET = 14;
const ARROW_STRENGTH = 0.3;

const lerp = (a, b, t) => a + (b - a) * t;
const clamp01 = (v) => Math.max(0, Math.min(1, v));

export default function CardSlider({ children, labels = [] }) {
  const cards = Children.toArray(children);
  const count = cards.length;
  const [position, setPosition] = useState(0);
  const [interacting, setInteracting] = useState(false);
  const [dragging, setDragging] = useState(false);
  const [reducedMotion, setReducedMotion] = useState(false);
  const containerRef = useRef(null);
  const dragRef = useRef(null);
  const wheelTimeoutRef = useRef(null);
  const prevRef = useRef(null);
  const nextRef = useRef(null);

  const clampPosition = useCallback((v) => Math.max(0, Math.min(count - 1, v)), [count]);

  const settleTo = useCallback(
    (target) => {
      setInteracting(false);
      setPosition(clampPosition(target));
    },
    [clampPosition]
  );

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    const onChange = () => setReducedMotion(mq.matches);
    const timer = setTimeout(onChange, 0);
    mq.addEventListener("change", onChange);
    return () => {
      clearTimeout(timer);
      mq.removeEventListener("change", onChange);
    };
  }, []);

  useEffect(() => {
    const onKeyDown = (e) => {
      const tag = document.activeElement?.tagName;
      if (tag === "INPUT" || tag === "TEXTAREA") return;
      if (e.key === "ArrowRight") settleTo(Math.round(position) + 1);
      if (e.key === "ArrowLeft") settleTo(Math.round(position) - 1);
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [position, settleTo]);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return undefined;

    const onWheel = (e) => {
      if (Math.abs(e.deltaY) <= Math.abs(e.deltaX)) return;
      e.preventDefault();
      setInteracting(true);
      setPosition((p) => clampPosition(p + e.deltaY / WHEEL_DIVISOR));
      clearTimeout(wheelTimeoutRef.current);
      wheelTimeoutRef.current = setTimeout(() => {
        setPosition((p) => {
          settleTo(Math.round(p));
          return p;
        });
      }, WHEEL_SETTLE_MS);
    };
    el.addEventListener("wheel", onWheel, { passive: false });
    return () => {
      el.removeEventListener("wheel", onWheel);
      clearTimeout(wheelTimeoutRef.current);
    };
  }, [clampPosition, settleTo]);

  useEffect(() => {
    if (!dragging) return undefined;

    const onMove = (e) => {
      if (!dragRef.current) return;
      const { startX, startPosition } = dragRef.current;
      const deltaX = e.clientX - startX;
      const spacingPx = window.innerWidth * (SPACING_VW / 100);
      setPosition(clampPosition(startPosition - deltaX / spacingPx));
    };
    const onUp = () => {
      dragRef.current = null;
      setDragging(false);
      setPosition((p) => {
        settleTo(Math.round(p));
        return p;
      });
    };

    window.addEventListener("pointermove", onMove);
    window.addEventListener("pointerup", onUp);
    window.addEventListener("pointercancel", onUp);
    return () => {
      window.removeEventListener("pointermove", onMove);
      window.removeEventListener("pointerup", onUp);
      window.removeEventListener("pointercancel", onUp);
    };
  }, [dragging, clampPosition, settleTo]);

  const onPointerDown = (e) => {
    if (e.pointerType === "mouse" && e.button !== 0) return;
    dragRef.current = { startX: e.clientX, startPosition: position };
    setInteracting(true);
    setDragging(true);
  };

  const goTo = (i) => settleTo(i);

  const magneticMouseMove = (el, e) => {
    if (typeof window === "undefined") return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    if (e.buttons !== 0) return;
    if (!el) return;

    const rect = el.getBoundingClientRect();
    const relX = e.clientX - (rect.left + rect.width / 2);
    const relY = e.clientY - (rect.top + rect.height / 2);
    const x = Math.max(-ARROW_MAX_OFFSET, Math.min(ARROW_MAX_OFFSET, relX * ARROW_STRENGTH));
    const y = Math.max(-ARROW_MAX_OFFSET, Math.min(ARROW_MAX_OFFSET, relY * ARROW_STRENGTH));
    el.style.transitionDuration = "90ms";
    el.style.transform = `translate(${x}px, ${y}px)`;
  };

  const magneticMouseLeave = (el) => {
    if (!el) return;
    el.style.transitionDuration = "350ms";
    el.style.transform = "";
  };

  const handlePrevMouseMove = (e) => magneticMouseMove(prevRef.current, e);
  const handlePrevMouseLeave = () => magneticMouseLeave(prevRef.current);
  const handleNextMouseMove = (e) => magneticMouseMove(nextRef.current, e);
  const handleNextMouseLeave = () => magneticMouseLeave(nextRef.current);

  const transition =
    !interacting && !reducedMotion
      ? "transform 0.6s var(--ease-out), opacity 0.5s var(--ease-out), filter 0.5s var(--ease-out)"
      : "none";

  return (
    <div
      ref={containerRef}
      onPointerDown={onPointerDown}
      className="relative h-[100dvh] w-screen touch-pan-y overflow-hidden bg-[#222225] select-none"
      style={{ perspective: reducedMotion ? "none" : "1200px" }}
    >
      <NetworkBackground />

      {cards.map((card, i) => {
        const relative = i - position;
        const distance = Math.abs(relative);
        const isCurrent = Math.round(position) === i;

        const scale = reducedMotion ? (isCurrent ? 1 : 0.9) : lerp(1, 0.88, clamp01(distance));
        const rotateY = reducedMotion ? 0 : -Math.sign(relative) * lerp(0, 8, clamp01(distance));
        const translateX = relative * SPACING_VW;
        const opacity = reducedMotion ? (isCurrent ? 1 : 0.4) : lerp(1, 0.3, clamp01(distance / 2));
        const brightness = reducedMotion ? 1 : lerp(1, 0.55, clamp01(distance));
        const blur = reducedMotion ? 0 : lerp(0, 4, clamp01(distance));
        const zIndex = Math.round(100 - distance * 10);

        return (
          <div
            key={i}
            className="cover-card absolute top-1/2 left-1/2 h-[78vh] max-h-[760px] w-[68vw] max-w-[980px] touch-pan-y overflow-y-auto rounded-2xl border-2 border-dark-text/30 shadow-[0_40px_100px_rgba(0,0,0,0.65)]"
            style={{
              transform: `translate(-50%, -50%) translateX(${translateX}vw) scale(${scale}) rotateY(${rotateY}deg)`,
              opacity,
              filter: `brightness(${brightness}) blur(${blur}px)`,
              zIndex,
              transition,
              pointerEvents: isCurrent ? "auto" : "none",
            }}
            aria-hidden={!isCurrent}
            inert={!isCurrent}
          >
            {card}
          </div>
        );
      })}

      <div className="pointer-events-none absolute inset-x-0 bottom-5 z-[200] flex justify-center px-6 sm:bottom-8">
        <div className="pointer-events-auto flex w-full max-w-2xl items-center">
          {cards.map((_, i) => {
            const isActive = Math.round(position) === i;
            return (
              <div key={i} className={`flex items-center ${i < count - 1 ? "flex-1" : ""}`}>
                <button
                  type="button"
                  onClick={() => goTo(i)}
                  aria-label={`Go to slide ${i + 1} of ${count}${labels[i] ? `: ${labels[i]}` : ""}`}
                  aria-current={isActive ? "true" : undefined}
                  className="group flex flex-col items-center gap-2"
                >
                  <span
                    aria-hidden
                    className={`h-2.5 w-2.5 rounded-full transition-[background-color,transform] duration-300 [transition-timing-function:var(--ease-out)] ${
                      isActive ? "scale-125 bg-dark-text" : "bg-dark-text/30 group-hover:bg-dark-text/60"
                    }`}
                  />
                  {labels[i] ? (
                    <span
                      className={`hidden text-xs tracking-[0.04em] whitespace-nowrap transition-colors duration-300 sm:block ${
                        isActive ? "text-dark-text" : "text-dark-text/40 group-hover:text-dark-text/70"
                      }`}
                    >
                      {labels[i]}
                    </span>
                  ) : null}
                </button>
                {i < count - 1 ? <span aria-hidden className="mx-2 h-px flex-1 bg-dark-text/20 sm:mx-3" /> : null}
              </div>
            );
          })}
        </div>
      </div>

      {Math.round(position) !== 0 ? (
        <button
          ref={prevRef}
          type="button"
          onClick={() => goTo(Math.round(position) - 1)}
          onMouseMove={handlePrevMouseMove}
          onMouseLeave={handlePrevMouseLeave}
          aria-label="Previous slide"
          className="group absolute top-1/2 left-3 z-[200] hidden -translate-y-1/2 transition-transform [transition-timing-function:var(--ease-out)] sm:flex lg:left-6"
        >
          <span aria-hidden className="gallery-pulse absolute inset-0 rounded-full bg-dark" />
          <span className="relative flex h-16 w-16 items-center justify-center rounded-full bg-dark text-dark-text shadow-lg transition-transform [transition-timing-function:var(--ease-out)] group-hover:scale-105 sm:h-20 sm:w-20">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" className="h-6 w-6">
              <path d="M15 5l-7 7 7 7" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </span>
        </button>
      ) : null}
      {Math.round(position) !== count - 1 ? (
        <button
          ref={nextRef}
          type="button"
          onClick={() => goTo(Math.round(position) + 1)}
          onMouseMove={handleNextMouseMove}
          onMouseLeave={handleNextMouseLeave}
          aria-label="Next slide"
          className="group absolute top-1/2 right-3 z-[200] hidden -translate-y-1/2 transition-transform [transition-timing-function:var(--ease-out)] sm:flex lg:right-6"
        >
          <span aria-hidden className="gallery-pulse absolute inset-0 rounded-full bg-dark" />
          <span className="relative flex h-16 w-16 items-center justify-center rounded-full bg-dark text-dark-text shadow-lg transition-transform [transition-timing-function:var(--ease-out)] group-hover:scale-105 sm:h-20 sm:w-20">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" className="h-6 w-6">
              <path d="M9 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </span>
        </button>
      ) : null}
    </div>
  );
}
