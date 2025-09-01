import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  //cart: [],
  cart: [],
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addItem: (state, action) => {
      // Payload is a new item to add to the cart
      state.cart.push(action.payload);
    },
    deleteItem: (state, action) => {
      // Payload is the id of the item to delete
      state.cart = state.cart.filter((item) => item.id !== action.payload);
    },
    increaseItemQuantity: (state, action) => {
      // Payload is the id of the item to increase
      const item = state.cart.find((item) => item.id === action.payload);
      if (item) {
        item.quantity += 1;
        item.totalPrice = item.unitPrice * item.quantity;
      }
    },
    decreaseItemQuantity: (state, action) => {
      // Payload is the pizzaId of the item to decrease
      const item = state.cart.find((item) => item.id === action.payload);
      if (item && item.quantity > 1) {
        item.quantity -= 1;
        item.totalPrice = item.unitPrice * item.quantity;
      }
    },
    clearCart: (state) => {
      state.cart = [];
    },
  },
});

export const {
  increaseItemQuantity,
  decreaseItemQuantity,
  deleteItem,
  addItem,
  clearCart,
} = cartSlice.actions;

export default cartSlice.reducer;

export const getCart = (state) => state.cart.cart;

export const getTotalCartQuantity = (state) =>
  state.cart.cart.reduce((sum, item) => sum + item.quantity, 0);

export const getCurrentQuantityById = (id) => (state) =>
  state.cart.cart.find((item) => item.id === id)?.quantity || 0;

export const getTotalCartPrice = (state) =>
  state.cart.cart.reduce((sum, item) => sum + item.totalPrice, 0);
