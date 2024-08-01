import axios from 'axios';

const sendMessage = (message) => {
  return axios.post('/chat', { message });
};

export default { sendMessage };
