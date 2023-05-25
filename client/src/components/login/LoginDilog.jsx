import React from "react";
import { useState, useContext } from "react";

import { DataContext } from "../../context/DataProvider";
import {
  Dialog,
  Box,
  TextField,
  Typography,
  Button,
  styled,
} from "@mui/material";
import { authenticateSignup, authenticateLogin } from "../../service/api";

const Component = styled(Box)`
  width: 70vh;
  padding: 0;
  padding-top: 0;
`;

const Imag = styled(Box)`
  background: #2874f0
    url(https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/login_img_c4a81e.png)
    center 85% no-repeat;
  width: 40%;
  height: 60.2vh;
  padding: 4%;
  & > p,
  & > h5 {
    font-weight: 600;
    color: #ffffff;
  }
`;

const Wrapper = styled(Box)`
  display: flex;
  flex: 1;
  overflow: auto;
  & > button,
  & > p {
    margin-top: 50;
  }
`;
const RightBox = styled(Box)`
  width: 60%;
  padding: 5%;
  Textfield,
  Typography {
    margin-top: 10px;
  }
`;

const LoginButton = styled(Button)`
  text-transform: none;
  background: #fb641b;
  color: #fff;
  height: 48px;
  border-radius: 2px;
  margin: 10px;
  width: 75%;
`;
const Text = styled(Typography)`
  font-size: 15px;
`;

const RqstButton = styled(Button)`
  width: 75%;
  color: #2874f0;
  backgroud: #fff;
  margin: 10px;
  text-transform: none;
  box-shadow: 0 2px 4px 0 rgb(0 0 0/ 20%);
`;

const CreateAc = styled(Typography)`
  font-weight: 600;
  font-sixe: 18px;
  cursor: pointer;
  color: blue;
`;
const Error = styled(Typography)`
font-size:14px;
margin-top:20px;
font-weight:650
color:#000000;
`;

const signupInitialValues = {
  firstname: "",
  lastname: "",
  username: "",
  email: "",
  password: "",
  phone: "",
};

const accInitial = {
  login: {
    view: "login",
    heading: "login",
    subHeading: "Get access to the order,wishlist and accomodation",
  },
  signup: {
    view: "signup",
    heading: "Looks,like you are now here!",
    subHeading: "Sign up with your mobile no. to get started",
  },
};
const loginInitialValues = {
  email: "",
  password: "",
};
const LoginDilog = ({ open, setOpen }) => {
  const [account, toggleAcc] = useState(accInitial.login);
  const [signup, setSignup] = useState(signupInitialValues);
  const [login, setLogin] = useState(loginInitialValues);
  const [error, setError] = useState(false);
  const { setAccount } = useContext(DataContext);

  const handleClose = () => {
    setOpen(false);
    toggleAcc(accInitial.login);
    setError(false)
  };
  const toggleSignup = () => {
    toggleAcc(accInitial.signup);
  };

  const onInputChange = (e) => {
    setSignup({ ...signup, [e.target.name]: e.target.value });
    console.log(signup);
  };
  const onValueChange = (e) => {
    setLogin({ ...login, [e.target.name]: e.target.value });
    console.log(signup);
  };

  const signupUser = async () => {
    let response = await authenticateSignup(signup);
    console.log(response);
    if (!response) {
      return;
    } else {
      handleClose();
      setAccount(signup.firstname);
    }
  };
  const loginUser = async () => {
    let res = await authenticateLogin(login);
    console.log(res);
    if (res.status == 200) {
      handleClose();
      setAccount(res.data.data.firstname);
    } else {
      setError(true);
    }
  };

  return (
    <Dialog open={open} onClose={handleClose}>
      <Component>
        <Wrapper>
          <Imag>
            <Typography variant="h5">{account.heading}</Typography>
            <Typography style={{ color: "white", marginTop: 25 }}>
              {account.subHeading}
            </Typography>
          </Imag>

          {account.view == "login" ? (
            <RightBox>
              <TextField
                variant="standard"
                label="Enter email or Mobile Number"
                onChange={(e) => onValueChange(e)}
                name="email"
              />
              {error && <Error>Please enter valid email or password</Error>}

              <br />
              <TextField
                name="password"
                onChange={(e) => onValueChange(e)}
                variant="standard"
                label="Enter Password"
              />
              <Text variant="body1">
                By continuing you are agreeing to flipkart's Term & condition
              </Text>
              <LoginButton onClick={loginUser}>Login</LoginButton>
              <Typography style={{ marginLeft: 90 }}>OR</Typography>
              <RqstButton>Request OTP</RqstButton>
              <CreateAc onClick={() => toggleSignup()}>
                New to flipkart? Create an account
              </CreateAc>
            </RightBox>
          ) : (
            <RightBox>
              <TextField
                onChange={(e) => onInputChange(e)}
                name="firstname"
                variant="standard"
                label="Enter first name"
              />
              <br />
              <TextField
                onChange={(e) => onInputChange(e)}
                name="lastname"
                variant="standard"
                label="Enter last name"
              />
              <br />
              <TextField
                onChange={(e) => onInputChange(e)}
                name="username"
                variant="standard"
                label="Enter Username"
              />
              <br />
              <TextField
                onChange={(e) => onInputChange(e)}
                name="email"
                variant="standard"
                label="Enter email or Mobile Number"
              />
              <br />
              <TextField
                onChange={(e) => onInputChange(e)}
                name="password"
                variant="standard"
                label="Enter Password"
              />
              <br />
              <TextField
                onChange={(e) => onInputChange(e)}
                name="phone"
                variant="standard"
                label="Enter Phone"
              />
              <br />

              <LoginButton onClick={() => signupUser()}>Continue</LoginButton>
            </RightBox>
          )}
        </Wrapper>
      </Component>
    </Dialog>
  );
};

export default LoginDilog;
