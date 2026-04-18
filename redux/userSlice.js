import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: null,
};

const slice = createSlice({
  name: "user",
  initialState,
  reducers: {
    registerUser: (state, action) => {
      state.user = action.payload;
    },
  },
});

export const { registerUser } = slice.actions;
export default slice.reducer;