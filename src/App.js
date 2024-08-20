import { useState } from "react";
import WeatherCard from "./components/WeatherCard";

import { WeatherProvider } from './components/WeatherContext';
import WeatherInput from './components/WeatherInput';
import WeatherDisplay from './components/WeatherDisplay';

function App() {  
  return (
    <WeatherProvider>
      <div className="flex flex-col items-center justify-center h-screen bg-gradient-to-r from-blue-500 to-indigo-500 text-white">
          <h1 className="text-4xl font-bold mb-8">Weather App</h1>
          <WeatherInput />
          <WeatherDisplay />
      </div>
    </WeatherProvider>

    // <div className="App flex flex-col items-center justify-center mt-16">
    //   <h1 className="text-3xl font-bold">Weather App</h1>
    //  { <WeatherCard/> }
    // </div>
  );
}


export default App;

