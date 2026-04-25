const font = (weight: number, size: string, lineHeight: string, color: string) => ({
  fontFamily: "var(--font-plus-jakarta-sans)",
  fontWeight: weight,
  fontSize: size,
  lineHeight,
  color,
});

const amenities = [
  {
    label: "3 Outdoor Pools",
    icon: <svg width="24" height="21" viewBox="0 0 24 21" fill="none"><path d="M2 15c1.5 0 2.5-1 4-1s2.5 1 4 1 2.5-1 4-1 2.5 1 4 1" stroke="#005CBD" strokeWidth="1.8" strokeLinecap="round"/><path d="M2 19c1.5 0 2.5-1 4-1s2.5 1 4 1 2.5-1 4-1 2.5 1 4 1" stroke="#005CBD" strokeWidth="1.8" strokeLinecap="round"/><path d="M6 11V4M10 11V4M14 11V4" stroke="#005CBD" strokeWidth="1.8" strokeLinecap="round"/><path d="M6 4h8" stroke="#005CBD" strokeWidth="1.8" strokeLinecap="round"/></svg>,
  },
  {
    label: "Full-service Spa",
    icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none"><path d="M12 3C12 3 7 8 7 13a5 5 0 0010 0c0-5-5-10-5-10z" stroke="#005CBD" strokeWidth="1.8" strokeLinejoin="round"/><path d="M12 13c0-3 2-6 4-8" stroke="#005CBD" strokeWidth="1.8" strokeLinecap="round"/><path d="M8 20h8" stroke="#005CBD" strokeWidth="1.8" strokeLinecap="round"/></svg>,
  },
  {
    label: "5 Restaurants",
    icon: <svg width="18" height="24" viewBox="0 0 18 24" fill="none"><path d="M1 1v8a4 4 0 004 4v10" stroke="#005CBD" strokeWidth="1.8" strokeLinecap="round"/><path d="M9 1v22M9 1c0 0 8 3 8 10H9" stroke="#005CBD" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/></svg>,
  },
  {
    label: "Gym & Fitness",
    icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none"><path d="M6 8H4a1 1 0 00-1 1v6a1 1 0 001 1h2M18 8h2a1 1 0 011 1v6a1 1 0 01-1 1h-2" stroke="#005CBD" strokeWidth="1.8" strokeLinecap="round"/><path d="M6 10H9M18 10h-3M9 7v10M15 7v10M9 12h6" stroke="#005CBD" strokeWidth="1.8" strokeLinecap="round"/></svg>,
  },
  {
    label: "Free High-speed Wi-Fi",
    icon: <svg width="28" height="20" viewBox="0 0 28 20" fill="none"><path d="M1 7c3.6-3.6 8.5-5.8 13.5-5.8S25 3.4 28.5 7" stroke="#005CBD" strokeWidth="1.8" strokeLinecap="round"/><path d="M5 11c2.5-2.5 5.9-4 9.5-4s7 1.5 9.5 4" stroke="#005CBD" strokeWidth="1.8" strokeLinecap="round"/><path d="M9 15c1.4-1.4 3.4-2.3 5.5-2.3s4.1.9 5.5 2.3" stroke="#005CBD" strokeWidth="1.8" strokeLinecap="round"/><circle cx="14.5" cy="19" r="1.5" fill="#005CBD"/></svg>,
  },
  {
    label: "Private Beach",
    icon: <svg width="22" height="22" viewBox="0 0 22 22" fill="none"><path d="M2 20h18" stroke="#005CBD" strokeWidth="1.8" strokeLinecap="round"/><path d="M11 4L4 16h14L11 4z" stroke="#005CBD" strokeWidth="1.8" strokeLinejoin="round"/><path d="M11 4v12" stroke="#005CBD" strokeWidth="1.8" strokeLinecap="round"/></svg>,
  },
];

const scoreRows = [
  { label: "Cleanliness", value: 9.5, pct: 95 },
  { label: "Service", value: 9.2, pct: 92 },
  { label: "Location", value: 8.9, pct: 89 },
];

function ScoreBar({ label, value, pct }: { label: string; value: number; pct: number }) {
  return (
    <div className="flex flex-col" style={{ gap: "4px", width: "100%" }}>
      <div className="flex flex-row justify-between items-center" style={{ width: "100%" }}>
        <span style={font(400, "16px", "24px", "#191C22")}>{label}</span>
        <span style={font(400, "16px", "24px", "#191C22")}>{value}</span>
      </div>
      <div style={{ width: "100%", height: "8px", background: "#E7E8F1", borderRadius: "9999px", position: "relative" }}>
        <div className="progress-bar" style={{ position: "absolute", left: 0, top: 0, bottom: 0, width: `${pct}%`, background: "#005CBD", borderRadius: "9999px" }} />
      </div>
    </div>
  );
}

export default function MainContentGrid() {
  return (
    <div className="flex flex-col lg:flex-row w-full" style={{ gap: "32px", paddingTop: "24px" }}>
      {/* Left Side */}
      <div
        className="flex flex-col items-start"
        style={{ flex: 1, gap: "48px" }}
      >
        {/* Overview */}
        <div className="flex flex-col items-start" style={{ gap: "16px", width: "100%" }}>
          <span style={font(400, "16px", "24px", "#191C22")}>Overview</span>
          <p style={{ ...font(400, "16px", "26px", "#424753"), margin: 0 }}>
            Experience unparalleled luxury at the Grand Azure Resort &amp; Spa, nestled on the pristine shores of Elounda Bay. This architectural masterpiece blends traditional Cretan charm with ultra-modern design, offering guests breathtaking panoramic views of the Mediterranean. Whether you&apos;re seeking a romantic getaway or a rejuvenation retreat, our world-class amenities and personalized service ensure a stay that transcends the ordinary.
          </p>
        </div>

        {/* Popular Amenities */}
        <div className="flex flex-col items-start" style={{ gap: "24px", width: "100%" }}>
          <span style={font(400, "16px", "24px", "#191C22")}>Popular Amenities</span>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 w-full" style={{ gap: "12px 0" }}>
            {amenities.map((a) => (
              <div key={a.label} className="flex flex-row items-center" style={{ gap: "12px", height: "28px" }}>
                {a.icon}
                <span style={font(400, "16px", "24px", "#191C22")}>{a.label}</span>
              </div>
            ))}
          </div>

          {/* See all amenities */}
          <div className="flex flex-row items-center" style={{ gap: "8px", paddingTop: "7.5px" }}>
            <span style={font(600, "16px", "24px", "#005CBD")}>See all 45 amenities</span>
            <svg width="12" height="8" viewBox="0 0 12 8" fill="none">
              <path d="M1 1l5 5 5-5" stroke="#005CBD" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>
        </div>
      </div>

      {/* Right Side */}
      <div
        className="flex flex-col items-start lg:w-[378px] w-full"
        style={{ gap: "32px" }}
      >
        {/* Score Card */}
        <div
          className="reveal flex flex-col items-start"
          style={{
            padding: "24px",
            gap: "16px",
            width: "100%",
            background: "#FFFFFF",
            border: "1px solid rgba(194, 198, 213, 0.3)",
            boxShadow: "0px 4px 12px rgba(0,0,0,0.05)",
            borderRadius: "16px",
          }}
        >
          {/* Top: label + score badge */}
          <div className="flex flex-row justify-between items-center" style={{ width: "100%" }}>
            <div className="flex flex-col" style={{ gap: "4px" }}>
              <span style={font(400, "16px", "24px", "#191C22")}>Excellent</span>
              <span style={font(400, "16px", "24px", "#424753")}>1,248 verified reviews</span>
            </div>
            <div
              className="flex items-center justify-center"
              style={{ width: "56px", height: "56px", background: "#005CBD", borderRadius: "12px" }}
            >
              <span style={font(700, "24px", "32px", "#FFFFFF")}>9.2</span>
            </div>
          </div>

          {/* Score bars */}
          <div className="flex flex-col" style={{ gap: "16px", width: "100%" }}>
            {scoreRows.map((row) => (
              <ScoreBar key={row.label} {...row} />
            ))}
          </div>
        </div>

        {/* Map Card */}
        <div
          className="reveal"
          style={{ transitionDelay: "150ms",
            width: "100%",
            background: "#FFFFFF",
            border: "1px solid rgba(194, 198, 213, 0.3)",
            boxShadow: "0px 4px 12px rgba(0,0,0,0.05)",
            borderRadius: "16px",
            overflow: "hidden",
          }}
        >
          <img src="/map2.png" alt="map" style={{ width: "100%", height: "192px", objectFit: "cover", display: "block" }} />
          <div style={{ padding: "16px", background: "#FFFFFF" }}>
            <span style={{ ...font(400, "16px", "24px", "#191C22"), display: "block" }}>Near Spinalonga Island</span>
            <span style={{ ...font(400, "16px", "24px", "#424753"), display: "block" }}>15 min walk to city center</span>
          </div>
        </div>
      </div>
    </div>
  );
}
