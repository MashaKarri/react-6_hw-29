import { ContactForm } from "./components/ContactForm/ContactForm";
import { ContactList } from "./components/ContactList/ContactList";
import { SearchBox } from "./components/SearchBox/SearchBox";

import { Container, Title } from "./App.styled";

function App() {
  return (
    <Container>
      <Title>Phonebook</Title>

      <ContactForm />

      <SearchBox />

      <ContactList />
    </Container>
  );
}

export default App;
