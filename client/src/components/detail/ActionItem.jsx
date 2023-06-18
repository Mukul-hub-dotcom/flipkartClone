import { useState } from "react";
import { Box, styled, Button } from "@mui/material";
import { ShoppingCart as Cart, FlashOn as Flash } from "@mui/icons-material";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addToCart } from "../../redux/cart/cartActions";
const LeftContainer = styled(Box)(({ theme }) => ({
  minWidth: "40%",
  padding: "40px 0 0 80px",
  marginRight: "4%",
  [theme.breakpoints.down("lg")]: {
    padding: "20px 40px",
  },
}));

const Image = styled("img")({
  padding: "15px",
});
const StyledButton = styled(Button)(({ theme }) => ({
  width: "48%",
  height: "50px",
  borderRadius: "2px",
  marginTop: "1%",
  [theme.breakpoints.down("lg")]: {
    width: "46%",
  },
  [theme.breakpoints.down("sm")]: {
    width: "48%",
  },
}));
const ActionItem = ({ product }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [qty, setQty] = useState(1);
  const { id } = product;
  const addItemToCart = () => {
    dispatch(addToCart(id, qty));
    navigate("/cart");
  };
  return (
    <LeftContainer>
      <Box
        style={{
          padding: "15px 20px",
          border: "1px solid #f0f0f0",
          width: "90%",
        }}
      >
        <Image src={product.detailUrl} alt="" />
      </Box>

      <StyledButton
        style={{ marginRight: 10, background: "#ff9f00" }}
        variant="contained"
        onClick={() => addItemToCart()}
      >
        <Cart />
        Add to Cart
      </StyledButton>
      <StyledButton style={{ background: "#fb541b" }} variant="contained">
        <Flash />
        Buy Now
      </StyledButton>
    </LeftContainer>
  );
};

export default ActionItem;
