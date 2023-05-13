import { Grid, Box, Typography } from "@mui/material";
import React from "react";
import RatingChips from "../../../components/RatingChips";
import { calculateAverageRating } from "../helper";
import { MovieDetailsProps } from "../type";
import RatingStar from "../../../components/RatingStar";
import NoDataBox from "../../../components/NoDataBox";
import noMovie from "../../../assets/image/no_movie.jpg";

const MovieDetails = (props: MovieDetailsProps) => (
  <Grid item xs={12} sm={6} md={5} className="movie_details_container">
    {!props.details.Title && (
      <Grid container spacing={1} justifyContent="center">
        <NoDataBox image={noMovie} text="Please select the movie from list " />
      </Grid>
    )}
    {props.details.Title && (
      <Grid container spacing={1}>
        <Grid item xs={12}>
          <Typography variant="h5" gutterBottom>
            {props.details.Title}
          </Typography>
        </Grid>
        <Grid item xs={4} sm={4} md={4}>
          <Box mb={2}>
            <img
              src={props.details.Poster}
              alt="movie Image"
              width="100%"
              style={{ maxWidth: "300px" }}
            />
          </Box>
          <Typography variant="subtitle2" gutterBottom>
            Directed by: {props.details.Director}
          </Typography>
        </Grid>
        <Grid item xs={8} sm={8} md={8}>
          <Typography variant="body1" gutterBottom>
            {props.details.Description}
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <RatingStar
            subTitle="Average Rating:"
            averageRating={calculateAverageRating(props.details?.Ratings)}
          />
        </Grid>
        <Grid item xs={12}>
          <RatingChips ratings={props.details.Ratings} />
        </Grid>
      </Grid>
    )}
  </Grid>
);

export default MovieDetails;
