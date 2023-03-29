import BannerCard from "./banner-card";
import Carousel from "./carousel";
import { SwiperSlide } from "swiper/react";

interface BannerProps {
  className?: string;
}

const breakpoints = {
  "0": {
    slidesPerView: 2,
  },
};

const BannerSliderBlock: React.FC<BannerProps> = ({
  className = "mb-1 md:mb-14 xl:mb-4",
}) => {
  const promotionBanner = [
    {
      id: 1,
      title: "Men's Collection",
      slug: "men's-collection",
      image: {
        mobile: {
          url: "../assets/img.png",
          width: 450,
          height: 150,
        },
        desktop: {
          url: "../assets/img.png",
          width: 580,
          height: 360,
        },
      },
    },
    {
      id: 2,
      title: "Men's Collection",
      slug: "men's-collection",
      image: {
        mobile: {
          url: "../assets/img.png",
          width: 450,
          height: 150,
        },
        desktop: {
          url: "/../assets/img.png",
          width: 580,
          height: 360,
        },
      },
    },
    {
      id: 3,
      title: "Men's Collection",
      slug: "men's-collection",
      image: {
        mobile: {
          url: "../assets/img.png",
          width: 450,
          height: 150,
        },
        desktop: {
          url: "../assets/img.png",
          width: 580,
          height: 360,
        },
      },
    },
    {
      id: 4,
      title: "Men's Collection",
      slug: "men's-collection",
      image: {
        mobile: {
          url: "../assets/img.png",
          width: 450,
          height: 150,
        },
        desktop: {
          url: "../assets/img.png",
          width: 580,
          height: 360,
        },
      },
    },
    {
      id: 5,
      title: "Men's Collection",
      slug: "men's-collection",
      image: {
        mobile: {
          url: "../assets/img.png",
          width: 450,
          height: 150,
        },
        desktop: {
          url: "../assets/img.png",
          width: 580,
          height: 360,
        },
      },
    },
  ];

  return (
    <div className={`${className} mx-auto max-w-[1920px] overflow-hidden`}>
      <div className="-mx-32 sm:-mx-44 lg:-mx-60 xl:-mx-72 2xl:-mx-80">
        <Carousel
          breakpoints={breakpoints}
          centeredSlides={true}
          loop={true}
          autoplay={{
            delay: 4000,
          }}
          pagination={{
            clickable: true,
          }}
          paginationVariant="circle"
          buttonGroupClassName="hidden"
          paginationPosition="center"
        >
          {promotionBanner.map((banner: any, itr: number) => (
            <SwiperSlide
              key={`banner--key${banner.id}`}
              className="px-1.5 md:px-2.5 xl:px-3.5"
            >
              <BannerCard banner={banner} effectActive={false} itr={itr} />
            </SwiperSlide>
          ))}
        </Carousel>
      </div>
    </div>
  );
};

export default BannerSliderBlock;
