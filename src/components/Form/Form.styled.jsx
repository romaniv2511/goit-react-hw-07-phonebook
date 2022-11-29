import styled from 'styled-components';
import { Form, Field, ErrorMessage } from 'formik';

export const FormAddContact = styled(Form)`
  display: flex;
  flex-direction: column;
  gap: 8px;
  padding: 16px 12px;
  border: 2px solid black;
  border-radius: 2px;
  margin-bottom: 16px;
  max-width: 400px;
`;
export const FormLabel = styled.label`
  display: flex;
  flex-direction: column;
  gap: 10px;
  height: 92px;
`;
export const FormInput = styled(Field)`
  border: 1px solid black;
  border-radius: 4px;

  font-size: 16px;
  padding: 4px 8px;
`;
export const FormError = styled(ErrorMessage)`
  font-size: 12px;
  color: red;
`;
export const FormBtn = styled.button`
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
