import React from "react";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import MoviesContainer from "./containers/MoviesContainer";

const Routes = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/">
        <Redirect to="/gallery" />
      </Route>
      <Route path="/gallery" component={MoviesContainer} />
    </Switch>
  </BrowserRouter>
);

export default Routes;
