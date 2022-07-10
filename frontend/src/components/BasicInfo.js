import Capitals from "./Capitals";

export default function BasicInfo({ country }) {
  console.log(country);

  let landlocked = "No";
  if (country.landlocked) {
    landlocked = "Yes";
  }

  return (
    <>
      <h1>{country.name.common}</h1>
      <Capitals country={country} />
      <p>
        Area: {country.area.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}{" "}
        km²
      </p>
      <p>Continents: {country.continents}</p>
      <p>Sub-region: {country.subregion}</p>
      <p>
        Population:{" "}
        {country.population.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
      </p>
      <p>Landlocked: {landlocked}</p>
    </>
  );
}
