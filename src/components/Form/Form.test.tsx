import React from "react";
import { fireEvent, render, screen } from "@testing-library/react";
import Form from ".";

test("Form should return an object with name and description typed", () => {
  let mockEvent = { name: "", description: "" },
    finalResult = mockEvent;
  const mockOnInputChange: React.FormEventHandler<HTMLInputElement> &
    React.FormEventHandler<HTMLTextAreaElement> = (inputEvent: any) => {
    mockEvent = {
      ...mockEvent,
      [inputEvent.target.id]: inputEvent.target.value,
    };
  };
  const mockHandleSubmit = (formEvent: React.FormEvent<HTMLFormElement>) => {
    finalResult = mockEvent;
    mockEvent = { name: "", description: "" };
  };

  render(
    <Form
      event={mockEvent}
      onInputChange={mockOnInputChange}
      onSubmit={mockHandleSubmit}
    />
  );

  fireEvent.click(screen.getByText(/add event/i));

  expect(finalResult.name).toBe("");
  expect(finalResult.description).toBe("");

  const nameInput = screen.getByLabelText(/event:/i);
  const descriptionInput = screen.getByLabelText(/description:/i);

  fireEvent.change(nameInput, {
    target: { value: "pippi" },
  });
  fireEvent.change(descriptionInput, {
    target: { value: "pappa" },
  });
  fireEvent.click(screen.getByText(/add event/i));

  expect(finalResult.name).toBe("pippi");
  expect(finalResult.description).toBe("pappa");

  // testing that the input fields are reset
  expect(nameInput.value).toBe("");
  expect(descriptionInput.value).toBe("");
});
