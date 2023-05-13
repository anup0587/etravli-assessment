import { Grid } from "@mui/material";
import React from "react";
import SearchFilter from "../../../components/SearchFilter";
import { MovieSearchWrapperPropd } from "../type";
import SortByOrder from "../../../components/SortByOrder";
import { optionList } from "../constant";
import "./style.scss";

const MovieSearchWrapper = ({
  inputValue,
  onChange,
  onClickItem,
  selectedValue,
}: MovieSearchWrapperPropd) => (
  <Grid item xs={12} container spacing={1} className="movie_search_wrapper">
    <Grid item xs={4} sm={1}>
      <SortByOrder
        optionList={optionList}
        onClickItem={onClickItem}
        selectedValue={selectedValue}
      />
    </Grid>
    <Grid item xs={8} sm={11}>
      <SearchFilter inputValue={inputValue} onChange={onChange} />
    </Grid>
  </Grid>
);
export default MovieSearchWrapper;
