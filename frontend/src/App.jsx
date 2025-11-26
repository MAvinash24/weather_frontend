import { useState } from "react";
import axios from "axios";
import WeatherCard from "./components/WeatherCard";
import SearchBar from "./components/SearchBar";
import "./styles/weather.css";

function App() {
  const [weather, setWeather] = useState(null);
  const [loading, setLoading] = useState(false);

  const API = import.meta.env.VITE_BACKEND_URL || "";

  const fetchWeather = async (city) => {
    try {
      setLoading(true);

      const url = `${API}/api/weather?city=${city}`; // ✅ Correct

      const res = await axios.get(url);
      setWeather(res.data.data);
    } catch (err) {
      console.error(err);
      alert("City not found or server error");
    } finally {
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
