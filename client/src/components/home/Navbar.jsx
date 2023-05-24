import React from "react";
import { navData } from "../../constant/data";
import { Box, styled, Typography } from "@mui/material";

const Compon = styled(Box)`
  display: flex;
  justify-content: space-between;
  margin: 55px 130px 0 130px;
  text-align: center;
`;
const Tex = styled(Typography)`
  font-size: 14px;
  font-weight: 600;
`;

const Navbar = () => {
  return (
    <Compon>
      {navData.map((data) => (
        <Box>
          <img src={data.url} alt="nav" style={{ width: 64 }} />
          <Tex>{data.text}</Tex>
        </Box>
      ))}
    </Compon>
  );
};

export default Navbar;
