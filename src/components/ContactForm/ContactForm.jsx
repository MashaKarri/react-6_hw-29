import { useState } from "react";
import { useDispatch } from "react-redux";

import { addContact } from "../../redux/contactsSlice";

import { Form, Label, Input, Button } from "./ContactForm.styled";

export const ContactForm = () => {
  const [name, setName] = useState("");
  const [number, setNumber] = useState("");

  const dispatch = useDispatch();

  const handleSubmit = (event) => {
    event.preventDefault();

    dispatch(
      addContact({
        id: Date.now(),
        name,
        number,
      }),
    );

    setName("");
    setNumber("");
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Label>
        Name
        <Input
          type="text"
          value={name}
          onChange={(event) => setName(event.target.value)}
        />
      </Label>

      <Label>
        Number
        <Input
          type="tel"
          value={number}
          onChange={(event) => setNumber(event.target.value)}
        />
      </Label>

      <Button type="submit">Add contact</Button>
    </Form>
  );
};
