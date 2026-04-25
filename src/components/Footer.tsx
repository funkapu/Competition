const footerLinks = [
  { heading: "Company", links: ["About Us", "Careers"] },
  { heading: "Support", links: ["Support", "Mobile App"] },
  { heading: "Legal", links: ["Privacy Policy", "Terms of Service"] },
];

export default function Footer() {
  return (
    <footer className="w-full" style={{ background: "#FFFFFF", borderTop: "1px solid #E2E8F0" }}>
      <div
        className="flex flex-col md:flex-row justify-between gap-8 mx-auto px-6"
        style={{ maxWidth: "1280px", padding: "48px 24px" }}
      >
        {/* Left Section */}
        <div className="flex flex-col items-start" style={{ gap: "16px", maxWidth: "384px" }}>
          <span style={{ fontFamily: "var(--font-plus-jakarta-sans)", fontWeight: 700, fontSize: "20px", lineHeight: "28px", color: "#0F172A" }}>
            T-Goda
          </span>
          <p style={{ fontFamily: "var(--font-plus-jakarta-sans)", fontWeight: 400, fontSize: "14px", lineHeight: "20px", color: "#64748B" }}>
            Your trusted travel companion for hotels, flights, and unforgettable experiences worldwide.
          </p>
          <p style={{ fontFamily: "var(--font-plus-jakarta-sans)", fontWeight: 400, fontSize: "14px", lineHeight: "20px", color: "#64748B" }}>
            © 2024 T-Goda Booking. All rights reserved.
          </p>
          <div className="flex flex-row items-center gap-4">
            <a href="#" style={{ color: "#D1D5DB" }}>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
              </svg>
            </a>
            <a href="#" style={{ color: "#D1D5DB" }}>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
              </svg>
            </a>
            <a href="#" style={{ color: "#D1D5DB" }}>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                <circle cx="12" cy="12" r="4" />
                <circle cx="17.5" cy="6.5" r="0.5" fill="currentColor" />
              </svg>
            </a>
          </div>
        </div>

        {/* Right Section - Link Columns */}
        <div className="flex flex-row flex-wrap gap-8 md:gap-12">
          {footerLinks.map((col) => (
            <div key={col.heading} className="flex flex-col items-start" style={{ gap: "12px" }}>
              <span style={{ fontFamily: "var(--font-plus-jakarta-sans)", fontWeight: 700, fontSize: "14px", lineHeight: "20px", color: "#0F172A" }}>
                {col.heading}
              </span>
              {col.links.map((link) => (
                <a key={link} href="#" style={{ fontFamily: "var(--font-plus-jakarta-sans)", fontWeight: 400, fontSize: "14px", lineHeight: "20px", color: "#64748B" }}>
                  {link}
                </a>
              ))}
            </div>
          ))}
        </div>
      </div>
    </footer>
  );
}
