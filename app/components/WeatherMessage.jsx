const React = require('react');

function WeatherMessage({ location, temperature }) {
  return <h4>Its {temperature} in {location}</h4>;
}

module.exports = WeatherMessage;
