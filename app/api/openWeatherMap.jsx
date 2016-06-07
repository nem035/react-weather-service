const axios = require('axios');
const {
  API_URL,
  API_KEY
} = require('./api');

module.exports = {

  getTemperatureForLocation(location) {
    const q = encodeURIComponent(location);

    return axios.get(API_URL, {
      params: {
        q,
        appid: API_KEY,
        units: 'metric'
      }
    }).then(({ data }) => {
        const { cod, message, main } = data;
        if (cod && message) {
          throw new Error(message);
        } else {
          return main.temp;
        }
      }, ({ data }) => {
        throw new Error(data.message);
      });
  }
};
