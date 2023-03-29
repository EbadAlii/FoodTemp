import React from "react";
import heart from "../../assets/heart.png";
import search from "../../assets/search.png";
import shop from "../../assets/shop.png";
import Vector from "../../assets/Vector.png";
import bookmark from "../../assets/bookmark.png";

function FooterTwo() {
  return (
    <div className="flex justify-center md:hidden">
      <div className="w-[386px] h-[62px]  bg-[#30334F] flex items-center justify-center text-white text-[10px]">
        <div className="w-[324px] h-[45px] flex justify-around items-center">
          <div className="w-[30px] h-[22px] flex flex-col items-center">
            <img src={Vector} alt="" />
            <p className="text-[10px]">Home</p>
          </div>
          <div className="w-auto h-[22px] flex flex-col items-center">
            <img src={search} alt="" />
            <p>Search</p>
          </div>
          <div className="w-auto h-[22px] flex flex-col items-center">
            <img src={shop} alt="" />
            <p>Cart</p>
          </div>
          <div className="w-auto h-[22px] flex flex-col items-center">
            <img src={bookmark} alt="" />
            <p>Features</p>
          </div>
          <div className="w-auto h-[22px] flex flex-col items-center">
            <img src={heart} alt="" />
            <p>Pages</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FooterTwo;
