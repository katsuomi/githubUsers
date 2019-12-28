import React, { FC, FormEvent } from "react";
import styled from "styled-components";
import TextField from "@material-ui/core/TextField";
import { GetUsersParams } from "../../actions/github";

export type FormValues = GetUsersParams;

export interface FormProps {
  handleChange?: (targetName: string, newValue: string) => void;
  handleSubmit?: (event: FormEvent<HTMLFormElement>) => void;
  values?: FormValues;
  isLoading?: boolean;
}

const FormWrapper = styled.form`
  text-align: center;
`;

const Form: FC = () => (
  <>
    <FormWrapper>
      <TextField label="user name" />
    </FormWrapper>
  </>
);

export default Form;
