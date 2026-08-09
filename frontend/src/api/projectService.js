import api from "./api";

export const getProjects = () => {
    return api.get("/projects");
};

export const addProject = (project) => {
    return api.post("/projects", project);
};

export const updateProject = (id, project) => {
    return api.put(`/projects/${id}`, project);
};

export const deleteProject = (id) => {
    return api.delete(`/projects/${id}`);
};