import React, { FC } from "react";
import { Helmet } from "react-helmet";
import {　Redirect, Route, Switch } from "react-router";
import styled from "styled-components";
import Home from "./containers/Home";

const title = "Search GitHub Users App";

const HeaderWrapper = styled.div`
  background-color: #eb3434;
  min-width: 200px;
  margin: 20px 20%;
  padding: 10px 20px;
`;

const Header = styled.h1`
  text-align: center;
  color: white;
`;

const App: FC = () => (
  <>
    <Helmet htmlAttributes={{ lang: "ja" }}>
      <title>{title}</title>
    </Helmet>

    <HeaderWrapper>
      <Header>{title}</Header>
    </HeaderWrapper>
    <Switch>
      <Route path="/" component={Home} exact />
      <Redirect to="/" />
    </Switch>
  </>
);

export default App;
