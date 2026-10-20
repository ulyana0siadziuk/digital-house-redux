import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: [],
  },
  reducers: {
    addToCart(state, action) {
      const product = action.payload;
      const existing = state.items.find((item) => item.id === product.id);

      if (existing) {
        existing.quantity += product.quantity ?? 1;
      } else {
        state.items.push({
          id: product.id,
          title: product.title,
          price: product.price,
          quantity: product.quantity ?? 1,
        });
      }
    },
  },
});

export const { addToCart } = cartSlice.actions;
export default cartSlice.reducer;

export const selectCartItems = (state) => state.cart.items;
export const selectCartItemsCount = (state) =>
  state.cart.items.reduce((sum, item) => sum + item.quantity, 0);
