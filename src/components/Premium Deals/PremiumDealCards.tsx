import React from "react";
import foodPic from "../../assets/KFC-Food-Plate-Top-View-PNG 2.png";
import nav from "../../assets/Group 8651.png";

function PremiumDealCards(props: any) {
  return (
    <div className="h-[315px] w-auto rounded-[20px] m-auto bg-[#FFFFFF] flex flex-col items-center px-[4px] md:px-[12px]">
      <div className="min-h-[134px] min-w-[124px] mx-[21px]">
        <img src={foodPic} alt="" />
      </div>
      <div className="flex items-center justify-start pl-[14px] w-full h-[38px] rounded-[20px] bg-[#DAF3DD] text-[12px] font-[700] text-[#30334F] ">
        <p>{props.title}</p>
      </div>
      <div className="w-full h-[53px] text-[11px] font-[400] leading-[17px] mt-[13px]">
        {props.details}
      </div>
      <div className="w-full flex justify-between items-center">
        <div className="font-[700] text-[16px] text-[#30334F]">
          {props.price}
        </div>
        <div className="">
          <img src={nav} alt="" />
        </div>
      </div>
    </div>
  );
}

export default PremiumDealCards;
