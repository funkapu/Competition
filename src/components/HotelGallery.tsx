const images = [
  "/pool2.png",
  "/room.png",
  "/pool.png",
  "/camping.png",
  "/more_photos.png",
];

export default function HotelGallery() {
  return (
    <>
      {/* Mobile: single image */}
      <div className="reveal block md:hidden w-full" style={{ height: "240px", borderRadius: "12px", overflow: "hidden" }}>
        <img src={images[0]} alt="hotel main" className="w-full h-full object-cover" />
      </div>

      {/* Desktop: full gallery grid */}
      <div className="reveal hidden md:block w-full" style={{ position: "relative", height: "508px" }}>
        {/* Large left image */}
        <div style={{ position: "absolute", left: 0, top: 8, width: 608, height: 500, borderRadius: "12px", overflow: "hidden" }}>
          <img src={images[0]} alt="hotel main" className="w-full h-full object-cover" />
        </div>
        {/* Top-mid */}
        <div style={{ position: "absolute", left: 624, top: 8, width: 296, height: 242, borderRadius: "12px", overflow: "hidden" }}>
          <img src={images[1]} alt="hotel 2" className="w-full h-full object-cover" />
        </div>
        {/* Top-right */}
        <div style={{ position: "absolute", left: 936, top: 8, width: 296, height: 242, borderRadius: "12px", overflow: "hidden" }}>
          <img src={images[2]} alt="hotel 3" className="w-full h-full object-cover" />
        </div>
        {/* Bottom-mid */}
        <div style={{ position: "absolute", left: 624, top: 266, width: 296, height: 242, borderRadius: "12px", overflow: "hidden" }}>
          <img src={images[3]} alt="hotel 4" className="w-full h-full object-cover" />
        </div>
        {/* Bottom-right with overlay */}
        <div style={{ position: "absolute", left: 936, top: 266, width: 296, height: 242, borderRadius: "12px", overflow: "hidden" }}>
          <img src={images[4]} alt="hotel 5" className="w-full h-full object-cover" />
          <div className="absolute inset-0 flex items-center justify-center" style={{ background: "rgba(0,0,0,0.4)" }}>
            <span style={{ fontFamily: "var(--font-plus-jakarta-sans)", fontWeight: 400, fontSize: "16px", color: "#FFFFFF" }}>
              +124 photos
            </span>
          </div>
        </div>
      </div>
    </>
  );
}
