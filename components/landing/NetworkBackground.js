"use client";

import { useEffect, useRef } from "react";

const MAX_DISTANCE = 150;
const NODE_SPEED = 0.12;
const PULSE_SPEED = 0.01;
const PULSE_SPAWN_CHANCE = 0.025;

export default function NetworkBackground() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return undefined;
    const ctx = canvas.getContext("2d");
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const dpr = Math.min(window.devicePixelRatio || 1, 2);

    let width = 0;
    let height = 0;
    let nodes = [];
    let pulses = [];
    let animationId = null;
    let visible = true;

    function initNodes() {
      const count = width < 640 ? 34 : width < 1200 ? 55 : 75;
      nodes = Array.from({ length: count }, () => ({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * NODE_SPEED,
        vy: (Math.random() - 0.5) * NODE_SPEED,
      }));
      pulses = [];
    }

    function resize() {
      width = canvas.clientWidth;
      height = canvas.clientHeight;
      canvas.width = width * dpr;
      canvas.height = height * dpr;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      initNodes();
    }

    function step() {
      ctx.clearRect(0, 0, width, height);

      if (!reducedMotion) {
        nodes.forEach((n) => {
          n.x += n.vx;
          n.y += n.vy;
          if (n.x < 0 || n.x > width) n.vx *= -1;
          if (n.y < 0 || n.y > height) n.vy *= -1;
          n.x = Math.max(0, Math.min(width, n.x));
          n.y = Math.max(0, Math.min(height, n.y));
        });
      }

      const activeConnections = [];
      for (let i = 0; i < nodes.length; i++) {
        for (let j = i + 1; j < nodes.length; j++) {
          const a = nodes[i];
          const b = nodes[j];
          const dx = a.x - b.x;
          const dy = a.y - b.y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < MAX_DISTANCE) {
            const alpha = (1 - dist / MAX_DISTANCE) * 0.3;
            ctx.strokeStyle = `rgba(245, 244, 240, ${alpha})`;
            ctx.lineWidth = 1;
            ctx.beginPath();
            ctx.moveTo(a.x, a.y);
            ctx.lineTo(b.x, b.y);
            ctx.stroke();
            activeConnections.push([a, b]);
          }
        }
      }

      if (!reducedMotion && activeConnections.length && Math.random() < PULSE_SPAWN_CHANCE) {
        const [a, b] = activeConnections[Math.floor(Math.random() * activeConnections.length)];
        pulses.push({ a, b, t: 0 });
      }

      pulses = pulses.filter((p) => p.t < 1);
      pulses.forEach((p) => {
        p.t += PULSE_SPEED;
        const x = p.a.x + (p.b.x - p.a.x) * p.t;
        const y = p.a.y + (p.b.y - p.a.y) * p.t;
        const fade = Math.sin(p.t * Math.PI);
        ctx.beginPath();
        ctx.arc(x, y, 2.4, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(94, 112, 235, ${0.9 * fade})`;
        ctx.shadowColor = "rgba(94, 112, 235, 0.9)";
        ctx.shadowBlur = 8;
        ctx.fill();
        ctx.shadowBlur = 0;
      });

      nodes.forEach((n) => {
        ctx.beginPath();
        ctx.arc(n.x, n.y, 1.5, 0, Math.PI * 2);
        ctx.fillStyle = "rgba(245, 244, 240, 0.45)";
        ctx.fill();
      });

      if (visible && !reducedMotion) {
        animationId = requestAnimationFrame(step);
      }
    }

    function handleVisibility() {
      visible = document.visibilityState === "visible";
      if (visible && !animationId && !reducedMotion) {
        animationId = requestAnimationFrame(step);
      }
    }

    resize();
    step();

    window.addEventListener("resize", resize);
    document.addEventListener("visibilitychange", handleVisibility);

    return () => {
      window.removeEventListener("resize", resize);
      document.removeEventListener("visibilitychange", handleVisibility);
      if (animationId) cancelAnimationFrame(animationId);
    };
  }, []);

  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      <canvas ref={canvasRef} aria-hidden="true" className="h-full w-full" />
      <div
        aria-hidden
        className="absolute inset-0"
        style={{ background: "radial-gradient(ellipse at center, transparent 35%, #222225 88%)" }}
      />
    </div>
  );
}
