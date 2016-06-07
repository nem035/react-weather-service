const React = require('react');
const Nav = require('Nav');

function Main({ children }) {
  return (
    <div>
      <Nav/>
      <h2>Main Component</h2>
      {children}
    </div>
  );
}

module.exports = Main;
