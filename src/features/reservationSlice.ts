import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface ReservationState {
  // key is an array of strings
  value: string[]
}

const initialState: ReservationState = {
  value: [],
}

export const reservationsSlice = createSlice({
  name: "reservations",
  initialState,
  reducers: {
    // add methods here to update state
    addReservation: (state, action: PayloadAction<string>) => {
      state.value.push(action.payload);
    },
    removeReservation: (state, action: PayloadAction<number>) =>{
      state.value.splice(action.payload, 1);
    },
  },
});

export const { addReservation, removeReservation } = reservationsSlice.actions;

export default reservationsSlice.reducer;