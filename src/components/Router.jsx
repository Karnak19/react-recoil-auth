import React from "react";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import { Container } from "reactstrap";
import { useRecoilValue } from "recoil";

import Home from "./Home";
import Admin from "./Admin";
import Navigation from "./Navigation";
import { isAuth as isAuthAtom } from "../recoil/atoms";

function AuthRoute({ component: Component, ...rest }) {
  const isAuth = useRecoilValue(isAuthAtom);
  return isAuth ? <Route {...rest} render={(props) => <Component {...props} />} /> : <Redirect to="/" />;
}

function Router() {
  return (
    <BrowserRouter>
      <Navigation />
      <Container className="pt-5">
        <Switch>
          <Route exact path="/" component={Home} />
          <AuthRoute path="/admin" component={Admin} />
        </Switch>
      </Container>
    </BrowserRouter>
  );
}

export default Router;
