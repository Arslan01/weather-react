import React, { createContext, useState } from 'react';


//78c1c5420707c81092c314cd239c293b
//https://api.openweathermap.org/data/2.5/weather?q={city name}&appid={API key}

export const WeatherContext = createContext();

export const WeatherProvider = ({ children }) => {
    const [weather, setWeather] = useState(null);
    const [error, setError] = useState(null);

    const getWeather = async (city) => {
        const apiKey = '78c1c5420707c81092c314cd239c293b'; 
        const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

        try {
            const response = await fetch(url);
            if (!response.ok) {
                throw new Error('Weather data not found');
            }
            const data = await response.json();
            setWeather(data);
            setError(null);
        } catch (error) {
            setError(error.message);
            setWeather(null);
        }
    };

    return (
        <WeatherContext.Provider value={{ weather, error, getWeather }}>
            {children}
        </WeatherContext.Provider>
    );
};
