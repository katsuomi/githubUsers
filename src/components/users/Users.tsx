import React, { FC } from "react";
import styled from "styled-components";
import SearchContainer from "../../containers/users/SearchContainer";
import pages from "../../pages";
import HtmlTitle from "../commons/HtmlTitle";

const UsersWrapper = styled.div`
  text-align: center;
`;
const title = pages.users.index.title;

const Users: FC = () => (
  <>
    <HtmlTitle title={title} />
    <UsersWrapper>
      <SearchContainer />
    </UsersWrapper>
  </>
);

export default Users;
