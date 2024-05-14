import { useState } from "react";
import SearchBar from "./Components/SearchBar.js";

export default function WeatherApp(props) {
  const [welcomeMsg, setWelcomeMsg] = useState(true);
  const [stepOne, setStepOne] = useState(false);
  const [stepTwo, setStepTwo] = useState(false);
  const [setpThree, setStepThree] = useState(false);
  const [searchText, setSearchText] = useState("");
  const [weatherData, setWeatherData] = useState({});
  const [unit, setUnit] = useState("imperial");
  const [sError, setSError] = useState("");
  const apikey = "f998ad2aa43709e5fa12226d248127d7";

  function onAnimationStart() {
    setWelcomeMsg(false);
    setStepOne(true);
    setStepTwo(true);
  }

  function cityName(text) {
    setSearchText(text);
    setStepOne(false);
    setStepTwo(false);
    setStepThree(true);
    setSError("");

    fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${text}&units=${unit}&appid=${apikey}`
    )
      .then((res) => {
        if (!res.ok) {
          throw new Error("Network response was not ok");
        }
        return res.json();
      })
      .then((data) => {
        setWeatherData({
          name: data.name,
          background: data.weather[0].main,
          weather: data.weather[0].description,
          temp: Math.round(data.main.temp),
          icon: data.weather[0].icon,
        });
        props.background(data.weather[0].main);
        console.log(data.weather[0].main);
        setSError("");
      })
      .catch((error) => {
        setStepThree(false);
        setSError("Something went wrong. Please try again.");
        console.error("Error fetching data:", error);
      });
  }

  return (
    <div className="center">
      {welcomeMsg && (
        <div className="welometext" onAnimationEnd={onAnimationStart}>
          <img
            className="stick-man-hi"
            src="./Images/Stick-Man.png"
            alt="stick_man_image"
          />
          Hello, Welcome To My Weather App.
        </div>
      )}

      {stepOne && (
        <div className="step-text">
          Check Your City Weather Here
          {stepTwo && (
            <div className="input-box">
              <SearchBar handleChange={cityName} />
            </div>
          )}
        </div>
      )}

      {setpThree && (
        <>
          <div
            className="back-button"
            onClick={() => {
              setStepOne(true);
              setStepTwo(true);
              setStepThree(false);
              props.background("");
            }}
          >
            <ion-icon name="arrow-back-circle"></ion-icon>
          </div>
          <div className="unit-position">
            <ul className="slider-top">
              <li className="slider">Celsius</li>
              <li className="slider">
                <div
                  className={
                    unit === "metric" ? "unit ball-start" : "unit ball-end"
                  }
                  onClick={() => {
                    setUnit((prevunit) =>
                      prevunit === "metric" ? "imperial" : "metric"
                    );
                    cityName(searchText);
                  }}
                >
                  <div className="ball"></div>
                </div>
              </li>
              <li className="slider">Fahrenheit</li>
            </ul>
          </div>
          <div className="weather-report">
            <h1 className="temp">
              {weatherData.temp}
              <span className="super">
                {unit === "metric" ? <sup>°C</sup> : <sup>°F</sup>}
              </span>
            </h1>
            <h2 className="sky-condition">{weatherData.weather}</h2>
            <h3 className="place">{searchText}</h3>
          </div>
        </>
      )}

      {sError !== "" && (
        <>
          <div
            className="back-button"
            onClick={() => {
              setStepOne(true);
              setStepTwo(true);
              setStepThree(false);
              props.background("");
              setSError("");
            }}
          >
            <ion-icon name="arrow-back-circle"></ion-icon>
          </div>
          <div className="error">
            <h1>Something went wrong</h1>
            <ul className="may-be">
              <li>
                <strong>May be:</strong>
              </li>
              <li>Bad Network</li>
              <li>City that Doesn't Exits </li>
            </ul>
          </div>
        </>
      )}
    </div>
  );
}
