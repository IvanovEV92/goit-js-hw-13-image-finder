const axios = require('axios');

axios.defaults.baseURL = 'https://pixabay.com/api/';

const token = '19892329-0452805ee0827a1229c764d7c';
let page = 1;
const fetchImage = async searchImage => {
  const response = await axios.get(
    `?key=${token}&q=${searchImage}&image_type=photo&per_page=12&page=${page}`,
  );
  page += 1;
  return response.data.hits;
};

const resetPage = () => {
  page = 1;
};

export default { fetchImage, resetPage };
