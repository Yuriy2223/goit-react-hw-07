import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchContacts = createAsyncThunk(
  "contacts/fetchContacts",
  async (_, { rejectWithValue }) => {
    try {
      const response = await axios.get(
        "https://660d6ea06ddfa2943b346562.mockapi.io/contacts"
      );
      return response.data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const addContact = createAsyncThunk(
  "contacts/addContact",
  async (contact, { rejectWithValue }) => {
    try {
      const response = await axios.post(
        "https://660d6ea06ddfa2943b346562.mockapi.io/contacts",
        contact
      );
      return response.data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const deleteContact = createAsyncThunk(
  "contacts/deleteContact",
  async (contactId, { rejectWithValue }) => {
    try {
      await axios.delete(
        `https://660d6ea06ddfa2943b346562.mockapi.io/contacts/${contactId}`
      );
      return contactId;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);
