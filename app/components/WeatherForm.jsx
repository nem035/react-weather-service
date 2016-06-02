const React = require('react');

class WeatherForm extends React.Component {
  
  constructor(props) {
    super(props);

    this.onFormSubmit = this.onFormSubmit.bind(this);
  }
  
  render() {
    return (
      <div>
        <form onSubmit={this.onFormSubmit}>
          <input type="text" ref="locationInput"/>
          <button>
            Get Weather
          </button>
        </form>
      </div>    
    );
  }
  
  onFormSubmit(e) {
    e.preventDefault();
    
    const { locationInput } = this.refs;
    
    const { 
      value: location
    } = locationInput;
    
    if (location.length > 0) {
      
      locationInput.value = '';
      this.props.onLocationSearch(location);
    }
  }
};

module.exports = WeatherForm;