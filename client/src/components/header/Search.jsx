import React,{useState,useEffect} from "react";
import { InputBase, Box, ListItem,List,styled } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import { useSelector,useDispatch } from "react-redux";
import { getProducts } from "../../redux/actions";
import { Link } from "react-router-dom";
const ListWrapper=styled(List)`
position:absolute;
background:#ffffff;
color:#000;
margin-top:35px;
`
const Search = () => {
  const [text,setText]=useState('')
  const {products}=useSelector(state=>state.getProducts)
  const dispatch=useDispatch()
  const getText=(text)=>{
setText(text)
  }
  useEffect(()=>{
dispatch(getProducts())
  },[dispatch])
  return (
    <div style={{ display: "flex" }}>
      <InputBase
        style={{
          paddingLeft: 4,
          backgroundColor: "white",
          width: 300,
          height: 30,
        }}
        
        placeholder="Search for brands and more...      "
        onChange={(e)=>getText(e.target.value)}
      />
      <Box>
        <SearchIcon
          style={{
            paddingRight: 4,
            color: "black",
            backgroundColor: "white",
            height: 30,
          }}
        />
       
      </Box>
      {
        text &&
        <ListWrapper>
          {products.filter(product=>product.title.longTitle.toLowerCase().includes(text.toLowerCase())).map(product=>(
            <ListItem>
              <Link to={`/product/${product.id}`}
                onClick={()=>setText('')}
                style={{textDecoration:'none',color:'inherit'}}
>
              {product.title.longTitle}
              </Link>
            </ListItem>
          ))}
        </ListWrapper>
      }
    </div>
  );
};

export default Search;
