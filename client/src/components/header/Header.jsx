import React from "react";
import { AppBar, Toolbar, Typography, styled, Box } from "@mui/material";
import Search from "./Search";
import CustomButton from "./CustomButton";
import { Link } from "react-router-dom";

const StyledHeader = styled(AppBar)`
  background: #2874f0;
  height: 55px;
`;

const Cmpnent = styled(Link)`
  line-height: 0.3;
  margin-left: 12%;
  margin-right: 2%;
  text-decoration:none;
  color:inherit
`;
const Subheading = styled(Typography)`
  font-size: 10px;
  font-style: Italic;
`;

const But = styled(Box)`
  margin: 0 4% 0 auto;
`;

const header = () => {
  const logoURL =
    "https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/flipkart-plus_8d85f4.png";
  const subURL =
    "https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/plus_aef861.png";
  return (
    <div>
      <StyledHeader>
        <Toolbar style={{ height: 55 }}>
          <Cmpnent to='/'>
            <img src={logoURL} alt="logo" style={{ width: 75 }} />
            <Subheading>
              Explore&nbsp;
              <Box component="span" style={{ color: "yellow" }}>
                Plus&nbsp;
              </Box>
              <img src={subURL} alt="sub-logo" style={{ width: 10 }} />
            </Subheading>
          </Cmpnent>
          <Search />
          <But>
            <CustomButton />
          </But>
        </Toolbar>
      </StyledHeader>
    </div>
  );
};

export default header;
