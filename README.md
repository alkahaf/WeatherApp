
---

# Weather Forecast App

This application provides a 5-day weather forecast based on user-inputted latitude and longitude coordinates. It uses the Weatherbit API to fetch weather data and the BigDataCloud API to determine the city and state corresponding to the coordinates. 

## Features

- **5-Day Weather Forecast**: Displays the temperature, weather description, humidity, and wind speed.
- **Location Lookup**: Converts latitude and longitude to a city and state for better readability.
- **Date Formatting**: Dates are formatted as `dd/mm/yyyy` for ease of understanding.

## How It Works

1. **Enter Coordinates**: The user inputs the latitude and longitude.
2. **Fetch Weather Data**: The app requests a 5-day weather forecast from the Weatherbit API.
3. **Display Forecast**: The app shows weather details (temperature, description, humidity, and wind speed) for each day.
4. **Convert Coordinates to Location**: The app retrieves city and state names based on the coordinates using the BigDataCloud API.



---

## Technologies Used

- ⚛️ **React**: Frontend framework for building the UI.
- 📡 **Axios**: Used for making HTTP requests.
- 🌦️ **Weatherbit API**: Provides 5-day weather forecasts.
- 🗺️ **BigDataCloud API**: Used for reverse geocoding to get city and state names.
- ⚡ **Vite**: Bundler and dev server for faster builds and local development.

---



## Prerequisites

To run this app, you need:
- Node.js and npm installed on your machine.
- An API key from [RapidAPI](https://rapidapi.com) for the Weatherbit API (used for weather forecast data).
- Replace the placeholder API key in the code with your actual RapidAPI key.

## Installation and Setup

1. **Clone the Repository**:
   ```bash
   git clone https://github.com/your-username/weather-forecast-app.git
   cd weather-forecast-app
   ```

2. **Install Dependencies**:
   ```bash
   npm install
   ```

3. **Replace API Key**:
   In `WeatherForecast.js`, replace the `'x-rapidapi-key'` value with your own RapidAPI key:
   ```javascript
   'x-rapidapi-key': 'your-rapidapi-key'
   ```

4. **Run the App** using Vite:
   ```bash
   npm run dev
   ```
   The app will be available on `http://localhost:5173` (or as specified by Vite).

5. **Build the App** using Vite:
   To create a production build of the app, run:
   ```bash
   npm run build
   ```

   This will create optimized assets in the `dist` folder.

## Usage

1. Enter latitude and longitude values in the input fields.
2. Click **Get Forecast** to retrieve and display the 5-day weather forecast.
3. The city and state corresponding to the entered coordinates will appear above the forecast data.

## Code Overview

The app consists of the following main sections:

1. **State Management**: Manages user inputs (`lat`, `lon`), forecast data (`forecast`), location (`city`, `state`), and error messages (`error`).
2. **API Request Functions**:
   - `getForecast`: Fetches weather data for the provided coordinates.
   - `getCityState`: Uses reverse geocoding to find the city and state based on coordinates.
3. **Formatting Function**:
   - `formatDate`: Formats date strings to `dd/mm/yyyy`.

## Example

Here’s an example forecast display for New York, NY:

```
New York, New York
----------------------------------------
Date: 25/10/2023
Temperature: 65 °F
Weather: Partly Cloudy
Humidity: 70 %
Wind Speed: 5 mph
...
```

## License

This project is open-source. Feel free to modify and use it in your own projects.

---

This version now includes details about using Vite to run and build the project.
