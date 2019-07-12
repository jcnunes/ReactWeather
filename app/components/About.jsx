var React = require('react');

var About = (props) => {
  return (
    <div>
      <h1 className="text-center page-title">About</h1>
      <p>This is an weather application build on React. I have built this for the Complete React Web Developer Course</p>
      <p>
        Here are some of the tolds I used:
      </p>
      <ul>
        <li>
          <a href="https://facebook.github.io/react">React</a> - This was the Javascript framework I used.
        </li>
        <li>
          <a href="https://openweathermap.org">Open Weather Map</a> - I used Oper Wetaher Map to search for weather data by city name. 
        </li>
      </ul>
    </div>
  )
};

module.exports = About;
