const React = require('react');
const WeatherForm = require('WeatherForm');
const WeatherMessage = require('WeatherMessage');
const openWeatherMap = require('openWeatherMap');

class Weather extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      isLoading: false,
      errorMessage: '',
      location: '',
      temperature: '',
    };

    this.handleLocationSearch = this.handleLocationSearch.bind(this);
  }

  componentDidMount() {
    const { location } = this.props.location.query;
    this.handleLocationSearchFromURL(location);
  }

  componentWillReceiveProps(newProps) {
    const { location } = newProps.location.query;
    this.handleLocationSearchFromURL(location);
  }

  handleLocationSearchFromURL(location) {
    if (location && typeof location === 'string') {
      this.handleLocationSearch(location);
      window.location.hash = '#/';
    }
  }

  handleLocationSearch(location) {
    this.setState({
      isLoading: true,
      errorMessage: '',
      location: '',
      temperature: '',
    });

    openWeatherMap.getTemperatureForLocation(location)
      .then((temperature) => {
        this.setState({
          isLoading: false,
          location,
          temperature,
        });
      }, ({ message: errorMessage }) => {
        this.setState({
          isLoading: false,
          errorMessage,
        });
      });
  }

  renderMessage() {
    const {
      isLoading,
      errorMessage,
      location,
      temperature,
    } = this.state;

    if (isLoading) {
      return <h3 className="text-center subheader"><em>Fetching weather...</em></h3>;
    }

    if (errorMessage) {
      return (
        <div className="callout warning">
          <h5>Oops!</h5>
          <p>{errorMessage}</p>
        </div>
      );
    }

    if (location) {
      return (
        <WeatherMessage
          location={location}
          temperature={temperature}
        />
      );
    }

    return <div />;
  }

  render() {
    return (
      <div>
        <h1 className="text-center page-title">Weather</h1>
        <WeatherForm onLocationSearch={this.handleLocationSearch} />
        {this.renderMessage()}
      </div>
    );
  }
}

Weather.propTypes = {
  location: React.PropTypes.object.isRequired,
};

module.exports = Weather;
