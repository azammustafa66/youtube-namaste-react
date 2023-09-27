import { createSlice } from "@reduxjs/toolkit";

const commentSlice = createSlice({
  name: "search",
  initialState: {},
  reducers: {
    cacheResults: (state, action) => {
      Object.assign(state, action.payload);
    },
  },
});

export const { cacheResults } = commentSlice.actions;
export default commentSlice.reducer;
