import axios from 'axios';

const analyzePdf = (file) => {
  const formData = new FormData();
  formData.append('file', file);

  return axios.post('http://127.0.0.1:8000/pdf-analysis', formData, {
    headers: {
      'Content-Type': 'multipart/form-data'
    }
  });
};

export default { analyzePdf };
