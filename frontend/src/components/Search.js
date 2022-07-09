export default function Search({ filterCountries }) {
  return (
    <div>
      <p>Find Countries</p>
      <p>
        <input onChange={filterCountries} />
      </p>
    </div>
  );
}
