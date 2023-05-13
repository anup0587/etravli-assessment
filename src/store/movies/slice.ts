import { createSlice } from "@reduxjs/toolkit";
import { initialMovieState } from "./initialState";
import { fetchMovieDetails, fetchMovies } from "./thunk";

const moviesSlice = createSlice({
  name: "moviesState",
  initialState: initialMovieState,
  reducers: {
    setSearchByTitle(state, action) {
      return {
        ...state,
        searchTerm: action.payload,
      };
    },
  },
  extraReducers: {
    [fetchMovies.pending.toString()]: (state) => {
      state.loading = true;
    },
    [fetchMovies.fulfilled.toString()]: (state, action) => {
      state.loading = false;
      state.movies =
        action.payload === null ? initialMovieState.movies : action.payload;
    },
    [fetchMovies.rejected.toString()]: (state, action) => {
      state.loading = false;
      state.movies = initialMovieState.movies;
      state.error = action.error.message;
    },
    [fetchMovieDetails.pending.toString()]: (state) => {
      state.loading = true;
    },
    [fetchMovieDetails.fulfilled.toString()]: (state, action) => {
      state.loading = false;
      state.movieDetail = {
        ...action.payload,
        Description: state.movies.find(
          (movie) => action.payload.Title.includes(movie.title)
        )?.opening_crawl,
      };
    },
    [fetchMovieDetails.rejected.toString()]: (state, action) => {
      state.loading = false;
      state.movieDetail = initialMovieState.movieDetail;
      state.error = action.error.message;
    },
  },
});

export const { setSearchByTitle } = moviesSlice.actions;
const moviesReducer = moviesSlice.reducer;
export default moviesReducer;
