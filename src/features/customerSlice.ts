import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface CustomerState {
  // value key is an array of Customer object
  value: Customer[]
}

interface Customer {
  id: string;
  name: string;
  food: string[];
}

const initialState: CustomerState = {
  value: [],
}

export const customerSlice = createSlice({
  name: "customers",
  initialState,
  reducers: {
    // add methods here to update state
    addCustomer: (state, action: PayloadAction<Customer>) => {
      state.value.push(action.payload);
    }
  },
});

export const { addCustomer } = customerSlice.actions;

export default customerSlice.reducer;