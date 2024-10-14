# Mortal Friend 💬

<img src="https://github.com/user-attachments/assets/bc8ba6d7-aaad-466f-9e00-1369041c993d" alt="logo" width="200" height="200"/>


**Your ultimate destination for never-ending conversations!**

> **Mortal Friend** 🌟

---

## Features 🚀

- **Real-Time Messaging:** Enjoy seamless and instant communication.
- **User-Friendly Interface:** Intuitive design for easy navigation.
- **Dynamic Scrolling:** Auto-scroll to keep up with the latest messages.
- **Stylish Display:** Messages are beautifully styled for a great visual experience.

---

## Implementation 🛠️

The app is divided into three main components:

### 1. **ChatWindow** 🖥️
- **Message Rendering:** 
  - Utilizes `useSelector` to fetch messages from the Redux store.
  - Implements the `useEffect` hook to automatically load messages whenever they change.
  
- **Auto-Scroller:**
  - Employs `useRef` to manage scrolling functionality for a smooth user experience.
  
- **Styling:**
  - Uses `Box` and `List` components from Material-UI (MUI) to elegantly style the messages coming from the `Message` component.

### 2. **Message** 📬
- **Message Listing:**
  - Utilizes `ListItem` to display messages.
  - Conditional styling applied: if the sender is "user," messages align to the right (`flex-end`) for a distinct look.

- **Message Content:**
  - The `ListItemText` component displays the message text received as props.
  
- **Timestamp Display:**
  - Shows the sender and message timestamp, enhancing the context of the conversation.


### 3. **MessageInput** 
1. Initializes a state variable message with an empty string. This will hold the input value.
2. Initializes the dispatch function to dispatch actions to the Redux store.
3. message.trim(): Checks if the message is not just empty spaces. If it's a valid non-empty message, the following steps occur.

---

## Technologies Used 💻

- **React**: A powerful library for building user interfaces.
- **Redux**: For state management, ensuring smooth and efficient data handling.
- **Material-UI**: A React UI framework that provides pre-designed components for faster development.

---


