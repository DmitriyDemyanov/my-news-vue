import axios from "axios";

export default axios.create({
  baseURL: 'https://api.openweathermap.org/data/2.5/forecast',
  params: {
    appid: '4a181470a6cb181dfbf7ea732910d5c2'
  }
});