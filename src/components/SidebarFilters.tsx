const fontStyle = {
  fontFamily: "var(--font-plus-jakarta-sans)",
  fontSize: "14px",
  lineHeight: "20px",
  color: "#191C22",
};

function SectionLabel({ children }: { children: string }) {
  return (
    <span style={{ ...fontStyle, fontWeight: 600, letterSpacing: "0.14px", display: "block" }}>
      {children}
    </span>
  );
}

function CheckboxItem({ label }: { label: string }) {
  return (
    <label className="flex flex-row items-center gap-3 cursor-pointer" style={{ height: "20px" }}>
      <input
        type="checkbox"
        className="flex-shrink-0"
        style={{
          width: "20px",
          height: "20px",
          border: "1px solid #C2C6D5",
          borderRadius: "4px",
          appearance: "none",
          background: "#FFFFFF",
          cursor: "pointer",
        }}
      />
      <span style={{ ...fontStyle, fontWeight: 400 }}>{label}</span>
    </label>
  );
}

function StarRow({ count }: { count: number }) {
  return (
    <label className="flex flex-row items-center gap-3 cursor-pointer" style={{ height: "20px" }}>
      <input
        type="checkbox"
        className="flex-shrink-0"
        style={{
          width: "20px",
          height: "20px",
          border: "1px solid #C2C6D5",
          borderRadius: "4px",
          appearance: "none",
          background: "#FFFFFF",
          cursor: "pointer",
        }}
      />
      <div className="flex flex-row">
        {Array.from({ length: 5 }).map((_, i) => (
          <svg key={i} width="15" height="15" viewBox="0 0 15 15" fill="none">
            <path
              d="M7.5 1l1.545 4.756H14.5l-4.045 2.938 1.545 4.756L7.5 10.512l-4.5 2.938 1.545-4.756L.5 5.756h5.455z"
              fill={i < count ? "#EAB308" : "#E5E7EB"}
            />
          </svg>
        ))}
      </div>
    </label>
  );
}

export default function SidebarFilters() {
  return (
    <aside className="flex flex-col items-start" style={{ width: "256px", gap: "32px" }}>

      {/* Filter Panel */}
      <div
        className="flex flex-col items-start w-full"
        style={{
          padding: "15.5px 16px 32px",
          gap: "15px",
          background: "#FFFFFF",
          border: "1px solid rgba(194, 198, 213, 0.2)",
          boxShadow: "0px 4px 12px rgba(0, 0, 0, 0.05)",
          borderRadius: "12px",
        }}
      >
        {/* Heading */}
        <div className="flex flex-row items-center gap-2" style={{ height: "28px" }}>
          <svg width="18" height="12" viewBox="0 0 18 12" fill="none">
            <rect y="0" width="18" height="2.5" rx="1" fill="#005CBD" />
            <rect x="3" y="4.75" width="12" height="2.5" rx="1" fill="#005CBD" />
            <rect x="6" y="9.5" width="6" height="2.5" rx="1" fill="#005CBD" />
          </svg>
          <span style={{ ...fontStyle, fontWeight: 400, fontSize: "18px", lineHeight: "28px" }}>
            Filters
          </span>
        </div>

        {/* Price Range */}
        <div className="flex flex-col items-start" style={{ gap: "12px", width: "222px" }}>
          <SectionLabel>Price Range</SectionLabel>
          <div className="flex flex-col w-full" style={{ gap: "8px" }}>
            <div className="flex flex-row justify-between w-full">
              <span style={{ ...fontStyle, fontWeight: 500, fontSize: "12px", color: "#424753" }}>$0</span>
              <span style={{ ...fontStyle, fontWeight: 500, fontSize: "12px", color: "#424753" }}>$1000+</span>
            </div>
            <input
              type="range"
              min={0}
              max={1000}
              defaultValue={500}
              className="w-full"
              style={{ height: "6px", background: "#E1E2EB", borderRadius: "8px", cursor: "pointer" }}
            />
          </div>
        </div>

        {/* Property Type */}
        <div className="flex flex-col items-start" style={{ gap: "12px", width: "222px", paddingTop: "8px" }}>
          <SectionLabel>Property Type</SectionLabel>
          <div className="flex flex-col" style={{ gap: "8px" }}>
            {["Hotels", "Resorts", "Apartments", "Villas"].map((item) => (
              <CheckboxItem key={item} label={item} />
            ))}
          </div>
        </div>

        {/* Star Rating */}
        <div className="flex flex-col items-start" style={{ gap: "12px", width: "222px", paddingTop: "8px" }}>
          <SectionLabel>Star Rating</SectionLabel>
          <div className="flex flex-col" style={{ gap: "8px" }}>
            <StarRow count={5} />
            <StarRow count={4} />
          </div>
        </div>

        {/* Facilities */}
        <div className="flex flex-col items-start" style={{ gap: "12px", width: "222px", paddingTop: "8px" }}>
          <SectionLabel>Facilities</SectionLabel>
          <div className="flex flex-col" style={{ gap: "8px" }}>
            {["Free Wi-Fi", "Swimming Pool", "Fitness Center", "Spa", "Parking", "Pet Friendly"].map((item) => (
              <CheckboxItem key={item} label={item} />
            ))}
          </div>
        </div>

        {/* Review Score */}
        <div className="flex flex-col items-start" style={{ gap: "12px", width: "222px", paddingTop: "8px" }}>
          <SectionLabel>Review Score</SectionLabel>
          <div className="flex flex-col" style={{ gap: "8px" }}>
            {["Superb 9+", "Very Good 8+", "Good 7+"].map((item) => (
              <CheckboxItem key={item} label={item} />
            ))}
          </div>
        </div>

        {/* Neighborhood */}
        <div className="flex flex-col items-start" style={{ gap: "12px", width: "222px", paddingTop: "8px" }}>
          <SectionLabel>Neighborhood</SectionLabel>
          <div className="flex flex-col" style={{ gap: "8px" }}>
            {["Patong", "Karon", "Kata", "Kamala"].map((item) => (
              <CheckboxItem key={item} label={item} />
            ))}
          </div>
        </div>

        {/* Bed Type */}
        <div className="flex flex-col items-start" style={{ gap: "12px", width: "222px", paddingTop: "8px" }}>
          <SectionLabel>Bed Type</SectionLabel>
          <div className="flex flex-col" style={{ gap: "8px" }}>
            {["Single", "Double", "King"].map((item) => (
              <CheckboxItem key={item} label={item} />
            ))}
          </div>
        </div>
      </div>

      {/* Map CTA */}
      <div
        className="relative flex items-center justify-center overflow-hidden"
        style={{
          width: "256px",
          height: "160px",
          borderRadius: "12px",
          boxShadow: "0px 1px 2px rgba(0, 0, 0, 0.05)",
        }}
      >
        {/* Map Background */}
        <img src="/map.png" alt="map" className="absolute inset-0 w-full h-full object-cover" />

        {/* Overlay */}
        <div
          className="absolute inset-0"
          style={{ background: "rgba(0, 92, 189, 0.2)", backdropFilter: "blur(1px)" }}
        />

        {/* View on Map Button */}
        <button
          className="relative flex flex-row items-center gap-2 z-10"
          style={{
            height: "40px",
            background: "#FFFFFF",
            borderRadius: "9999px",
            padding: "8px 16px",
            boxShadow: "0px 10px 15px -3px rgba(0,0,0,0.1), 0px 4px 6px -4px rgba(0,0,0,0.1)",
          }}
        >
          <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
            <path d="M1 1l4 1.5L9 1l4 1.5V13l-4-1.5L5 13 1 11.5V1z" stroke="#005CBD" strokeWidth="1.5" strokeLinejoin="round" />
            <path d="M5 2.5v10M9 1v10" stroke="#005CBD" strokeWidth="1.5" />
          </svg>
          <span style={{ ...fontStyle, fontWeight: 400, fontSize: "16px", lineHeight: "24px", color: "#005CBD" }}>
            View on Map
          </span>
        </button>
      </div>

    </aside>
  );
}
