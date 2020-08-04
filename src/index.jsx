import React from "react";
import ReactDOM from "react-dom";

import "bootswatch/dist/cosmo/bootstrap.min.css";

import Router from "./components/Router";
import { RecoilRoot } from "recoil";

ReactDOM.render(
  <RecoilRoot>
    <Router />
  </RecoilRoot>,
  document.querySelector("#app")
);
