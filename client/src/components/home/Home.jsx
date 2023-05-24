import React from "react";
import Navbar from "./Navbar";
import Banner from "./Banner";
import { Box, styled } from "@mui/material";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { getProducts } from "../../redux/actions";

const Cont = styled(Box)`
  padding:10px;
  background-color: #f2f2f2;
`;

const Home = () => {
  // const {products}=useSelector(state=>state.getProducts)
  // console.log(products)

  //   const dispatch=useDispatch()

  //   useEffect(()=>{
  // dispatch(getProducts())
  //   },[dispatch])

  return (
    <>
      <Navbar />
      
      <Cont>
        <Banner />
      </Cont>
    </>
  );
};

export default Home;
