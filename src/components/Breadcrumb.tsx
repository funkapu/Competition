const font = (weight: number, color: string) => ({
  fontFamily: "var(--font-plus-jakarta-sans)",
  fontWeight: weight,
  fontSize: "16px",
  lineHeight: "24px",
  color,
});

const crumbs = ["Home", "Greece", "Crete Hotels"];
const current = "Grand Azure Resort & Spa";

function Chevron() {
  return (
    <svg width="5" height="8" viewBox="0 0 5 8" fill="none">
      <path d="M1 1l3 3-3 3" stroke="#424753" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export default function Breadcrumb() {
  return (
    <div className="flex flex-row items-center" style={{ gap: "8px", height: "24px" }}>
      {crumbs.map((crumb) => (
        <div key={crumb} className="flex flex-row items-center" style={{ gap: "8px" }}>
          <span style={font(400, "#424753")}>{crumb}</span>
          <Chevron />
        </div>
      ))}
      <span style={font(600, "#191C22")}>{current}</span>
    </div>
  );
}
