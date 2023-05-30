import React from "react";
import Carousel from "react-multi-carousel";
import { styled } from "@mui/material";
import { bannerData } from "../../constant/data";
import "react-multi-carousel/lib/styles.css";

const Image = styled("img")(({ theme }) => ({
  width: "100%",
  height: 280,
  [theme.breakpoints.down("md")]: {
    objectFit: "cover",
    height: 180,
  },
}));

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 1,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};

const Banner = () => {
  return (
    <Carousel
      responsive={responsive}
      containerClass="carousel-container"
      autoPlay={true}
      autoPlaySpeed={3000}
      infinite={true}
      swipeable={false}
      draggable={false}
      dotListClass="custom-dot-list-style"
      itemClass="carousel-item-padding-40-px"
    >
      {bannerData.map((data, index) => (
        <Image key={index} src={data.url} alt="banner" />
      ))}
    </Carousel>
  );
};

export default Banner;
