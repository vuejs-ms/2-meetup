import axios from "axios";

let config = {
  baseURL: "https://playground.barato.com.br/desafio-front/api/"
  // timeout: 60 * 1000, // Timeout
  // withCredentials: true, // Check cross-site Access-Control
};

const axiosCreated = axios.create(config);

export default axiosCreated;
//export default Plugin;
