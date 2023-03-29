import React from "react";
import Deals from "./Deals";
import DealsBarTwo from "./DealsBarTwo";

function DealsBar() {
  const arr = [
    "All",
    "Friday deals",
    "new deals",
    "amazing deals",
    "awesome deals",
  ];
  return (
    <div>
      <div
        className="mt-[25px] ml-[15px] flex h-[63px] overflow-y-hidden overflow-x-scroll items-center scrollbar-hide text-[14px] font-[500] text-[#30334F]
      md:h-[70px]
    "
      >
        {arr.map((name, i) => (
          <Deals name={name} key={i} index={i} bg />
        ))}
      </div>
      <div
        className="mt-[25px] ml-[15px] flex h-[63px] overflow-y-hidden overflow-x-scroll items-center scrollbar-hide text-[14px] font-[500] text-[#30334F]
      md:h-[70px]"
      >
        {arr.map((name, i) => (
          <DealsBarTwo name={name} key={i} index={i} bg />
        ))}
      </div>
    </div>
  );
}

export default DealsBar;
