import { createAxiosWithAuth } from "./axiosInstance";

export const getMissions = async (token) => {
  const axiosAuth = createAxiosWithAuth(token);
  const response = await axiosAuth.get("/missions/");
  return response.data;
};

export const verifyMission = async (token, level, mission, sql) => {
  const axiosAuth = createAxiosWithAuth(token);
  const response = await axiosAuth.post(`/mission/${level}/${mission}/`, { sql });

  /*
  const response = await axiosAuth.post("/missions/verify/", {
    level,
    mission,
    sql,
  });
  */
  return response.data; // z. B. { success: true, message: "Du hast die Fee befreit!" }
};
