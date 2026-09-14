"use client";

import { Children, cloneElement, useEffect, useRef, useState } from "react";

export default function Reveal({
  children,
  className = "",
  as: Tag = "div",
  stagger = false,
  staggerDelay = 60,
}) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return undefined;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0, rootMargin: "150px" }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const state = visible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0";
  const transitionClasses = `reveal transition-all duration-700 [transition-timing-function:var(--ease-out)]`;

  if (stagger) {
    const items = Children.toArray(children);
    return (
      <Tag ref={ref} className={className}>
        {items.map((child, i) =>
          cloneElement(child, {
            className: `${child.props.className ?? ""} ${transitionClasses} ${state}`.trim(),
            style: { ...(child.props.style || {}), transitionDelay: `${i * staggerDelay}ms` },
          })
        )}
      </Tag>
    );
  }

  return (
    <Tag ref={ref} className={`${transitionClasses} ${state} ${className}`}>
      {children}
    </Tag>
  );
}
