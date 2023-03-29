import React from "react";
import dealImg from "../../assets/FeaturedDealCardOne/Rectangle 46.png";
import add from "../../assets/FeaturedDealCardOne/Group 4.png";

function CardOne() {
  return (
    <div className=" relative h-auto w-[385px] rounded-[5px] flex flex-row border-[1px]">
      <div className="">
        <img
          className="rounded-[5px] max-w-[122px] h-full"
          src={dealImg}
          alt=""
        />
      </div>
      <div className="mx-[14px]">
        <div className="font-[500] text-[14px] text-[#292929] mt-[15px]">
          Premium Deal 3
        </div>
        <div className="font-[400] text-[10px] text-[#000115] h-auto mt-[5px]">
          6 Inch Flatbread, Half Portion Appetizer , 1 Small Drink , 1 Sauce 6
        </div>
        <div className="font-[500] text-[13px] text-[#222222] mt-[20px] mb-[8px]">
          Rs. 349
        </div>
      </div>
      <div className="">
        <img className="absolute right-0 bottom-0" src={add} alt="" />
      </div>
    </div>
  );
}

export default CardOne;
