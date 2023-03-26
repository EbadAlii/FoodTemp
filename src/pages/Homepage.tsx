import DealsBar from "../components/Deals/DealsBar";
import FeaturedDealsBar from "../components/Featured Deals/FeaturedDealsBar";
import FeaturedDealsNav from "../components/Featured Deals/FeaturedDealsNav";
import Footer from "../components/Footer";
import CarouselComp from "../components/Header/CarouselComp";
import Header from "../components/Header/Header";
import HeaderBanner from "../components/Header/HeaderBanner";
import SearchDiv from "../components/Header/SearchDiv";
import PremiumDeals from "../components/Premium Deals/PremiumDeals";
import PremiumDealsHeader from "../components/Premium Deals/PremiumDealsHeader";

const Homepage = () => {
  return (
    <div className="bg-[#F4F2FC] w-full md:pl-[10px] overflow-x-hidden">
      <Header />
      <SearchDiv />
      {/* <HeaderBanner /> */}
      <CarouselComp />
      <DealsBar />
      <FeaturedDealsNav />
      <FeaturedDealsBar />
      <PremiumDealsHeader />
      <PremiumDeals />
      <Footer />
    </div>
  );
};

export default Homepage;
