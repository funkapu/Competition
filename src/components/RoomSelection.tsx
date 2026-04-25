const font = (weight: number, size: string, lineHeight: string, color: string, extra?: object) => ({
  fontFamily: "var(--font-plus-jakarta-sans)",
  fontWeight: weight,
  fontSize: size,
  lineHeight,
  color,
  ...extra,
});

function PersonIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
      <circle cx="8" cy="4.5" r="3" stroke="#191C22" strokeWidth="1.4" />
      <path d="M1.5 15c0-3.59 2.91-6.5 6.5-6.5s6.5 2.91 6.5 6.5" stroke="#191C22" strokeWidth="1.4" strokeLinecap="round" />
    </svg>
  );
}

function ChildIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
      <circle cx="9" cy="9" r="8" stroke="#191C22" strokeWidth="1.4" />
      <path d="M6 11c.8 1.2 2 2 3 2s2.2-.8 3-2" stroke="#191C22" strokeWidth="1.4" strokeLinecap="round" />
      <circle cx="6.5" cy="8" r="1" fill="#191C22" />
      <circle cx="11.5" cy="8" r="1" fill="#191C22" />
    </svg>
  );
}

function CheckIcon() {
  return (
    <svg width="15" height="15" viewBox="0 0 15 15" fill="none">
      <circle cx="7.5" cy="7.5" r="7" stroke="#16A34A" strokeWidth="1.3" />
      <path d="M4.5 7.5l2 2 4-4" stroke="#16A34A" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function InfoIcon() {
  return (
    <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
      <circle cx="6" cy="6" r="5.5" stroke="#005CBD" strokeWidth="1.1" />
      <path d="M6 5.5v3" stroke="#005CBD" strokeWidth="1.1" strokeLinecap="round" />
      <circle cx="6" cy="3.5" r="0.6" fill="#005CBD" />
    </svg>
  );
}

const rooms = [
  {
    highlight: true,
    name: "Presidential Sea Front Suite",
    badge: "LIMITED TIME OFFER",
    desc: "85m² • Panoramic Sea View • Infinity Pool Access",
    sleeps: 4,
    originalPrice: "$1,295",
    price: "$862",
    priceColor: "#B61B4A",
    options: ["Free Airport Transfer", "All-Inclusive Premium"],
    urgent: "Only 1 room left!",
    btnColor: "#B61B4A",
  },
  {
    highlight: false,
    name: "Deluxe Garden View Room",
    badge: null,
    desc: "32m² • Balcony • Garden View • 1 King Bed",
    sleeps: 2,
    originalPrice: "$345",
    price: "$264",
    priceColor: "#191C22",
    options: ["Free Cancellation", "Breakfast Included"],
    urgent: null,
    btnColor: "#005CBD",
  },
  {
    highlight: false,
    name: "Junior Suite with Private Pool",
    badge: null,
    desc: "45m² • Private Pool • Sea View • King Bed",
    sleeps: 2,
    child: true,
    originalPrice: "$626",
    price: "$445",
    priceColor: "#191C22",
    options: ["Free Cancellation", "All-Inclusive"],
    urgent: "Only 2 rooms left!",
    btnColor: "#005CBD",
  },
];

export default function RoomSelection() {
  return (
    <div className="reveal flex flex-col items-start w-full" style={{ paddingTop: "40px", gap: "32px" }}>
      <span style={font(400, "16px", "24px", "#191C22")}>Select Your Room</span>

      <div
        className="w-full overflow-x-auto"
        style={{ background: "#FFFFFF",
          border: "1px solid rgba(194, 198, 213, 0.3)",
          boxShadow: "0px 1px 2px rgba(0,0,0,0.05)",
          borderRadius: "16px",
          overflow: "hidden",
        }}
      >
        {/* Header */}
        <div style={{ background: "#F2F3FC", height: "69px", display: "flex", alignItems: "center", paddingLeft: "2px" }}>
          <div style={{ width: "369.5px", padding: "24px" }}>
            <span style={font(700, "16px", "20px", "#424753")}>Room Type</span>
          </div>
          <div style={{ width: "180.2px", padding: "24px" }}>
            <span style={font(700, "16px", "20px", "#424753")}>Sleeps</span>
          </div>
          <div style={{ width: "238.5px", padding: "24px" }}>
            <span style={font(700, "16px", "20px", "#424753")}>Today&apos;s Price</span>
          </div>
          <div style={{ flex: 1, padding: "24px" }}>
            <span style={font(700, "16px", "20px", "#424753")}>Options</span>
          </div>
        </div>

        {/* Rows */}
        {rooms.map((room, i) => (
          <div
            key={i}
            className="flex flex-row items-center"
            style={{
              paddingLeft: room.highlight ? "22px" : "24px",
              gap: "24px",
              borderTop: i === 0 ? "none" : "1px solid rgba(194, 198, 213, 0.3)",
              borderLeft: room.highlight ? "4px solid #005CBD" : "none",
              background: room.highlight ? "rgba(239, 246, 255, 0.5)" : "#FFFFFF",
              minHeight: room.highlight ? "169.5px" : "129px",
            }}
          >
            {/* Room Type */}
            <div className="flex flex-col items-start" style={{ gap: "8px", width: "319.5px" }}>
              <div className="flex flex-row items-center" style={{ gap: "8px" }}>
                <span style={font(400, "16px", "20px", "#191C22")}>{room.name}</span>
                {room.badge && (
                  <div style={{ background: "#B61B4A", borderRadius: "4px", padding: "2px 8px", flexShrink: 0 }}>
                    <span style={font(700, "10px", "13px", "#FFFFFF", { letterSpacing: "0.5px", textTransform: "uppercase" as const })}>
                      {room.badge}
                    </span>
                  </div>
                )}
              </div>
              <span style={font(400, "16px", "20px", "#424753")}>{room.desc}</span>
              <div className="flex flex-row items-center" style={{ gap: "4px" }}>
                <InfoIcon />
                <span style={font(600, "16px", "20px", "#005CBD")}>Room details</span>
              </div>
            </div>

            {/* Sleeps */}
            <div className="flex flex-row items-center" style={{ width: "156.2px", paddingLeft: "24px", gap: "4px" }}>
              {Array.from({ length: room.sleeps }).map((_, j) => <PersonIcon key={j} />)}
              {"child" in room && room.child && <ChildIcon />}
            </div>

            {/* Price */}
            <div className="flex flex-col items-start" style={{ width: "190.5px", paddingLeft: "24px" }}>
              <span style={font(400, "16px", "20px", "#424753", { textDecoration: "line-through" })}>{room.originalPrice}</span>
              <span style={font(700, "24px", "32px", room.priceColor)}>{room.price}</span>
              <span style={font(400, "16px", "20px", "#424753")}>Includes taxes &amp; fees</span>
            </div>

            {/* Options */}
            <div className="flex flex-col items-start" style={{ flex: 1, paddingLeft: "24px", gap: "8px" }}>
              {room.options.map((opt) => (
                <div key={opt} className="flex flex-row items-center" style={{ gap: "8px" }}>
                  <CheckIcon />
                  <span style={font(400, "16px", "20px", "#16A34A")}>{opt}</span>
                </div>
              ))}
              {room.urgent && (
                <span style={font(700, "16px", "20px", "#BA1A1A")}>{room.urgent}</span>
              )}
            </div>

            {/* Select Button */}
            <div className="flex items-center justify-center" style={{ width: "168.05px", flexShrink: 0 }}>
              <button
                style={{
                  padding: "8px 24px",
                  background: room.btnColor,
                  borderRadius: "8px",
                  boxShadow: "0px 1px 2px rgba(0,0,0,0.05)",
                  whiteSpace: "nowrap",
                }}
              >
                <span style={font(400, "16px", "20px", "#FFFFFF")}>Select</span>
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
