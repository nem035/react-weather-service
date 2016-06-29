const React = require('react');
const { Link, IndexLink } = require('react-router');

class Nav extends React.Component {

  constructor(props) {
    super(props);
    this.onSearch = this.onSearch.bind(this);
  }

  onSearch(event) {
    event.preventDefault();

    const { searchInput } = this.refs;

    const {
      value,
    } = searchInput;

    const location = encodeURIComponent(value.trim());

    if (location.length > 0) {
      searchInput.value = '';
      window.location.hash = `#/?location=${location}`;
    }
  }

  render() {
    return (
      <div className="top-bar">
        <div className="top-bar-left">
          <ul className="menu">
            <li className="menu-text">
              React Weather Service
            </li>
            <li>
              <IndexLink
                to="/"
                activeClassName="active"
                activeStyle={{ fontWeight: 'bold' }}
              >
                Weather
              </IndexLink>
            </li>
            <li>
              <Link
                to="/about"
                activeClassName="active"
                activeStyle={{ fontWeight: 'bold' }}
              >
                About
              </Link>
            </li>
            <li>
              <Link
                to="/examples"
                activeClassName="active"
                activeStyle={{ fontWeight: 'bold' }}
              >
                Examples
              </Link>
            </li>
          </ul>
        </div>
        <div className="top-bar-right">
          <form onSubmit={this.onSearch}>
            <ul className="menu">
              <li>
                <input
                  type="search"
                  placeholder="Enter a location"
                  ref="searchInput"
                />
              </li>
              <li>
                <input
                  type="submit"
                  className="button"
                  value="Get Weather"
                />
              </li>
            </ul>
          </form>
        </div>
      </div>
    );
  }
}

module.exports = Nav;
