import { Box, Typography } from "@mui/material";
import React from "react";
import "./style.scss"
import { NoImageProps } from "./type";

const NoDataBox = ({ image, text }: NoImageProps) => (
  <Box className="no_image_box">
    <img src={image} />
    <Typography variant="h5" gutterBottom>
      {text}
    </Typography>
  </Box>
);
export default NoDataBox;
