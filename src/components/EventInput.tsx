import React from "react";

type EventInputType = React.HTMLProps<HTMLInputElement> &
  React.HTMLProps<HTMLTextAreaElement>;

const EventInput = ({ label, ...inputProps }: EventInputType) => {
  return (
    <>
      {label && <label htmlFor={inputProps.id}>{label}</label>}
      <input type="text" placeholder="Enter event" {...inputProps} />
    </>
  );
};

export default EventInput;
