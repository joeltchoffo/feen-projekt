import { createAxiosWithAuth } from "./axiosInstance";

export const getScrolls = async (token) => {
  const axiosAuth = createAxiosWithAuth(token);
  const response = await axiosAuth.get("/scrolls/");
  return response.data; // z. B. [{ id, name, description, price }]
};

export const buyScroll = async (token, scrollName) => {
  const axiosAuth = createAxiosWithAuth(token);
  const response = await axiosAuth.post("/buy/", { name: scrollName });
  return response.data;
};
