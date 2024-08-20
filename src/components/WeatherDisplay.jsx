import React, { useContext } from 'react';
import { WeatherContext } from './WeatherContext';

const WeatherDisplay = () => {
    const { weather, error } = useContext(WeatherContext);

    return (
        <div className="mt-8 text-center">
            {error && <p className="text-red-500">{error}</p>}
            {weather && (
                <div className="text-lg">
                    <p className="text-2xl font-semibold">
                        Temperature in {weather.name}: {weather.main.temp}°C
                    </p>
                    <p>{weather.weather[0].description}</p>
                </div>
            )}
        </div>
    );
};

export default WeatherDisplay;
