import CardFour from "./components/Lib/CardFour";
import FeaturedDealsCardOne from "./components/Lib/CardOne";
import CardThree from "./components/Lib/CardThree";
import CardTwo from "./components/Lib/CardTwo";
import DealsBar from "./components/Lib/DealsBar";
import FooterOne from "./components/Lib/FooterOne";
import FooterTwo from "./components/Lib/FooterTwo";
import HeaderOne from "./components/Lib/HeaderOne";
import HeaderTwo from "./components/Lib/HeaderTwo";
import Homepage from "./pages/Homepage";
import ProductPage from "./pages/ProductPage";

function App() {
  return (
    <div className="App">
      {/* <Homepage /> */}
      {/* <ProductPage /> */}

      <div className="m-[20px]">
        <HeaderOne />
        <br />
        <br />
        <br />
        <HeaderTwo />
        <br />
        <br />
        <br />
        <FeaturedDealsCardOne />
        <br />
        <br />
        <br />
        <CardTwo />
        <br />
        <br />
        <br />
        <CardThree />
        <br />
        <br />
        <br />
        <CardFour />
        <br />
        <br />
        <br />
        <DealsBar />
        <br />
        <br />
        <br />
        <FooterOne />
        <br />
        <br />
        <br />
        <FooterTwo />
      </div>
    </div>
  );
}

export default App;
