import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Carousel from "react-material-ui-carousel";
import HeaderBanner from "./HeaderBanner";
import { HeaderBannerData } from "../../data/HeaderBannerData";

const useStyles = makeStyles({
  root: {
    maxWidth: "100%",
    margin: "0 auto",
  },
  slide: {
    height: "100%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  image: {
    width: "100%",
    height: "auto",
  },
});

function CarouselComp() {
  const classes = useStyles();

  return (
    <div className="h-[160px]">
      <div className={classes.root}>
        <Carousel autoPlay={true} indicators={true}>
          {HeaderBannerData.map((item, id) => (
            <div key={id} className={classes.slide}>
              {<HeaderBanner heading={item.heading} details={item.details} />}
            </div>
          ))}
        </Carousel>
      </div>
    </div>
  );
}
export default CarouselComp;
