import Currencies from "./Currencies";

export default function BasicInfo({ country }) {
  if (!country.capital) {
    country.capital = country.name.common;
  }

  return (
    <div>
      <h1>{country.name.common}</h1>
      <p>Capital: {country.capital}</p>
      <p>
        Area: {country.area.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}{" "}
        km²
      </p>
      <Currencies country={country} />
    </div>
  );
}
