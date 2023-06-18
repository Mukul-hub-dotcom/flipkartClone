import React from "react";
import { navData } from "../../constant/data";
import { Box, styled, Typography } from "@mui/material";

const Compon = styled(Box)(({ theme }) => ({
  display: "flex",
  justifyContent: "space-between",
  margin: "55px 130px 0 130px",
  overflow: "hidden",
  [theme.breakpoints.down("lg")]: {
    margin: 0,
  },
}));

const Tex = styled(Typography)`
  font-size: 14px;
  font-weight: 600;
`;

const Navbar = () => {
  return (
    <Box style={{ background: "#fff" }}>
      <Compon>
        {navData.map((data, index) => (
          <Box key={index}>
            <img src={data.url} alt="nav" style={{ width: 64 }} />
            <Tex>{data.text}</Tex>
          </Box>
        ))}
      </Compon>
    </Box>
  );
};

export default Navbar;
