const API_URL = import.meta.env.VITE_API_BASE_URL

export const ENDPOINTS = {
    auth: {
        login:`${API_URL}/login`,
        create: `${API_URL}/users`
    },
    users: {
        all: `${API_URL}/users`,
        me: `${API_URL}/users/me`,
    }

}