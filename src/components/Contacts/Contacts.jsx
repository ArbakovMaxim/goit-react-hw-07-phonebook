import {
  useGetContactsQuery,
  useDeleteContactsMutation,
} from 'redux/phoneBookApi';

import {
  ContWrapper,
  ContList,
  ContItem,
  BtnDeleteContact,
} from './Contacts.styled';

export const Contacts = filter => {
  const { data, error } = useGetContactsQuery();
  const [deleteContacts] = useDeleteContactsMutation();

  /*   const contactsFiltered = data?.filter(contact =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );
  console.log(contactsFiltered); */

  return (
    <ContWrapper>
      <ContList>
        {data &&
          data.map(contacts => {
            return (
              <ContItem key={contacts.id}>
                {contacts.name}: {contacts.phone}
                <BtnDeleteContact
                  type="button"
                  onClick={() => {
                    deleteContacts(contacts.id);
                  }}
                >
                  Delete
                </BtnDeleteContact>
              </ContItem>
            );
          })}
        {error && <p>{error.error}</p>}
      </ContList>
    </ContWrapper>
  );
};
