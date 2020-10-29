import React, { Suspense, lazy } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import { Loading } from "./components";

const HomeLazy = lazy(() => import("./pages/Home/Home"));
const ProductsLazy = lazy(() => import("./pages/Products/Products"));

function Routes() {
  return (
    <Router>
      <Suspense fallback={<Loading />}>
        <Switch>
          <Route exact path="/" component={HomeLazy} />
          <Route exact path="/products" component={ProductsLazy} />
        </Switch>
      </Suspense>
    </Router>
  );
}

export default Routes;
