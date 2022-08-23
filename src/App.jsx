import { Container } from 'components/ui/Container.styled';
import { Contacts } from './components/Contacts/Contacts';
import { FormName } from './components/Form/Form';
import { Section } from 'components/ui/Section/Section';
import { Filter } from 'components/Filter/Filter';
import { useState } from 'react';

export const App = () => {
  const [filter, setFilter] = useState('');

  return (
    <Container>
      <Section title="PhoneBook">
        <FormName />
      </Section>
      <Section title="Contacts">
        <Filter filter={filter} setFilter={setFilter} />
        <Contacts filter={filter} />
      </Section>
    </Container>
  );
};
