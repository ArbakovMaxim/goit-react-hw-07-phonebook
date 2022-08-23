import {
  useGetContactsQuery,
  useDeleteContactsMutation,
} from 'redux/phoneBookApi';
/* import { useSelector } from 'react-redux';
import { getFilter } from 'redux/contacts'; */

import {
  ContWrapper,
  ContList,
  ContItem,
  BtnDeleteContact,
} from './Contacts.styled';

export const Contacts = () => {
  const { data, error, isLoading } = useGetContactsQuery();
  const [deleteContacts] = useDeleteContactsMutation();

  console.log(data);
  console.log(error);
  console.log(isLoading);
  /*   const filter = useSelector(getFilter);
  console.log(data);
  console.log(filter);

  const filterList = () => {
    if (filter) {
      const normalValue = filter.toLowerCase().trim();
      return data.name.filter(contact =>
        contact.name.toLowerCase().includes(normalValue)
      );
    } else {
      return '';
    }
  };

  const dataList = filterList(); */

  return (
    <ContWrapper>
      <ContList>
        {data ? (
          data.map(contacts => {
            return (
              <ContItem key={contacts.id}>
                {contacts.name}: {contacts.number}
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
          })
        ) : (
          <p>бу</p>
        )}
      </ContList>
    </ContWrapper>
  );
};

/* import { useDispatch, useSelector } from 'react-redux';
import { getContacts, deleteContact, getFilter } from 'redux/contacts';
import { useGetContactsQuery } from 'redux/phoneBookApi';
import {
  ContWrapper,
  ContList,
  ContItem,
  BtnDeleteContact,
} from './Contacts.styled';

export const Contacts = () => {
  const dispatch = useDispatch();
  const { data, error, isLoading } = useGetContactsQuery('contacts');
  const filter = useSelector(getFilter);
  const contacts = useSelector(getContacts);

  const filterList = () => {
    const normalValue = filter.toLowerCase().trim();
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalValue)
    );
  };

  const contactsList = filterList();

  return (
    <ContWrapper>
      <ContList>
        {contactsList.map(contacts => {
          return (
            <ContItem key={contacts.id}>
              {contacts.name}: {contacts.number}
              <BtnDeleteContact
                type="button"
                onClick={() => dispatch(deleteContact(contacts.id))}
              >
                Delete
              </BtnDeleteContact>
            </ContItem>
          );
        })}
      </ContList>
    </ContWrapper>
  );
}; */
