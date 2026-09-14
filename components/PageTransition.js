"use client";

import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

export default function PageTransition() {
  const pathname = usePathname();
  const [animating, setAnimating] = useState(false);
  const [lastPathname, setLastPathname] = useState(pathname);

  if (pathname !== lastPathname) {
    setLastPathname(pathname);
    const prefersReducedMotion =
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (!prefersReducedMotion) {
      setAnimating(true);
    }
  }

  useEffect(() => {
    if (!animating) return undefined;
    const timeout = setTimeout(() => setAnimating(false), 550);
    return () => clearTimeout(timeout);
  }, [animating]);

  if (!animating) return null;

  return <div aria-hidden className="page-transition-veil pointer-events-none fixed inset-0 z-[100] bg-dark" />;
}
