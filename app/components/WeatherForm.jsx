const React = require('react');

class WeatherForm extends React.Component {

  constructor(props) {
    super(props);

    this.onFormSubmit = this.onFormSubmit.bind(this);
  }

  onFormSubmit(e) {
    e.preventDefault();

    const { locationInput } = this.refs;

    const {
      value: location,
    } = locationInput;

    if (location.length > 0) {
      locationInput.value = '';
      this.props.onLocationSearch(location);
    }
  }

  render() {
    return (
      <div>
        <form onSubmit={this.onFormSubmit}>
          <input type="text" ref="locationInput" />
          <button>
            Get Weather
          </button>
        </form>
      </div>
    );
  }
}

WeatherForm.propTypes = {
  onLocationSearch: React.PropTypes.func.isRequired,
};

module.exports = WeatherForm;
