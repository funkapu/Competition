export default function SearchSummaryBar() {
  return (
    <div
      className="flex flex-col items-start"
      style={{
        width: "100%",
        padding: "16px",
        background: "#FFFFFF",
        borderBottom: "1px solid rgba(194, 198, 213, 0.3)",
        boxShadow: "0px 1px 2px rgba(0, 0, 0, 0.05)",
      }}
    >
      <div className="flex flex-col sm:flex-row flex-wrap items-stretch sm:items-center gap-3 w-full">
        {/* Destination */}
        <div
          className="flex flex-row items-center flex-1"
          style={{
            minWidth: "200px",
            background: "#ECEDF6",
            border: "1px solid rgba(194, 198, 213, 0.5)",
            borderRadius: "12px",
            padding: "12px 16px",
            height: "57px",
          }}
        >
          <div style={{ paddingRight: "12px" }}>
            <svg width="16" height="20" viewBox="0 0 16 20" fill="none">
              <path d="M8 0C4.13 0 1 3.13 1 7c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5C6.62 9.5 5.5 8.38 5.5 7S6.62 4.5 8 4.5 10.5 5.62 10.5 7 9.38 9.5 8 9.5z" fill="#005CBD" />
            </svg>
          </div>
          <div className="flex flex-col items-start">
            <span style={{ fontFamily: "var(--font-plus-jakarta-sans)", fontWeight: 500, fontSize: "12px", color: "#424753" }}>Destination</span>
            <span style={{ fontFamily: "var(--font-plus-jakarta-sans)", fontWeight: 600, fontSize: "14px", color: "#191C22" }}>Bali, Indonesia</span>
          </div>
        </div>

        {/* Dates */}
        <div
          className="flex flex-row items-center"
          style={{
            background: "#ECEDF6",
            border: "1px solid rgba(194, 198, 213, 0.5)",
            borderRadius: "12px",
            padding: "12px 16px",
            height: "57px",
          }}
        >
          <div style={{ paddingRight: "12px" }}>
            <svg width="18" height="20" viewBox="0 0 18 20" fill="none">
              <rect x="1" y="3" width="16" height="16" rx="2" stroke="#005CBD" strokeWidth="1.8" />
              <path d="M1 8h16" stroke="#005CBD" strokeWidth="1.8" />
              <path d="M5 1v4M13 1v4" stroke="#005CBD" strokeWidth="1.8" strokeLinecap="round" />
            </svg>
          </div>
          <div className="flex flex-col items-start">
            <span style={{ fontFamily: "var(--font-plus-jakarta-sans)", fontWeight: 500, fontSize: "12px", color: "#424753" }}>Dates</span>
            <span style={{ fontFamily: "var(--font-plus-jakarta-sans)", fontWeight: 600, fontSize: "14px", color: "#191C22" }}>Oct 12 – Oct 19, 2024</span>
          </div>
        </div>

        {/* Travelers */}
        <div
          className="flex flex-row items-center"
          style={{
            background: "#ECEDF6",
            border: "1px solid rgba(194, 198, 213, 0.5)",
            borderRadius: "12px",
            padding: "12px 16px",
            height: "57px",
          }}
        >
          <div style={{ paddingRight: "12px" }}>
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
              <circle cx="8" cy="4" r="3" stroke="#005CBD" strokeWidth="1.8" />
              <path d="M1 15c0-3.866 3.134-7 7-7s7 3.134 7 7" stroke="#005CBD" strokeWidth="1.8" strokeLinecap="round" />
            </svg>
          </div>
          <div className="flex flex-col items-start">
            <span style={{ fontFamily: "var(--font-plus-jakarta-sans)", fontWeight: 500, fontSize: "12px", color: "#424753" }}>Travelers</span>
            <span style={{ fontFamily: "var(--font-plus-jakarta-sans)", fontWeight: 600, fontSize: "14px", color: "#191C22" }}>2 Adults, 1 Room</span>
          </div>
        </div>

        {/* Update Search Button */}
        <button
          className="flex items-center justify-center"
          style={{
            height: "48px",
            background: "#005CBD",
            borderRadius: "12px",
            padding: "12px 32px",
            boxShadow: "0px 10px 15px -3px rgba(0, 92, 189, 0.2), 0px 4px 6px -4px rgba(0, 92, 189, 0.2)",
            whiteSpace: "nowrap",
          }}
        >
          <span style={{ fontFamily: "var(--font-plus-jakarta-sans)", fontWeight: 400, fontSize: "16px", color: "#FFFFFF" }}>
            Update Search
          </span>
        </button>
      </div>
    </div>
  );
}
