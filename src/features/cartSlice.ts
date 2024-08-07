import { createSlice, Dispatch, PayloadAction, ThunkAction } from '@reduxjs/toolkit';
import { Product } from '../types';
import { showToastr } from './toastrSlice';
import { RootState } from '@/store';

interface CartItem {
  product: Product;
  quantity: number;
}

interface CartState {
  items: CartItem[];
}

const initialState: CartState = {
  items: [],
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart(state, action: PayloadAction<Product>) {
      const itemIndex = state.items.findIndex(item => item.product.id === action.payload.id);
      if (itemIndex === -1) {
        state.items.push({ product: action.payload, quantity: 1 });
      }
    },
    removeFromCart(state, action: PayloadAction<number>) {
      state.items = state.items.filter(item => item.product.id !== action.payload);
    },
    increaseQuantity(state, action: PayloadAction<number>) {
      const itemIndex = state.items.findIndex(item => item.product.id === action.payload);
      if (itemIndex >= 0) {
        state.items[itemIndex].quantity += 1;
      }
    },
    decreaseQuantity(state, action: PayloadAction<number>) {
      const itemIndex = state.items.findIndex(item => item.product.id === action.payload);
      if (itemIndex >= 0) {
        if (state.items[itemIndex].quantity > 1) {
          state.items[itemIndex].quantity -= 1;
        } else {
          state.items = state.items.filter(item => item.product.id !== action.payload);
        }
      }
    },
  },
});

export const { addToCart, removeFromCart, increaseQuantity, decreaseQuantity } = cartSlice.actions;

export const addProductToCart = (product: Product): ThunkAction<void, RootState, unknown, any> => {
  return (dispatch: Dispatch) => {
    dispatch(addToCart(product));
    dispatch(showToastr({ message: 'Product added to cart', type: 'success' })); 
  };
};

export const removeProductFromCart = (productId: number): ThunkAction<void, RootState, unknown, any> => {
  return (dispatch: Dispatch) => {
    dispatch(removeFromCart(productId));
    dispatch(showToastr({ message: 'Product removed from cart', type: 'error' })); 
  };
};

export default cartSlice.reducer;
