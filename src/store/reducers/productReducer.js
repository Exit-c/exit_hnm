import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  productCard: [],
};

export const productSlice = createSlice({
  name: 'product',
  initialState,
  reducers: {
    getAllProduct(state, action) {
      state.productCard = action.payload.data;
    },
  },
});

export const productActions = productSlice.actions;
export default productSlice.reducer;
