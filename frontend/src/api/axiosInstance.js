import axios from "axios";

const BASE_URL = "http://localhost:8000/api";

export const createAxiosWithAuth = (token) => {
  return axios.create({
    baseURL: BASE_URL,
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
};
