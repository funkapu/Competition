"use client";
import Link from "next/link";
import { useState, useEffect } from "react";

const navLinks = [
  { label: "Hotels", active: true, href: "/" },
  { label: "Flights", active: false, href: "/page2" },
  { label: "Bundles", active: false, href: "#" },
  { label: "Activities", active: false, href: "#" },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className="fixed left-0 top-0 w-full flex flex-col items-start z-50 anim-fade-in-down"
      style={{
        background: "rgba(255, 255, 255, 0.85)",
        borderBottom: "1px solid #E2E8F0",
        backdropFilter: "blur(12px)",
        boxShadow: scrolled
          ? "0px 4px 24px rgba(0, 0, 0, 0.10)"
          : "0px 1px 2px rgba(0, 0, 0, 0.05)",
        transition: "box-shadow 0.3s ease",
      }}
    >
      <div className="flex flex-row justify-between items-center px-4 md:px-6 w-full h-[65px]">
        {/* Left: Logo + Nav */}
        <div className="flex flex-row items-center gap-8">
          <Link href="/">
            <span
              className="text-2xl font-black"
              style={{ color: "#2563EB", letterSpacing: "-1.2px", lineHeight: "32px", transition: "opacity 0.2s" }}
              onMouseEnter={(e) => (e.currentTarget.style.opacity = "0.75")}
              onMouseLeave={(e) => (e.currentTarget.style.opacity = "1")}
            >
              T-Goda
            </span>
          </Link>

          <nav className="hidden md:flex flex-row items-center gap-6">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-body-sm flex flex-col items-start"
                style={{
                  color: link.active ? "#2563EB" : "#475569",
                  paddingBottom: link.active ? "4px" : "0px",
                  borderBottom: link.active ? "2px solid #2563EB" : "none",
                  transition: "color 0.2s",
                }}
                onMouseEnter={(e) => { if (!link.active) (e.currentTarget as HTMLElement).style.color = "#2563EB"; }}
                onMouseLeave={(e) => { if (!link.active) (e.currentTarget as HTMLElement).style.color = "#475569"; }}
              >
                {link.label}
              </a>
            ))}
          </nav>
        </div>

        {/* Right */}
        <div className="flex flex-row items-center gap-4">
          <div className="hidden md:flex flex-row items-center gap-4">
            <button
              className="text-body-sm btn-press flex items-center justify-center px-4 py-2 rounded-lg"
              style={{ color: "#475569" }}
            >
              Sign In
            </button>
            <button
              className="text-body-sm btn-press flex items-center justify-center px-4 py-2 rounded-lg text-white"
              style={{ background: "#005CBD", borderRadius: "8px" }}
            >
              Create Account
            </button>
          </div>

          <button
            className="md:hidden flex flex-col justify-center items-center gap-[5px] w-8 h-8"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            <span className={`block w-6 h-0.5 bg-[#475569] transition-all duration-300 ${menuOpen ? "rotate-45 translate-y-[7px]" : ""}`} />
            <span className={`block w-6 h-0.5 bg-[#475569] transition-all duration-300 ${menuOpen ? "opacity-0" : ""}`} />
            <span className={`block w-6 h-0.5 bg-[#475569] transition-all duration-300 ${menuOpen ? "-rotate-45 -translate-y-[7px]" : ""}`} />
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className="md:hidden w-full flex flex-col items-start px-4 pb-4 gap-4 overflow-hidden"
        style={{
          maxHeight: menuOpen ? "400px" : "0px",
          opacity: menuOpen ? 1 : 0,
          transition: "max-height 0.35s cubic-bezier(0.22,1,0.36,1), opacity 0.25s ease",
          background: "rgba(255,255,255,0.97)",
          borderTop: menuOpen ? "1px solid #E2E8F0" : "none",
          paddingTop: menuOpen ? "16px" : "0px",
        }}
      >
        {navLinks.map((link) => (
          <a
            key={link.label}
            href={link.href}
            className="text-body-sm w-full py-2"
            style={{ color: link.active ? "#2563EB" : "#475569" }}
            onClick={() => setMenuOpen(false)}
          >
            {link.label}
          </a>
        ))}
        <div className="flex flex-col w-full gap-2 pt-2" style={{ borderTop: "1px solid #E2E8F0" }}>
          <button className="text-body-sm btn-press py-2 rounded-lg w-full" style={{ color: "#475569", border: "1px solid #E2E8F0" }}>
            Sign In
          </button>
          <button className="text-body-sm btn-press py-2 rounded-lg w-full text-white" style={{ background: "#005CBD" }}>
            Create Account
          </button>
        </div>
      </div>
    </header>
  );
}
