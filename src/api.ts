import axios from "axios";

export const api = axios.create({
  baseURL: "http://192.168.0.112:3000/",
  headers: { "Content-Type": "application/json" },
});


api.interceptors.request.use(function (config) {
  return config;
}, function (error) {
  return Promise.reject(error);
});

api.interceptors.response.use(function (config) {
  return config;
}, function (error) {
  return Promise.reject(error);
});