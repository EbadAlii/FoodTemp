import React from "react";

function DealsBarTwo(props: any) {
  return (
    <div
      className={`bg-[#FFFFFF] mr-[4px] w-auto h-auto whitespace-nowrap 
        md:h-[48px]  md:mr-[6px] border-[1px] hover:bg-[#EC6300] hover:text-white hover:cursor-pointer
      `}
    >
      <p className="px-[22px] pt-[13px] pb-[11px]">{props.name}</p>
    </div>
  );
}

export default DealsBarTwo;
