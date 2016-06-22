const React = require('react');
const { Link, IndexLink } = require('react-router');

class Nav extends React.Component {

  onSearch(event) {
    event.preventDefault();
    alert('Not Yet Implemented');
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
                <input type="search" placeholder="Enter a location" />
              </li>
              <li>
                <input type="submit" className="button" value="Get Weather" />
              </li>
            </ul>
          </form>
        </div>
      </div>
    );
  }
}

module.exports = Nav;
