"use client";

import { useEffect, useRef } from "react";
import { useReducedMotion } from "framer-motion";

const NODE_DENSITY = 1 / 28000; // nodes per px² — ~30 nodes on a desktop hero
const MAX_NODES = 40;
const LINK_DISTANCE = 150;
const SPEED = 0.18;

type Node = { x: number; y: number; vx: number; vy: number };

export function NetworkGraph() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const reduce = useReducedMotion();

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let nodes: Node[] = [];
    let raf = 0;
    let width = 0;
    let height = 0;

    function resize() {
      if (!canvas || !ctx) return;
      const dpr = window.devicePixelRatio || 1;
      width = canvas.offsetWidth;
      height = canvas.offsetHeight;
      canvas.width = width * dpr;
      canvas.height = height * dpr;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

      const count = Math.min(Math.round(width * height * NODE_DENSITY), MAX_NODES);
      nodes = Array.from({ length: count }, () => ({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * SPEED * 2,
        vy: (Math.random() - 0.5) * SPEED * 2,
      }));
    }

    function draw(step: boolean) {
      if (!ctx) return;
      const accent = getComputedStyle(document.documentElement)
        .getPropertyValue("--accent")
        .trim();
      ctx.clearRect(0, 0, width, height);

      for (const n of nodes) {
        if (step) {
          n.x += n.vx;
          n.y += n.vy;
          if (n.x < 0 || n.x > width) n.vx *= -1;
          if (n.y < 0 || n.y > height) n.vy *= -1;
        }
        ctx.beginPath();
        ctx.arc(n.x, n.y, 1.5, 0, Math.PI * 2);
        ctx.fillStyle = accent;
        ctx.fill();
      }

      ctx.strokeStyle = accent;
      ctx.lineWidth = 0.5;
      for (let i = 0; i < nodes.length; i++) {
        for (let j = i + 1; j < nodes.length; j++) {
          const dx = nodes[i].x - nodes[j].x;
          const dy = nodes[i].y - nodes[j].y;
          const dist = Math.hypot(dx, dy);
          if (dist < LINK_DISTANCE) {
            ctx.globalAlpha = 1 - dist / LINK_DISTANCE;
            ctx.beginPath();
            ctx.moveTo(nodes[i].x, nodes[i].y);
            ctx.lineTo(nodes[j].x, nodes[j].y);
            ctx.stroke();
          }
        }
      }
      ctx.globalAlpha = 1;
    }

    function loop() {
      draw(true);
      raf = requestAnimationFrame(loop);
    }

    resize();
    if (reduce) {
      draw(false); // static frame — no motion
    } else {
      loop();
    }

    const onResize = () => {
      resize();
      if (reduce) draw(false);
    };
    window.addEventListener("resize", onResize);
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", onResize);
    };
  }, [reduce]);

  return (
    <canvas
      ref={canvasRef}
      aria-hidden
      className="absolute inset-0 w-full h-full pointer-events-none opacity-[0.12]"
    />
  );
}
