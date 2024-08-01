import React, { useState } from 'react';
import chatService from '../services/chatService';

function ChatComponent() {
  const [message, setMessage] = useState('');
  const [response, setResponse] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    const res = await chatService.sendMessage(message);
    setResponse(res.data.response);
  };

  return (
    <div>
      <h2>Chat</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />
        <button type="submit">Send</button>
      </form>
      <p>Response: {response}</p>
    </div>
  );
}

export default ChatComponent;
