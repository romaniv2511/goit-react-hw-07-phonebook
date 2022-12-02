import PropTypes from 'prop-types';
import { Contact } from '../Contact/Contact';
import { List, Item, Button } from './ContactsList.styled';

export const ContactsList = ({ contacts, onBtnClick }) => (
  <List>
    {contacts.map(({ id, name, number }) => (
      <Item key={id}>
        <Contact name={name} number={number} />
        <Button
          type="button"
          onClick={() => {
            onBtnClick(id);
          }}
        >
          Delete
        </Button>
      </Item>
    ))}
  </List>
);
ContactsList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
    })
  ).isRequired,
  onBtnClick: PropTypes.func.isRequired,
};
