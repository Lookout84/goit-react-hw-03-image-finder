import axios from 'axios';

const getFetch = (query, page, perPage) => {
  let key = `20004677-e0c621e42f0d912e7de39a0de`;

  let url = `https://pixabay.com/api/?image_type=photo&orientation=horizontal&q=${query}&page=${page}&per_page=${perPage}&key=${key}`;

  return axios.get(url).then(response => response.data.hits);
}


export default getFetch;
