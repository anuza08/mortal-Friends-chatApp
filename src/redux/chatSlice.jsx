import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  messages: [
    {
      id: 1,
      text: "Hey, how's it going?",
      sender: "User",
      timestamp: "10:00 AM",
    },
    {
      id: 2,
      text: "I'm good, how about you?",
      sender: "Other User",
      timestamp: "10:01 AM",
    },
    {
      id: 3,
      text: "Doing great! Working on a new project.",
      sender: "User",
      timestamp: "10:02 AM",
    },
    {
      id: 4,
      text: "That sounds awesome. Tell me more about it!",
      sender: "Other User",
      timestamp: "10:03 AM",
    },
  ],
  currentUser: "User",
};

const chatSlice = createSlice({
  name: "chat",
  initialState,
  reducers: {
    sendMessage: (state, action) => {
      state.messages.push({
        id: Date.now(),
        text: action.payload.text,
        sender: state.currentUser,
        timestamp: new Date().toLocaleTimeString(),
      });
    },
    receiveMessage: (state, action) => {
      state.messages.push({
        id: Date.now(),
        text: action.payload.text,
        sender: "Other User",
        timestamp: new Date().toLocaleTimeString(),
      });
    },
  },
});

export const { sendMessage, receiveMessage } = chatSlice.actions;
export default chatSlice.reducer;
