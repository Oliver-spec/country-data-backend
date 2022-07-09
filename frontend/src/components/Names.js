export default function Names({ displayedCountries, setDisplayedCountries }) {
  return (
    <div>
      {displayedCountries.map((country) => {
        if (!country.capital) {
          country.capital = country.name.common;
        }

        return (
          <div key={country.name.common}>
            <h3>
              {country.name.common} {country.flag}
            </h3>
            <p>Continents: {country.continents}</p>
            <p>Capital: {country.capital}</p>
            <p>
              Population:{" "}
              {country.population
                .toString()
                .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
            </p>
            <button onClick={() => setDisplayedCountries([country])}>
              More
            </button>
          </div>
        );
      })}
    </div>
  );
}
