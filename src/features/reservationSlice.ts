import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: []
}

export const reservationsSlice = createSlice({
  name: "reservations",
  initialState,
  reducers: {
    // add methods here to update state
  }
})

export default reservationsSlice.reducer;