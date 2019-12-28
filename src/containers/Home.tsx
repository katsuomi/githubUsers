import React, { FC } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

import pages from "../pages";

const ButtonWrapper = styled.div`
  text-align: center;
`;

const Button = styled.button`
  padding: 10px 20px;
  background-color: #039dfc;
  width: 300px;
  margin-top: 100px;
  text-align: center;
  font-size: 1.5rem;
  font-weight:bold;
  color: white;
  border-radius: 5%;
`;


const Home: FC = () => (
  <>
    <ButtonWrapper>
      <Link to={'/'}>
        <Button>ユーザーを検索する</Button>
      </Link>
    </ButtonWrapper>
  </>
);

export default Home;
