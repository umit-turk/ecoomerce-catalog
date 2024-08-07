import { configureStore } from '@reduxjs/toolkit';
import cartReducer from './features/cartSlice';
import productReducer from './features/productSlice';
import toastrReducer from './features/toastrSlice';

export const store = configureStore({
  reducer: {
    cart: cartReducer,
    products: productReducer,
    toastr: toastrReducer
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
