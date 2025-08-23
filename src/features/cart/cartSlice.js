import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  //cart: [],
  cart: [
    {
      pizzaId: 12,
      name: "Pepperoni Pizza",
      quantity: 2,
      unitPrice: 12.99,
      totalPrice: 25.98,
    },
  ],
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
      // Payload is the pizzaId of the item to delete
      state.cart = state.cart.filter((item) => item.pizzaId !== action.payload);
    },
    increaseItemQuantity: (state, action) => {
      // Payload is the pizzaId of the item to increase
      const item = state.cart.find((item) => item.pizzaId === action.payload);
      if (item) {
        item.quantity += 1;
        item.totalPrice = item.unitPrice * item.quantity;
      }
    },
    decreaseItemQuantity: (state, action) => {
      // Payload is the pizzaId of the item to decrease
      const item = state.cart.find((item) => item.pizzaId === action.payload);
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
