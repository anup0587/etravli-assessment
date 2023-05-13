import { Container, Grid } from "@mui/material";
import React, { memo, useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "../../store";
import {
  fetchMovieDetails,
  fetchMovies,
  setSearchByTitle,
} from "../../store/movies";
import Loader from "../../components/Loader";
import { getFilteredMovie } from "./helper";
import MovieSearchWrapper from "./MovieSearchWrapper";
import MovieList from "./MovieList";
import MovieDetails from "./MovieDetails";
import "./style.scss";

const MoviesContainer = () => {
  const dispatch = useAppDispatch();

  const { loading, movieDetail, movies, searchTerm } = useAppSelector(
    (state) => state.movieList
  );

  const [title, setTitle] = useState<string>("");
  const [orderBy, setOrderBy] = useState<string>("episode_id");

  const filteredMovies = getFilteredMovie(movies, searchTerm, orderBy);

  useEffect(() => {
    dispatch(fetchMovies());
  }, []);

  const onHandleClick = async (movieTitle: string) => {
    setTitle(movieTitle);
    await dispatch(fetchMovieDetails(movieTitle));
  };

  const onSearchByTitle = (event: React.ChangeEvent<HTMLInputElement>) => {
    const searchTerm = event.target.value;
    dispatch(setSearchByTitle(searchTerm));
  };

  const onClickItem = (value: string) => {
    setOrderBy(value);
  };
  
  return (<>
    {loading && <Loader loading={loading} />}
    {!loading && (<Container maxWidth="xl" className="movie_container">
           <Grid container spacing={1} mt={2}>
          <MovieSearchWrapper
            inputValue={searchTerm}
            onChange={onSearchByTitle}
            onClickItem={onClickItem}
            selectedValue={orderBy}
          />
          <Grid
            item
            xs={12}
            container
            spacing={1}
            className="movie_container_movie_list"
          >
            <MovieList
              list={filteredMovies}
              onHandleClick={onHandleClick}
              title={title}
            />
            <MovieDetails details={movieDetail} />
          </Grid>
        </Grid>
     
    </Container> )}
  </>
  
  );
};

export default memo(MoviesContainer);
