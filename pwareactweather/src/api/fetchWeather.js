import { queryAllByAltText } from "@testing-library/react";
import axios from "axios";

const URL = "https://api.openweathermap.org/data/2.5/weather";
const API_KEY = "3b5a3e331f6c41bd24d3736036cbacfd";

const fetchWeather = async (town) => {
    console.log("fetchWeather...");
    const {data} = await axios.get(URL, {
        params: {
            q: town,
            units: "metric",
            APPID: API_KEY
        }
    });
    return data;
}

export default fetchWeather;