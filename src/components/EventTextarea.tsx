import React from "react";

type EventTextareaType = React.HTMLProps<HTMLTextAreaElement>;

const EventTextarea = ({ onChange, value, id }: EventTextareaType) => {
  return (
    <textarea
      id={id}
      onChange={onChange}
      placeholder="Enter description"
      value={value}
    />
  );
};

export default EventTextarea;
