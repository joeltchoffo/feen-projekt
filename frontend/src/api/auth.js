import axios from "axios";

//const BASE_URL = "http://localhost:8000/api"; // URL deines Django-Backends
const BASE_URL = import.meta.env.VITE_API_BASE_URL || "http://localhost:8000/api"; // Dynamische URL aus Umgebungsvariablen

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
