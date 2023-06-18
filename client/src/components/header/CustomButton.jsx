import React from "react";
import { useState, useContext } from "react";
import LoginDilog from "../login/LoginDilog.jsx";
import { DataContext } from "../../context/DataProvider.jsx";
import Profile from "./Profile.jsx";
import { Link } from "react-router-dom";
import { Box, Button, Typography, styled, Badge } from "@mui/material";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { useSelector } from "react-redux";
const Wrapper = styled(Box)(({ theme }) => ({
  display: "flex",
  "&> *": {
    marginRight: "40px !important",
    fontSize: 16,
    alignItems: "center",
  },
  [theme.breakpoints.down("md")]: {
    display: "block",
  },
}));
const Cont = styled(Link)(({ theme }) => ({
  display: "flex",
  textDecoration: "none",
  color: "inherit",
  [theme.breakpoints.down("md")]: {
    display: "block",
  },
}));

const Log = styled(Button)`
  background-color: white;
  color: blue;

  height: 25px;
`;

const CustomButton = () => {
  const [open, setOpen] = useState(false);
  const { account, setAccount } = useContext(DataContext);
  const { cartItems } = useSelector((state) => state.cart);
  const openDialog = () => {
    setOpen(true);
  };
  return (
    <Wrapper>
      {account ? (
        <Profile account={account} setAccount={setAccount}></Profile>
      ) : (
        <Log variant="contained" onClick={() => openDialog()}>
          Login
        </Log>
      )}
      <Typography style={{ width: "140px" }}>Become a seller</Typography>
      <Typography>More</Typography>
      <Cont to="/cart">
        <Badge badgeContent={cartItems?.length} color="secondary">
          <ShoppingCartIcon />
        </Badge>

        <Typography style={{ marginLeft: 10 }}>Cart</Typography>
      </Cont>
      <LoginDilog open={open} setOpen={setOpen} />
    </Wrapper>
  );
};

export default CustomButton;
