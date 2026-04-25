export default function NewsletterSection() {
  return (
    <section
      className="flex flex-col items-center mx-4 md:mx-10 mt-0 rounded-3xl"
      style={{ background: "#E7E8F1", padding: "48px 16px" }}
    >
      <div className="flex flex-col items-center w-full max-w-xl" style={{ gap: "16px" }}>
        <img src="/newsletter.png" alt="newsletter" style={{ width: "40px", height: "32px" }} />

        <h2
          className="text-center"
          style={{
            fontFamily: "var(--font-plus-jakarta-sans)",
            fontWeight: 700,
            fontSize: "clamp(22px, 4vw, 30px)",
            lineHeight: "1.2",
            color: "#191C22",
          }}
        >
          Get Travel Deals Directly
        </h2>

        <p
          className="text-center"
          style={{
            fontFamily: "var(--font-plus-jakarta-sans)",
            fontWeight: 400,
            fontSize: "16px",
            lineHeight: "28px",
            color: "#424753",
          }}
        >
          Subscribe to our newsletter and get early access to hidden gems and seasonal discounts. No spam, only adventure.
        </p>

        <div className="flex flex-col sm:flex-row items-stretch w-full" style={{ gap: "12px" }}>
          <input
            type="email"
            placeholder="Your email address"
            className="flex-1 outline-none"
            style={{
              height: "58px",
              background: "#FFFFFF",
              border: "1px solid #6B7FC6",
              borderRadius: "12px",
              padding: "17px 24px",
              fontFamily: "var(--font-plus-jakarta-sans)",
              fontSize: "16px",
              color: "#6B7280",
            }}
          />
          <button
            style={{
              height: "58px",
              background: "#005CBD",
              borderRadius: "12px",
              padding: "0 32px",
              fontFamily: "var(--font-plus-jakarta-sans)",
              fontWeight: 500,
              fontSize: "16px",
              color: "#FFFFFF",
              whiteSpace: "nowrap",
            }}
          >
            Subscribe Now
          </button>
        </div>

        <p
          className="text-center"
          style={{
            fontFamily: "var(--font-plus-jakarta-sans)",
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
