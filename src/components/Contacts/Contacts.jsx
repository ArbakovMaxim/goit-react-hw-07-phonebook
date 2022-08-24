import { useSelector } from 'react-redux';
import { toast } from 'react-toastify';
import { getFilter } from 'redux/filterContacts';
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

export const Contacts = () => {
  const { data, error } = useGetContactsQuery();
  const [deleteContacts, result] = useDeleteContactsMutation();
  const filter = useSelector(getFilter);

  const normalValue = filter.toLowerCase().trim();
  const contactsList = data?.filter(contact =>
    contact.name.toLowerCase().includes(normalValue)
  );

  const onDeleteContact = (id, name) => {
    deleteContacts(id);
    toast.success(`Contact ${name} has been deleted`);
  };

  return (
    <ContWrapper>
      {result.isError &&
        toast(`${result.error.status} ${result.error.data} 
        The contact has already been deleted`)}
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
                    onDeleteContact(contacts.id, contacts.name);
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
