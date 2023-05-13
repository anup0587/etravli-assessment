import { Box, Button, Menu, MenuItem } from "@mui/material";
import React, { useState } from "react";
import { SortByOrderProps } from "./type";

const SortByOrder = ({
  optionList,
  onClickItem,
  selectedValue,
}: SortByOrderProps) => {
  
  const [anchorEl, setAnchorEl] = useState(null);

  const selectedIndex =
    optionList && optionList.findIndex((item) => item.value === selectedValue);

  const handleClick = (event: { currentTarget: any }) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleClickItem = (value: string) => {
    onClickItem(value);
    setAnchorEl(null);
  };
  return (
    <Box>
      <Button
        aria-controls="simple-menu"
        aria-haspopup="true"
        variant="outlined"
        onClick={handleClick}
      >
        Sort by
      </Button>
      <Menu
        id="simple-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        {optionList &&
          optionList.map((option: any, index: number) => (
            <MenuItem
              key={option.value}
              selected={index === selectedIndex}
              onClick={() => handleClickItem(option.value)}
            >
              {option.label}
            </MenuItem>
          ))}
      </Menu>
    </Box>
  );
};

export default SortByOrder;
