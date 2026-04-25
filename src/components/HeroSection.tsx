export default function HeroSection() {
  return (
    <section
      className="relative overflow-hidden flex items-center justify-center"
      style={{
        width: "1200px",
        minHeight: "520px",
        height: "520px",
        marginTop: "40px",
        marginLeft: "40px",
        marginRight: "40px",
        borderRadius: "16px",
        paddingTop: "114px",
        paddingBottom: "114px",
        paddingLeft: "16px",
        paddingRight: "16px",
      }}
    >
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover"
        style={{ backgroundPosition: "center 70%" }}
        style={{ backgroundImage: "url(/beach.png)", zIndex: 0 }}
      />

      {/* Gradient Overlay */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(0deg, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.3) 50%, rgba(0,0,0,0.4) 100%)",
          zIndex: 1,
        }}
      />

      {/* Content */}
      <div
        className="relative flex flex-col items-center gap-6"
        style={{ width: "768px", maxWidth: "800px", zIndex: 2 }}
      >
        {/* Heading */}
        <h1
          className="text-center text-white"
          style={{
            fontFamily: "var(--font-plus-jakarta-sans)",
            fontWeight: 800,
            fontSize: "60px",
            lineHeight: "60px",
            letterSpacing: "-1.5px",
            width: "750px",
          }}
        >
          Escape to Your Perfect Paradise
        </h1>

        {/* Subtitle */}
        <p
          className="text-center"
          style={{
            fontFamily: "var(--font-plus-jakarta-sans)",
            fontWeight: 500,
            fontSize: "20px",
            lineHeight: "28px",
            color: "rgba(255, 255, 255, 0.9)",
            width: "672px",
            maxWidth: "672px",
          }}
        >
          Unlock exclusive prices on over 2 million properties and flights across the globe.
        </p>

        {/* Search Bar */}
        <div
          className="relative flex flex-row items-center gap-2"
          style={{
            width: "768px",
            maxWidth: "768px",
            height: "68px",
            background: "#FFFFFF",
            borderRadius: "12px",
            padding: "8px",
            boxShadow: "0px 25px 50px -12px rgba(0, 0, 0, 0.25)",
          }}
        >
          {/* Location Input */}
          <div
            className="flex flex-row items-center flex-1 px-3 self-stretch"
            style={{
              background: "#E9E9E9",
              border: "1px solid #6B7FC6",
              borderRadius: "8px",
              height: "52px",
              gap: "0px",
            }}
          >
            {/* Globe Icon */}
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" style={{ flexShrink: 0 }}>
              <circle cx="12" cy="12" r="9" stroke="#727784" strokeWidth="1.8" />
              <path d="M12 3C12 3 8 7 8 12s4 9 4 9" stroke="#727784" strokeWidth="1.8" />
              <path d="M12 3c0 0 4 4 4 9s-4 9-4 9" stroke="#727784" strokeWidth="1.8" />
              <path d="M3 12h18" stroke="#727784" strokeWidth="1.8" />
              <path d="M4.5 7.5h15M4.5 16.5h15" stroke="#727784" strokeWidth="1.8" />
            </svg>
            <input
              type="text"
              placeholder="Where to next?"
              className="flex-1 bg-transparent outline-none px-2"
              style={{
                fontFamily: "var(--font-plus-jakarta-sans)",
                fontWeight: 400,
                fontSize: "16px",
                lineHeight: "20px",
                color: "#6B7280",
              }}
            />
          </div>

          {/* Date Input */}
          <div
            className="flex flex-row items-center flex-1 px-3 self-stretch"
            style={{
              background: "#E9E9E9",
              border: "1px solid #6B7FC6",
              borderRadius: "8px",
              height: "52px",
            }}
          >
            {/* Calendar Icon */}
            <svg width="18" height="20" viewBox="0 0 18 20" fill="none" style={{ flexShrink: 0 }}>
              <rect x="1" y="3" width="16" height="16" rx="2" stroke="#727784" strokeWidth="1.8" />
              <path d="M1 8h16" stroke="#727784" strokeWidth="1.8" />
              <path d="M5 1v4M13 1v4" stroke="#727784" strokeWidth="1.8" strokeLinecap="round" />
            </svg>
            <input
              type="text"
              defaultValue="Oct 12 - Oct 18"
              className="flex-1 bg-transparent outline-none px-2"
              style={{
                fontFamily: "var(--font-plus-jakarta-sans)",
                fontWeight: 400,
                fontSize: "16px",
                lineHeight: "24px",
                color: "#191C22",
              }}
            />
          </div>

          {/* Search Button */}
          <button
            className="flex flex-row items-center justify-center gap-2 flex-shrink-0"
            style={{
              width: "151.42px",
              height: "52px",
              background: "#005CBD",
              borderRadius: "8px",
              padding: "12px 32px",
            }}
          >
            {/* Search Icon */}
            <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
              <circle cx="7.5" cy="7.5" r="5.5" stroke="white" strokeWidth="2" />
              <path d="M16 16l-4-4" stroke="white" strokeWidth="2" strokeLinecap="round" />
            </svg>
            <span
              style={{
                fontFamily: "var(--font-plus-jakarta-sans)",
                fontWeight: 700,
                fontSize: "18px",
                lineHeight: "28px",
                color: "#FFFFFF",
              }}
            >
              Search
            </span>
          </button>
        </div>
      </div>
    </section>
  );
}
