"use client";
import { useScrollRevealAll } from "@/hooks/useScrollReveal";

export default function ScrollRevealProvider({ children }: { children: React.ReactNode }) {
  useScrollRevealAll(".reveal, .reveal-scale");
  return <>{children}</>;
}
