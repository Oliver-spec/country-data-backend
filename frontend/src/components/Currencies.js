export default function Currencies({ country }) {
  return (
    <>
      <h3>Currencies:</h3>
      <ul>
        {Object.entries(country.currencies).map((currency, index) => {
          return (
            <li key={index}>
              {currency[1].name} ({currency[1].symbol})
            </li>
          );
        })}
      </ul>
    </>
  );
}
