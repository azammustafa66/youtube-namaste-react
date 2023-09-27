import { createSlice } from "@reduxjs/toolkit";

const chatSlice = createSlice({
  name: "chat",
  initialState: {
    chats: {},
  },
  reducers: {
    setChatsRedux: (state, action) => {
      const { videoId, chat } = action.payload;
      if (!state.chats[videoId]) {
        state.chats[videoId] = [];
      }
      state.chats[videoId].push(chat);
    },
  },
});

export const { setChatsRedux } = chatSlice.actions;
export default chatSlice.reducer;
