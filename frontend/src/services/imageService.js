import axios from 'axios';

const analyzeImage = (file) => {
  const formData = new FormData();
  formData.append('file', file);

  return axios.post('http://127.0.0.1:8000/image-analysis', formData, {
    headers: {
      'Content-Type': 'multipart/form-data'
    }
  });
};

export default { analyzeImage };
