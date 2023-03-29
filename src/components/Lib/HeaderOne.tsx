import React from "react";
import sort from "../../assets/HeaderOne/Group 862.png";
import logo from "../../assets/HeaderOne/image 108.png";
import location from "../../assets/HeaderOne/image 104.png";

function HeaderOne() {
  return (
    <div className="w-full px-[20px] py-[10px] ">
      <div className="flex flex-row items-center justify-between">
        <div>
          <img
            className="h-[17px] w-[23px] md:h-[20px] md:w-[26px]"
            src={sort}
            alt=""
          />
        </div>
        <div>
          <img
            className="h-[76] w-[103px] md:h-[80px] md:w-[108px] "
            src={logo}
            alt=""
          />
        </div>
        <div className="flex flex-row items-center">
          <div className="text-end">
            <p className="text-[#EC6300] font-[500] text-[10px] md:text-[13px]">
              Delivery
            </p>
            <p className="font-[300] text-[12px] md:text-[15px]">3 Talwaar</p>
          </div>
          <div>
            <img
              className="h-[22px] w-[22px] md:h-[25px] md:w-[25px]"
              src={location}
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default HeaderOne;
