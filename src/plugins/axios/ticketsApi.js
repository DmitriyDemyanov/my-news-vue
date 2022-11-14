import axios from "axios";

export default axios.create({
  baseURL: 'https://aviasales-api.herokuapp.com/prices/cheap',
});