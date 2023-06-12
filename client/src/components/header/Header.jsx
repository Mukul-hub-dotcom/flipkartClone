import React,{useState} from "react";
import { AppBar,Drawer, Toolbar,List,ListItem, Typography, styled,IconButton, Box } from "@mui/material";
import Search from "./Search";
import CustomButton from "./CustomButton";
import {Menu} from '@mui/icons-material'
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

const CustomButtonn = styled(Box)(({theme})=>({
  margin: '0 4% 0 auto',
  [theme.breakpoints.down('md')]:{
    display:'null'
  }
}))
const MenuButton = styled(IconButton)(({theme})=>({
  display: 'none',
  [theme.breakpoints.down('md')]:{
    display:'block'
  }
}))


const Header = () => {
  const logoURL =
    "https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/flipkart-plus_8d85f4.png";
  const subURL =
    "https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/plus_aef861.png";
    
  const [open,setOpen]=useState(false)
    const handleOpen=()=>{
setOpen(true)
    }
    const handleClose=()=>{
      setOpen(false)
    }
    const list=()=>(
      <Box style={{width:200}} onClick={handleClose}>
        <List>
          <ListItem>
            <CustomButton/>
          </ListItem>
        </List>
      </Box>
    )
    return (
    <div>
      <StyledHeader>
        <Toolbar style={{ minheight: 55 }}>
          <MenuButton color="inherit" onClick={handleOpen}>
            <Menu/>
          </MenuButton>
          <Drawer open={open} onClose={handleClose}>{list()}</Drawer>
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
          <CustomButtonn>
            <CustomButton />
          </CustomButtonn>
        </Toolbar>
      </StyledHeader>
    </div>
  );
};

export default Header;
