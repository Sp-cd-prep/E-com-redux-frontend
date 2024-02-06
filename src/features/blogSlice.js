// features/blogSlice.js
import { createSlice } from '@reduxjs/toolkit';
import data from '../Data';

const blogSlice = createSlice({
  name: 'blog',
  initialState: { blogs: data, cart: [], total: 0 },
  reducers: {

    addToCart: (state, action) => {
      const itemToAdd = state.blogs.find(item => item.id === action.payload);
      const existingCartItem = state.cart.find(item => item.id === action.payload);

      if (itemToAdd) {
        if (existingCartItem) {
          existingCartItem.count += 1;
          state.total += itemToAdd.price;
        } else {
          state.cart.push({ ...itemToAdd, count: 1 });
          state.total += itemToAdd.price;
        }
      }
    },

    removeFromCart: (state, action) => {
      const itemIdToRemove = action.payload;
      const removedItem = state.cart.find(item => item.id === itemIdToRemove);

      if (removedItem) {
        state.total -= removedItem.price * removedItem.count;
        state.cart = state.cart.filter(item => item.id !== itemIdToRemove);
      }
    },

    increment: (state, action) => {
      const itemToIncrement = state.cart.find(item => item.id === action.payload);

      if (itemToIncrement) {
        state.total += itemToIncrement.price;
        itemToIncrement.count += 1;
      }
    },
    
    decrement: (state, action) => {
      const itemToDecrement = state.cart.find(item => item.id === action.payload);

      if (itemToDecrement) {
        if (itemToDecrement.count === 1) {
          state.total -= itemToDecrement.price;
          state.cart = state.cart.filter(item => item.id !== action.payload);
        } else {
          itemToDecrement.count -= 1;
          state.total -= itemToDecrement.price;
        }
      }
    },
  },
});

export const { addToCart, removeFromCart, increment, decrement } = blogSlice.actions;
export default blogSlice.reducer;
