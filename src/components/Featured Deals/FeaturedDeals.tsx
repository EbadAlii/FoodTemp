import React from "react";
import foodPic from "../../assets/KFC-Food-Plate-Top-View-PNG 2.png";
import add from "../../assets/Group 865.png";

function FeaturedDeals(props: any) {
  return (
    <div className="relative w-[358px] min-w-[358px] h-[171px] bg-[#FFFFFF] rounded-[20px] ml-[13px] mt-[14px] pt-[7px] flex">
      <div className="">
        <img src={foodPic} alt="" />
      </div>
      <div className="mt-[11px] mr-[11px] mb-[11px] ml-[5px] ">
        <div className="h-auto w-[190px] rounded-[20px] bg-[#DAF3DD] font-[700] text-[12px] text-[#30334F] px-[25px] py-[8px]">
          <p>{props.title}</p>
        </div>
        <div className="h-[53px] w-[155px] overflow-hidden font-[400] text-[11px] text-[#30334F] ml-[7px] mt-[8px] leading-[16px]">
          <p>{props.details}</p>
        </div>
        <div className="object-cover w-[135px] h-[26px] font-[700] text-[16px] ml-[7px] text-[#30334F] flex flex-between">
          <p>{props.price}</p>
        </div>
      </div>
      <div>
        <img className="absolute right-0 bottom-[-10px]" src={add} alt=""></img>
      </div>
    </div>
  );
}

export default FeaturedDeals;
