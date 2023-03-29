import React from "react";

function Deals(props: any) {
  return (
    <div
      className={`bg-[#FFFFFF] rounded-[20px] mr-[4px] w-auto h-auto whitespace-nowrap 
        md:h-[48px] md:rounded-[9999px] md:mr-[6px] border-[1px]  hover:bg-[#EC6300] hover:text-white hover:cursor-pointer
      `}
    >
      <p className="px-[22px] pt-[13px] pb-[11px]">{props.name}</p>
    </div>
  );
}

export default Deals;
