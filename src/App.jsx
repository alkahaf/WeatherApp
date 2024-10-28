// src/App.jsx
import React from 'react';
import Weather from './components/Weather';
import CityWeather from './components/CityWeather';


const App = () => {
    return (
        <div className="App">
          hello
            <Weather />
          <CityWeather/>
        </div>
    );
};

export default App;
