const api = require('./url');
const axios = require('axios');

const getRandomData = () => {
  return axios.get(api.randomDataUrl);
};

module.exports = { getRandomData };
