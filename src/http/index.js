import axios from "axios";

const $host = axios.create({
  baseURL: process.env.REACT_APP_BASE_URL || "http://localhost:3500/",
});

const $authHost = axios.create({
  baseURL: process.env.REACT_APP_BASE_URL || "http://localhost:3500/",
});

const authInterceptors = (config) => {
  config.headers.authorization = `Bearer ${localStorage.getItem("token")}`;
  return config;
};

$authHost.interceptors.request.use(authInterceptors);

export { $host, $authHost };


