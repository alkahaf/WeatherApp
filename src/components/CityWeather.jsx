import React, { useState } from 'react';
import axios from 'axios';
import './CityWeather.css';

const CityWeather = () => {
    const [forecast, setForecast] = useState([]);
    const [city, setCity] = useState('');
    const [state, setState] = useState('');
    const [error, setError] = useState('');

    const getForecast = async (latitude, longitude, cityName, stateName) => {
        const url = `https://weatherbit-v1-mashape.p.rapidapi.com/forecast/daily?lat=${latitude}&lon=${longitude}&days=5&units=imperial&lang=en`;
        const options = {
            method: 'GET',
            headers: {
                'x-rapidapi-key': '40d8c9195amsh063bb3622b42adap1c5d1fjsnabea9ca3239f',
                'x-rapidapi-host': 'weatherbit-v1-mashape.p.rapidapi.com'
            }
        };

        try {
            const weatherResponse = await axios.get(url, options);
            setForecast(weatherResponse.data.data);
            setError('');
            setCity(cityName);
            setState(stateName);
        } catch (error) {
            console.error(error);
            setError('Error fetching weather data.');
            setForecast([]);
            setCity('');
            setState('');
        }
    };

    const formatDate = (dateString) => {
        const date = new Date(dateString);
        const day = String(date.getDate()).padStart(2, '0');
        const month = String(date.getMonth() + 1).padStart(2, '0');
        const year = date.getFullYear();
        return `${day}/${month}/${year}`;
    };

    return (
        <div>
            <h1>5-Day Weather Forecast of City</h1>
            <div>
                <button onClick={() => getForecast(22.3072, 73.1812, 'Vadodara', 'Gujarat')}>
                    Vadodara 
                </button>
                <button onClick={() => getForecast(42.3149, -83.0364, 'Windsor', 'Ontario')}>
                    Windsor 
                </button>
            </div>

            {error && <p style={{ color: 'red' }}>{error}</p>}
            {city && state && <h2>{city}, {state}</h2>}
            <div className="forecast-row">
                {forecast.map((day, index) => (
                    <div key={index} className="forecast-card">
                        <h3>{formatDate(day.valid_date)}</h3>
                        <p>Temperature: {day.temp} °F</p>
                        <p>Weather: {day.weather.description}</p>
                        <p>Humidity: {day.rh} %</p>
                        <p>Wind Speed: {day.wind_spd} mph</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default CityWeather;
