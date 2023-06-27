import React from 'react';
import css from './ContactsList.module.css';

export const ContactsList = ({ contacts, onDeleteContact }) => {
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
