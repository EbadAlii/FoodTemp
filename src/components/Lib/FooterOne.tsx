import React from "react";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import BookmarkBorderOutlinedIcon from "@mui/icons-material/BookmarkBorderOutlined";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
function FooterOne() {
  return (
    <div className="flex justify-center md:hidden">
      <div className="w-[386px] h-[62px] rounded-[30px] bg-[#30334F]   flex items-center justify-center">
        <div className="w-[324px] h-[45px] flex justify-around items-center text-white">
          <div className="">
            <HomeOutlinedIcon fontSize="large" />
          </div>
          <div>
            <SearchOutlinedIcon fontSize="large" />
          </div>
          <div>
            <ShoppingCartOutlinedIcon fontSize="large" />
          </div>
          <div>
            <BookmarkBorderOutlinedIcon fontSize="large" />
          </div>
          <div>
            <FavoriteBorderOutlinedIcon fontSize="large" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default FooterOne;
