import { useState } from "react";
import cityData from "../cityData.js";

export default function SearchBar(props) {
  const [input, setInput] = useState("");

  const [suggestions, setSuggestions] = useState([]);

  // const googleAPIKey = "AIzaSyCV4PKslBFc1XUrEKOvVXH2yHzKbnG1hSI";

  function handleChange(value) {
    setInput(value);
    if (input === "") {
      setSuggestions([]);
      return;
    }

    const citiesStartingLetter = cityData[input.charAt(0).toUpperCase()];
    const filteredCities = citiesStartingLetter.filter((city) =>
      city.toLowerCase().startsWith(input)
    );
    setSuggestions(filteredCities.slice(0, 5));
    // console.log("running");
  }

  function apiText() {
    props.handleChange(input);
  }

  return (
    <>
      <div className="search-box">
        <input
          type="text"
          placeholder="Enter Your City "
          value={input}
          onChange={(e) => handleChange(e.target.value.trim().toLowerCase())}
        />

        <button type="submit" onClick={apiText}>
          Find My Weather{" "}
        </button>
      </div>

      <div className="search-result">
        {input !== "" && suggestions.length > 0 && (
          <ul>
            {suggestions.map((city) => (
              <li
                key={city}
                onClick={() => {
                  setInput(city);
                  setSuggestions([]);
                }}
              >
                {city}
                <hr />
              </li>
            ))}
          </ul>
        )}
      </div>
    </>
  );
}
