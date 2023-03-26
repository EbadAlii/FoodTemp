import React from "react";
import foodPic from "../../assets/KFC-Food-Plate-Top-View-PNG 2.png";
import slider from "../../assets/Group 877.png";

function HeaderBanner(props: any) {
  return (
    <div>
      <div className=" object-cover mt-[13px] h-[138px] w-auto rounded-[20px] bg-[#E414AA] ml-[0px] flex flex-row items-center justify-between text-[18px]">
        <div className="w-[151px] h-auto text-white ml-[28px] leading-[27px]">
          <p className="font-bold">{props.heading}</p>
          <p className="font-light"> {props.details} </p>
        </div>
        <div className="mr-[9px]">
          <img className="" src={foodPic} alt="" />
        </div>
      </div>
    </div>
  );
}

export default HeaderBanner;
