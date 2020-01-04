import React, { FC, FormEvent, useState } from "react";
import { connect } from "react-redux";
import { bindActionCreators, Dispatch } from "redux";
import { getUsers } from "../../actions/github";
import Form from "../../components/users/Form";

interface DispatchProps {
  getUsersStart: (payload: object) => void;
}

const mapDispatchToProps = (dispatch: Dispatch): DispatchProps =>
  bindActionCreators(
    {
      getUsersStart: payload => getUsers.start(payload)
    },
    dispatch
  );

const SearchContainer: FC<DispatchProps> = ({ getUsersStart }) => {
  const [userName, setUserName] = useState<string>("");
  const handleChange = (event: FormEvent, userName: string) => {
    if (event) {
      event.persist();
    }
    setUserName(userName);
  };

  const handleSubmit = () => {
    const payload = {
      userName: userName
    };
    getUsersStart(payload);
  };

  return (
    <Form
      handleChange={handleChange}
      handleSubmit={handleSubmit}
      userName={userName}
    />
  );
};

export default connect(null, mapDispatchToProps)(SearchContainer);
