import axios from 'axios';

const API_KEY = '39914228-180044369d14c57dff2914049';

axios.defaults.baseURL = 'https://pixabay.com/api';

export const fetchImages = async (query, page) => {
  const response = await axios.get(
    `/?q=${query}&page=${page}&key=${API_KEY}&image_type=photo&orientation=horizontal&per_page=12`
  );
  return response.data;
};
