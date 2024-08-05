import React, { useState } from 'react';
import './CSS/Weather.css';
import WeatherDetails from '../WeatherDetails';
import SearchBar from '../SearchBar';
import weatherIcons from '../../weatherIcons';

const Weather = () => {
  const [city, setCity] = useState('');
  const [weatherData, setWeatherData] = useState(null);
  const [error, setError] = useState(null);

  const getWeather = async () => {
    if (city.trim() === '') return;
    const API_KEY = 'a14630faea629db712fa54bc0ff249e6';
    try {
      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=Imperial&appid=${API_KEY}`
      );
      if (!response.ok) {
        throw new Error('City not found');
      }
      const data = await response.json();
      setWeatherData(data);
      setError(null);
    } catch (error) {
      console.error('Error fetching the weather data:', error);
      setError('Error fetching the weather data. Please try again.');
      setWeatherData(null);
    }
  };

  const debounce = (func, delay) => {
    let timeout;
    return (...args) => {
      clearTimeout(timeout);
      timeout = setTimeout(() => {
        func.apply(this, args);
      }, delay);
    };
  };

  const handleSearch = debounce((e) => {
    if (e.key === 'Enter') {
      getWeather();
    }
  }, 500);

  return (
    <div className="weather-container">
      <SearchBar city={city} setCity={setCity} handleSearch={handleSearch} />
      {error && <p className="error-message">{error}</p>}
      {weatherData && <WeatherDetails weatherData={weatherData} />}
    </div>
  );
};

export default Weather;
