import React, { useState, useContext } from 'react';
import { WeatherContext } from './WeatherContext';

const WeatherInput = () => {
    const [city, setCity] = useState('');
    const { getWeather } = useContext(WeatherContext);

    const handleSearch = () => {
        if (city.trim()) {
            getWeather(city);
        }
    };

    return (
        <div className="flex items-center justify-center mt-8">
            <input
                type="text"
                value={city}
                onChange={(e) => setCity(e.target.value)}
                placeholder="Enter city name"
                className="p-3 rounded-md text-black outline-none focus:ring-2 focus:ring-indigo-300"
            />
            <button
                onClick={handleSearch}
                className="p-3 ml-4 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-300"
            >
                Get Weather
            </button>
        </div>
    );
};

export default WeatherInput;
