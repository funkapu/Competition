export default function PromotionalBanner() {
  return (
    <section
      className="relative flex flex-row justify-between items-center overflow-hidden"
      style={{
        marginLeft: "40px",
        marginRight: "40px",
        height: "416px",
        background: "#B61B4A",
        borderRadius: "24px",
        padding: "40px 40px 40px 48px",
        gap: "199px",
        isolation: "isolate",
      }}
    >
      {/* Decorative Background Icon */}
      <div
        className="absolute flex items-start"
        style={{
          left: "50%",
          top: 0,
          bottom: 0,
          opacity: 0.2,
          zIndex: 0,
        }}
      >
        <img
          src="/icon.png"
          alt=""
          style={{ width: "250px", height: "250px" }}
        />
      </div>

      {/* Left Content */}
      <div
        className="flex flex-col items-start"
        style={{ gap: "16px", width: "537.72px", maxWidth: "576px", zIndex: 1 }}
      >
        {/* Heading */}
        <h2
          style={{
            fontFamily: "var(--font-plus-jakarta-sans)",
            fontWeight: 900,
            fontSize: "48px",
            lineHeight: "48px",
            color: "#FFFFFF",
          }}
        >
          Summer Sales: Up to 40% Off!
        </h2>

        {/* Subtitle */}
        <p
          style={{
            fontFamily: "var(--font-plus-jakarta-sans)",
            fontWeight: 400,
            fontSize: "18px",
            lineHeight: "28px",
            color: "rgba(255, 255, 255, 0.8)",
          }}
        >
          Exclusive member deals on flights and luxury hotels for your next summer getaway. Valid until Oct 31st.
        </p>

        {/* Buttons */}
        <div className="flex flex-row items-center gap-4" style={{ paddingTop: "16px" }}>
          {/* Explore Deals */}
          <button
            style={{
              width: "182.59px",
              height: "56px",
              background: "#FFFFFF",
              borderRadius: "12px",
              fontFamily: "var(--font-plus-jakarta-sans)",
              fontWeight: 700,
              fontSize: "18px",
              lineHeight: "28px",
              color: "#B61B4A",
            }}
          >
            Explore Deals
          </button>

          {/* Join Club T-Goda */}
          <button
            style={{
              width: "219.05px",
              height: "56px",
              border: "2px solid #FFFFFF",
              borderRadius: "12px",
              background: "transparent",
              fontFamily: "var(--font-plus-jakarta-sans)",
              fontWeight: 700,
              fontSize: "18px",
              lineHeight: "28px",
              color: "#FFFFFF",
            }}
          >
            Join Club T-Goda
          </button>
        </div>
      </div>

      {/* Right Image - Outer wrapper */}
      <div
        style={{
          width: "336.31px",
          height: "336.31px",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "flex-start",
          flexShrink: 0,
          zIndex: 2,
        }}
      >
        {/* Inner wrapper with rotate */}
        <div
          style={{
            width: "320px",
            height: "320px",
            borderRadius: "48px",
            overflow: "hidden",
            transform: "rotate(3deg)",
            boxShadow: "0px 25px 50px -12px rgba(0, 0, 0, 0.25)",
          }}
        >
          <img
            src="/promotion.png"
            alt="Summer promotion"
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </section>
  );
}
