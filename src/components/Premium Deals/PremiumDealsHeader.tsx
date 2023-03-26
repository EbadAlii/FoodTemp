import React from "react";
import rectangle from "../../assets/arrow-right.png";
function PremiumDealsHeader() {
  return (
    <div className="flex items-center justify-between mx-[19px] pt-[30px]">
      <div className="font-[700] text-[20px] text-[#30334F] ">
        Premium Deals
      </div>
      <div className="w-[163px] h-[50px] rounded-[30px] bg-[#FFFFFF] flex items-center justify-between pl-[4px] pr-[30px]">
        <div className="w-[44px] h-[42px] rounded-[20px] bg-[#F4F5F6] flex items-center justify-center">
          <img src={rectangle} alt="" />
        </div>
        <div className="font-[400] text-[11px] text-[#666666]">
          <p>View All</p>
        </div>
      </div>
    </div>
  );
}

export default PremiumDealsHeader;
