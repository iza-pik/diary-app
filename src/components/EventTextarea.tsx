import React from "react";

type EventTextareaType = React.HTMLProps<HTMLTextAreaElement>;

const EventTextarea = ({ label, ...textareaProps }: EventTextareaType) => {
  return (
    <>
      {label && <label htmlFor={textareaProps.id}>{label}</label>}
      <textarea placeholder="Enter description" {...textareaProps} />
    </>
  );
};

export default EventTextarea;
