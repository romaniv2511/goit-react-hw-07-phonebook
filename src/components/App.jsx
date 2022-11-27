import { Component } from 'react';
import Section from './Section/Section';
import AddContactForm from './Form/Form';

class App extends Component {
  state = {
    contacts: [],
    name: '',
    number: '',
  };

  render() {
    return (
      <>
        <h1>Phonebook</h1>
        <Section>
          <AddContactForm />
        </Section>
        <Section title="Contacts"></Section>
      </>
    );
  }
}

export default App;
