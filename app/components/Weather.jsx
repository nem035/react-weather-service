const React = require('react');
const WeatherForm = require('WeatherForm');
const WeatherMessage = require('WeatherMessage');
const openWeatherMap = require('openWeatherMap');

class Weather extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      isLoading   : false,
      location    : '',
      temperature : ''
    };

    this.handleLocationSearch = this.handleLocationSearch.bind(this);
  }

  render() {
    return (
      <div>
        <h3>Weather</h3>
        <WeatherForm onLocationSearch={this.handleLocationSearch}/>
        {this.renderMessage()}
      </div>
    );
  }

  renderMessage() {
    const { isLoading, location, temperature } = this.state;

    if (isLoading) {
      return <h3>Fetching weather...</h3>
    } else if (temperature && location) {
      return (
        <WeatherMessage location={location}
                        temperature={temperature}
        />
      );
    }
  }

  handleLocationSearch(location) {

    this.setState({ isLoading: true });

    openWeatherMap.getTemperatureForLocation(location)
      .then((temperature) => {
        this.setState({
          isLoading: false,
          location,
          temperature
        });
      }, (errorMessage) => {
        this.setState({ isLoading: false });
        alert(errorMessage);
      });
  }
};

module.exports = Weather;
