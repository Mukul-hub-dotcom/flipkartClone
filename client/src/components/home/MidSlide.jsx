import React from "react";
import { Slide } from "./Slide";
import { Box, styled } from "@mui/material";
function MidSlide({ products, title, timer }) {
  const adURL =
    "https://rukminim1.flixcart.com/flap/464/708/image/633789f7def60050.jpg?q=70";

  const Component = styled(Box)`
    display: flex;
    alignitems: "center";
  `;
  const LeftComponent = styled(Box)(({ theme }) => ({
    width: "83%",
    [theme.breakpoints.down("md")]: {
      width: "100%",
    },
  }));

  const RightComponent = styled(Box)(({ theme }) => ({
    background: "#ffffff",
    padding: "5px",
    marginTop: "10px",
    marginLeft: "10px",
    textAlign: "center",
    [theme.breakpoints.down("md")]: { display: "none" },
  }));
  return (
    <Component>
      <LeftComponent>
        <Slide products={products} title={title} timer={timer} />
      </LeftComponent>
      <RightComponent>
        <img src={adURL} alt="" style={{ width: 217 }} />
      </RightComponent>
    </Component>
  );
}

export default MidSlide;
