import { Component } from 'react';
import { nanoid } from 'nanoid';
import Section from './Section/Section';
import ContactsForm from './Form/Form';
import ContactsList from './Contacts/ContactsList';
import Filter from './Filter/Filter';

class App extends Component {
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
  filterContacts = () => {
    const { contacts, filter } = this.state;
    return contacts.filter(contact => contact.name.includes(filter));
  };
  render() {
    return (
      <>
        <h1>Phonebook</h1>
        <Section>
          <ContactsForm onSubmit={this.addContact} />
        </Section>
        <Section title="Contacts">
          <Filter
            onChange={e => this.setState({ filter: e.target.value })}
            value={this.state.filter}
          />
          <ContactsList contacts={this.filterContacts()} />
        </Section>
      </>
    );
  }
}

export default App;
