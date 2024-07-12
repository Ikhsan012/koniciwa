const axios = require('axios');
require('../setting/config');

const plnToken = (requestData) => {
  const apiUrl = apiUri + 'pln';
  return axios.post(apiUrl, requestData)
    .then(response => {
      return response.data;
    })
    .catch(error => {
      throw error; // Menggunakan throw untuk melemparkan error agar dapat ditangkap di tempat pemanggilan
    });
};

module.exports = plnToken;
