import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

axios.defaults.baseURL = 'https://63add0323e4651691664aa32.mockapi.io';
axios.defaults.headers.post['Content-Type'] = 'application/json';

export const fetchContacts = createAsyncThunk(
  'contacts/fetchAll',
  async (_, { rejectWithValue }) => {
    try {
      const { data } = await axios.get('/contacts');
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const addContact = createAsyncThunk(
  'contacts/addContact',
  async (contact, { rejectWithValue }) => {
    try {
      const { data } = await axios.post('/contacts', contact);
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const deleteContact = createAsyncThunk(
  'contacts/deleteContact',
  async (contactId, { rejectWithValue }) => {
    try {
      await axios.delete(`/contacts/${contactId}`);
      return contactId;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);
