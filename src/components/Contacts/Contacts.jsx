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

export const Contacts = ({ filter }) => {
  const { data, error } = useGetContactsQuery();
  const [deleteContacts] = useDeleteContactsMutation();

  const filterList = () => {
    const normalValue = filter.toLowerCase().trim();
    return data?.filter(contact =>
      contact.name.toLowerCase().includes(normalValue)
    );
  };

  const contactsList = filterList();

  return (
    <ContWrapper>
      <ContList>
        {contactsList &&
          contactsList.map(contacts => {
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
