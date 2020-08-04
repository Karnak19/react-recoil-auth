import React from "react";
import ReactDOM from "react-dom";
import { RecoilRoot } from "recoil";

import "bootswatch/dist/cosmo/bootstrap.min.css";

import Router from "./components/Router";

ReactDOM.render(
  <RecoilRoot>
    <Router />
  </RecoilRoot>,
  document.querySelector("#app")
);
