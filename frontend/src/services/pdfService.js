import axios from 'axios';

const analyzePdf = (file) => {
  const formData = new FormData();
  formData.append('file', file);

  return axios.post('/api/pdf-analysis', formData, {
    headers: {
      'Content-Type': 'multipart/form-data'
    }
  });
};

export default { analyzePdf };
