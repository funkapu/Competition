const destinations = [
  {
    id: "bangkok",
    image: "/bangkok.png",
    city: "Bangkok, Thailand",
    price: "$120",
    topRated: true,
    badge: "Sep",
    selected: true,
  },
  {
    id: "tokyo",
    image: "/tokyo.png",
    city: "Tokyo, Japan",
    price: "$250",
    topRated: false,
    badge: null,
    selected: false,
  },
  {
    id: "paris",
    image: "/paris.png",
    city: "Paris, France",
    price: "$180",
    topRated: false,
    badge: null,
    selected: false,
  },
  {
    id: "london",
    image: "/london.png",
    city: "London, UK",
    price: "$210",
    topRated: false,
    badge: null,
    selected: false,
  },
];

export default function TrendingDestinations() {
  return (
    <section
      className="flex flex-col items-start gap-8"
      style={{ padding: "48px 16px" }}
    >
      {/* Header Row */}
      <div className="reveal flex flex-row justify-between items-end w-full">
        {/* Left: Title + Subtitle */}
        <div className="flex flex-col items-start">
          <h2
            style={{
              fontFamily: "var(--font-plus-jakarta-sans)",
              fontWeight: 700,
              fontSize: "30px",
              lineHeight: "36px",
              color: "#191C22",
            }}
          >
            Trending Destinations
          </h2>
          <p
            style={{
              fontFamily: "var(--font-plus-jakarta-sans)",
              fontWeight: 400,
              fontSize: "16px",
              lineHeight: "24px",
              color: "#424753",
            }}
          >
            Handpicked favorites for your next adventure
          </p>
        </div>

        {/* Right: View all */}
        <a
          href="#"
          style={{
            fontFamily: "var(--font-plus-jakarta-sans)",
            fontWeight: 700,
            fontSize: "16px",
            lineHeight: "24px",
            color: "#005CBD",
          }}
        >
          View all
        </a>
      </div>

      {/* Cards */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 w-full">
        {destinations.map((dest, i) => (
          <div
            key={dest.id}
            className="reveal card-hover flex flex-col"
            style={{ transitionDelay: `${i * 100}ms` }}
          >
            {/* Image Container */}
            <div
              className="img-zoom relative flex-shrink-0"
              style={{
                height: "clamp(180px, 30vw, 376px)",
                borderRadius: "16px",
                overflow: "hidden",
                border: dest.selected ? "2px solid #E53E3E" : "none",
              }}
            >
              {/* Image */}
              <img
                src={dest.image}
                alt={dest.city}
                className="w-full h-full object-cover"
              />

              {/* Sep Badge (Bangkok only) */}
              {dest.badge && (
                <div
                  className="absolute top-3 right-3 flex items-center gap-1 px-2 py-1"
                  style={{
                    background: "#E53E3E",
                    borderRadius: "6px",
                  }}
                >
                  {/* Bookmark icon */}
                  <svg width="10" height="12" viewBox="0 0 10 12" fill="none">
                    <path d="M1 1h8v10L5 8 1 11V1z" fill="white" />
                  </svg>
                  <span
                    style={{
                      fontFamily: "var(--font-plus-jakarta-sans)",
                      fontWeight: 700,
                      fontSize: "12px",
                      color: "#FFFFFF",
                    }}
                  >
                    {dest.badge}
                  </span>
                </div>
              )}

              {/* TOP RATED Badge */}
              {dest.topRated && (
                <div
                  className="absolute bottom-3 left-4 flex items-center px-3"
                  style={{
                    height: "23px",
                    background: "rgba(255, 255, 255, 0.9)",
                    borderRadius: "9999px",
                    paddingTop: "3.5px",
                    paddingBottom: "3.5px",
                  }}
                >
                  <span
                    style={{
                      fontFamily: "var(--font-plus-jakarta-sans)",
                      fontWeight: 700,
                      fontSize: "12px",
                      lineHeight: "16px",
                      letterSpacing: "0.6px",
                      textTransform: "uppercase",
                      color: "#191C22",
                    }}
                  >
                    TOP RATED
                  </span>
                </div>
              )}
            </div>

            {/* City Name */}
            <div style={{ marginTop: "12px" }}>
              <h4
                style={{
                  fontFamily: "var(--font-plus-jakarta-sans)",
                  fontWeight: 700,
                  fontSize: "20px",
                  lineHeight: "28px",
                  color: "#191C22",
                }}
              >
                {dest.city}
              </h4>
            </div>

            {/* Price */}
            <div>
              <span
                style={{
                  fontFamily: "var(--font-plus-jakarta-sans)",
                  fontWeight: 400,
                  fontSize: "14px",
                  lineHeight: "20px",
                  color: "#424753",
                }}
              >
                Starting from{" "}
              </span>
              <span
                style={{
                  fontFamily: "var(--font-plus-jakarta-sans)",
                  fontWeight: 700,
                  fontSize: "14px",
                  lineHeight: "20px",
                  color: "#005CBD",
                }}
              >
                {dest.price}
              </span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
