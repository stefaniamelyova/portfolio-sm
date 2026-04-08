'use client';

import { useEffect, useRef } from 'react';

export default function CustomCursor() {
  const dotRef   = useRef<HTMLDivElement>(null);
  const trailRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!window.matchMedia('(pointer: fine)').matches) return;

    const dot   = dotRef.current!;
    const trail = trailRef.current!;

    let mouseX = -300, mouseY = -300;
    let trailX = -300, trailY = -300;
    let rafId: number;
    let hovering = false;

    const INTERACTIVE = 'a, button, [role="button"], label, input, textarea, select, [tabindex]';

    const onMove = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
      const el = document.elementFromPoint(e.clientX, e.clientY);
      const active = !!el?.closest(INTERACTIVE);
      if (active !== hovering) {
        hovering = active;
        dot.classList.toggle('is-hovering', active);
        trail.classList.toggle('is-hovering', active);
      }
    };

    const onLeave = () => { dot.style.opacity = '0'; trail.style.opacity = '0'; };
    const onEnter = () => { dot.style.opacity = '';  trail.style.opacity = '';  };

    const tick = () => {
      dot.style.transform = `translate(${mouseX}px,${mouseY}px)`;
      trailX += (mouseX - trailX) * 0.08;
      trailY += (mouseY - trailY) * 0.08;
      trail.style.transform = `translate(${trailX}px,${trailY}px)`;
      rafId = requestAnimationFrame(tick);
    };

    // Only hide the native cursor once JS is confirmed running
    document.documentElement.classList.add('custom-cursor-active');

    document.addEventListener('mousemove', onMove);
    document.documentElement.addEventListener('mouseleave', onLeave);
    document.documentElement.addEventListener('mouseenter', onEnter);
    rafId = requestAnimationFrame(tick);

    return () => {
      document.documentElement.classList.remove('custom-cursor-active');
      document.removeEventListener('mousemove', onMove);
      document.documentElement.removeEventListener('mouseleave', onLeave);
      document.documentElement.removeEventListener('mouseenter', onEnter);
      cancelAnimationFrame(rafId);
    };
  }, []);

  return (
    <>
      <div ref={trailRef} className="cursor-trail" aria-hidden="true" />
      <div ref={dotRef}   className="cursor-dot"   aria-hidden="true" />
    </>
  );
}
