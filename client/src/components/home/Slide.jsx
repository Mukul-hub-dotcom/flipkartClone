import Carousel from "react-multi-carousel";
import React from "react";
import "react-multi-carousel/lib/styles.css";
import { Box, Button, Divider, styled, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import Countdown from "react-countdown";
const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 5,
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
const Component = styled(Box)`
  margin-top: 10px;
  background: #ffffff;
`;
const Deal = styled(Box)`
  padding: 15px 20px;
  display: flex;
  align-items: center;
`;
const DealText = styled(Typography)`
  font-weight: 600;
  font-size: 22px;
  margin-right: 25px;
  line-height: 32px;
`;
const Timer = styled(Box)`
  margin-left: 10px;
  align-items: center;
  display: flex;
  color: #7f7f7f;
`;
const ViewAllButton = styled(Button)`
  margin-left: auto;
  background-color: #2874f0;
  border-radius: 2px;
  font-size: 13px;
  font-weight: 600;
`;
const Image = styled("img")({
  width: "auto",
  height: 150,
});
const Text = styled(Typography)`
  font-size: 14px;
  margin-top: 5px;
`;

export const Slide = ({ products, title, timer }) => {
  const timerURL =
    "https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/timer_a73398.svg";
  const renderer = ({ hours, minutes, seconds }) => {
    return (
      <Box variant="span">
        {hours}:{minutes}:{seconds} Left
      </Box>
    );
  };
  return (
    <Component>
      <Deal>
        <DealText>{title}</DealText>
        {timer && (
          <Timer>
            <img src={timerURL} alt="" style={{ width: "24px" }} />
            <Countdown
              date={Date.now() + 5.04e7}
              renderer={renderer}
            ></Countdown>
          </Timer>
        )}
        <ViewAllButton variant="contained" color="primary">
          View All
        </ViewAllButton>
      </Deal>
      <Divider />
      <Carousel
        responsive={responsive}
        autoPlay={true}
        autoPlaySpeed={3000}
        keyBoardControl={true}
        infinite={true}
        swipeable={false}
        draggable={false}
        dotListClass="custom-dot-list-style"
        itemClass="carousel-item-padding-40-px"
        containerClass="carousal-container"
        centerMode={true}
      >
        {products.map((data, index) => (
          <Link to={`product/${data.id}`}>
            <Box
              key={index}
              textAlign="center"
              style={{ padding: "25px 15px" }}
            >
              <Image key={index} src={data.url} alt="banner" />
              <Text style={{ fontWeight: 600, color: "#212121" }}>
                {data.title.shortTitle}
              </Text>
              <Text style={{ color: "green" }}>{data.discount}</Text>
              <Text
                style={{ fontWeight: 600, color: "#212121", opacity: ".6" }}
              >
                {data.tagline}
              </Text>
            </Box>
          </Link>
        ))}
      </Carousel>
    </Component>
  );
};
