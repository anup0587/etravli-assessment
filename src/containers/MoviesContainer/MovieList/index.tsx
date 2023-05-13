import {
  Box,
  Grid,
  Rating,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import React  from "react";
import { tableHeading } from "../constant";
import { MovieState } from "../../../store/movies/type";
import "./style.scss";
import clsx from "clsx";
import { MovieListProps } from "../type";

const MovieList = ({ list, onHandleClick, title }: MovieListProps) => (
  <Grid item xs={12} sm={6} md={7} className="movie_list_container">
    <Box className="movie_list_scroll_container">
      <TableContainer>
        <Table className="movie_list_table" stickyHeader> 
          <TableHead>
            <TableRow>
              {tableHeading.map((heading) => (
                <TableCell key={heading}>{heading}</TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {list &&
              list.map((movie: MovieState, index: number) => (
                <TableRow
                  hover
                  key={movie.episode_id}
                  onClick={() => onHandleClick(movie.title)}
                  className={clsx("movie_list_table_row", {
                    activeClass: movie.title === title,
                  })}
                >
                  <TableCell>{movie.episode_id}</TableCell>
                  <TableCell>{movie.title}</TableCell>
                  <TableCell>
                    <Rating
                      name="rating"
                      defaultValue={index + 2}
                      max={10}
                      disabled
                    />
                  </TableCell>
                  <TableCell>{movie.release_date}</TableCell>
                </TableRow>
              ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  </Grid>
);

export default MovieList;
