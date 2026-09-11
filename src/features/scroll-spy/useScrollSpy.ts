"use client";

import { useEffect, useState } from "react";

export function useScrollSpy(sectionIds: string[]): string {
  const [activeId, setActiveId] = useState(sectionIds[0] ?? "");

  useEffect(() => {
    const handleScroll = () => {
      const mid = window.scrollY + window.innerHeight / 2;
      let closest = sectionIds[0] ?? "";
      let minDist = Infinity;
      sectionIds.forEach((id) => {
        const el = document.getElementById(id);
        if (!el) return;
        const top = window.scrollY + el.getBoundingClientRect().top;
        const dist = Math.abs(mid - (top + el.offsetHeight / 2));
        if (dist < minDist) {
          minDist = dist;
          closest = id;
        }
      });
      setActiveId(closest);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, [sectionIds]);

  return activeId;
}
