import { useState, useEffect } from "react";
import Search from "./components/Search";
import Names from "./components/Names";
import TooMany from "./components/TooMany";
import Detail from "./components/Detail";
import Weather from "./components/Weather";
import api from "./services/api";

export default function App() {
  // states
  const [countries, setCountries] = useState([]);
  const [displayedCountries, setDisplayedCountries] = useState([]);

  // effects
  useEffect(() => {
    api.getAll().then((response) => {
      setCountries(response);
    });
  }, []);

  // event handlers
  function filterCountries(event) {
    const filtered = countries.filter((country) =>
      country.name.common
        .toLowerCase()
        .includes(event.target.value.toLowerCase())
    );
    setDisplayedCountries(filtered);
  }

  if (displayedCountries.length > 10) {
    return (
      <div>
        <Search filterCountries={filterCountries} />
        <TooMany />
      </div>
    );
  } else if (displayedCountries.length === 1) {
    return (
      <div>
        <Search filterCountries={filterCountries} />
        <Detail country={displayedCountries[0]} />
        <Weather country={displayedCountries[0]} />
      </div>
    );
  } else {
    return (
      <div>
        <Search filterCountries={filterCountries} />
        <Names
          displayedCountries={displayedCountries}
          setDisplayedCountries={setDisplayedCountries}
        />
      </div>
    );
  }
}
