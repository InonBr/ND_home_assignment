const api = require('./url');
const axios = require('axios');

const getRandomData = () => {
  return axios.get(api.randomDataUrl);
};

const registerApi = (userData) => {
  return axios.post(api.registerUrl, userData);
};

const loginApi = (userData) => {
  return axios.post(api.loginUrl, userData);
};

module.exports = { getRandomData, registerApi, loginApi };
