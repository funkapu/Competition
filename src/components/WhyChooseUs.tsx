const features = [
  {
    iconBg: "rgba(83, 146, 249, 0.2)",
    iconColor: "#005CBD",
    icon: (
      <svg width="25" height="25" viewBox="0 0 24 24" fill="none">
        <path d="M3 7C3 5.34315 4.34315 4 6 4H12.5858C13.1162 4 13.6249 4.21071 14 4.58579L20.4142 11C21.1953 11.7811 21.1953 13.0474 20.4142 13.8284L14.8284 19.4142C14.0474 20.1953 12.781 20.1953 12 19.4142L5.58579 13C5.21071 12.6249 5 12.1162 5 11.5858V8" stroke="#005CBD" strokeWidth="2" strokeLinecap="round"/>
        <circle cx="8" cy="8" r="1.5" fill="#005CBD"/>
      </svg>
    ),
    title: "Best Price Guarantee",
    description: "Find a lower price? We'll match it and give you a voucher for your next trip.",
  },
  {
    iconBg: "rgba(255, 86, 125, 0.2)",
    iconColor: "#B61B4A",
    icon: (
      <svg width="25" height="23" viewBox="0 0 24 24" fill="none">
        <path d="M12 2C7.03 2 3 6.03 3 11v3c0 1.1.9 2 2 2h1c.55 0 1-.45 1-1v-4c0-.55-.45-1-1-1H5.07C5.56 6.19 8.47 4 12 4s6.44 2.19 6.93 6H17c-.55 0-1 .45-1 1v4c0 .55.45 1 1 1h1c1.1 0 2-.9 2-2v-3c0-4.97-4.03-9-9-9z" fill="#B61B4A"/>
      </svg>
    ),
    title: "24/7 Global Support",
    description: "Our world-class support team is here to help you anywhere, anytime in 40+ languages.",
  },
  {
    iconBg: "rgba(212, 127, 0, 0.2)",
    iconColor: "#8A5100",
    icon: (
      <svg width="24" height="25" viewBox="0 0 24 24" fill="none">
        <rect x="3" y="4" width="18" height="18" rx="2" stroke="#8A5100" strokeWidth="2"/>
        <path d="M3 9h18" stroke="#8A5100" strokeWidth="2"/>
        <path d="M8 2v4M16 2v4" stroke="#8A5100" strokeWidth="2" strokeLinecap="round"/>
        <path d="M12 14h4M12 17h2" stroke="#8A5100" strokeWidth="2" strokeLinecap="round"/>
        <path d="M8 13l1.5 1.5L12 11" stroke="#8A5100" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    title: "Flexible Booking",
    description: "Life happens. Most of our properties offer free cancellation for peace of mind.",
  },
];

export default function WhyChooseUs() {
  return (
    <section
      className="flex flex-row gap-8"
      style={{
        marginLeft: "40px",
        marginRight: "40px",
        marginTop: "40px",
        height: "232px",
        position: "relative",
      }}
    >
      {features.map((feature, index) => (
        <div
          key={index}
          className="flex flex-col items-center gap-3 flex-1"
          style={{
            background: "#E9E9E9",
            borderRadius: "12px",
            padding: "24px",
            height: "192px",
            marginTop: "40px",
            marginLeft: index !== 0 ? "0px" : "0px",
          }}
        >
          {/* Icon circle */}
          <div
            className="flex items-center justify-center flex-shrink-0"
            style={{
              width: "48px",
              height: "48px",
              background: feature.iconBg,
              borderRadius: "9999px",
            }}
          >
            {feature.icon}
          </div>

          {/* Title */}
          <div className="flex flex-col items-center pt-1 w-full">
            <span
              className="text-center"
              style={{
                fontFamily: "var(--font-plus-jakarta-sans)",
                fontWeight: 700,
                fontSize: "20px",
                lineHeight: "28px",
                color: "#191C22",
              }}
            >
              {feature.title}
            </span>
          </div>

          {/* Description */}
          <div className="flex flex-col items-center w-full">
            <span
              className="text-center"
              style={{
                fontFamily: "var(--font-plus-jakarta-sans)",
                fontWeight: 400,
                fontSize: "14px",
                lineHeight: "20px",
                color: "#424753",
              }}
            >
              {feature.description}
            </span>
          </div>
        </div>
      ))}
    </section>
  );
}
