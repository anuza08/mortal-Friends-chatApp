import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { receiveMessage } from "./redux/chatSlice";
import { Box, Container, Typography } from "@mui/material";
import ChatWindow from "./components/chatWindow";
import MessageInput from "./components/messageInput";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    const timer = setTimeout(() => {
      dispatch(receiveMessage({ text: "Hello! This is a simulated message." }));
    }, 5000);

    return () => clearTimeout(timer);
  }, [dispatch]);

  return (
    <Container>
      <Box display="flex" alignItems="center" justifyContent="center" mb={3}>
        <img src="/assests/logo.png" alt="logo" height={120} />
        <Typography variant="h4" align="center" gutterBottom>
          <h2 style={{ color: "#E661E6" }}>Immortal Friends</h2>
        </Typography>
      </Box>

      <ChatWindow />
      <MessageInput />
    </Container>
  );
}

export default App;
