const navLinks = [
  { label: "Hotels", active: true },
  { label: "Flights", active: false },
  { label: "Bundles", active: false },
  { label: "Activities", active: false },
];

export default function Navbar() {
  return (
    <header
      className="absolute left-0 top-0 w-full h-[65px] flex flex-col items-start"
      style={{
        background: "rgba(255, 255, 255, 0.8)",
        borderBottom: "1px solid #E2E8F0",
        boxShadow: "0px 1px 2px rgba(0, 0, 0, 0.05)",
        backdropFilter: "blur(6px)",
      }}
    >
      <div className="flex flex-row justify-between items-center px-6 w-full h-16">
        {/* Left: Logo + Nav */}
        <div className="flex flex-row items-center gap-8">
          {/* Logo */}
          <span
            className="text-2xl font-black"
            style={{ color: "#2563EB", letterSpacing: "-1.2px", lineHeight: "32px" }}
          >
            T-Goda
          </span>

          {/* Nav Links */}
          <nav className="flex flex-row items-center gap-6">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href="#"
                className="text-body-sm flex flex-col items-start"
                style={{
                  color: link.active ? "#2563EB" : "#475569",
                  paddingBottom: link.active ? "4px" : "0px",
                  borderBottom: link.active ? "2px solid #2563EB" : "none",
                }}
              >
                {link.label}
              </a>
            ))}
          </nav>
        </div>

        {/* Right: Buttons */}
        <div className="flex flex-row items-center gap-4">
          <button
            className="text-body-sm flex items-center justify-center px-4 py-2 rounded-lg"
            style={{ color: "#475569" }}
          >
            Sign In
          </button>

          <button
            className="text-body-sm flex items-center justify-center px-4 py-2 rounded-lg text-white"
            style={{ background: "#005CBD" }}
          >
            Create Account
          </button>
        </div>
      </div>
    </header>
  );
}
