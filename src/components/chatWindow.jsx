import React, { useEffect, useRef } from "react";
import { useSelector } from "react-redux";
import { Box, List } from "@mui/material";
import Message from "./message";

const ChatWindow = () => {
  const messages = useSelector((state) => state.chat.messages);
  const chatRef = useRef(null);

  useEffect(() => {
    if (chatRef.current) {
      chatRef.current.scrollTop = chatRef.current.scrollHeight;
    }
  }, [messages]);

  return (
    <Box
      ref={chatRef}
      sx={{
        maxHeight: "400px",
        overflowY: "auto",
        p: 2,
        
        borderRadius: "20px",
      }}
    >
      <List>
        {messages.map((message) => (
          <Message
            key={message.id}
            message={message}
            style={{ color: "white" }}
          />
        ))}
      </List>
    </Box>
  );
};

export default ChatWindow;
