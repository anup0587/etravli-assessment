import { Box, Rating, Typography } from "@mui/material";
import React from "react";
import "./style.scss";
import { RatingStarProps } from "./type";

const RatingStar = ({ subTitle, averageRating }: RatingStarProps) => (
  <Box className="movie_Rating_star" data-testid="ratingStart">
    <Typography variant="subtitle2" gutterBottom>
      {subTitle}
    </Typography>
    <Rating name="rating" defaultValue={averageRating} max={10} />
  </Box>
);

export default RatingStar;
