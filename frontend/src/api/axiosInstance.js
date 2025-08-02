import axios from "axios";

//const BASE_URL = "http://localhost:8000/api";
const BASE_URL = import.meta.env.VITE_API_BASE_URL || "http://localhost:8000/api";

export const createAxiosWithAuth = (token) => {
  return axios.create({
    baseURL: BASE_URL,
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
};
