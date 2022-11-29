import { Component } from 'react';
import { GlobalStyle } from './GlobalStyles';
import { nanoid } from 'nanoid';
import { Section } from './Section/Section';
import { ContactsForm } from './Form/Form';
import { ContactsList } from './Contacts/ContactsList/ContactsList';
import Filter from './Filter/Filter';

export class App extends Component {
  state = {
    contacts: [
      { id: 'qweqw', name: 'ada', number: '644646646' },
      { id: 'qweqww', name: 'asdasfaf', number: '123413252' },
    ],
    name: '',
    nunmber: '',
    filter: '',
  };

  addContact = ({ name, number }) => {
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
    const newContactsList = this.state.contacts.reduce((acc, item) => {
      return item.id === contactId ? acc : [...acc, item];
    }, []);

    this.setState({ contacts: newContactsList });
  };
  filterContacts = () => {
    const { contacts, filter } = this.state;
    return contacts.filter(contact => contact.name.includes(filter));
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
          <Filter
            onChange={e => this.setState({ filter: e.target.value })}
            value={this.state.filter}
          />
          <ContactsList
            contacts={this.filterContacts()}
            onBtnClick={this.removeContact}
          />
        </Section>
      </>
    );
  }
}
