import { MovieListState } from "./type";

export const initialMovieState: MovieListState = {
  loading: false,
  movies: [],
  movieDetail: {
    Title: "",
    Poster: "",
    Plot: "",
    Ratings: [],
    Director:"",
    Description:""
  },
  error: null,
  searchTerm:""
};
