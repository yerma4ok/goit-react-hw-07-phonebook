import ContactForm from './ContactForm/ContactForm';
import ContactList from './ContactList';
import Filter from './Filter';
import { ContactTitle, Container, MainTitle } from './App.styled';

export default function App() {
  return (
    <>
      <Container>
        <MainTitle>Phonebook</MainTitle>
        <ContactForm />
        <ContactTitle>Contacts</ContactTitle>
        <Filter />
        <ContactList />
      </Container>
    </>
  );
}
