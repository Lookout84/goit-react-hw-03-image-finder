import axios from 'axios';

// async function getFetch(query, page, perPage) {
//   let key = `20004677-e0c621e42f0d912e7de39a0de`;

//   axios.defaults.baseURL = `https://pixabay.com/api/`;
//   axios.defaults.headers.common['Authorization'] = key;
//   let url = `?image_type=photo&orientation=horizontal&q=${query}&page=${page}&per_page=${perPage}&key=${key}`;

//   const response = await axios.get(url);
//   const data = await response.data;
//   const result = await data.hits;

//   return result;
// }

// export default { getFetch };
// let key = `20004677-e0c621e42f0d912e7de39a0de`;
// axios.defaults.headers.common['Authorization'] = key;
// axios.defaults.baseURL = `https://pixabay.com/api/`;

const getFetch = (query, page, perPage = 12) => {
  let key = `20004677-e0c621e42f0d912e7de39a0de`;
  return axios
    .get(
      `https://pixabay.com/api/?image_type=photo&orientation=horizontal&q=${query}&page=${page}&per_page=${perPage}&key=${key}`,
    )
    .then(response => response.data.hits);
};

export { getFetch as default };
