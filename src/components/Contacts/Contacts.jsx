import { useDispatch, useSelector } from 'react-redux';
import { getContacts, deleteContact, getFilter } from 'redux/contacts';
import {
  ContWrapper,
  ContList,
  ContItem,
  BtnDeleteContact,
} from './Contacts.styled';

export const Contacts = () => {
  const dispatch = useDispatch();
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
};
