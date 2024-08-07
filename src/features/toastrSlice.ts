import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface ToastrState {
  message: string;
  show: boolean;
  type: 'success' | 'error'; // Define type here
}

const initialState: ToastrState = {
  message: '',
  show: false,
  type: 'success', // Default type
};

const toastrSlice = createSlice({
  name: 'toastr',
  initialState,
  reducers: {
    showToastr(state, action: PayloadAction<{ message: string; type: 'success' | 'error' }>) {
      state.message = action.payload.message;
      state.show = true;
      state.type = action.payload.type; // Set type here
    },
    hideToastr(state) {
      state.show = false;
    },
  },
});

export const { showToastr, hideToastr } = toastrSlice.actions;
export default toastrSlice.reducer;
