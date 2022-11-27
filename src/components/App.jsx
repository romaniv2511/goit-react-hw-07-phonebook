import { Component } from 'react';
import { nanoid } from 'nanoid';
import Section from './Section/Section';
import ContactsForm from './Form/Form';
import ContactsList from './Contacts/ContactsList';

class App extends Component {
  state = {
    contacts: [
      { id: 'qweqw', name: 'ada', number: '644646646' },
      { id: 'qweqww', name: 'asdasfaf', number: '123413252' },
    ],
  };

  addContact = ({ name, number }) => {
    const contact = {
      id: nanoid(),
      name,
      number,
    };
    console.log(contact);
    this.setState(prevState => ({
      contacts: [contact, ...prevState.contacts],
    }));
  };
  render() {
    return (
      <>
        <h1>Phonebook</h1>
        <Section>
          <ContactsForm onSubmit={this.addContact} />
        </Section>
        <Section title="Contacts">
          <ContactsList contacts={this.state.contacts} />
        </Section>
      </>
    );
  }
}

export default App;
