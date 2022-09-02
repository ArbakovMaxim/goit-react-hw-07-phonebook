import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Container } from 'components/ui/Container.styled';
import { Contacts } from './components/Contacts/Contacts';
import { ContactsForm } from './components/ContactsForm/ContactsForm';
import { Section } from 'components/ui/Section/Section';
import { Filter } from 'components/Filter/Filter';

export const App = () => {
  return (
    <Container>
      <Section title="PhoneBook">
        <ContactsForm />
      </Section>
      <Section title="Contacts">
        <Filter />
        <Contacts />
      </Section>
      <ToastContainer />
    </Container>
  );
};
