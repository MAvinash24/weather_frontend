function WeatherCard({ data }) {
  return (
    <div className="weather-card">
      <h2 className="city">{data.city.toUpperCase()}</h2>
      <img
        src={`https://openweathermap.org/img/wn/${data.icon}@2x.png`}
        alt="weather icon"
      />

      <h1 className="temp">{data.temperature}°C</h1>

      <p className="condition">{data.condition}</p>

      <div className="details">
        <p>Humidity: {data.humidity}%</p>
        <p>Wind: {data.windSpeed} m/s</p>
      </div>

      <p className="date">Date: {data.date}</p>
    </div>
  );
}

export default WeatherCard;
