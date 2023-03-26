import React from "react";
import sort from "../../assets/sort.png";
import searchIcon from "../../assets/search-normal.png";
function SearchDiv() {
  return (
    <div
      className="flex flex-row justify-between mx-[15px] mt-[20px] md:h-[50px] 
      md:justify-around
    "
    >
      <div className="h-[50px] w-[40px] flex items-center justify-center md:h-[60px] md:w-[60px]">
        <img src={sort} alt="" />
      </div>
      <div className="bg-[#FFFFFF] w-[85%] pl-[8px] md:h-[100%] rounded-[10px] flex items-center justify-center">
        <div>
          <img src={searchIcon} alt="" />
        </div>
        <input
          className="ml-[18px] focus:outline-none text-xs w-[100%] md:h-[100%] rounded-[10px] text-[12px] tracking-[1px]"
          type="text"
          placeholder="Type your search here"
        />
      </div>
    </div>
  );
}

export default SearchDiv;
