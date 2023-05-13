import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchMovies = createAsyncThunk("Movies/fetchMovies", async () => {
  try {
    const api = "https://swapi.dev/api/films/?format=json";
    const response = await axios.get(api);
    return response.data.results;
  } catch (error) {
    console.error("Error fetching Movies:", error);
    throw error;
  }
});

export const fetchMovieDetails = createAsyncThunk(
  "Movies/fetchMovieDetails",
  async (searchTerm: string) => {
    try {
      const OMDB_API_KEY = "b9a5e69d";
      const OMDB_API_URL = `https://www.omdbapi.com/?apikey=${OMDB_API_KEY}`;

      const response = await axios.get(`${OMDB_API_URL}&t=${searchTerm}`);
      return response.data;
    } catch (error) {
      console.error("Error fetching Movies Detail:", error);
      throw error;
    }
  }
);
