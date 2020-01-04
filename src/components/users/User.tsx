import React, { FC } from "react";
import styled from "styled-components";
import * as Model from "../../services/github/models";

export interface UserProps {
  user?: Model.User;
}

const CardWrapper = styled.div`
  display: flex;
  float: left;
  > * > * {
    width: 100px;
    height: 100px;
    margin: 0px 9px;
  }
`;

const ButtonLink = styled.a`.attrs({
  target: props => props.target;
  href: props => props.href;
})`;

const User: FC<UserProps> = ({ user }) =>
  user ? (
    <>
      <CardWrapper>
        <ButtonLink href={`https://github.com/${user.login}`} target="_blank">
          <img src={user && user.avatarUrl} />
        </ButtonLink>
      </CardWrapper>
    </>
  ) : null;

export default User;
