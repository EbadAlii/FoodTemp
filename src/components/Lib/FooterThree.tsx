import React from "react";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import BookmarkBorderOutlinedIcon from "@mui/icons-material/BookmarkBorderOutlined";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";

function FooterThree() {
  return (
    <div className="flex justify-center md:hidden border-[1px]">
      <div className="w-[386px] h-[65px]  bg-white   flex items-center justify-center">
        <div className="w-[324px] h-[45px] flex justify-around items-center text-[#F5B180]">
          <div className="bg-[#FEF7F2] rounded-[50%] p-[8px] hover:text-white hover:bg-[#EC6300]">
            <HomeOutlinedIcon fontSize="large" />
          </div>
          <div className="bg-[#FEF7F2] rounded-[50%] p-[8px] hover:text-white hover:bg-[#EC6300]">
            <SearchOutlinedIcon fontSize="large" />
          </div>
          <div className="bg-[#FEF7F2] rounded-[50%] p-[8px] hover:text-white hover:bg-[#EC6300]">
            <ShoppingCartOutlinedIcon fontSize="large" />
          </div>
          <div className="bg-[#FEF7F2] rounded-[50%] p-[8px] hover:text-white hover:bg-[#EC6300]">
            <BookmarkBorderOutlinedIcon fontSize="large" />
          </div>
          <div className="bg-[#FEF7F2] rounded-[50%] p-[8px] hover:text-white hover:bg-[#EC6300]">
            <FavoriteBorderOutlinedIcon fontSize="large" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default FooterThree;
