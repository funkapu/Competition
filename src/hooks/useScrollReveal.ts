"use client";
import { useEffect, useRef } from "react";
import { usePathname } from "next/navigation";

export function useScrollReveal(className = "reveal") {
  const ref = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add("revealed");
          observer.disconnect();
        }
      },
      { threshold: 0.12 }
    );

    el.classList.add(className);
    observer.observe(el);
    return () => observer.disconnect();
  }, [className]);

  return ref;
}

export function useScrollRevealAll(selector = ".reveal, .reveal-scale") {
  const pathname = usePathname();

  useEffect(() => {
    // Wait one frame for Next.js to finish rendering the new page's DOM
    const timer = requestAnimationFrame(() => {
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add("revealed");
              observer.unobserve(entry.target);
            }
          });
        },
        { threshold: 0.1, rootMargin: "0px 0px -40px 0px" }
      );

      // Strip .revealed so elements animate fresh on every navigation
      document.querySelectorAll(selector).forEach((el) => {
        el.classList.remove("revealed");
        observer.observe(el);
      });

      return () => observer.disconnect();
    });

    return () => cancelAnimationFrame(timer);
  }, [selector, pathname]);
}
