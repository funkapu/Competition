const font = (weight: number, size: string, color: string) => ({
  fontFamily: "var(--font-plus-jakarta-sans)",
  fontWeight: weight,
  fontSize: size,
  lineHeight: "24px",
  color,
});

function Stars() {
  return (
    <div className="flex flex-row items-start">
      {Array.from({ length: 5 }).map((_, i) => (
        <svg key={i} width="20" height="19" viewBox="0 0 20 19" fill="none">
          <path d="M10 0l2.06 6.34H19L13.38 10.26l2.06 6.34L10 12.7l-5.44 3.9 2.06-6.34L1 6.34h6.94z" fill="#FACC15" />
        </svg>
      ))}
    </div>
  );
}

export default function HotelHeader() {
  return (
    <div className="anim-fade-in-up flex flex-col md:flex-row md:justify-between md:items-end w-full gap-4">
      {/* Left: name + stars + location */}
      <div className="flex flex-col items-start" style={{ gap: "8px" }}>
        {/* Stars + badge */}
        <div className="flex flex-row items-center" style={{ gap: "8px", height: "28px" }}>
          <Stars />
          <div style={{ background: "#005CBD", borderRadius: "4px", padding: "2px 8px" }}>
            <span style={font(400, "16px", "#FFFFFF")}>RESORT</span>
          </div>
        </div>

        {/* Hotel name */}
        <span style={font(400, "16px", "#191C22")}>Grand Azure Resort &amp; Spa, Elounda</span>

        {/* Location row */}
        <div className="flex flex-row items-center" style={{ gap: "8px", height: "24px" }}>
          <svg width="16" height="20" viewBox="0 0 16 20" fill="none">
            <path d="M8 0C4.13 0 1 3.13 1 7c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5C6.62 9.5 5.5 8.38 5.5 7S6.62 4.5 8 4.5 10.5 5.62 10.5 7 9.38 9.5 8 9.5z" fill="#005CBD" />
          </svg>
          <span style={font(400, "16px", "#424753")}>Elounda Bay, Crete, 72053, Greece</span>
          <span style={{ ...font(600, "16px", "#005CBD"), paddingLeft: "8px", cursor: "pointer" }}>Show on map</span>
        </div>
      </div>

      {/* Right: action buttons */}
      <div className="flex flex-row flex-wrap items-center" style={{ gap: "12px" }}>
        {/* Share */}
        <button
          className="btn-press flex flex-row items-center"
          style={{ padding: "8px 16px", gap: "8px", height: "42px", border: "1px solid #C2C6D5", borderRadius: "8px", background: "#FFFFFF" }}
        >
          <svg width="18" height="20" viewBox="0 0 18 20" fill="none">
            <circle cx="14" cy="3" r="2.5" stroke="#191C22" strokeWidth="1.5" />
            <circle cx="14" cy="17" r="2.5" stroke="#191C22" strokeWidth="1.5" />
            <circle cx="3" cy="10" r="2.5" stroke="#191C22" strokeWidth="1.5" />
            <path d="M11.5 4.5l-7 4M11.5 15.5l-7-4" stroke="#191C22" strokeWidth="1.5" />
          </svg>
          <span style={font(400, "16px", "#191C22")}>Share</span>
        </button>

        {/* Save */}
        <button
          className="btn-press flex flex-row items-center"
          style={{ padding: "8px 16px", gap: "8px", height: "42px", border: "1px solid #C2C6D5", borderRadius: "8px", background: "#FFFFFF" }}
        >
          <svg width="20" height="19" viewBox="0 0 20 19" fill="none">
            <path d="M10 17.5C10 17.5 1.5 12 1.5 6.5C1.5 4.01 3.51 2 6 2C7.63 2 9.04 2.85 10 4.09C10.96 2.85 12.37 2 14 2C16.49 2 18.5 4.01 18.5 6.5C18.5 12 10 17.5 10 17.5Z" stroke="#191C22" strokeWidth="1.5" strokeLinejoin="round" />
          </svg>
          <span style={font(400, "16px", "#191C22")}>Save</span>
        </button>

        {/* Book Now */}
        <button
          className="btn-press relative flex items-center justify-center"
          style={{ padding: "12px 32px", height: "48px", background: "#B61B4A", borderRadius: "8px", boxShadow: "0px 4px 6px -1px rgba(0,0,0,0.1), 0px 2px 4px -2px rgba(0,0,0,0.1)" }}
        >
          <span style={font(400, "16px", "#FFFFFF")}>Book Now</span>
        </button>
      </div>
    </div>
  );
}
