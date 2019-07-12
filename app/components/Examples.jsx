var React = require('react');
var {Link} = require('react-router')

var Examples = (props) => {
  return (
    <div>
      <h1 className="text-center page-title">Examples</h1>
      <p>Here are  few examples locations to try out:</p>
      <ol>
        <li>
    <Link to='/?location=Porto'>Porto, PT</Link>
        </li>
        <li>
        <Link to='/?location=Geneva'>Geneva, CH</Link>
        </li>
      </ol>
    </div>
  )
};

module.exports = Examples;
