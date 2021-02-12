import axios from 'axios';

export default axios.create({
  baseURL: process.env.REACT_APP_BASE_URL
});
console.log(process.env.REACT_APP_BASE_URL);
