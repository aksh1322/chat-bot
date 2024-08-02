import React, { useState, useEffect } from 'react';
import { fetchChat, sendMessage } from '../services/chatService';

function ChatComponent() {
    const [message, setMessage] = useState('');
    const [response, setResponse] = useState('');
    const [chatData, setChatData] = useState([]);

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const res = await sendMessage(message);
            setResponse(res.response);
            setMessage(''); // Clear the input field after sending the message
            await loadChatData(); // Reload chat data after sending the message
        } catch (error) {
            console.error('Error sending message:', error);
        }
    };

    const loadChatData = async () => {
        try {
            const data = await fetchChat();
            if (Array.isArray(data)) {
                setChatData(data);
            } else {
                console.error('Chat data is not an array:', data);
            }
        } catch (error) {
            console.error('Error fetching chat data:', error);
        }
    };

    useEffect(() => {
        loadChatData();
    }, []);

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
            <ul>
                {chatData.map((chat, index) => (
                    <li key={index}>{chat.message}</li>
                ))}
            </ul>
        </div>
    );
}

export default ChatComponent;
