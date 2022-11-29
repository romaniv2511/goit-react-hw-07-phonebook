import { Component } from 'react';
import { Formik } from 'formik';
import * as Yup from 'yup';
import {
  FormAddContact,
  FormLabel,
  FormInput,
  FormError,
  FormBtn,
} from './Form.styled';

class ContactsForm extends Component {
  schema = Yup.object().shape({
    name: Yup.string()
      .matches(
        /^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$/,
        'Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore'
      )
      .required(),
    number: Yup.string()
      .matches(
        /\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}/,
        'Phone number must be digits and can contain spaces, dashes, parentheses and can start with +'
      )
      .required(),
  });

  handleSubmit = (values, { resetForm }) => {
    this.props.onSubmit(values);
    resetForm();
  };

  render() {
    return (
      <Formik
        initialValues={{ name: '', number: '' }}
        onSubmit={this.handleSubmit}
        validationSchema={this.schema}
      >
        <FormAddContact>
          <FormLabel htmlFor="name">
            Name
            <FormInput id="name" name="name" />
            <FormError component="span" name="name" />
          </FormLabel>
          <FormLabel htmlFor="number">
            Number
            <FormInput id="number" name="number" type="tel" />
            <FormError component="span" name="number" />
          </FormLabel>
          <FormBtn type="submit">Add contact</FormBtn>
        </FormAddContact>
      </Formik>
    );
  }
}

export default ContactsForm;
