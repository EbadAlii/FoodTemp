import React from "react";
import pizza from "../../assets/pizzas.png";

function ProductHeader() {
  return (
    <div className="h-[411px] w-full flex flex-col items-center">
      <div className="bg-[#EDDAC5] h-[272px] mt-0 w-full">
        <div className="w-full h-full flex justify-center items-center">
          <img src={pizza} alt="" />
        </div>
      </div>
      <div className="bg-[#EAFBEC] flex justify-center w-[384px] px-[46px] py-[10px] rounded-[15px] mt-[-10%]">
        <div className="font-[600] text-[20px] leading-[30px] text-[#30334F] ">
          Premium Deal 1 Marghertia Pizza with Tomoto
        </div>
      </div>
      <div className="w-[302px] h-[46px]  flex justify-center text-center mt-[13px] mb-[10px]">
        <div className="text-[16px] font-[400] leading-[24px] text-[#30334F]">
          6 Inch Flatbread, Half Portion Appetizer , 1 Small Drink , 1 Sauce
        </div>
      </div>
      <div className="font-[700] text-[18px] text-[#30334F]">Rs. 750</div>
    </div>
  );
}

export default ProductHeader;
