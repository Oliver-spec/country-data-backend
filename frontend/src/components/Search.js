export default function Search({ filterCountries, searchByCountryCode }) {
  return (
    <>
      <p>Find Countries</p>
      <p>
        <input onChange={filterCountries} />
      </p>
      <p>Find Countries by Country Code</p>
      <p>
        + <input onChange={searchByCountryCode} />
      </p>
    </>
  );
}
