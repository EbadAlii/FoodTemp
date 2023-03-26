import React from "react";
import heart from "../assets/heart.png";
import search from "../assets/search.png";
import shop from "../assets/shop.png";
import Vector from "../assets/Vector.png";
import bookmark from "../assets/bookmark.png";

function Footer() {
  return (
    <div className="flex justify-center md:hidden">
      <div className="w-[386px] h-[62px] rounded-[30px] bg-[#30334F] fixed bottom-[21px] flex items-center justify-center">
        <div className="w-[324px] h-[45px] flex justify-around items-center">
          <div className="w-[22px] h-[22px]">
            <img src={Vector} alt="" />
          </div>
          <div>
            <img src={search} alt="" />
          </div>
          <div>
            <img src={shop} alt="" />
          </div>
          <div>
            <img src={bookmark} alt="" />
          </div>
          <div>
            <img src={heart} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
