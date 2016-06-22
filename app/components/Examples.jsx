const React = require('react');
const { Link } = require('react-router');

function Examples() {
  return (
    <div>
      <h1 className="text-center page-title">Examples</h1>
      <p>Here are a few example locations to try out:</p>
      <ol>
        <li>
          <Link to="/?location=Miami">
            Miami, USA
          </Link>
        </li>
        <li>
          <Link to="/?location=Moscow">
            Moscow, Russia
          </Link>
        </li>
        <li>
          <Link to="/?location=Berlin">
            Berlin, Germany
          </Link>
        </li>
      </ol>
    </div>
  );
}

module.exports = Examples;
