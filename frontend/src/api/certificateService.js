import api from "./api";

export const getCertificates = () => {
    return api.get("/certificates");
};