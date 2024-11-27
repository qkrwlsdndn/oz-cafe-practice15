import { configureStore, createSlice } from '@reduxjs/toolkit';

// Menu Slice
const menuSlice = createSlice({
  name: 'menu',
  initialState: null,
  reducers: {
    setMenu: (state, action) => action.payload,
  },
});

// Cart Slice
const cartSlice = createSlice({
  name: 'cart',
  initialState: [],
  reducers: {
    addToCart: (state, action) => {
      const { id, options, quantity } = action.payload;
      const existingItem = state.find((item) => item.id === id);
      if (existingItem) {
        existingItem.quantity += quantity;
      } else {
        state.push({ id, options, quantity });
      }
    },
    removeFromCart: (state, action) => state.filter((item) => item.id !== action.payload),
  },
});

export const store = configureStore({
  reducer: {
    menu: menuSlice.reducer,
    cart: cartSlice.reducer,
  },
});

// Actions export
export const { setMenu } = menuSlice.actions;
export const { addToCart, removeFromCart } = cartSlice.actions;
