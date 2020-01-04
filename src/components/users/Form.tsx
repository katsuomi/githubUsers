import React, { FC, FormEvent } from "react";
import styled from "styled-components";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";

export interface FormProps {
  handleChange?: (event: FormEvent, value: string) => void;
  handleSubmit?: () => void;
  userName?: string;
}

const FormWrapper = styled.form`
  text-align: center;
`;

const Form: FC<FormProps> = ({
  handleChange = () => {},
  handleSubmit = () => {},
  userName
}) => (
  <>
    <FormWrapper>
      <TextField
        label="user name"
        onChange={event => handleChange(event, event.target.value)}
      />
      <br />
      <br />
      <Button
        variant="contained"
        color="secondary"
        onClick={handleSubmit}
        disabled={userName ? false : true}
      >
        送信
      </Button>
    </FormWrapper>
  </>
);

export default Form;
