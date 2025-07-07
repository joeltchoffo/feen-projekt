import { createAxiosWithAuth } from "./axiosInstance";

export const getPlayerProgress = async (token) => {
  const axiosAuth = createAxiosWithAuth(token);
  const response = await axiosAuth.get("/progress/");
  return response.data;
};
