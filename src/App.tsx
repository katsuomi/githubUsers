import React, { FC } from "react";
import { Helmet } from "react-helmet";
import { Redirect, Route, Switch } from "react-router";
import styled from "styled-components";
import Home from "./containers/Home";

const title = "Search GitHub User App";

const HeaderWrapper = styled.div``;

const Header = styled.h1`
  text-align: center;
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
