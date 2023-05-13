import { Chip } from "@mui/material";
import React from "react";
import { convertToPercentage } from "../../containers/MoviesContainer/helper";
import "./style.scss";
import { RatingChipsProps } from "./types";

const RatingChips = ({ ratings }: RatingChipsProps) => (
  <>
    {ratings &&
      ratings.map((rating: any) => (
        <Chip
          key={rating.Source}
          label={`${rating.Source} -  ${convertToPercentage(rating.Value)}`}
          color="primary"
          variant="outlined"
          className="movie_rating_chip"
          data-testid="chip"
        />
      ))}
  </>
);

export default RatingChips;
