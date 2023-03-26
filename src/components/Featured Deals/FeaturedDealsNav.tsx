import React from "react";
import arrowRight from "../../assets/arrow-right.png";

function FeaturedDealsNav() {
  return (
    <div className="flex items-center justify-between mr-[16px] ml-[13px] mt-[9px]">
      <div className="font-[700] text-[20px] text-[#30334F]">
        Featured Deals
      </div>
      <div>
        <img src={arrowRight} alt="" />
      </div>
    </div>
  );
}

export default FeaturedDealsNav;
