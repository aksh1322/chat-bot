import axios from 'axios';

const analyzeImage = (file) => {
  const formData = new FormData();
  formData.append('file', file);

  return axios.post('/api/image-analysis', formData, {
    headers: {
      'Content-Type': 'multipart/form-data'
    }
  });
};

export default { analyzeImage };
