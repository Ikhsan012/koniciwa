const axios = require('axios');
require('../setting/config');

const ewalet = (requestData) => {
  const apiUrl = apiUri + 'ewalet';
  return axios.post(apiUrl, requestData) // Mengembalikan promise dari axios.post
    .then(response => {
      return response.data;
    })
    .catch(error => {
      return Promise.reject(error); // Mengembalikan promise yang ditolak dengan error
    });
};

module.exports = ewalet;
