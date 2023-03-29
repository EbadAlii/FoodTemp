import React from "react";
import location from "../../assets/HeaderTwo/location.png";
import sort from "../../assets/HeaderTwo/Group 867.png";
import logo from "../../assets/HeaderTwo/Group 873.png";

function HeaderTwo() {
  return (
    <div className="w-full px-[20px] py-[10px] ">
      <div className="flex flex-row items-center justify-between">
        <div className="flex flex-row items-center">
          <div>
            <img
              className="h-[25px] w-[25px] md:h-[30px] md:w-[30px]"
              src={location}
              alt=""
            />
          </div>
          <div className="text-start">
            <p className="text-[#757575] font-[400] text-[8px] md:text-[13px]">
              Delivery
            </p>
            <p className="font-[300] text-[14px] text-[#000000] md:text-[15px]">
              3 Talwaar
            </p>
          </div>
        </div>

        <div>
          <img
            className="w-[102px] md:h-[80px] md:w-[108px] "
            src={logo}
            alt=""
          />
        </div>
        <div>
          <img
            className="h-[42px] w-[42px] md:h-[46px] md:w-[46px]"
            src={sort}
            alt=""
          />
        </div>
      </div>
    </div>
  );
}

export default HeaderTwo;
