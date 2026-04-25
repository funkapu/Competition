const font = (weight: number, size: string, lineHeight: string, color: string, extra?: object) => ({
  fontFamily: "var(--font-plus-jakarta-sans)",
  fontWeight: weight,
  fontSize: size,
  lineHeight,
  color,
  ...extra,
});

function Stars({ count }: { count: number }) {
  return (
    <div className="flex flex-row items-center">
      {Array.from({ length: 5 }).map((_, i) => {
        const full = i < Math.floor(count);
        const half = !full && i < count;
        return (
          <svg key={i} width="17" height="16" viewBox="0 0 17 16" fill="none">
            {half ? (
              <>
                <defs>
                  <linearGradient id={`half-${i}`}>
                    <stop offset="50%" stopColor="#FACC15" />
                    <stop offset="50%" stopColor="#E5E7EB" />
                  </linearGradient>
                </defs>
                <path d="M8.5 0l1.74 5.36H16l-4.57 3.32 1.74 5.36L8.5 10.73l-4.67 3.31 1.74-5.36L1 5.36h5.76z" fill={`url(#half-${i})`} />
              </>
            ) : (
              <path d="M8.5 0l1.74 5.36H16l-4.57 3.32 1.74 5.36L8.5 10.73l-4.67 3.31 1.74-5.36L1 5.36h5.76z" fill={full ? "#FACC15" : "#E5E7EB"} />
            )}
          </svg>
        );
      })}
    </div>
  );
}

const reviews = [
  {
    stars: 5,
    date: "May 12, 2024",
    text: '"An absolute paradise. The views from the Presidential Suite are unmatched. The service was impeccable from start to finish."',
    initials: "SM",
    name: "Sophia Martinez",
    country: "United Kingdom",
    avatarBg: "#D7E2FF",
    avatarColor: "#001A40",
  },
  {
    stars: 4.5,
    date: "Apr 28, 2024",
    text: '"Excellent facilities and great breakfast selection. The private beach is beautiful, though the city center is a bit of a walk."',
    initials: "JW",
    name: "James Wilson",
    country: "United States",
    avatarBg: "#FFD9DD",
    avatarColor: "#400013",
  },
  {
    stars: 5,
    date: "Apr 15, 2024",
    text: '"The spa treatments were heavenly. Truly a five-star experience. We will definitely be coming back next summer."',
    initials: "AK",
    name: "Anna Kowalski",
    country: "Germany",
    avatarBg: "#FFDCBD",
    avatarColor: "#2C1600",
  },
];

export default function GuestReviews() {
  return (
    <div className="flex flex-col items-start w-full" style={{ paddingTop: "56px", gap: "32px" }}>
      {/* Header */}
      <div className="flex flex-row justify-between items-center w-full">
        <span style={font(400, "16px", "24px", "#191C22")}>Guest Reviews</span>
        <span style={{ ...font(600, "16px", "24px", "#005CBD"), cursor: "pointer" }}>Read all 1,248 reviews</span>
      </div>

      {/* Cards */}
      <div className="flex flex-col md:flex-row" style={{ gap: "24px", width: "100%" }}>
        {reviews.map((r, i) => (
          <div
            key={i}
            className="reveal flex flex-col justify-between"
            style={{
              flex: 1,
              padding: "24px",
              background: "#FFFFFF",
              border: "1px solid rgba(194, 198, 213, 0.3)",
              boxShadow: "0px 1px 2px rgba(0,0,0,0.05)",
              borderRadius: "16px",
              transitionDelay: `${i * 120}ms`,
            }}
          >
            {/* Top */}
            <div className="flex flex-col" style={{ gap: "16px", paddingBottom: "16px" }}>
              {/* Stars + date */}
              <div className="flex flex-row justify-between items-center w-full">
                <Stars count={r.stars} />
                <span style={font(400, "16px", "24px", "#424753")}>{r.date}</span>
              </div>
              {/* Quote */}
              <p style={{ ...font(400, "16px", "24px", "#191C22", { fontStyle: "italic" }), margin: 0 }}>
                {r.text}
              </p>
            </div>

            {/* Reviewer */}
            <div className="flex flex-row items-center" style={{ gap: "12px" }}>
              <div
                className="flex items-center justify-center flex-shrink-0"
                style={{ width: "40px", height: "40px", borderRadius: "9999px", background: r.avatarBg }}
              >
                <span style={font(700, "16px", "24px", r.avatarColor)}>{r.initials}</span>
              </div>
              <div className="flex flex-col">
                <span style={font(400, "16px", "24px", "#191C22")}>{r.name}</span>
                <span style={font(400, "12px", "18px", "#424753")}>{r.country}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
