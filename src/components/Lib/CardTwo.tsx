import React from "react";
import foodImg from "../../assets/KFC-Food-Plate-Top-View-PNG 2.png";
import add from "../../assets/CardTwo/Group 865.png";
function CardTwo() {
  return (
    <div className="relative h-auto w-[198px] flex flex-col items-center text-center px-[34px] border-[1px] rounded-[20px]">
      <img
        className="absolute top-[-50px] w-[120px] h-[129px]"
        src={foodImg}
        alt=""
      />
      <div className="pt-[80px] pb-[23px]">
        <div className="font-[700] text-[16px] text-[#292929] ">
          Premium Deal 1
        </div>
        <div className="mt-[9px] text-[#676767] text-[11px] font-[400]">
          6 Inch Flatbread, Half Portion Appetizer , 1 Small Drink , 1 Sauce
        </div>
        <div className="mt-[7px] font-[700] text-[16px] text-[#292929]">
          Rs. 750
        </div>
      </div>
      <div className="absolute bottom-[-47px]">
        <img src={add} alt="" />
      </div>
    </div>
  );
}

export default CardTwo;
