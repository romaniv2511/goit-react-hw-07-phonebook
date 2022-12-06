import { Component } from 'react';
import { nanoid } from 'nanoid';
import { GlobalStyle } from './GlobalStyles';
import { Section } from './Section/Section';
import { ContactsForm } from './Form/Form';
import { ContactsList } from './Contacts/ContactsList/ContactsList';
import { Filter } from './Filter/Filter';

export class App extends Component {
  state = {
    contacts: [],
    filter: '',
  };

  addContact = ({ name, number }) => {
    const isInContacts = this.state.contacts.some(
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
    this.setState(prevState => ({
      contacts: [contact, ...prevState.contacts],
    }));
  };
  removeContact = contactId => {
    this.setState(prev => ({
      contacts: prev.contacts.filter(contact => contact.id !== contactId),
    }));
  };
  handleChangeFilter = filterValue => this.setState({ filter: filterValue });
  filterContacts = () => {
    const { contacts, filter } = this.state;
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );
  };
  render() {
    return (
      <>
        <GlobalStyle />
        <h1>Phonebook</h1>
        <Section>
          <ContactsForm onSubmit={this.addContact} />
        </Section>
        <Section title="Contacts">
          {!!this.state.contacts.length && (
            <>
              <Filter
                onChange={this.handleChangeFilter}
                value={this.state.filter}
              />
              <ContactsList
                contacts={this.filterContacts()}
                onBtnClick={this.removeContact}
              />
            </>
          )}
        </Section>
      </>
    );
  }
}
