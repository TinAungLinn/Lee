import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cartItems: [],
  totalAmount: 0,
  quantity: 0,
};

export const cartSlice = createSlice({
  name: "cartSlice",
  initialState,
  reducers: {
    addToCart: (state, { payload }) => {
      const isExisted = state.cartItems.find((item) => item.id === payload.id);
      const price = +payload.price.replace("$", "");

      if (isExisted) {
        return state;
      } else {
        state.cartItems = [...state.cartItems, { ...payload, quantity: 1 }];
        state.totalAmount += price;
        // console.log(state.cartItems.quantity)
        state.quantity = state.cartItems.reduce(
          (total, item) => total + item.quantity,
          0
        );
      }
    },
    remove: (state, { payload }) => {
      const price = +payload.price.replace("$", "");
      state.cartItems = state.cartItems.filter((item) => item.id != payload.id);
      state.quantity = state.cartItems.reduce(
        (total, item) => total + item.quantity,
        0
      );
      state.totalAmount -= price;
    },
    increaseQuantity: (state, { payload }) => {
      const price = +payload.price.replace("$", "");
      state.cartItems.map((item) => {
        if (item.id === payload.id) {
          return (item.quantity += 1);
        } else {
          return item;
        }
      });
      state.quantity = state.cartItems.reduce(
        (total, item) => total + item.quantity,
        0
      );
      state.totalAmount += price;
    },
    decreaseQuantity: (state, { payload }) => {
      const price = +payload.price.replace("$", "");
      state.cartItems.map((item) => {
        if (item.id === payload.id) {
          return (item.quantity -= 1);
        } else {
          return item;
        }
      });
      state.quantity = state.cartItems.reduce(
        (total, item) => total + item.quantity,
        0
      );
      state.totalAmount -= price;
    },
    cancel: (state) => {
      const result = confirm("Are you sure to cancel?");

      if (result) {
        state.cartItems = [];
        state.quantity = 0;
        state.totalAmount = 0;
      } else {
        return state;
      }
    },
    order: () => {
        alert("Thank you for Ordering...");
    }
  },
});

export const { addToCart, remove, increaseQuantity, decreaseQuantity, cancel, order } =
  cartSlice.actions;
export default cartSlice.reducer;
