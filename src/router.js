import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import Login from "./Views/Login";
import Register from "./Views/Register";
import Home from "./Views/Home";
import Account from "./Views/Account";
import Viewer from "./Views/Viewer";
import Edit from "./Views/Edit";
import Campaign from "./Views/Campaign";
import Pedigree from "./Views/Pedigree";

export default function Router() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Login} />
        <Route path="/Register" exact component={Register} />
        <Route path="/Viewer/:idHorse" exact component={Viewer} />
        <Route path="/Home" exact component={Home} />
        <Route path="/Account" exact component={Account} />
        <Route path="/Edit/:idHorse" exact component={Edit} />
        <Route path="/Campaign/:idHorse" exact component={Campaign} />
        <Route path="/Pedigree/:idHorse" exact component={Pedigree} />
      </Switch>
    </BrowserRouter>
  );
}
