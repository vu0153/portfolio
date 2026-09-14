"use client";

import { useEffect, useState } from "react";
import { lockScroll, unlockScroll } from "@/lib/scrollLock";

const HOLD_MS = 1500;
const LEAVE_MS = 600;

export default function IntroSplash() {
  const [phase, setPhase] = useState(null);

  useEffect(() => {
    if (typeof window === "undefined") return undefined;

    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const alreadyShown = sessionStorage.getItem("introShown");

    if (reduced || alreadyShown) {
      return undefined;
    }

    // sessionStorage is written from inside the timer callback (not synchronously
    // here) so that React Strict Mode's dev-only mount->cleanup->remount cycle
    // cancels the discarded mount's timer before it can mark the intro as shown.
    const showTimer = setTimeout(() => {
      sessionStorage.setItem("introShown", "1");
      setPhase("holding");
    }, 0);
    const leaveTimer = setTimeout(() => setPhase("leaving"), HOLD_MS);
    const doneTimer = setTimeout(() => setPhase(null), HOLD_MS + LEAVE_MS);
    return () => {
      clearTimeout(showTimer);
      clearTimeout(leaveTimer);
      clearTimeout(doneTimer);
    };
  }, []);

  useEffect(() => {
    if (!phase) return undefined;
    lockScroll();
    return () => unlockScroll();
  }, [phase]);

  if (!phase) return null;

  return (
    <div
      aria-hidden
      className={`fixed inset-0 z-[200] flex items-center justify-center bg-dark ${
        phase === "leaving" ? "intro-splash-leave" : ""
      }`}
    >
      <p className="intro-splash-text px-6 text-center text-2xl font-normal tracking-tight text-dark-text sm:text-3xl">
        Welcome to Ricky&apos;s Portfolio
      </p>
    </div>
  );
}
