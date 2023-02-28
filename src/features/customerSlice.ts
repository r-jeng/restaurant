import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface AddFoodToCustomerPayload {
  food: string;
  id: string;
}

interface Customer {
  id: string;
  name: string;
  food: string[];
}

interface CustomerState {
  value: Customer[]
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
    },
    addFoodToCustomer: (state, action: PayloadAction<AddFoodToCustomerPayload>) => {
      // filter customer by id specific users food array
      state.value.forEach((customer => {
        if (customer.id === action.payload.id) {
          customer.food.push(action.payload.food)
        }
      }))
    }
  },
});

export const { addCustomer, addFoodToCustomer } = customerSlice.actions;

export default customerSlice.reducer;