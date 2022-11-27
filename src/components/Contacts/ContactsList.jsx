import Contact from './Contact';

const ContactsList = ({ contacts }) => (
  <ul>
    {contacts.map(({ id, name, number }) => (
      <Contact name={name} number={number} key={id} />
    ))}
  </ul>
);

export default ContactsList;
