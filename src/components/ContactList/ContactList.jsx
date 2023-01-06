import { BsFillPersonLinesFill } from 'react-icons/bs';
import { useDispatch, useSelector } from 'react-redux';

import { deteleContact } from '../../redux/contactsSlice';
import { ContactsList, ContactItem, Button } from './ContactList.styled';

const getVisibleContacts = (contacts, filter) => {
  return contacts.filter(contact =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );
};

export const ContactList = ({ items }) => {
  const contacts = useSelector(state => state.contacts);
  const filter = useSelector(state => state.filter);
  const dispatch = useDispatch();
  const filteredContacts = getVisibleContacts(contacts, filter);

  return (
    <ContactsList>
      {!filteredContacts.length ? (
        <div>Contact list is empty</div>
      ) : (
        contacts.map(({ id, name, number }) => {
          return (
            <ContactItem key={id}>
              <BsFillPersonLinesFill style={{ color: '#f21d6a' }} />
              {name} : {number}
              <Button onClick={() => dispatch(deteleContact(id))}>
                Delete
              </Button>
            </ContactItem>
          );
        })
      )}
    </ContactsList>
  );
};
