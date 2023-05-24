import React from "react";
import { InputBase, Box } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
const Search = () => {
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
    </div>
  );
};

export default Search;
