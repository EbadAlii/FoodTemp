import React from "react";
import foodPic from "../../assets/KFC-Food-Plate-Top-View-PNG 2.png";
import nav from "../../assets/Group 8651.png";
import foodImg from "../../assets/FeaturedDealCardOne/Rectangle 46.png";

function CardThree() {
  return (
    <div className="relative h-auto w-[190px] rounded-[20px]  bg-[#FFFFFF] flex flex-col items-center px-[4px] md:px-[12px] min-w-[120px] max-w-[195px] md:max-w-[210px] border-[1px]">
      <div className="flex items-center w-full h-[170px] my-[8px]">
        <img className="w-[100%] " src={foodImg} alt="" />
      </div>
      <div className="flex items-center justify-start pl-[14px] py-[9px] w-full h-auto rounded-[20px] bg-[#DAF3DD] text-[12px] font-[700] text-[#30334F] ">
        <p>Premium Deal 1</p>
      </div>
      <div className="w-full h-auto text-[11px] font-[400] leading-[17px] mt-[13px]">
        6 Inch Flatbread, Half Portion Appetizer , 1 Small Drink , 1 Sauce
      </div>
      <div className="w-full flex justify-between items-center">
        <div className="font-[700] text-[16px] text-[#30334F]">Rs. 750</div>
        <div className="">
          <img src={nav} alt="" />
        </div>
      </div>
    </div>
  );
}

export default CardThree;
