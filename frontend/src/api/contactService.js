import api from "./api";

export const sendMessage = (contact) => {
    return api.post("/contact", contact);
};