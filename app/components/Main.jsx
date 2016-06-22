const React = require('react');
const Nav = require('Nav');

function Main({ children }) {
  return (
    <div>
      <Nav />
      <div className="row">
        <div className="columns medium-8 large-6 small-centered">
          {children}
        </div>
      </div>
    </div>
  );
}

Main.propTypes = {
  children: React.PropTypes.element.isRequired,
};

module.exports = Main;
