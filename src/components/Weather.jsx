import React, { useState } from 'react';
import axios from 'axios';

const WeatherForecast = () => {
    const [lat, setLat] = useState('');
    const [lon, setLon] = useState('');
    const [forecast, setForecast] = useState([]);
    const [city, setCity] = useState('');
    const [state, setState] = useState('');
    const [error, setError] = useState('');

    const getForecast = async () => {
        const latitude = parseFloat(lat);
        const longitude = parseFloat(lon);

        if (latitude && longitude) {
            // Fetch weather forecast
            const url = `https://weatherbit-v1-mashape.p.rapidapi.com/forecast/daily?lat=${latitude}&lon=${longitude}&days=5&units=imperial&lang=en`;
            const options = {
                method: 'GET',
                headers: {
                    'x-rapidapi-key': '40d8c9195amsh063bb3622b42adap1c5d1fjsnabea9ca3239f', // Replace with your RapidAPI key
                    'x-rapidapi-host': 'weatherbit-v1-mashape.p.rapidapi.com'
                }
            };

            try {
                const weatherResponse = await axios.get(url, options);
                setForecast(weatherResponse.data.data);
                setError('');
                // Fetch city and state name
                await getCityState(latitude, longitude);
            } catch (error) {
                console.error(error);
                setError('Error fetching weather data.');
                setForecast([]);
                setCity('');
                setState('');
            }
        } else {
            setError('Please enter valid latitude and longitude.');
            setForecast([]);
            setCity('');
            setState('');
        }
    };

    // Function to fetch city and state name from coordinates
    const getCityState = async (latitude, longitude) => {
        const url = `https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${latitude}&longitude=${longitude}&localityLanguage=en`;
        
        try {
            const response = await axios.get(url);
            setCity(response.data.city || '');
            setState(response.data.principalSubdivision || '');
        } catch (error) {
            console.error('Error fetching city/state:', error);
            setCity('');
            setState('');
        }
    };

    // Function to format the date to dd/mm/yyyy
    const formatDate = (dateString) => {
        const date = new Date(dateString);
        const day = String(date.getDate()).padStart(2, '0');
        const month = String(date.getMonth() + 1).padStart(2, '0'); // Months are 0-based
        const year = date.getFullYear();
        return `${day}/${month}/${year}`;
    };

    return (
        <div>
            <h1>5-Day Weather Forecast</h1>
            <div>
                <input
                    type="number"
                    placeholder="Latitude"
                    value={lat}
                    onChange={(e) => setLat(e.target.value)}
                    required
                />
                <input
                    type="number"
                    placeholder="Longitude"
                    value={lon}
                    onChange={(e) => setLon(e.target.value)}
                    required
                />
                <button onClick={getForecast}>Get Forecast</button>
            </div>

            {error && <p style={{ color: 'red' }}>{error}</p>}
            {city && state && <h2>{city}, {state}</h2>}
            <div className="forecast">
                {forecast.map((day, index) => (
                    <div key={index} className="forecast-day">
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

export default WeatherForecast;
