import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://newsapi.org/v2/top-headlines',
  params: {
    apiKey: '921c67a7cace41b9955b82352b983dce',
  }
});

export default instance;