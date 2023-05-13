import {
  FormControl,
  InputLabel,
  OutlinedInput,
  InputAdornment,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import React from "react";
import { SearchFilterProps } from "./type";
import "./style.scss";

const SearchFilter = ({ inputValue, onChange }: SearchFilterProps) => (
  <FormControl fullWidth>
    <OutlinedInput
      id="outlined-adornment-Search"
      startAdornment={
        <InputAdornment position="start">
          <SearchIcon />
        </InputAdornment>
      }
      placeholder="Type to Filter"
      onChange={onChange}
      value={inputValue}
      className="search_filter_input"
    />
  </FormControl>
);

export default SearchFilter;
