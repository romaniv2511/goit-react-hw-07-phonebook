import { Contact } from '../Contact/Contact';
import { List, Item, Button } from './ContactsList.styled';

export const ContactsList = ({ contacts, onBtnClick }) => (
  <List>
    {contacts.map(({ id, name, number }) => (
      <Item key={id}>
        <Contact name={name} number={number} />
        <Button
          type="button"
          onClick={e => {
            onBtnClick(id);
          }}
        >
          Delete
        </Button>
      </Item>
    ))}
  </List>
);
