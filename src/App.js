import React, { useState } from 'react';

// Sample weather data for demonstration
const weatherData = {
  "New York": {
    temperature: '15°C',
    condition: 'Cloudy',
    humidity: '80%',
  },
  "Los Angeles": {
    temperature: '22°C',
    condition: 'Sunny',
    humidity: '40%',
  },
  "London": {
    temperature: '10°C',
    condition: 'Rainy',
    humidity: '70%',
  },
  // Add more cities here if needed
};

const App = () => {
  const [city, setCity] = useState('');  // State to store the city name
  const [weather, setWeather] = useState(null);  // State to store the weather data for the city

  const handleSearch = () => {
    // Check if the city exists in the weather data
    if (weatherData[city]) {
      setWeather(weatherData[city]);
    } else {
      setWeather(null);  // Clear weather data if the city is not found
    }
  };

  return (
    <div>
      <h1>Weather Search</h1>

      {/* Search bar */}
      <input
        type="text"
        placeholder="Enter city name"
        value={city}
        onChange={(e) => setCity(e.target.value)}  // Update the city state on input change
      />
      <button onClick={handleSearch}>Search</button>

      {/* Display weather data */}
      {weather ? (
        <div>
          <h2>{city}</h2>
          <p>Temperature: {weather.temperature}</p>
          <p>Condition: {weather.condition}</p>
          <p>Humidity: {weather.humidity}</p>
        </div>
      ) : (
        city && <p>No weather data available for {city}</p> // Show message if no data for city
      )}
    </div>
  );
};

export default App;
