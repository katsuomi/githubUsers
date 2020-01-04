import React, { FC } from "react";
import { connect } from "react-redux";
import * as Model from "../../services/github/models";
import List from "../../components/users/List";

interface StateProps {
  isLoading?: boolean;
  users?: Model.User[];
}

const mapStateToProps = (state: {
  github: { isLoading: false; users: [] };
}): StateProps => ({
  isLoading: state.github.isLoading,
  users: state.github.users
});

const ListContainer: FC<StateProps> = ({ isLoading, users }) => {
  return <List users={users} isLoading={isLoading} />;
};

export default connect(mapStateToProps)(ListContainer);
