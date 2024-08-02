import axios from 'axios';

const API_URL = 'http://127.0.0.1:8000/chat';

export const fetchChat = async () => {
    try {
        const response = await axios.get(API_URL);
        console.log('Fetch Chat Response:', response.data); // Log the response data
        return response.data;
    } catch (error) {
        console.error('Error fetching chat data:', error);
        throw error;
    }
};

export const sendMessage = async (message) => {
    try {
        const response = await axios.post(API_URL, { message });
        return response.data;
    } catch (error) {
        console.error('Error sending message:', error);
        throw error;
    }
};
