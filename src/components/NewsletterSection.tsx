export default function NewsletterSection() {
  return (
    <section
      className="flex flex-col items-center"
      style={{
        marginLeft: "40px",
        marginRight: "40px",
        marginTop: "40px",
        height: "390px",
        background: "#E7E8F1",
        borderRadius: "24px",
        padding: "64px 264px",
      }}
    >
      {/* Content Container */}
      <div
        className="flex flex-col items-center"
        style={{ width: "672px", maxWidth: "672px", gap: "16px" }}
      >
        {/* Mail Icon */}
        <img
          src="/newsletter.png"
          alt="newsletter"
          style={{ width: "40px", height: "32px" }}
        />

        {/* Heading */}
        <h2
          className="text-center"
          style={{
            fontFamily: "var(--font-plus-jakarta-sans)",
            fontWeight: 700,
            fontSize: "30px",
            lineHeight: "36px",
            color: "#191C22",
          }}
        >
          Get Travel Deals Directly
        </h2>

        {/* Subtitle */}
        <p
          className="text-center"
          style={{
            fontFamily: "var(--font-plus-jakarta-sans)",
            fontWeight: 400,
            fontSize: "18px",
            lineHeight: "28px",
            color: "#424753",
            width: "672px",
          }}
        >
          Subscribe to our newsletter and get early access to hidden gems and seasonal discounts. No spam, only adventure.
        </p>

        {/* Form */}
        <div className="flex flex-row items-start w-full" style={{ gap: "12px", height: "58px" }}>
          {/* Email Input */}
          <input
            type="email"
            placeholder="Your email address"
            className="flex-1 outline-none"
            style={{
              height: "58px",
              background: "#FFFFFF",
              border: "1px solid #6B7FC6",
              borderRadius: "12px",
              padding: "17px 24px 18px",
              fontFamily: "var(--font-plus-jakarta-sans)",
              fontWeight: 400,
              fontSize: "16px",
              lineHeight: "20px",
              color: "#6B7280",
            }}
          />

          {/* Subscribe Button */}
          <button
            style={{
              width: "182.22px",
              height: "58px",
              background: "#005CBD",
              borderRadius: "12px",
              padding: "16.5px 32px 17.5px",
              fontFamily: "var(--font-plus-jakarta-sans)",
              fontWeight: 500,
              fontSize: "16px",
              lineHeight: "24px",
              color: "#FFFFFF",
              flexShrink: 0,
            }}
          >
            Subscribe Now
          </button>
        </div>

        {/* Fine Print */}
        <p
          className="text-center"
          style={{
            fontFamily: "var(--font-plus-jakarta-sans)",
            fontWeight: 400,
            fontSize: "12px",
            lineHeight: "16px",
            color: "#424753",
          }}
        >
          By subscribing, you agree to our Terms of Service and Privacy Policy.
        </p>
      </div>
    </section>
  );
}
