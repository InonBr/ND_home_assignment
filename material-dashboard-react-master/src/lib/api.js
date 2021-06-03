const api = require('./url');
const axios = require('axios');

const getRandomData = () => {
  return axios.get(api.randomDataUrl);
};

const registerApi = (userData) => {
  return axios.post(api.registerUrl, userData);
};

module.exports = { getRandomData, registerApi };
