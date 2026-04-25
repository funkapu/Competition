import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SearchSummaryBar from "@/components/SearchSummaryBar";
import SidebarFilters from "@/components/SidebarFilters";
import ResultsList from "@/components/ResultsList";

export default function Page2() {
  return (
    <div className="relative w-full bg-white" style={{ minHeight: "2384px" }}>
      <Navbar />
      <main className="max-w-[1280px] mx-auto w-full pt-[65px]">
        <SearchSummaryBar />
        <div className="flex flex-col lg:flex-row gap-6 px-4 lg:px-6 pt-6">
          <div className="hidden lg:block">
            <SidebarFilters />
          </div>
          <ResultsList />
        </div>
      </main>
      <Footer />
    </div>
  );
}
