import axios from "axios";

const BASE_URL = "http://localhost:8000/api"; // URL deines Django-Backends

export const loginUser = async (username, password) => {
  const response = await axios.post(`${BASE_URL}/token/`, {
    username,
    password,
  });
  return response.data; // enthält access & refresh Token
};

export const registerUser = async (username, password) => {
  const response = await axios.post(`${BASE_URL}/register/`, {
    username,
    password,
  });
  return response.data;
};
