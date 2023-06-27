import React from 'react';
import css from './ContactsList.module.css';
import { useSelector, useDispatch } from 'react-redux';
import { deleteContact } from '../../redux/contactsSlice';

export const ContactsList = () => {
  const contacts = useSelector(state => state.contacts.contacts);
  const filter = useSelector(state => state.filter);

  const dispatch = useDispatch();

  const visibleContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(filter)
  );

  return (
    <ul className={css.contactList}>
      {visibleContacts.map(contact => (
        <li className={css.contactItem} key={contact.id}>
          <span className={css.contactName}>{contact.name}:</span>
          <span className={css.contactNumber}> {contact.number}</span>

          <button
            className={css.deleteBtn}
            type="button"
            onClick={() => dispatch(deleteContact({ id: contact.id }))}
          >
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
};
