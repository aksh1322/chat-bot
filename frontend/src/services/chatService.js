import axios from 'axios';

const sendMessage = (message) => {
  return axios.post('/api/chat', { message });
};

export default { sendMessage };
