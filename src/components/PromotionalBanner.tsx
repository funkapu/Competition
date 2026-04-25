export default function PromotionalBanner() {
  return (
    <section
      className="reveal relative flex flex-col md:flex-row justify-between items-center overflow-hidden mx-4 md:mx-10 rounded-3xl"
      style={{
        background: "#B61B4A",
        padding: "40px 24px",
        gap: "32px",
        isolation: "isolate",
      }}
    >
      {/* Decorative Background Icon */}
      <div
        className="absolute"
        style={{ left: "50%", top: 0, bottom: 0, opacity: 0.2, zIndex: 0, display: "flex", alignItems: "flex-start" }}
      >
        <img src="/icon.png" alt="" style={{ width: "250px", height: "250px" }} />
      </div>

      {/* Left Content */}
      <div className="flex flex-col items-start w-full md:max-w-[576px]" style={{ gap: "16px", zIndex: 1 }}>
        <h2
          style={{
            fontFamily: "var(--font-plus-jakarta-sans)",
            fontWeight: 900,
            fontSize: "clamp(32px, 5vw, 48px)",
            lineHeight: "1.1",
            color: "#FFFFFF",
          }}
        >
          Summer Sales: Up to 40% Off!
        </h2>
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
        <div className="flex flex-row flex-wrap items-center gap-4" style={{ paddingTop: "16px" }}>
          <button
            className="btn-press"
            style={{
              height: "56px",
              background: "#FFFFFF",
              borderRadius: "12px",
              padding: "0 32px",
              fontFamily: "var(--font-plus-jakarta-sans)",
              fontWeight: 700,
              fontSize: "18px",
              color: "#B61B4A",
              whiteSpace: "nowrap",
            }}
          >
            Explore Deals
          </button>
          <button
            className="btn-press"
            style={{
              height: "56px",
              border: "2px solid #FFFFFF",
              borderRadius: "12px",
              background: "transparent",
              padding: "0 32px",
              fontFamily: "var(--font-plus-jakarta-sans)",
              fontWeight: 700,
              fontSize: "18px",
              color: "#FFFFFF",
              whiteSpace: "nowrap",
            }}
          >
            Join Club T-Goda
          </button>
        </div>
      </div>

      {/* Right Image */}
      <div className="flex-shrink-0" style={{ zIndex: 2 }}>
        <div
          style={{
            width: "clamp(200px, 40vw, 320px)",
            height: "clamp(200px, 40vw, 320px)",
            borderRadius: "48px",
            overflow: "hidden",
            transform: "rotate(3deg)",
            boxShadow: "0px 25px 50px -12px rgba(0, 0, 0, 0.25)",
          }}
        >
          <img src="/promotion.png" alt="Summer promotion" className="w-full h-full object-cover" />
        </div>
      </div>
    </section>
  );
}
