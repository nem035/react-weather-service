const React = require('react');

function WeatherMessage({ location, temperature }) {
  return <h4 className="text-center">Its {temperature} in {location}</h4>;
}

WeatherMessage.propTypes = {
  location: React.PropTypes.string.isRequired,
  temperature: React.PropTypes.number.isRequired,
};

module.exports = WeatherMessage;
