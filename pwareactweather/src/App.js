import React, { useState } from "react";
import fetchWeather from "./api/fetchWeather";
import "./App.css";

const App = () => {

    const [query, setQuery] = useState("");
    const [weather, setWeather] = useState({});

    let inputRef = React.createRef();

    const search = async (event) => {
        if (event.key === "Enter") {
            const data = await fetchWeather(inputRef.current.value);
            console.log(data);
            setWeather(data);
           // inputRef.current.value = "";
        }
    };
    return (
        <div className="main-container">
            <input
                ref={inputRef}
                type="text"
                className="search"
                placeholder="Search..."
                onKeyPress={search} />
            {weather && weather.main && (
                <div className="city">
                    <div className="city-name">
                        <span>{weather.name}</span>
                        <sup>{weather.sys.country}</sup>
                    </div>
                    <div className="city-temp">{Math.round(weather.main.temp)}<sup>&deg;C</sup></div>
                    <div className="info">
                        <img className="city-icon" src={`https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`} alt={weather.weather[0].description}/>
                        <p>{weather.weather[0].description}</p>
                    </div>
                </div>
            )}
        </div>
    );
}

export default App;