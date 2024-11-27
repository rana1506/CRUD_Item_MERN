import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const API_URL = 'http://localhost:5000/api/items';

// Async actions
export const getItems = createAsyncThunk('items/getItems', async () => {
  const response = await axios.get(API_URL);
  return response.data;
});

export const addItem = createAsyncThunk('items/addItem', async (item) => {
  const response = await axios.post(API_URL, item);
  return response.data;
});

export const updateItem = createAsyncThunk('items/updateItem', async ({ id, item }) => {
  const response = await axios.put(`${API_URL}/${id}`, item);
  return response.data;
});

export const deleteItem = createAsyncThunk('items/deleteItem', async (id) => {
  await axios.delete(`${API_URL}/${id}`);
  return id;
});

// Slice
const itemsSlice = createSlice({
  name: 'item',
  initialState: { items: [], status: 'idle' },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getItems.fulfilled, (state, action) => {
        state.items = action.payload;
      })
      .addCase(addItem.fulfilled, (state, action) => {
        state.items.push(action.payload);
      })
      .addCase(updateItem.fulfilled, (state, action) => {
        const index = state.items.findIndex((item) => item._id === action.payload._id);
        state.items[index] = action.payload;
      })
      .addCase(deleteItem.fulfilled, (state, action) => {
        state.items = state.items.filter((item) => item._id !== action.payload);
      });
  },
});

export default itemsSlice.reducer;
