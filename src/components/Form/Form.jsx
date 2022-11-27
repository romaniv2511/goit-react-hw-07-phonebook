import { Component } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import styled from 'styled-components';

const FormStyled = styled(Form)`
  display: flex;
  flex-direction: column;
  gap: 8px;
  padding: 16px 12px;
  border: 2px solid black;
  border-radius: 2px;
  margin-bottom: 16px;
  max-width: 400px;
`;
const Label = styled.label`
  display: flex;
  flex-direction: column;
  gap: 10px;
  height: 92px;
`;
const Input = styled(Field)`
  border: 1px solid black;
  border-radius: 4px;

  font-size: 16px;
  padding: 4px 8px;
`;
const Error = styled(ErrorMessage)`
  font-size: 12px;
  color: red;
`;
const Btn = styled.button`
  padding: 8px 12px;
  border: none;
  border-radius: 4px;
  font-weight: 500;
  font-size: 16px;
  line-height: 1.2;
  background-color: lightGrey;
  cursor: pointer;
  &:hover,
  &:focus {
    background-color: darkBlue;
    color: white;
  }
`;

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
        <FormStyled>
          <Label htmlFor="name">
            Name
            <Input id="name" name="name" />
            <Error component="span" name="name" />
          </Label>
          <Label htmlFor="number">
            Number
            <Input id="number" name="number" type="tel" />
            <Error component="span" name="number" />
          </Label>
          <Btn type="submit">Add contact</Btn>
        </FormStyled>
      </Formik>
    );
  }
}

export default ContactsForm;
