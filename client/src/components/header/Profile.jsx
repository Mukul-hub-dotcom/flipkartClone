import React, { useState } from "react";
import { Box, Typography, Menu, MenuItem, styled } from "@mui/material";
import PowerSettingsNewIcon from "@mui/icons-material/PowerSettingsNew";
const Component = styled(Menu)`
  margin-top: 5px;
`;
const Logout = styled(Typography)`
font-size:14px,
margin-left:45px`;

function Profile({ account,setAccount }) {
  const [open, setOpen] = useState(false);
  const handleClick = (e) => {
    setOpen(e.currentTarget);
  };
  const handleClose = () => {
    setOpen(false);
  };
const logout=()=>{
  setAccount('')
}
  return (
    <div>
      <Box onClick={handleClick}>
        <Typography style={{ marginTop: 2, marginRight: "40px",cursor:'pointer' }}>
          {account}
        </Typography>
      </Box>
      <Component
        anchorEl={open}
        open={Boolean(open)}
        onClose={handleClose}
        MenuListProps={{
          "aria-labelledby": "basic-button",
        }}
      >
        <MenuItem onClick={()=>{handleClose();logout()}}>
          <PowerSettingsNewIcon color="primary" fontSize="small" />
          <Logout>Logout</Logout>
        </MenuItem>
      </Component>
    </div>
  );
}

export default Profile;
