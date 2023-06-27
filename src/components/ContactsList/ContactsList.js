import React from 'react';
import css from './ContactsList.module.css';
import { useSelector } from 'react-redux';
import { getContacts } from '../../redux/selectors';

export const ContactsList = ({  onDeleteContact }) => {
  const contacts = useSelector(getContacts)
  console.log(contacts);

  return (
    <ul className={css.contactList}>
      {contacts.map(contact => (
        <li className={css.contactItem} key={contact.id}>
          <span className={css.contactName}>{contact.name}:</span>
          <span className={css.contactNumber}> {contact.number}</span>

          <button
            className={css.deleteBtn}
            type="button"
            onClick={() => onDeleteContact(contact.id)}
          >
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
};
