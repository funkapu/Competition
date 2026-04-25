"use client";
import { useState, useEffect } from "react";
import Link from "next/link";

const font = (weight: number, size: string, lineHeight: string, color: string) => ({
  fontFamily: "var(--font-plus-jakarta-sans)",
  fontWeight: weight,
  fontSize: size,
  lineHeight: lineHeight,
  color,
});

function Stars({ count, size = 10 }: { count: number; size?: number }) {
  return (
    <div className="flex flex-row">
      {Array.from({ length: 5 }).map((_, i) => (
        <svg key={i} width={size} height={size * 0.95} viewBox="0 0 10 9.5" fill="none">
          <path d="M5 0l1.03 3.17H9.5L6.69 5.13l1.03 3.17L5 6.35 2.28 8.3l1.03-3.17L.5 3.17H3.97z"
            fill={i < count ? "#EAB308" : "#E5E7EB"} />
        </svg>
      ))}
    </div>
  );
}

const flashDeals = [
  { image: "/luxury_villa.png", discount: "60% OFF", name: "Mandala Sky Luxury Villas", stars: 5, location: "Uluwatu, Bali • Cliff-top view", original: "$1,200", price: "$480" },
  { image: "/jungle.png", discount: "45% OFF", name: "Emerald Jungle Retreat", stars: 4, location: "Ubud, Bali • Private Sanctuary", original: "$450", price: "$247" },
  { image: "/ShoresClub.png", discount: "35% OFF", name: "Seminyak Shores Club", stars: 5, location: "Seminyak, Bali • Beachfront Bliss", original: "$680", price: "$442" },
];

const hotelCards = [
  {
    image: "/azure.png",
    topChoice: true,
    name: "The Azure Serenity Resort",
    stars: 5,
    location: "Ubud, Bali • 2.5 km from center",
    score: "8.9",
    scoreLabel: "Excellent",
    reviews: "1,240 reviews",
    amenities: ["Free Wi-Fi", "Pool", "Breakfast"],
    originalPrice: "$320",
    price: "$284",
    note: "Only 2 rooms left at this price!",
    cta: "Book Now",
  },
  {
    image: "/lamina.png",
    topChoice: false,
    name: "Lumina Beach Villas",
    stars: 4,
    location: "Seminyak, Bali • Beachfront",
    score: "9.2",
    scoreLabel: "Exceptional",
    reviews: "856 reviews",
    amenities: ["Private Beach", "Spa"],
    originalPrice: null,
    price: "$415",
    note: "Free cancellation before Oct 10",
    cta: "Book Now",
  },
  {
    image: "/palms.png",
    topChoice: false,
    name: "The Palms Sanctuary",
    stars: 3,
    location: "Nusa Dua, Bali • 0.8 km from beach",
    score: "8.4",
    scoreLabel: "Great",
    reviews: "2,102 reviews",
    amenities: ["Airport Shuttle", "Gym"],
    originalPrice: null,
    price: "$189",
    note: "Breakfast + Dinner deal available",
    cta: "Book Now",
  },
];

function FlashDealsBanner() {
  const [time, setTime] = useState({ h: 8, m: 45, s: 12 });

  useEffect(() => {
    const id = setInterval(() => {
      setTime((prev) => {
        let { h, m, s } = prev;
        s--;
        if (s < 0) { s = 59; m--; }
        if (m < 0) { m = 59; h--; }
        if (h < 0) { h = 0; m = 0; s = 0; }
        return { h, m, s };
      });
    }, 1000);
    return () => clearInterval(id);
  }, []);

  const pad = (n: number) => String(n).padStart(2, "0");

  return (
    <div
      className="flex flex-row justify-between items-center w-full"
      style={{
        padding: "12px 24px",
        background: "rgba(182, 27, 74, 0.08)",
        border: "1px solid rgba(182, 27, 74, 0.15)",
        borderRadius: "12px",
        height: "52px",
      }}
    >
      <div className="flex flex-row items-center gap-3">
        <svg width="16" height="19" viewBox="0 0 16 19" fill="none">
          <path d="M9 0C9 0 9 4 6 6C4 7.5 2 8 2 11C2 14 4.5 16.5 8 17C11.5 17.5 14 15 14 12C14 10 13 8.5 11.5 7.5C12 9 11 10.5 9.5 11C10 9 9.5 7 8 5.5C8.5 7 8 9 6.5 10C6 8 6.5 5 9 0Z" fill="#B61B4A" />
        </svg>
        <span style={font(400, "18px", "28px", "#B61B4A")}>Flash Deals for You</span>
      </div>
      <div className="flex flex-row items-center gap-2">
        <span style={font(500, "12px", "17px", "#424753")}>Ends in:</span>
        <div className="flex flex-row items-center gap-1 px-3 py-1" style={{ background: "#B61B4A", borderRadius: "6px" }}>
          <span style={{ ...font(700, "14px", "20px", "#FFFFFF"), fontFamily: "monospace" }}>
            {pad(time.h)} : {pad(time.m)} : {pad(time.s)}
          </span>
        </div>
      </div>
    </div>
  );
}

function FlashDealCards() {
  return (
    <div
      className="w-full"
      style={{
        padding: "4px",
        background: "linear-gradient(123.88deg, #005CBD 0%, #004591 100%)",
        borderRadius: "16px",
      }}
    >
      <div className="flex flex-col" style={{ background: "#FFFFFF", borderRadius: "12px", overflow: "hidden" }}>
        {flashDeals.map((deal, i) => (
          <div
            key={i}
            className="flex flex-col sm:flex-row items-start"
            style={{ borderTop: i > 0 ? "1px solid rgba(194, 198, 213, 0.2)" : "none" }}
          >
            {/* Image */}
            <Link href="/page3" className="img-zoom relative flex-shrink-0 w-full sm:w-[280px] lg:w-[320px]" style={{ display: "block", height: "200px" }}>
              <img src={deal.image} alt={deal.name} className="w-full h-full object-cover" />
              <div className="absolute" style={{ left: "12px", top: "12px", background: "#B61B4A", borderRadius: "8px", padding: "4px 12px" }}>
                <span style={font(900, "12px", "16px", "#FFFFFF")}>{deal.discount}</span>
              </div>
            </Link>

            {/* Content */}
            <div className="flex flex-col justify-between" style={{ padding: "16px", flex: 1 }}>
              <div className="flex flex-col gap-4">
                <div className="flex flex-col gap-1">
                  <div className="flex flex-row items-center gap-2">
                    <span style={font(400, "20px", "28px", "#191C22")}>{deal.name}</span>
                    <Stars count={deal.stars} size={12} />
                  </div>
                  <div className="flex flex-row items-center gap-1">
                    <svg width="11" height="13" viewBox="0 0 11 13" fill="none">
                      <path d="M5.5 0C3.01 0 1 2.01 1 4.5c0 3.375 4.5 8.5 4.5 8.5s4.5-5.125 4.5-8.5C10 2.01 7.99 0 5.5 0zm0 6.75a2.25 2.25 0 1 1 0-4.5 2.25 2.25 0 0 1 0 4.5z" fill="#424753" />
                    </svg>
                    <span style={font(400, "14px", "20px", "#424753")}>{deal.location}</span>
                  </div>
                </div>
              </div>
              <div className="flex flex-row justify-end items-end">
                <div className="flex flex-col items-end gap-1">
                  <span style={{ ...font(500, "12px", "12px", "#424753"), textDecoration: "line-through" }}>{deal.original}</span>
                  <div className="flex flex-row items-baseline gap-1">
                    <span style={font(600, "24px", "31px", "#B61B4A")}>{deal.price}</span>
                    <span style={font(500, "12px", "17px", "#424753")}>/night</span>
                  </div>
                  <button className="btn-press" style={{ background: "#B61B4A", borderRadius: "8px", padding: "8px 24px", whiteSpace: "nowrap" }}>
                    <span style={font(400, "16px", "24px", "#FFFFFF")}>Claim Deal</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function HotelCard({ hotel }: { hotel: typeof hotelCards[0] }) {
  return (
    <div
      className="reveal card-hover flex flex-col sm:flex-row items-start w-full"
      style={{
        background: "#FFFFFF",
        border: "1px solid rgba(194, 198, 213, 0.2)",
        boxShadow: "0px 4px 12px rgba(0, 0, 0, 0.05)",
        borderRadius: "12px",
        overflow: "hidden",
      }}
    >
      {/* Image */}
      <Link href="/page3" className="img-zoom relative flex-shrink-0 w-full sm:w-[280px] lg:w-[320px]" style={{ display: "block", height: "200px" }}>
        <img src={hotel.image} alt={hotel.name} className="w-full h-full object-cover" />
        {hotel.topChoice && (
          <div
            className="absolute flex flex-row items-end gap-1"
            style={{ left: "16px", top: "16px", background: "rgba(255,255,255,0.9)", backdropFilter: "blur(2px)", borderRadius: "9999px", padding: "3px 12px 4px" }}
          >
            <svg width="15" height="14" viewBox="0 0 15 14" fill="none">
              <circle cx="7.5" cy="7" r="6.5" stroke="#005CBD" strokeWidth="1.5" />
              <path d="M7.5 4l.9 2.77h2.91l-2.35 1.71.9 2.77L7.5 9.54 4.64 11.25l.9-2.77L3.19 6.77h2.91z" fill="#005CBD" />
            </svg>
            <span style={font(700, "12px", "17px", "#005CBD")}>Top Choice</span>
          </div>
        )}
      </Link>

      {/* Content */}
      <div className="flex flex-col justify-between" style={{ padding: "16px", flex: 1 }}>
        {/* Top section */}
        <div className="flex flex-col gap-4">
          {/* Name + Score row */}
          <div className="flex flex-row justify-between items-start">
            <div className="flex flex-col gap-1">
              <div className="flex flex-row items-center gap-2">
                <span style={font(400, "20px", "28px", "#191C22")}>{hotel.name}</span>
                <Stars count={hotel.stars} size={12} />
              </div>
              <div className="flex flex-row items-center gap-1">
                <svg width="11" height="13" viewBox="0 0 11 13" fill="none">
                  <path d="M5.5 0C3.01 0 1 2.01 1 4.5c0 3.375 4.5 8.5 4.5 8.5s4.5-5.125 4.5-8.5C10 2.01 7.99 0 5.5 0zm0 6.75a2.25 2.25 0 1 1 0-4.5 2.25 2.25 0 0 1 0 4.5z" fill="#424753" />
                </svg>
                <span style={font(400, "14px", "20px", "#424753")}>{hotel.location}</span>
              </div>
            </div>

            {/* Score badge */}
            <div className="flex flex-col items-end" style={{ background: "rgba(0, 92, 189, 0.1)", borderRadius: "8px", padding: "6px 12px" }}>
              <span style={font(700, "14px", "20px", "#005CBD")}>{hotel.score} {hotel.scoreLabel}</span>
              <span style={font(400, "10px", "15px", "#424753")}>{hotel.reviews}</span>
            </div>
          </div>

          {/* Amenities */}
          <div className="flex flex-row gap-2">
            {hotel.amenities.map((a) => (
              <div key={a} className="flex flex-row items-center gap-1" style={{ background: "#ECEDF6", borderRadius: "4px", padding: "4px 8px" }}>
                <span style={font(400, "11px", "16px", "#191C22")}>{a}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom section */}
        <div className="flex flex-row justify-between items-end">
          <span style={{ ...font(400, "12px", "16px", "#424753"), fontStyle: "italic" }}>{hotel.note}</span>
          <div className="flex flex-col items-end gap-1">
            {hotel.originalPrice && (
              <span style={{ ...font(500, "12px", "12px", "#424753"), textDecoration: "line-through" }}>{hotel.originalPrice}</span>
            )}
            <div className="flex flex-row items-baseline gap-1">
              <span style={font(600, "24px", "31px", "#B61B4A")}>{hotel.price}</span>
              <span style={font(500, "12px", "17px", "#424753")}>/night</span>
            </div>
            <button className="btn-press" style={{ background: "#B61B4A", borderRadius: "8px", padding: "8px 24px", whiteSpace: "nowrap" }}>
              <span style={font(400, "16px", "24px", "#FFFFFF")}>{hotel.cta}</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

function Pagination() {
  return (
    <div className="flex flex-row items-center justify-center gap-2 w-full pt-4">
      {["<", "1", "2", "3", "...", "12", ">"].map((p, i) => (
        <button
          key={i}
          style={{
            width: "36px",
            height: "36px",
            borderRadius: "8px",
            background: p === "1" ? "#005CBD" : "#FFFFFF",
            border: p === "1" ? "none" : "1px solid rgba(194, 198, 213, 0.5)",
            ...font(p === "1" ? 700 : 400, "14px", "20px", p === "1" ? "#FFFFFF" : "#424753"),
          }}
        >
          {p}
        </button>
      ))}
    </div>
  );
}

export default function ResultsList() {
  return (
    <div className="flex flex-col items-start w-full" style={{ gap: "16px" }}>
      {/* Header */}
      <div className="flex flex-row justify-between items-center w-full" style={{ height: "40px" }}>
        <span style={font(400, "20px", "28px", "#191C22")}>245 properties in Bali</span>
        <div className="flex flex-row items-center gap-2">
          <span style={font(500, "12px", "17px", "#424753")}>Sort by:</span>
          <div className="flex flex-row items-center gap-2" style={{ padding: "8px 12px", border: "1px solid rgba(194,198,213,0.5)", borderRadius: "8px" }}>
            <span style={font(400, "16px", "24px", "#005CBD")}>Recommended</span>
            <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
              <path d="M2 4l4 4 4-4" stroke="#6B7280" strokeWidth="1.5" strokeLinecap="round" />
            </svg>
          </div>
        </div>
      </div>

      {/* Flash Deals */}
      <FlashDealsBanner />
      <FlashDealCards />

      {/* Hotel Cards */}
      {hotelCards.map((hotel, i) => (
        <HotelCard key={i} hotel={hotel} />
      ))}

      {/* Pagination */}
      <Pagination />
    </div>
  );
}
