import { toast } from 'react-toastify';
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
  const [deleteContacts, result] = useDeleteContactsMutation();
  console.log(result);

  const filterList = () => {
    const normalValue = filter.toLowerCase().trim();
    return data?.filter(contact =>
      contact.name.toLowerCase().includes(normalValue)
    );
  };

  const contactsList = filterList();

  return (
    <ContWrapper>
      {error && toast(`${error.error} reload the page`)}
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
                    toast(`${contacts.name} removed from contacts`);
                  }}
                >
                  Delete
                </BtnDeleteContact>
              </ContItem>
            );
          })}
      </ContList>
    </ContWrapper>
  );
};
