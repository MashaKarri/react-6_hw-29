import { useSelector } from "react-redux";

import { Contact } from "../Contact/Contact";

import { Title, List } from "./ContactList.styled";

export const ContactList = () => {
  const contacts = useSelector((state) => state.contacts.contacts);
  const filter = useSelector((state) => state.contacts.filter);

  const filteredContacts = contacts.filter((contact) =>
    contact.name.toLowerCase().includes(filter.toLowerCase()),
  );

  return (
    <>
      <Title>Contacts</Title>

      <List>
        {filteredContacts.map((contact) => (
          <Contact key={contact.id} contact={contact} />
        ))}
      </List>
    </>
  );
};
