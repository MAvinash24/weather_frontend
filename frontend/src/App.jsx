import { useState } from "react";
import axios from "axios";
import WeatherCard from "./components/WeatherCard";
import SearchBar from "./components/SearchBar";
import "./styles/weather.css";

function App() {
  const [weather, setWeather] = useState(null);
  const [loading, setLoading] = useState(false);

  const fetchWeather = async (city) => {
    try {
      setLoading(true);
      const response = await axios.get(
        `/api/weather?city=${city}`
      );
      setWeather(response.data.data);
      setLoading(false);
    } catch (error) {
      console.error(error);
      alert("City not found or server error");
      setLoading(false);
    }
  };

  return (
    <div className="app-container">
      <SearchBar fetchWeather={fetchWeather} />

      {loading && <p className="loading">Fetching weather...</p>}

      {weather && <WeatherCard data={weather} />}
    </div>
  );
}

export default App;
