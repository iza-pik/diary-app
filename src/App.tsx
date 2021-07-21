import React, { useState } from "react";
import Form from "./components/Form";
import styled from "styled-components";

const AppWrapper = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  ul li {
    border: solid black;
    list-style: none;
    margin-bottom: 2vh;
    width: 30vw;
  }
`;

export type eventType = {
  name: string;
  description?: string;
};

const initialEventState = {
  name: "",
  description: "",
};

function App() {
  const [event, setEvent] = useState<eventType>(initialEventState);
  const [eventList, setEventList] = useState<eventType[]>([]);

  const onInputChange: React.FormEventHandler<HTMLInputElement> &
    React.FormEventHandler<HTMLTextAreaElement> = (inputEvent: any) => {
    setEvent({ ...event, [inputEvent.target.id]: inputEvent.target.value });
  };

  const handleSubmit = (formEvent: React.FormEvent<HTMLFormElement>) => {
    formEvent.preventDefault();
    setEventList([...eventList, event]);
    setEvent(initialEventState);
  };

  return (
    <AppWrapper>
      <h2>
        My diary:
        {` ${eventList.length} event${eventList.length === 1 ? "" : "s"}`}
      </h2>
      <Form
        onSubmit={handleSubmit}
        onInputChange={onInputChange}
        event={event}
      />
      <ul>
        {eventList.map((e) => (
          <li key={e.name}>
            {e.name}: {e.description}
          </li>
        ))}
      </ul>
    </AppWrapper>
  );
}

export default App;
