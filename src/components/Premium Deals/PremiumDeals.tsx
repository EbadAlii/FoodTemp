import React from "react";
import PremiumDealCards from "./PremiumDealCards";
import { PremiumDealsData } from "../../data/PremiumDealsData";

function PremiumDeals() {
  return (
    <div
      className="grid grid-cols-2 items-center justify-center  gap-x-[15px]  gap-y-[10px] my-[10px]  px-[4px] mx-[8px]
      md:grid md:grid-cols-4 lg:grid-cols-6 min-w-[70%] md:min-w-[70%]
    "
    >
      {PremiumDealsData.map((data, key) => (
        <PremiumDealCards
          key={key}
          title={data.title}
          price={data.price}
          details={data.details}
        />
      ))}
    </div>
  );
}

export default PremiumDeals;
