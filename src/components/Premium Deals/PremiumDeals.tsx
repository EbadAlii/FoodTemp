import React from "react";
import PremiumDealCards from "./PremiumDealCards";
import { PremiumDealsData } from "../../data/PremiumDealsData";

function PremiumDeals() {
  return (
    <div
      className="grid grid-cols-2 items-center justify-center  gap-x-[15px]  gap-y-[10px] my-[10px]  px-[4px] ml-[8px]
      md:grid md:grid-cols-4
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
