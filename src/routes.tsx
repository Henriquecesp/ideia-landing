import React from "react";
import { Route, BrowserRouter } from "react-router-dom";

import HomeTourist from "./pages/HomeTourist";
import HomeMerchant from "./pages/HomeMerchant";
import DownloadApp from "./pages/DownloadApp";

const Routes = () => {
  return (
    <BrowserRouter>
      <Route component={HomeTourist} path="/" exact />
      <Route component={HomeMerchant} path="/merchant" exact />
      <Route component={DownloadApp} path="/app" exact />
    </BrowserRouter>
  );
};

export default Routes;
