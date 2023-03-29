import React from "react";
import foodPic from "../../assets/KFC-Food-Plate-Top-View-PNG 2.png";
import add from "../../assets/Group 865.png";

function CardFour() {
  return (
    <div className="relative w-[358px] min-w-[358px] h-auto bg-[#FFFFFF] rounded-[20px] ml-[13px] mt-[14px] pt-[7px] flex border-[1px]">
      <div className="h-full max-w-[155px]">
        <img src={foodPic} alt="" />
      </div>
      <div className="mt-[11px] mr-[11px] mb-[11px] ml-[5px] flex flex-col items-start">
        <div className="h-auto w-[190px] rounded-[20px] bg-[#DAF3DD] font-[700] text-[12px] text-[#30334F] px-[25px] py-[8px]">
          <p>Premium Deal 1 </p>
        </div>
        <div className="h-auto w-[155px] overflow-hidden font-[400] text-[11px] text-[#30334F] ml-[7px] mt-[8px] leading-[16px]">
          <p>
            6 Inch Flatbread, Half Portion Appetizer , 1 Small Drink , 1 Sauce
          </p>
        </div>
        <div className="object-cover px-[5px] w-[135px] h-[26px] font-[700] text-[16px] my-[7px] text-[#30334F] flex flex-between">
          <p>Rs. 750</p>
        </div>
      </div>
      <div className="">
        <img className="absolute right-0 bottom-[-10px]" src={add} alt=""></img>
      </div>
    </div>
  );
}

export default CardFour;
