import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { sendMessage } from "../redux/chatSlice";
import { Box, TextField, Button } from "@mui/material";

const MessageInput = () => {
  const [message, setMessage] = useState("");
  const dispatch = useDispatch();

  const handleSend = () => {
    if (message.trim()) {
      dispatch(sendMessage({ text: message }));
      setMessage("");
    }
  };

  return (
    <Box display="flex" sx={{ mt: 2 }} gap={3}>
      <TextField
        variant="outlined"
        fullWidth
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        placeholder="Type your message..."
        sx={{
          "& .MuiOutlinedInput-root": {
            "& fieldset": {
              borderColor: "white",
            },
            "&:hover fieldset": {
              borderColor: "white",
            },
            "&.Mui-focused fieldset": {
              borderColor: "white",
            },
          },
          input: {
            color: "white",
          },
        }}
      />
      <Button
        style={{ backgroundColor: "#E661E6", color: "white", width: "17%" }}
        onClick={handleSend}
      >
        Send
      </Button>
    </Box>
  );
};

export default MessageInput;
