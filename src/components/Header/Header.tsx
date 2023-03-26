import React from "react";
import logo from "../../assets/logo.png";
import location from "../../assets/location.png";
const Header = () => {
  return (
    <div className=" flex flex-row justify-between ">
      <div className=" mt-[5px] ml-[18px]">
        <img src={logo} alt=""></img>
      </div>
      <div>
        <div className="mt-[20px] flex flex-row h-[46] mr-[24px]">
          <div>
            <img src={location} alt="" />
          </div>
          <div className="">
            <p className="text-xs text-slate-400 font-light">Delivery to</p>
            <p className="text-xl font-regular">3 Talwaar</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
