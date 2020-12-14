import React from 'react';

import {
  BrowserRouter,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";

import {
  DashboardPage,
  GroupPage,
  LoginPage,
} from './pages';

export default function Routes() {
  return (
    <BrowserRouter>
      <Switch>

        {/* Dashboard */}
        <Route exact path="/">
          <DashboardPage />
        </Route>

        {/* Group Page */}
        <Route exact path="/group/:groupId">
          <GroupPage />
        </Route>

        <Route path="*">
          <Redirect to="/" />
        </Route>

      </Switch>
    </BrowserRouter>
  );
}
