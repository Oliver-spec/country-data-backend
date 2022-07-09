import BasicInfo from "./BasicInfo";
import Languages from "./Languages";
import Image from "./Image";
import Map from "./Map";

export default function Detail({ country }) {
  return (
    <div>
      <BasicInfo country={country} />
      <Languages country={country} />
      <Image country={country} />
      <Map country={country} />
    </div>
  );
}
