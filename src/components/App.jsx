import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { GlobalStyle } from './GlobalStyles';
import { Section } from './Section/Section';
import { ContactsForm } from './Form/Form';
import { ContactsList } from './Contacts/ContactsList/ContactsList';
import { Filter } from './Filter/Filter';
import { Loader } from './Loader/Loader';
import { fetchContacts } from 'redux/operations';
import {
  getContacts,
  getIsLoading,
  getError,
} from 'redux/contacts/contactsSelectors';

export const App = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(getContacts);
  const isLoading = useSelector(getIsLoading);
  const error = useSelector(getError);
  const isVisivleContacts = !isLoading && !error && contacts.length > 0;

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <>
      <GlobalStyle />
      <h1>Phonebook</h1>
      <Section>
        <ContactsForm />
      </Section>
      <Section title="Contacts">
        {contacts.length > 0 && <Filter />}
        {isVisivleContacts && <ContactsList />}
        {isLoading && <Loader />}
      </Section>
      {error && <p>Oops, something wrong!</p>}
    </>
  );
};
