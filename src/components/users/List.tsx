import React, { FC } from "react";
import styled from "styled-components";
import * as Model from "../../services/github/models";
import Spinner from "../commons/Spinner";
import User from "./User";

export interface ListProps {
  isLoading?: boolean;
  users?: Model.User[];
}

const Wrapper = styled.div`
  margin-top: 50px;
`;

const List: FC<ListProps> = ({ isLoading, users }) => (
  <>
    {isLoading ? (
      <Spinner />
    ) : (
      <>
        <Wrapper>
          {users && users.map(user => <User user={user} key={user.id} />)}
        </Wrapper>
      </>
    )}
  </>
);

export default List;
