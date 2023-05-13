import { Backdrop, CircularProgress } from "@mui/material";
import React from "react";
import { LoaderProps } from "./type";

const Loader = ({ loading }: LoaderProps) =>{
  if (!loading) {
    return null;
  }

  return(
  <Backdrop sx={{ zIndex: "999" }} open={loading} data-testid="loader" aria-hidden="true">
    <CircularProgress color="inherit" variant="indeterminate" size={80} />
  </Backdrop>
)};

export default Loader;
