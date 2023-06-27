import React, { useState, useEffect } from 'react';
import shortid from 'shortid';
import css from './App.module.css';

import Form from '../Form/Form';
import { ContactsList } from '../ContactsList/ContactsList';
import { Filter } from '../Filter/Filter';

const KEY_ADDED_CONTACTS = 'addedContacts';
const App = () => {
  const [contacts, setContacts] = useState(() => {
    return JSON.parse(localStorage.getItem(KEY_ADDED_CONTACTS)) ?? [];
  });

  const [filter, setFilter] = useState('');

  useEffect(() => {
    window.localStorage.setItem(KEY_ADDED_CONTACTS, JSON.stringify(contacts));
  }, [contacts]);

  const addContact = (name, number) => {
    const contact = { id: shortid.generate(), name, number };
    if (
      contacts.find(
        contact => contact.name.toLowerCase() === name.toLowerCase()
      )
    ) {
      alert(`${name} is already in contacts.`);
      return;
    }

    setContacts(prevState => [contact, ...prevState]);
  };

  const deleteContact = contactId => {
    setContacts(contacts.filter(({ id }) => id !== contactId));
  };

  const changeFilter = evt => {
    setFilter(evt.currentTarget.value);
  };

  const getVisibleContacts = () =>
    contacts.filter(contact => contact.name.toLowerCase().includes(filter));

  return (
    <div className={css.container}>
      <h1 className={css.phonebookTitle}>
        Phone<span className={css.titlePart}>book</span>
      </h1>
      <Form onSubmit={addContact}></Form>
      {contacts.length > 0 ? (
        <>
          <h2 className={css.contactsTitle}>Contacts</h2>
          <Filter filter={filter} onChangefilter={changeFilter} />
          <ContactsList
            contacts={getVisibleContacts()}
            onDeleteContact={deleteContact}
          ></ContactsList>
        </>
      ) : (
        <p className={css.empty__notification}>The contact list is empty</p>
      )}
    </div>
  );
};

export default App;
