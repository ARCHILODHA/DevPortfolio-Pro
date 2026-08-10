import api from "./api";

export const getSkills = () => {
  return api.get("/skills");
};