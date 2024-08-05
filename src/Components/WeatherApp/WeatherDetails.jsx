import React from 'react';
import weatherIcons from '../Icons/weatherIcons';
import './CSS/WeatherDetails.css';

const WeatherDetails = ({ weatherData }) => {
  return (
    <div className="weather-info">
      <h2>{weatherData.name}</h2>
      <div className="weather-details">
        <img
          src={weatherIcons[weatherData.weather[0].main] || weatherIcons.Clouds}
          alt="weather icon"
        />
        <div className="weather-stats">
          <p>Temperature: {Math.round(weatherData.main.temp)}°F</p>
          <p>Humidity: {weatherData.main.humidity}%</p>
          <p>Wind Speed: {weatherData.wind.speed} mph</p>
        </div>
      </div>
    </div>
  );
};

export default WeatherDetails;
