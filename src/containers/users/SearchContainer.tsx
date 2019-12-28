import React, { FC, FormEvent, SyntheticEvent, useState } from "react";
import { connect } from "react-redux";
import { bindActionCreators, Dispatch } from "redux";
import { getUsers } from "../../actions/github";
import { GithubState } from "../../reducers/github";
import Form, { FormProps, FormValues } from "../../components/users/Form";

interface StateProps {
  isLoading: boolean;
}

interface DispatchProps {
  getUsersStart: (params: FormValues) => void;
}

type EnhancedSearchProps = FormProps & StateProps & DispatchProps;

const mapStateToProps = (state: GithubState): StateProps => ({
  isLoading: state.isLoading
});

const mapDispatchToProps = (dispatch: Dispatch): DispatchProps =>
  bindActionCreators(
    {
      getUsersStart: params => getUsers.start(params)
    },
    dispatch
  );

const SearchContainer: FC<EnhancedSearchProps> = ({
  isLoading,
  getUsersStart
}) => {
  const [values, setValues] = useState<FormValues>({
    q: ""
  });

  const handleChange = (
    targetName: string,
    newValue: string,
    event?: SyntheticEvent
  ) => {
    if (event) {
      event.persist();
    }

    setValues(v => ({ ...v, [targetName]: newValue }));
    const newValues = { ...values, [targetName]: newValue };

    if (!!values.q.trim() && targetName === "sort") {
      getUsersStart(newValues);
    }
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    if (event) {
      event.preventDefault();
      getUsersStart(values);
    }
  };
  return (
    <Form
      handleChange={handleChange}
      handleSubmit={handleSubmit}
      values={values}
      isLoading={isLoading}
    />
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(SearchContainer);
