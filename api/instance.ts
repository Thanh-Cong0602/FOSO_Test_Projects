import { API_BASE_URL, API_BASE_URL_1, API_BASE_URL_2 } from "./endpoint";
import axios from "axios";

export const API = axios.create({
  baseURL: API_BASE_URL,
  headers: { "Content-Type": "application/json" },
});

export const API_1 = axios.create({
  baseURL: API_BASE_URL_1,
  headers: { "Content-Type": "application/json" },
});

export const API_2 = axios.create({
  baseURL: API_BASE_URL_2,
  headers: { "Content-Type": "application/json" },
});

