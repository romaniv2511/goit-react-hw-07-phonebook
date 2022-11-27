import { Component } from 'react';
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
        <AddContactForm />
      </>
    );
  }
}

export default App;
