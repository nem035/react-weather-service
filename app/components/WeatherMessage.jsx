const React = require('react');

function WeatherMessage({ location, temperature }) {
  return <h4>Its {temperature} in {location}</h4>;
}

WeatherMessage.propTypes = {
  location: React.PropTypes.string.isRequired,
  temperature: React.PropTypes.string.isRequired,
};

module.exports = WeatherMessage;
