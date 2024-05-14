import { useState } from "react";
import WeatherApp from "./WeatherApp";

function App() {
  const [background, setBackground] = useState("");

  function changeBackground(res) {
    setBackground(res);
  }

  return (
    <div
      className={
        background === "Clouds"
          ? "App bg-cloudy"
          : background === "Clear"
          ? "App bg-clear"
          : background === "Rain"
          ? "App bg-rain"
          : background === "Thunderstorm"
          ? "App bg-thunder"
          : background === "Drizzle"
          ? "App bg-drizzle"
          : background === "Haze" ||
            background === "smoke" ||
            background === "mist"
          ? "App bg-haze"
          : "App"
      }
    >
      <div className="logo-box">
        <img src="./Images/weather-app-logo.png" alt="logo" />
        My Weather App
      </div>
      <WeatherApp background={changeBackground} />
    </div>
  );
}

export default App;
