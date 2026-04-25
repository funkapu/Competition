import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Breadcrumb from "@/components/Breadcrumb";
import HotelHeader from "@/components/HotelHeader";
import HotelGallery from "@/components/HotelGallery";
import MainContentGrid from "@/components/MainContentGrid";
import RoomSelection from "@/components/RoomSelection";
import GuestReviews from "@/components/GuestReviews";

export default function Page3() {
  return (
    <div className="relative w-full bg-white" style={{ minHeight: "2804px", paddingBottom: "60px" }}>
      <Navbar />
      <main className="max-w-[1280px] mx-auto w-full pt-[65px]">
        <div className="flex flex-col" style={{ padding: "16px 16px 0px", gap: "16px" }}>
          <Breadcrumb />
          <HotelHeader />
          <HotelGallery />
          <MainContentGrid />
          <RoomSelection />
          <GuestReviews />
        </div>
      </main>
      <Footer />
    </div>
  );
}
