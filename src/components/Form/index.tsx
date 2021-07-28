import React from "react";
import styled from "styled-components";
import { eventType } from "../../App";
import AddEventButton from "./../AddEventButton";
import EventInput from "./../EventInput";
import EventTextarea from "./../EventTextarea";

const FormWrapper = styled.form`
  display: flex;
  justify-content: space-around;
  text-align: center;
  width: 50vw;
  margin: 0 auto;
`;

type FormType = {
  onInputChange: React.FormEventHandler<HTMLInputElement> &
    React.FormEventHandler<HTMLTextAreaElement>;
  onSubmit: (event: React.FormEvent<HTMLFormElement>) => void;
  event: eventType;
};

const Form = ({ event, onInputChange, onSubmit }: FormType) => {
  return (
    <FormWrapper onSubmit={onSubmit}>
      <EventInput
        onChange={onInputChange}
        id="name"
        label="Event: "
        value={event.name}
      />
      <EventTextarea
        onChange={onInputChange}
        id="description"
        label="Description: "
        value={event.description}
      />
      <AddEventButton />
    </FormWrapper>
  );
};

export default Form;
