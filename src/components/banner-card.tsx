import { useEffect, useState } from "react";
import myImg1 from "../assets/img-1.png";
import myImg2 from "../assets/img-2.png";
import myImg3 from "../assets/img-3.png";

interface BannerProps {
  itr: number;
  banner: any;
  variant?: "rounded" | "default";
  effectActive?: boolean;
  className?: string;
  classNameInner?: string;
  disableBorderRadius?: boolean;
}

function getImage(deviceWidth: number, imgObj: any) {
  return deviceWidth < 480 ? imgObj.mobile : imgObj.desktop;
}

export default function BannerCard({
  itr,
  banner,
  className = "-mx-20 px-0",
  variant = "rounded",
  effectActive = false,
  classNameInner,
  disableBorderRadius = false,
}: BannerProps) {
  const [bannerSrc, setbannerSrc] = useState({ width: 0, height: 0 });

  useEffect(() => {
    if (window.screen.width < 768) {
      setbannerSrc({ width: 320, height: 180 });
    } else {
      setbannerSrc({ width: 1000, height: 350 });
    }
  }, []);

  const arr = [myImg1, myImg2, myImg3];

  return (
    <div
      className={"h-full group flex justify-center relative overflow-hidden"}
    >
      <img
        src={arr[itr]}
        width={bannerSrc.width}
        height={bannerSrc.height}
        alt={banner.title}
        className={"bg-gray-300 object-cover w-full"}
      />

      {effectActive && (
        <div className="absolute top-0 ltr:-left-[100%] h-full w-1/2 z-5 block transform -skew-x-12 bg-gradient-to-r from-transparent to-white opacity-40 group-hover:animate-shine" />
      )}
    </div>
  );
}
