import React from "react";
import { FeaturedDealsData } from "../../data/FeaturedDealsData";
import FeaturedDeals from "./FeaturedDeals";

function FeaturedDealsBar() {
  return (
    <div className="flex overflow-y-hidden overflow-x-scroll scrollbar-hide">
      {FeaturedDealsData.map((data, key) => (
        <FeaturedDeals
          key={key}
          title={data.title}
          details={data.details}
          price={data.price}
        />
      ))}
    </div>
  );
}

export default FeaturedDealsBar;
