import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import BookmarkBorderOutlinedIcon from "@mui/icons-material/BookmarkBorderOutlined";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";

function FooterTwo() {
  return (
    <div className="flex justify-center md:hidden">
      <div className="w-[386px] h-[62px]  bg-white flex items-center justify-center text-black text-[10px] border-[1px] ">
        <div className="w-[324px] h-[45px] flex justify-around items-center pb-[7px]">
          <div className="w-[30px] h-[22px] flex flex-col items-center hover:text-[#EC6300]">
            <HomeOutlinedIcon />
            <p className="text-[10px] ">Home</p>
          </div>
          <div className="w-auto h-[22px] flex flex-col items-center hover:text-[#EC6300]">
            <SearchOutlinedIcon />
            <p>Search</p>
          </div>
          <div className="w-auto h-[22px] flex flex-col items-center hover:text-[#EC6300]">
            <ShoppingCartOutlinedIcon />
            <p>Cart</p>
          </div>
          <div className="w-auto h-[22px] flex flex-col items-center hover:text-[#EC6300]">
            <BookmarkBorderOutlinedIcon />
            <p>Features</p>
          </div>
          <div className="w-auto h-[22px] flex flex-col items-center hover:text-[#EC6300]">
            <FavoriteBorderOutlinedIcon />
            <p>Pages</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FooterTwo;
