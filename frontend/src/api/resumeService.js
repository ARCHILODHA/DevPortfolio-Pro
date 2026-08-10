import api from "./api";

export const downloadResume = async () => {

    const response = await api.get("/resume/download", {
        responseType: "blob"
    });

    return response;
};