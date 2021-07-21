import React from "react";

type EventInputType = React.HTMLProps<HTMLInputElement> &
  React.HTMLProps<HTMLTextAreaElement>;

const EventInput = ({ onChange, value, id }: EventInputType) => {
  return (
    <input
      id={id}
      type="text"
      onChange={onChange}
      placeholder="Enter event"
      value={value}
    />
  );
};

export default EventInput;
