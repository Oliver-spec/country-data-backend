import axios from "axios";

const URL = "https://restcountries.com/v3.1/all";

export default function getAll() {
  return axios.get(URL).then((response) => response.data);
}
