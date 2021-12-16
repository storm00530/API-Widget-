import $ from "./http";

const getLeagues = () => {
  return $.get("/api/Schedule");
};

const getGameById = (id) => {
  return $.get(`/api/Games/${id}`);
};

const getTeamById = (id) => {
  return $.get(`/api/Teams/${id}`);
};

export const api = {
  getLeagues,
  getGameById,
  getTeamById,
};
