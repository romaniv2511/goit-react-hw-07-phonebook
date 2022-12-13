import { useState, useEffect, useRef } from 'react';
import { nanoid } from 'nanoid';
import { GlobalStyle } from './GlobalStyles';
import { Section } from './Section/Section';
import { ContactsForm } from './Form/Form';
import { ContactsList } from './Contacts/ContactsList/ContactsList';
import { Filter } from './Filter/Filter';

const CONTACTS_KEY = 'contacts';

export const App = () => {
  const [contacts, setContacts] = useState([]);
  const [filter, setFilter] = useState('');
  const isFirstRenfer = useRef(true);

  useEffect(() => {
    const parsedContacts = JSON.parse(localStorage.getItem(CONTACTS_KEY));
    if (parsedContacts) {
      setContacts(parsedContacts);
    }
  }, []);
  useEffect(() => {
    if (isFirstRenfer.current) {
      isFirstRenfer.current = false;
      return;
    }
    window.localStorage.setItem(CONTACTS_KEY, JSON.stringify(contacts));
  }, [contacts]);

  const addContact = ({ name, number }) => {
    const isInContacts = contacts.some(
      contact => contact.name.toLowerCase() === name.toLowerCase()
    );
    if (isInContacts) {
      alert(`${name} is already in contacts`);
      return;
    }

    const contact = {
      id: nanoid(),
      name,
      number,
    };
    setContacts(prevState => [contact, ...prevState]);
  };
  const removeContact = contactId => {
    setContacts(prev => prev.filter(contact => contact.id !== contactId));
  };
  const handleChangeFilter = filterValue => setFilter(filterValue);
  const filterContacts = () =>
    contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );

  return (
    <>
      <GlobalStyle />
      <h1>Phonebook</h1>
      <Section>
        <ContactsForm onSubmit={addContact} />
      </Section>
      <Section title="Contacts">
        {!!contacts.length && (
          <>
            <Filter onChange={handleChangeFilter} value={filter} />
            <ContactsList
              contacts={filterContacts()}
              onBtnClick={removeContact}
            />
          </>
        )}
      </Section>
    </>
  );
};
