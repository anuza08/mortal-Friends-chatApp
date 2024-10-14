import React from "react";
import { ListItem, ListItemText, Typography, Box } from "@mui/material";

const Message = ({ message }) => {
  const isUserMessage = message.sender;

  return (
    <ListItem
      sx={{
        display: "flex",
        justifyContent: isUserMessage === "User" ? "flex-end" : "flex-start",
      }}
    >
      <Box
        sx={{
          backgroundColor: isUserMessage === "User" ? "#E661E6" : "#333",
          color: "white",
          borderRadius: 5,
          padding: "8px 12px",
          maxWidth: "60%",
        }}
      >
        <ListItemText
          primary={
            <Typography variant="body1" style={{ color: "white" }}>
              {message.text}
            </Typography>
          }
        />
        <Typography variant="caption" color="white">
          {message.sender} - {message.timestamp}
        </Typography>
      </Box>
    </ListItem>
  );
};

export default Message;
